import React, { useEffect, useState} from 'react';
import NavBar from './components/navbar';
import Cabinet from './components/cabinet';
import MainBodyContent from './components/mainBodyContent';
import Deadlinelist from './components/deadlinelist';
import UserModal from './modals/userListModals';
import User  from './model';
import 'bootstrap/dist/css/bootstrap.min.css';
import QRModal from './components/qrmodal';
import { parseQRCode } from './components/utils';
import {read, write, add} from './localstorageutil';
import { useSearchParams } from 'react-router-dom';

const CurNav = {
  Table: 0,
  Deadlines: 1,
  Cabinet: 2,
}

function App(props) {
  const [user, setUser] = useState(new User());
  const [userindex, setUserIndex] = useState(null);
  const [curNav, setCurNav] = useState(CurNav.Table);
  const [showqrbool, setShowqrbool] = useState(false);
  const [data, setData] = useSearchParams();
  if (data.get('data') !== null) {
    const user = parseQRCode(data.get('data'));
    if (user !== null && user.name) {
      if (read().findIndex(u => u.name === user.name) === -1) {
        add(user);
      } else {
        alert('Пользователь с таким именем уже существует');
      }
      setData(new URLSearchParams());
    }
  }
  const showQRModal = () => setShowqrbool(true);



  return (  
    <div className="App">
      <UserModal usernames={read().map((user) => user.name)} setuser={setUser} setUserIndex={setUserIndex} />
      {showqrbool && <QRModal setshow={setShowqrbool} onHide={() => setShowqrbool(false)} />}
      <NavBar user={user} setCurNav={setCurNav} />
      {curNav === CurNav.Table && <MainBodyContent user={user} deadlines={user.deadlines} userindex={userindex} />}
      {curNav === CurNav.Deadlines && <Deadlinelist deadlines={user.deadlines}/>}
      {curNav === CurNav.Cabinet && <Cabinet user={user}/>}
      <div class="footer">
        <button class="btn btn-outline-primary" onClick={showQRModal}>Импорт/Экспорт</button>
        <button class="btn btn-outline-primary" onClick={() => {window.location.reload()}}>Выйти</button>
      </div> 
    </div>
  );
}

export default App;

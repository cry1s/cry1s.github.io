import React, { useEffect, useState} from 'react';
import NavBar from './components/navbar';
import Cabinet from './components/cabinet';
import MainBodyContent from './components/mainBodyContent';
import Deadlinelist from './components/deadlinelist';
import UserModal from './modals/userListModals';
import User  from './model';
import 'bootstrap/dist/css/bootstrap.min.css';
import QRModal from './modals/qrmodal';
import { parseURL } from './utils';
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
    const user = parseURL(data.get('data'));
    data.set('data', '');
    window.history.replaceState(null, null, window.location.pathname);
    console.log(user);
    if (user !== null && user.name) {
      if (read().findIndex(u => u.name === user.name) === -1) {
        add(user);
      }
    }
  }
  const showQRModal = () => setShowqrbool(true);

  return (  
    <div className="App">
      <UserModal usernames={read().map((user) => user.name)} setuser={setUser} setUserIndex={setUserIndex} />
      {showqrbool && <QRModal userindex={userindex} setshow={setShowqrbool} onHide={() => setShowqrbool(false)} />}
      <NavBar user={user} setCurNav={setCurNav} />
      {curNav === CurNav.Table && <MainBodyContent user={user} deadlines={user.deadlines} userindex={userindex} setuser={setUser}/>}
      {curNav === CurNav.Deadlines && <Deadlinelist deadlines={user.deadlines}/>}
      {curNav === CurNav.Cabinet && <Cabinet user={user} userindex={userindex} setuser={setUser}/>}
      <div class="footer m">
        <div class="row justify-content-between mx-2">
          <div class="col-auto">
            <button class="btn btn-outline-primary" onClick={showQRModal}>Импорт/Экспорт</button>
          </div>
          <div class="col-auto">
          <button class="btn btn-outline-danger" onClick={() => {window.location.reload()}}>Выйти</button>
        </div> 
        </div>
      </div> 
    </div>  
  );
}

export default App;

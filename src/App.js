import React, { useEffect } from 'react';
import NavBar from './components/navbar';
import Cabinet from './components/cabinet';
import MainBodyContent from './components/mainBodyContent';
import Deadlinelist from './components/deadlinelist';
import UserModal from './modals/userListModals';
import PasswordModal from './modals/passwordModals';
import AddSubject from './modals/addsubjectModals';
import User  from './model';
import 'bootstrap/dist/css/bootstrap.min.css';
import QRModal from './components/qrmodal';
import { parseQRCode } from './components/utils';
import {read, write, add} from './localstorageutil';

const CurNav = {
  Table: 0,
  Deadlines: 1,
  Cabinet: 2,
}

function App() {
  const [user, setUser] = React.useState(new User());
  const [userindex, setUserIndex] = React.useState(0);
  const [curNav, setCurNav] = React.useState(CurNav.Table);
  const [showqrbool, setShowqrbool] = React.useState(false);
  const showQRModal = () => setShowqrbool(true);
  
  useEffect(() => {
    const users = read();
  }, []);

  return (  
    <div className="App">
      <UserModal usernames={read().map((user) => user.name)} user={user} setUser={setUser} />
      {showqrbool && <QRModal setshow={setShowqrbool} onHide={() => setShowqrbool(false)} />}
      <NavBar user={user} setCurNav={setCurNav} />
      {curNav === CurNav.Table && <MainBodyContent user={user} deadlines={user.deadlines}/>}
      {curNav === CurNav.Deadlines && <Deadlinelist deadlines={user.deadlines}/>}
      {curNav === CurNav.Cabinet && <Cabinet user={user}/>}
      <div class="footer">
        <button class="btn btn-outline-primary" onClick={showQRModal}>Импорт/Экспорт</button>
      </div> 
    </div>
  );
}

export default App;

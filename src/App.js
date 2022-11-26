import React from 'react';
import NavBar from './components/navbar';
import Cabinet from './components/cabinet';
import MainBodyContent from './components/mainBodyContent';
import Deadlinelist from './components/deadlinelist';
import UserModal from './modals/userListModals';
import PasswordModal from './modals/passwordModals';
//import DeadlinesModal from './modals/deadlinesModals';
import AddSubject from './modals/addsubjectModals';
import User  from './model';
import 'bootstrap/dist/css/bootstrap.min.css';
import QRModal from './components/qrmodal';
import { parseQRCode } from './components/utils';

const CurNav = {
  Table: 0,
  Deadlines: 1,
  Cabinet: 2,
}

function App() {
  const users = JSON.parse(localStorage.getItem('users'));
  if (users === null) {
    localStorage.setItem('users', JSON.stringify([]));
  }
  if (users.length === 0) {
    users.push(new User());
    localStorage.setItem('users', JSON.stringify(users));
  }
  const [user, setUser] = React.useState(new User());
  const [curNav, setCurNav] = React.useState(CurNav.Table);
  const [showqrbool, setShowqrbool] = React.useState(false);
  const showQRModal = () => {
    setShowqrbool(true);
  }
  // if data param setted
  const url = new URL(window.location.href);
  const data = url.searchParams.get('data');
  if (data) {
    const json = parseQRCode(url);
    if (json) {
      const localusers = localStorage.getItem('users')
      const users = localusers ? JSON.parse(localusers) : [];
      users.push(json);
      localStorage.setItem('users', JSON.stringify(users));
    }
  }
  return (  
    <div className="App">
      <UserModal usernames={
        JSON.parse(localStorage.getItem('users')).map((user) => user.name)
      } user={user} setUser={setUser} />
      {showqrbool && <QRModal setshow={setShowqrbool} onHide={() => setShowqrbool(false)} />}
      <NavBar user={user} setCurNav={setCurNav} />
      {curNav === CurNav.Table && <MainBodyContent user={user}/>}
      {curNav === CurNav.Deadlines && <Deadlinelist deadlines={user.deadlines}/>}
      {curNav === CurNav.Cabinet && <Cabinet user={user}/>}
      <div class="footer">
        <button class="btn btn-outline-primary" onClick={showQRModal}>Импорт/Экспорт</button>
      </div> 
    </div>
  );
}

export default App;

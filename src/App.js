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
import Footer from './components/footer';
import QRModal from './components/qrmodal';

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
  const [user, setUser] = React.useState(new User());
  const [curNav, setCurNav] = React.useState(CurNav.Table);
  const [showqrbool, setShowqrbool] = React.useState(false);
  const showQRModal = () => setShowqrbool(true);

  return (
    <div className="App">
      <UserModal />
      <QRModal user={user} show={showqrbool} />
      {/* <UserModals />
      <PasswordModal />
      <AddSubject /> */}
      <NavBar user={user} setCurNav={setCurNav} />
      {curNav === CurNav.Table && <MainBodyContent user={user}/>}
      {curNav === CurNav.Deadlines && <Deadlinelist deadlines={user.deadlines}/>}
      {curNav === CurNav.Cabinet && <Cabinet user={user}/>}
      <div class="footer">
        <button class="btn btn-outline-primary" onclick={showQRModal}>Импорт/Экспорт</button>
      </div> 
    </div>
  );
}

export default App;

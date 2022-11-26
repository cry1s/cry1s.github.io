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
  return (
    <div className="App">
      <UserModal />
      {/* <UserModals />
      <PasswordModal />
      <AddSubject /> */}
      <NavBar user={user}/>
      {curNav === CurNav.Table && <MainBodyContent days={[
        "РџРѕРЅРµРґРµР»СЊРЅРёРє",
        "Р’С‚РѕСЂРЅРёРє",
        "РЎСЂРµРґР°",
        "Р§РµС‚РІРµСЂРі",
        "РџСЏС‚РЅРёС†Р°",
        "РЎСѓР±Р±РѕС‚Р°",
        "Р’РѕСЃРєСЂРµСЃРµРЅСЊРµ"
      ]} user={user}/>}
      {curNav === CurNav.Deadlines && <Deadlinelist deadlines={user.deadlines}/>}
      {curNav === CurNav.Cabinet && <Cabinet user={user}/>}
    </div>
  );
}

export default App;

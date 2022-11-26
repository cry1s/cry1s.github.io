import React from 'react';
import NavBar from './components/navbar';
import Cabinet from './components/cabinet';
import MainBodyContent from './components/mainBodyContent';
import Deadlinelist from './components/deadlinelist';
import UserModals from './modals/userList';
import User  from './model';

const CurNav = {
  Table: 0,
  Deadlines: 1,
  Cabinet: 2,
}

function App() {
  const users = JSON.parse(localStorage.getItem('users'));
  const showModalUserList = !(users === null || users.length === 0);
  if (users === null) {
    localStorage.setItem('users', JSON.stringify([]));
  }
  const [user, setUser] = React.useState(new User());
  const [curNav, setCurNav] = React.useState(CurNav.Table);
  return (
    <div className="App">
      {showModalUserList && <UserModals />}
      <NavBar user={user}/>
      {curNav === CurNav.Table && <MainBodyContent days={[
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота",
        "Воскресенье"
      ]} user={user}/>}
      {curNav === CurNav.Deadlines && <Deadlinelist deadlines={user.deadlines}/>}
      {curNav === CurNav.Cabinet && <Cabinet user={user}/>}
    </div>
  );
}

export default App;

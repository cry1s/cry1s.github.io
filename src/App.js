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

function App() {
  const users = JSON.parse(localStorage.getItem('users'));
  if (users === null) {
    localStorage.setItem('users', JSON.stringify([]));
  }
  const user = new User();
  return (
    <div className="App">
      <UserModal />
      <PasswordModal />
      <AddSubject />
      <NavBar user={user}/>
      <MainBodyContent days={[
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота",
        "Воскресенье"
      ]} user={user}/>
      <Cabinet hidden/>
      <Deadlinelist deadlines={user.deadlines} hidden/>
    </div>
  );
}

export default App;

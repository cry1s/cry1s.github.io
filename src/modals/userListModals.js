import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { read } from '../localstorageutil';
import UserCreateModals from './usercreateModals';
import PasswordModal from './passwordModals';

export default function UserModals(props) {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [usernames, setUsernames] = useState(props.usernames);

  const updateList = () => {
    const users = read();
    setUsernames(users.map(user => user.name));
  };
  
  const login = (username) => {
    props.setuser(read().find(user => user.name === username));
    props.setUserIndex(usernames.indexOf(username));
    console.log(read().find(user => user.name === username));
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Выберите пользователя или создайте нового</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        {
          usernames.map((username, index) => (
            <div class="container m-2" key={index}>
              <PasswordModal username={username} setuser={login}/>
            </div>
          ))
        }
        </Modal.Body>
        <Modal.Footer>
          <UserCreateModals updatelist={updateList} />
        </Modal.Footer>
      </Modal>
    </>
  );
}

//render(<UserModals />);
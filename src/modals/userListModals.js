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
  const [usernames, setUsernames] = useState(read().map((user) => user.name));

  const updateList = () => {
    const users = read();
    setUsernames(users.map(user => user.name));
  };
  
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Выберите пользователя или создайте нового</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {
          usernames.map((username, index) => (
            <PasswordModal key={index} username={username} />
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
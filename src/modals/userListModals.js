import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function UserModals(props) {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [usernames, setUsernames] = useState(props.usernames);
  const createUser = () => {};
    
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Выберите пользователя или создайте нового</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {
          usernames.map((username, index) => (
            <Button variant="primary" onClick={handleClose} key={index}>  {username}  </Button>
          ))
        }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={createUser}>
            Создать пользователя
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

//render(<UserModals />);
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function UserModals(props) {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [usernames, setUsernames] = useState([]);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {
          usernames.map((username, index) => (
            <Button variant="primary" onClick={handleClose} key={index}>  {username}  </Button>
          ))
        }
        </Modal.Body>
      </Modal>
    </>
  );
}

//render(<UserModals />);
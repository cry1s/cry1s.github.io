import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function UserModals() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        aaaaaaaaa
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        aaaaaaaaaaaa
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            aaaaaaaaaaaaa
          </Button>
          <Button variant="primary" onClick={handleClose}>
            aaaaaaaaaaaaaaaaaaaaaaaaa
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

//render(<UserModals />);
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { read } from '../localstorageutil';

export default function PasswordModal(props) {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState('');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const login = () => {
    const users = read();
    const user = users.find(user => user.name === props.username);
    if (user.password === password) {
      props.setuser(props.username);
      handleClose();
    } else {
      alert('Неверный пароль');
    }
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {props.username}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Пароль</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="password"
                autoFocus
                placeholder="Введите пароль"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={login}>
            Войти
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

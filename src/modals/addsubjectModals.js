import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { read, write } from '../localstorageutil';

export default function AddSubject(props) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  // fields
  const [name, setName] = useState('');
  const [teacher, setTeacher] = useState('');
  const [room, setRoom] = useState('');
  const [timestart, setTimeStart] = useState('');
  const [timeend, setTimeEnd] = useState('');

  const handleClose = () => {
    setShow(false);
    setName('');
    setTeacher('');
    setRoom('');
    setTimeStart('');
    setTimeEnd('');
  }

  const addSubject = () => {
    if (name === '' || timestart === '' || timeend === '') {
      alert('Заполните название предмета и время начала и конца занятия');
      return;
    }
    const hhmmtosecs = (hhmm) => {
      const [hh, mm] = hhmm.split(':');
      return parseInt(hh) * 3600 + parseInt(mm) * 60;
    }

    const subject = {
      name: name,
      prepod: teacher,
      where: room,
      timestart: hhmmtosecs(timestart),
      timeend: hhmmtosecs(timeend),
    };
    const users = read()
    users[props.userindex].table[props.curday].push(subject);
    // sort by timestart
    users[props.userindex].table[props.curday].sort((a, b) => {
      return a.timestart - b.timestart;
    });
    write(users);
    handleClose();
  }

  return (
    <>
      <button type="button" class="btn" onClick={handleShow}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
        </svg>
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Добавить предмет</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Название предмета</Form.Label>
              <Form.Control
                type="text"
                placeholder="Название предмета"
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Время начала</Form.Label>
              <Form.Control type="time"
                value={timestart}
                onChange={(e) => setTimeStart(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Время окончания</Form.Label>
              <Form.Control type="time"
                value={timeend}
                onChange={(e) => setTimeEnd(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Преподаватель</Form.Label>
              <Form.Control type="text" placeholder="Преподаватель"
                value={teacher}
                onChange={(e) => setTeacher(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Аудитория/кабинет</Form.Label>
              <Form.Control type="text" placeholder="Аудитория/кабинет"
                value={room}
                onChange={(e) => setRoom(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Отмена
          </Button>
          <Button variant="primary" onClick={addSubject}>
            Добавить предмет
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

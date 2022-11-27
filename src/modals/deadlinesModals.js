import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function DeadlineModal() {
  const [show, setShow] = useState(false);

  const [name, setName] = useState('');
  const [timestart, setTimeStart] = useState('');
  const [timeend, setTimeEnd] = useState('');
  const [teacher, setTeacher] = useState('');
  const [room, setRoom] = useState('');
  const [deadlinedescription, setDeadlineDescription] = useState('');

  const handleClose = () => {
    setShow(false);
    setName('');
    setTimeStart('');
    setTimeEnd('');
    setTeacher('');
    setRoom('');
    setDeadlineDescription('');
  };

  const handleShow = () => setShow(true);

  return (
    <>
      <div class="btn" onClick={handleShow}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
        </svg>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Изменить предмет</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Добавить дедлайн на эту неделю</Form.Label>
            <Form.Control type="text" placeholder="Введите дедлайн"
            value={deadlinedescription}
            onChange={(e) => setDeadlineDescription(e.target.value)} />
          </Form.Group>
          <br />
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
          <Button variant="danger" onClick={handleClose}>
            Удалить предмет
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Отмена
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Сохранить изменения
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

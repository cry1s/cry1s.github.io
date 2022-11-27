import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import User from '../model'
import { add, read } from '../localstorageutil'

export default function UserCreateModals(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [twoweeks, setTwoWeeks] = useState(false);
  const [firstweek, setFirstWeek] = useState(false);

  // Опеределить понедельник из той же недели, что и дата
  const getMonday = (date) => {
    const day = date.getDay() || 7;
    if (day !== 1)
      date.setHours(-24 * (day - 1));
    return date;
  }
  
  const createUser = () => {
    if (username === '' || password === '' || !firstweek) {
      alert('Заполните все поля');
      return;
    }
    if (read().find(user => user.name === username)) {
      alert('Пользователь с таким именем уже существует');
      return;
    }
    const date = new Date(firstweek);
    const monday = getMonday(date);
    const user = new User();
    user.name = username;
    user.password = password;
    user.twoweeks = twoweeks;
    user.startweek = monday;
    //clear inputs
    setUsername('');
    setPassword('');
    setTwoWeeks(false);
    setFirstWeek(false);
    add(user);
    handleClose();
    props.updatelist();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Создать пользователя
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Введите имя, пароль и установите параметры расписания</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>

            <div class="col-auto mb-3"><input type="text" class="form-control" placeholder="Введите имя"
                            value={username} onChange={e => setUsername(e.target.value)} /></div>

              <div class="col-auto mb-3"><input type="text" class="form-control" placeholder="Введите пароль"
                            value={password} onChange={e => setPassword(e.target.value)} /></div>

            
            <label class="mb-3">
              Система расписания:
              <select class="mt-3" value={twoweeks} onChange={e => setTwoWeeks(e.target.value)}>
                <option value="true">Две недели (Числитель и знаменатель)</option>
                <option value="false">Одно и тоже расписание</option>
              </select>
            </label>
            <label class="mb-5">
              Выбор даты первой недели:
              <input type="date" onChange={e => setFirstWeek(e.target.value)} />
            </label>
            <hr class="my-5" />
            <div class="row justify-content-center">
            <Button  class="btn btn-outline-primary mt-3" variant="primary" onClick={createUser}>
            Создать пользователя
          </Button>
          </div>
          </Form>
        </Modal.Body>
        
      </Modal>
    </>
  );
}

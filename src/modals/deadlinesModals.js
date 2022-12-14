import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { read, write } from '../localstorageutil';

export default function DeadlineModal(props) {
  const [show, setShow] = useState(false);

  const secstohhmm = (secs) => {
    const hours = Math.floor(secs / 3600);
    const minutes = Math.floor((secs % 3600) / 60);
    return hours + ':' + minutes;
  };

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

  const addDeadline = () => {
    if (!deadlinedescription) {
      return;
    }
    const newdeadline = {
      name: props.name,
      week: props.curweek,
      day: props.curday,
      description: deadlinedescription,
    };
    console.log(newdeadline);
    const users = read();
    users[props.userindex].deadlines.push(newdeadline);
    users[props.userindex].deadlines.sort((a, b) => {
      if (a.week > b.week) {
        return 1;
      }
      if (a.week < b.week) {
        return -1;
      }
      if (a.day > b.day) {
        return 1;
      }
      if (a.day < b.day) {
        return -1;
      }
      return 0;
    });
    write(users);
    props.setuser(users[props.userindex]);
    handleClose();
  };

  const changeSubject = () => {
    if (!name && !timestart && !timeend && !teacher && !room) {
      return;
    }
    const newsubject = {
      name: name ? name : props.subject.name,
      timestart: timestart ? timestart : props.subject.timestart,
      timeend: timeend ? timeend : props.subject.timeend,
      prepod: teacher ? teacher : props.subject.teacher,
      where: room ? room : props.subject.room,
    };
    console.log(newsubject);
    const users = read();
    users[props.userindex].table[props.curday][props.subjectindex] = newsubject;
    // sort by timestart
    users[props.userindex].table[props.curday].sort((a, b) => {
      return a.timestart - b.timestart;
    });
    if (name) {
      users[props.userindex].deadlines.map((deadline) => {
        if (deadline.name === props.subject.name) {
          deadline.name = name;
        }
      });
    }
    write(users);
    props.setuser(users[props.userindex]);
    handleClose();
  };

  const deleteSubject = () => {
    const users = read();
    users[props.userindex].table[props.curday].splice(props.subjectindex, 1);
    write(users);
    props.setuser(users[props.userindex]);
    handleClose();
  };

  return (
    <>
      <div class="btn" onClick={handleShow}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
        </svg>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>???????????????? ??????????????</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>???????????????? ?????????????? ???? ?????? ????????????</Form.Label>
            <Form.Control type="text" placeholder="?????????????? ??????????????"
            value={deadlinedescription}
            onChange={(e) => setDeadlineDescription(e.target.value)} />
          </Form.Group>
          <br />
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>???????????????? ????????????????</Form.Label>
              <Form.Control
                type="text"
                placeholder="???????????????? ????????????????"
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>?????????? ????????????</Form.Label>
              <Form.Control type="time"
                value={timestart}
                onChange={(e) => setTimeStart(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>?????????? ??????????????????</Form.Label>
              <Form.Control type="time"
                value={timeend}
                onChange={(e) => setTimeEnd(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>??????????????????????????</Form.Label>
              <Form.Control type="text" placeholder="??????????????????????????"
                value={teacher}
                onChange={(e) => setTeacher(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>??????????????????/??????????????</Form.Label>
              <Form.Control type="text" placeholder="??????????????????/??????????????"
                value={room}
                onChange={(e) => setRoom(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={deleteSubject}>
            ?????????????? ??????????????
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            ????????????
          </Button>
          <Button variant="primary" onClick={() => {addDeadline(); changeSubject();}}>
            ?????????????????? ??????????????????
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

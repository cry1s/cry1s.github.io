import React, { useState, useEffect, useTransition } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { generateURL, parseURL } from '../utils';
import { read } from '../localstorageutil';
import { QRCodeSVG } from 'qrcode.react';
import { Container } from 'react-bootstrap';

export default function QRModal(props) {
  const [url, setUrl] = useState('');
  const [inputUrl, setInputUrl] = useState('');

  const createUser = async () => {
    const json = parseURL(inputUrl);
    if (json) {
      const localusers = localStorage.getItem('users')
      const users = localusers ? JSON.parse(localusers) : [];
      users.push(json);
      localStorage.setItem('users', JSON.stringify(users));
    }
    props.setshow(false)
  };

  const generate = async () => {
    const url = await generateURL(read()[props.userindex]);
    setUrl(url);
  }
    
  useEffect(() => {
    generate();
  }, []);

  return (
    <>
      <Modal show={true} onHide={() => props.setshow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Ваш QR-код</Modal.Title>
        </Modal.Header>
        <Container className='justify-content-center'>
        <Modal.Body>
          <Container className='justify-content-center'>
            <QRCodeSVG height={"100%"} width={"100%"} value={url}/>
          </Container>
          <input type="text" value={url} onChange={(e) => setInputUrl(e.target.value)} />
        </Modal.Body>
        </Container>
        <Modal.Footer>
          <Button variant="primary" onClick={() => props.setshow(false)}>
            Импортировать из ссылки
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

//render(<UserModals />);
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { generateQRCode, parseQRCode } from '../components/utils';

export default function UserModals(props) {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [svg, setSvg] = useState('');
  const [url, setUrl] = useState('');
  const createUser = () => {};
    
  useEffect(() => {
    const svgandurl = generateQRCode(localStorage.getItem('users'));
    setSvg(svgandurl.svg);
    setUrl(svgandurl.url);
  }, []);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ваш QR-код</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div dangerouslySetInnerHTML={{__html: svg}} />
          <input type="text" value={url} />
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
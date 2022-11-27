import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { generateQRCode, parseQRCode } from '../components/utils';
import { read } from '../localstorageutil';

export default function QRModal(props) {
  const [svg, setSvg] = useState('');
  const [url, setUrl] = useState('');
  const [inputUrl, setInputUrl] = useState('');
  const createUser = async () => {
    const json = parseQRCode(inputUrl);
    if (json) {
      const localusers = localStorage.getItem('users')
      const users = localusers ? JSON.parse(localusers) : [];
      users.push(json);
      localStorage.setItem('users', JSON.stringify(users));
    }
  };

  const generate = async () => {
    const svgandurl = await generateQRCode(read()[props.userindex]);
    setSvg(svgandurl.svg);
    setUrl(svgandurl.url);
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
        <Modal.Body>
          <div dangerouslySetInnerHTML={{__html: svg}} />
          <input type="text" value={url} onChange={(e) => setInputUrl(e.target.value)} />
        </Modal.Body>
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
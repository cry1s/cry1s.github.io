import { QRCodeRaw, QRCodeSVG } from '@cheprasov/qrcode';
import { Buffer } from 'buffer';

const generateQRCode = async (json, host = 'http://localhost:3228') => {
    const data = JSON.stringify(json);
    const b64 = Buffer.from(data).toString('base64');
    host = host.replace(/\/$/, '');
    const url = `${host}/?data=${b64}`;
    const qr = new QRCodeRaw(url);
    const svg = new QRCodeSVG(qr);
    return {svg: svg.toString(),
            url: url};
};

const parseQRCode = async (url) => {
    const b64 = url.split('=')[1];
    const data = Buffer.from(b64, 'base64').toString();
    try {
        const json = JSON.parse(data);
        return json;
    } catch (e) {
        return null;
    }
}

export { generateQRCode, parseQRCode };
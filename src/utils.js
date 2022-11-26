import { QRCodeRaw, QRCodeSVG } from '@cheprasov/qrcode';
import { gzip, ungzip } from 'node-gzip';

const generateQRCode = async (json, host = 'http://localhost:3228') => {
    const data = JSON.stringify(json);
    const compressed = await gzip(data);
    const b64 = Buffer.from(compressed).toString('base64');
    host = host.replace(/\/$/, '');
    const url = `${host}/?data=${b64}`;
    const qr = new QRCodeRaw(url);
    const svg = new QRCodeSVG(qr);
    return svg.toString();
};

const parseQRCode = async (url) => {
    const b64 = url.split('=')[1];
    const compressed = Buffer.from(b64, 'base64');
    const data = await ungzip(compressed);
    try {
        return JSON.parse(data);
    } catch (e) {
        return null;
    }
}

export { generateQRCode, parseQRCode };

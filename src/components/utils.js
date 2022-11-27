import { QRCodeRaw, QRCodeSVG } from '@cheprasov/qrcode';

const PASTEBIN_KEY = 'lWhlmd2phbGQSfO36vP4RrHV0xKaZbjl';

const generateQRCode = async (json, host = 'http://localhost:3228') => {
    const data = JSON.stringify(json);
    const response = await fetch(`https://pastebin.com/api/api_post.php`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `api_dev_key=${PASTEBIN_KEY}&api_option=paste&api_paste_code=${data}&api_paste_private=1&api_paste_expire_date=N`,
    });
    const url = await response.text();
    const qr = new QRCodeRaw({
        content: `${host}/?data=${url}`,
        padding: 0,
        width: 256,
        height: 256,
        color: '#000000',
        background: '#ffffff',
    });
    const svg = new QRCodeSVG(qr);
    return {svg, url: `${host}/?data=${url}`};
};

const parseQRCode = async (b64) => {
    
}



export { generateQRCode, parseQRCode };

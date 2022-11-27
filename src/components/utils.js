import { QRCodeRaw, QRCodeSVG } from '@cheprasov/qrcode';
import { Buffer } from 'buffer';

function lzw_encode(s) {
    var dict = {};
    var data = (s + "").split("");
    var out = [];
    var currChar;
    var phrase = data[0];
    var code = 256;
    for (var i=1; i<data.length; i++) {
        currChar=data[i];
        if (dict[phrase + currChar] != null) {
            phrase += currChar;
        }
        else {
            out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
            dict[phrase + currChar] = code;
            code++;
            phrase=currChar;
        }
    }
    out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
    for (var i=0; i<out.length; i++) {
        out[i] = String.fromCharCode(out[i]);
    }
    return out.join("");
}

// Decompress an LZW-encoded string
function lzw_decode(s) {
    var dict = {};
    var data = (s + "").split("");
    var currChar = data[0];
    var oldPhrase = currChar;
    var out = [currChar];
    var code = 256;
    var phrase;
    for (var i=1; i<data.length; i++) {
        var currCode = data[i].charCodeAt(0);
        if (currCode < 256) {
            phrase = data[i];
        }
        else {
           phrase = dict[currCode] ? dict[currCode] : (oldPhrase + currChar);
        }
        out.push(phrase);
        currChar = phrase.charAt(0);
        dict[code] = oldPhrase + currChar;
        code++;
        oldPhrase = phrase;
    }
    return out.join("");
}

const generateQRCode = async (json, host = 'https://cry1s.github.io/dumaem2') => {
    const data = JSON.stringify(json);
    const b64 = Buffer.from(data).toString('base64');
    host = host.replace(/\/$/, '');
    const url = `${host}/?data=${b64}`;
    const qr = new QRCodeRaw({
        content: url,
        padding: 0,
        width: 256,
        height: 256,
        color: '#000000',
        background: '#ffffff',
        ecl: 'M',
    });
    const svg = new QRCodeSVG({
        content: url,
        padding: 0,
        width: 256,
        height: 256,
        color: '#000000',
        background: '#ffffff',
        ecl: 'M',
    });
    return {svg: svg.toString(),
            url: url};
};

const parseQRCode = async (b64) => {
    const data = Buffer.from(b64, 'base64').toString();
    try {
        const json = JSON.parse(data);
        return json;
    } catch (e) {
        return null;
    }
}



export { generateQRCode, parseQRCode };

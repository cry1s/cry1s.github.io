import { Buffer } from 'buffer';
import { compress, decompress } from 'compress-json'

const generateURL = (json) => {
    const compressed = compress(json);
    console.log("co",compressed);
    const raw_string = JSON.stringify(compressed);
    const URIEncoded = encodeURIComponent(raw_string);
    return window.location.origin + '/?data=' + URIEncoded;
};

const parseURL = (URIEncoded) => {
    try {
        const decoded = decodeURIComponent(URIEncoded);
        console.log(decoded);
        const json = JSON.parse(decoded);
        console.log(json);
        const decompressed = decompress(json);
        console.log(decompressed);
        return decompressed;
    }
    catch (e) {
        return null;
    }
};

export { generateURL, parseURL };

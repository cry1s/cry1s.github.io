import { generateQRCode, parseQRCode } from './utils';
import { gzip, ungzip } from 'node-gzip';

test('generateQRCode', async () => {
    const json = { foo: 'bar' };
    const svg = await generateQRCode(json);
    expect(svg).toMatchSnapshot();
});

test('parseQRCode', async () => {
    const json = { foo: 'bar' };
    const coded = (await gzip(JSON.stringify(json))).toString('base64');
    const url = 'http://localhost:3228/?data=' + coded;
    const parsed = await parseQRCode(url);
    expect(parsed).toEqual(json);
});

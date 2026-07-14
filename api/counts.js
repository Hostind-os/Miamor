import { kv } from '@vercel/kv';

const KEYS = ['btn_añañaña', 'btn_teextraño', 'btn_ovulando'];

export default async function handler(req, res) {
  const values = await Promise.all(KEYS.map(k => kv.get(`clicks:${k}`)));
  const result = {};
  KEYS.forEach((k, i) => {
    result[k] = values[i] || 0;
  });
  return res.status(200).json(result);
}

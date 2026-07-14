import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  const { key } = req.query;
  if (!key) return res.status(400).json({ error: 'Falta el parámetro key' });

  const newCount = await kv.incr(`clicks:${key}`);
  return res.status(200).json({ key, count: newCount });
}

// Vercel Serverless Function for Translation
import * as gTranslate from '@vitalets/google-translate-api';

export default async function handler(req, res) {
  const { text = '', lang = 'en' } = req.query;

  if (!text) {
    return res.status(400).send('⚠️ Please provide text to translate.');
  }

  try {
    const result = await gTranslate.default(text, { to: lang });
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    return res.status(200).send(result.text);
  } catch (error) {
    return res.status(500).send('❌ Error: ' + error.message);
  }
}

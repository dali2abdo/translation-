const translate = require('@vitalets/google-translate-api');

module.exports = async (req, res) => {
  const { text = '', lang = 'en' } = req.query;

  if (!text) {
    res.status(400).send('⚠️ Please provide text to translate.');
    return;
  }

  try {
    const result = await translate(text, { to: lang });
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.status(200).send(result.text);
  } catch (error) {
    res.status(500).send('❌ Error: ' + error.message);
  }
};

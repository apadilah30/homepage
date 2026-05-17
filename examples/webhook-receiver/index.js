const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');

const app = express();
const port = process.env.PORT || 3000;

// receive raw body so we can verify HMAC signature
app.post('/', bodyParser.raw({ type: 'application/json' }), (req, res) => {
  try {
    const payloadRaw = req.body || Buffer.from('');
    const payloadStr = payloadRaw.toString('utf8');
    const secret = process.env.CONTACT_WEBHOOK_SECRET;

    if (secret) {
      const sig = (req.get('x-hub-signature-256') || '').trim();
      const hmac = crypto.createHmac('sha256', secret).update(payloadStr).digest('hex');
      const expected = `sha256=${hmac}`;
      if (!sig || sig !== expected) {
        console.warn('Invalid signature', { got: sig, expected });
        return res.status(401).json({ ok: false, error: 'invalid signature' });
      }
    }

    const data = JSON.parse(payloadStr || '{}');
    console.log('Received contact payload:');
    console.log(JSON.stringify(data, null, 2));

    // Example: write to a local file or forward to an email service here

    res.json({ ok: true });
  } catch (err) {
    console.error('Error handling webhook', err);
    res.status(400).json({ ok: false, error: 'bad request' });
  }
});

app.listen(port, () => {
  console.log(`Webhook receiver listening on http://0.0.0.0:${port}/`);
});

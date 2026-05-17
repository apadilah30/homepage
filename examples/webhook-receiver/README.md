Example Webhook Receiver
========================

This is a minimal Express-based webhook receiver to test the contact webhook from this project.

Features:
- Verifies `x-hub-signature-256` HMAC when `CONTACT_WEBHOOK_SECRET` is set.
- Logs the received payload to stdout.

Run locally:

```bash
cd examples/webhook-receiver
npm install
CONTACT_WEBHOOK_SECRET=yoursecret npm start
```

Run in Docker:

```bash
cd examples/webhook-receiver
docker build -t webhook-receiver .
docker run -e CONTACT_WEBHOOK_SECRET=yoursecret -p 3000:3000 webhook-receiver
```

Use the resulting URL as your `CONTACT_WEBHOOK` in the portfolio repo (for example `https://host:3000/`).

import { NextResponse } from "next/server";
import crypto from "crypto";

type ReqBody = {
  name?: string;
  email?: string;
  message?: string;
  hp?: string; // honeypot
};

const emailRe = /\S+@\S+\.\S+/;

export async function POST(req: Request) {
  try {
    const body: ReqBody = await req.json();
    const { name, email, message, hp } = body;

    // simple honeypot
    if (hp && hp.trim().length > 0) {
      return NextResponse.json({ ok: false, error: "spam detected" }, { status: 400 });
    }

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "missing fields" }, { status: 400 });
    }

    if (!emailRe.test(email)) {
      return NextResponse.json({ ok: false, error: "invalid email" }, { status: 400 });
    }

    const payload = {
      name,
      email,
      message,
      receivedAt: new Date().toISOString(),
    };

    // If CONTACT_WEBHOOK is set, forward the payload
    const webhook = process.env.CONTACT_WEBHOOK;
    if (webhook) {
      const bodyStr = JSON.stringify(payload);
      const headers: Record<string, string> = { "content-type": "application/json" };
      const secret = process.env.CONTACT_WEBHOOK_SECRET;
      if (secret) {
        const hmac = crypto.createHmac("sha256", secret).update(bodyStr).digest("hex");
        headers["x-hub-signature-256"] = `sha256=${hmac}`;
      }

      await fetch(webhook, {
        method: "POST",
        headers,
        body: bodyStr,
      });
      return NextResponse.json({ ok: true });
    }

    // Fallback: append to a local file (useful for self-hosted servers)
    try {
      const fs = await import("fs");
      const entry = `${payload.receivedAt} | ${payload.name} <${payload.email}> | ${payload.message.replace(/\n/g, " ")}\n`;
      await fs.promises.appendFile("contacts.log", entry, { encoding: "utf8" });
      return NextResponse.json({ ok: true });
    } catch (e) {
      return NextResponse.json({ ok: false, error: "failed to persist" }, { status: 500 });
    }
  } catch (err) {
    return NextResponse.json({ ok: false, error: "invalid request" }, { status: 400 });
  }
}

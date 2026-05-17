"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useT } from "@/lib/i18n";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<null | string>(null);
  const { t } = useT();
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    animate: { opacity: 1, y: 0 },
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email, message, hp: "" }),
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        setStatus("sent");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus(data.error || "error");
      }
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <div className="relative mx-auto max-w-3xl px-4 py-24 md:px-8">
      <motion.div
        initial={fadeUp.initial}
        animate={fadeUp.animate}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="mb-8 space-y-3 text-center md:mb-10"
      >
        <p className="section-index">Get in touch</p>
        <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">{t("contact.title")}</h1>
        <p className="mx-auto max-w-xl text-sm leading-relaxed text-slate-400 md:text-base">
          {t("contact.placeholder")}
        </p>
      </motion.div>

      <motion.div
        initial={fadeUp.initial}
        animate={fadeUp.animate}
        transition={{ duration: 0.5, ease: "easeOut", delay: shouldReduceMotion ? 0 : 0.08 }}
        className="glass-card rounded-3xl p-5 md:p-8"
      >
        <motion.form
          className="space-y-5"
          onSubmit={handleSubmit}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.05,
                delayChildren: shouldReduceMotion ? 0 : 0.05,
              },
            },
          }}
        >
          <input type="hidden" name="hp" value="" />

          <motion.div
            variants={{ hidden: fadeUp.initial, visible: fadeUp.animate }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="grid gap-4 md:grid-cols-2"
          >
            <motion.label
              className="block"
              whileHover={shouldReduceMotion ? undefined : { y: -1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="mb-2 text-sm font-medium text-slate-200">Name</div>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white outline-none transition duration-200 focus:-translate-y-0.5 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/20"
              />
            </motion.label>

            <motion.label
              className="block"
              whileHover={shouldReduceMotion ? undefined : { y: -1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="mb-2 text-sm font-medium text-slate-200">Email</div>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white outline-none transition duration-200 focus:-translate-y-0.5 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/20"
              />
            </motion.label>
          </motion.div>

          <motion.label
            className="block"
            variants={{ hidden: fadeUp.initial, visible: fadeUp.animate }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            whileHover={shouldReduceMotion ? undefined : { y: -1 }}
          >
            <div className="mb-2 text-sm font-medium text-slate-200">Message</div>
            <textarea
              required
              rows={7}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about your project, role, or collaboration idea..."
              className="w-full resize-y rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white outline-none transition duration-200 focus:-translate-y-0.5 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/20"
            />
          </motion.label>

          <motion.div
            className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
            variants={{ hidden: fadeUp.initial, visible: fadeUp.animate }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <motion.button
              type="submit"
              className="btn-primary inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-slate-950 sm:w-auto"
              disabled={status === "sending"}
              whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </motion.button>

            <p className="text-xs text-slate-500">Your message is sent securely to the contact endpoint.</p>
          </motion.div>

          <AnimatePresence mode="wait">
            {status === "sent" && (
              <motion.div
                key="sent"
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
                className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300"
              >
                Message sent — thank you!
              </motion.div>
            )}

            {status && status !== "sent" && status !== "sending" && (
              <motion.div
                key="error"
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
                className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
              >
                Error: {status}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </motion.div>
    </div>
  );
}

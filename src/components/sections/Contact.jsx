"use client";

import { Check, Copy, Mail, Send } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import Reveal from "@/components/animation/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";

export default function Contact() {
  const t = useTranslations("Contact");
  const [copied, setCopied] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const body = `${message}\n\n— ${name}\n${email}`;
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(t("emailSubject"))}&body=${encodeURIComponent(body)}`;
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${siteConfig.email}`;
    }
  }

  return (
    <section id="contact" className="section-shell contact-section">
      <div className="site-container contact-grid">
        <div>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
          />
          <Reveal delay={0.12}>
            <button type="button" className="copy-email" onClick={copyEmail}>
              <Mail size={18} />
              <span>{siteConfig.email}</span>
              {copied ? <Check size={17} /> : <Copy size={17} />}
              <small>{copied ? t("copied") : t("copy")}</small>
            </button>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              <span>{t("name")}</span>
              <input name="name" required placeholder={t("namePlaceholder")} />
            </label>
            <label>
              <span>{t("email")}</span>
              <input name="email" type="email" required placeholder={t("emailPlaceholder")} />
            </label>
            <label>
              <span>{t("message")}</span>
              <textarea name="message" required rows="5" placeholder={t("messagePlaceholder")} />
            </label>
            <button type="submit" className="button button-primary form-submit">
              {t("send")} <Send size={17} />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

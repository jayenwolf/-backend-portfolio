"use client";

import { ArrowDownRight, Download, GitBranch, BriefcaseBusiness, Mail } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";
import ApiFlow from "./ApiFlow";
import { siteConfig } from "@/data/site";

export default function Hero() {
  const t = useTranslations("Hero");
  const reduceMotion = useReducedMotion();

  const item = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 22 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />
      <div className="site-container hero-grid">
        <motion.div
          className="hero-copy"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: reduceMotion ? 0 : 0.09 },
            },
          }}
        >
          <motion.div variants={item} className="hero-eyebrow-row">
            <span className="section-eyebrow">{t("eyebrow")}</span>
            {siteConfig.availability ? (
              <span className="availability-pill">
                <span className="status-dot" />
                {t("available")}
              </span>
            ) : null}
          </motion.div>

          <motion.p variants={item} className="hero-greeting">
            {t("greeting")}
          </motion.p>
          <motion.h1 variants={item} className="hero-title">
            {siteConfig.name}
            <span>{t("role")}</span>
          </motion.h1>
          <motion.p variants={item} className="hero-description">
            {t("description")}
          </motion.p>

          <motion.div variants={item} className="hero-buttons">
            <a href="#projects" className="button button-primary">
              {t("primaryCta")}
              <ArrowDownRight size={18} />
            </a>
            <a href="#contact" className="button button-secondary">
              {t("secondaryCta")}
              <Mail size={17} />
            </a>
            {siteConfig.cvUrl ? (
              <a href={siteConfig.cvUrl} download className="button button-ghost">
                {t("cvCta")}
                <Download size={17} />
              </a>
            ) : null}
          </motion.div>

          <motion.div variants={item} className="hero-meta">
            <div>
              <span>{t("learning")}</span>
              <strong>{t("learningValue")}</strong>
            </div>
            <div className="social-links">
              <a href={siteConfig.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <GitBranch size={19} />
              </a>
              <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <BriefcaseBusiness size={19} />
              </a>
              <a href={`mailto:${siteConfig.email}`} aria-label="Email">
                <Mail size={19} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.75, delay: 0.18 }}
        >
          <ApiFlow />
        </motion.div>
      </div>
    </section>
  );
}

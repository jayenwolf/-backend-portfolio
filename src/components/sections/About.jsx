"use client";

import { Code2, Layers3, Terminal } from "lucide-react";
import { useTranslations } from "next-intl";
import Reveal from "@/components/animation/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  const t = useTranslations("About");
  const cards = [
    { title: t("card1Title"), value: t("card1Value"), icon: Layers3 },
    { title: t("card2Title"), value: t("card2Value"), icon: Code2 },
    { title: t("card3Title"), value: t("card3Value"), icon: Terminal },
  ];

  return (
    <section id="about" className="section-shell">
      <div className="site-container about-grid">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
        <div>
          <Reveal>
            <p className="about-copy">{t("description1")}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="about-copy about-copy-muted">{t("description2")}</p>
          </Reveal>
          <div className="about-cards">
            {cards.map(({ title, value, icon: Icon }, index) => (
              <Reveal key={title} delay={0.08 + index * 0.06}>
                <div className="mini-card">
                  <Icon size={18} />
                  <span>{title}</span>
                  <strong>{value}</strong>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

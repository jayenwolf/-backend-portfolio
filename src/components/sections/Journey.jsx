"use client";

import { useTranslations } from "next-intl";
import Reveal from "@/components/animation/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { journey } from "@/data/journey";

export default function Journey() {
  const t = useTranslations("Journey");

  return (
    <section id="journey" className="section-shell section-tinted">
      <div className="site-container">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
        <div className="journey-list">
          {journey.map((item, index) => (
            <Reveal key={item.key} delay={index * 0.06}>
              <article className="journey-item">
                <div className="journey-index">{item.year}</div>
                <div className="journey-line" aria-hidden="true"><span /></div>
                <div>
                  <h3>{t(`${item.key}Title`)}</h3>
                  <p>{t(`${item.key}Text`)}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { Braces, Database, PanelsTopLeft, Wrench } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/animation/Reveal";
import { skillGroups } from "@/data/skills";

const iconMap = {
  backend: Braces,
  database: Database,
  tools: Wrench,
  frontend: PanelsTopLeft,
};

export default function Skills() {
  const t = useTranslations("Skills");
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="section-shell section-tinted">
      <div className="site-container">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />

        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = iconMap[group.key];
            return (
              <Reveal key={group.key} delay={index * 0.06}>
                <motion.article
                  className="skill-card"
                  whileHover={reduceMotion ? undefined : { y: -6 }}
                  transition={{ duration: 0.22 }}
                >
                  <div className="skill-card-head">
                    <span className="skill-icon"><Icon size={19} /></span>
                    <h3>{t(group.key)}</h3>
                  </div>
                  <div className="skill-list">
                    {group.items.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

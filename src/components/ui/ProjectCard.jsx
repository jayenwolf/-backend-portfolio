"use client";

import { ArrowUpRight, GitBranch } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function ProjectCard({ project, index }) {
  const locale = useLocale();
  const t = useTranslations("Projects");
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className={`project-card accent-${project.accent}`}
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      whileHover={reduceMotion ? undefined : { y: -7 }}
      transition={{ duration: 0.48, delay: reduceMotion ? 0 : index * 0.07 }}
    >
      <div className="project-window">
        <div className="project-window-bar">
          <span />
          <span />
          <span />
          <small>main.py</small>
        </div>
        <pre aria-hidden="true"><code>{`@app.get("/api/${project.slug}")\nasync def get_data():\n    return {"status": "ok"}`}</code></pre>
      </div>

      <div className="project-card-body">
        <div className="project-number">0{index + 1} / {t("project")}</div>
        <h3>{project.title[locale]}</h3>
        <p>{project.summary[locale]}</p>
        <div className="tag-list">
          {project.stack.map((item) => <span key={item}>{item}</span>)}
        </div>
        <div className="project-actions">
          <Link href={`/projects/${project.slug}`} className="text-link">
            {t("viewCase")} <ArrowUpRight size={16} />
          </Link>
          {project.githubUrl ? (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="icon-link" aria-label={t("source")}>
              <GitBranch size={18} />
            </a>
          ) : (
            <span className="link-placeholder">{t("comingSoon")}</span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

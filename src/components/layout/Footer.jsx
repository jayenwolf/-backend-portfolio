"use client";

import { ChevronUp, GitBranch, BriefcaseBusiness } from "lucide-react";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/data/site";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="footer">
      <div className="site-container footer-inner">
        <div>
          <strong>{siteConfig.name}</strong>
          <p>{t("built")}</p>
        </div>
        <div className="footer-actions">
          <a href={siteConfig.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitBranch size={18} /></a>
          <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><BriefcaseBusiness size={18} /></a>
          <a href="#home" className="back-top">{t("backToTop")} <ChevronUp size={17} /></a>
        </div>
      </div>
    </footer>
  );
}

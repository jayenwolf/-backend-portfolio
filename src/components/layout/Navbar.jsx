"use client";

import { GitBranch, Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { siteConfig } from "@/data/site";
import { Link } from "@/i18n/navigation";
import ThemeToggle from "@/components/ui/ThemeToggle";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

export default function Navbar() {
  const t = useTranslations("Navigation");
  const [open, setOpen] = useState(false);

  const links = [
    ["home", "#home"],
    ["about", "#about"],
    ["skills", "#skills"],
    ["projects", "#projects"],
    ["journey", "#journey"],
    ["contact", "#contact"],
  ];

  return (
    <header className="nav-shell">
      <nav className="site-container nav-inner" aria-label="Primary navigation">
        <Link href="/#home" className="brand" aria-label={siteConfig.name}>
          <span className="brand-mark">{siteConfig.initials}</span>
          <span className="brand-text">backend.lab</span>
        </Link>

        <div className="nav-links">
          {links.map(([key, href]) => (
            <Link key={key} href={`/${href}`} className="nav-link">
              {t(key)}
            </Link>
          ))}
        </div>

        <div className="nav-actions">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer"
            className="icon-button desktop-github"
            aria-label="GitHub"
          >
            <GitBranch size={18} />
          </a>
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            type="button"
            className="icon-button mobile-menu-button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? t("closeMenu") : t("menu")}
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="mobile-menu site-container">
          {links.map(([key, href]) => (
            <Link
              key={key}
              href={`/${href}`}
              className="mobile-link"
              onClick={() => setOpen(false)}
            >
              {t(key)}
            </Link>
          ))}
        </div>
      ) : null}
    </header>
  );
}

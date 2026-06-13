"use client";

import { Languages } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations("Language");
  const pathname = usePathname();
  const router = useRouter();
  const nextLocale = locale === "id" ? "en" : "id";

  return (
    <button
      type="button"
      className="language-button"
      onClick={() => router.replace(pathname, { locale: nextLocale })}
      aria-label={t("label")}
      title={t("label")}
    >
      <Languages size={17} />
      <span>{locale.toUpperCase()}</span>
    </button>
  );
}

"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function ApiStatus() {
  const t = useTranslations("ApiFlow");
  const [online, setOnline] = useState(null);

  useEffect(() => {
    let active = true;

    fetch("/api/health", { cache: "no-store" })
      .then((response) => {
        if (!response.ok) throw new Error("Health check failed");
        return response.json();
      })
      .then(() => active && setOnline(true))
      .catch(() => active && setOnline(false));

    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="api-status">
      <span className={`status-dot ${online === false ? "status-error" : ""}`} />
      <span>{t("status")}</span>
      <strong>{online === null ? t("checking") : online ? t("online") : "offline"}</strong>
    </div>
  );
}

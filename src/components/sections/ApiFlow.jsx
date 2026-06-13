"use client";

import { Braces, Database, Monitor, Server } from "lucide-react";
import { useTranslations } from "next-intl";
import ApiStatus from "./ApiStatus";

export default function ApiFlow() {
  const t = useTranslations("ApiFlow");
  const nodes = [
    { label: t("client"), icon: Monitor },
    { label: t("api"), icon: Braces },
    { label: t("service"), icon: Server },
    { label: t("database"), icon: Database },
  ];

  return (
    <div className="api-window">
      <div className="window-bar">
        <div className="window-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <span>architecture.py</span>
        <span className="window-state">● live</span>
      </div>

      <div className="api-canvas">
        <div className="code-lines" aria-hidden="true">
          <span>01</span>
          <span>02</span>
          <span>03</span>
          <span>04</span>
        </div>
        <div className="flow-stack">
          {nodes.map(({ label, icon: Icon }, index) => (
            <div key={label} className="flow-row">
              <div className="flow-node">
                <Icon size={18} />
                <span>{label}</span>
              </div>
              {index < nodes.length - 1 ? (
                <div className="flow-line" aria-hidden="true">
                  <span className={`packet packet-${index + 1}`} />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <div className="api-console">
        <span className="console-prompt">$</span>
        <span>GET /api/health</span>
        <span className="console-success">200 OK</span>
      </div>
      <ApiStatus />
    </div>
  );
}

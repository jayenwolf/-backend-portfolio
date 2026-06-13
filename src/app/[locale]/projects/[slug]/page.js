import { ArrowLeft, ArrowRight, ExternalLink, GitBranch } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "@/i18n/navigation";
import { getProject, projects } from "@/data/projects";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    projects.map((project) => ({ locale, slug: project.slug }))
  );
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title[locale]} — Backend Portfolio`,
    description: project.summary[locale],
  };
}

export default async function ProjectDetailPage({ params }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const project = getProject(slug);
  if (!project) notFound();

  const t = await getTranslations("ProjectDetail");

  return (
    <>
      <Navbar />
      <main className="project-detail-main">
        <div className="site-container">
          <Link href="/#projects" className="back-link">
            <ArrowLeft size={17} /> {t("back")}
          </Link>

          <header className={`project-detail-hero accent-${project.accent}`}>
            <div>
              <p className="section-eyebrow">BACKEND CASE STUDY</p>
              <h1>{project.title[locale]}</h1>
              <p>{project.summary[locale]}</p>
              <div className="tag-list">
                {project.stack.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
            <div className="detail-code-window">
              <div className="project-window-bar"><span /><span /><span /><small>app.py</small></div>
              <pre><code>{`from fastapi import FastAPI\n\napp = FastAPI()\n\n@app.get("/health")\ndef health():\n    return {"status": "ok"}`}</code></pre>
            </div>
          </header>

          <div className="detail-layout">
            <div className="detail-content">
              <section>
                <span className="detail-label">01 — {t("problem")}</span>
                <p>{project.problem[locale]}</p>
              </section>
              <section>
                <span className="detail-label">02 — {t("solution")}</span>
                <p>{project.solution[locale]}</p>
              </section>
              <section>
                <span className="detail-label">03 — {t("features")}</span>
                <ul className="feature-list">
                  {project.features[locale].map((feature) => <li key={feature}><span>✓</span>{feature}</li>)}
                </ul>
              </section>
              <section>
                <span className="detail-label">04 — {t("learning")}</span>
                <p>{project.learnings[locale]}</p>
              </section>
            </div>

            <aside className="detail-sidebar">
              <div className="architecture-card">
                <span className="detail-label">{t("architecture")}</span>
                {[t("frontend"), t("backend"), t("database")].map((label, index, list) => (
                  <div key={label} className="architecture-step">
                    <span>{label}</span>
                    {index < list.length - 1 ? <ArrowRight size={15} /> : null}
                  </div>
                ))}
              </div>
              <p className="edit-hint">{t("editHint")}</p>
              <div className="detail-links">
                {project.githubUrl ? <a href={project.githubUrl} target="_blank" rel="noreferrer"><GitBranch size={17} /> GitHub</a> : null}
                {project.demoUrl ? <a href={project.demoUrl} target="_blank" rel="noreferrer"><ExternalLink size={17} /> Demo</a> : null}
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

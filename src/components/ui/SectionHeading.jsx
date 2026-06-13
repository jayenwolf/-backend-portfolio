import Reveal from "@/components/animation/Reveal";

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <Reveal>
        <p className="section-eyebrow">{eyebrow}</p>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="section-title">{title}</h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.12}>
          <p className="section-description">{description}</p>
        </Reveal>
      ) : null}
    </div>
  );
}

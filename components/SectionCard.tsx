import Link from "next/link";

export function SectionCard({ href, icon, title, children }: { href: string; icon: string; title: string; children: React.ReactNode }) {
  return (
    <Link className="sectionCard" href={href}>
      <span className="sectionIcon" aria-hidden="true">{icon}</span>
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <span className="arrow" aria-hidden="true">→</span>
    </Link>
  );
}

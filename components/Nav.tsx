import Link from "next/link";

const links = [
  ["/", "Accueil"],
  ["/securite", "Sécurité"],
  ["/mesures", "Mesures"],
  ["/outillage", "Outillage"],
  ["/machines", "Machines"],
  ["/quiz", "Quiz"],
  ["/sources", "Sources"],
];

export function Nav() {
  return (
    <header className="siteHeader">
      <div className="navWrap">
        <Link className="brand" href="/" aria-label="AtelierPilot, accueil">
          <span className="brandMark" aria-hidden="true">AP</span>
          <span>AtelierPilot</span>
        </Link>
        <nav aria-label="Navigation principale">
          <ul className="navList">
            {links.map(([href, label]) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default function SourcesPage() {
  return (
    <div className="shell pageShell">
      <header className="pageHeader">
        <p className="eyebrow">Traçabilité</p>
        <h1>Sources de l’application</h1>
        <p className="lead">AtelierPilot est construit à partir des deux fichiers fournis dans la conversation.</p>
      </header>

      <section className="sourceCards">
        <article className="sourceCard">
          <span className="sourceTag">Module 1</span>
          <h2>La sécurité</h2>
          <p>Utilisé pour les risques, les EPI et les règles générales de sécurité avec les outils à bois.</p>
        </article>
        <article className="sourceCard">
          <span className="sourceTag">Module 2</span>
          <h2>L’outillage</h2>
          <p>Utilisé pour les mesures impériales, les catégories d’outils, les outils électriques et les noms des machines à bois.</p>
        </article>
      </section>

      <section className="contentCard verticalCard">
        <div>
          <p className="eyebrow">Principe</p>
          <h2>Pas d’invention dans les trous du cours</h2>
        </div>
        <p>Quand une zone est vide dans les notes — par exemple les détails spécifiques de chaque machine — l’application l’indique comme « à compléter avec la démonstration en atelier ». Cela permet de garder l’application fidèle aux fichiers.</p>
      </section>
    </div>
  );
}

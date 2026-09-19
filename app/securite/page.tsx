import { generalToolSafety, requiredPpe, safetyIncidents } from "@/lib/course-data";

export default function SecuritePage() {
  return (
    <div className="shell pageShell">
      <header className="pageHeader">
        <p className="eyebrow">Module 1</p>
        <h1>La sécurité</h1>
        <p className="lead">Résumé des éléments explicitement écrits dans tes notes de cours.</p>
      </header>

      <section className="contentCard">
        <div className="numberBadge">01</div>
        <div>
          <h2>Risques fréquents sur les chantiers</h2>
          <p>Le cours présente cette liste de blessures fréquentes sur les chantiers de construction au Canada en 2018 :</p>
          <ol className="cleanList numbered">
            {safetyIncidents.map((item) => <li key={item}>{item}</li>)}
          </ol>
        </div>
      </section>

      <section className="contentCard">
        <div className="numberBadge">02</div>
        <div>
          <h2>Équipements de protection</h2>
          <div className="dataTableWrap">
            <table className="dataTable">
              <thead><tr><th>Équipement</th><th>Règle du cours</th></tr></thead>
              <tbody>
                {requiredPpe.map(({ item, rule }) => <tr key={item}><td>{item}</td><td>{rule}</td></tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="contentCard">
        <div className="numberBadge">03</div>
        <div>
          <h2>Règles générales avec les outils à bois</h2>
          <ul className="checkList">
            {generalToolSafety.map((rule) => <li key={rule}>{rule}</li>)}
          </ul>
        </div>
      </section>

      <aside className="sourceNote">
        <strong>À compléter en classe :</strong> les zones « Au niveau vestimentaire », « Travailler dans un espace sécuritaire » et « comportement/postures » sont laissées vides dans le fichier source. AtelierPilot ne les invente pas.
      </aside>
    </div>
  );
}

export default function BatimentPage() {
  const chantier = [
    "Préparation du terrain",
    "Implantation",
    "Excavation",
    "Fondations",
    "Montage du carré",
    "Fermeture",
    "Isolation",
    "Plomberie, électricité et ventilation",
    "Finition",
  ];

  return (
    <div className="shell pageShell">
      <header className="pageHeader">
        <p className="eyebrow">Construction agricole</p>
        <h1>Les grandes étapes de l’érection d’un bâtiment</h1>
        <p className="lead">
          Une fiche de révision basée sur le cours de charpenterie-menuiserie : planifier le bâtiment,
          choisir son emplacement, vérifier les règles, préparer le budget et suivre le chantier dans le bon ordre.
        </p>
      </header>

      <section className="sectionBlock">
        <div className="sectionHeading">
          <p className="eyebrow">Avant de construire</p>
          <h2>1. Planification du projet</h2>
        </div>
        <div className="cardGrid">
          <article className="sectionCard">
            <h3>Évaluer les besoins</h3>
            <ul>
              <li>Usages actuels et futurs du bâtiment.</li>
              <li>Superficie nécessaire et potentiel d’agrandissement.</li>
              <li>Besoin d’isolation, de chauffage ou d’eau.</li>
              <li>Organisation du travail, ergonomie, durabilité et esthétisme.</li>
            </ul>
          </article>
          <article className="sectionCard">
            <h3>Choisir le site</h3>
            <ul>
              <li>Accès facile et voie assez large et solide.</li>
              <li>Proximité de l’électricité, de l’eau et des égouts si disponibles.</li>
              <li>Drainage naturel et type de sol.</li>
              <li>Distance entre bâtiments, vents dominants, soleil et circulation de la machinerie.</li>
            </ul>
          </article>
          <article className="sectionCard">
            <h3>Vérifier les règles</h3>
            <ul>
              <li>Règlementation municipale et marges de retrait.</li>
              <li>Schéma d’aménagement de la MRC.</li>
              <li>CPTAQ si l’usage n’est pas agricole.</li>
              <li>Environnement, affichage et normes sanitaires selon le projet.</li>
            </ul>
          </article>
          <article className="sectionCard">
            <h3>Préparer le budget</h3>
            <ul>
              <li>Préparation du terrain.</li>
              <li>Imprévus : le cours suggère souvent environ 20 %.</li>
              <li>Électricité, plomberie et services professionnels.</li>
              <li>Budget d’investissement et financement.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="sectionBlock">
        <div className="sectionHeading">
          <p className="eyebrow">Documents et autorisations</p>
          <h2>2. Plans, permis et intervenants</h2>
        </div>
        <div className="noteBox">
          <p>Les plans peuvent être exigés pour une demande de permis. Le cours indique aussi de vérifier si un plan d’architecte ou d’ingénieur est requis selon la dimension et la valeur du projet.</p>
          <p>La municipalité est présentée comme la porte d’entrée pour les permis. La MRC, la CPTAQ, le ministère de l’Environnement, le ministère des Transports et le MAPAQ peuvent aussi intervenir selon le projet.</p>
        </div>
      </section>

      <section className="sectionBlock">
        <div className="sectionHeading">
          <p className="eyebrow">Chantier</p>
          <h2>3. Ordre des principales étapes</h2>
        </div>
        <ol className="timelineList">
          {chantier.map((etape, index) => (
            <li key={etape}>
              <strong>{index + 1}. {etape}</strong>
            </li>
          ))}
        </ol>
      </section>

      <section className="sectionBlock">
        <div className="sectionHeading">
          <p className="eyebrow">Fondations et structure</p>
          <h2>4. Ce qu’il faut retenir</h2>
        </div>
        <div className="cardGrid">
          <article className="sectionCard">
            <h3>Préparation et implantation</h3>
            <p>Le terrain peut être nivelé, rempli ou parfois nécessiter d’autres travaux. L’implantation sert à localiser précisément le bâtiment.</p>
          </article>
          <article className="sectionCard">
            <h3>Excavation et fondations</h3>
            <p>L’excavation prépare le terrain pour les fondations. La stabilité demande une assise sous la ligne de gel. Le cours présente notamment les fondations standards, les pieux, la dalle flottante et les blocs de béton.</p>
          </article>
          <article className="sectionCard">
            <h3>Plancher et murs</h3>
            <p>Le cours présente les solives, les poutrelles de plancher, l’aspenite, les madriers et certaines pièces métalliques avant d’aborder les murs.</p>
          </article>
          <article className="sectionCard">
            <h3>Toiture</h3>
            <p>La structure de toiture comprend notamment les fermes de toit. Le cours aborde aussi la pente, l’installation des chevrons, la finition, la tôle et les bardeaux.</p>
          </article>
        </div>
      </section>

      <section className="sectionBlock">
        <div className="sectionHeading">
          <p className="eyebrow">Réflexe important</p>
          <h2>5. Prévoir avant de fermer</h2>
        </div>
        <div className="noteBox">
          <p>
            Avant la fermeture et la finition, il faut essayer de prévoir les besoins de plomberie,
            d’électricité et de ventilation afin d’éviter de rouvrir inutilement les murs ou les plafonds.
          </p>
        </div>
      </section>
    </div>
  );
}

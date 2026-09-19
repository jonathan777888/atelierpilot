import { SectionCard } from "@/components/SectionCard";

export default function Home() {
  return (
    <>
      <section className="hero shell">
        <div className="heroText">
          <p className="eyebrow">Charpenterie & menuiserie</p>
          <h1>Ton cours, organisé dans une application simple.</h1>
          <p className="lead">AtelierPilot transforme les modules 1 et 2 en fiches de révision, outils de mesure et quiz. Le labo du minot de pommes n’est pas intégré.</p>
          <div className="heroBadges" aria-label="Caractéristiques principales">
            <span>Basé sur tes fichiers</span>
            <span>Responsive</span>
            <span>GitHub Pages</span>
          </div>
        </div>
        <div className="heroVisual" aria-hidden="true">
          <div className="woodBoard boardOne">12&quot;</div>
          <div className="woodBoard boardTwo">3/4&quot;</div>
          <div className="measureTape">1/8 · 1/4 · 3/8 · 1/2 · 5/8 · 3/4 · 7/8</div>
        </div>
      </section>

      <section className="shell sectionBlock">
        <div className="sectionHeading">
          <p className="eyebrow">Modules</p>
          <h2>Choisis ce que tu veux revoir</h2>
        </div>
        <div className="cardGrid">
          <SectionCard href="/securite" icon="🦺" title="Sécurité">EPI, accidents et règles générales avec les outils.</SectionCard>
          <SectionCard href="/mesures" icon="📐" title="Mesures">Pouces, pieds, verges, fractions et conversion.</SectionCard>
          <SectionCard href="/outillage" icon="🔧" title="Outillage">Catégories d’outils manuels et outils électriques du cours.</SectionCard>
          <SectionCard href="/machines" icon="⚙️" title="Machines">Les huit machines présentées dans le module 2.</SectionCard>
          <SectionCard href="/quiz" icon="🧠" title="Quiz">Teste les informations réellement présentes dans les documents.</SectionCard>
          <SectionCard href="/sources" icon="📚" title="Sources">Ce qui vient des modules et ce qui reste à compléter en classe.</SectionCard>
        </div>
      </section>
    </>
  );
}

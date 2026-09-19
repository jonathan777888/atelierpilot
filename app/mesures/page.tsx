import { Converter } from "@/components/Converter";
import { imperialFacts, inchFractions } from "@/lib/course-data";

export default function MesuresPage() {
  return (
    <div className="shell pageShell">
      <header className="pageHeader">
        <p className="eyebrow">Module 2 · 2.1</p>
        <h1>Le ruban à mesurer</h1>
        <p className="lead">Les mesures impériales et les fractions indiquées dans le cours.</p>
      </header>

      <section className="factGrid">
        {imperialFacts.map((fact, index) => (
          <article className="factCard" key={fact}>
            <span>0{index + 1}</span>
            <strong>{fact}</strong>
          </article>
        ))}
      </section>

      <section className="contentCard verticalCard">
        <div>
          <p className="eyebrow">Fractions du pouce</p>
          <h2>Subdivisions présentées</h2>
        </div>
        <div className="fractionRow">
          {inchFractions.map((fraction) => <span key={fraction}>{fraction}&quot;</span>)}
        </div>
        <div className="ruler" aria-label="Illustration d'un pouce subdivisé en seizièmes">
          {Array.from({ length: 17 }, (_, i) => (
            <span className={i % 8 === 0 ? "tick major" : i % 4 === 0 ? "tick medium" : i % 2 === 0 ? "tick small" : "tick tiny"} key={i} />
          ))}
        </div>
        <p className="muted">Le document contient aussi des schémas de lecture du ruban. Les « petits trucs à savoir » de la page 1 sont laissés vides dans la source.</p>
      </section>

      <Converter />
    </div>
  );
}

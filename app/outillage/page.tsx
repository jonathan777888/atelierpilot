import { electricTools, manualToolCategories } from "@/lib/course-data";

export default function OutillagePage() {
  return (
    <div className="shell pageShell">
      <header className="pageHeader">
        <p className="eyebrow">Module 2 · 2.2–2.3</p>
        <h1>L’outillage</h1>
        <p className="lead">Les catégories et exemples tels qu’ils sont présentés dans les notes.</p>
      </header>

      <section className="splitPanels">
        <article className="contentCard verticalCard">
          <div>
            <p className="eyebrow">2.2</p>
            <h2>Outils manuels</h2>
          </div>
          <ul className="toolList">
            {manualToolCategories.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>

        <article className="contentCard verticalCard">
          <div>
            <p className="eyebrow">2.3</p>
            <h2>Outils électriques</h2>
          </div>
          <ul className="toolList electric">
            {electricTools.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>
      </section>
    </div>
  );
}

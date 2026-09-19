import { machines } from "@/lib/course-data";

const fields = ["Utilité / fonction", "Risques ou sources de danger", "Mesures de sécurité", "Fonctionnement / autres informations"];

export default function MachinesPage() {
  return (
    <div className="shell pageShell">
      <header className="pageHeader">
        <p className="eyebrow">Module 2 · 2.4</p>
        <h1>Les machines à bois</h1>
        <p className="lead">Le module demande de compléter ces fiches après les présentations de l’enseignant ou du technicien.</p>
      </header>

      <div className="machineGrid">
        {machines.map((machine, index) => (
          <article className="machineCard" key={machine}>
            <div className="machineTitle"><span>{String(index + 1).padStart(2, "0")}</span><h2>{machine}</h2></div>
            <dl>
              {fields.map((field) => (
                <div key={field}>
                  <dt>{field}</dt>
                  <dd>À compléter avec la démonstration en atelier.</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>

      <aside className="sourceNote">
        <strong>Important :</strong> le fichier source nomme ces machines, mais les réponses propres à chacune sont vides. L’application conserve volontairement ces champs à compléter au lieu d’ajouter des réponses extérieures au cours.
      </aside>
    </div>
  );
}

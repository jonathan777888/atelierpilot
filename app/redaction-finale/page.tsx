import { FinalDraftPlanner } from "@/components/FinalDraftPlanner";

export default function RedactionFinalePage() {
  return (
    <div className="shell pageShell">
      <header className="pageHeader">
        <p className="eyebrow">Épreuve finale · 40 % de la note finale</p>
        <h1>Préparer ma rédaction finale</h1>
        <p className="lead">
          Organise ton projet de petite structure agricole étape par étape avant de rédiger la version finale.
        </p>
      </header>

      <aside className="sourceNote finalDeadline">
        <strong>Remise :</strong> vendredi 4 décembre 2026 à 23 h 59, en version électronique. Le travail est individuel.
      </aside>

      <FinalDraftPlanner />
    </div>
  );
}

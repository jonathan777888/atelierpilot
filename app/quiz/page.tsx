import { Quiz } from "@/components/Quiz";

export default function QuizPage() {
  return (
    <div className="shell pageShell">
      <header className="pageHeader">
        <p className="eyebrow">Révision</p>
        <h1>Quiz AtelierPilot</h1>
        <p className="lead">Les questions couvrent maintenant les modules de base ainsi que les grandes étapes de la construction d’un bâtiment agricole.</p>
      </header>
      <Quiz />
    </div>
  );
}

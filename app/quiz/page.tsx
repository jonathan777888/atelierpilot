import { Quiz } from "@/components/Quiz";

export default function QuizPage() {
  return (
    <div className="shell pageShell">
      <header className="pageHeader">
        <p className="eyebrow">Révision</p>
        <h1>Quiz des modules 1 et 2</h1>
        <p className="lead">Toutes les réponses sont basées sur les informations écrites dans les deux documents.</p>
      </header>
      <Quiz />
    </div>
  );
}

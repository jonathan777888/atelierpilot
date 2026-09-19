"use client";

import { useState } from "react";

const questions = [
  { q: "Combien de centimètres vaut 1 pouce ?", choices: ["2,54 cm", "12 cm", "36 cm"], answer: 0 },
  { q: "Combien de pouces y a-t-il dans 1 pied ?", choices: ["10", "12", "16"], answer: 1 },
  { q: "Quel équipement est obligatoire en tout temps selon le cours ?", choices: ["Lunettes de protection", "Masque respiratoire", "Gants"], answer: 0 },
  { q: "Peut-on ajuster un guide pendant que l’appareil fonctionne ?", choices: ["Oui", "Non", "Seulement pour une petite correction"], answer: 1 },
  { q: "Que faut-il faire en cas de bris d’une machine ?", choices: ["Continuer lentement", "Couper le courant et aviser un responsable", "Réparer seul immédiatement"], answer: 1 },
  { q: "Une verge correspond à…", choices: ["24 pouces", "36 pouces", "48 pouces"], answer: 1 },
  { q: "Laquelle apparaît dans la liste des outils électriques du cours ?", choices: ["Toupie", "Étau", "Équerre"], answer: 0 },
  { q: "Avant d’opérer une machine, le cours demande notamment de…", choices: ["Comprendre son fonctionnement et identifier les dangers", "Travailler le plus vite possible", "Retirer les accessoires de sécurité"], answer: 0 },
];

export function Quiz() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const score = questions.reduce((total, question, index) => total + (answers[index] === question.answer ? 1 : 0), 0);

  function choose(questionIndex: number, choiceIndex: number) {
    setAnswers((current) => ({ ...current, [questionIndex]: choiceIndex }));
    setSubmitted(false);
  }

  return (
    <div className="quizStack">
      {questions.map((question, index) => (
        <fieldset className="quizCard" key={question.q}>
          <legend><span>Question {index + 1}</span>{question.q}</legend>
          <div className="choiceGrid">
            {question.choices.map((choice, choiceIndex) => {
              const selected = answers[index] === choiceIndex;
              const status = submitted
                ? choiceIndex === question.answer
                  ? "correct"
                  : selected
                    ? "wrong"
                    : ""
                : selected
                  ? "selected"
                  : "";
              return (
                <button
                  className={`choice ${status}`}
                  type="button"
                  key={choice}
                  onClick={() => choose(index, choiceIndex)}
                  aria-pressed={selected}
                >
                  {choice}
                </button>
              );
            })}
          </div>
        </fieldset>
      ))}
      <div className="quizActions">
        <button className="primaryButton" type="button" onClick={() => setSubmitted(true)}>
          Corriger le quiz
        </button>
        {submitted ? <p className="score" role="status">Résultat : <strong>{score}/{questions.length}</strong></p> : null}
      </div>
    </div>
  );
}

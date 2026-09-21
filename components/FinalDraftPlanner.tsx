"use client";

import { useEffect, useMemo, useState } from "react";

type Section = {
  id: string;
  number: string;
  title: string;
  points: number;
  goal: string;
  prompts: string[];
};

const sections: Section[] = [
  {
    id: "besoins",
    number: "1",
    title: "Besoins, usages et fonctions",
    points: 10,
    goal: "Préparer un texte de 1 à 2 pages qui explique clairement à quoi servira le bâtiment.",
    prompts: [
      "Décrire les usages et les fonctions de la structure.",
      "Quantifier les besoins d’espace : aménagement, ameublement et circulation.",
      "Préciser les dimensions nécessaires.",
      "Dire si le bâtiment doit être isolé ou chauffé.",
      "Préciser les besoins en eau courante et en électricité.",
      "Expliquer comment les besoins ont été déterminés : références, visites de fermes ou autres démarches.",
      "Prévoir le développement futur et le potentiel d’agrandissement ou de conversion."
    ]
  },
  {
    id: "reglements",
    number: "2",
    title: "Lois et règlements applicables",
    points: 20,
    goal: "Montrer les recherches réalisées et les démarches nécessaires pour rendre le projet conforme.",
    prompts: [
      "Vérifier la demande de permis de construction à la municipalité.",
      "Vérifier l’impact possible du schéma d’aménagement de la MRC.",
      "Vérifier si des démarches auprès de la CPTAQ sont nécessaires.",
      "Identifier les normes sanitaires applicables.",
      "Vérifier la réglementation sur l’affichage, si elle s’applique.",
      "Vérifier les règles ou normes liées à un éventuel stationnement.",
      "Noter les autres lois ou règlements qui concernent le projet.",
      "Si une personne est contactée : noter son nom, son titre, le moyen de communication et la date des échanges."
    ]
  },
  {
    id: "construction",
    number: "3",
    title: "Besoins pour la construction",
    points: 50,
    goal: "Préparer les plans, justifier la conception et calculer les matériaux et les coûts.",
    prompts: [
      "Faire un croquis à l’échelle et indiquer l’échelle au bas du plan.",
      "Montrer les divisions, portes et fenêtres.",
      "Identifier l’entrée électrique, les prises, les lumières et autres installations électriques.",
      "Identifier l’entrée d’eau et la sortie des égouts.",
      "Faire un plan de la structure et un croquis de chacune des façades.",
      "Montrer l’aménagement intérieur.",
      "Présenter et justifier le choix des matériaux.",
      "Justifier les techniques d’assemblage lorsqu’il y a lieu.",
      "Préparer une tranche de mur pour illustrer la conception et les matériaux.",
      "Dresser la liste des matériaux par section : plancher, murs, toiture, etc.",
      "Calculer les quantités et obtenir des soumissions pour les matériaux.",
      "Présenter un tableau récapitulatif des coûts."
    ]
  },
  {
    id: "echeancier",
    number: "4",
    title: "Séquence de travail et échéancier",
    points: 10,
    goal: "Présenter dans un tableau les étapes du projet dans un ordre logique avec une estimation du temps.",
    prompts: [
      "Inclure les démarches à faire avant le début du chantier.",
      "Classer les étapes de réalisation dans une séquence logique.",
      "Estimer le temps requis pour chaque étape."
    ]
  },
  {
    id: "entretien",
    number: "5",
    title: "Entretiens à prévoir",
    points: 10,
    goal: "Prévoir ce qu’il faudra faire pour maintenir l’intégrité de la structure.",
    prompts: [
      "Lister les types d’entretien nécessaires.",
      "Préciser une fréquence approximative pour chaque entretien.",
      "Préciser les matériaux nécessaires.",
      "Estimer les autres coûts à considérer."
    ]
  }
];

type DraftState = {
  projectName: string;
  projectType: string;
  notes: Record<string, string>;
  checked: Record<string, boolean>;
};

const initialState: DraftState = {
  projectName: "",
  projectType: "",
  notes: {},
  checked: {}
};

const storageKey = "atelierpilot-final-draft-v1";

export function FinalDraftPlanner() {
  const [state, setState] = useState<DraftState>(initialState);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const raw = window.localStorage.getItem(storageKey);
    if (!raw) return;
    try {
      setState(JSON.parse(raw));
    } catch {
      // Ignore a corrupted local draft and keep a clean planner.
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(state));
    setSaved(true);
    const timer = window.setTimeout(() => setSaved(false), 900);
    return () => window.clearTimeout(timer);
  }, [state]);

  const allPrompts = sections.flatMap((section) =>
    section.prompts.map((prompt, index) => ({ key: `${section.id}-${index}`, prompt }))
  );

  const completed = allPrompts.filter(({ key }) => state.checked[key]).length;
  const progress = allPrompts.length ? Math.round((completed / allPrompts.length) * 100) : 0;

  const exportText = useMemo(() => {
    const header = [
      "PLAN DE PRÉPARATION — ÉPREUVE FINALE",
      `Projet : ${state.projectName || "À préciser"}`,
      `Type de bâtiment : ${state.projectType || "À préciser"}`,
      ""
    ];

    const body = sections.flatMap((section) => [
      `${section.number}. ${section.title} (${section.points} points)`,
      section.goal,
      ...section.prompts.map((prompt, index) => {
        const key = `${section.id}-${index}`;
        return `${state.checked[key] ? "✓" : "□"} ${prompt}`;
      }),
      "Notes / idées :",
      state.notes[section.id] || "",
      ""
    ]);

    return [...header, ...body].join("\n");
  }, [state]);

  async function copyPlan() {
    await navigator.clipboard.writeText(exportText);
  }

  function resetDraft() {
    if (window.confirm("Effacer toutes les notes et cases cochées de ce brouillon ?")) {
      setState(initialState);
    }
  }

  return (
    <div className="draftPlanner">
      <section className="draftOverview">
        <div>
          <p className="eyebrow">Épreuve finale</p>
          <h2>Mon plan de rédaction</h2>
          <p className="muted">Tes notes sont enregistrées automatiquement dans ce navigateur.</p>
        </div>
        <div className="draftProgress" aria-label={`Progression ${progress}%`}>
          <strong>{progress}%</strong>
          <span>{completed}/{allPrompts.length} éléments préparés</span>
          <div className="progressTrack"><span style={{ width: `${progress}%` }} /></div>
        </div>
      </section>

      <section className="projectFields">
        <label>
          Nom de mon projet
          <input
            value={state.projectName}
            onChange={(event) => setState((current) => ({ ...current, projectName: event.target.value }))}
            placeholder="Ex. Kiosque de vente de La Ferme de l’avenir"
          />
        </label>
        <label>
          Type de bâtiment
          <input
            value={state.projectType}
            onChange={(event) => setState((current) => ({ ...current, projectType: event.target.value }))}
            placeholder="Ex. kiosque, remise, garage, hangar…"
          />
        </label>
      </section>

      <div className="draftSectionGrid">
        {sections.map((section) => (
          <section className="draftSection" key={section.id}>
            <header className="draftSectionHeader">
              <span className="draftNumber">{section.number}</span>
              <div>
                <h2>{section.title}</h2>
                <p>{section.points} points</p>
              </div>
            </header>

            <p className="draftGoal">{section.goal}</p>

            <div className="draftChecklist">
              {section.prompts.map((prompt, index) => {
                const key = `${section.id}-${index}`;
                return (
                  <label className="draftCheck" key={key}>
                    <input
                      type="checkbox"
                      checked={Boolean(state.checked[key])}
                      onChange={(event) =>
                        setState((current) => ({
                          ...current,
                          checked: { ...current.checked, [key]: event.target.checked }
                        }))
                      }
                    />
                    <span>{prompt}</span>
                  </label>
                );
              })}
            </div>

            <label className="notesLabel">
              Mes idées, références et données à intégrer
              <textarea
                rows={8}
                value={state.notes[section.id] || ""}
                onChange={(event) =>
                  setState((current) => ({
                    ...current,
                    notes: { ...current.notes, [section.id]: event.target.value }
                  }))
                }
                placeholder="Écris ici tes chiffres, sources, idées de paragraphes, personnes contactées, coûts, dimensions, etc."
              />
            </label>
          </section>
        ))}
      </div>

      <section className="draftActions">
        <div>
          <strong>{saved ? "Brouillon enregistré" : "Préparation prête"}</strong>
          <p>Tu peux copier ton plan pour le reprendre ensuite dans Word ou Google Docs.</p>
        </div>
        <div className="draftButtons">
          <button className="secondaryButton" type="button" onClick={resetDraft}>Effacer le brouillon</button>
          <button className="primaryButton" type="button" onClick={copyPlan}>Copier mon plan</button>
        </div>
      </section>
    </div>
  );
}

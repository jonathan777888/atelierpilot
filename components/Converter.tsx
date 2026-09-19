"use client";

import { useState } from "react";

export function Converter() {
  const [inches, setInches] = useState("1");
  const parsed = Number.parseFloat(inches.replace(",", "."));
  const centimeters = Number.isFinite(parsed) ? parsed * 2.54 : null;

  return (
    <section className="toolPanel" aria-labelledby="converter-title">
      <div>
        <p className="eyebrow">Calculateur</p>
        <h2 id="converter-title">Pouces → centimètres</h2>
        <p>Le cours donne la relation : 1 pouce = 2,54 cm.</p>
      </div>
      <label className="inputLabel" htmlFor="inches">Nombre de pouces</label>
      <div className="converterRow">
        <input
          id="inches"
          inputMode="decimal"
          value={inches}
          onChange={(event) => setInches(event.target.value)}
          aria-describedby="conversion-result"
        />
        <span aria-hidden="true">× 2,54 =</span>
        <output id="conversion-result">
          {centimeters === null ? "—" : `${centimeters.toFixed(2).replace(".", ",")} cm`}
        </output>
      </div>
    </section>
  );
}

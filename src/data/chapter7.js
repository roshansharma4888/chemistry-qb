// Chapter 7: Redox Reactions & Electrochemistry
export const chapter7 = {
  id: 7,
  name: "Redox Reactions & Electrochemistry",
  icon: "⚡",
  color: "#A32D2D",
  light: "#FCEBEB",
  questions: [
    // ============== MCQs ==============
    {
      id: "c7-mcq-1",
      type: "MCQ",
      source: "Set 1",
      q: "When KMnO₄ is reduced by oxalic acid in acidic solution, oxidation number of Mn changes from:",
      options: ["A. +7 to +2", "B. +7 to +4", "C. +7 to +6", "D. None"],
      answer: "A. +7 to +2",
      solution: "In acidic medium, MnO₄⁻ (Mn +7) is reduced to Mn²⁺ (Mn +2). In neutral/weakly basic medium, it goes to MnO₂ (+4); in strongly basic, to MnO₄²⁻ (+6)."
    },
    {
      id: "c7-mcq-2",
      type: "MCQ",
      source: "Set 2",
      q: "In which compound does chlorine show +7 oxidation state?",
      options: ["A. HClO₃", "B. HClO₄", "C. HClO₂", "D. HClO"],
      answer: "B. HClO₄",
      solution: "In HClO₄: H=+1, O=-2 (×4 = -8). 1 + Cl + (-8) = 0 → Cl = +7. In HClO₃: Cl = +5; HClO₂: +3; HClO: +1."
    },
    {
      id: "c7-mcq-3",
      type: "MCQ",
      source: "Set 5",
      q: "In a cell, oxidation takes place at:",
      options: ["A. Anode", "B. Cathode", "C. Electrolyte", "D. None of the above"],
      answer: "A. Anode",
      solution: "In any electrochemical cell, oxidation occurs at the anode (positive electrode in galvanic cell, negative in electrolytic cell). Reduction occurs at the cathode."
    },

    // ============== Short Answer Questions ==============
    {
      id: "c7-sa-1",
      type: "Short",
      source: "Set 2",
      q: "Balance by oxidation number or ion-electron method: NaOH + Cl₂ → NaCl + NaClO₃ + H₂O. A current of 0.6 A passed through AgNO₃ deposits 0.2013 g Ag. Calculate duration. (At. mass Ag = 108)",
      answer: "3Cl₂ + 6NaOH → 5NaCl + NaClO₃ + 3H₂O. Time = 300 s.",
      solution: `BALANCING:
Cl₂ (0) → Cl⁻ in NaCl (-1): reduction, gain of 1 e⁻ per Cl atom = 2e⁻ per Cl₂.
Cl₂ (0) → Cl in NaClO₃ (+5): oxidation, loss of 5 e⁻ per Cl atom.

For balance: 5 Cl₂ disproportionate as:
- One Cl₂ gives 2 Cl atoms oxidized: loses 10 e⁻ total (per Cl₂).
Multiplying:
1 Cl atom oxidized × 5 e⁻ = 5 e⁻
5 Cl atoms reduced × 1 e⁻ = 5 e⁻ → balanced

Net per 1 oxidized + 5 reduced = 6 Cl atoms = 3 Cl₂.
3Cl₂ + 6NaOH → 5NaCl + NaClO₃ + 3H₂O ✓

ELECTROLYSIS NUMERICAL:
By Faraday's first law: m = (E × I × t)/F, where E = M/n (eq. wt).
For Ag, E = 108/1 = 108.
0.2013 = (108 × 0.6 × t)/96500
t = (0.2013 × 96500)/(108 × 0.6) = 19425/64.8 = 299.8 ≈ 300 seconds = 5 minutes.`
    },
    {
      id: "c7-sa-2",
      type: "Short",
      source: "Set 1",
      q: "Identify oxidant and reductant in: P + HNO₃ → H₃PO₄ + H₂O + NO₂. Balance by oxidation number method. State Faraday's laws of electrolysis.",
      answer: "Oxidant: HNO₃; Reductant: P. Balanced: P + 5HNO₃ → H₃PO₄ + 5NO₂ + H₂O.",
      solution: `OXIDATION CHANGES:
P (0) → P (+5) in H₃PO₄: loses 5 e⁻ per P.
N (+5) in HNO₃ → N (+4) in NO₂: gains 1 e⁻ per N.

Balance electrons: 1 P × 5 e⁻ = 5 N × 1 e⁻
So 1 P : 5 HNO₃ : 5 NO₂.

Reaction: P + 5HNO₃ → H₃PO₄ + 5NO₂ + H₂O
Check atoms: H = 5 (LHS) → 3+2 = 5 ✓; N = 5; O = 5×3=15 (LHS), 4 + 5×2 + 1 = 15 (RHS) ✓.

Oxidant: HNO₃ (gets reduced)
Reductant: P (gets oxidized)

FARADAY'S LAWS:
1st Law: The mass of substance deposited at an electrode during electrolysis is directly proportional to the quantity of electricity passed.
m ∝ Q or m = ZIt (Z = electrochemical equivalent).

2nd Law: When the same quantity of electricity is passed through different electrolytes, the masses of substances liberated are proportional to their equivalent weights.
m₁/m₂ = E₁/E₂`
    },
    {
      id: "c7-sa-3",
      type: "Short",
      source: "HISSAN 2081",
      q: "Define oxidizing and reducing agents with examples. Balance: P₄ + HNO₃ → H₃PO₄ + NO₂ + H₂O.",
      answer: "P₄ + 20HNO₃ → 4H₃PO₄ + 20NO₂ + 4H₂O.",
      solution: `OXIDIZING AGENT: A substance that accepts electrons (gets reduced) and oxidizes others. Example: KMnO₄, O₂, Cl₂.
REDUCING AGENT: A substance that loses electrons (gets oxidized) and reduces others. Example: H₂, Na, FeSO₄.

BALANCING P₄ + HNO₃ → H₃PO₄ + NO₂ + H₂O:
P (0) in P₄ → P (+5) in H₃PO₄: loses 5 e⁻ per P, 20 e⁻ per P₄.
N (+5) in HNO₃ → N (+4) in NO₂: gains 1 e⁻ per N.

Balance: 20 e⁻ lost (P₄) = 20 e⁻ gained (20 N atoms).
P₄ + 20HNO₃ → 4H₃PO₄ + 20NO₂ + 4H₂O
H: 20 = 12 + 8 = 20 ✓
N: 20 = 20 ✓
O: 60 = 16 + 40 + 4 = 60 ✓`
    },
    {
      id: "c7-sa-4",
      type: "Short",
      source: "Set 5",
      q: "Balance: Zn + HNO₃ → Zn(NO₃)₂ + NH₄NO₃ + H₂O. Justify it is a redox reaction.",
      answer: "4Zn + 10HNO₃ → 4Zn(NO₃)₂ + NH₄NO₃ + 3H₂O.",
      solution: `OXIDATION CHANGES:
Zn (0) → Zn²⁺ in Zn(NO₃)₂: loses 2 e⁻ per Zn.
N (+5) in some HNO₃ → N (-3) in NH₄⁺: gains 8 e⁻ per N.

Electron balance: 4 Zn × 2 e⁻ = 8 e⁻; 1 N × 8 e⁻ = 8 e⁻. So 4 Zn : 1 N reduced.

Coefficient analysis:
- 4 Zn → 4 Zn(NO₃)₂ requires 8 NO₃⁻ from HNO₃ (not reduced, just spectator).
- 1 N is reduced to NH₄ in NH₄NO₃, which also has 1 NO₃⁻ spectator.
- Total N: 8 (in Zn(NO₃)₂) + 1 (reduced) + 1 (NO₃ of NH₄NO₃) = 10.

So 4Zn + 10HNO₃ → 4Zn(NO₃)₂ + NH₄NO₃ + 3H₂O.
Check H: 10 = 4 + 6 ✓; O: 30 = 24 + 3 + 3 ✓.

REDOX JUSTIFICATION: Zn loses electrons (oxidized) and N gains electrons (reduced). Both oxidation and reduction occur → redox reaction.`
    },
    {
      id: "c7-sa-5",
      type: "Short",
      source: "Set 6",
      q: "Define oxidant and reductant. Balance and identify them: P₄ + NaOH + H₂O → PH₃ + NaH₂PO₂.",
      answer: "P₄ + 3NaOH + 3H₂O → PH₃ + 3NaH₂PO₂.",
      solution: `OXIDANT (Oxidizing agent): Species that gets reduced (accepts electrons).
REDUCTANT (Reducing agent): Species that gets oxidized (loses electrons).

BALANCING: This is disproportionation of P (P₄ acts as both oxidant and reductant).
P (0) → P (-3) in PH₃: gains 3 e⁻ per P.
P (0) → P (+1) in NaH₂PO₂: loses 1 e⁻ per P.

Balance: 1 P gains 3 e⁻; 3 P lose 1 e⁻ each = 3 e⁻ total. So 1:3 ratio.
P₄ (4 atoms): 1 P reduced + 3 P oxidized (matches 4 atoms).

P₄ + 3NaOH + 3H₂O → PH₃ + 3NaH₂PO₂
Check: P: 4 = 1+3 ✓; Na: 3=3 ✓; O: 3+3 = 6 = 3×2 ✓; H: 3+6 = 9 = 3 + 3×2 = 9 ✓.

OXIDANT and REDUCTANT: Both are P₄ (disproportionation).`
    },
    {
      id: "c7-sa-6",
      type: "Short",
      source: "Set 7",
      q: "Balance by oxidation number or ion electron method: MnO₂ + HCl → MnCl₂ + Cl₂ + H₂O. Define reducing agent with example.",
      answer: "MnO₂ + 4HCl → MnCl₂ + Cl₂ + 2H₂O.",
      solution: `REDUCING AGENT: Substance that donates electrons (gets oxidized itself).
Example: H₂, Na, FeSO₄, KI.

BALANCING:
Mn (+4) in MnO₂ → Mn (+2) in MnCl₂: gains 2 e⁻.
Cl (-1) in HCl → Cl (0) in Cl₂: each Cl loses 1 e⁻, so 2 Cl lose 2 e⁻.

Balance: 1 Mn × 2 e⁻ = 2 Cl × 1 e⁻ → 1:2 (Mn:Cl₂ — but Cl₂ has 2 Cl, so 1 Cl₂ produced per Mn).
MnO₂ + 4HCl → MnCl₂ + Cl₂ + 2H₂O
(4 HCl total: 2 go to MnCl₂ as spectator Cl⁻, 2 are oxidized to Cl₂.)

Check: Mn: 1=1; Cl: 4 = 2 + 2 ✓; H: 4 = 4 ✓; O: 2 = 2 ✓.`
    },
    {
      id: "c7-sa-7",
      type: "Short",
      source: "Set 3",
      q: "Define oxidation and reduction according to modern concept. Why do they occur simultaneously? Balance Zn + HNO₃ → Zn(NO₃)₂ + H₂O + NH₄NO₃.",
      answer: "4Zn + 10HNO₃ → 4Zn(NO₃)₂ + NH₄NO₃ + 3H₂O.",
      solution: `MODERN CONCEPT:
- Oxidation: Loss of electrons (Zn → Zn²⁺ + 2e⁻).
- Reduction: Gain of electrons (Cu²⁺ + 2e⁻ → Cu).

SIMULTANEOUS OCCURRENCE:
Electrons cannot exist freely in solution. When one species loses electrons (oxidation), another must gain them (reduction). So oxidation and reduction must occur together — hence the term "redox reaction".

BALANCING: (See Short Answer #4 above for the same reaction balanced.)`
    },
    {
      id: "c7-sa-8",
      type: "Short",
      source: "Set 8 (Set 4)",
      q: "Balance: (i) Cr₂O₇²⁻ + SO₃²⁻ → Cr³⁺ + SO₄²⁻ (ii) Al + O₂ → Al₂O₃.",
      answer: "(i) Cr₂O₇²⁻ + 3SO₃²⁻ + 8H⁺ → 2Cr³⁺ + 3SO₄²⁻ + 4H₂O. (ii) 4Al + 3O₂ → 2Al₂O₃.",
      solution: `(i) Cr₂O₇²⁻ + SO₃²⁻ → Cr³⁺ + SO₄²⁻ (acidic medium, ion-electron method)

Half-reactions:
Oxidation: SO₃²⁻ → SO₄²⁻ + 2e⁻ (with H₂O and H⁺)
Balanced: SO₃²⁻ + H₂O → SO₄²⁻ + 2H⁺ + 2e⁻

Reduction: Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O

Multiply oxidation by 3: 3SO₃²⁻ + 3H₂O → 3SO₄²⁻ + 6H⁺ + 6e⁻
Add to reduction:
Cr₂O₇²⁻ + 3SO₃²⁻ + 14H⁺ + 3H₂O → 2Cr³⁺ + 3SO₄²⁻ + 6H⁺ + 7H₂O
Simplify: Cr₂O₇²⁻ + 3SO₃²⁻ + 8H⁺ → 2Cr³⁺ + 3SO₄²⁻ + 4H₂O ✓

(ii) Al + O₂ → Al₂O₃
Al (0) → Al³⁺: loses 3 e⁻
O₂ (0) → O²⁻: gains 4 e⁻ per O₂

Balance: 4 Al × 3 e⁻ = 12 e⁻; 3 O₂ × 4 e⁻ = 12 e⁻.
4Al + 3O₂ → 2Al₂O₃ ✓`
    },
    {
      id: "c7-sa-9",
      type: "Short",
      source: "Set 8 (Set 4)",
      q: "Why does calcium metal not deposit instead of sodium at cathode in Down's cell? State Faraday's first law of electrolysis. A current of 2.5 A passes through divalent metal salt solution for 30 min and deposits 1.52 g of metal. Calculate atomic weight.",
      answer: "At. wt = 65.2 (Zinc).",
      solution: `In Down's cell, NaCl + CaCl₂ are melted together. CaCl₂ lowers the melting point of NaCl from 800°C to about 600°C.
At the cathode, the cation with the LOWER reduction potential is preferentially reduced. Ca²⁺ has a more negative reduction potential than Na⁺, meaning Na⁺ is reduced more easily. Hence Na is deposited, not Ca.

FARADAY'S FIRST LAW: The mass of substance deposited at an electrode during electrolysis is directly proportional to the quantity of electricity passed.
m = Z × I × t, where Z is the electrochemical equivalent.

NUMERICAL:
I = 2.5 A, t = 30 × 60 = 1800 s
Q = I × t = 2.5 × 1800 = 4500 C
m = E × Q / F → E = m × F / Q = (1.52 × 96500) / 4500 = 32.59
For divalent metal: At. wt = E × 2 = 32.59 × 2 = 65.18 ≈ 65.2 g/mol.
This corresponds to Zinc (Zn, At. wt = 65.4).`
    }
  ]
};

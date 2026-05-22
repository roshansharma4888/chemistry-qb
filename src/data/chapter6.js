// Chapter 6: Periodic Table & Periodic Properties
export const chapter6 = {
  id: 6,
  name: "Periodic Table & Periodic Properties",
  icon: "📊",
  color: "#993C1D",
  light: "#FAECE7",
  questions: [
    // ============== MCQs ==============
    {
      id: "c6-mcq-1",
      type: "MCQ",
      source: "Set 1",
      q: "Thermally most stable alkaline earth metal carbonate is:",
      options: ["A. MgCO₃", "B. CaCO₃", "C. SrCO₃", "D. BaCO₃"],
      answer: "D. BaCO₃",
      solution: "Stability of carbonates increases down the group. Larger cation = less polarizing power = more stable carbonate ion = more stable carbonate. Order: MgCO₃ < CaCO₃ < SrCO₃ < BaCO₃."
    },
    {
      id: "c6-mcq-2",
      type: "MCQ",
      source: "Set 2",
      q: "Which of the following is strongest base?",
      options: ["A. Al(OH)₃", "B. Ca(OH)₂", "C. Ba(OH)₂", "D. Sr(OH)₂"],
      answer: "C. Ba(OH)₂",
      solution: "Basicity increases down group II. Larger ions release OH⁻ more easily. Among given: Ba(OH)₂ > Sr(OH)₂ > Ca(OH)₂. Al(OH)₃ is amphoteric, not strongly basic."
    },
    {
      id: "c6-mcq-3",
      type: "MCQ",
      source: "Set 3",
      q: "Solubility of alkaline earth metal carbonates (correct order):",
      options: ["A. MgCO₃ > SrCO₃ > CaCO₃ > BaCO₃", "B. CaCO₃ > MgCO₃ > BeCO₃ > SrCO₃", "C. SrCO₃ > MgCO₃ > CaCO₃ > BaCO₃", "D. MgCO₃ > CaCO₃ > SrCO₃ > BaCO₃"],
      answer: "D. MgCO₃ > CaCO₃ > SrCO₃ > BaCO₃",
      solution: "Solubility of group II carbonates DECREASES down the group due to decreasing hydration enthalpy (smaller cations are hydrated more strongly)."
    },
    {
      id: "c6-mcq-4",
      type: "MCQ",
      source: "Set 4",
      q: "In liquid ammonia, alkali metal gives which colour?",
      options: ["A. Red", "B. Blue", "C. Yellow", "D. Pink"],
      answer: "B. Blue",
      solution: "Alkali metals dissolve in liquid ammonia to give a deep blue solution due to the presence of solvated (ammoniated) electrons."
    },
    {
      id: "c6-mcq-5",
      type: "MCQ",
      source: "Set 5",
      q: "Which is most acidic?",
      options: ["A. Al₂O₃", "B. Na₂O", "C. MgO", "D. CaO"],
      answer: "A. Al₂O₃",
      solution: "Acidic character of oxides increases as we move from left to right in a period. Al₂O₃ is amphoteric but the most acidic among the given options. Na₂O, MgO, CaO are basic."
    },
    {
      id: "c6-mcq-6",
      type: "MCQ",
      source: "Set 7",
      q: "Alkali metals are reducing agents because:",
      options: ["A. They are metal", "B. They are monovalent", "C. Their ionization potential is low", "D. They have small atomic radii"],
      answer: "C. Their ionization potential is low",
      solution: "Low IE means alkali metals lose electrons easily → strong reducing agents."
    },
    {
      id: "c6-mcq-7",
      type: "MCQ",
      source: "Set 8 (Set 4 in document)",
      q: "Which is the correct order of nitrates of alkaline earth metals (thermal stability)?",
      options: ["A. Mg(NO₃)₂ < Ca(NO₃)₂ < Sr(NO₃)₂ < Ba(NO₃)₂", "B. Mg < Ca < Sr < Ba (stability increases)", "C. Mixed", "D. Mg > Sr > Ca > Ba"],
      answer: "A. Mg < Ca < Sr < Ba (stability increases)",
      solution: "Thermal stability of nitrates of group II increases down the group: Mg(NO₃)₂ < Ca(NO₃)₂ < Sr(NO₃)₂ < Ba(NO₃)₂."
    },

    // ============== Short Answer Questions ==============
    {
      id: "c6-sa-1",
      type: "Short",
      source: "Set 1 (OR)",
      q: "Factors affecting atomic size. How do atomic radii vary along period and group? Arrange in decreasing order: Na⁺, F⁻, Mg²⁺.",
      answer: "F⁻ > Na⁺ > Mg²⁺.",
      solution: `FACTORS AFFECTING ATOMIC SIZE:
1. Nuclear charge (greater → smaller)
2. Number of shells (more → larger)
3. Shielding effect (more → larger)
4. Effective nuclear charge

ALONG A PERIOD (left → right): Atomic radius DECREASES because nuclear charge increases while electrons are added to the same shell.

DOWN A GROUP: Atomic radius INCREASES because new shells are added.

ISOELECTRONIC SPECIES (all 10 electrons):
F⁻ (Z=9, 10 e⁻) → least nuclear pull → largest
Na⁺ (Z=11, 10 e⁻) → medium pull
Mg²⁺ (Z=12, 10 e⁻) → strongest pull → smallest
Order: F⁻ > Na⁺ > Mg²⁺.`
    },
    {
      id: "c6-sa-2",
      type: "Short",
      source: "Set 2",
      q: "Arrange Na, Mg, Al, Si in decreasing order of first IE. Which is most reactive and why? How does IE differ from EA?",
      answer: "IE order: Si > Mg > Al > Na. Most reactive: Na.",
      solution: `FIRST IE values (kJ/mol):
Na: 496, Mg: 738, Al: 577, Si: 786
Order: Si > Mg > Al > Na

(Mg > Al because Mg has fully filled 3s², extra stable.)

MOST REACTIVE: Sodium (Na).
Reason: Lowest IE → loses electron most easily → most reactive metal (towards forming positive ions).

IE vs EA:
- IE: Energy REQUIRED to REMOVE an electron from a neutral, gaseous atom. (Endothermic.)
  X(g) → X⁺(g) + e⁻
- EA: Energy RELEASED when an electron is ADDED to a neutral, gaseous atom. (Usually exothermic.)
  X(g) + e⁻ → X⁻(g)

IE relates to formation of cations; EA relates to formation of anions.`
    },
    {
      id: "c6-sa-3",
      type: "Short",
      source: "Set 4 (Set 8)",
      q: "First ionization energies of period 2 elements (kJ/mol): Li=520, Be=899, B=801, C=1086, N=1403, O=1314, F=1681, Ne=2080. (i) Define first IE. (ii) Why is IE of N higher than O? (iii) Which element is most difficult to ionize? (iv) Why steep rise from C to N?",
      answer: "Most difficult: Ne. N's half-filled 2p³ → extra stable.",
      solution: `(i) FIRST IONIZATION ENERGY: The minimum energy required to remove the most loosely bound electron from an isolated, gaseous atom in its ground state.
X(g) → X⁺(g) + e⁻, ΔH = IE₁

(ii) IE(N) > IE(O) because:
N: 1s² 2s² 2p³ (half-filled, extra stable)
O: 1s² 2s² 2p⁴ (one paired electron in 2p, electron-electron repulsion makes it easier to lose)

(iii) Ne has the highest IE (2080 kJ/mol) — most difficult to ionize. Reason: stable octet configuration (1s² 2s² 2p⁶).

(iv) STEEP RISE FROM C TO N:
N's electronic configuration (1s² 2s² 2p³) has a half-filled 2p subshell which is exchange-stabilized. Removing an electron from this stable arrangement requires significantly more energy than from C (2p²). Hence, the sharp jump.`
    },
    {
      id: "c6-sa-4",
      type: "Short",
      source: "Set 5",
      q: "Define periodicity. What are its causes?",
      answer: "Periodicity = recurrence of similar properties at regular intervals.",
      solution: `PERIODICITY: The repetition of similar physical and chemical properties of elements after certain regular intervals when arranged in order of increasing atomic number.

CAUSE: The recurrence of similar outer-shell electronic configurations at regular intervals. Elements with similar valence-shell configurations behave similarly chemically.

For example, alkali metals (Li, Na, K, Rb, Cs) all have one electron in the outermost s-orbital — hence similar properties.

The "regular intervals" are 2, 8, 8, 18, 18, 32 — corresponding to the maximum number of electrons in successive shells.`
    },
    {
      id: "c6-sa-5",
      type: "Short",
      source: "Set 7",
      q: "What is electron affinity? Factors that influence its magnitude. Which has more EA — N or O — and why?",
      answer: "O > N in EA. N's half-filled 2p³ resists extra electron.",
      solution: `ELECTRON AFFINITY: The energy released when an electron is added to a neutral, gaseous atom to form a uninegative ion.
X(g) + e⁻ → X⁻(g) + EA

FACTORS:
1. Atomic size: Smaller atom → higher EA (electron close to nucleus).
2. Nuclear charge: Higher → higher EA.
3. Electronic configuration: Stable configs (half-filled or filled) have low EA.
4. Shielding: More shielding → lower EA.

EA(N) vs EA(O):
N: 1s² 2s² 2p³ — half-filled 2p is stable, resists accepting an electron → low EA.
O: 1s² 2s² 2p⁴ — willing to accept electron to attain greater stability → higher EA.
Thus EA(O) > EA(N).`
    }
  ]
};

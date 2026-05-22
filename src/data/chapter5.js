// Chapter 5: Chemical Equilibrium
export const chapter5 = {
  id: 5,
  name: "Chemical Equilibrium",
  icon: "⚖️",
  color: "#BA7517",
  light: "#FAEEDA",
  questions: [
    // ============== MCQs ==============
    {
      id: "c5-mcq-1",
      type: "MCQ",
      source: "Set 1",
      q: "For the reaction: N₂ + 3H₂ ⇌ 2NH₃ + Heat",
      options: ["A. Kp = Kc", "B. Kp = KcRT", "C. Kp = Kc(RT)²", "D. Kp = Kc(RT)⁻²"],
      answer: "D. Kp = Kc(RT)⁻²",
      solution: "Kp = Kc(RT)^Δn. Δn = 2 − (1+3) = -2. So Kp = Kc(RT)⁻²."
    },
    {
      id: "c5-mcq-2",
      type: "MCQ",
      source: "Set 2",
      q: "Keq for A + 2B → C + D is:",
      options: ["A. [A][B]²/[C][D]", "B. [C][D]/[A][B]²", "C. [A][B]/[C][D]", "D. [A]²[B]/[C][D]"],
      answer: "B. [C][D]/[A][B]²",
      solution: "Keq = [Products]/[Reactants], with stoichiometric coefficients as powers. So [C][D]/([A][B]²)."
    },
    {
      id: "c5-mcq-3",
      type: "MCQ",
      source: "Set 3",
      q: "SO₃ formation from SO₂ + O₂ → 2SO₃ + heat. Which conditions favor the REVERSE reaction?",
      options: ["A. High P, High T", "B. High P, Low T", "C. Low P, High T", "D. Low P, Low T"],
      answer: "C. Low P, High T",
      solution: "Reverse reaction: 2SO₃ → 2SO₂ + O₂ (endothermic, more moles of gas). Low pressure (favors more moles) + high temperature (favors endothermic direction) drive the reverse reaction."
    },
    {
      id: "c5-mcq-4",
      type: "MCQ",
      source: "HISSAN 2081",
      q: "In Haber's process, ammonia is prepared at:",
      options: ["A. High T and high P", "B. Low T and high P", "C. High T and low P", "D. Low T and low P"],
      answer: "A. High T and high P",
      solution: "Reaction N₂ + 3H₂ ⇌ 2NH₃ is exothermic and reduces moles. Thermodynamically, low T and high P favor NH₃. But kinetically, low T is too slow. Industrial compromise: ~450°C (moderate T) and 200 atm (high P) with Fe catalyst."
    },

    // ============== Short Answer Questions ==============
    {
      id: "c5-sa-1",
      type: "Short",
      source: "Set 2",
      q: "State Le Chatelier's principle. Effects on equilibrium of PCl₃(g) + Cl₂(g) ⇌ PCl₅(g) + 88 kJ by: (i) increasing temperature, (ii) increasing pressure, (iii) removing PCl₃.",
      answer: "(i) Backward (ii) Forward (iii) Backward.",
      solution: `LE CHATELIER'S PRINCIPLE: If a system at equilibrium is subjected to a change in concentration, pressure, or temperature, the equilibrium shifts in a direction that opposes the change and tries to restore equilibrium.

For PCl₃ + Cl₂ ⇌ PCl₅ + 88 kJ (forward is exothermic, 2 mol gas → 1 mol gas):

(i) Increasing temperature:
The system absorbs heat by favoring the endothermic (backward) direction.
Equilibrium shifts BACKWARD. [PCl₅] decreases.

(ii) Increasing pressure:
The system favors the side with fewer moles of gas.
Left = 2 mol, Right = 1 mol → forward favored.
Equilibrium shifts FORWARD. [PCl₅] increases.

(iii) Removing PCl₃:
By Le Chatelier, the system tries to replace removed PCl₃.
Equilibrium shifts BACKWARD. [PCl₅] decreases.`
    },
    {
      id: "c5-sa-2",
      type: "Short",
      source: "Set 5",
      q: "Effect on equilibrium of PCl₅(g) ⇌ PCl₃(g) + Cl₂(g) by: (a) adding Cl₂ (b) adding PCl₃ (c) decreasing P by increasing V (d) increasing T (endothermic forward) (e) adding catalyst.",
      answer: "(a) Backward (b) Backward (c) Forward (d) Forward (e) No effect.",
      solution: `For PCl₅ ⇌ PCl₃ + Cl₂ (forward endothermic, 1 mol gas → 2 mol gas):

(a) Adding Cl₂: System consumes added Cl₂ → BACKWARD.
(b) Adding PCl₃: System consumes added PCl₃ → BACKWARD.
(c) Decreasing P (increasing V): System favors more moles of gas → FORWARD (1 → 2 mol).
(d) Increasing T (endothermic forward): System absorbs heat → FORWARD.
(e) Adding catalyst: NO EFFECT on equilibrium position. Catalyst speeds up both forward and backward reactions equally, only reduces time to reach equilibrium.`
    },
    {
      id: "c5-sa-3",
      type: "Short",
      source: "Set 1 (OR)",
      q: "Comment: chemical equilibrium is dynamic in nature. Derive relationship between Kc and Kp. In which condition Kp = Kc?",
      answer: "Kp = Kc when Δn = 0.",
      solution: `DYNAMIC EQUILIBRIUM: At chemical equilibrium, the forward and backward reactions continue at equal rates. So the macroscopic properties remain constant, but at the molecular level, reactions are still happening. Hence, it is dynamic, not static.

DERIVATION OF Kp = Kc(RT)^Δn:
Consider: aA + bB ⇌ cC + dD (gas phase)
Kc = [C]ᶜ[D]ᵈ / [A]ᵃ[B]ᵇ
For an ideal gas: PV = nRT → P = (n/V)RT = CRT, where C is concentration in mol/L.
Substituting partial pressures:
Kp = (P_C)ᶜ(P_D)ᵈ / (P_A)ᵃ(P_B)ᵇ
   = [C]ᶜ(RT)ᶜ [D]ᵈ(RT)ᵈ / [A]ᵃ(RT)ᵃ [B]ᵇ(RT)ᵇ
   = Kc × (RT)^(c+d-a-b)
   = Kc × (RT)^Δn

WHEN Kp = Kc:
When Δn = 0 (i.e., moles of gaseous reactants = moles of gaseous products), then (RT)⁰ = 1, so Kp = Kc.
Example: H₂(g) + I₂(g) ⇌ 2HI(g), Δn = 0.`
    },
    {
      id: "c5-sa-4",
      type: "Short",
      source: "Set 6",
      q: "Write the relationship between Kp and Kc for: (i) N₂ + 3H₂ ⇌ 2NH₃ (ii) N₂ + O₂ ⇌ 2NO (iii) H₂ + I₂ ⇌ 2HI (iv) PCl₅ ⇌ PCl₃ + Cl₂ (v) 4NO + 6H₂O ⇌ 4NH₃ + 5O₂",
      answer: "Δn values: -2, 0, 0, +1, +(-1) → see below.",
      solution: `Using Kp = Kc(RT)^Δn:

(i) N₂ + 3H₂ ⇌ 2NH₃
Δn = 2 − (1+3) = -2
Kp = Kc(RT)⁻²

(ii) N₂ + O₂ ⇌ 2NO
Δn = 2 − (1+1) = 0
Kp = Kc

(iii) H₂ + I₂ ⇌ 2HI
Δn = 2 − (1+1) = 0
Kp = Kc

(iv) PCl₅ ⇌ PCl₃ + Cl₂
Δn = (1+1) − 1 = +1
Kp = Kc(RT)

(v) 4NO + 6H₂O ⇌ 4NH₃ + 5O₂
Δn = (4+5) − (4+6) = -1
Kp = Kc(RT)⁻¹`
    },
    {
      id: "c5-sa-5",
      type: "Short",
      source: "Set 7",
      q: "State law of mass action. Characteristics of equilibrium constant. Derive the relation between Kc and Kp.",
      answer: "Kp = Kc(RT)^Δn.",
      solution: `LAW OF MASS ACTION: At constant temperature, the rate of a chemical reaction is directly proportional to the product of the active masses (molar concentrations) of the reactants, each raised to a power equal to its stoichiometric coefficient.

CHARACTERISTICS OF EQUILIBRIUM CONSTANT:
1. Depends only on temperature (not on concentration or pressure).
2. Independent of initial amounts of reactants.
3. Independent of the presence of a catalyst.
4. K for reverse reaction = 1/K (of forward reaction).
5. If a reaction is multiplied by 'n', then K_new = K^n.

DERIVATION: (See Short Answer #3 above.)`
    },
    {
      id: "c5-sa-6",
      type: "Short",
      source: "HISSAN 2081 (Set A) – derived from question context",
      q: "Derive relationship between Kp and Kc. Give one example where Kp > Kc.",
      answer: "Kp > Kc when Δn > 0.",
      solution: `(For derivation, see Short Answer #3.)

EXAMPLE where Kp > Kc:
PCl₅ ⇌ PCl₃ + Cl₂; Δn = +1, so Kp = Kc(RT). Since RT > 1 at normal temperatures, Kp > Kc.

Or: CaCO₃(s) ⇌ CaO(s) + CO₂(g); Δn = +1, Kp = Kc(RT).`
    }
  ]
};

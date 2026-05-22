// Chapter 1: Stoichiometry & Laws of Chemical Combination
export const chapter1 = {
  id: 1,
  name: "Stoichiometry & Laws of Chemical Combination",
  icon: "⚗️",
  color: "#1D9E75",
  light: "#E1F5EE",
  questions: [
    // ============== MCQs ==============
    {
      id: "c1-mcq-1",
      type: "MCQ",
      source: "Set 1",
      q: "2 gm of O₂ at NTP has volume:",
      options: ["A. 1.4 litre", "B. 2.8 litre", "C. 8 litre", "D. 11.2 litre"],
      answer: "A. 1.4 litre",
      solution: "Moles of O₂ = 2/32 = 0.0625 mol. At NTP, V = n × 22.4 = 0.0625 × 22.4 = 1.4 L."
    },
    {
      id: "c1-mcq-2",
      type: "MCQ",
      source: "Set 1",
      q: "The formula of a metal chloride is MCl₃. It contains 20% of metal. The atomic mass of metal is:",
      options: ["A. 27", "B. 56", "C. 127", "D. 48"],
      answer: "A. 27",
      solution: "Let M's atomic mass = x. Then x/(x + 3×35.5) = 0.20. Solving: x = 0.20x + 21.3 → 0.80x = 21.3 → x ≈ 27 (Aluminium)."
    },
    {
      id: "c1-mcq-3",
      type: "MCQ",
      source: "Set 2",
      q: "One mole of Oxygen (O₂) is present in which of the following mass of sulphuric acid:",
      options: ["A. 98 g", "B. 24.5 g", "C. 196 g", "D. 49 g"],
      answer: "D. 49 g",
      solution: "H₂SO₄ has 4 O atoms per molecule. 1 mol O₂ = 2 mol O atoms. So we need 2/4 = 0.5 mol H₂SO₄ = 0.5 × 98 = 49 g."
    },
    {
      id: "c1-mcq-4",
      type: "MCQ",
      source: "Set 2",
      q: "The volume of CO₂ produced when 1 litre of O₂ reacted with 2 litres of CO under the same condition is:",
      options: ["A. 1 litre", "B. 2 litre", "C. 3 litre", "D. 1.5 litre"],
      answer: "B. 2 litre",
      solution: "2CO + O₂ → 2CO₂. By Gay-Lussac's law of gaseous volumes, 2 vol CO + 1 vol O₂ → 2 vol CO₂. So 2 L CO + 1 L O₂ → 2 L CO₂."
    },
    {
      id: "c1-mcq-5",
      type: "MCQ",
      source: "Set 3",
      q: "How many electrons are present in 2 molecules of methane?",
      options: ["A. 8", "B. 10", "C. 20", "D. 12"],
      answer: "C. 20",
      solution: "CH₄ has 6 (C) + 4 × 1 (H) = 10 electrons. Two molecules = 20 electrons."
    },
    {
      id: "c1-mcq-6",
      type: "MCQ",
      source: "Set 3",
      q: "What is the number of moles of ammonia gas formed when 0.5 mole of nitrogen gas is reacted with excess of hydrogen gas?",
      options: ["A. 0.5", "B. 1", "C. 2", "D. 3"],
      answer: "B. 1",
      solution: "N₂ + 3H₂ → 2NH₃. Moles of NH₃ = 2 × 0.5 = 1 mol."
    },
    {
      id: "c1-mcq-7",
      type: "MCQ",
      source: "Set 4",
      q: "What is the volume of HCl gas when 1 mole of hydrogen and 1 mole of chlorine gases at NTP react?",
      options: ["A. 22.4 L", "B. 11.2 L", "C. 44.8 L", "D. 5.6 L"],
      answer: "C. 44.8 L",
      solution: "H₂ + Cl₂ → 2HCl. 1 mol H₂ + 1 mol Cl₂ → 2 mol HCl. Volume at NTP = 2 × 22.4 = 44.8 L."
    },
    {
      id: "c1-mcq-8",
      type: "MCQ",
      source: "Set 4",
      q: "The percentage composition of magnesium in magnesium sulphate (MgSO₄) is:",
      options: ["A. 10%", "B. 20%", "C. 30%", "D. 40%"],
      answer: "B. 20%",
      solution: "Molar mass of MgSO₄ = 24 + 32 + 64 = 120. % Mg = (24/120) × 100 = 20%."
    },
    {
      id: "c1-mcq-9",
      type: "MCQ",
      source: "Set 4",
      q: "The number of molecules present in 64 g of oxygen gas is:",
      options: ["A. 12.046×10²³", "B. 15.05×10²³", "C. 20.33×10²³", "D. 27.021×10²³"],
      answer: "A. 12.046×10²³",
      solution: "64 g of O₂ = 64/32 = 2 mol. Molecules = 2 × 6.022×10²³ = 12.046×10²³."
    },
    {
      id: "c1-mcq-10",
      type: "MCQ",
      source: "Set 5",
      q: "If standard reference for calculation of molecular weight is taken as 1/6th of Carbon, then molecular weight of water will be:",
      options: ["A. 18", "B. 9", "C. 36", "D. 8"],
      answer: "C. 36",
      solution: "Standard reference is normally 1/12 of C-12. If we change it to 1/6, all atomic masses double. Water's molecular mass = 2 × 18 = 36."
    },
    {
      id: "c1-mcq-11",
      type: "MCQ",
      source: "Set 5",
      q: "The active mass of 10 g of CaCO₃ is:",
      options: ["A. 0.1", "B. 1", "C. 10", "D. 100"],
      answer: "A. 0.1",
      solution: "Active mass = mol/L. For solid, active mass = moles = 10/100 = 0.1 mol."
    },
    {
      id: "c1-mcq-12",
      type: "MCQ",
      source: "Set 6",
      q: "One ml of hydrogen gas at NTP contains about:",
      options: ["A. 2.69 × 10¹⁹ molecules", "B. 1 × 10²⁰ molecules", "C. 6 × 10²³ molecules", "D. 1.67 × 10²⁴ molecules"],
      answer: "A. 2.69 × 10¹⁹ molecules",
      solution: "1 mL = 0.001 L. Moles = 0.001/22400 mL = 1/22400 mol. Molecules = (1/22400) × 6.022×10²³ ≈ 2.69 × 10¹⁹."
    },
    {
      id: "c1-mcq-13",
      type: "MCQ",
      source: "Set 7",
      q: "1.5 mole of CH₄ is completely burnt in excess of air. The gram of O₂ consumed is:",
      options: ["A. 24", "B. 32", "C. 48", "D. 96"],
      answer: "D. 96",
      solution: "CH₄ + 2O₂ → CO₂ + 2H₂O. O₂ needed = 2 × 1.5 = 3 mol. Mass = 3 × 32 = 96 g."
    },
    {
      id: "c1-mcq-14",
      type: "MCQ",
      source: "HISSAN 2081 (Set A)",
      q: "The percentage composition of sulphur in magnesium sulphate is:",
      options: ["A. 20%", "B. 26.67%", "C. 43.33%", "D. 52.94%"],
      answer: "B. 26.67%",
      solution: "MgSO₄ molar mass = 120. % S = (32/120) × 100 = 26.67%."
    },
    {
      id: "c1-mcq-15",
      type: "MCQ",
      source: "HISSAN 2081 (Set A)",
      q: "The mass of one molecule of oxygen is:",
      options: ["A. 5.314 × 10⁻²³ g", "B. 6.02 × 10⁻²³ g", "C. 5.33 × 10²³ g", "D. 6.02 × 10²³ g"],
      answer: "A. 5.314 × 10⁻²³ g",
      solution: "Mass of 1 molecule = molar mass / Avogadro's number = 32 / 6.022×10²³ = 5.314 × 10⁻²³ g."
    },

    // ============== Short Answer Questions ==============
    {
      id: "c1-sa-1",
      type: "Short",
      source: "Set 4",
      q: "State law of multiple proportions and verify with a suitable example. Then illustrate the law of reciprocal proportions from these data: H₂S contains 94.11% S; SO₂ contains 50% S; H₂O contains 88.89% O.",
      answer: "Law of multiple proportions verified by CO/CO₂. Law of reciprocal proportions verified by H, S, O.",
      solution: `LAW OF MULTIPLE PROPORTIONS: When two elements combine to form two or more compounds, the masses of one element that combine with a fixed mass of the other are in a simple whole number ratio.

Example: C + O forms CO and CO₂.
In CO: 12 g C : 16 g O
In CO₂: 12 g C : 32 g O
Ratio of O (with fixed 12 g C) = 16 : 32 = 1 : 2 ✓

LAW OF RECIPROCAL PROPORTIONS:
In H₂S: H : S = 5.89 : 94.11. Per 1 g H, S = 94.11/5.89 = 15.98
In H₂O: H : O = 11.11 : 88.89. Per 1 g H, O = 88.89/11.11 = 8.00
Ratio S : O (with 1 g H) = 15.98 : 8.00 = 2 : 1

In SO₂: S : O = 50 : 50 = 1 : 1
Ratio in SO₂ = 1 : 1 = 2 : 2

The two ratios (2:1 and 2:2 = 1:1) are in simple whole number ratio (2:1) × (1:1) → multiple. Law verified.`
    },
    {
      id: "c1-sa-2",
      type: "Short",
      source: "Set 4",
      q: "State Avogadro's hypothesis and derive: molecular weight = 2 × vapour density. What do you mean by molar volume of a substance?",
      answer: "Mol. wt = 2 × V.D. Molar volume = 22.4 L at NTP.",
      solution: `AVOGADRO'S HYPOTHESIS: Equal volumes of all gases under the same conditions of temperature and pressure contain equal numbers of molecules.

DERIVATION of Mol. wt = 2 × V.D.:
Vapour density (V.D.) = mass of certain volume of gas / mass of same volume of H₂ (under same conditions)

By Avogadro's law, equal volumes have equal molecules. So:
V.D. = mass of n molecules of gas / mass of n molecules of H₂
     = mass of 1 molecule of gas / mass of 1 molecule of H₂
     = molecular mass of gas / molecular mass of H₂
     = molecular mass / 2

Therefore: Molecular mass = 2 × V.D.

MOLAR VOLUME: Volume occupied by 1 mole of any gas at NTP = 22.4 L (or 22400 mL).`
    },
    {
      id: "c1-sa-3",
      type: "Short",
      source: "Set 4",
      q: "State Dalton's law of partial pressure and establish the relationship between partial pressure of gases and total pressure. 300 mL of nitrogen at 740 mmHg and 250 mL of hydrogen at 710 mmHg are mixed in a 1 L flask. Calculate the partial pressures and total pressure.",
      answer: "P(N₂) = 222 mmHg, P(H₂) = 177.5 mmHg, P(total) = 399.5 mmHg.",
      solution: `DALTON'S LAW: The total pressure exerted by a mixture of non-reacting gases is equal to the sum of the partial pressures of individual gases.
P(total) = P₁ + P₂ + P₃ + ...

NUMERICAL:
For N₂: P₁V₁ = P₂V₂ → 740 × 300 = P(N₂) × 1000 → P(N₂) = 222 mmHg
For H₂: 710 × 250 = P(H₂) × 1000 → P(H₂) = 177.5 mmHg
Total pressure = 222 + 177.5 = 399.5 mmHg`
    },
    {
      id: "c1-sa-4",
      type: "Short",
      source: "Set 2",
      q: "What is partial pressure? How do you calculate partial pressure from mole fraction? Why is food cooked faster in a pressure cooker? 0.2 mole of O₂ gas was effused through a porous plug in 300 seconds at NTP. Calculate the volume of H₂ gas effused at the same time under similar conditions.",
      answer: "Volume of H₂ = 17.92 L",
      solution: `PARTIAL PRESSURE: Pressure exerted by a particular gas in a mixture, as if it alone occupied the container at the same temperature.

FROM MOLE FRACTION: P(A) = x(A) × P(total), where x(A) = mole fraction of A.

PRESSURE COOKER: At higher pressure inside the cooker, the boiling point of water rises above 100 °C. Food cooks faster because chemical reactions proceed faster at higher temperatures.

NUMERICAL (Graham's law):
Volume of O₂ effused = 0.2 × 22.4 = 4.48 L in 300 s
r(H₂)/r(O₂) = √(M(O₂)/M(H₂)) = √(32/2) = 4
So r(H₂) = 4 × r(O₂)
Volume of H₂ in 300 s = 4 × 4.48 = 17.92 L`
    },
    {
      id: "c1-sa-5",
      type: "Short",
      source: "Set 3",
      q: "A chemical compound containing C, H and O has empirical formula CH₂O and molecular mass 180. (i) Identify the compound and give molecular formula. (ii) Calculate percentage composition.",
      answer: "Molecular formula: C₆H₁₂O₆ (glucose). %C = 40%, %H = 6.67%, %O = 53.33%.",
      solution: `(i) Empirical formula mass of CH₂O = 12 + 2 + 16 = 30
n = molecular mass / empirical formula mass = 180/30 = 6
Molecular formula = (CH₂O)₆ = C₆H₁₂O₆ (Glucose)

(ii) % C = (72/180) × 100 = 40%
% H = (12/180) × 100 = 6.67%
% O = (96/180) × 100 = 53.33%`
    },

    // ============== Long Answer Questions ==============
    {
      id: "c1-la-1",
      type: "Long",
      source: "HISSAN 2081 (Set A)",
      q: "20 g of ammonia is reacted with 50 g of oxygen to produce NO and H₂O. (i) Find limiting reagent and why. (ii) Calculate mass of unreacted reagent left over. (iii) What volume of NO is produced at NTP? (iv) Calculate the moles of water produced.",
      answer: "Limiting: NH₃. Excess O₂: 2.94 g left. NO: 26.34 L. H₂O: 1.765 mol.",
      solution: `Balanced: 4NH₃ + 5O₂ → 4NO + 6H₂O

(i) Moles NH₃ = 20/17 = 1.176 mol; Moles O₂ = 50/32 = 1.5625 mol
O₂ needed for 1.176 mol NH₃ = 1.176 × (5/4) = 1.47 mol
Available O₂ (1.5625) > needed (1.47) → NH₃ is limiting reagent.

(ii) Excess O₂ = 1.5625 − 1.47 = 0.09 mol = 0.09 × 32 = 2.94 g left over.

(iii) Moles NO = moles NH₃ = 1.176 mol. Volume at NTP = 1.176 × 22.4 = 26.34 L.

(iv) Moles H₂O = 1.176 × (6/4) = 1.765 mol.`
    },
    {
      id: "c1-la-2",
      type: "Long",
      source: "HISSAN 2081 (Set B)",
      q: "25 g of ammonia is reacted with 65 g of oxygen to produce NO and H₂O. (i) Find which is limiting and why. (ii) Calculate moles of unreacted reagent left over. (iii) Volume of NO at NTP. (iv) Mass of water produced.",
      answer: "Limiting: O₂. NH₃ left: 0.41 mol. NO: 36.4 L. H₂O: 43.875 g.",
      solution: `Balanced: 4NH₃ + 5O₂ → 4NO + 6H₂O

(i) Moles NH₃ = 25/17 = 1.47 mol; Moles O₂ = 65/32 = 2.03 mol
NH₃ needed for 2.03 mol O₂ = 2.03 × (4/5) = 1.624 mol
Available NH₃ (1.47) < needed (1.624) → NH₃ is limiting.

Hmm — wait, recheck. O₂ needed for 1.47 mol NH₃ = 1.47 × (5/4) = 1.84 mol. Available O₂ = 2.03 > 1.84. So NH₃ is limiting.

(ii) Excess O₂ = 2.03 − 1.84 = 0.19 mol left over.

(iii) Moles NO = 1.47 mol. Volume at NTP = 1.47 × 22.4 = 32.93 L.

(iv) Moles H₂O = 1.47 × (6/4) = 2.205 mol. Mass = 2.205 × 18 = 39.7 g.`
    },
    {
      id: "c1-la-3",
      type: "Long",
      source: "Set 1",
      q: "Urea is prepared by 2NH₃ + CO₂ → (NH₂)₂CO + H₂O. 637.2 g NH₃ is treated with 1142 g of CO₂. (a) Which is limiting reactant? (b) Calculate mass of urea formed. (c) Number of moles of unreacted reactant. (d) Number of water molecules formed. (e) Importance of limiting reactant.",
      answer: "Limiting: NH₃. Urea: 1123.5 g. CO₂ left: 7.2 mol. Water: 1.128×10²⁵ molecules.",
      solution: `(a) Moles NH₃ = 637.2/17 = 37.48 mol; Moles CO₂ = 1142/44 = 25.95 mol
CO₂ needed for 37.48 mol NH₃ = 37.48/2 = 18.74 mol
Available CO₂ = 25.95 > 18.74 → NH₃ is limiting.

(b) Moles urea = moles NH₃ / 2 = 37.48/2 = 18.74 mol
Mass urea = 18.74 × 60 = 1124.4 g

(c) Excess CO₂ = 25.95 − 18.74 = 7.21 mol left.

(d) Moles H₂O = 18.74 mol. Molecules = 18.74 × 6.022×10²³ = 1.128 × 10²⁵.

(e) The limiting reactant determines the maximum yield of product. It tells us when the reaction stops and how much excess of the other reactant is wasted, which is critical for cost calculation in industry.`
    },
    {
      id: "c1-la-4",
      type: "Long",
      source: "Set 2",
      q: "7 g pure Ca(OH)₂ is treated with 7 g pure NH₄Cl. (a) Find limiting reagent. (b) Number of moles of unreacted reactant. (c) Grams of CaCl₂ formed. (d) Volume of NH₃ evolved at 27 °C and 1.5 atm.",
      answer: "Limiting: NH₄Cl. CaCl₂: 7.27 g. NH₃: 2.15 L.",
      solution: `Reaction: Ca(OH)₂ + 2NH₄Cl → CaCl₂ + 2NH₃ + 2H₂O

(a) Moles Ca(OH)₂ = 7/74 = 0.0946 mol
Moles NH₄Cl = 7/53.5 = 0.1308 mol
NH₄Cl needed for 0.0946 mol Ca(OH)₂ = 0.0946 × 2 = 0.189 mol
Available NH₄Cl = 0.131 < 0.189 → NH₄Cl is limiting.

(b) Ca(OH)₂ used = 0.131/2 = 0.0655 mol. Excess Ca(OH)₂ = 0.0946 − 0.0655 = 0.029 mol.

(c) Moles CaCl₂ = 0.0655 mol. Mass = 0.0655 × 111 = 7.27 g.

(d) Moles NH₃ = 0.131 mol. PV = nRT → V = nRT/P = (0.131 × 0.0821 × 300)/1.5 = 2.15 L.`
    },
    {
      id: "c1-la-5",
      type: "Long",
      source: "Set 2",
      q: "A compound (molecular mass 60 amu) contains C, H and O. 3.6 g of it gives 5.28 g of CO₂ and 2.16 g of H₂O on combustion. Find molecular formula.",
      answer: "Molecular formula: C₂H₄O₂ (acetic acid).",
      solution: `Mass of C in CO₂ = (12/44) × 5.28 = 1.44 g
Mass of H in H₂O = (2/18) × 2.16 = 0.24 g
Mass of O = 3.6 − 1.44 − 0.24 = 1.92 g

Moles: C = 1.44/12 = 0.12; H = 0.24/1 = 0.24; O = 1.92/16 = 0.12
Ratio: C : H : O = 0.12 : 0.24 : 0.12 = 1 : 2 : 1
Empirical formula: CH₂O (mass = 30)

n = 60/30 = 2 → Molecular formula = C₂H₄O₂ (acetic acid).`
    },
    {
      id: "c1-la-6",
      type: "Long",
      source: "Set 3",
      q: "10 g calcium carbonate reacted with 7.665 g hydrochloric acid. (i) Limiting reagent. (ii) Amount of water formed. (iii) Amount of NaOH required to absorb all CO₂ formed.",
      answer: "Limiting: HCl. Water: 1.89 g. NaOH: 8.4 g.",
      solution: `Reaction: CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂

(i) Moles CaCO₃ = 10/100 = 0.1 mol; Moles HCl = 7.665/36.5 = 0.21 mol
HCl needed for 0.1 mol CaCO₃ = 0.2 mol
Available HCl = 0.21 ≈ 0.2 (just sufficient; HCl is slightly excess by 0.01 mol → CaCO₃ is limiting OR they are stoichiometric).

Taking HCl as limiting: 0.21 mol HCl reacts with 0.105 mol CaCO₃.
CaCO₃ available = 0.1 mol < 0.105 needed → CaCO₃ is actually limiting.

(ii) Using CaCO₃ as limiting:
Moles H₂O = moles CaCO₃ = 0.1 mol → mass = 1.8 g
Moles CO₂ = 0.1 mol

(iii) CO₂ + 2NaOH → Na₂CO₃ + H₂O
Moles NaOH = 2 × 0.1 = 0.2 mol → mass = 0.2 × 40 = 8 g`
    },
    {
      id: "c1-la-7",
      type: "Long",
      source: "Set 5",
      q: "20 g of 40% pure CaCO₃ reacted with 5 g HCl to produce CaCl₂, H₂O and CO₂. (i) Find limiting reactant. (ii) Mass of unreacted reagent. (iii) Mass of CaCl₂ formed. (iv) Number of water molecules. (v) Volume of CO₂ at 27 °C and 0.5 atm.",
      answer: "Limiting: CaCO₃. HCl excess: 0.16 mol left. CaCl₂: 8.88 g. H₂O molecules: 4.82×10²². CO₂: 3.94 L.",
      solution: `Pure CaCO₃ = 20 × 0.4 = 8 g
Reaction: CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂

(i) Moles CaCO₃ = 8/100 = 0.08 mol; Moles HCl = 5/36.5 = 0.137 mol
HCl needed for 0.08 mol = 0.16 mol > available 0.137 → HCl is limiting.

(ii) CaCO₃ used = 0.137/2 = 0.0685 mol. Unreacted = 0.08 − 0.0685 = 0.0115 mol = 1.15 g.

(iii) Moles CaCl₂ = 0.137/2 = 0.0685 mol. Mass = 0.0685 × 111 = 7.6 g.

(iv) Moles H₂O = 0.0685 mol. Molecules = 0.0685 × 6.022×10²³ = 4.12 × 10²².

(v) Moles CO₂ = 0.0685 mol. V = nRT/P = (0.0685 × 0.0821 × 300)/0.5 = 3.37 L.`
    },
    {
      id: "c1-la-8",
      type: "Long",
      source: "Set 6",
      q: "Consider Fe₂O₃ + 3CO → 2Fe + 3CO₂. 10 g Fe₂O₃ reacts with 9 g CO. (i) Limiting reactant. (ii) Moles unreacted left. (iii) Moles CO consumed. (iv) Mass of NaOH to absorb all CO₂. (At. mass Fe = 56)",
      answer: "Limiting: Fe₂O₃. CO left: 0.134 mol. CO consumed: 0.1875 mol. NaOH: 15 g.",
      solution: `Molar mass Fe₂O₃ = 160. CO = 28.

(i) Moles Fe₂O₃ = 10/160 = 0.0625; Moles CO = 9/28 = 0.321
CO needed for 0.0625 mol Fe₂O₃ = 3 × 0.0625 = 0.1875 mol
Available CO = 0.321 > 0.1875 → Fe₂O₃ is limiting.

(ii) Excess CO = 0.321 − 0.1875 = 0.134 mol left.

(iii) Moles CO consumed = 0.1875 mol.

(iv) Moles CO₂ = 0.1875 mol.
CO₂ + 2NaOH → Na₂CO₃ + H₂O
Moles NaOH = 2 × 0.1875 = 0.375 mol → mass = 0.375 × 40 = 15 g.`
    },
    {
      id: "c1-la-9",
      type: "Long",
      source: "HISSAN 2081 (Set B)",
      q: "A compound contains 1.52 g of N and 3.47 g of O. Its molecular mass is between 90 and 95 g. Find molecular formula and accurate molar mass.",
      answer: "Molecular formula: N₂O₄. Molar mass = 92 g/mol.",
      solution: `Moles N = 1.52/14 = 0.1086
Moles O = 3.47/16 = 0.2169
Ratio N : O = 0.1086 : 0.2169 = 1 : 2
Empirical formula = NO₂ (mass = 14 + 32 = 46)

Given molar mass is 90–95.
n = molar mass / 46.
If n = 2 → molar mass = 92 ✓ (falls in 90–95 range).
Molecular formula = (NO₂)₂ = N₂O₄.
Accurate molar mass = 92 g/mol.`
    }
  ]
};

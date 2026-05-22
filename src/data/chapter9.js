// Chapter 9: Metals & Metallurgy
export const chapter9 = {
  id: 9,
  name: "Metals & Metallurgy",
  icon: "🔩",
  color: "#5F5E5A",
  light: "#F1EFE8",
  questions: [
    // ============== MCQs ==============
    {
      id: "c9-mcq-1",
      type: "MCQ",
      source: "Set 6",
      q: "Which of the following is toxic to central nervous system?",
      options: ["A. Lead", "B. Copper", "C. Mercury", "D. Iron"],
      answer: "C. Mercury",
      solution: "Mercury (especially methylmercury) crosses the blood-brain barrier and damages the central nervous system. Lead also affects nerves but the question specifically asks about CNS toxicity."
    },
    {
      id: "c9-mcq-2",
      type: "MCQ",
      source: "Set 8 (Set 4)",
      q: "Intake of which metal ion causes autism?",
      options: ["A. Hg²⁺", "B. Pb²⁺", "C. Cd²⁺", "D. Fe²⁺"],
      answer: "A. Hg²⁺",
      solution: "Mercury exposure (especially methylmercury) is linked to neurodevelopmental disorders including autism spectrum disorders."
    },
    {
      id: "c9-mcq-3",
      type: "MCQ",
      source: "HISSAN 2081 (Set B)",
      q: "The allotrope of carbon having 2D, sheet-like structure is:",
      options: ["A. Fullerene", "B. Charcoal", "C. Diamond", "D. Graphite"],
      answer: "D. Graphite",
      solution: "Graphite has layers of hexagonal carbon rings (2D sheets) held together by weak van der Waals forces. Diamond is 3D tetrahedral; fullerene is spherical."
    },
    {
      id: "c9-mcq-4",
      type: "MCQ",
      source: "Set 6",
      q: "Carbogen is:",
      options: ["A. Pure form of Carbon", "B. COCl₂", "C. Mixture of CO and CO₂", "D. Mixture of O₂ and CO₂"],
      answer: "D. Mixture of O₂ and CO₂",
      solution: "Carbogen is a mixture of about 95% O₂ and 5% CO₂. It is used in medical treatment (helps stimulate breathing)."
    },
    {
      id: "c9-mcq-5",
      type: "MCQ",
      source: "HISSAN 2081 (Set A)",
      q: "Excess of Na ions in human body causes:",
      options: ["A. Anaemia", "B. High blood pressure", "C. Diabetes", "D. Low blood pressure"],
      answer: "B. High blood pressure",
      solution: "Excess Na⁺ retains water in blood vessels → increased blood volume → high blood pressure (hypertension)."
    },
    {
      id: "c9-mcq-6",
      type: "MCQ",
      source: "HISSAN 2081 (Set A)",
      q: "MgSO₄·7H₂O is also known as:",
      options: ["A. Plaster of Paris", "B. Epsom Salt", "C. Bleaching powder", "D. Magnesia"],
      answer: "B. Epsom Salt",
      solution: "MgSO₄·7H₂O is Epsom salt, used as a laxative and bath salt. Plaster of Paris = CaSO₄·½H₂O; bleaching powder = CaOCl₂; magnesia = MgO."
    },
    {
      id: "c9-mcq-7",
      type: "MCQ",
      source: "HISSAN 2081 (Set B)",
      q: "The molecular formula of bleaching powder is:",
      options: ["A. MgSO₄·7H₂O", "B. CaSO₄·½H₂O", "C. CaOCl₂", "D. ZnSO₄·5H₂O"],
      answer: "C. CaOCl₂",
      solution: "Bleaching powder is calcium oxychloride, CaOCl₂ (also written Ca(OCl)Cl). Made by passing Cl₂ over slaked lime."
    },
    {
      id: "c9-mcq-8",
      type: "MCQ",
      source: "Set 6",
      q: "Dead burnt plaster is:",
      options: ["A. CaSO₄·2H₂O", "B. MgSO₄·7H₂O", "C. CaSO₄·½H₂O", "D. CaSO₄"],
      answer: "D. CaSO₄",
      solution: "Dead burnt plaster = anhydrous CaSO₄ (gypsum heated above 200°C). Plaster of Paris = CaSO₄·½H₂O (heated to 120°C); gypsum = CaSO₄·2H₂O."
    },
    {
      id: "c9-mcq-9",
      type: "MCQ",
      source: "Set 3",
      q: "Deficiency of which metal ion causes bones to become brittle?",
      options: ["A. Na⁺", "B. Zn²⁺", "C. Ca²⁺", "D. Fe²⁺"],
      answer: "C. Ca²⁺",
      solution: "Ca²⁺ is essential for bone strength. Its deficiency leads to osteoporosis (brittle bones). Fe²⁺ deficiency causes anaemia; Zn²⁺ deficiency causes growth retardation."
    },

    // ============== Short Answer Questions ==============
    {
      id: "c9-sa-1",
      type: "Short",
      source: "Set 2",
      q: "Differentiate calcination and roasting. What ores are concentrated by froth flotation and why? What is importance of flux in metallurgy?",
      answer: "Calcination = limited air; Roasting = excess air. Flotation for sulphide ores. Flux makes slag.",
      solution: `CALCINATION:
- Ore is heated in absence/limited supply of air.
- Used for carbonate and hydroxide ores.
- Products: oxide + CO₂/H₂O.
- Example: ZnCO₃ → ZnO + CO₂↑

ROASTING:
- Ore is heated in excess of air.
- Used for sulphide ores.
- Products: oxide + SO₂.
- Example: 2ZnS + 3O₂ → 2ZnO + 2SO₂↑

FROTH FLOTATION: Used for SULPHIDE ORES (e.g., copper pyrites CuFeS₂, galena PbS, zinc blende ZnS).
Why: Sulphide ore particles are hydrophobic (water-repelling), preferentially attaching to oil/pine oil droplets and froth bubbles. Gangue (siliceous) particles are hydrophilic and sink. So ore floats up with froth.

FLUX:
A substance added during smelting to remove impurities (gangue) from an ore.
- Acidic flux (e.g., SiO₂) for basic impurities: SiO₂ + CaO → CaSiO₃ (slag)
- Basic flux (e.g., CaO) for acidic impurities.
The flux combines with the gangue to form fusible SLAG, which floats over the molten metal and is easily separated.
Importance: Removes impurities and protects metal from oxidation during smelting.`
    },
    {
      id: "c9-sa-2",
      type: "Short",
      source: "Set 3",
      q: "Roasting and calcination in metallurgical process. Name the vessel used for roasting. Two impurities removed in roasting.",
      answer: "Reverberatory furnace. Removes S as SO₂, As as As₂O₃.",
      solution: `(For definitions of roasting/calcination, see #1 above.)

VESSEL FOR ROASTING:
Reverberatory furnace (or rotary kiln). It has a low roof so that the flames "reverberate" back onto the ore on the hearth.

IMPURITIES REMOVED IN ROASTING:
1. Sulphur: removed as SO₂ gas.
   2ZnS + 3O₂ → 2ZnO + 2SO₂
2. Arsenic: removed as As₂O₃ (volatile oxide).
3. Antimony: removed as Sb₂O₃.
4. Moisture: driven off as water vapor.
5. Organic matter: burnt off.`
    },
    {
      id: "c9-sa-3",
      type: "Short",
      source: "Set 7",
      q: "Differentiate calcination and roasting. What is hydrometallurgy? Give an example. Which process concentrates sulphide ore?",
      answer: "Hydrometallurgy: ore + solvent → solution → metal. Example: Cu, Ag, Au.",
      solution: `(For roasting/calcination, see #1.)

HYDROMETALLURGY: The extraction of metals from their ores by dissolving them in suitable solvents (often aqueous) and recovering the metal from the solution. This is a wet method.

EXAMPLE: Extraction of silver from Ag₂S (argentite):
Step 1: Dissolution in NaCN solution.
Ag₂S + 4NaCN → 2Na[Ag(CN)₂] + Na₂S
Step 2: Displacement with Zn.
2Na[Ag(CN)₂] + Zn → Na₂[Zn(CN)₄] + 2Ag

Hydrometallurgy is also used for gold (cyanide process) and copper (low-grade ores).

SULPHIDE ORE CONCENTRATION: Done by FROTH FLOTATION method (see #1).`
    },
    {
      id: "c9-sa-4",
      type: "Short",
      source: "Set 6",
      q: "What is smelting? Explain with chemical reactions. How does it differ from electrolytic reduction?",
      answer: "Smelting = reduction by carbon in furnace; electrolytic = uses electricity.",
      solution: `SMELTING: The process of reducing a metal oxide to the metal by heating it with a reducing agent (usually carbon or CO) at high temperature.

REACTIONS (Iron extraction in blast furnace):
Fe₂O₃ + 3CO → 2Fe + 3CO₂ (main reduction)
CaCO₃ → CaO + CO₂ (flux decomposition)
CaO + SiO₂ → CaSiO₃ (slag formation, removes gangue)

SMELTING vs ELECTROLYTIC REDUCTION:
| Property | Smelting | Electrolytic Reduction |
|----------|----------|------------------------|
| Energy | Heat from carbon combustion | Electrical energy |
| Reducer | Carbon/CO | Electrons at cathode |
| Used for | Metals less reactive than carbon (Fe, Cu, Zn, Pb) | Very reactive metals (Na, K, Mg, Al, Ca) |
| Purity | Less pure | Very pure metal |
| Cost | Cheaper | Expensive |`
    },
    {
      id: "c9-sa-5",
      type: "Short",
      source: "Set 4",
      q: "Describe smelting in extraction of metal from ore. Differentiate calcination and roasting.",
      answer: "Smelting reduces oxide to metal using carbon.",
      solution: `(See #4 for smelting and #1 for calcination vs roasting.)`
    },
    {
      id: "c9-sa-6",
      type: "Short",
      source: "Set 5",
      q: "Chemical reactions in: (i) carbon reduction process (ii) alumino-thermite process (iii) leaching. Solubility of alkaline earth metal hydroxides and sulphates.",
      answer: "C reduction for Fe; thermite for Cr, Mn; leaching uses solvent.",
      solution: `(i) CARBON REDUCTION (e.g., iron):
Fe₂O₃ + 3C → 2Fe + 3CO (high temperature in blast furnace)
or Fe₂O₃ + 3CO → 2Fe + 3CO₂

(ii) ALUMINO-THERMITE PROCESS (Goldschmidt thermite):
For metals like Cr, Mn whose oxides are not easily reduced by C.
Cr₂O₃ + 2Al → 2Cr + Al₂O₃ + heat (very exothermic, used to weld rails)
3MnO₂ + 4Al → 3Mn + 2Al₂O₃ + heat

(iii) LEACHING:
Bauxite (impure Al₂O₃) is digested with hot concentrated NaOH:
Al₂O₃ + 2NaOH → 2NaAlO₂ + H₂O
Impurities (Fe₂O₃, SiO₂) are filtered off as residue.
Then: NaAlO₂ + 2H₂O → Al(OH)₃↓ + NaOH
And Al(OH)₃ heated → Al₂O₃ + 3H₂O for electrolysis.

SOLUBILITY (Group 2):
HYDROXIDES: solubility INCREASES down the group (Mg(OH)₂ < Ca(OH)₂ < Sr(OH)₂ < Ba(OH)₂). Because lattice energy decreases faster than hydration energy down the group.
SULPHATES: solubility DECREASES down the group (MgSO₄ > CaSO₄ > SrSO₄ > BaSO₄). Hydration energy decreases faster than lattice energy.`
    },
    {
      id: "c9-sa-7",
      type: "Short",
      source: "Set 8 (Set 4)",
      q: "What is alumino-thermite process? What metals are reduced by this method? Why can't Na be reduced by carbon method?",
      answer: "Thermite: Al reduces metal oxides. Reduces Cr, Mn, V. Na too reactive for C reduction.",
      solution: `ALUMINO-THERMITE PROCESS:
A method of reduction in which Al powder is used as a reducing agent to extract metals from their oxides.
General: M₂O₃ + 2Al → 2M + Al₂O₃ + heat

The reaction is highly exothermic (called thermite reaction), generating temperatures of ~2400°C.

METALS REDUCED:
- Chromium: Cr₂O₃ + 2Al → 2Cr + Al₂O₃
- Manganese: 3MnO₂ + 4Al → 3Mn + 2Al₂O₃
- Vanadium, Molybdenum, Tungsten oxides
- Iron (for welding railway tracks)

WHY Na CAN'T BE REDUCED BY CARBON:
1. Na is more reactive than C → carbon cannot displace Na from its compounds.
2. The required temperature is very high, and at that temperature Na vapors would react further (with C to form Na₂C₂, or with air).
3. Na is best obtained by electrolysis of molten NaCl (Down's process).`
    },
    {
      id: "c9-sa-8",
      type: "Short",
      source: "Set 4",
      q: "Define macro and micro nutrients. Explain role of Na and K in biological system. Give two examples of toxic metals.",
      answer: "Macro: needed in large amounts. Na/K: nerve and water balance. Toxic: Pb, Hg.",
      solution: `MACRO NUTRIENTS: Elements required by the body in large quantities. Examples: C, H, O, N, Ca, P, K, Na, S, Cl.
MICRO NUTRIENTS (Trace elements): Required in small amounts (mg or μg). Examples: Fe, Zn, Cu, Mn, I, Se, F, Co.

Na AND K IN BIOLOGICAL SYSTEM:
1. Maintain osmotic pressure and water balance in body fluids.
2. Na-K pump: pumps Na⁺ out and K⁺ in across cell membranes — essential for nerve impulses.
3. Na regulates blood pressure and volume of extracellular fluid (ECF).
4. K is essential for muscle contraction, heart function, and protein synthesis (mostly intracellular).
5. Both maintain acid-base balance.

TOXIC METALS:
1. Lead (Pb): causes anaemia, brain damage, learning disabilities in children.
2. Mercury (Hg): damages central nervous system (Minamata disease).
Others: Cadmium (Cd), Arsenic (As), Chromium(VI).`
    }
  ]
};

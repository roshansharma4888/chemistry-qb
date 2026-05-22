// Chapter 11: Industrial Chemistry & Environmental Chemistry
export const chapter11 = {
  id: 11,
  name: "Industrial Chemistry & Environment",
  icon: "🏭",
  color: "#1A6A8E",
  light: "#E1F0F7",
  questions: [
    // ============== MCQs ==============
    {
      id: "c11-mcq-1",
      type: "MCQ",
      source: "Set 1",
      q: "The substance which is used to protect plants from insects and pests is called:",
      options: ["A. Fertilizer", "B. Pesticide", "C. Antibiotic", "D. Antiseptic"],
      answer: "B. Pesticide",
      solution: "Pesticides include insecticides, fungicides, and herbicides. Fertilizers provide nutrients; antiseptics kill germs on living tissue; antibiotics treat bacterial infections."
    },
    {
      id: "c11-mcq-2",
      type: "MCQ",
      source: "Set 2",
      q: "The compound used as a fertilizer with highest nitrogen content is:",
      options: ["A. (NH₄)₂SO₄", "B. CO(NH₂)₂ (urea)", "C. NH₄NO₃", "D. Ca(NO₃)₂"],
      answer: "B. CO(NH₂)₂ (urea)",
      solution: "Urea has 46.6% N (2×14/60); NH₄NO₃ has 35% N; (NH₄)₂SO₄ has 21% N; Ca(NO₃)₂ has 17% N. Urea has the highest N content."
    },
    {
      id: "c11-mcq-3",
      type: "MCQ",
      source: "Set 3",
      q: "Which gas is mainly responsible for depletion of the ozone layer?",
      options: ["A. CO₂", "B. CFCs (Freons)", "C. SO₂", "D. NH₃"],
      answer: "B. CFCs (Freons)",
      solution: "CFCs release Cl atoms in stratosphere that catalytically destroy ozone: Cl + O₃ → ClO + O₂."
    },
    {
      id: "c11-mcq-4",
      type: "MCQ",
      source: "Set 4",
      q: "In the Solvay process, which substance is used as raw material along with NaCl?",
      options: ["A. NH₃ + CO₂", "B. KOH", "C. HCl", "D. H₂SO₄"],
      answer: "A. NH₃ + CO₂",
      solution: "Solvay process: NaCl + NH₃ + CO₂ + H₂O → NaHCO₃ + NH₄Cl. NaHCO₃ is then heated to give Na₂CO₃."
    },
    {
      id: "c11-mcq-5",
      type: "MCQ",
      source: "Set 5",
      q: "The catalyst used in Haber's process for manufacturing ammonia is:",
      options: ["A. V₂O₅", "B. Pt", "C. Finely divided Fe with Mo promoter", "D. ZnO"],
      answer: "C. Finely divided Fe with Mo promoter",
      solution: "Haber's process uses finely divided Fe catalyst with Mo (or sometimes K₂O, Al₂O₃) as promoter at ~450°C and 200 atm."
    },
    {
      id: "c11-mcq-6",
      type: "MCQ",
      source: "Set 6 / HISSAN 2081",
      q: "The chemical formula of urea is:",
      options: ["A. (NH₄)₂CO₃", "B. NH₂CONH₂", "C. NH₄Cl", "D. NH₄NO₃"],
      answer: "B. NH₂CONH₂",
      solution: "Urea is (NH₂)₂CO or NH₂-CO-NH₂. Formed from NH₃ + CO₂ in the urea industry."
    },
    {
      id: "c11-mcq-7",
      type: "MCQ",
      source: "Set 7",
      q: "The substance which destroys the ozone in the stratosphere is:",
      options: ["A. CO₂", "B. SO₂", "C. CFC", "D. H₂"],
      answer: "C. CFC",
      solution: "CFCs (chlorofluorocarbons) release Cl radicals that catalytically destroy ozone."
    },
    {
      id: "c11-mcq-8",
      type: "MCQ",
      source: "HISSAN 2081 (Set A)",
      q: "Octane number of fuel can be raised by adding:",
      options: ["A. TEL", "B. Lead", "C. Benzene", "D. Glycol"],
      answer: "A. TEL",
      solution: "Tetraethyl lead (TEL) Pb(C₂H₅)₄ historically increased octane number (reduces knocking). Now phased out due to lead pollution."
    },
    {
      id: "c11-mcq-9",
      type: "MCQ",
      source: "Set 4",
      q: "Which of these is used to manufacture NaOH industrially?",
      options: ["A. Solvay process", "B. Diaphragm cell (Castner-Kellner)", "C. Haber process", "D. Ostwald process"],
      answer: "B. Diaphragm cell (Castner-Kellner)",
      solution: "NaOH is manufactured by electrolysis of brine (NaCl solution) in a diaphragm cell or mercury cell (Castner-Kellner). Anode: Cl₂; cathode: H₂; NaOH remains in solution."
    },

    // ============== Short Answer Questions ==============
    {
      id: "c11-sa-1",
      type: "Short",
      source: "Set 1",
      q: "What are chemical fertilizers? Classify with examples. Why is urea called neutral fertilizer? Give two harmful effects of excess fertilizer use.",
      answer: "Urea is neutral because it has no acidic/basic ions.",
      solution: `CHEMICAL FERTILIZERS: Synthetic substances added to soil to supply essential nutrients (N, P, K) for plant growth.

CLASSIFICATION:
1. Nitrogenous: Supply N. Examples: Urea, (NH₄)₂SO₄, NH₄NO₃, Ca(NO₃)₂.
2. Phosphatic: Supply P. Examples: Superphosphate of lime, triple superphosphate.
3. Potash: Supply K. Examples: KCl, K₂SO₄.
4. Mixed (NPK): Contain all three. Example: NPK 20:10:10.

WHY UREA IS NEUTRAL:
Urea (NH₂CONH₂) is neither acidic nor basic. On hydrolysis in soil, it gives NH₃ (basic) and CO₂ (acidic) which neutralize each other. So it doesn't alter soil pH.

HARMFUL EFFECTS:
1. EUTROPHICATION: Excess fertilizers wash into water bodies → algal bloom → oxygen depletion → aquatic life dies.
2. Soil deterioration: Excess use destroys soil microorganisms; reduces fertility long-term.
3. Groundwater contamination: Nitrates seep into wells; high NO₃⁻ causes methaemoglobinaemia (blue baby syndrome).
4. Soil acidification (from ammonium fertilizers).`
    },
    {
      id: "c11-sa-2",
      type: "Short",
      source: "Set 2",
      q: "Describe the manufacture of ammonia by Haber's process. Why is high pressure and moderate temperature used?",
      answer: "N₂ + 3H₂ ⇌ 2NH₃, Fe catalyst, 450°C, 200 atm.",
      solution: `HABER'S PROCESS:
Reaction: N₂(g) + 3H₂(g) ⇌ 2NH₃(g) + 92.4 kJ
(Exothermic, decrease in moles of gas)

CONDITIONS:
- Temperature: ~450–500°C
- Pressure: ~200 atm (high)
- Catalyst: Finely divided Iron (Fe) with Mo (or K₂O + Al₂O₃) as promoter

JUSTIFICATION FROM LE CHATELIER:
- HIGH PRESSURE: Forward reaction reduces moles (4 mol → 2 mol), so high P favors NH₃ formation. ✓
- LOW TEMPERATURE: Forward reaction is exothermic, so low T favors NH₃. But at low T, rate is too slow. So a COMPROMISE temperature of ~450°C is used — high enough for fast reaction, but not so high that yield falls drastically.
- CATALYST: Doesn't shift equilibrium, but speeds up attainment of equilibrium.

PROCESS:
1. N₂ from air (after removing O₂).
2. H₂ from water gas (CO + H₂) or hydrocarbons.
3. Purified gases (3:1 H₂:N₂) compressed to 200 atm.
4. Passed over Fe catalyst at 450°C in converter.
5. About 15-20% NH₃ formed; cooled and liquefied; unreacted gases recycled.`
    },
    {
      id: "c11-sa-3",
      type: "Short",
      source: "Set 4",
      q: "Describe Solvay (ammonia-soda) process for manufacture of Na₂CO₃. Why is K₂CO₃ not manufactured by this method?",
      answer: "NaCl + NH₃ + CO₂ + H₂O → NaHCO₃ + NH₄Cl, then NaHCO₃ → Na₂CO₃.",
      solution: `SOLVAY PROCESS:
RAW MATERIALS: NaCl brine, NH₃, CO₂ (from CaCO₃), CaO (lime).

STEPS:
1. Saturated NaCl brine is saturated with NH₃ in an ammonia absorber.
2. CO₂ is passed through ammoniacal brine in the Solvay tower.
3. Reactions:
   NH₃ + CO₂ + H₂O → NH₄HCO₃
   NH₄HCO₃ + NaCl → NaHCO₃↓ + NH₄Cl
   (NaHCO₃ is less soluble; it precipitates.)
4. NaHCO₃ filtered and heated:
   2NaHCO₃ → Na₂CO₃ + H₂O + CO₂↑ (CO₂ recycled)
5. NH₃ recovery: NH₄Cl + Ca(OH)₂ → CaCl₂ + 2NH₃ + 2H₂O (NH₃ recycled)
6. CO₂ from: CaCO₃ → CaO + CO₂ (kiln).

WHY K₂CO₃ NOT MADE BY THIS METHOD:
The Solvay process relies on the LOW solubility of NaHCO₃ to precipitate it from solution.
KHCO₃ (analog for potassium) is much MORE SOLUBLE in water than NaHCO₃. So KHCO₃ does not precipitate, and the process fails.
Hence, K₂CO₃ is manufactured by other methods (e.g., from KCl via various routes).`
    },
    {
      id: "c11-sa-4",
      type: "Short",
      source: "Set 5",
      q: "How is NaOH manufactured in diaphragm cell? Write reactions at anode and cathode. Why is the diaphragm necessary?",
      answer: "Brine electrolysis: Cl₂ at anode, H₂ + NaOH at cathode side.",
      solution: `DIAPHRAGM CELL FOR NaOH:
RAW MATERIAL: Aqueous NaCl (brine).

SETUP:
- Anode: titanium (or graphite) → coated with TiO₂/RuO₂.
- Cathode: iron mesh.
- A porous asbestos diaphragm separates the anode and cathode compartments.

ELECTRODE REACTIONS:
At ANODE (oxidation): 2Cl⁻ → Cl₂↑ + 2e⁻
At CATHODE (reduction): 2H₂O + 2e⁻ → H₂↑ + 2OH⁻

The Na⁺ ions migrate through the diaphragm to the cathode side, where they combine with OH⁻ to form NaOH.

WHY DIAPHRAGM IS NEEDED:
Without separation, Cl₂ produced at anode would react with NaOH formed at cathode:
2NaOH + Cl₂ → NaCl + NaClO + H₂O
This would convert NaOH back to NaCl and form NaOCl (unwanted). The diaphragm prevents this back-reaction by physically separating Cl₂ from the OH⁻/NaOH solution.

The cathode solution contains NaOH (~10%), unreacted NaCl, etc. It is concentrated by evaporation to get solid NaOH; NaCl crystallizes out and is recycled.`
    },
    {
      id: "c11-sa-5",
      type: "Short",
      source: "Set 6",
      q: "What is fertilizer? Name a complex (NPK) fertilizer and write its formula/composition.",
      answer: "NPK = complex fertilizer supplying N, P, K.",
      solution: `FERTILIZER: Any natural or synthetic material added to soil to supply essential plant nutrients (mainly N, P, K and sometimes S, Ca, Mg).

NPK FERTILIZER:
A mixed (complex) fertilizer containing Nitrogen (N), Phosphorus (P), and Potassium (K) in specific ratios.

Common composition example: NPK 15-15-15 means 15% each of N, P₂O₅, K₂O by mass.

Components:
- N source: NH₄NO₃, (NH₄)₂SO₄, or urea.
- P source: Ca(H₂PO₄)₂ (superphosphate) or diammonium phosphate.
- K source: KCl or K₂SO₄.

These are mixed and granulated.

ADVANTAGES:
- Supplies all three macro-nutrients in a single application.
- Composition can be tailored for specific crops/soil.`
    },
    {
      id: "c11-sa-6",
      type: "Short",
      source: "Set 7",
      q: "What is ozone layer depletion? Mention the role of CFCs. State two effects on human health.",
      answer: "CFCs release Cl, which destroys O₃. Skin cancer and immunity issues.",
      solution: `OZONE LAYER DEPLETION: The reduction in the concentration of ozone (O₃) in the stratosphere, especially over polar regions (ozone hole), caused mainly by anthropogenic gases.

ROLE OF CFCs (Freons):
CFCs (e.g., CFCl₃, CF₂Cl₂) are very stable in the troposphere but reach the stratosphere where UV breaks them down:
CFCl₃ + UV → CFCl₂ + Cl•

The free Cl radical catalytically destroys ozone:
Cl• + O₃ → ClO• + O₂
ClO• + O → Cl• + O₂

Net: O₃ + O → 2O₂
The Cl radical is regenerated and can destroy many more O₃ molecules (a single Cl can destroy up to 100,000 O₃).

EFFECTS ON HUMAN HEALTH:
1. SKIN CANCER: Reduced O₃ → more UV-B reaches Earth → mutations in skin cells → skin cancer (especially melanoma).
2. EYE DAMAGE: Cataracts and snow blindness.
3. WEAKENED IMMUNE SYSTEM: UV exposure suppresses immune response.
4. Damage to crops and marine plankton (food chain disruption).`
    },
    {
      id: "c11-sa-7",
      type: "Short",
      source: "Set 3",
      q: "Define biological transport. What is the role of Na-K pump? Briefly explain glucose pump.",
      answer: "Na-K pump moves Na out, K in, using ATP. Glucose pump transports glucose into cells.",
      solution: `BIOLOGICAL TRANSPORT: The movement of substances (ions, nutrients, molecules) across cell membranes against or along concentration gradients, essential for cellular function.

Na-K PUMP:
A protein in the cell membrane that:
- Pumps 3 Na⁺ ions OUT of the cell.
- Pumps 2 K⁺ ions INTO the cell.
- Uses energy from ATP hydrolysis (active transport).

Significance:
- Maintains low intracellular Na⁺ and high intracellular K⁺ — essential for nerve impulse transmission.
- Regulates cell volume.
- Drives secondary active transport (e.g., glucose uptake).
- Generates the resting membrane potential.

GLUCOSE PUMP (Sodium-Glucose Co-transporter, SGLT):
A protein that transports glucose into cells (especially in the small intestine and kidney tubules).
Mechanism:
- Uses the Na⁺ gradient created by the Na-K pump (high outside, low inside).
- Couples the downhill movement of Na⁺ (into cell) with the uphill movement of glucose (into cell).
- This is SECONDARY ACTIVE TRANSPORT — glucose moves against its gradient powered by Na⁺ flow.

Significance:
- Essential for absorption of glucose from food in the gut.
- Reabsorption of glucose by kidney tubules (prevents loss in urine).`
    },
    {
      id: "c11-sa-8",
      type: "Short",
      source: "HISSAN 2081",
      q: "What is octane number? How can it be improved? What is anti-knocking agent? Name two.",
      answer: "Octane number = anti-knock quality of fuel. TEL or MTBE used.",
      solution: `OCTANE NUMBER: A measure of the anti-knocking quality of a petrol (gasoline) fuel. It is defined as the percentage by volume of iso-octane (2,2,4-trimethylpentane) in a mixture of iso-octane and n-heptane that has the same knocking characteristics as the test fuel.

- iso-octane has octane number = 100 (excellent anti-knock).
- n-heptane has octane number = 0 (knocks badly).
A fuel with octane number 90 knocks like a mixture of 90% iso-octane and 10% n-heptane.

IMPROVING OCTANE NUMBER:
1. Adding anti-knock agents (additives).
2. Catalytic reforming (converts straight-chain alkanes to branched/aromatic compounds).
3. Adding oxygenated compounds like ethanol (gasohol) or MTBE.
4. Isomerization and cracking.

ANTI-KNOCKING AGENT:
A substance added to petrol to prevent premature ignition (knocking) in engines.
Examples:
1. Tetraethyl lead (TEL), Pb(C₂H₅)₄ — historic; now banned due to Pb pollution.
2. Methyl tert-butyl ether (MTBE) — modern replacement.
3. Ethanol — used in gasohol.`
    }
  ]
};

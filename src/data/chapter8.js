// Chapter 8: Non-metals & Their Compounds (Halogens, Sulphur, Nitrogen, Oxygen, Hydrogen)
export const chapter8 = {
  id: 8,
  name: "Non-metals & Their Compounds",
  icon: "🧪",
  color: "#3B6D11",
  light: "#EAF3DE",
  questions: [
    // ============== MCQs ==============
    {
      id: "c8-mcq-1",
      type: "MCQ",
      source: "Set 1",
      q: "The catalyst used in industrial manufacture of nitric acid is:",
      options: ["A. Powdered Fe₂O₃", "B. V₂O₅", "C. Zn/Hg", "D. Pt-Rh gauze"],
      answer: "D. Pt-Rh gauze",
      solution: "In Ostwald's process for HNO₃, Pt-Rh gauze (90% Pt, 10% Rh) catalyzes the oxidation of NH₃ to NO at ~800°C."
    },
    {
      id: "c8-mcq-2",
      type: "MCQ",
      source: "Set 1",
      q: "In manufacture of sulphuric acid by contact process, production of SO₃ is favoured by:",
      options: ["A. High temperature", "B. Low pressure", "C. Low temperature", "D. Low concentration"],
      answer: "C. Low temperature",
      solution: "2SO₂ + O₂ ⇌ 2SO₃ + heat is exothermic. By Le Chatelier, low T favors more SO₃. (In practice, ~450°C is used as a compromise for speed.)"
    },
    {
      id: "c8-mcq-3",
      type: "MCQ",
      source: "HISSAN 2081 (Set B)",
      q: "Molecular formula of pyrosulphuric acid is:",
      options: ["A. H₂S₂O₇", "B. Dilute H₂SO₄", "C. H₂SO₄", "D. Conc. H₂SO₄"],
      answer: "A. H₂S₂O₇",
      solution: "Pyrosulphuric acid (oleum) is H₂S₂O₇. It is formed by absorbing SO₃ in concentrated H₂SO₄."
    },
    {
      id: "c8-mcq-4",
      type: "MCQ",
      source: "HISSAN 2081 (Set B)",
      q: "N₂O is formed by heating:",
      options: ["A. (NH₄)₂SO₄", "B. NH₄NO₃", "C. NH₄Cl", "D. N₂O₄"],
      answer: "B. NH₄NO₃",
      solution: "NH₄NO₃ → N₂O + 2H₂O on gentle heating. This is the laboratory preparation of nitrous oxide."
    },
    {
      id: "c8-mcq-5",
      type: "MCQ",
      source: "HISSAN 2081 (Set B)",
      q: "Which of the following is peroxide?",
      options: ["A. BaO₂", "B. K₂O", "C. KO₂", "D. Pb₃O₄"],
      answer: "A. BaO₂",
      solution: "Peroxides contain O-O bond (O₂²⁻ ion), where O has -1 oxidation state. BaO₂ is a peroxide. K₂O is normal oxide; KO₂ is superoxide; Pb₃O₄ is mixed oxide."
    },
    {
      id: "c8-mcq-6",
      type: "MCQ",
      source: "Set 2",
      q: "What happens when ethene is treated with Baeyer's reagent (alkaline KMnO₄)?",
      options: ["A. (red ppt and other options were jumbled)", "B. Pink color disappears, ethylene glycol forms", "C. No reaction", "D. None"],
      answer: "B. Pink color disappears, ethylene glycol forms",
      solution: "Baeyer's test: ethene + cold dilute alkaline KMnO₄ → ethane-1,2-diol (ethylene glycol). The pink color of KMnO₄ disappears as MnO₄⁻ is reduced to MnO₂."
    },
    {
      id: "c8-mcq-7",
      type: "MCQ",
      source: "Set 3",
      q: "What happens when SO₂ gas is passed through a saturated solution of H₂S?",
      options: ["A. SO₂ is oxidized to S", "B. H₂S is reduced to S", "C. SO₂ is oxidized to H₂SO₄", "D. SO₂ is reduced"],
      answer: "D. SO₂ is reduced",
      solution: "2H₂S + SO₂ → 3S + 2H₂O. SO₂ acts as oxidizing agent (S goes from +4 to 0) and H₂S is reducing agent (S from -2 to 0). Both S species are converted to elemental S."
    },
    {
      id: "c8-mcq-8",
      type: "MCQ",
      source: "Set 7",
      q: "Ozone is an:",
      options: ["A. Allotrope of Oxygen", "B. An isomer of Oxygen", "C. An isotope of Oxygen", "D. Isostructural with H₂O₂"],
      answer: "A. Allotrope of Oxygen",
      solution: "Ozone (O₃) and dioxygen (O₂) are allotropes of oxygen — same element, different forms."
    },
    {
      id: "c8-mcq-9",
      type: "MCQ",
      source: "Set 7",
      q: "Bleaching action of SO₂ is due to:",
      options: ["A. Reduction", "B. Oxidation", "C. Hydrolysis", "D. Its acidic nature"],
      answer: "A. Reduction",
      solution: "SO₂ + 2H₂O → H₂SO₄ + 2H. The nascent H reduces the coloring matter. This is temporary bleaching (color returns on exposure to air)."
    },
    {
      id: "c8-mcq-10",
      type: "MCQ",
      source: "Set 8 (Set 4)",
      q: "Which element can form both cation and anion?",
      options: ["A. Na", "B. F", "C. H", "D. Fe"],
      answer: "C. H",
      solution: "Hydrogen can lose an electron to form H⁺ (in HCl) or gain one to form H⁻ (hydride ion, in NaH). Na only forms Na⁺; F only F⁻."
    },

    // ============== Short Answer Questions ==============
    {
      id: "c8-sa-1",
      type: "Short",
      source: "Set 2",
      q: "Chlorine is gas but bromine is liquid, why? Action of chlorine with (i) excess NH₃ (ii) hot and conc. NaOH. Compare bleaching action of Cl₂ with SO₂.",
      answer: "Br₂ is liquid because of stronger van der Waals forces.",
      solution: `Cl₂ vs Br₂ STATE:
Both are non-polar diatomic molecules.
Br₂ molecules are larger and have more electrons → stronger London dispersion (van der Waals) forces between molecules → higher boiling point (59°C vs -34°C for Cl₂).
At room temperature: Cl₂ is gas, Br₂ is liquid.

ACTION OF Cl₂:
(i) Excess NH₃: 8NH₃ + 3Cl₂ → N₂ + 6NH₄Cl
(ii) Hot, concentrated NaOH: 3Cl₂ + 6NaOH → 5NaCl + NaClO₃ + 3H₂O (disproportionation)

BLEACHING ACTION:
Cl₂: Acts by OXIDATION. Cl₂ + H₂O → HCl + HOCl; HOCl → HCl + [O]. The nascent oxygen oxidizes the coloring matter. Bleaching is PERMANENT.
SO₂: Acts by REDUCTION. SO₂ + 2H₂O → H₂SO₄ + 2[H]. Nascent hydrogen reduces the dye. Bleaching is TEMPORARY (color returns on exposure to air, as the reduced dye is re-oxidized by O₂).`
    },
    {
      id: "c8-sa-2",
      type: "Short",
      source: "HISSAN 2081 (Set A)",
      q: "Preparation of H₂S in Kipp's apparatus with chemical reaction. Test reaction of this gas. One reaction showing it acts as analytical reagent.",
      answer: "FeS + H₂SO₄(dil) → FeSO₄ + H₂S↑",
      solution: `PREPARATION (Kipp's apparatus):
Reagents: Iron(II) sulphide (FeS) and dilute H₂SO₄.
Reaction: FeS + H₂SO₄ → FeSO₄ + H₂S↑

In Kipp's apparatus, dilute acid in the upper bulb flows down and contacts FeS lumps in the middle bulb. When gas is needed, stopcock is opened. When closed, gas pressure pushes the acid back into the upper bulb, stopping the reaction.

TEST REACTION (Lead acetate paper):
H₂S turns lead acetate paper black due to formation of PbS.
Pb(CH₃COO)₂ + H₂S → PbS↓ (black) + 2CH₃COOH

ANALYTICAL REAGENT:
H₂S precipitates metal sulphides of different colors useful in qualitative analysis:
CuSO₄ + H₂S → CuS↓ (black) + H₂SO₄
ZnSO₄ + H₂S → ZnS↓ (white) + H₂SO₄ (in alkaline medium)
CdSO₄ + H₂S → CdS↓ (yellow) + H₂SO₄`
    },
    {
      id: "c8-sa-3",
      type: "Short",
      source: "HISSAN 2081 (Set B)",
      q: "Why is HNO₃ stored in airtight dark brown bottles? How is nitrate ion test performed at lab?",
      answer: "HNO₃ is light-sensitive; brown ring test for NO₃⁻.",
      solution: `STORAGE IN DARK BROWN BOTTLES:
HNO₃ decomposes in the presence of sunlight to give NO₂, O₂, and H₂O:
4HNO₃ → 4NO₂ + O₂ + 2H₂O
This decomposition turns the acid yellowish-brown due to dissolved NO₂. Dark bottles block light. Airtight to prevent reaction with moisture/air.

BROWN RING TEST FOR NO₃⁻:
1. Add freshly prepared FeSO₄ solution to the nitrate solution.
2. Carefully pour concentrated H₂SO₄ down the side of the test tube so that it forms a separate layer at the bottom.
3. A BROWN RING forms at the junction of the two liquids.
Reactions:
NaNO₃ + H₂SO₄ → NaHSO₄ + HNO₃
2HNO₃ + 6FeSO₄ + 3H₂SO₄ → 3Fe₂(SO₄)₃ + 2NO + 4H₂O
FeSO₄ + NO → [Fe(NO)]SO₄ (brown ring, nitrosyl iron sulphate)`
    },
    {
      id: "c8-sa-4",
      type: "Short",
      source: "Set 5",
      q: "Balanced chemical reaction for preparation of Cl₂ in lab without heat. What is action of Cl₂ on (i) excess NH₃ (ii) conc. NaOH. Explain bleaching action of Cl₂.",
      answer: "KMnO₄ + HCl → without heat. Bleaching by oxidation.",
      solution: `PREPARATION WITHOUT HEAT:
2KMnO₄ + 16HCl → 2KCl + 2MnCl₂ + 8H₂O + 5Cl₂↑
(KMnO₄ is a strong oxidizer; reaction with conc. HCl proceeds at room temperature.)

ACTION OF Cl₂:
(i) Excess NH₃: 8NH₃ + 3Cl₂ → N₂ + 6NH₄Cl
(ii) Conc. NaOH (cold, dilute) → 2NaOH + Cl₂ → NaCl + NaOCl + H₂O
    Hot conc. NaOH → 6NaOH + 3Cl₂ → 5NaCl + NaClO₃ + 3H₂O

BLEACHING ACTION:
Cl₂ + H₂O → HCl + HOCl
HOCl → HCl + [O] (nascent oxygen)
Coloring matter + [O] → colorless oxidized product
This is permanent bleaching by oxidation.`
    },
    {
      id: "c8-sa-5",
      type: "Short",
      source: "Set 5",
      q: "Explain physico-chemical principle for preparation of HNO₃ by catalytic oxidation of NH₃. Action of HNO₃ on (i) copper (ii) phosphorus.",
      answer: "Ostwald's process: NH₃ → NO → NO₂ → HNO₃.",
      solution: `OSTWALD'S PROCESS — PRINCIPLE:
Step 1 (Catalytic oxidation): 4NH₃ + 5O₂ → 4NO + 6H₂O (Pt-Rh gauze, ~800°C, ~7 atm)
Step 2 (Further oxidation): 2NO + O₂ → 2NO₂ (cooled to ~50°C)
Step 3 (Absorption in water): 3NO₂ + H₂O → 2HNO₃ + NO (NO recycled back)

Net: NH₃ + 2O₂ → HNO₃ + H₂O

ACTION ON COPPER:
With dilute HNO₃: 3Cu + 8HNO₃ → 3Cu(NO₃)₂ + 2NO↑ + 4H₂O
With conc. HNO₃: Cu + 4HNO₃ → Cu(NO₃)₂ + 2NO₂↑ + 2H₂O

ACTION ON PHOSPHORUS:
P₄ + 20HNO₃(conc.) → 4H₃PO₄ + 20NO₂↑ + 4H₂O
P is oxidized to phosphoric acid; HNO₃ acts as strong oxidizer.`
    },
    {
      id: "c8-sa-6",
      type: "Short",
      source: "Set 6",
      q: "Define isotope. Write down isotopes of hydrogen with number of protons, electrons, neutrons. Mention two uses of each.",
      answer: "Protium, Deuterium, Tritium.",
      solution: `ISOTOPE: Atoms of the same element having the same atomic number but different mass numbers (different number of neutrons).

HYDROGEN ISOTOPES:
1. PROTIUM (¹₁H): 1 proton, 1 electron, 0 neutrons. Most abundant (~99.98%).
   Uses: Common hydrogen, used in HCl, water, NH₃ industry.
2. DEUTERIUM (²₁H or D): 1 proton, 1 electron, 1 neutron. ~0.015%.
   Uses: Heavy water (D₂O) as moderator in nuclear reactors; tracer in chemical reactions.
3. TRITIUM (³₁H or T): 1 proton, 1 electron, 2 neutrons. Radioactive, very rare.
   Uses: Tracer in biological research; in hydrogen bombs; luminous paints.`
    },
    {
      id: "c8-sa-7",
      type: "Short",
      source: "Set 7",
      q: "Define allotropy. Classify oxides: BaO₂, Al₂O₃, Fe₃O₄, N₂O₃.",
      answer: "BaO₂ peroxide; Al₂O₃ amphoteric; Fe₃O₄ mixed; N₂O₃ acidic.",
      solution: `ALLOTROPY: The existence of an element in two or more different forms in the same physical state, having different physical properties but similar chemical properties.
Example: Carbon (diamond, graphite, fullerene); Oxygen (O₂ and O₃).

CLASSIFICATION OF OXIDES:
- BaO₂: PEROXIDE (contains O-O bond, O has -1 oxidation state)
- Al₂O₃: AMPHOTERIC (reacts with both acids and bases)
- Fe₃O₄: MIXED OXIDE (FeO·Fe₂O₃, contains both Fe²⁺ and Fe³⁺)
- N₂O₃: ACIDIC OXIDE (anhydride of HNO₂; gives HNO₂ + HNO₃ with H₂O — actually mixed acidic)`
    },
    {
      id: "c8-sa-8",
      type: "Short",
      source: "Set 3",
      q: "Why are halogens not found in free state in nature? How is chlorine prepared without application of heat? What happens when Cl₂ is treated with cold dilute NaOH? Write two uses of bromine.",
      answer: "Halogens are highly reactive; Cl₂ from KMnO₄ + HCl; with cold dil NaOH gives bleaching solution.",
      solution: `WHY NOT FREE: Halogens are highly reactive non-metals with high electron affinity. They readily combine with metals and other elements to form halides. So they always exist as compounds in nature (e.g., NaCl, MgCl₂).

PREPARATION OF Cl₂ WITHOUT HEAT:
2KMnO₄ + 16HCl → 2KCl + 2MnCl₂ + 5Cl₂↑ + 8H₂O (at room temperature)

REACTION WITH COLD DILUTE NaOH:
Cl₂ + 2NaOH → NaCl + NaOCl + H₂O
NaOCl is sodium hypochlorite, used as bleaching solution (Eau de Javel).

USES OF BROMINE:
1. In manufacture of dyes, pharmaceuticals, photographic chemicals (AgBr).
2. In making ethylene dibromide (anti-knock agent in leaded petrol — historic use); flame retardants.
3. As a disinfectant in swimming pools.`
    },
    {
      id: "c8-sa-9",
      type: "Short",
      source: "Set 2 (OR)",
      q: "What is nascent hydrogen? How is it prepared? Why is it a more powerful reducing agent than molecular hydrogen? Isotopes of hydrogen and one application each. How is atomic hydrogen produced?",
      answer: "Nascent H is freshly generated; atomic H from electric arc.",
      solution: `NASCENT HYDROGEN: Hydrogen at the moment of its generation (in situ). It exists as free H atoms briefly before combining to form H₂.

PREPARATION: By reactions like Zn + dil. H₂SO₄ in the presence of substance to be reduced. The H atoms react immediately as they are formed.

WHY MORE REACTIVE:
Molecular H₂ has a strong H-H bond (~436 kJ/mol). To act as reductant, this bond must break, requiring energy. Nascent H is already in atomic form, so this activation energy is avoided. Hence nascent H is much more reactive.

ISOTOPES & APPLICATIONS:
- Protium (¹H): ordinary hydrogen, used in NH₃ synthesis.
- Deuterium (²H): D₂O as moderator in nuclear reactors.
- Tritium (³H): radioactive tracer in research.

ATOMIC HYDROGEN:
Produced by passing H₂ through an electric arc between two tungsten electrodes at high temperature (~4000°C). The H₂ molecules dissociate into H atoms.
H₂ → 2H (atomic hydrogen)
Used in atomic hydrogen torch for welding (very high temperatures ~4000°C when atoms recombine).`
    },

    // ============== Long Answer Questions ==============
    {
      id: "c8-la-1",
      type: "Long",
      source: "Set 2 (OR)",
      q: "Sulphuric acid is called 'oil of vitriol'. (a) Write four-step principle of contact process. (b) Draw flow sheet. (c) Show H₂SO₄ as dehydrating, oxidising, diprotic acid, and precipitating agent.",
      answer: "Contact process via V₂O₅ catalyst.",
      solution: `FOUR-STEP PRINCIPLE (Contact Process):
1. Production of SO₂:
   - By burning sulphur: S + O₂ → SO₂
   - Or roasting pyrites: 4FeS₂ + 11O₂ → 2Fe₂O₃ + 8SO₂

2. Purification of SO₂: SO₂ gas is freed from dust, arsenic, and moisture (which poison the catalyst). Steps: dust chamber, scrubber (water), drying tower (conc. H₂SO₄), arsenic purifier (Fe(OH)₃), test box.

3. Catalytic oxidation of SO₂ to SO₃:
   2SO₂ + O₂ ⇌ 2SO₃ + heat
   Conditions: V₂O₅ catalyst, 450°C, 1–2 atm.

4. Absorption of SO₃:
   SO₃ + H₂SO₄ → H₂S₂O₇ (oleum)
   H₂S₂O₇ + H₂O → 2H₂SO₄
   (Direct absorption in water is not done as it forms a mist.)

PROPERTIES OF H₂SO₄:
- DEHYDRATING agent: C₁₂H₂₂O₁₁ (sugar) + H₂SO₄ → 12C + 11H₂O·H₂SO₄ (charring)
- OXIDISING agent: Cu + 2H₂SO₄(conc, hot) → CuSO₄ + SO₂ + 2H₂O
- DIPROTIC acid: H₂SO₄ ionizes in two steps:
   H₂SO₄ → H⁺ + HSO₄⁻ (complete)
   HSO₄⁻ ⇌ H⁺ + SO₄²⁻ (partial)
- PRECIPITATING agent: BaCl₂ + H₂SO₄ → BaSO₄↓ (white) + 2HCl`
    },
    {
      id: "c8-la-2",
      type: "Long",
      source: "Set 5 (OR)",
      q: "Starting from Iron pyrites, obtain conc. H₂SO₄. Give principle, flow sheet, and reactions showing H₂SO₄ as dehydrating and precipitating agent. What happens when H₂S is passed through acidified KMnO₄?",
      answer: "Iron pyrites → SO₂ → SO₃ → H₂SO₄.",
      solution: `(For contact process, see Long Answer #1 above.)

ACTION OF H₂S ON ACIDIFIED KMnO₄:
H₂S reduces KMnO₄ in acidic medium. KMnO₄ is decolorized (pink → colorless) and S is precipitated.
2KMnO₄ + 5H₂S + 3H₂SO₄ → K₂SO₄ + 2MnSO₄ + 5S↓ + 8H₂O
(H₂S → S, oxidation; MnO₄⁻ → Mn²⁺, reduction)
This shows H₂S acts as a reducing agent.`
    },
    {
      id: "c8-la-3",
      type: "Long",
      source: "Set 6",
      q: "Starting from sulphur, how would you obtain H₂SO₄ in contact process? Explain principle. Write action of H₂SO₄ on (i) glucose (ii) phosphorus.",
      answer: "Contact process; H₂SO₄ chars glucose; oxidizes P to H₃PO₄.",
      solution: `Starting from S:
1. S + O₂ → SO₂
2. 2SO₂ + O₂ ⇌ 2SO₃ (V₂O₅, 450°C)
3. SO₃ + H₂SO₄ → H₂S₂O₇
4. H₂S₂O₇ + H₂O → 2H₂SO₄

ON GLUCOSE (Dehydrating):
C₆H₁₂O₆ + H₂SO₄(conc) → 6C + 6H₂O·H₂SO₄
Glucose is dehydrated and converted to black carbon (charring).

ON PHOSPHORUS (Oxidizing):
2P + 5H₂SO₄(conc, hot) → 2H₃PO₄ + 5SO₂↑ + 2H₂O
P is oxidized to phosphoric acid.`
    }
  ]
};

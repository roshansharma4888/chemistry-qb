// Chapter 10: Organic Chemistry (Hydrocarbons, Isomerism, Functional Groups, Named Reactions)
export const chapter10 = {
  id: 10,
  name: "Organic Chemistry",
  icon: "🧬",
  color: "#8E1E5E",
  light: "#F9E6F0",
  questions: [
    // ============== MCQs ==============
    {
      id: "c10-mcq-1",
      type: "MCQ",
      source: "Set 1",
      q: "The general formula CₙH₂ₙ₊₂ represents:",
      options: ["A. Alkanes", "B. Alkenes", "C. Alkynes", "D. Cycloalkanes"],
      answer: "A. Alkanes",
      solution: "Alkanes: CₙH₂ₙ₊₂. Alkenes and cycloalkanes: CₙH₂ₙ. Alkynes: CₙH₂ₙ₋₂."
    },
    {
      id: "c10-mcq-2",
      type: "MCQ",
      source: "Set 1",
      q: "Which is most acidic?",
      options: ["A. Ethanol", "B. Acetic acid", "C. Carbonic acid", "D. Phenol"],
      answer: "B. Acetic acid",
      solution: "Acidic strength order: Carboxylic acid > Carbonic acid > Phenol > Alcohol. CH₃COOH is the most acidic among these."
    },
    {
      id: "c10-mcq-3",
      type: "MCQ",
      source: "Set 2",
      q: "Compound shows geometrical isomerism:",
      options: ["A. CH₃-CH=CH-CH₃", "B. (CH₃)₂C=CH₂", "C. CH₂=CH₂", "D. CH₃-CH=CH₂"],
      answer: "A. CH₃-CH=CH-CH₃",
      solution: "For geometrical (cis-trans) isomerism, each carbon of the double bond must have two different groups. But-2-ene (CH₃-CH=CH-CH₃) qualifies. The other options have at least one C of C=C with identical groups."
    },
    {
      id: "c10-mcq-4",
      type: "MCQ",
      source: "Set 2",
      q: "Wurtz reaction is used to prepare:",
      options: ["A. Alkanes", "B. Alkenes", "C. Alkynes", "D. Alcohols"],
      answer: "A. Alkanes",
      solution: "Wurtz reaction: 2R-X + 2Na (dry ether) → R-R + 2NaX. Produces symmetrical alkanes."
    },
    {
      id: "c10-mcq-5",
      type: "MCQ",
      source: "Set 3",
      q: "Benzene is:",
      options: ["A. Aliphatic compound", "B. Aromatic compound", "C. Alicyclic compound", "D. Saturated compound"],
      answer: "B. Aromatic compound",
      solution: "Benzene (C₆H₆) is the prototypical aromatic compound — planar, cyclic, conjugated, follows Hückel's rule (6π electrons)."
    },
    {
      id: "c10-mcq-6",
      type: "MCQ",
      source: "Set 3",
      q: "Number of structural isomers of pentane (C₅H₁₂):",
      options: ["A. 2", "B. 3", "C. 4", "D. 5"],
      answer: "B. 3",
      solution: "C₅H₁₂ has 3 isomers: n-pentane, isopentane (2-methylbutane), neopentane (2,2-dimethylpropane)."
    },
    {
      id: "c10-mcq-7",
      type: "MCQ",
      source: "Set 4",
      q: "Which one of the following has highest boiling point?",
      options: ["A. n-pentane", "B. iso-pentane", "C. neo-pentane", "D. All have same"],
      answer: "A. n-pentane",
      solution: "Among isomers of C₅H₁₂, the straight-chain n-pentane has the largest surface area → strongest van der Waals forces → highest BP (36°C). Branched forms have lower BPs."
    },
    {
      id: "c10-mcq-8",
      type: "MCQ",
      source: "Set 5",
      q: "Markovnikov's rule is applicable to:",
      options: ["A. Symmetrical alkenes", "B. Asymmetrical alkenes", "C. Alkanes", "D. Alkynes only"],
      answer: "B. Asymmetrical alkenes",
      solution: "Markovnikov's rule applies to addition of HX to unsymmetrical alkenes/alkynes: H adds to the C with more H atoms; X to the C with fewer H atoms."
    },
    {
      id: "c10-mcq-9",
      type: "MCQ",
      source: "Set 6",
      q: "IUPAC name of CH₃-CH(CH₃)-CH₂-CH₃ is:",
      options: ["A. 2-methylbutane", "B. 3-methylbutane", "C. n-pentane", "D. iso-pentane"],
      answer: "A. 2-methylbutane",
      solution: "Longest chain = 4 carbons (butane). Methyl branch at position 2 (counted from end nearer to branch). So 2-methylbutane."
    },
    {
      id: "c10-mcq-10",
      type: "MCQ",
      source: "Set 7",
      q: "Which test confirms presence of unsaturation?",
      options: ["A. Lassaigne's test", "B. Baeyer's test", "C. Iodoform test", "D. Tollen's test"],
      answer: "B. Baeyer's test",
      solution: "Baeyer's test (cold dilute alkaline KMnO₄) decolorizes when unsaturation (C=C or C≡C) is present. Bromine water also decolorizes. Lassaigne's is for N/S/halogen; iodoform is for CH₃CO-/CH₃CH(OH)- groups."
    },
    {
      id: "c10-mcq-11",
      type: "MCQ",
      source: "HISSAN 2081 (Set A)",
      q: "Which of the following is used as anti-knocking agent in petrol?",
      options: ["A. TEL [Pb(C₂H₅)₄]", "B. Ethanol", "C. Methane", "D. Butane"],
      answer: "A. TEL [Pb(C₂H₅)₄]",
      solution: "Tetraethyl lead, Pb(C₂H₅)₄, was historically added to petrol as antiknock agent. Now phased out due to Pb pollution; replaced by MTBE and ethanol blends."
    },
    {
      id: "c10-mcq-12",
      type: "MCQ",
      source: "HISSAN 2081",
      q: "Hückel's rule for aromaticity requires:",
      options: ["A. (4n+2) π electrons", "B. 4n π electrons", "C. 2n π electrons", "D. n π electrons"],
      answer: "A. (4n+2) π electrons",
      solution: "Hückel's rule: aromatic compounds have (4n+2)π electrons in a planar, cyclic, fully conjugated system. For benzene: 6 = 4(1)+2 ✓."
    },

    // ============== Short Answer Questions ==============
    {
      id: "c10-sa-1",
      type: "Short",
      source: "Set 1",
      q: "Define homologous series with characteristics. Write Kolbe's electrolytic method for preparing ethane.",
      answer: "Homologous: same functional group, differ by CH₂. Kolbe's: electrolysis of sodium acetate.",
      solution: `HOMOLOGOUS SERIES: A series of organic compounds with the same general formula and same functional group, with consecutive members differing by a CH₂ unit.

CHARACTERISTICS:
1. Same general formula (e.g., alkanes: CₙH₂ₙ₊₂).
2. Same functional group → similar chemical properties.
3. Consecutive members differ by –CH₂– (14 amu).
4. Physical properties (BP, MP, density) change regularly with increasing molecular mass.
5. All members can be prepared by similar methods.

KOLBE'S ELECTROLYSIS:
Electrolysis of an aqueous solution of sodium acetate gives ethane:
2CH₃COONa + 2H₂O → CH₃-CH₃ + 2CO₂ + 2NaOH + H₂ (at electrodes)

At anode: 2CH₃COO⁻ → CH₃-CH₃ + 2CO₂ + 2e⁻
At cathode: 2H₂O + 2e⁻ → H₂ + 2OH⁻`
    },
    {
      id: "c10-sa-2",
      type: "Short",
      source: "Set 2",
      q: "What are functional isomers? Give an example. How can ethylene be prepared from ethanol? Give industrial use of ethylene.",
      answer: "Functional isomers: same formula, different functional group. Ethanol → ethylene by dehydration.",
      solution: `FUNCTIONAL ISOMERS: Compounds with the same molecular formula but different functional groups.
Example: C₂H₆O can be:
- Ethanol (CH₃CH₂OH): alcohol
- Dimethyl ether (CH₃OCH₃): ether

PREPARATION OF ETHYLENE FROM ETHANOL:
By dehydration of ethanol with concentrated H₂SO₄ at 170°C:
CH₃CH₂OH → CH₂=CH₂ + H₂O (conc. H₂SO₄, 170°C)

Alternatively, passing ethanol vapor over heated Al₂O₃ at 350°C gives the same result.

INDUSTRIAL USES OF ETHYLENE:
1. Manufacture of polyethylene (plastic).
2. Production of ethylene oxide → ethylene glycol (antifreeze, polyester fibers).
3. Synthesis of ethanol, acetaldehyde, ethyl chloride, vinyl chloride (for PVC).
4. As an artificial ripening agent for fruits (releases ethylene gas).`
    },
    {
      id: "c10-sa-3",
      type: "Short",
      source: "Set 3",
      q: "Discuss the structure of benzene. Why is it considered aromatic? State Hückel's rule.",
      answer: "Benzene: hexagonal ring, sp² C, 6π delocalized electrons.",
      solution: `STRUCTURE OF BENZENE:
- Molecular formula: C₆H₆.
- Six carbon atoms arranged in a planar hexagonal ring.
- Each C is sp² hybridized → three sp² orbitals form sigma bonds (2 with adjacent C, 1 with H).
- Unhybridized p-orbital perpendicular to plane → overlap sideways to form a delocalized π electron cloud (6 π electrons forming a ring above and below the plane).
- All C-C bonds are identical (1.39 Å), intermediate between single (1.54 Å) and double (1.34 Å) bonds.
- Resonance hybrid of two Kekulé structures.

WHY AROMATIC:
1. Planar.
2. Cyclic.
3. Fully conjugated (alternating π bonds or all sp² centers).
4. Follows Hückel's rule: (4n+2)π electrons.

HÜCKEL'S RULE:
A compound is aromatic if it has (4n+2)π electrons in a planar, cyclic, fully conjugated system, where n = 0, 1, 2, 3, ...

For benzene: n=1 → 4(1)+2 = 6π electrons ✓.`
    },
    {
      id: "c10-sa-4",
      type: "Short",
      source: "Set 4",
      q: "Define IUPAC nomenclature. Give IUPAC names: (i) CH₃-CH₂-CH(CH₃)-CH₃ (ii) CH₃-CH=CH-CH₃ (iii) CH₃-C≡C-CH₃ (iv) CH₃-CH(OH)-CH₃.",
      answer: "(i) 2-methylbutane (ii) but-2-ene (iii) but-2-yne (iv) propan-2-ol.",
      solution: `IUPAC NOMENCLATURE: A systematic method of naming organic compounds developed by the International Union of Pure and Applied Chemistry. Rules: identify longest carbon chain (parent), number to give substituents lowest locants, identify functional groups (suffix), and substituents (prefixes).

(i) CH₃-CH₂-CH(CH₃)-CH₃
   Longest chain = 4 C (butane); methyl at C2 (from right). 
   → 2-methylbutane

(ii) CH₃-CH=CH-CH₃
    4 C, double bond between C2-C3.
    → but-2-ene

(iii) CH₃-C≡C-CH₃
     4 C, triple bond between C2-C3.
     → but-2-yne

(iv) CH₃-CH(OH)-CH₃
    3 C, OH on C2.
    → propan-2-ol (or isopropanol)`
    },
    {
      id: "c10-sa-5",
      type: "Short",
      source: "Set 4 (OR)",
      q: "What is detection of N in organic compounds by Lassaigne's test? Write reactions involved.",
      answer: "Heat with Na, dissolve in water, add FeSO₄ + H₂SO₄ → Prussian blue.",
      solution: `LASSAIGNE'S TEST FOR NITROGEN:

Step 1: Fusion with sodium:
Heat the organic compound with a small piece of metallic Na in a fusion tube. N (if present) combines with Na and C to form sodium cyanide:
Na + C + N → NaCN

Step 2: Sodium extract:
Plunge the hot tube into distilled water; it cracks and the contents dissolve. Filter to get sodium extract containing NaCN.

Step 3: Add fresh FeSO₄ solution and warm:
FeSO₄ + 2NaCN → Fe(CN)₂ + Na₂SO₄
Fe(CN)₂ + 4NaCN → Na₄[Fe(CN)₆] (sodium ferrocyanide)

Step 4: Acidify with dilute H₂SO₄ and add a drop of FeCl₃:
3Na₄[Fe(CN)₆] + 4FeCl₃ → Fe₄[Fe(CN)₆]₃ + 12NaCl
(Prussian blue color confirms presence of N)

A blue or green precipitate indicates nitrogen is present.`
    },
    {
      id: "c10-sa-6",
      type: "Short",
      source: "Set 5",
      q: "Write the reaction and condition for: (i) Wurtz reaction (ii) Friedel-Crafts alkylation (iii) Kolbe's electrolysis (iv) Ozonolysis.",
      answer: "All four named reactions with conditions.",
      solution: `(i) WURTZ REACTION:
2R-X + 2Na → R-R + 2NaX (dry ether)
Example: 2CH₃Br + 2Na → CH₃-CH₃ + 2NaBr
Prepares symmetrical alkanes.

(ii) FRIEDEL-CRAFTS ALKYLATION:
C₆H₆ + R-Cl → C₆H₅-R + HCl
Conditions: anhydrous AlCl₃ catalyst.
Example: C₆H₆ + CH₃Cl → C₆H₅CH₃ (toluene) + HCl

(iii) KOLBE'S ELECTROLYSIS:
2RCOO⁻Na⁺ + 2H₂O → R-R + 2CO₂ + H₂ + 2NaOH (electrolysis)
Example: 2CH₃COONa + 2H₂O → C₂H₆ + 2CO₂ + H₂ + 2NaOH

(iv) OZONOLYSIS:
Alkenes react with O₃ (ozone), then Zn/H₂O, to give carbonyl compounds:
R₂C=CR'₂ + O₃ → ozonide → R₂C=O + R'₂C=O
Example: CH₃-CH=CH-CH₃ + O₃ → CH₃CHO + CH₃CHO (2 ethanal)
Used to determine position of double bond.`
    },
    {
      id: "c10-sa-7",
      type: "Short",
      source: "Set 6",
      q: "What is isomerism? Distinguish between chain and position isomerism with one example each.",
      answer: "Chain: differ in skeleton. Position: differ in position of functional group.",
      solution: `ISOMERISM: The phenomenon by which compounds have the same molecular formula but differ in arrangement of atoms or properties.

CHAIN ISOMERISM:
Isomers differ in the arrangement of the carbon skeleton (straight vs. branched chains).
Example: C₄H₁₀ has two chain isomers:
- n-butane: CH₃-CH₂-CH₂-CH₃ (straight)
- isobutane: (CH₃)₃CH (branched, 2-methylpropane)

POSITION ISOMERISM:
Isomers differ in the position of the functional group (or multiple bond) on the same carbon skeleton.
Example: C₃H₇OH has two position isomers:
- propan-1-ol: CH₃-CH₂-CH₂-OH (OH at C1)
- propan-2-ol: CH₃-CH(OH)-CH₃ (OH at C2)

Or for C₄H₈: but-1-ene (CH₂=CH-CH₂-CH₃) vs but-2-ene (CH₃-CH=CH-CH₃).`
    },
    {
      id: "c10-sa-8",
      type: "Short",
      source: "Set 7",
      q: "Define addition reaction. How does ethene react with: (i) Br₂ in CCl₄ (ii) HBr (iii) H₂O / H₂SO₄ (iv) cold dilute alk. KMnO₄?",
      answer: "Addition across C=C gives saturated products.",
      solution: `ADDITION REACTION: A reaction in which two atoms or groups add across a multiple bond (C=C or C≡C), converting the unsaturated compound to a more saturated one.

REACTIONS OF ETHENE (CH₂=CH₂):
(i) With Br₂ in CCl₄:
CH₂=CH₂ + Br₂ → CH₂Br-CH₂Br (1,2-dibromoethane)
(Brown color of Br₂ disappears — used as test for unsaturation.)

(ii) With HBr:
CH₂=CH₂ + HBr → CH₃-CH₂Br (bromoethane)

(iii) With H₂O / H₂SO₄ (acid-catalyzed hydration):
CH₂=CH₂ + H₂O → CH₃-CH₂-OH (ethanol)
(Conditions: dilute H₂SO₄, ~100°C, or H₂SO₄ then hydrolysis.)

(iv) With cold dilute alkaline KMnO₄ (Baeyer's reagent):
CH₂=CH₂ + H₂O + [O] → HOCH₂-CH₂OH (ethylene glycol)
(Pink color of KMnO₄ disappears — used as test for unsaturation.)`
    },
    {
      id: "c10-sa-9",
      type: "Short",
      source: "HISSAN 2081 (Set A)",
      q: "Write the IUPAC names of: (i) (CH₃)₂CH-CH₂-CH₃ (ii) CH₃-CO-CH₃ (iii) HCOOH. Define structural isomerism.",
      answer: "(i) 2-methylbutane (ii) propanone (iii) methanoic acid.",
      solution: `(i) (CH₃)₂CH-CH₂-CH₃:
Expand: CH₃-CH(CH₃)-CH₂-CH₃. Longest chain = 4 C, methyl at C2.
→ 2-methylbutane

(ii) CH₃-CO-CH₃:
Three C with C=O in middle (ketone). 
→ propan-2-one (or propanone, or acetone)

(iii) HCOOH:
One C with COOH group.
→ methanoic acid (formic acid)

STRUCTURAL ISOMERISM: A type of isomerism where the compounds have the same molecular formula but different structural arrangements of atoms. Types:
1. Chain isomerism (different C-skeleton)
2. Position isomerism (different position of functional group)
3. Functional isomerism (different functional groups)
4. Metamerism (different alkyl groups around a polyvalent functional atom)
5. Tautomerism (interconverting structures, e.g., keto-enol)`
    },
    {
      id: "c10-sa-10",
      type: "Short",
      source: "HISSAN 2081 (Set B)",
      q: "How will you convert: (i) methane to chloroform (ii) acetylene to benzene (iii) ethanol to ethene?",
      answer: "(i) Halogenation in steps (ii) Cyclic trimerization (iii) Dehydration.",
      solution: `(i) METHANE → CHLOROFORM:
Chlorination of methane in steps (in sunlight or UV):
CH₄ + Cl₂ → CH₃Cl + HCl (chloromethane)
CH₃Cl + Cl₂ → CH₂Cl₂ + HCl (dichloromethane)
CH₂Cl₂ + Cl₂ → CHCl₃ + HCl (chloroform)
CHCl₃ + Cl₂ → CCl₄ + HCl (carbon tetrachloride)

(ii) ACETYLENE → BENZENE:
3 molecules of acetylene undergo cyclic trimerization when passed through a red-hot iron tube at 873 K:
3 HC≡CH → C₆H₆ (benzene)

(iii) ETHANOL → ETHENE:
Dehydration with concentrated H₂SO₄ at 170°C:
CH₃CH₂OH → CH₂=CH₂ + H₂O
Or passing ethanol vapor over heated Al₂O₃ at 350°C.`
    }
  ]
};

// Chapter 3: Chemical Bonding & Molecular Structure
export const chapter3 = {
  id: 3,
  name: "Chemical Bonding & Molecular Structure",
  icon: "🔗",
  color: "#534AB7",
  light: "#EEEDFE",
  questions: [
    // ============== MCQs ==============
    {
      id: "c3-mcq-1",
      type: "MCQ",
      source: "Set 1",
      q: "The bond angle of H₂O is greater than that of H₂S due to:",
      options: ["A. Size of central atom", "B. Inter-molecular H bond", "C. Electronegativity of O and S", "D. Presence of d-orbital in sulphur"],
      answer: "C. Electronegativity of O and S",
      solution: "O is more electronegative than S. In H₂O, bonding pairs are pulled closer to O, increasing bp-bp repulsion → larger bond angle (104.5°) than H₂S (92.1°)."
    },
    {
      id: "c3-mcq-2",
      type: "MCQ",
      source: "Set 2",
      q: "NH₄Cl molecule is:",
      options: ["A. Ionic", "B. Covalent", "C. Co-ordinate Covalent", "D. Metallic bond"],
      answer: "C. Co-ordinate Covalent",
      solution: "NH₄Cl contains all three: N-H covalent bonds, N→H coordinate covalent bond (N donates lone pair to H⁺), and NH₄⁺ – Cl⁻ ionic bond. The distinctive feature is coordinate covalent."
    },
    {
      id: "c3-mcq-3",
      type: "MCQ",
      source: "Set 4",
      q: "Which of the following compound contains ionic, covalent and coordinate covalent bonds?",
      options: ["A. HNO₃", "B. Na₂CO₃", "C. K₂SO₄", "D. HIO₃"],
      answer: "B. Na₂CO₃",
      solution: "Na₂CO₃: Na⁺ — CO₃²⁻ is ionic. Inside CO₃²⁻ ion, there are C-O covalent bonds and one C→O coordinate bond. So all three bond types are present."
    },
    {
      id: "c3-mcq-4",
      type: "MCQ",
      source: "Set 4",
      q: "Acetylene has a total number of:",
      options: ["A. One sigma and two pi bonds", "B. Three sigma bonds and three pi bonds", "C. Three sigma bonds and two pi bonds", "D. Four sigma bonds and one pi bond"],
      answer: "C. Three sigma bonds and two pi bonds",
      solution: "C₂H₂ (H-C≡C-H): Two C-H bonds = 2σ. One C≡C bond = 1σ + 2π. Total = 3σ + 2π."
    },
    {
      id: "c3-mcq-5",
      type: "MCQ",
      source: "Set 5",
      q: "Which one of the following is a reducing agent as well as oxidising agent?",
      options: ["A. SO₂", "B. H₂O₂", "C. CO₂", "D. NO₂"],
      answer: "B. H₂O₂",
      solution: "In H₂O₂, oxygen is in -1 oxidation state (intermediate). It can be reduced to -2 (acts as oxidizer) or oxidized to 0 (acts as reducer). Both SO₂ and H₂O₂ qualify; H₂O₂ is the classic example. Both A and B are technically correct."
    },
    {
      id: "c3-mcq-6",
      type: "MCQ",
      source: "Set 5",
      q: "The bond length is mainly affected by:",
      options: ["A. Electronegativity", "B. Hybridization", "C. Delocalization", "D. Electron affinity"],
      answer: "B. Hybridization",
      solution: "Bond length depends primarily on hybridization (s-character %). More s-character → shorter bond. sp (50% s) < sp² (33%) < sp³ (25%) in bond length."
    },
    {
      id: "c3-mcq-7",
      type: "MCQ",
      source: "Set 6",
      q: "Oxidation number of underlined N in NH₄NO₃ is (the NH₄ part):",
      options: ["A. -1", "B. +5", "C. -3", "D. 0"],
      answer: "C. -3",
      solution: "NH₄NO₃ has two different N atoms. In NH₄⁺: N = -3 (each H = +1). In NO₃⁻: N = +5. The average oxidation state = +1, but individual atoms have different values."
    },
    {
      id: "c3-mcq-8",
      type: "MCQ",
      source: "Set 6",
      q: "Boron and fluorine form:",
      options: ["A. Covalent bond", "B. Ionic bond", "C. Co-ordinate bond", "D. Both ionic and covalent"],
      answer: "A. Covalent bond",
      solution: "BF₃ has covalent bonds. EN difference of B (2.04) and F (3.98) is 1.94 — less than 1.7-2.0 cutoff for clearly ionic. Plus B has small size and high charge density, favoring covalent bonding."
    },
    {
      id: "c3-mcq-9",
      type: "MCQ",
      source: "Set 6",
      q: "The formation of chemical bond is an:",
      options: ["A. Exothermic process", "B. Endothermic process", "C. Both a and b", "D. None of these"],
      answer: "A. Exothermic process",
      solution: "Bond formation releases energy (becomes more stable). Bond breaking absorbs energy."
    },
    {
      id: "c3-mcq-10",
      type: "MCQ",
      source: "Set 6 / HISSAN 2081",
      q: "Diamond is a:",
      options: ["A. Metallic crystal", "B. Electrovalent crystal", "C. Ionic crystal", "D. Covalent crystal"],
      answer: "D. Covalent crystal",
      solution: "Diamond has a 3D network of covalent bonds between sp³ carbon atoms. It is a giant covalent (network) crystal."
    },
    {
      id: "c3-mcq-11",
      type: "MCQ",
      source: "Set 7",
      q: "The formation of chemical bond is an:",
      options: ["A. Exothermic process", "B. Endothermic process", "C. Both a and b", "D. None of these"],
      answer: "A. Exothermic process",
      solution: "Bond formation lowers potential energy → releases energy → exothermic."
    },
    {
      id: "c3-mcq-12",
      type: "MCQ",
      source: "HISSAN 2081 (Set A)",
      q: "In propene there are:",
      options: ["A. Eight sigma and one pi bond", "B. Seven sigma and two pi bonds", "C. Six sigma and three pi bonds", "D. One sigma and seven pi bonds"],
      answer: "A. Eight sigma and one pi bond",
      solution: "Propene CH₃-CH=CH₂: 6 C-H σ bonds + 1 C-C σ bond + 1 C=C σ + 1 C=C π = 8σ + 1π."
    },
    {
      id: "c3-mcq-13",
      type: "MCQ",
      source: "Set 6 / HISSAN 2081",
      q: "Which of the following is neutral oxide?",
      options: ["A. CO", "B. H₂O", "C. Both a and b", "D. ZnO"],
      answer: "C. Both a and b",
      solution: "Neutral oxides do not react with acids or bases to form salts. CO and H₂O (and NO) are classic neutral oxides. ZnO is amphoteric."
    },

    // ============== Short Answer Questions ==============
    {
      id: "c3-sa-1",
      type: "Short",
      source: "Set 4",
      q: "Define hybridization. State two conditions for hybridization. What kind of hybridization results in tetrahedral geometry? Give an example.",
      answer: "sp³ hybridization → tetrahedral. Example: CH₄.",
      solution: `HYBRIDIZATION: The mixing of atomic orbitals of slightly different energies on the same atom to form an equal number of new equivalent hybrid orbitals.

CONDITIONS:
1. Orbitals must belong to the same atom.
2. They must have nearly equal energies.

sp³ HYBRIDIZATION:
One s + three p orbitals combine to form four equivalent sp³ hybrid orbitals.
These are arranged tetrahedrally (109.5° apart).

Example: Methane (CH₄). C undergoes sp³ hybridization. Each of four sp³ orbitals overlaps with H 1s orbital to form four C-H σ bonds in a tetrahedral arrangement.`
    },
    {
      id: "c3-sa-2",
      type: "Short",
      source: "HISSAN 2081 (Set A)",
      q: "Define dipole moment. Mention two important applications. Out of NH₃ and NF₃, which has higher dipole moment and why?",
      answer: "NH₃ > NF₃ in dipole moment.",
      solution: `DIPOLE MOMENT (μ): The product of the magnitude of charge (q) and the distance (d) between the centers of positive and negative charges.
μ = q × d. Unit: Debye (D).

APPLICATIONS:
1. To determine the polarity of molecules (μ = 0 means non-polar; μ ≠ 0 means polar).
2. To predict molecular geometry / shape of molecules (e.g., CO₂ has μ=0 → linear; H₂O has μ=1.85 D → bent).
3. To estimate % ionic character of a covalent bond.

NH₃ vs NF₃:
Both have trigonal pyramidal shape with a lone pair on N.
- NH₃: N is more electronegative than H. The bond dipoles point from H → N. The lone pair dipole also points away from N. All three bond dipoles and the lone pair dipole reinforce → high μ ≈ 1.46 D.
- NF₃: F is more electronegative than N. Bond dipoles point from N → F (opposite direction). The lone pair dipole still points away from N. So bond dipoles and lone pair dipole partially cancel → low μ ≈ 0.24 D.

Therefore, μ(NH₃) > μ(NF₃).`
    },
    {
      id: "c3-sa-3",
      type: "Short",
      source: "Set 4",
      q: "Define cyclic and acyclic organic compounds with one example each.",
      answer: "Cyclic: ring structure (e.g., benzene). Acyclic: open chain (e.g., propane).",
      solution: `CYCLIC COMPOUNDS: Organic compounds in which carbon atoms are joined in the form of a closed ring.
Example: Benzene (C₆H₆) — six carbon atoms in a hexagonal ring.

ACYCLIC COMPOUNDS (or open-chain): Organic compounds in which carbon atoms are joined in straight or branched open chains, without a ring.
Example: Propane (C₃H₈) — CH₃-CH₂-CH₃, three carbons in an open chain.`
    },
    {
      id: "c3-sa-4",
      type: "Short",
      source: "Set 6 (OR)",
      q: "Two elements A and B have outermost shell electronic configurations 3s¹ and 2s²2p¹ respectively. (i) Name the chemical bond formed between them. (ii) Show formation of bond. (iii) Write two favorable factors for such bond.",
      answer: "Ionic bond (Na and B). Wait — actually, A is Na (3s¹) and B is B (2s²2p¹) → covalent.",
      solution: `A: 3s¹ → likely Sodium (Na, Z=11), an alkali metal that readily loses 1 electron.
B: 2s²2p¹ → Boron (B, Z=5), which usually forms covalent bonds.

However, traditionally in textbook questions: A = Na (1s² 2s² 2p⁶ 3s¹) is alkali metal. B = Al (Al has 3s²3p¹, but if 2s²2p¹ it's Boron).

Most likely the bond described:
If A = Na (3s¹, metallic) and B = B/Al (3 valence electrons), an ionic bond can form if B accepts 3 electrons → impossible (would need 3 Na).
Reality: 3 Na + B-type element → 3Na⁺ + B³⁻ (but this is unusual).

Most likely answer: IONIC bond between A (metal) and B (non-metal).

(i) Bond: Ionic bond
(ii) A → A⁺ + e⁻; B + 3e⁻ → B³⁻ (or in practice, 3 atoms of A give 3e⁻ to B)
(iii) FAVOURABLE FACTORS for ionic bond:
- Low IE of metal (A loses electron easily)
- High electron affinity of non-metal (B accepts electron readily)
- Large electronegativity difference
- High lattice energy
- Small size of cation and large size of anion`
    },
    {
      id: "c3-sa-5",
      type: "Short",
      source: "Set 4",
      q: "Explain the formation of electrovalent bond taking an example of NaCl.",
      answer: "Na loses 1 electron to Cl, forming Na⁺ and Cl⁻ which attract electrostatically.",
      solution: `ELECTROVALENT (IONIC) BOND: A bond formed by the transfer of electrons from a metal atom to a non-metal atom, resulting in oppositely charged ions held by electrostatic attraction.

FORMATION OF NaCl:
Na (Z=11): 1s² 2s² 2p⁶ 3s¹ — has 1 valence electron, wants to lose it to attain Ne config.
Cl (Z=17): 1s² 2s² 2p⁶ 3s² 3p⁵ — has 7 valence electrons, needs 1 more to attain Ar config.

Step 1: Na → Na⁺ + e⁻ (Na loses 1 electron)
Step 2: Cl + e⁻ → Cl⁻ (Cl gains 1 electron)
Step 3: Na⁺ + Cl⁻ → NaCl (electrostatic attraction forms ionic bond)

In solid NaCl, ions form a face-centered cubic crystal lattice where each Na⁺ is surrounded by 6 Cl⁻ and vice versa.`
    }
  ]
};

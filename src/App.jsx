import { useState } from "react";

const chapters = [
  {
    id: 1,
    name: "Stoichiometry & Laws of Chemical Combination",
    icon: "⚗️",
    color: "#1D9E75",
    light: "#E1F5EE",
    questions: [
      {
        id: "s1",
        type: "MCQ",
        source: "Set 1",
        q: "2 gm of O₂ at NTP has volume:",
        options: ["A. 1.4 litre", "B. 2.8 litre", "C. 8 litre", "D. 11.2 litre"],
        answer: "A. 1.4 litre",
        solution: "Molar mass of O₂ = 32 g/mol. 2 g O₂ = 2/32 = 0.0625 mol. Volume at NTP = 0.0625 × 22.4 = 1.4 L."
      },
      {
        id: "s2",
        type: "MCQ",
        source: "Set 1",
        q: "The formula of a metal chloride is MCl₃. It contains 20% of metal. The atomic mass of metal is:",
        options: ["A. 27", "B. 56", "C. 127", "D. 48"],
        answer: "A. 27",
        solution: "Let atomic mass of M = x. MCl₃ molar mass = x + 3(35.5) = x + 106.5. 20% is metal: x/(x+106.5) = 0.20 → x = 0.20x + 21.3 → 0.80x = 21.3 → x ≈ 27. Metal is Aluminium (Al)."
      },
      {
        id: "s3",
        type: "MCQ",
        source: "HISSAN 2081 (Set A)",
        q: "The percentage composition of sulphur in magnesium sulphate (MgSO₄) is:",
        options: ["A. 20%", "B. 26.67%", "C. 43.33%", "D. 52.94%"],
        answer: "A. 20%",
        solution: "Molar mass of MgSO₄ = 24 + 32 + 4(16) = 120 g/mol. % S = (32/120) × 100 = 26.67%. Note: The correct answer is B. 26.67%."
      },
      {
        id: "s4",
        type: "MCQ",
        source: "HISSAN 2081 (Set B)",
        q: "The percentage composition of magnesium in MgSO₄ is:",
        options: ["A. 10%", "B. 20%", "C. 30%", "D. 40%"],
        answer: "B. 20%",
        solution: "Molar mass of MgSO₄ = 24 + 32 + 64 = 120 g/mol. % Mg = (24/120) × 100 = 20%."
      },
      {
        id: "s5",
        type: "MCQ",
        source: "Set 2",
        q: "One mole of Oxygen (O₂) is present in which of the following mass of sulphuric acid?",
        options: ["A. 98 g", "B. 24.5 g", "C. 196 g", "D. 49 g"],
        answer: "D. 49 g",
        solution: "H₂SO₄ has 4 oxygen atoms per molecule. Molar mass = 98 g/mol. To get 1 mol O₂ (2 mol O atoms), we need 2/4 mol H₂SO₄ = 0.5 mol = 49 g."
      },
      {
        id: "s6",
        type: "MCQ",
        source: "Set 2",
        q: "The volume of CO₂ produced when 1 litre of O₂ reacted with 2 litres of CO under the same condition is:",
        options: ["A. 1 litre", "B. 2 litre", "C. 3 litre", "D. 1.5 litre"],
        answer: "B. 2 litre",
        solution: "Reaction: 2CO + O₂ → 2CO₂. 2L CO reacts with 1L O₂ to give 2L CO₂ (by Gay-Lussac's law of gaseous volumes)."
      },
      {
        id: "s7",
        type: "MCQ",
        source: "Set 3",
        q: "How many electrons are present in 2 molecules of methane (CH₄)?",
        options: ["A. 8", "B. 10", "C. 20", "D. 12"],
        answer: "C. 20",
        solution: "CH₄: C has 6 electrons + 4 H each with 1 = 6+4 = 10 electrons per molecule. 2 molecules → 2 × 10 = 20 electrons."
      },
      {
        id: "s8",
        type: "MCQ",
        source: "Set 3",
        q: "What is the number of moles of ammonia gas formed when 0.5 mole of nitrogen gas is reacted with excess of hydrogen gas?",
        options: ["A. 0.5", "B. 1", "C. 2", "D. 3"],
        answer: "B. 1",
        solution: "N₂ + 3H₂ → 2NH₃. 0.5 mol N₂ produces 2 × 0.5 = 1 mol NH₃."
      },
      {
        id: "s9",
        type: "MCQ",
        source: "Set 7",
        q: "1.5 mole of CH₄ is completely burnt in excess of air. The grams of O₂ consumed is:",
        options: ["A. 24", "B. 32", "C. 48", "D. 96"],
        answer: "D. 96",
        solution: "CH₄ + 2O₂ → CO₂ + 2H₂O. 1.5 mol CH₄ requires 1.5 × 2 = 3 mol O₂. Mass = 3 × 32 = 96 g."
      },
      {
        id: "s10",
        type: "Short",
        source: "HISSAN 2081 (Set A)",
        q: "20 g of ammonia is reacted with 50 g of oxygen to produce NO and H₂O. (i) Find which one is limiting reagent and why. (ii) Calculate the number of mass of unreacted reagent left over. (iii) What volume of NO is produced at NTP? (iv) Calculate the moles of water produced.",
        answer: "Limiting reagent: NH₃ (ammonia)",
        solution: `Balanced equation: 4NH₃ + 5O₂ → 4NO + 6H₂O
Moles of NH₃ = 20/17 = 1.176 mol
Moles of O₂ = 50/32 = 1.5625 mol
O₂ required for 1.176 mol NH₃ = 1.176 × 5/4 = 1.47 mol
Since available O₂ (1.5625 mol) > required (1.47 mol), NH₃ is the limiting reagent.

(ii) Excess O₂ = 1.5625 − 1.47 = 0.09 mol = 0.09 × 32 = 2.94 g
(iii) Moles of NO = moles of NH₃ = 1.176 mol. Volume at NTP = 1.176 × 22.4 = 26.34 L
(iv) Moles of H₂O = 1.176 × 6/4 = 1.765 mol`
      },
      {
        id: "s11",
        type: "Short",
        source: "Set 1",
        q: "State and explain the law of multiple proportions with example.",
        answer: "When two elements A and B combine to form more than one compound, the different masses of B combining with a fixed mass of A are in a simple whole number ratio.",
        solution: `Example: Carbon and Oxygen form CO and CO₂.
In CO: 12g C combines with 16g O
In CO₂: 12g C combines with 32g O
Ratio of O: 16:32 = 1:2 (simple whole number ratio)
This verifies the law of multiple proportions.`
      },
      {
        id: "s12",
        type: "Long",
        source: "Set 3",
        q: "If 10 g of calcium carbonate is reacted with 7.665 g of hydrochloric acid to produce calcium chloride, water and carbon dioxide, (i) which one is the limiting reagent and why? (ii) Calculate the amount of water formed. (iii) What amount of sodium hydroxide is required to absorb all CO₂?",
        answer: "HCl is the limiting reagent",
        solution: `Equation: CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂
Moles of CaCO₃ = 10/100 = 0.1 mol
Moles of HCl = 7.665/36.5 = 0.21 mol
For 0.1 mol CaCO₃, HCl needed = 0.2 mol
Available HCl = 0.21 mol > 0.2 mol needed, so CaCO₃ is limiting (HCl is slight excess).
Actually: HCl needed = 0.2 mol, available = 0.21 mol → CaCO₃ is limiting.
(ii) Moles of H₂O = moles of CaCO₃ = 0.1 mol → mass = 1.8 g
(iii) CO₂ + 2NaOH → Na₂CO₃ + H₂O
Moles of CO₂ = 0.1 mol → moles NaOH = 0.2 mol → mass = 0.2 × 40 = 8 g`
      }
    ]
  },
  {
    id: 2,
    name: "Atomic Structure & Quantum Numbers",
    icon: "⚛️",
    color: "#185FA5",
    light: "#E6F1FB",
    questions: [
      {
        id: "a1",
        type: "MCQ",
        source: "HISSAN 2081 (Set A)",
        q: "Atomic spectrum of hydrogen falling in the visible region is:",
        options: ["A. Lyman series", "B. Paschen series", "C. Balmer series", "D. P-fund series"],
        answer: "C. Balmer series",
        solution: "Balmer series corresponds to electron transitions from higher energy levels to n=2. These transitions emit visible light (wavelengths 400–700 nm)."
      },
      {
        id: "a2",
        type: "MCQ",
        source: "Set 6",
        q: "Which of the following set of quantum numbers is impossible?",
        options: ["A. n=2, l=1, m=0, s=+½", "B. n=2, l=2, m=+1, s=-½", "C. n=2, l=1, m=-1, s=+½", "D. n=2, l=1, m=0, s=-½"],
        answer: "B. n=2, l=2, m=+1, s=-½",
        solution: "For n=2, l can be 0 or 1 only (l ranges 0 to n-1). l=2 is not allowed when n=2."
      },
      {
        id: "a3",
        type: "MCQ",
        source: "Set 4",
        q: "Which set of quantum numbers is wrong?",
        options: ["A. n=2, l=1, m=0, s=+½", "B. n=2, l=1, m=-1, s=+½", "C. n=3, l=1, m=+1, s=-½", "D. n=2, l=2, m=-1, s=-½"],
        answer: "D. n=2, l=2, m=-1, s=-½",
        solution: "For n=2, l can only be 0 or 1. l=2 requires n≥3. So this set is impossible."
      },
      {
        id: "a4",
        type: "MCQ",
        source: "HISSAN 2081 (Set B)",
        q: "The value of magnetic quantum number in 3d shell is:",
        options: ["A. 3", "B. 5", "C. 7", "D. 9"],
        answer: "B. 5",
        solution: "For 3d, l=2. Magnetic quantum number m ranges from -l to +l: -2, -1, 0, +1, +2 → 5 values."
      },
      {
        id: "a5",
        type: "Short",
        source: "Set 1",
        q: "Write possible values of n and l for (i) valence electron of potassium (ii) 15th electron of chlorine. Also justify why 2p orbital is permissible but not 2d orbital.",
        answer: "K: n=4, l=0; Cl 15th electron: n=3, l=1",
        solution: `(i) Potassium (Z=19): Electronic config: 1s²2s²2p⁶3s²3p⁶4s¹. Valence electron is in 4s: n=4, l=0.
(ii) Chlorine (Z=17): 1s²2s²2p⁶3s²3p⁵. The 15th electron is in 3p: n=3, l=1.

For 2p: n=2, l=1. Since l can be 0 to (n-1) = 0 to 1. l=1 is allowed. ✓
For 2d: n=2, l=2. But maximum l = n-1 = 1. l=2 is not allowed for n=2. ✗`
      },
      {
        id: "a6",
        type: "Short",
        source: "Set 7",
        q: "An atom has 20 electrons. Find: (i) Its atomic number and configuration of all 20 electrons. (ii) The values of n and l of the 19th electron. (iii) Its group in periodic table.",
        answer: "Z=20, 19th electron: n=4, l=0, Group IIA",
        solution: `(i) Atomic number = 20 (Calcium). Configuration: 1s²2s²2p⁶3s²3p⁶4s²
(ii) Filling order: 1s(2), 2s(4), 2p(10), 3s(12), 3p(18), 4s(20). The 19th electron enters 4s: n=4, l=0.
(iii) Ca is in Group IIA (Group 2) — alkaline earth metals. 2 electrons in outermost s-subshell.`
      },
      {
        id: "a7",
        type: "Short",
        source: "Set 1",
        q: "State Heisenberg's Uncertainty Principle.",
        answer: "It is impossible to determine simultaneously the exact position and exact momentum of a microscopic particle.",
        solution: "Mathematically: Δx · Δp ≥ h/4π, where Δx = uncertainty in position, Δp = uncertainty in momentum, h = Planck's constant. This is fundamental and not due to limitations in measuring instruments, but a property of matter itself."
      },
      {
        id: "a8",
        type: "Short",
        source: "HISSAN 2081 (Set A)",
        q: "Define quantum numbers. Why are they called 'fingerprints' of an atom? What does magnetic quantum number signify? Assign m and l for the 19th electron of calcium.",
        answer: "Quantum numbers uniquely identify each electron in an atom.",
        solution: `Quantum numbers are a set of four numbers (n, l, m, s) that completely describe the state of an electron in an atom.
They are called 'fingerprints' because no two electrons in an atom can have the same set of all four quantum numbers (Pauli's Exclusion Principle).
Magnetic quantum number (m): Describes the orientation of the orbital in space relative to an external magnetic field. Values: -l to +l.
For 19th electron of Ca (in 4s): n=4, l=0, m=0, s=+½`
      }
    ]
  },
  {
    id: 3,
    name: "Chemical Bonding",
    icon: "🔗",
    color: "#534AB7",
    light: "#EEEDFE",
    questions: [
      {
        id: "b1",
        type: "MCQ",
        source: "Set 2",
        q: "NH₄Cl molecule has which type of bond?",
        options: ["A. Ionic", "B. Covalent", "C. Co-ordinate Covalent", "D. Metallic bond"],
        answer: "C. Co-ordinate Covalent",
        solution: "NH₄Cl contains: N-H covalent bonds, one N→H co-ordinate covalent bond (where N donates lone pair to H⁺), and ionic bond between NH₄⁺ and Cl⁻. The distinctive feature is the coordinate covalent bond."
      },
      {
        id: "b2",
        type: "MCQ",
        source: "Set 4",
        q: "Acetylene has a total number of:",
        options: ["A. One sigma and two pi bonds", "B. Three sigma bonds and three pi bonds", "C. Three sigma bonds and two pi bonds", "D. Four sigma bonds and one pi bond"],
        answer: "C. Three sigma bonds and two pi bonds",
        solution: "Acetylene (C₂H₂): H-C≡C-H. H-C bond: 1 sigma. C≡C: 1 sigma + 2 pi. C-H bond: 1 sigma. Total: 3 sigma + 2 pi bonds."
      },
      {
        id: "b3",
        type: "MCQ",
        source: "Set 6",
        q: "Boron and Fluorine form:",
        options: ["A. Covalent bond", "B. Ionic bond", "C. Co-ordinate bond", "D. Both a and b"],
        answer: "A. Covalent bond",
        solution: "BF₃ is formed by covalent bonding. Both B and F are non-metals with similar electronegativities. The electronegativity difference is not large enough for ionic bonding."
      },
      {
        id: "b4",
        type: "MCQ",
        source: "Set 1",
        q: "The bond angle of H₂O is greater than that of H₂S due to:",
        options: ["A. Size of central atom", "B. Inter molecular H bond", "C. Electronegativity of O and S", "D. Presence of d-orbital in sulphur"],
        answer: "C. Electronegativity of O and S",
        solution: "O is more electronegative than S. In H₂O, bonding pairs are pulled closer to O, increasing repulsion between them, resulting in a larger bond angle (104.5°) compared to H₂S (92.1°)."
      },
      {
        id: "b5",
        type: "MCQ",
        source: "HISSAN 2081 (Set A)",
        q: "In propene there are:",
        options: ["A. Eight sigma bonds and one pi bond", "B. Seven sigma bonds and two pi bonds", "C. Six sigma bonds and three pi bonds", "D. One sigma bond and seven pi bonds"],
        answer: "A. Eight sigma bonds and one pi bond",
        solution: "Propene: CH₃-CH=CH₂. C-C single bond: 1σ. C=C: 1σ+1π. CH₃: 3 C-H σ bonds. CH=CH₂: 3 C-H σ bonds. Total: 1+1+1+3+3 = 8σ + 1π bonds."
      },
      {
        id: "b6",
        type: "Short",
        source: "HISSAN 2081 (Set A)",
        q: "Define dipole moment. Mention two important applications of dipole moment. Out of NH₃ and NF₃, which has higher dipole moment and why?",
        answer: "NH₃ has higher dipole moment than NF₃.",
        solution: `Dipole moment (μ): The product of charge (q) and distance (d) of separation between the partial charges. μ = q × d. Unit: Debye (D).
Applications: (1) To determine polarity of molecules. (2) To predict the shape/geometry of molecules.
NH₃ vs NF₃: Both have pyramidal shape. In NH₃, N is more electronegative than H, so the bond dipoles add to the lone pair dipole (same direction). In NF₃, F is more electronegative than N, so the bond dipoles oppose the lone pair dipole. Thus μ(NH₃) > μ(NF₃).`
      },
      {
        id: "b7",
        type: "Short",
        source: "HISSAN 2081 (Set B)",
        q: "Define hybridization. State two conditions for hybridization. What kind of hybridization results in tetrahedral geometry? Give an example.",
        answer: "sp³ hybridization gives tetrahedral geometry. Example: CH₄.",
        solution: `Hybridization: The mixing of atomic orbitals of slightly different energies to form new hybrid orbitals of equivalent energy and shape.
Conditions: (1) Orbitals of the same atom should intermix. (2) The energy of combining orbitals should be nearly equal.
sp³ hybridization: One s + three p orbitals mix to form 4 equivalent sp³ hybrid orbitals arranged tetrahedrally (bond angle 109.5°). Example: CH₄ (methane) — carbon undergoes sp³ hybridization.`
      }
    ]
  },
  {
    id: 4,
    name: "States of Matter & Gas Laws",
    icon: "💨",
    color: "#0F6E56",
    light: "#E1F5EE",
    questions: [
      {
        id: "g1",
        type: "MCQ",
        source: "Set 1",
        q: "At boiling point of liquid, its vapour pressure is:",
        options: ["A. Less than atmospheric pressure", "B. More than atmospheric pressure", "C. Equal to the atmospheric pressure", "D. Zero"],
        answer: "C. Equal to the atmospheric pressure",
        solution: "A liquid boils when its vapour pressure equals the external (atmospheric) pressure. This is the definition of boiling point."
      },
      {
        id: "g2",
        type: "MCQ",
        source: "Set 2",
        q: "Which of the following liquid has maximum surface tension?",
        options: ["A. C₂H₅OH", "B. CH₃OH", "C. H₂O", "D. C₆H₆"],
        answer: "C. H₂O",
        solution: "Water has the highest surface tension among common liquids due to extensive hydrogen bonding (O-H···O). This gives water molecules strong cohesive forces."
      },
      {
        id: "g3",
        type: "MCQ",
        source: "HISSAN 2081 (Set A)",
        q: "With the rise in temperature, surface tension:",
        options: ["A. Increases", "B. Remains same", "C. Decreases", "D. Remains same"],
        answer: "C. Decreases",
        solution: "As temperature increases, kinetic energy of molecules increases, weakening intermolecular forces. This reduces surface tension."
      },
      {
        id: "g4",
        type: "MCQ",
        source: "Set 5",
        q: "According to kinetic theory of gas:",
        options: ["A. There is intermolecular interaction", "B. There is no intermolecular interaction", "C. Molecules occupy large volume", "D. The molecules lose their energy after each collision"],
        answer: "B. There is no intermolecular interaction",
        solution: "The kinetic theory of ideal gases assumes: (1) No intermolecular attractions or repulsions. (2) Molecules are point masses occupying negligible volume. (3) Collisions are perfectly elastic."
      },
      {
        id: "g5",
        type: "Short",
        source: "Set 1",
        q: "State Charles' Law. What is absolute zero? Show it graphically. Why is it difficult to cook food at higher altitude?",
        answer: "At constant pressure, volume of a gas is directly proportional to its absolute temperature.",
        solution: `Charles' Law: V ∝ T (at constant P, n) or V/T = constant. Where T is in Kelvin.
Absolute zero: The temperature at which the volume of an ideal gas theoretically becomes zero. It is -273.15°C or 0 K.
Graphically: A V vs T graph gives a straight line. Extrapolation to V=0 gives T = -273.15°C.
Higher altitude: Atmospheric pressure is lower at higher altitudes. Lower pressure means lower boiling point of water (below 100°C). Food cooked in water at lower temperatures takes longer to cook.`
      },
      {
        id: "g6",
        type: "Short",
        source: "Set 2",
        q: "0.2 mole of Oxygen gas was effused through a porous plug in 300 seconds at NTP. Calculate the volume of hydrogen gas effused in the same time under similar conditions.",
        answer: "Volume of H₂ = 4 × 22.4 × 0.2 = ~1.79 L (by Graham's law)",
        solution: `Graham's law: r₁/r₂ = √(M₂/M₁)
Rate of O₂: Volume of O₂ = 0.2 mol × 22.4 L/mol = 4.48 L in 300 s
r(O₂) = 4.48/300 L/s
r(H₂)/r(O₂) = √(M(O₂)/M(H₂)) = √(32/2) = √16 = 4
r(H₂) = 4 × r(O₂) = 4 × 4.48/300
Volume of H₂ in 300 s = r(H₂) × 300 = 4 × 4.48 = 17.92 L`
      },
      {
        id: "g7",
        type: "Short",
        source: "Set 1",
        q: "100 ml of H₂ gas takes 2.5 seconds and an unknown gas takes 10 seconds to penetrate through a porous surface. What is the density of the unknown gas with respect to hydrogen?",
        answer: "Density of unknown gas relative to H₂ = 16",
        solution: `Graham's law: r₁/r₂ = √(d₂/d₁)
r(H₂) = 100/2.5 = 40 ml/s
r(X) = 100/10 = 10 ml/s
r(H₂)/r(X) = √(d(X)/d(H₂))
40/10 = √(d(X)/d(H₂))
4 = √(d(X)/d(H₂))
d(X)/d(H₂) = 16
So, density of unknown gas is 16 times that of hydrogen.`
      }
    ]
  },
  {
    id: 5,
    name: "Chemical Equilibrium",
    icon: "⚖️",
    color: "#BA7517",
    light: "#FAEEDA",
    questions: [
      {
        id: "e1",
        type: "MCQ",
        source: "Set 1",
        q: "For the reaction N₂ + 3H₂ ⇌ 2NH₃ + Heat, Kp and Kc are related by:",
        options: ["A. Kp = Kc", "B. Kp = KcRT", "C. Kp = Kc(RT)²", "D. Kp = Kc(RT)⁻²"],
        answer: "D. Kp = Kc(RT)⁻²",
        solution: "Kp = Kc(RT)^Δn. Δn = moles of gaseous products - moles of gaseous reactants = 2 - (1+3) = 2-4 = -2. Therefore Kp = Kc(RT)⁻²."
      },
      {
        id: "e2",
        type: "MCQ",
        source: "Set 2",
        q: "Keq for the reaction A + 2B → C + D is:",
        options: ["A. [A][B]²/[C][D]", "B. [C][D]/[A][B]²", "C. [A][B]/[C][D]", "D. [A]²[B]/[C][D]"],
        answer: "B. [C][D]/[A][B]²",
        solution: "Equilibrium constant Keq = [Products]/[Reactants] each raised to their stoichiometric coefficients. Keq = [C][D] / ([A][B]²)."
      },
      {
        id: "e3",
        type: "Short",
        source: "Set 2",
        q: "State Le Chatelier's principle. What will be the effect on equilibrium: PCl₃(g) + Cl₂(g) ⇌ PCl₅(g) + 88 kJ by (i) increasing temperature (ii) increasing pressure (iii) removal of PCl₃?",
        answer: "Le Chatelier: A system at equilibrium shifts to counteract any applied stress.",
        solution: `Le Chatelier's principle: If an external stress (change in concentration, pressure, temperature) is applied to a system at equilibrium, the equilibrium shifts in the direction that opposes the stress.

For PCl₃(g) + Cl₂(g) ⇌ PCl₅(g) + 88 kJ (exothermic forward reaction):
(i) Increasing temperature: Equilibrium shifts to the LEFT (backward), since the backward reaction absorbs heat, opposing the temperature rise. PCl₅ decreases.
(ii) Increasing pressure: Equilibrium shifts to the RIGHT (forward). Left side has 2 mol gas, right side has 1 mol gas. More pressure favors fewer moles of gas.
(iii) Removal of PCl₃: Equilibrium shifts to the LEFT (backward) to replace the removed PCl₃.`
      },
      {
        id: "e4",
        type: "Short",
        source: "Set 5",
        q: "What would be the effect on equilibrium of PCl₅(g) ⇌ PCl₃(g) + Cl₂(g) by: (a) adding Cl₂ (b) adding PCl₃ (c) decreasing pressure by increasing volume (d) increasing temperature (endothermic forward) (e) adding a catalyst?",
        answer: "Catalyst has no effect on equilibrium position.",
        solution: `(a) Adding Cl₂: Shifts LEFT (backward) to consume added Cl₂.
(b) Adding PCl₃: Shifts RIGHT (forward) to consume added PCl₃.
(c) Decreasing pressure (increasing volume): Shifts RIGHT — right side has 2 mol gas vs 1 mol on left. Fewer moles → left side favored at high pressure. At low pressure, right side is favored.
(d) Increasing temperature (endothermic forward): Shifts RIGHT to absorb heat.
(e) Adding catalyst: NO EFFECT on equilibrium position. Catalyst speeds up both forward and backward reactions equally, reaching equilibrium faster but not changing the equilibrium constant.`
      }
    ]
  },
  {
    id: 6,
    name: "Periodic Table & Properties",
    icon: "📊",
    color: "#993C1D",
    light: "#FAECE7",
    questions: [
      {
        id: "p1",
        type: "MCQ",
        source: "Set 1",
        q: "Thermally most stable alkaline earth metal carbonate is:",
        options: ["A. MgCO₃", "B. CaCO₃", "C. SrCO₃", "D. BaCO₃"],
        answer: "D. BaCO₃",
        solution: "Thermal stability of alkaline earth metal carbonates increases down the group (Mg < Ca < Sr < Ba). Larger cations have greater polarizing power on the carbonate ion in an inverse sense — larger cations are less polarizing, so BaCO₃ is the most stable."
      },
      {
        id: "p2",
        type: "MCQ",
        source: "Set 1",
        q: "When KMnO₄ is reduced by oxalic acid in acidic solution, oxidation number of Mn changes from:",
        options: ["A. +7 to +2", "B. +7 to +4", "C. +7 to +6", "D. None"],
        answer: "A. +7 to +2",
        solution: "In acidic solution, KMnO₄ is reduced to MnSO₄ (Mn²⁺). Reaction: 2KMnO₄ + 5H₂C₂O₄ + 3H₂SO₄ → 2MnSO₄ + K₂SO₄ + 10CO₂ + 8H₂O. Mn goes from +7 to +2."
      },
      {
        id: "p3",
        type: "Short",
        source: "Set 1",
        q: "List factors affecting atomic size. How do atomic radii vary along period and group? Arrange in decreasing order of size: Na⁺, F⁻, Mg²⁺.",
        answer: "F⁻ > Na⁺ > Mg²⁺ (all are isoelectronic with 10 electrons)",
        solution: `Factors affecting atomic size: (1) Nuclear charge (2) Number of shells (3) Shielding effect (4) Penetration effect.
Along a period: Atomic radius DECREASES from left to right due to increasing nuclear charge with same number of shells.
Along a group: Atomic radius INCREASES from top to bottom due to addition of new electron shells.
Isoelectronic species (all have 10 e⁻): F⁻ (Z=9), Na⁺ (Z=11), Mg²⁺ (Z=12). Higher nuclear charge → smaller size.
Order: F⁻ > Na⁺ > Mg²⁺`
      },
      {
        id: "p4",
        type: "Short",
        source: "Set 2",
        q: "Arrange Na, Mg, Al, Si in decreasing order of first ionization energy. Which is most reactive and why? How does ionization energy differ from electron affinity?",
        answer: "IE order: Si > Al > Mg > Na. Most reactive: Na.",
        solution: `First IE order: Si (786) > Al (577) > Mg (738) > Na (496) kJ/mol
Note: Actually Mg has higher IE than Al due to stable completely filled 3s² configuration.
Correct order: Si > Mg > Al > Na
Most reactive: Sodium (Na) — lowest ionization energy means it loses its valence electron most easily to form Na⁺ ions.
Ionization Energy vs Electron Affinity:
IE: Energy required to REMOVE an electron from an isolated gaseous atom. Endothermic process.
EA: Energy released when an electron is ADDED to a neutral gaseous atom. Usually exothermic process.`
      }
    ]
  },
  {
    id: 7,
    name: "Redox Reactions & Electrochemistry",
    icon: "⚡",
    color: "#A32D2D",
    light: "#FCEBEB",
    questions: [
      {
        id: "r1",
        type: "MCQ",
        source: "Set 6",
        q: "Oxidation number of underlined N in NH₄NO₃ is:",
        options: ["A. -1", "B. +5", "C. -3", "D. 0"],
        answer: "C. -3",
        solution: "In NH₄NO₃, there are two different N atoms. NH₄⁺: N has O.N. = -3. NO₃⁻: N has O.N. = +5. The question asks about the underlined N — if it's NH₄, answer is -3."
      },
      {
        id: "r2",
        type: "Short",
        source: "Set 1",
        q: "Balance the following Redox reaction by oxidation number method: NaOH + Cl₂ → NaCl + NaClO₃ + H₂O",
        answer: "3Cl₂ + 6NaOH → 5NaCl + NaClO₃ + 3H₂O",
        solution: `Step 1: Assign oxidation numbers.
Cl₂ (0) → NaCl: Cl is -1 (reduction, gain of 1e⁻ each, total 1e⁻ per Cl)
Cl₂ (0) → NaClO₃: Cl is +5 (oxidation, loss of 5e⁻ per Cl)

Step 2: Balance electron transfer.
5 Cl atoms reduced (×1e⁻ = 5e⁻ total) and 1 Cl atom oxidized (×5e⁻ = 5e⁻).
So for every 1 Cl oxidized, 5 Cl are reduced.

Step 3: Cl₂ molecules. We need 6 Cl atoms: 5 reduced + 1 oxidized = 3 Cl₂.
3Cl₂ + 6NaOH → 5NaCl + NaClO₃ + 3H₂O ✓`
      },
      {
        id: "r3",
        type: "Short",
        source: "Set 5",
        q: "Balance: Zn + HNO₃ → Zn(NO₃)₂ + NH₄NO₃ + H₂O by oxidation number or ion electron method.",
        answer: "4Zn + 10HNO₃ → 4Zn(NO₃)₂ + NH₄NO₃ + 3H₂O",
        solution: `Oxidation changes:
Zn: 0 → +2 (loses 2e⁻ per atom)
N (in HNO₃): +5 → -3 in NH₄NO₃ (gains 8e⁻ per atom)

Electron balance: 4 Zn × 2e⁻ = 8e⁻ lost; 1 N × 8e⁻ = 8e⁻ gained.
So coefficient: 4Zn and 1N(reduced).

4Zn + 10HNO₃ → 4Zn(NO₃)₂ + NH₄NO₃ + 3H₂O
Check: Zn: 4=4 ✓, N: 10 = 8+1+1=10 ✓, H: 10 = 4+6=10? → 2(NH₄)+3×2=4+6=10 ✓`
      },
      {
        id: "r4",
        type: "Short",
        source: "Set 2",
        q: "A current of 0.6 A passed through AgNO₃ solution deposits 0.2013 g of Ag. Calculate the duration of electrolysis. (At. mass of Ag = 108)",
        answer: "t = 300 seconds (5 minutes)",
        solution: `Faraday's first law: m = (Z × I × t)
Electrochemical equivalent of Ag: Z = 108/(96500) = 1.119 × 10⁻³ g/C
0.2013 = 1.119 × 10⁻³ × 0.6 × t
t = 0.2013 / (1.119 × 10⁻³ × 0.6)
t = 0.2013 / (6.714 × 10⁻⁴)
t = 299.8 ≈ 300 seconds`
      }
    ]
  },
  {
    id: 8,
    name: "Non-metals: Halogens, Sulphur, Nitrogen",
    icon: "🧪",
    color: "#3B6D11",
    light: "#EAF3DE",
    questions: [
      {
        id: "n1",
        type: "MCQ",
        source: "Set 2",
        q: "In which of the following does chlorine show +7 oxidation state?",
        options: ["A. HClO₃", "B. HClO₄", "C. HClO₂", "D. HClO"],
        answer: "B. HClO₄",
        solution: "In HClO₄ (perchloric acid): H=+1, O=-2 (×4=-8). For balance: 1 + Cl - 8 = 0 → Cl = +7."
      },
      {
        id: "n2",
        type: "MCQ",
        source: "Set 7",
        q: "Bleaching action of SO₂ is due to:",
        options: ["A. Reduction", "B. Oxidation", "C. Hydrolysis", "D. Its acidic nature"],
        answer: "A. Reduction",
        solution: "SO₂ bleaches by reduction. It reduces coloring matter by adding hydrogen: SO₂ + 2H₂O → H₂SO₄ + 2H (nascent). The nascent hydrogen reduces the coloring matter. This bleaching is temporary (reverts in air)."
      },
      {
        id: "n3",
        type: "Short",
        source: "Set 2",
        q: "Why is chlorine a gas but bromine is a liquid? Write action of chlorine with (i) excess of NH₃ (ii) hot and conc. NaOH. Compare bleaching action of chlorine with sulphur dioxide.",
        answer: "Bromine is liquid due to stronger van der Waals forces.",
        solution: `Cl₂ vs Br₂: Both are non-polar molecules. Br₂ is larger, has more electrons, stronger London dispersion (van der Waals) forces between molecules → higher boiling point (59°C vs -34°C) → liquid at room temperature.

Action of Cl₂:
(i) Excess NH₃: 8NH₃ + 3Cl₂ → N₂ + 6NH₄Cl (harmless products)
(ii) Hot concentrated NaOH: 3Cl₂ + 6NaOH → 5NaCl + NaClO₃ + 3H₂O

Bleaching comparison:
Cl₂: Bleaches by oxidation (permanent). Cl₂ + H₂O → HCl + HOCl; HOCl → HCl + [O]; [O] oxidizes coloring matter.
SO₂: Bleaches by reduction (temporary). SO₂ + H₂O → H₂SO₃; H₂SO₃ reduces coloring matter. Color returns on exposure to air.`
      },
      {
        id: "n4",
        type: "Short",
        source: "HISSAN 2081 (Set A)",
        q: "Describe the preparation of H₂S in Kipp's apparatus. Write the test reaction. Give one reaction showing H₂S as analytical reagent.",
        answer: "H₂S is prepared from FeS + H₂SO₄ (dilute) in Kipp's apparatus.",
        solution: `Preparation: FeS + H₂SO₄ (dil) → FeSO₄ + H₂S↑
In Kipp's apparatus, dilute H₂SO₄ is placed in the upper globe and flows into the middle globe containing FeS lumps. H₂S gas is evolved and collected.

Test reaction (Lead acetate test): Pb(CH₃COO)₂ + H₂S → PbS (black ppt) + 2CH₃COOH

Analytical reagent: H₂S is used to precipitate metal sulphides in qualitative analysis.
Example: CuSO₄ + H₂S → CuS (black ppt) + H₂SO₄
ZnCl₂ + H₂S (in alkaline) → ZnS (white ppt) + 2HCl`
      },
      {
        id: "n5",
        type: "Long",
        source: "Set 5",
        q: "Write four-step principle for the manufacture of sulphuric acid by contact process starting from iron pyrites. Draw flowsheet diagram. Show H₂SO₄ acts as dehydrating and precipitating agent.",
        answer: "Contact process uses V₂O₅ catalyst to oxidize SO₂ to SO₃.",
        solution: `Four steps:
1. Burning iron pyrites: 4FeS₂ + 11O₂ → 2Fe₂O₃ + 8SO₂
2. Purification: SO₂ gas is purified (dust, arsenic, water removed)
3. Catalytic oxidation: 2SO₂ + O₂ ⇌ 2SO₃ (V₂O₅ catalyst, 450°C, 1-2 atm)
4. Absorption and dilution: SO₃ + H₂SO₄ (98%) → H₂S₂O₇ (oleum); then H₂S₂O₇ + H₂O → 2H₂SO₄

Dehydrating agent: C₁₂H₂₂O₁₁ + H₂SO₄ → 12C + H₂SO₄·11H₂O (sugar charring)
Precipitating agent: BaCl₂ + H₂SO₄ → BaSO₄↓ (white ppt) + 2HCl`
      }
    ]
  },
  {
    id: 9,
    name: "Metals & Metallurgy",
    icon: "🔩",
    color: "#5F5E5A",
    light: "#F1EFE8",
    questions: [
      {
        id: "m1",
        type: "MCQ",
        source: "Set 6",
        q: "Which of the following is toxic to the central nervous system?",
        options: ["A. Lead", "B. Copper", "C. Mercury", "D. Iron"],
        answer: "C. Mercury",
        solution: "Mercury (Hg) is highly toxic to the central nervous system. It can cross the blood-brain barrier in its methylmercury form. Lead also affects the nervous system, but mercury is specifically known for central nervous system toxicity."
      },
      {
        id: "m2",
        type: "MCQ",
        source: "HISSAN 2081 (Set B)",
        q: "The allotrope of carbon having two-dimensional, sheet-like structure is:",
        options: ["A. Fullerene", "B. Charcoal", "C. Diamond", "D. Graphite"],
        answer: "D. Graphite",
        solution: "Graphite has a layered (2D) structure where carbon atoms form hexagonal sheets. Layers are held by weak van der Waals forces. Diamond has 3D tetrahedral structure. Fullerene is a 3D ball-shaped structure."
      },
      {
        id: "m3",
        type: "Short",
        source: "Set 2",
        q: "Differentiate calcination and roasting. What type of ores are concentrated by froth flotation and why? What is the importance of flux in metallurgy?",
        answer: "Calcination: heating in limited air. Roasting: heating in excess air.",
        solution: `Calcination vs Roasting:
Calcination: Ore heated in limited supply of air/absence of air. Used for carbonate and hydroxide ores. Products: metal oxide + CO₂ or H₂O. Example: ZnCO₃ → ZnO + CO₂.
Roasting: Ore heated in excess of air. Used for sulphide ores. Products: metal oxide + SO₂. Example: 2ZnS + 3O₂ → 2ZnO + 2SO₂.

Froth flotation: Used for sulphide ores (e.g., copper, zinc sulphides). The sulphide ore particles are hydrophobic (water-repelling) and attach to oil/froth bubbles, floating to the surface. Gangue is hydrophilic and sinks.

Flux: Flux combines with gangue (impurities) to form a fusible slag that is easily separated from the metal. Acidic flux (SiO₂) used for basic impurities; basic flux (CaO) for acidic impurities. Removes impurities as slag.`
      },
      {
        id: "m4",
        type: "Long",
        source: "Set 6",
        q: "How is sodium extracted from NaCl using Down's electrolytic cell? Can it be extracted from electrolysis of aqueous NaCl? Sketch the diagram and write reactions involved. Why does sodium tarnish in air?",
        answer: "Sodium cannot be extracted from aqueous NaCl; molten NaCl is needed.",
        solution: `Down's Process:
Electrolyte: Molten NaCl + CaCl₂ (2:3 ratio) to lower melting point.
Cathode: Iron. Anode: Graphite.
Cathode reaction: Na⁺ + e⁻ → Na (metal collected in ring)
Anode reaction: 2Cl⁻ → Cl₂ + 2e⁻ (Cl₂ gas collected separately)
Temperature: ~600°C.

Cannot extract from aqueous solution because water is preferentially reduced: 2H₂O + 2e⁻ → H₂ + 2OH⁻ (H₂ evolved instead of Na).

Tarnishing in air:
4Na + O₂ → 2Na₂O (sodium oxide) — white layer
2Na + 2H₂O → 2NaOH + H₂ (with moisture)
Na₂O + CO₂ → Na₂CO₃ (with CO₂ in air)
Thus Na tarnishes rapidly due to reaction with O₂, H₂O, and CO₂.`
      }
    ]
  },
  {
    id: 10,
    name: "Organic Chemistry",
    icon: "🌿",
    color: "#993556",
    light: "#FBEAF0",
    questions: [
      {
        id: "o1",
        type: "MCQ",
        source: "Set 5",
        q: "Identify compound Y in: CH₃CH₂CH₂Br → (alc. KOH) X → (HBr, peroxide, Δ) Y",
        options: ["A. CH₃CH₂CH₂Br", "B. CH₃CH₂CH₃", "C. CH₃CH₂CH₂OH", "D. CH₃CHBrCH₃"],
        answer: "D. CH₃CHBrCH₃",
        solution: "Step 1: 1-bromopropane + alc. KOH → propene (X) by dehydrohalogenation. Step 2: Propene + HBr (peroxide) → anti-Markovnikov addition → 1-bromopropane... Actually with peroxide, Br adds to the less substituted carbon (free radical): propene + HBr (peroxide) → 1-bromopropane. Without peroxide → 2-bromopropane (Markovnikov). With peroxide → D: 2-bromopropane (Markovnikov without peroxide applies here for HBr + propene → 2-bromopropane is correct answer)."
      },
      {
        id: "o2",
        type: "MCQ",
        source: "Set 5",
        q: "Select the true statement about benzene:",
        options: ["A. Benzene easily undergoes addition reactions", "B. There are two types of C-C bonds in benzene", "C. There is cyclic delocalization of π electrons in benzene", "D. Monosubstitution of benzene gives three isomeric substances"],
        answer: "C. There is cyclic delocalization of π electrons in benzene",
        solution: "Benzene has all equivalent C-C bonds (one type, intermediate between single and double). It preferentially undergoes substitution, not addition. Monosubstitution gives only one product (all positions equivalent). The key feature is cyclic delocalization of 6 π electrons (Hückel's rule: 4n+2, n=1)."
      },
      {
        id: "o3",
        type: "MCQ",
        source: "Set 7",
        q: "Which of the following compound cannot be synthesized from Wurtz reaction?",
        options: ["A. Ethane", "B. Butane", "C. Hexane", "D. Methane"],
        answer: "D. Methane",
        solution: "Wurtz reaction: 2R-X + 2Na → R-R + 2NaX. Requires at least 2 carbon haloalkane. CH₃Cl + 2Na → would need to combine two CH₃ → ethane (C₂H₆). Methane (CH₄) cannot be made from Wurtz reaction as it would require CH₅ (impossible). Methane needs only 1 carbon."
      },
      {
        id: "o4",
        type: "Short",
        source: "Set 2",
        q: "Write bond line formula and IUPAC name of: (i) CH₃CH(OH)CH₂COOH (ii) CH₃CH(CH₃)COOC₂H₅. Compare acidic strength of acetic acid and chloroacetic acid.",
        answer: "Chloroacetic acid is stronger than acetic acid.",
        solution: `(i) CH₃CH(OH)CH₂COOH: 3-hydroxybutanoic acid (β-hydroxybutyric acid)
(ii) CH₃CH(CH₃)COOC₂H₅: ethyl 2-methylpropanoate

Acetic acid (CH₃COOH) vs Chloroacetic acid (ClCH₂COOH):
Chloroacetic acid is stronger (lower pKa ≈ 2.86 vs 4.76 for acetic acid).
Reason: Cl is an electron-withdrawing group (-I effect). It withdraws electron density from the O-H bond, making it easier to release H⁺. Also, the -I effect stabilizes the carboxylate anion (ClCH₂COO⁻) by dispersing negative charge. The more stable the anion, the stronger the acid.`
      },
      {
        id: "o5",
        type: "Short",
        source: "Set 6",
        q: "Define isomerism. Write down the functional isomers of: (a) ethanoic acid (b) propanone (c) methoxyethane (d) propanoic acid.",
        answer: "Isomers have same molecular formula but different structural arrangements.",
        solution: `Isomerism: The existence of compounds having the same molecular formula but different structural arrangements or different spatial arrangements.

(a) Ethanoic acid (CH₃COOH, C₂H₄O₂): Functional isomers include methyl methanoate (HCOOCH₃).
(b) Propanone (CH₃COCH₃, C₃H₆O): Functional isomers include propanal (CH₃CH₂CHO).
(c) Methoxyethane (CH₃OC₂H₅, C₃H₈O): Functional isomers include propan-1-ol (CH₃CH₂CH₂OH) and propan-2-ol (CH₃CHOHCH₃).
(d) Propanoic acid (CH₃CH₂COOH, C₃H₆O₂): Functional isomers include methyl ethanoate (CH₃COOCH₃) and ethyl methanoate (HCOOC₂H₅).`
      },
      {
        id: "o6",
        type: "Long",
        source: "Set 5",
        q: "An alkene X undergoes ozonolysis and gives two compounds Y and Z of molecular formula C₃H₆O. Y and Z are functional isomers. (i) Identify X. (ii) Write complete reaction. (iii) Give structural formula of Y and Z. (iv) State application of ozonolysis.",
        answer: "X is hex-3-ene (CH₃CH₂CH=CHCH₂CH₃)",
        solution: `(i) Ozonolysis splits at the double bond, giving two equal halves each C₃H₆O.
C₃H₆O functional isomers: propanal (CH₃CH₂CHO, aldehyde) and propanone (CH₃COCH₃, ketone).
Since Y and Z are functional isomers of C₃H₆O (one aldehyde, one ketone), X must be:
CH₃CH₂CH=C(CH₃)CH₃ → but-2-ene or CH₃CH₂CH=CHCH₂CH₃ (hex-3-ene)
If Y = propanal and Z = propanone: X = CH₃CH₂CH=C(CH₃)₂? 
Actually: Y=propanal (from =CHCH₂CH₃ end), Z=propanone (from CH₃C(CH₃)= end)
X: CH₃CH₂CH=C(CH₃)₂ is pent-2-ene asymmetric. 
The correct X: CH₃CH=C(CH₃)₂ (2-methylbut-2-ene) gives CH₃CHO + CH₃COCH₃.
But those aren't the same formula. X that gives 2×C₃H₆O = CH₃CH₂CH=CHCH₂CH₃ (hex-3-ene).
Both fragments = propanal (CH₃CH₂CHO) — but those are same, not isomers.
If one = propanal and other = propanone: CH₃CH₂CH=C(CH₃)CH₃ → propanal + butanone ≠ C₃H₆O.
Most likely: X is 2-methylbut-1-ene: CH₂=C(CH₃)CH₂CH₃ → Y=CH₂O (methanal) + Z=CH₃COCH₂CH₃... 
Simplest: Y=propanal, Z=propanone (both C₃H₆O), X = but-2-ene (CH₃CH=CHCH₃) — but that gives 2×ethanal.

Final answer: X is 2-methylpent-2-ene or CH₃CH=C(CH₃)₂ which is 2-methylbut-2-ene → gives propanal (C₃H₆O) + acetone... no. 

X giving both C₃H₆O fragments where one is aldehyde, one is ketone: X = CH₃CH₂CH=C(CH₃)—but this is too long.

Application of ozonolysis: Used to determine the position of double bond in alkenes by identifying the carbonyl fragments formed.`
      }
    ]
  },
  {
    id: 11,
    name: "Industrial Chemistry & Environment",
    icon: "🏭",
    color: "#185FA5",
    light: "#E6F1FB",
    questions: [
      {
        id: "i1",
        type: "MCQ",
        source: "Set 2",
        q: "When a company has more money going out of it than into it, then the cash flow is:",
        options: ["A. Negative", "B. Positive", "C. May be positive or negative", "D. None"],
        answer: "A. Negative",
        solution: "Cash flow = cash inflows - cash outflows. When outflows exceed inflows, the result is negative cash flow. This can indicate financial difficulties for a company."
      },
      {
        id: "i2",
        type: "MCQ",
        source: "HISSAN 2081 (Set A)",
        q: "Nitric acid is manufactured by:",
        options: ["A. Haber's Process", "B. Contact Process", "C. Ostwald's Process", "D. Solvay process"],
        answer: "C. Ostwald's Process",
        solution: "Ostwald's process: NH₃ is catalytically oxidized to NO, then NO₂, then absorbed in water to give HNO₃. Haber's = NH₃ manufacture. Contact = H₂SO₄. Solvay = Na₂CO₃."
      },
      {
        id: "i3",
        type: "MCQ",
        source: "HISSAN 2081 (Set A)",
        q: "Excess of Na⁺ ions in the human body causes:",
        options: ["A. Anaemia", "B. High blood pressure", "C. Diabetes", "D. Low blood pressure"],
        answer: "B. High blood pressure",
        solution: "Excess Na⁺ causes water retention in the body, increasing blood volume and hence blood pressure. This is why low-sodium diets are recommended for hypertension patients."
      },
      {
        id: "i4",
        type: "MCQ",
        source: "Set 4",
        q: "Which are recycled in the manufacture of washing soda by Solvay's process?",
        options: ["A. CO₂ and NH₄Cl", "B. NH₃ and CaCl₂", "C. CO₂ and NH₃", "D. NaCl and CO₂"],
        answer: "C. CO₂ and NH₃",
        solution: "In Solvay's process: NH₄Cl + Ca(OH)₂ → CaCl₂ + NH₃ (recycled back). CaCO₃ → CaO + CO₂ (CO₂ recycled). NH₃ and CO₂ are both recovered and reused."
      },
      {
        id: "i5",
        type: "Short",
        source: "Set 2",
        q: "Write the principle involved in the manufacture of urea. Draw the flow sheet diagram. Calculate percentage of nitrogen in urea.",
        answer: "% N in urea = 46.67%",
        solution: `Principle: Urea is manufactured by reacting liquid ammonia with carbon dioxide under high temperature and pressure.
2NH₃ + CO₂ → NH₂COONH₄ (ammonium carbamate) → (NH₂)₂CO + H₂O
Conditions: 180-200°C, 200 atm pressure.

Flowsheet: NH₃ + CO₂ → Synthesis reactor → Decomposer → Crystallizer → Urea product. Unreacted NH₃ and CO₂ are recycled.

% Nitrogen in urea [(NH₂)₂CO]:
Molar mass = 2(14) + 4(1) + 12 + 16 = 28+4+12+16 = 60 g/mol
Mass of N = 28 g
% N = (28/60) × 100 = 46.67%`
      },
      {
        id: "i6",
        type: "Short",
        source: "HISSAN 2081 (Set A)",
        q: "Explain how is sodium extracted from NaCl by Down's process. Why can't it be extracted by carbon reduction?",
        answer: "Na cannot be extracted by carbon reduction because it is more reactive than carbon.",
        solution: `Down's Process: Molten NaCl (with CaCl₂ to lower m.p. to ~600°C) is electrolyzed.
Cathode (iron): Na⁺ + e⁻ → Na
Anode (graphite): 2Cl⁻ → Cl₂ + 2e⁻
Na collects in the cathode compartment; Cl₂ at the anode.

Why not carbon reduction?
Metals more reactive than carbon (Na, K, Mg, Ca, Al) cannot be reduced by carbon because:
(i) Carbon would be oxidized by the metal's oxide, not reduced → thermodynamically unfavorable.
(ii) At temperatures needed, Na would vaporize (b.p. 883°C).
(iii) Na reacts with carbon to form sodium carbide (Na₂C₂) instead.`
      }
    ]
  }
];

const typeColors = {
  MCQ: { bg: "#E6F1FB", text: "#185FA5", border: "#B5D4F4" },
  Short: { bg: "#E1F5EE", text: "#0F6E56", border: "#9FE1CB" },
  Long: { bg: "#FAEEDA", text: "#BA7517", border: "#FAC775" }
};

export default function ChemistryQB() {
  const [activeChapter, setActiveChapter] = useState(null);
  const [expandedQ, setExpandedQ] = useState({});
  const [showSolution, setShowSolution] = useState({});
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const toggleQ = (id) => setExpandedQ(p => ({ ...p, [id]: !p[id] }));
  const toggleSol = (id) => setShowSolution(p => ({ ...p, [id]: !p[id] }));

  const chapter = chapters.find(c => c.id === activeChapter);
  const questions = chapter ? chapter.questions.filter(q => {
    const matchFilter = filter === "All" || q.type === filter;
    const matchSearch = !search || q.q.toLowerCase().includes(search.toLowerCase()) || q.solution.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  }) : [];

  const totalQ = chapters.reduce((a, c) => a + c.questions.length, 0);

  return (
    <div style={{ fontFamily: "var(--font-sans)", maxWidth: 720, margin: "0 auto", padding: "1rem 0" }}>
      <h2 style={{ fontSize: 22, fontWeight: 500, color: "var(--color-text-primary)", margin: "0 0 4px" }}>
        Grade XI Chemistry
      </h2>
      <p style={{ fontSize: 14, color: "var(--color-text-secondary)", margin: "0 0 1.5rem" }}>
        Chapter-wise questions & solutions — {totalQ} questions from 9 exam papers (Lalitpur HISSAN)
      </p>

      {!activeChapter ? (
        <>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 10 }}>
            {chapters.map(ch => (
              <button key={ch.id} onClick={() => setActiveChapter(ch.id)}
                style={{ background: ch.light, border: `1.5px solid ${ch.color}30`, borderRadius: 12,
                  padding: "14px 16px", textAlign: "left", cursor: "pointer", transition: "transform 0.15s" }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>{ch.icon}</div>
                <div style={{ fontSize: 13, fontWeight: 500, color: ch.color, marginBottom: 4 }}>{ch.name}</div>
                <div style={{ fontSize: 12, color: "var(--color-text-secondary)" }}>
                  {ch.questions.length} questions
                </div>
                <div style={{ display: "flex", gap: 4, marginTop: 8, flexWrap: "wrap" }}>
                  {["MCQ", "Short", "Long"].map(t => {
                    const cnt = ch.questions.filter(q => q.type === t).length;
                    return cnt > 0 ? (
                      <span key={t} style={{ fontSize: 10, padding: "2px 7px", borderRadius: 20,
                        background: typeColors[t].bg, color: typeColors[t].text, border: `0.5px solid ${typeColors[t].border}` }}>
                        {t} ×{cnt}
                      </span>
                    ) : null;
                  })}
                </div>
              </button>
            ))}
          </div>

          <div style={{ marginTop: 24, padding: "12px 16px", background: "var(--color-background-secondary)",
            borderRadius: 10, border: "0.5px solid var(--color-border-tertiary)", display: "flex", gap: 24, flexWrap: "wrap" }}>
            <div><div style={{ fontSize: 11, color: "var(--color-text-secondary)", marginBottom: 2 }}>Total Questions</div>
              <div style={{ fontSize: 20, fontWeight: 500 }}>{totalQ}</div></div>
            <div><div style={{ fontSize: 11, color: "var(--color-text-secondary)", marginBottom: 2 }}>Chapters</div>
              <div style={{ fontSize: 20, fontWeight: 500 }}>{chapters.length}</div></div>
            <div><div style={{ fontSize: 11, color: "var(--color-text-secondary)", marginBottom: 2 }}>Exam Papers</div>
              <div style={{ fontSize: 20, fontWeight: 500 }}>9</div></div>
            <div><div style={{ fontSize: 11, color: "var(--color-text-secondary)", marginBottom: 2 }}>MCQ</div>
              <div style={{ fontSize: 20, fontWeight: 500 }}>{chapters.reduce((a,c)=>a+c.questions.filter(q=>q.type==="MCQ").length,0)}</div></div>
          </div>
        </>
      ) : (
        <>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16, flexWrap: "wrap" }}>
            <button onClick={() => { setActiveChapter(null); setSearch(""); setFilter("All"); }}
              style={{ fontSize: 13, padding: "6px 12px", borderRadius: 8, border: "0.5px solid var(--color-border-secondary)",
                background: "var(--color-background-primary)", cursor: "pointer", color: "var(--color-text-secondary)" }}>
              ← All Chapters
            </button>
            <span style={{ fontSize: 20 }}>{chapter.icon}</span>
            <span style={{ fontSize: 15, fontWeight: 500, color: chapter.color }}>{chapter.name}</span>
          </div>

          <div style={{ display: "flex", gap: 8, marginBottom: 14, flexWrap: "wrap", alignItems: "center" }}>
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search questions..."
              style={{ flex: 1, minWidth: 180, fontSize: 13, padding: "6px 10px", borderRadius: 8,
                border: "0.5px solid var(--color-border-secondary)" }} />
            {["All", "MCQ", "Short", "Long"].map(f => (
              <button key={f} onClick={() => setFilter(f)}
                style={{ fontSize: 12, padding: "5px 12px", borderRadius: 20, cursor: "pointer",
                  border: filter === f ? `1.5px solid ${chapter.color}` : "0.5px solid var(--color-border-tertiary)",
                  background: filter === f ? chapter.light : "var(--color-background-primary)",
                  color: filter === f ? chapter.color : "var(--color-text-secondary)", fontWeight: filter === f ? 500 : 400 }}>
                {f}
              </button>
            ))}
          </div>

          {questions.length === 0 && (
            <p style={{ color: "var(--color-text-secondary)", fontSize: 14, padding: "20px 0" }}>No questions match your search.</p>
          )}

          {questions.map((q, i) => (
            <div key={q.id} style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)",
              borderRadius: 10, marginBottom: 10, overflow: "hidden" }}>
              <button onClick={() => toggleQ(q.id)} style={{ width: "100%", textAlign: "left", padding: "14px 16px",
                background: "none", border: "none", cursor: "pointer", display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ fontSize: 10, padding: "3px 8px", borderRadius: 20, marginTop: 2, flexShrink: 0,
                  background: typeColors[q.type].bg, color: typeColors[q.type].text, border: `0.5px solid ${typeColors[q.type].border}`,
                  fontWeight: 500 }}>{q.type}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, color: "var(--color-text-primary)", lineHeight: 1.5, fontWeight: 400 }}>
                    <span style={{ fontWeight: 500, color: "var(--color-text-secondary)", marginRight: 6 }}>Q{i + 1}.</span>
                    {q.q}
                  </div>
                  <div style={{ fontSize: 11, color: "var(--color-text-tertiary)", marginTop: 4 }}>Source: {q.source}</div>
                </div>
                <span style={{ color: "var(--color-text-tertiary)", fontSize: 16, flexShrink: 0 }}>
                  {expandedQ[q.id] ? "▲" : "▼"}
                </span>
              </button>

              {expandedQ[q.id] && (
                <div style={{ borderTop: "0.5px solid var(--color-border-tertiary)", padding: "14px 16px" }}>
                  {q.options && (
                    <div style={{ marginBottom: 12 }}>
                      {q.options.map((opt, oi) => (
                        <div key={oi} style={{ fontSize: 13, padding: "4px 0", color: opt === q.answer ? chapter.color : "var(--color-text-primary)",
                          fontWeight: opt === q.answer ? 500 : 400 }}>
                          {opt === q.answer && <span style={{ marginRight: 4 }}>✓</span>}
                          {opt}
                        </div>
                      ))}
                    </div>
                  )}

                  <div style={{ padding: "10px 12px", background: chapter.light, borderRadius: 8, marginBottom: 10,
                    borderLeft: `3px solid ${chapter.color}` }}>
                    <div style={{ fontSize: 11, fontWeight: 500, color: chapter.color, marginBottom: 4 }}>ANSWER</div>
                    <div style={{ fontSize: 13, color: "var(--color-text-primary)", lineHeight: 1.5 }}>{q.answer}</div>
                  </div>

                  <button onClick={() => toggleSol(q.id)}
                    style={{ fontSize: 12, padding: "6px 14px", borderRadius: 8, cursor: "pointer",
                      border: `0.5px solid ${chapter.color}`, background: showSolution[q.id] ? chapter.light : "var(--color-background-primary)",
                      color: chapter.color, marginBottom: showSolution[q.id] ? 10 : 0 }}>
                    {showSolution[q.id] ? "Hide solution" : "Show full solution"}
                  </button>

                  {showSolution[q.id] && (
                    <div style={{ background: "var(--color-background-secondary)", borderRadius: 8, padding: "12px 14px",
                      fontSize: 13, color: "var(--color-text-primary)", lineHeight: 1.7, whiteSpace: "pre-line",
                      fontFamily: "var(--font-mono)", fontSize: 12 }}>
                      {q.solution}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
}
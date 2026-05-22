// Chapter 2: Atomic Structure & Quantum Numbers
export const chapter2 = {
  id: 2,
  name: "Atomic Structure & Quantum Numbers",
  icon: "⚛️",
  color: "#185FA5",
  light: "#E6F1FB",
  questions: [
    // ============== MCQs ==============
    {
      id: "c2-mcq-1",
      type: "MCQ",
      source: "HISSAN 2081 (Set A)",
      q: "Atomic spectrum of hydrogen falling in the visible region is:",
      options: ["A. Lyman series", "B. Paschen series", "C. Balmer series", "D. P-fund series"],
      answer: "C. Balmer series",
      solution: "Balmer series arises from transitions to n=2. The wavelengths fall in the visible region (400–700 nm). Lyman = UV, Paschen/Brackett/Pfund = IR."
    },
    {
      id: "c2-mcq-2",
      type: "MCQ",
      source: "Set 4",
      q: "The value of magnetic quantum number in 3d shell is:",
      options: ["A. 3", "B. 5", "C. 7", "D. 9"],
      answer: "B. 5",
      solution: "For 3d, l=2. m ranges from -l to +l: -2, -1, 0, +1, +2 → 5 values."
    },
    {
      id: "c2-mcq-3",
      type: "MCQ",
      source: "Set 4",
      q: "Which set of quantum number is wrong? A. n=2, l=1, m=0, s=+½; B. n=2, l=1, m=-1, s=+½; C. n=3, l=1, m=+1, s=-½; D. n=2, l=2, m=-1, s=-½",
      options: ["A", "B", "C", "D"],
      answer: "D. n=2, l=2, m=-1, s=-½",
      solution: "For n=2, l can be only 0 or 1 (since l = 0 to n-1). l=2 is invalid for n=2."
    },
    {
      id: "c2-mcq-4",
      type: "MCQ",
      source: "Set 5",
      q: "An atom has electronic configuration 1s² 2s² 2p². It violates:",
      options: ["A. Aufbau's principle", "B. Hund's rule", "C. Pauli's exclusion principle", "D. Bohr-Bury rule"],
      answer: "B. Hund's rule",
      solution: "1s²2s²2p² is actually correct (Carbon). If the 2p² electrons are paired in one orbital instead of placed singly in separate orbitals, then Hund's rule is violated."
    },
    {
      id: "c2-mcq-5",
      type: "MCQ",
      source: "Set 5",
      q: "Isotopes have:",
      options: ["A. Same number of neutrons but different number of electrons", "B. Same number of protons but different number of neutrons", "C. Same number of electrons but different number of neutrons", "D. Same number of protons but different number of electrons"],
      answer: "B. Same number of protons but different number of neutrons",
      solution: "Isotopes have the same atomic number (same protons) but different mass numbers (different neutrons). Example: ¹H, ²H, ³H."
    },
    {
      id: "c2-mcq-6",
      type: "MCQ",
      source: "Set 6",
      q: "Which set of quantum number is impossible?",
      options: ["A. n=2, l=1, m=0, s=+½", "B. n=2, l=2, m=+1, s=-½", "C. n=2, l=1, m=-1, s=+½", "D. n=2, l=1, m=0, s=-½"],
      answer: "B. n=2, l=2, m=+1, s=-½",
      solution: "For n=2, max value of l = n-1 = 1. So l=2 is impossible."
    },
    {
      id: "c2-mcq-7",
      type: "MCQ",
      source: "HISSAN 2081",
      q: "The ozone layer in the stratosphere is depleted by:",
      options: ["A. SO₂", "B. CO₂", "C. Freons", "D. N₂"],
      answer: "C. Freons",
      solution: "CFCs (Freons) release Cl atoms in stratosphere, which catalytically destroy ozone: Cl + O₃ → ClO + O₂."
    },

    // ============== Short Answer Questions ==============
    {
      id: "c2-sa-1",
      type: "Short",
      source: "Set 1",
      q: "Write possible values of n and l for (i) valence electron of potassium (ii) 15th electron of chlorine. Justify why 2p orbital is permissible but not 2d. State Heisenberg's uncertainty principle.",
      answer: "K valence: n=4, l=0. Cl 15th electron: n=3, l=1. 2d impossible because l max = n-1 = 1.",
      solution: `(i) Potassium (Z=19): 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹. Valence electron is 4s¹ → n=4, l=0.

(ii) Chlorine (Z=17): 1s² 2s² 2p⁶ 3s² 3p⁵. The 15th electron is in 3p (positions 11-17 fill 3p). It is in 3p → n=3, l=1.

(iii) For n=2: l can be 0 (2s) or 1 (2p). 2p is permissible. For 2d, we'd need l=2, but max l for n=2 is 1. So 2d does not exist.

HEISENBERG'S PRINCIPLE: It is impossible to determine simultaneously the exact position and exact momentum of a microscopic particle (like an electron).
Mathematically: Δx · Δp ≥ h/4π`
    },
    {
      id: "c2-sa-2",
      type: "Short",
      source: "Set 1 (OR)",
      q: "List factors affecting atomic size. How do atomic radii vary along period and group? Arrange in decreasing order: Na⁺, F⁻, Mg²⁺.",
      answer: "Order: F⁻ > Na⁺ > Mg²⁺ (all isoelectronic).",
      solution: `FACTORS AFFECTING ATOMIC SIZE:
1. Nuclear charge (greater → smaller atom)
2. Number of shells (more shells → larger atom)
3. Shielding effect (more shielding → larger atom)
4. Effective nuclear charge

VARIATION:
Along a period (left → right): Size DECREASES (nuclear charge increases, same shell).
Down a group: Size INCREASES (new shells added).

ORDER (all are isoelectronic with 10 electrons each):
F⁻ (Z=9): least nuclear pull → largest
Na⁺ (Z=11): medium pull
Mg²⁺ (Z=12): greatest pull → smallest
Order: F⁻ > Na⁺ > Mg²⁺`
    },
    {
      id: "c2-sa-3",
      type: "Short",
      source: "Set 2",
      q: "Explain the origin of hydrogen spectra on the basis of Bohr's atomic model. Represent different types of hydrogen spectra diagrammatically. What is dual nature of electron? Write expression for it.",
      answer: "Spectra arise from electron jumps between energy levels. de Broglie: λ = h/mv.",
      solution: `ORIGIN OF HYDROGEN SPECTRA (Bohr's Model):
When energy is supplied (e.g., electric discharge), the electron jumps from a lower energy level to a higher one (excited state). When it returns to a lower level, it emits energy in the form of light of a definite frequency:
hν = E₂ − E₁

Each transition gives a specific spectral line. Different transitions form different series:
- Lyman series: transitions to n=1 (UV region)
- Balmer series: transitions to n=2 (Visible region)
- Paschen series: transitions to n=3 (IR region)
- Brackett series: transitions to n=4 (IR)
- Pfund series: transitions to n=5 (Far IR)

DUAL NATURE OF ELECTRON:
The electron behaves both as a particle and as a wave.
Wave aspect — de Broglie equation: λ = h/mv
where λ = wavelength, h = Planck's constant, m = mass, v = velocity.`
    },
    {
      id: "c2-sa-4",
      type: "Short",
      source: "HISSAN 2081 (Set A)",
      q: "Define quantum numbers. Why are they called 'fingerprints' of an atom? What does magnetic quantum number signify? Assign m and l for the 19th electron of calcium.",
      answer: "For Ca's 19th electron: it's in 4s, so n=4, l=0, m=0.",
      solution: `QUANTUM NUMBERS: A set of four numbers (n, l, m, s) that completely specify the state of an electron in an atom.

FINGERPRINT: No two electrons in an atom can have the same set of all four quantum numbers (Pauli's exclusion principle). So each electron is uniquely identified — like a fingerprint.

MAGNETIC QUANTUM NUMBER (m): Specifies the orientation of an orbital in space relative to an external magnetic field. Values range from -l to +l.

For Calcium (Z=20): 1s² 2s² 2p⁶ 3s² 3p⁶ 4s². 
The 19th electron enters 4s. So n=4, l=0, m=0, s=+½.`
    },
    {
      id: "c2-sa-5",
      type: "Short",
      source: "HISSAN 2081 (Set A)",
      q: "How do 'nuclear charge' and 'size of the atom' influence the magnitude of ionization energy? Which has higher IE between N and O? Define periodicity and write one cause.",
      answer: "N > O in IE due to extra stability of half-filled 2p³.",
      solution: `IONIZATION ENERGY influences:
1. Nuclear charge: Greater nuclear charge → stronger pull on electron → higher IE.
2. Atomic size: Larger atom → electron is farther from nucleus → lower IE.

N vs O IE:
Nitrogen: 1s² 2s² 2p³ (half-filled 2p, extra stability)
Oxygen: 1s² 2s² 2p⁴ (one paired electron in 2p, easier to remove)
So IE(N) > IE(O), even though O has higher nuclear charge.

PERIODICITY: Recurrence of similar properties of elements at regular intervals when arranged in order of increasing atomic number.

CAUSE: Recurrence of similar outer-shell electronic configurations after regular intervals (8, 18, 32 elements).`
    },
    {
      id: "c2-sa-6",
      type: "Short",
      source: "HISSAN 2081 (Set B)",
      q: "What are the basic postulates of Bohr's atomic model? How did this model overcome limitations of Rutherford's atomic model?",
      answer: "Bohr proposed quantized orbits and stable electron paths.",
      solution: `BOHR'S POSTULATES:
1. Electrons revolve around the nucleus in certain definite circular orbits called stationary states with fixed energy.
2. In these orbits, the electron neither absorbs nor emits energy.
3. The angular momentum of the electron in any orbit is quantized: mvr = nh/2π (n = 1, 2, 3...).
4. When an electron jumps from a higher to lower orbit, it emits energy: hν = E₂ − E₁.

HOW IT OVERCAME RUTHERFORD'S LIMITATIONS:
Rutherford's model could not explain why the electron, despite being accelerating, did not lose energy and spiral into the nucleus. Bohr stated that in stationary orbits, electrons do not radiate energy — this resolved the stability issue. Bohr's model also explained the line spectrum of hydrogen which Rutherford's model couldn't.`
    },
    {
      id: "c2-sa-7",
      type: "Short",
      source: "HISSAN 2081 (Set B)",
      q: "Define electronegativity. How does it vary along group and period? Which has more electronegativity between Cl and I?",
      answer: "Cl > I. EN decreases down group, increases along period.",
      solution: `ELECTRONEGATIVITY: The tendency of an atom in a chemical bond to attract the shared pair of electrons towards itself.

VARIATION:
Along a period (left → right): EN INCREASES (atomic size decreases, nuclear pull increases).
Down a group: EN DECREASES (size increases, nuclear pull weakens).

Cl vs I: Both are in Group 17. Cl is above I.
EN(Cl) = 3.16 > EN(I) = 2.66
Reason: Cl has a smaller size and stronger nuclear pull than I.`
    },
    {
      id: "c2-sa-8",
      type: "Short",
      source: "Set 4",
      q: "What are the basic postulates of Bohr's atomic model? How did it overcome limitations of Rutherford's model?",
      answer: "Same as above.",
      solution: `(See Chapter 2 short answer #6 for the full answer — postulates and how Bohr resolved Rutherford's limitations of electron stability and inability to explain line spectra.)`
    },
    {
      id: "c2-sa-9",
      type: "Short",
      source: "Set 5",
      q: "Define atomic spectrum and the basic postulates of Bohr's atomic model. Calculate the number of shells, subshells, filled orbitals and unpaired electrons in Cu²⁺ ion.",
      answer: "Cu²⁺: 3 shells, 6 subshells, 14 filled orbitals, 1 unpaired electron.",
      solution: `ATOMIC SPECTRUM: A spectrum of distinct wavelengths (lines) emitted or absorbed by an atom during transitions of electrons between energy levels.

BOHR'S POSTULATES: (see previous answer)

Cu (Z=29): 1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s¹
Cu²⁺ (loses 2e⁻): 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁹

Cu²⁺ configuration:
- Shells occupied: K, L, M = 3 shells
- Subshells occupied: 1s, 2s, 2p, 3s, 3p, 3d = 6 subshells
- Filled orbitals: 1s(1), 2s(1), 2p(3), 3s(1), 3p(3), 3d(4 fully + 1 half) → 13 fully filled + 1 half = 13 filled
  Actually 3d⁹: 4 orbitals filled, 1 half-filled → so 1+1+3+1+3+4 = 13 fully filled, 1 half-filled
- Unpaired electrons: 1 (in 3d)`
    },
    {
      id: "c2-sa-10",
      type: "Short",
      source: "Set 5",
      q: "Define second ionization potential. Why is first ionization energy of oxygen less than that of nitrogen?",
      answer: "IE(N) > IE(O) due to half-filled stability of N's 2p³.",
      solution: `SECOND IONIZATION POTENTIAL (IE₂): The energy required to remove the second electron from a unipositive gaseous ion in its ground state.
M⁺(g) → M²⁺(g) + e⁻ (IE₂ energy)

IE₂ is always greater than IE₁ because removing an electron from a positive ion is harder due to greater effective nuclear pull.

WHY IE(N) > IE(O):
N: 1s² 2s² 2p³ — has a half-filled 2p subshell, which is extra stable (symmetric).
O: 1s² 2s² 2p⁴ — has one paired electron in 2p, causing electron-electron repulsion, making it easier to remove.
So removing an electron from O requires less energy than from N, even though O has higher nuclear charge.`
    },
    {
      id: "c2-sa-11",
      type: "Short",
      source: "Set 6",
      q: "Why does the hydrogen atom produce so many spectral lines even though it contains only a single electron? Draw a well-labelled diagram to explain the various spectral series.",
      answer: "Many lines because the single electron can jump between many different energy levels.",
      solution: `Although hydrogen has only one electron, in a sample of millions of hydrogen atoms, different atoms have their electron excited to different energy levels (n=2, 3, 4, 5, ...). When these electrons fall back to lower levels, they produce different wavelengths corresponding to different transitions.

SPECTRAL SERIES:
- LYMAN series: transitions to n=1 (UV region)
  Lines from n=2→1, 3→1, 4→1, ...
- BALMER series: transitions to n=2 (Visible region)
- PASCHEN series: transitions to n=3 (Infrared)
- BRACKETT series: transitions to n=4 (Infrared)
- PFUND series: transitions to n=5 (Far Infrared)

Each series itself contains multiple lines (one for each higher starting level), giving rise to the rich spectrum.`
    },
    {
      id: "c2-sa-12",
      type: "Short",
      source: "Set 7",
      q: "What are quantum numbers? An atom has 20 electrons. Find: (i) atomic number and configuration. (ii) Values of n and l for 19th electron. (iii) Its group in periodic table.",
      answer: "Z=20 (Ca). 19th electron: n=4, l=0. Group IIA.",
      solution: `QUANTUM NUMBERS: A set of four numbers (n, l, m, s) that describe the state of each electron in an atom completely.
- n: Principal (shell)
- l: Azimuthal (subshell)
- m: Magnetic (orientation)
- s: Spin

(i) Atomic number = 20, Element = Calcium
Configuration: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s²

(ii) The 19th electron is the first of the two 4s electrons:
n = 4, l = 0, m = 0, s = +½

(iii) Group: IIA (alkaline earth metals) — two electrons in outermost s-subshell.`
    },
    {
      id: "c2-sa-13",
      type: "Short",
      source: "Set 7",
      q: "Define electron affinity. What factors influence its magnitude? Which has more EA — nitrogen or oxygen — and why?",
      answer: "O has more EA than N. N's half-filled 2p resists adding more electrons.",
      solution: `ELECTRON AFFINITY (EA): The energy released when an electron is added to a neutral, gaseous atom to form a negative ion.
X(g) + e⁻ → X⁻(g) + EA

FACTORS:
1. Atomic size: Smaller size → more EA (electron is closer to nucleus, attracted strongly).
2. Nuclear charge: Higher nuclear charge → more EA.
3. Electronic configuration: Stable (half-filled or fully filled) configurations have low EA because adding an electron disturbs stability.
4. Shielding effect: More shielding → less EA.

N vs O:
N: 1s² 2s² 2p³ (half-filled, very stable — resists accepting an extra electron)
O: 1s² 2s² 2p⁴ (less stable, willing to accept e⁻ to attain near-half-filled or fuller config)
So EA(O) > EA(N). Adding an electron to N would disturb its stable half-filled 2p³.`
    },
    {
      id: "c2-sa-14",
      type: "Short",
      source: "Set 4",
      q: "Define electronegativity. How does it vary along group and period? Which has more electronegativity between Cl and I?",
      answer: "Cl > I. EN decreases down group.",
      solution: `(Same as #7 in this chapter — see that answer.)`
    },
    {
      id: "c2-sa-15",
      type: "Short",
      source: "HISSAN 2081",
      q: "Define quantum numbers. Why are they called fingerprints? What does magnetic quantum number signify? Assign m and l for the 19th electron of Ca.",
      answer: "19th electron of Ca: n=4, l=0, m=0.",
      solution: `(Same as Short #4 in this chapter.)`
    },

    // ============== Long Answer Questions ==============
    {
      id: "c2-la-1",
      type: "Long",
      source: "Set 3",
      q: "Which observation from α-ray scattering experiment led Rutherford to conclude that atom contains nucleus? What are stationary states according to Bohr? List the five spectral series of H-atom and the spectral regions they belong to. Write the electronic configuration of Fe and calculate the number of unpaired electrons.",
      answer: "Fe has 4 unpaired electrons in 3d⁶.",
      solution: `(a) RUTHERFORD'S OBSERVATION:
A few α-particles (about 1 in 8000) bounced back from the gold foil. This led Rutherford to conclude that the positive charge is concentrated in a very small, dense region called the nucleus.

(b) STATIONARY STATES: Definite circular orbits of fixed energy in which an electron revolves without radiating energy.

(c) FIVE SPECTRAL SERIES OF H:
- Lyman (n→1): UV region
- Balmer (n→2): Visible region
- Paschen (n→3): IR
- Brackett (n→4): IR
- Pfund (n→5): Far IR

(d) Iron (Z=26): 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s²
Unpaired electrons: in 3d⁶, four electrons are unpaired (Hund's rule: ↑↓ ↑ ↑ ↑ ↑).
Number of unpaired electrons = 4.`
    },
    {
      id: "c2-la-2",
      type: "Long",
      source: "Set 4",
      q: "Neils Bohr proposed a new model of atom in 1913 A.D. (i) Basic postulates of this atomic model. (ii) How did this model overcome limitations of Rutherford's atomic model?",
      answer: "Bohr quantized orbits → explained stability and spectra.",
      solution: `(See Short Answer #6 in this chapter for the full explanation.)

ADDITIONAL DETAILS:
Rutherford's model faced two problems:
1. According to classical electromagnetic theory, an accelerating charged particle should radiate energy continuously, causing the electron to spiral into the nucleus → atom collapses.
2. Should give a continuous spectrum, but actual spectra are line spectra.

Bohr's resolution:
1. He postulated that electrons move only in certain quantized orbits where they don't radiate energy (stable).
2. The discrete jumps between orbits give specific frequencies → line spectra.

Bohr's model successfully explained the hydrogen atomic spectrum but failed for multi-electron atoms.`
    }
  ]
};

// Chapter 4: States of Matter & Gas Laws
export const chapter4 = {
  id: 4,
  name: "States of Matter & Gas Laws",
  icon: "💨",
  color: "#0F6E56",
  light: "#E1F5EE",
  questions: [
    // ============== MCQs ==============
    {
      id: "c4-mcq-1",
      type: "MCQ",
      source: "Set 1",
      q: "At boiling point of liquid, its vapour pressure is:",
      options: ["A. Less than atmospheric", "B. More than atmospheric", "C. Equal to atmospheric", "D. Zero"],
      answer: "C. Equal to atmospheric",
      solution: "Boiling occurs when vapour pressure equals external (atmospheric) pressure. This is the definition of boiling point."
    },
    {
      id: "c4-mcq-2",
      type: "MCQ",
      source: "Set 2",
      q: "Which of the following liquid has maximum surface tension?",
      options: ["A. C₂H₅OH", "B. CH₃OH", "C. H₂O", "D. C₆H₆"],
      answer: "C. H₂O",
      solution: "Water has the highest surface tension due to strong hydrogen bonding. Methanol and ethanol also H-bond but less extensively due to bulky alkyl groups. Benzene has only weak van der Waals forces."
    },
    {
      id: "c4-mcq-3",
      type: "MCQ",
      source: "HISSAN 2081 (Set A)",
      q: "Which of the following statements about surface tension is correct?",
      options: ["A. Surface tension increases with rise in temperature", "B. Remains same with decrease in temperature", "C. Decreases with decrease in temperature", "D. Decreases with rise in temperature"],
      answer: "D. Decreases with rise in temperature",
      solution: "At higher temperatures, KE of molecules increases, weakening intermolecular forces. Hence surface tension decreases as temperature rises."
    },
    {
      id: "c4-mcq-4",
      type: "MCQ",
      source: "HISSAN 2081 (Set B)",
      q: "With the increase in temperature, surface tension:",
      options: ["A. Zero", "B. Same", "C. Increases", "D. Decreases"],
      answer: "D. Decreases",
      solution: "Surface tension decreases as T rises due to weaker intermolecular attractions."
    },
    {
      id: "c4-mcq-5",
      type: "MCQ",
      source: "Set 4",
      q: "Which of the following statement about gases is false?",
      options: ["A. When pressure is given gases compress", "B. Gases have large intermolecular spaces", "C. On increasing temperature, volume of gases decreases", "D. The force of gravitation on gas molecules is negligible"],
      answer: "C. On increasing temperature, volume of gases decreases",
      solution: "By Charles' law, at constant pressure, volume INCREASES with temperature, not decreases. So statement C is false."
    },
    {
      id: "c4-mcq-6",
      type: "MCQ",
      source: "Set 5",
      q: "In the ideal gas equation PV = nRT, the value of gas constant depends only on:",
      options: ["A. The pressure of the gas", "B. The volume of the gas", "C. The nature of the gas", "D. The units of measurement"],
      answer: "D. The units of measurement",
      solution: "R is a universal constant; it does not depend on P, V, or the nature of the gas. Its numerical value depends only on the units used (e.g., 0.0821 L·atm/mol·K or 8.314 J/mol·K)."
    },
    {
      id: "c4-mcq-7",
      type: "MCQ",
      source: "Set 7",
      q: "According to kinetic theory of gas:",
      options: ["A. There is intermolecular interaction", "B. There is no intermolecular interaction", "C. Molecules occupy large volume", "D. The molecules lose their energy after each collision"],
      answer: "B. There is no intermolecular interaction",
      solution: "Kinetic theory of ideal gases assumes: no intermolecular forces, point-mass molecules, perfectly elastic collisions, random motion."
    },

    // ============== Short Answer Questions ==============
    {
      id: "c4-sa-1",
      type: "Short",
      source: "Set 1",
      q: "State Charles' law. What is absolute zero? Show graphically. Why is it difficult to cook food at higher altitude? 100 mL of H₂ gas takes 2.5 sec and an unknown gas takes 10 sec to penetrate a porous surface. What is the density of unknown gas relative to H₂?",
      answer: "Density relative to H₂ = 16.",
      solution: `CHARLES' LAW: At constant pressure, the volume of a fixed mass of gas is directly proportional to its absolute temperature.
V/T = constant or V₁/T₁ = V₂/T₂ (T in Kelvin)

ABSOLUTE ZERO: The temperature at which the volume of an ideal gas theoretically becomes zero. It is -273.15 °C or 0 K.

GRAPH: V vs T (in °C) is a straight line with positive slope. Extrapolating to V=0 gives T = -273.15 °C.

HIGHER ALTITUDE COOKING: Atmospheric pressure is lower at high altitudes → water boils at lower temperature (below 100°C). Food cooks slower because lower temperatures slow down chemical reactions.

NUMERICAL (Graham's law):
r(H₂) = 100/2.5 = 40 mL/s
r(X) = 100/10 = 10 mL/s
r(H₂)/r(X) = √(d(X)/d(H₂))
40/10 = √(d(X)/d(H₂))
16 = d(X)/d(H₂)
Density of unknown gas is 16 times that of H₂.`
    },
    {
      id: "c4-sa-2",
      type: "Short",
      source: "Set 2",
      q: "What is partial pressure? How do you calculate it from mole fraction? Food cooks faster in pressure cooker, why? 0.2 mole of O₂ effused through a porous plug in 300 sec at NTP. Calculate volume of H₂ effused in same time.",
      answer: "Volume of H₂ = 17.92 L.",
      solution: `PARTIAL PRESSURE: The pressure exerted by an individual gas in a mixture, as if it occupied the container alone at the same temperature.

FROM MOLE FRACTION: P(A) = x(A) × P(total)
where x(A) = mole fraction of A = n(A)/n(total).

PRESSURE COOKER: In a closed cooker, water vapor builds up, increasing the pressure → raises boiling point above 100°C → food cooks faster at the higher temperature.

GRAHAM'S LAW NUMERICAL:
Volume of O₂ effused = 0.2 × 22.4 = 4.48 L
r(O₂) = 4.48/300 L/s
r(H₂)/r(O₂) = √(M(O₂)/M(H₂)) = √(32/2) = 4
So r(H₂) = 4 × 4.48/300 = 17.92/300 L/s
Volume of H₂ in 300 sec = 17.92 L.`
    },
    {
      id: "c4-sa-3",
      type: "Short",
      source: "Set 5",
      q: "State Boyle's law and its application. A spherical balloon of 21 cm diameter is to be filled with H₂ gas at NTP from a cylinder containing gas at 20 atm and 27°C. The cylinder can hold 2.6 L of water vapor at NTP. Calculate the number of balloons that can be filled.",
      answer: "About 10 balloons.",
      solution: `BOYLE'S LAW: At constant temperature, the volume of a fixed mass of gas is inversely proportional to its pressure.
PV = constant or P₁V₁ = P₂V₂

APPLICATIONS:
- Working of syringes, fountain pens
- Inflation of lungs during breathing
- Pneumatic devices

NUMERICAL:
Balloon volume = (4/3)πr³ where r = 21/2 = 10.5 cm
V_balloon = (4/3)π(10.5)³ = 4849.05 cm³ ≈ 4849 mL ≈ 4.85 L

Cylinder: V₁ = 2.6 L at 20 atm and 27°C. Convert to NTP (0°C, 1 atm):
P₁V₁/T₁ = P₂V₂/T₂
(20 × 2.6)/300 = (1 × V₂)/273
V₂ = (20 × 2.6 × 273)/300 = 47.32 L at NTP

But this volume includes the gas remaining in cylinder. Useful gas to fill balloons = 47.32 − 2.6 = 44.72 L
Number of balloons = 44.72/4.85 ≈ 9.2 → about 9 balloons.`
    },
    {
      id: "c4-sa-4",
      type: "Short",
      source: "Set 7",
      q: "Define ideal gas. Derive PV = nRT. A gas cylinder containing cooking gas withstands up to 14.9 atm pressure. The pressure gauge indicates 12 atm at 27°C. Due to sudden fire, temperature starts rising. At what temperature will the cylinder explode?",
      answer: "Cylinder explodes at 99.5°C (372.5 K).",
      solution: `IDEAL GAS: A gas which obeys all gas laws (Boyle's, Charles', etc.) at all temperatures and pressures, with no intermolecular forces and zero molecular volume.

DERIVATION:
Boyle's law: V ∝ 1/P (at constant T, n)
Charles' law: V ∝ T (at constant P, n)
Avogadro's law: V ∝ n (at constant T, P)
Combining: V ∝ nT/P → V = R(nT/P) → PV = nRT

NUMERICAL:
At constant V (sealed cylinder), P/T = constant.
P₁/T₁ = P₂/T₂
12/300 = 14.9/T₂
T₂ = (14.9 × 300)/12 = 372.5 K = 99.5°C

The cylinder will explode at 99.5°C.`
    },
    {
      id: "c4-sa-5",
      type: "Short",
      source: "Set 6",
      q: "State Graham's law of diffusion. A straight glass tube of length 25 cm has two inlets A and B. NH₃ enters from A and HCl from B at the same time. White fumes of NH₄Cl appear at point M inside the tube. Find the distance of M from A.",
      answer: "M is about 14.6 cm from A.",
      solution: `GRAHAM'S LAW: Under same conditions of T and P, the rate of diffusion (or effusion) of a gas is inversely proportional to the square root of its molar mass.
r₁/r₂ = √(M₂/M₁)

NUMERICAL:
M(NH₃) = 17, M(HCl) = 36.5
Let M be the meeting point. d(A→M) = x, d(B→M) = 25-x
Time taken is same: x/r(NH₃) = (25-x)/r(HCl)
r(NH₃)/r(HCl) = x/(25-x)
√(36.5/17) = x/(25-x)
√2.147 = 1.465 = x/(25-x)
1.465(25-x) = x
36.625 - 1.465x = x
36.625 = 2.465x
x = 14.86 cm

So white fumes appear about 14.86 cm from inlet A (NH₃ side).
(NH₃ diffuses faster because it has lower molar mass.)`
    },
    {
      id: "c4-sa-6",
      type: "Short",
      source: "Set 3",
      q: "Derive the ideal gas equation PV = nRT. Calculate the pressure exerted by 1.5 moles of an unknown gas enclosed in a vessel of 2500 mL at 55°C.",
      answer: "P = 16.16 atm.",
      solution: `DERIVATION: (See Short Answer #4 above for full derivation.)

NUMERICAL:
n = 1.5 mol, V = 2500 mL = 2.5 L, T = 55 + 273 = 328 K
P = nRT/V = (1.5 × 0.0821 × 328)/2.5
P = 40.39/2.5 = 16.16 atm`
    },
    {
      id: "c4-sa-7",
      type: "Short",
      source: "HISSAN 2081",
      q: "Derive combined gas equation. Write one application each of Boyle's and Charles' law. A gas of molecular mass 84.5 g/mol enclosed at 27°C has pressure of 2 atm. Calculate its density.",
      answer: "Density = 6.86 g/L.",
      solution: `COMBINED GAS EQUATION: Combining Boyle's and Charles' laws:
P₁V₁/T₁ = P₂V₂/T₂

DERIVATION:
For fixed mass: V ∝ 1/P (Boyle's, at const T) and V ∝ T (Charles', at const P).
Combined: V ∝ T/P → PV/T = constant → P₁V₁/T₁ = P₂V₂/T₂.

APPLICATIONS:
- Boyle's: Working of syringes, breathing mechanism.
- Charles': Hot air balloons rise as heated air expands.

NUMERICAL:
PV = nRT → P = (m/M)(RT/V) → P = (mass/V)(RT/M)
Density (d) = m/V = PM/RT
d = (2 × 84.5)/(0.0821 × 300) = 169/24.63 = 6.86 g/L`
    },
    {
      id: "c4-sa-8",
      type: "Short",
      source: "HISSAN 2081 (Set B)",
      q: "State Charles' law. How did this law lead to the absolute temperature scale? Plot V vs T graph. 500 cc of gas at 10°C is heated to 30°C at constant pressure. Calculate percentage expansion.",
      answer: "Expansion = 7.06%.",
      solution: `CHARLES' LAW: At constant P, V ∝ T (absolute).

ABSOLUTE TEMPERATURE SCALE:
A V vs T(°C) graph is straight line. Extrapolating to V=0 always gives T = -273.15 °C regardless of gas. This unique point led to defining a new scale where -273.15 °C = 0 K (Kelvin scale).

NUMERICAL:
V₁ = 500 cc, T₁ = 283 K, T₂ = 303 K
V₂ = V₁ × T₂/T₁ = 500 × 303/283 = 535.3 cc
Expansion = V₂ − V₁ = 35.3 cc
% Expansion = (35.3/500) × 100 = 7.06%`
    }
  ]
};

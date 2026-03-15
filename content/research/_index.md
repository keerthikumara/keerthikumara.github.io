---
title:  "Building the quantum future"
description: "Archive of my continuosly evolving thoughts on quantum computing, including quantum advantage, applications, and hardware constraints. Posts are tagged and cross-linked for easy navigation."
---

This is a living archive of my thoughts on the quantum computing space. My goal is to build a roadmap of the industry: defining quantum advantage, identifying its "killer apps," and being honest about the hardware bottlenecks we face today. Explore the links below to find concise breakdowns and visual guides for each topic.




## Quantum Advantage

**Defining the Goal: Quantum Advantage**  
Quantum Advantage is the pragmatic and essential milestone for the field. It is achieved when a quantum computer can solve a useful, real-world problem significantly faster, more accurately, or more cheaply than the best known classical algorithm. Unlike theoretical benchmarks, Advantage is measured by tangible impact in fields like materials science, chemistry, and optimization.

**The Fault-Tolerance Gap**  
While the most ambitious promises of quantum advantage,such as breaking RSA encryption via Shor’s algorithm,capture the global imagination, these tasks require a level of hardware maturity we have yet to reach. To break modern encryption, a quantum computer would likely need to execute circuits with a depth of 10^9 to 10^12 logic gates.

In our current Noisy Intermediate-Scale Quantum (NISQ) era, physical error rates (typically around 10^-3) and limited qubit coherence mean that noise accumulates far faster than we can process. Achieving the "Shor-level" advantage requires Fault-Tolerant Quantum Computing (FTQC), where millions of physical qubits are used to create stable "logical" qubits through error correction. Given the massive overhead required for current error correction codes, this remains a significant, though surmountable, long-term engineering challenge.

**The Emergence of Quantum Utility**  
Despite the distance to full fault tolerance, we have entered the age of Quantum Utility. This is the threshold where quantum processors, though noisy, can perform reliable computations at a scale that challenges brute-force classical simulation. We are seeing this manifest through several key milestones:

- **IBM’s Evidence for Utility:** As demonstrated in their 2023 Nature paper, 127-qubit processors used advanced error suppression to simulate complex magnetic materials (the Ising model) beyond the reach of exact classical methods [@kim2023evidence].
- **Google’s Spin Echo & Many-Body Physics:** Google’s work has shown that we can use techniques like spin echo to preserve coherence and perform quantum computation of molecular geometry via nuclear spin echoes [@google2023spinecho].
- **Sample-Based Quantum Diagonalization:** New algorithmic approaches, such as sample-based quantum diagonalization, are proving that we can extract precise ground-state energies and physical insights from noisy hardware today [@sampbased2024].

**My Research**  
My research has also naturally extended into this region.


### Quantum Applications
Potential applications of quantum computing include cryptography (e.g., breaking RSA), drug discovery via molecular simulation, logistics optimization, and machine learning. These leverage superposition and entanglement to process information in fundamentally new ways.

While fault-tolerant algorithms like Quantum Phase Estimation (QPE) are the "gold standard" for quantum chemistry, they currently remain out of reach due to the lack of large-scale Error Correction (QEC). I will expand on these here as hardware matures. In the meantime, my research explores the immediate frontier of quantum simulation specifically:

**Quantum Simulation:** Methods for simulating many-body physics, such as transmon qutrit-based AKLT systems ([AKLT Project](/opensource/qiskit-aklt/)), quantum simulation of superdiffusion breakdown ([Superdiffusion Breakdown](/publication/journal-article/paper1/)), and Kitaev model work ([Robust Chiral Edge Paper](/publication/journal-article/paper3/)).

Fermionic quantum simulation focuses on systems like electrons in molecules that obey the Pauli exclusion principle, differing from spin simulations by requiring the enforcement of anti-commutation relations. During my internship, I worked on Sample-Based Quantum Diagonalization (SQD) and SKQD, which utilize bitstring samples and Krylov subspaces from a QPU to extract precise energies through classical post-processing. Because these methods often conserve particle number and spin, simulating them is significantly faster than standard statevector approaches, especially when leveraging specialized packages like ffsim that optimize for fermionic gates and orbital rotations [@ffsim].
[@ffsim] Qiskit Community. "ffsim: Fast Fermionic Simulator." https://github.com/qiskit-community/ffsim

### Hardware Constraints
Despite rapid progress, achieving quantum advantage is limited by hardware constraints. Current quantum computers suffer from noise, limited qubit counts, short coherence times, and error rates that make large-scale computations challenging. Overcoming these constraints requires advances in qubit stability, error correction, and scalable architectures.


In summary, while quantum computing holds great promise, realizing its full potential depends on both algorithmic breakthroughs and significant improvements in quantum hardware.

---

## References

[@kim2023evidence] Kim, Y., et al. "Evidence for the utility of quantum computing before fault tolerance." Nature 618, 500–505 (2023). https://doi.org/10.1038/s41586-023-06096-3

[@google2023spinecho] Google Quantum AI. "Quantum computation of molecular geometry via nuclear spin echoes." (2023). https://quantumai.google/static/site-assets/downloads/quantum-computation-molecular-geometry-via-nuclear-spin-echoes.pdf

[@sampbased2024] Robledo-Moreno, Javier, et al. "Sample-based quantum diagonalization: Quantum ground state preparation without controlled time evolution." Science Advances 10, eadu9991 (2024). https://www.science.org/doi/10.1126/sciadv.adu9991

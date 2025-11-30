---
title: Open Source Contributions
date: 2025-11-30
---

## Qiskit Calibration Toolkit & AKLT Simulations

**Organization:** IBM & Qiskit Community  
**Duration:** January 2023 - November 2024  
**Location:** Remote

This repository hosts the **Qutrit Calibration** package, an extension for [Qiskit Experiments](https://github.com/Qiskit/qiskit-experiments) designed to facilitate the calibration of single-qutrit gates. By expanding the standard qubit calibration routines to the third energy level ($|2\rangle$ state), this toolkit enables researchers to explore qutrit physics and higher-dimensional quantum simulations.

**View the project:** [Qutrit Calibration Repository](https://github.com/qiskit-community/qutrit-calibration/tree/main)

### Key Features

The package provides a suite of experiments to tune up the $|1\rangle \leftrightarrow |2\rangle$ transition (EF transition) gates, including `SX12`, `X12`, `Sy12`, `Y12`, and `RZ12`. 

Supported calibration experiments include:

- **Spectroscopy:** `NarrowBandSpectroscopyCal` for identifying the $|1\rangle \leftrightarrow |2\rangle$ transition frequency.
- **Amplitude Calibration:** `RoughEFAmplitudeCal` and `FineEFXAmplitudeCal` for tuning pulse amplitudes.
- **Frequency Calibration:** `RoughEFFrequencyCal` for coarse frequency adjustments.
- **DRAG Calibration:** `RoughEFXDragCal` for optimizing pulse shaping to reduce leakage.

### Research Contributions

Our spin-1 AKLT models directly led to the development and deployment of transmon qutrit calibration codes in the Qiskit Community project:

- Implemented AKLT ground-state simulations on superconducting qubits
- Contributed to transmon qutrit calibration methodology
- Collaborated with the Qiskit Community on quantum circuit optimization

### Usage Example

The toolkit allows users to instantiate a `QutritCalibrations` object directly from a backend and run calibration routines with minimal setup:

```python
from qiskit_qutrit_calibration import library

# Example: Run a rough frequency calibration on the EF transition
exp = library.RoughEFFrequencyCal(
    (qubit_index,), 
    calibrations=cals, 
    backend=backend
)
exp.run()
```

> **Note:** This project is currently in an alpha release state. It serves as a foundational tool for enabling advanced research, such as the simulation of **AKLT models** and other spin-1 many-body systems on superconducting hardware.

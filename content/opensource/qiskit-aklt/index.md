---
title: Qiskit Calibration Toolkit & AKLT Simulations
date: 2023-10-24
summary: An extension for Qiskit Experiments enabling straightforward calibration of single qutrit gates and pulse schedules.
tags:
  - Qiskit
  - Quantum Simulation
  - Qutrits
  - Open Source

# This creates the "Code" button at the top of the page
url_code: "https://github.com/qiskit-community/qutrit-calibration/tree/main"
---

## Project Overview

This repository hosts the **Qutrit Calibration** package, an extension for [Qiskit Experiments](https://github.com/Qiskit/qiskit-experiments) designed to facilitate the calibration of single-qutrit gates. By expanding the standard qubit calibration routines to the third energy level ($|2\rangle$ state), this toolkit enables researchers to explore qutrit physics and higher-dimensional quantum simulations.

### Key Features

The package provides a suite of experiments to tune up the $|1\rangle \leftrightarrow |2\rangle$ transition (EF transition) gates, including `SX12`, `X12`, `Sy12`, `Y12`, and `RZ12`. 

Supported calibration experiments include:

*   **Spectroscopy:** `NarrowBandSpectroscopyCal` for identifying the $|1\rangle \leftrightarrow |2\rangle$ transition frequency.
*   **Amplitude Calibration:** `RoughEFAmplitudeCal` and `FineEFXAmplitudeCal` for tuning pulse amplitudes.
*   **Frequency Calibration:** `RoughEFFrequencyCal` for coarse frequency adjustments.
*   **DRAG Calibration:** `RoughEFXDragCal` for optimizing pulse shaping to reduce leakage.

### Usage

The toolkit allows users to instantiate a `QutritCalibrations` object directly from a backend and run calibration routines with minimal setup:


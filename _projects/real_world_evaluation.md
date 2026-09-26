---
layout: page
title: Real-World Evaluation
description: Multi-center external validation and continuous-monitoring simulation of AKI prediction models — where single-point performance and performance under repeated use can diverge.
category: theme
importance: 3
---

**Research question.** A deployed early-warning model re-predicts every time new measurements arrive, but models are usually compared on a single prediction per patient. Does that single-point performance describe how a model behaves when it is read repeatedly during a stay, and does it carry over to other hospitals?

**Methods.**

- A labeling algorithm that defines AKI onset in electronic health records, as the basis for early-prediction targets.
- Three deep learning architectures (LSTM-Attention, Masked CNN, ITE-Transformer) and two baselines (XGBoost, logistic regression) at 0-, 48-, and 72-hour horizons.
- An online simulation that replays each stay and issues predictions every 12 hours before onset, evaluated for _clinical faithfulness_ (whether discrimination improves consistently as onset approaches, tested with Mann–Kendall trends) and for alert burden (number needed to evaluate).

**Data and validation.** 157,323 admissions from three cohorts: NHIS Ilsan Hospital (development), Chuncheon Sacred Heart Hospital, and MIMIC-IV (external validation). Deep learning models discriminated well externally, but the model with the highest single-point AUROC had the least favourable alert burden in simulation, while a model with lower AUROC had the most favourable one.

**My role.** Co-first author of the _npj Digital Medicine_ study — conceptualization, methodology, software, data curation, formal analysis, validation, and the original draft. First author of the labeling-algorithm paper. At AITRICS, I lead product development of the AKI model toward approval as a medical device by Korea's MFDS.

**Papers.**

- Lee†, Yoon†, Lim, Lee\* & Lee\*. _npj Digital Medicine_, 2026. [doi:10.1038/s41746-026-02722-2](https://doi.org/10.1038/s41746-026-02722-2)
- Lee†, Hahn, Lim, Lee & Lee\*. Development of labeling algorithm for early prediction of acute kidney injury. _MIE 2025_ (Studies in Health Technology and Informatics). [doi:10.3233/SHTI250415](https://doi.org/10.3233/SHTI250415)
- Conference abstracts at AKI & CRRT 2026 on online simulation and prediction horizons, and on nursing-note embeddings from a large language model — see [publications](/publications/#conference-abstracts).

Related co-authored proceedings on evaluating early-prediction models: time-varying alert thresholds, and activity monitoring as an alternative to the ROC curve (_STC 2024_).

Code for this work is not publicly available.

---
layout: page
title: Clinical Prediction
description: Machine learning for specific clinical questions — asthma diagnosis and sepsis risk — validated on later or prospectively collected patients.
category: theme
importance: 2
---

**Research question.** Can a model answer a specific clinical question — does this patient have asthma, is this inpatient developing sepsis — better than the rule clinicians already use, and does the answer hold on patients the model has not seen: later referrals, or a prospective cohort?

**Methods.**

- **Asthma**: five machine learning models (logistic regression, SVM, random forest, XGBoost, neural network) that read the full spirometric response during a methacholine challenge test (FEV1, FVC, FEF25–75), compared with the conventional PC20 ≤ 16 mg/mL criterion; Shapley values reviewed with clinicians.
- **Sepsis**: a deep learning score computed from electronic medical records (VC-SEPS), compared prospectively with conventional scoring systems, including risk stratification at admission and lead time before an operational sepsis definition was met.

**Data and validation.** 1,501 patients referred for methacholine challenge at Samsung Medical Center (2015–2020), split by referral date so that the test set is later than the training set. 6,455 hospitalised patients (325 with sepsis) in a prospective observational study at Keimyung University Dongsan Hospital.

**My role.**

- Asthma — co-first author: cohort definition with clinicians, data extraction from the clinical data warehouse, model development, and Shapley-value review.
- Sepsis — co-first author.

**Papers and code.**

- Kang†, Lee†, Byun, Lee, Choi & Lee\*. _Allergy, Asthma & Immunology Research_, 2024. [doi:10.4168/aair.2024.16.1.42](https://doi.org/10.4168/aair.2024.16.1.42) · [code](https://github.com/Jovinus/Asthma_study)
- Kim†, Lee†, et al. _BMJ Health & Care Informatics_, 2025. [doi:10.1136/bmjhci-2024-101353](https://doi.org/10.1136/bmjhci-2024-101353)

Related co-authored work on deterioration and sepsis prediction: prospective external validation of a general-ward early-warning system (_Acute and Critical Care_, 2025), real-time deterioration prediction in the emergency department (_Scientific Reports_, 2024), and pneumonia-associated sepsis (_Journal of Clinical Medicine_, 2026). See [publications](/publications/).

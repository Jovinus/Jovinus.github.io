---
layout: page
title: Physiological Signal Learning
description: Neural networks on EMG and ECG-derived RR intervals — gesture classification, age prediction, and stress detection — compared with handcrafted features and conventional classifiers.
category: theme
importance: 1
---

**Research question.** Physiological signals are long, noisy, and vary between individuals. Can a model learn directly from raw or minimally processed signals, and how does it compare with established handcrafted features?

**Signals and learning problems.**

- **Surface EMG** (three forearm channels): classification of ten hand and finger gestures, seven of them individual-finger gestures.
- **ECG-derived RR intervals**: classification of four age groups in healthy adults.
- **RR intervals**: detection of acute cognitive stress in major depressive disorder, panic disorder, and healthy controls, from 5-minute and 1-minute windows.

**Models compared.** For EMG, an artificial neural network against SVM, random forest, and logistic regression on time-domain features. For age, a modified ResNet on raw RR intervals against a heart-rate-variability (HRV) feature model and a combined model. For stress, a one-dimensional ResNet-34 on raw RR intervals, trained per diagnostic group and on pooled data.

**Data and validation.** Ten subjects in a prospective EMG experiment (personalized classifiers); RR recordings from 1,093 healthy adults; 147 adults with up to five laboratory visits over 12 weeks, each with a resting baseline and a mental-arithmetic stressor. In the age study the raw-RR model performed comparably to the HRV model, but no model predicted every age group reliably — a pilot result rather than a usable age estimator.

**My role.**

- EMG — co-first author: study protocol and IRB approval, subject recruitment and experiments, real-time filtering, and classifier development.
- Age prediction — first author.
- Stress detection — co-first author: data curation, methodology, software, formal analysis, and validation.

**Papers and code.**

- Lee†, Min† & Byun\*. _Sensors_, 2022. [doi:10.3390/s22010225](https://doi.org/10.3390/s22010225) · [code](https://github.com/Bioelectronics-Laboratory/EMG_hand_finger_gestures_classification)
- Lee† & Byun\*. _Applied Sciences_, 2023. [doi:10.3390/app13052932](https://doi.org/10.3390/app13052932) · [code](https://github.com/Jovinus/Autonomic_Aging)
- Lee†, Cho†, Kim, Jeon\* & Byun\*. _Frontiers in Psychiatry_, 2025. [doi:10.3389/fpsyt.2025.1672260](https://doi.org/10.3389/fpsyt.2025.1672260) · [code](https://github.com/Jovinus/HRV)

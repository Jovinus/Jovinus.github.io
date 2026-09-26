---
layout: about
title: about
permalink: /
subtitle: >
  PhD Student in Digital Health at
  <a href='https://www.saihst.kr/'>SAIHST</a>, Sungkyunkwan University
  &middot; AI Researcher at <a href='https://www.aitrics.com'>AITRICS</a>
  &middot; Co-founder &amp; CEO of <a href='https://breathyou.care'>BreathYou Co., Ltd.</a>

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>Seoul &amp; Suwon</p>
    <p>Republic of Korea</p>
    <p>lkh256 [at] gmail [dot] com</p>

featured_papers: true # representative journal articles from _data/featured_papers.yml, grouped by theme
current_research: >
  <ul class="research-themes">
    <li>
      <a href="/projects/longitudinal_lung_function/">Longitudinal pulmonary function</a>
      <span>Doctoral research on reading repeated screening spirometry as a trajectory to anticipate airflow obstruction. Presented at the ERS International Congress 2026; not yet published.</span>
    </li>
    <li>
      <a href="/projects/continuous_monitoring_evaluation/">Evaluating continuously read clinical models</a>
      <span>Minute-level intraoperative hypotension monitoring and multicenter cardiac arrest prediction. Manuscripts under review; one preprint.</span>
    </li>
  </ul>
beyond_research: >
  I contributed to a cardiac arrest early-warning system at AITRICS that was approved by Korea's MFDS
  as an AI medical device, and I now lead product development of the AKI model toward the same approval.
  In 2025 I co-founded <a href="https://breathyou.care">BreathYou</a>, a respiratory and allergy AI startup
  incorporated as BreathYou Co., Ltd. in August 2026. I also teach
  <a href="/teaching/"><em>Exercise and Digital Healthcare</em></a> at the University of Seoul.
selected_papers: false # fallback bibliography list of papers marked "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false # set to true later when you start blogging
  scrollable: true
  limit: 3
---

<p class="research-headline">AI researcher in physiological and clinical time-series learning</p>

I develop and evaluate machine learning models for physiological signals and longitudinal clinical data, with particular attention to external validation and to how models behave under continuous clinical monitoring. I'm a PhD student in Digital Health at [SAIHST, Sungkyunkwan University](https://www.saihst.kr/), advised by Professor Byung-Jae Lee, and an AI researcher at [AITRICS](https://www.aitrics.com).

My work began with biosignals — EMG and ECG-derived RR intervals — and moved to electronic health records and repeated clinical measurements. The question that connects them: when data arrive as a sequence, how should a model learn from it, and how should the model be evaluated in the conditions where it will be used — at other hospitals, and read repeatedly as new measurements arrive rather than once per patient?

<h2 class="section-heading">research themes</h2>

<ul class="research-themes">
  <li>
    <a href="/projects/#physiological_signals">Physiological signal learning</a>
    <span>Neural networks for EMG gesture classification, and deep learning on raw RR intervals for age prediction and stress detection, compared with handcrafted features.</span>
  </li>
  <li>
    <a href="/projects/#clinical_prediction">Clinical prediction</a>
    <span>Asthma diagnosis from methacholine challenge tests and sepsis risk in hospitalised patients, validated on later referrals and a prospective cohort.</span>
  </li>
  <li>
    <a href="/projects/#real_world_evaluation">Real-world evaluation</a>
    <span>Multi-center external validation and continuous-monitoring simulation of AKI prediction models, where single-point performance and performance under repeated use can diverge.</span>
  </li>
</ul>

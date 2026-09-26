---
layout: page
title: research
permalink: /projects/
description: Three research themes — physiological signal learning, clinical prediction, and real-world evaluation — followed by current work and earlier projects.
nav: true
nav_order: 2
---

<!-- pages/projects.md — themes and current work render in full; older projects as a compact list -->

<p class="pub-note">
  Jump to:
  <a href="#themes">Research Themes</a> &middot;
  <a href="#current">Current Research</a> &middot;
  <a href="#additional">Additional AI Research</a> &middot;
  <a href="#earlier">Earlier Projects</a>
</p>

<h2 id="themes">Research Themes</h2>

{% assign themes = site.projects | where: "category", "theme" | sort: "importance" %}
{% for project in themes %}

<section class="research-project" id="{{ project.slug }}">
  <h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
  {{ project.content }}
</section>
{% endfor %}

<h2 id="current">Current Research</h2>
<p class="pub-note">Work in progress. Status is stated for each item; nothing here is a published journal article yet.</p>

{% assign current = site.projects | where: "category", "current" | sort: "importance" %}
{% for project in current %}

<section class="research-project" id="{{ project.slug }}">
  <h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
  {{ project.content }}
</section>
{% endfor %}

<h2 id="additional">Additional AI Research</h2>

<section class="research-project">
  <h3>Multimodal Emotion Recognition from Speech and Text</h3>
  <p>
    Emotion recognition models that combine audio and text sequences, including a self-supervised contrastive loss. Published as short papers in the Korea Computer Congress proceedings (not journal articles):
  </p>
  <ul>
    <li>Nam† &amp; Lee*. Development and validation of emotion recognition model using audio and text sequences: two heads are better than one. <em>Korea Computer Congress</em>, 2022. Corresponding author.</li>
    <li>Nam†, Lee†, Choi &amp; Ha*. Self-supervised contrastive loss for multimodal emotion recognition. <em>Korea Computer Congress</em>, 2023. Co-first author.</li>
  </ul>
</section>

<h2 id="earlier">Earlier Projects</h2>
<p class="pub-note">Research projects from 2018–2023 at Samsung Medical Center, Incheon National University, and funded national programs.</p>

{% assign earlier = site.projects | where: "category", "earlier" | sort: "importance" %}

<ul class="earlier-projects">
  {% for project in earlier %}
    <li>
      <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
      <div class="pub-note">{{ project.description }}</div>
    </li>
  {% endfor %}
</ul>

<h3 class="pub-subsection">Engineering Projects</h3>

{% assign engineering = site.projects | where: "category", "engineering" | sort: "importance" %}

<ul class="earlier-projects">
  {% for project in engineering %}
    <li>
      <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
      <div class="pub-note">{{ project.description }}</div>
    </li>
  {% endfor %}
</ul>

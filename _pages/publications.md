---
layout: page
permalink: /publications/
title: publications
description: Journal articles, conference papers and abstracts, preprints, and manuscripts under review in clinical AI, digital health, and respiratory medicine.
nav: true
nav_order: 1
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

{% if site.data.citations.metadata %}
{% assign stats = site.data.citations.metadata %}

  <div class="scholar-stats d-flex flex-wrap align-items-center" style="gap: 0.5rem 1rem; margin: 1rem 0; font-size: 0.9rem;">
    <a href="https://scholar.google.com/citations?user={{ site.data.socials.scholar_userid }}" target="_blank" rel="noopener" aria-label="Google Scholar profile">
      <img src="https://img.shields.io/badge/citations-{{ stats.total_citations }}-4285F4?logo=googlescholar&labelColor=beige" alt="Total citations: {{ stats.total_citations }}">
    </a>
    <span class="text-muted">h-index {{ stats.h_index }} &middot; i10-index {{ stats.i10_index }}{% if stats.last_updated %} &middot; Updated {{ stats.last_updated }}{% endif %}</span>
  </div>
{% endif %}

<div class="pub-legend">
  <dl>
    <dt><sup>†</sup></dt>
    <dd>First author. When two or more authors carry <sup>†</sup>, they share first authorship (co-first authors).</dd>
    <dt><sup>*</sup></dt>
    <dd>Corresponding author. More than one <sup>*</sup> marks co-corresponding authors.</dd>
    <dt><sup>†*</sup></dt>
    <dd>Both first and corresponding author.</dd>
    <dt>Tags</dt>
    <dd>The solid tag is the field a paper belongs to (e.g., <strong>Acute &amp; Critical Care</strong>, <strong>Biosignals</strong>). Tinted tags are topics, combined when a paper spans more than one: <strong>Machine Learning</strong> (a model is built or used), <strong>Clinical Research</strong> (a clinical question or cohort), and <strong>Evaluation Framework</strong> (how clinical models are evaluated and reported). Grey outlined tags give the format and how a conference paper was presented.</dd>
    <dt><strong>Bold</strong></dt>
    <dd>Kyung Hyun Lee. The <i class="fa-solid fa-circle-info"></i> icon next to an author list states the markers used in that entry.</dd>
  </dl>
</div>

<p class="pub-note">
  Jump to:
  <a href="#journal-articles">Journal Articles</a> &middot;
  <a href="#conference-papers">Conference Papers</a> &middot;
  <a href="#in-progress">In Progress</a>
</p>

<h2 id="journal-articles">Journal Articles</h2>
<p class="pub-note">Peer-reviewed articles published in journals.</p>

<div class="publications">

{% bibliography --query @article %}

</div>

<h2 id="conference-papers">Conference Papers</h2>
<p class="pub-note">Proceedings papers, workshop papers (non-archival), and accepted abstracts, each marked with how it was presented.</p>

<div class="publications">

{% bibliography --query @inproceedings @misc %}

</div>

<h2 id="in-progress">In Progress</h2>
<p class="pub-note">Preprints and manuscripts under review. Neither has completed peer review; they are listed only to show ongoing work.</p>

<div class="publications publications-inreview">

{% bibliography --query @unpublished --group_by none %}

{% bibliography --file papers_inreview --group_by none %}

</div>

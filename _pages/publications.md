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
    <dt><strong>Bold</strong></dt>
    <dd>Kyung Hyun Lee. The <i class="fa-solid fa-circle-info"></i> icon next to an author list states the markers used in that entry.</dd>
  </dl>
</div>

<p class="pub-note">
  Jump to:
  <a href="#journal-articles">Journal Articles</a> &middot;
  <a href="#conference-papers">Conference Papers and Abstracts</a> &middot;
  <a href="#preprints">Preprints</a> &middot;
  <a href="#under-review">Under Review</a>
</p>

<h2 id="journal-articles">Journal Articles</h2>
<p class="pub-note">Peer-reviewed articles published in journals.</p>

<div class="publications">

{% bibliography --query @article %}

</div>

<h2 id="conference-papers">Conference Papers and Abstracts</h2>

<h3 id="conference-proceedings" class="pub-subsection">Proceedings Papers</h3>
<p class="pub-note">Short papers published in peer-reviewed conference proceedings.</p>

<div class="publications">

{% bibliography --query @inproceedings %}

</div>

<h3 id="conference-abstracts" class="pub-subsection">Abstracts and Presentations</h3>
<p class="pub-note">Accepted abstracts presented as posters or talks; not full papers.</p>

<div class="publications">

{% bibliography --query @misc %}

</div>

<h2 id="preprints">Preprints</h2>
<p class="pub-note">Manuscripts posted to preprint servers. Preprints have not been peer reviewed and are not journal publications.</p>

<div class="publications">

{% bibliography --query @unpublished %}

</div>

<h2 id="under-review">Under Review</h2>
<p class="pub-note">Submitted manuscripts currently in peer review. They are not accepted or published and are listed only to show ongoing work.</p>

<div class="publications publications-inreview">

{% bibliography --file papers_inreview %}

</div>

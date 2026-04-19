# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

Personal academic homepage for Kyung Hyun Lee (PhD Student, AITRICS researcher, BreathYou co-founder), served at **kh.breathyou.care**. Built on the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme. Pushes to `main` trigger a GitHub Pages rebuild.

AGENTS.md (imported below) covers the theme's generic build/test/format workflow and instruction files for each content type. This document captures **site-specific conventions** that aren't in the upstream theme docs.

@AGENTS.md

## Most-edited files

| Area | File(s) |
| --- | --- |
| Hero / landing copy | `_pages/about.md` |
| CV data (rendercv format) | `_data/cv.yml` |
| Publications | `_bibliography/papers.bib` |
| Projects | `_projects/*.md` |
| People (Collaborators / Mentees) | `_pages/profiles.md` + `_pages/about_*.md` |
| News line | `_news/*.md` |
| Teaching | `_pages/teaching.md` (plain markdown; the `teachings` collection has been removed) |
| Contact / socials | `_data/socials.yml` |
| Scholar stats cache | `_data/citations.yml` (auto-updated — see below) |

## Site-specific conventions

### Publications (`_bibliography/papers.bib`)

- **First/corresponding-author markers are embedded in the surname**: `author={Lee†, Kyung Hyun ...}` for first/co-first, `author={... and Lee*, Kyung Hyun}` for corresponding. The theme's `_layouts/bib.liquid` (lines 62–64) strips `†*‡§¶‖&^` from surnames before self-matching and wraps them in `<sup>` tags for rendering — do not "clean up" the author field or self-name bolding will break. The `publications.md` page has a bottom legend explaining the symbols.
- **`annotation` field text** is standardized. Allowed values:
  - `† First author` — Lee is listed first
  - `† Co-first author` — Lee has `†` but is not the first-listed author
  - `* Corresponding author`
  - Combinations, e.g., `† Co-first author · * Corresponding author`
- `annotation` is in `filtered_bibtex_keywords` (`_config.yml`), so it renders only as a popover on the ⓘ icon next to the authors — not inline.
- **`code={URL}`** on an entry renders a "Code" button on the publications page. Use this to link GitHub repos from the paper they belong to.
- Author first-name variants accepted by jekyll-scholar are declared in `_config.yml` under `scholar.first_name` — both `Kyung Hyun` and `KyungHyun` map to the same person. Prefer `Kyung Hyun` (with space) for new entries.

### People page (`_pages/profiles.md`)

- The `_layouts/profiles.liquid` layout has a small customization: if a profile entry has a `section:` field, it renders as an `<h2 class="people-section">` before that entry. This is how the page is split into **Collaborators** and **Mentees**. Put `section: Collaborators` on the first collaborator and `section: Mentees` on the first mentee.

### Hidden-but-reachable pages

- `_pages/blog.md` and `_pages/books.md` both have `published: false` — they will render once that flag is removed. When the user starts blogging, drop `published: false` and set `nav: true`. `/repositories/` is also `nav: false` (still at the URL) because code links live in publications via `code=`.

### Korean-language policy

Public content is English-only. Korean parentheticals (e.g., `(남영우)`, `(학생설계융합전공)`) have been stripped across `_pages/`, `_projects/`, and `_data/`. Do not reintroduce them without the user's explicit ask.

### Degree and advisor naming (CV)

- `studyType` uses full names: `Bachelor of Science`, `Master of Science`, `PhD Student`.
- References use possessive form: `Bachelor's advisor`, `Master's advisor`, `Doctoral advisor` — match this if adding new references.

## Scholar automation

Three scheduled GitHub Actions keep publications and citation counts fresh:

- `.github/workflows/update-citations.yml` — runs `bin/update_scholar_citations.py` Mon/Wed/Fri at 00:00 UTC; updates `_data/citations.yml` and commits.
- `.github/workflows/update-publications.yml` — runs the publications sync (see the workflow file).
- `.github/workflows/render-cv.yml` — renders the CV PDF.

The publications page (`_pages/publications.md`) reads `_data/citations.yml.metadata` to render the citations badge and the `h-index · i10-index · Updated YYYY-MM-DD` line at the top.

Do not hand-edit `_data/citations.yml` — it will be overwritten by the next scheduled run.

## Identity facts (keep consistent across pages)

- **Role**: PhD Student in Digital Health at SAIHST · Researcher at AITRICS · Co-founder & CEO of BreathYou
- **Advisor (PhD)**: Prof. Byung-Jae Lee
- **SAIHST URL**: `https://www.saihst.kr/` (not `saihst.skku.edu`)
- **Public email**: `lkh256@gmail.com` (used in `_config.yml`, `_data/cv.yml`, `_data/socials.yml`, and the obfuscated `about.md` address line)
- **BreathYou role**: Co-founder (not sole founder) — Dayoon Lee is the other co-founder.

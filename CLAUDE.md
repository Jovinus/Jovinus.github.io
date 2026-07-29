# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

Personal academic homepage for Kyung Hyun Lee (PhD Student, AITRICS researcher, BreathYou co-founder), served at **kh.breathyou.care**. Built on the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme. Pushes to `main` trigger a GitHub Pages rebuild.

AGENTS.md (imported below) covers the theme's generic build/test/format workflow and instruction files for each content type. This document captures **site-specific conventions** that aren't in the upstream theme docs.

@AGENTS.md

## Most-edited files

| Area                             | File(s)                                                                            |
| -------------------------------- | ---------------------------------------------------------------------------------- |
| Hero / landing copy              | `_pages/about.md`                                                                  |
| CV data (rendercv format)        | `_data/cv.yml`                                                                     |
| Publications                     | `_bibliography/papers.bib`                                                         |
| Projects                         | `_projects/*.md`                                                                   |
| People (Collaborators / Mentees) | `_pages/profiles.md` + `_pages/about_*.md`                                         |
| News line                        | `_news/*.md`                                                                       |
| Teaching                         | `_pages/teaching.md` (plain markdown; the `teachings` collection has been removed) |
| Blog posts                       | `_posts/*.md`                                                                      |
| Contact / socials                | `_data/socials.yml`                                                                |
| Scholar stats cache              | `_data/citations.yml` (auto-updated — see below)                                   |

## Site-specific conventions

### Publications (`_bibliography/papers.bib`)

- **First/corresponding-author markers are embedded in the surname** on _any_ author, not just Lee: e.g., `Kang†, Danbee` (co-first), `Shin*, Soo-Yong` (corresponding), `Jae†*, Sae Young` (first + corresponding — combine markers consecutively). The theme's `_layouts/bib.liquid` (lines 62–64) strips `†*‡§¶‖&^` from surnames before self-matching and wraps them in `<sup>` tags for rendering — do not "clean up" the author field or self-name bolding will break. The `publications.md` page has a bottom legend explaining the symbols.
- **`annotation` field text** is standardized and describes the markers used in that entry. Allowed values:
  - `† First author` — a single first author
  - `† Co-first author` — multiple first authors sharing credit
  - `* Corresponding author`
  - Combinations, e.g., `† Co-first author · * Corresponding author`
- `annotation` is in `filtered_bibtex_keywords` (`_config.yml`), so it renders only as a popover on the ⓘ icon next to the authors — not inline.
- **Author names use bibtex `Lastname, Firstname` order** (e.g., `Lee, Kyung Hyun` — not the reversed `Kyung Hyun, LEE`). When the full author list is known, expand `and others` to the complete list rather than truncating — several papers list 15+ explicit authors to keep corresponding-author `*` markers visible.
- **`code={URL}`** on an entry renders a "Code" button on the publications page. Use this to link GitHub repos from the paper they belong to.
- Author first-name variants accepted by jekyll-scholar are declared in `_config.yml` under `scholar.first_name` — both `Kyung Hyun` and `KyungHyun` map to the same person. Prefer `Kyung Hyun` (with space) for new entries.

### People page (`_pages/profiles.md` + `_pages/about_*.md`)

- The `_layouts/profiles.liquid` layout has a small customization: if a profile entry has a `section:` field, it renders as an `<h2 class="people-section">` before that entry. Currently three sections: **Advisors**, **Collaborators**, **Mentees**. Put `section: <name>` on the first entry of each group.
- Each profile needs both a `more_info` block (in `profiles.md`) and a content file (`_pages/about_*.md`) with the prose description. Keep the two in sync when editing.
- **Image filenames** follow `surname_firstname.{jpg,png}` (e.g., `lee_byungjae.jpg`, `byun_sangwon.jpg`, `kang_mira.jpg`). Save photos in `assets/img/` square-cropped (1:1). For portrait-orientation headshots, use a top-anchored crop (via PIL) to keep the face in frame rather than `sips -c` center-crop.
- `align: left` / `align: right` alternates down the page; when inserting a new entry, flip subsequent entries so the alternation continues cleanly.
- **Advisors section** is ordered reverse-chronological (most recent first): PhD → master's → undergraduate.
- Under-review manuscripts live in `_bibliography/papers_inreview.bib`. Reference them in an `about_*.md` entry when relevant, even if the person isn't on the bib author list yet (some in-review entries intentionally omit authors).

### People page tone (`_pages/about_*.md`)

Academic register with quiet warmth — the user is INFJ. No editorial flourishes ("the clinician whose reality checks push the modeling work..."), no startup slang ("ships real models"), no Kyung Hyun-centric framing ("project that grew out of Kyung Hyun's earlier study"). Prefer mutual phrasing: "collaborating with Kyung Hyun on X" over "Kyung Hyun mentored him on X." Paper citations use italicized journal + year: `*Journal of Clinical Medicine*, 2026`.

**Korean clinical-track title mapping** (distinct from academic-track Professor/Associate/Assistant — verify the track before writing):

- 임상교수 → Clinical Professor
- 임상 부교수 → Clinical Associate Professor
- 임상 조교수 → Clinical Assistant Professor

**SKKU + SMC appointments**: many SMC physicians hold SKKU clinical titles but their primary affiliation is Samsung Medical Center. For SAIHST advising roles, they're 참여 교원 → "participating faculty" (not School of Medicine faculty). Check `_data/cv.yml` References section for the authoritative affiliation/title of each advisor. SMC's English name for 건강검진센터 / 건강의학본부 is **"Health Promotion Center."**

### Hidden-but-reachable pages

- `/repositories/` is `nav: false` (still live at the URL) because code links live in publications via `code=`.
- The blog is live at `/blog/` (`nav_order: 1`), backed by `_posts/`. `_pages/news.md` has no `nav` entry; news items surface on the about page.

### Korean-language policy

Public content is English-only. Korean parentheticals (e.g., `(남영우)`, `(학생설계융합전공)`) have been stripped across `_pages/`, `_projects/`, and `_data/`. Do not reintroduce them without the user's explicit ask.

### Degree and advisor naming (CV)

- `degree` uses full names: `Bachelor of Science`, `Master of Science`, `PhD Student`. The classic theme's default `degree_width` of `1cm` hyphen-breaks these across four lines, so `assets/rendercv/design.yaml` widens it to `3.2cm`.
- References use possessive form: `Bachelor's advisor`, `Master's advisor`, `Doctoral advisor` — match this if adding new references.

### `_data/cv.yml` serves two consumers

`_data/cv.yml` is read by **both** rendercv (→ the PDF, via `render-cv.yml`) and the Jekyll layout (→ `/cv/`, via `_layouts/cv.liquid` + `_includes/cv/*.liquid`). rendercv's schema is authoritative because it hard-fails on mismatch; the Liquid side is ours to adapt. Two rules follow:

1. **Only rendercv field names carry into the PDF.** Entries tolerate unknown keys silently — the entry still validates, and the extra content simply vanishes from the PDF. That is how `awarder`, `issuer`, `reference`, and `keywords` were being dropped. `level` and `icon` remain as deliberate web-only extras.
2. **The `cv:` object itself rejects unknown keys**, so there is nowhere to stash Jekyll-only metadata. `label` → `headline` (rendercv's own field), and the professional summary lives in a `Summary` **section** (a bare string = a text entry), which `cv.liquid` renders as the Professional Summary card and skips in its section loop.

Current mapping, if you add or edit an entry:

| Section          | rendercv entry type | Field usage                                                     |
| ---------------- | ------------------- | --------------------------------------------------------------- |
| Education        | EducationEntry      | `institution`, `area`, `degree`; `url` is web-only              |
| Experience       | ExperienceEntry     | `company`, `position`; `url` is web-only                        |
| Awards           | NormalEntry         | `summary` = awarding body, `highlights` = description           |
| Academic Service | OneLineEntry        | `label` = journal, `details` = role + count + year              |
| Certificates     | NormalEntry         | `summary` = issuing body                                        |
| Skills           | OneLineEntry        | `label` = category, `details` = keyword string                  |
| Languages        | NormalEntry         | `name` + `summary`                                              |
| References       | NormalEntry         | `summary` = affiliation text (markdown links render in the PDF) |

Peer review goes under **Academic Service** — journal name and review count only, never manuscript details. ORCID (in `cv.social_networks`, public) is the verification path.

Validate locally before pushing — `render-cv.yml` is the only other check, and it takes minutes:

```bash
pip install -r requirements.txt
rendercv render _data/cv.yml --settings assets/rendercv/settings.yaml \
  --design assets/rendercv/design.yaml --locale-catalog assets/rendercv/locale.yaml
```

**`--design` and `--locale-catalog` are mandatory.** rendercv 2.8 validates `settings.render_command.design` / `.locale` (it errors when the file is missing) but never applies their contents, so pointing at design.yaml from settings.yaml silently rendered with theme defaults. The flag is `--locale-catalog`; plain `--locale` is parsed as a YAML-location override and crashes with a `KeyError`.

## Upstream theme features removed from this fork

The al-folio theme ships a lot of machinery this site never uses. The following were deliberately deleted — **do not restore them from upstream** unless the user asks:

| Removed                                                                                                                                                                                              | Why                                                                     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `_books/`, `_pages/books.md`, `_layouts/book-{shelf,review}.liquid`, `assets/img/book_covers/`                                                                                                       | Bookshelf feature, never populated                                      |
| `_includes/courses.liquid`, `_includes/course_schedule.liquid`, `_layouts/course.liquid`, `_sass/_teachings.scss`                                                                                    | Remnants of the `teachings` collection; teaching page is plain markdown |
| JSONResume CV path (`assets/json/resume.json`, `jekyll_get_json`/`jsonresume` config, `jekyll-get-json` plugin)                                                                                      | CV renders from `_data/cv.yml` (rendercv) only                          |
| `assets/{audio,plotly,jupyter,video,html,bibliography}/`, `assets/img/{1..12}.jpg`, `rhino.png`, `template_error.png`, `prof_pic_color.png`, `assets/pdf/example_pdf.pdf`, `Albert_Einstein_CV.pdf`  | Theme demo media, zero references (~35 MB)                              |
| `lighthouse_results/`, `readme_preview/`, `.all-contributorsrc`, `.github/{ISSUE_TEMPLATE,stale.yml,release.yml}`                                                                                    | Upstream repo maintenance, irrelevant to a personal fork                |
| Workflows: `axe`, `codeql`, `lighthouse-badger`, `deploy-image`, `deploy-docker-tag`, `docker-slim`, `broken-links`, `copilot-setup-steps`, `prettier-html`, `prettier-comment-on-pr`, `update-tocs` | Upstream CI for theme development                                       |
| TikZJax (`assets/css/tikzjax.min.css`, `assets/js/tikzjax.min.js`, and the `{% if page.tikzjax %}` blocks in `head.liquid` / `scripts.liquid` / `distill_scripts.liquid`)                            | 8.8 MB, loaded only for pages with `tikzjax: true`; no page uses it     |
| Vendored source maps (`mdb.min.css.map`, `bootstrap.min.css.map`, `bootstrap.bundle.min.js.map`, `distillpub/*.js.map`) + `sass: sourcemap: never`                                                   | 2.8 MB of debug artifacts shipped to production                         |

When deleting a vendored `*.map`, also strip the trailing `sourceMappingURL` pragma from its `.min` file — otherwise browsers 404 on it with devtools open. That has already been done for the five files above.

Still present but unused, kept intentionally: the blog subsystem's optional pieces (distill layout, giscus/disqus, newsletter), and the `jekyll-jupyter-notebook` / `jekyll-twitter-plugin` gems.

Built-site size after the trim: **14 MB** (was 25 MB).

Surviving workflows: `deploy.yml`, `prettier.yml`, `render-cv.yml`, `update-citations.yml`, `update-publications.yml`, `test-scholar-sync.yml`, `broken-links-site.yml`.

## Scholar automation

Three scheduled GitHub Actions keep publications and citation counts fresh:

- `.github/workflows/update-citations.yml` — runs `bin/update_scholar_citations.py` Mon/Wed/Fri at 02:37 UTC; updates `_data/citations.yml` and commits.
- `.github/workflows/update-publications.yml` — runs the publications sync quarterly (see the workflow file).
- `.github/workflows/render-cv.yml` — renders the CV PDF.

The publications page (`_pages/publications.md`) reads `_data/citations.yml.metadata` to render the citations badge and the `h-index · i10-index · Updated YYYY-MM-DD` line at the top.

Do not hand-edit `_data/citations.yml` — regenerate it by running the script instead (see below).

### Google Scholar blocks GitHub Actions IPs

This is the single most important fact about these workflows. Google Scholar refuses requests from datacenter IP ranges, so a scheduled Actions run fails intermittently — while the identical fetch from a laptop finishes in about 7 seconds. It is an environment problem, not a bug in the scripts. **Do not "fix" it by rewriting the fetch logic.**

The failure contract:

| Exit code | Meaning                                                      | Workflow behaviour                                                                |
| --------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| `0`       | Success                                                      | Commits any change                                                                |
| `75`      | `ScholarUnavailable` — blocked, refused, or empty response   | Warning only, job passes — **unless** `citations.yml` is > 14 days old, then fail |
| `124`     | `timeout(1)` killed a hung fetch                             | Treated as `75`                                                                   |
| `1`       | Anything real: bad config, incomplete metrics, write failure | Fails immediately                                                                 |

`ScholarUnavailable` subclasses `RuntimeError` so `except ScholarUnavailable` catches only fetch failures, while a plain `RuntimeError` (bad data we _did_ receive) still hard-fails. Keep that relationship if you touch the scripts — `tests/test_scholar_sync.py` asserts it.

Two ways to get fresh data when Actions is being blocked:

1. **Run it locally** (works reliably from a residential IP), then commit:
   ```bash
   python bin/update_scholar_citations.py
   ```
2. **Add a `SCRAPER_API_KEY` repository secret.** `configure_proxy()` in both scripts already routes through ScraperAPI when the secret exists; no code change needed. This is the only way to make the scheduled runs succeed unattended.

## Identity facts (keep consistent across pages)

- **Role**: PhD Student in Digital Health at SAIHST · Researcher at AITRICS · Co-founder & CEO of BreathYou
- **Advisors**: **PhD** — Prof. Byung-Jae Lee · **Master's** — Prof. Mira Kang · **Undergraduate** — Prof. Sangwon Byun
- **SAIHST URL**: `https://www.saihst.kr/` (not `saihst.skku.edu`)
- **Public email**: `lkh256@gmail.com` (used in `_config.yml`, `_data/cv.yml`, `_data/socials.yml`, and the obfuscated `about.md` address line)
- **BreathYou role**: Co-founder (not sole founder) — Dayoon Lee is the other co-founder.

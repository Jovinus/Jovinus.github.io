# Kyung Hyun Lee — Personal Homepage

Source for [kh.breathyou.care](https://kh.breathyou.care), my academic/personal homepage.

Built on [al-folio](https://github.com/alshedivat/al-folio) (Jekyll) and deployed via GitHub Pages.

## Local development

```bash
docker compose pull && docker compose up
# Site serves at http://localhost:8080
```

Rebuild after changing dependencies or the Dockerfile:

```bash
docker compose up --build
```

## Deployment

Pushes to `main` trigger a GitHub Pages rebuild automatically. The live site is served at the domain configured in `_config.yml` (`url:`).

## Layout

- `_pages/` — top-level pages (about, publications, projects, cv, people, teaching, blog)
- `_posts/` — blog posts
- `_projects/` — individual project entries
- `_bibliography/papers.bib` — publications (rendered via jekyll-scholar)
- `_data/` — structured data (CV, socials, citations, repositories)
- `_news/` — short news items shown on the about page
- `assets/` — images and static files
- `bin/`, `tests/` — Google Scholar sync scripts and their tests

## License

Site content © Kyung Hyun Lee. The underlying al-folio theme is MIT-licensed.

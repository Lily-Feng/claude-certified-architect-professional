# Claude Architect Study Atlas

An independent, public study companion for **Claude Certified Architect – Professional (CCAR-P)**.

**[Open the live study site](https://lily-feng.github.io/claude-certified-architect-professional/)** · **[Take the mock exam](https://lily-feng.github.io/claude-certified-architect-professional/#/exam)**

## What is included

- Seven navigable domain chapters, a getting-started guide, a glossary, and a quick-review checklist.
- Search, chapter printing, saved reading progress, and a source library with 20 primary/course references.
- Exactly **63 original practice items**: 42 single-answer (4 choices), 14 select-two (6 choices), and 7 matching exercises (6 dropdown rows).
- A 120-minute timed mock, untimed study mode, and domain-specific practice.
- Shuffled question and choice order, flags, incomplete-item navigation, automatic local saving, and recovery after reload.
- Answer rationales, source links, domain-level results, and a downloadable practice report.
- Explicit mappings for all 33 supplied study objectives.

## Alignment and provenance

The blueprint follows the owner-supplied *Claude Certified Architect – Professional Exam Guide*, version 1.0, effective July 2026. Its seven domain weights are 17%, 13%, 19%, 16%, 14%, 14%, and 7%. The mock approximates these with 11, 8, 12, 10, 9, 9, and 4 questions.

The [official Academy path](https://anthropic-partners.skilljar.com/path/claude-certified-architect-professional) and its five course listings were verified in an authenticated session. Study chapters synthesize the owner’s notes. Public technical and governance references were checked on September 18, 2026. Listing verification does not claim a full re-audit of every course lesson.

Practice scenarios are fictional instructional examples, not live exam questions or claims about actual deployments. Dropdown exercises are a supplemental learning format: the supplied guide specifies multiple-choice and multiple-response items but does not confirm this exact dropdown format. Gated course files and the supplied PDF are not redistributed.

This project is **not affiliated with or endorsed by Anthropic**. Product behavior and exam policies may change; linked primary sources take precedence over this guide.

## Scoring

Each item earns one point only for a fully correct response. Select-two items require exactly both correct choices. Matching requires all six rows correct. Incomplete answers receive zero, with no penalty beyond the missed point. This is this site’s practice rule, not a claim about undisclosed live-exam scoring.

The guide’s scaled passing score of 720 is **not** a raw 72% threshold. No conversion or pass prediction is provided. Study mode may reveal answers before submission and is identified in results.

Timed attempts use an absolute saved deadline. Reloading, navigating to a chapter, or leaving the tab does not pause time. When an expired attempt is next processed, it submits automatically. This is a study tool, not a secure proctoring system; the answer bank is intentionally part of the public source.

## Develop locally

Requirements: Node.js 20+; Python 3 for the convenience preview command. There are no npm package dependencies and no external script or font requests.

```sh
npm test
npm run build
npm run dev
# Open http://localhost:4173
```

You can also open `index.html` directly because the generated data bundle is included. A local server gives more consistent browser storage behavior.

## Content maintenance

| File | Purpose |
|---|---|
| `content/questions.json` | Stable IDs, domain, format, answer key, rationale, objective, references |
| `content/lessons.json` | Chapter sections, study tables, and source keys |
| `content/objectives.json` | Supplied objective-to-question mapping |
| `content/domains.json` | Blueprint weights and integer mock allocations |
| `content/sources.json` | Primary reference URLs and provenance notes |
| `assets/core.js` | Pure scoring, shuffle, persistence validation, deadline logic |
| `assets/app.js` | Browser interface and state handling |

Edit the JSON source files, run tests, and rebuild `assets/data.js` before committing. Keep each answer defensible under its scenario’s stated constraints. When incompatible content/schema changes would invalidate saved attempts, increment the core version and storage key.

## GitHub Pages

`.github/workflows/pages.yml` runs tests, builds a minimal `dist/` artifact, and deploys using GitHub Pages. Repository Settings → Pages should use **GitHub Actions**. Deployment occurs on pushes to `main` or a manual workflow dispatch. Asset paths are relative so the project subpath works correctly.

## Privacy

Reading progress and one current/latest attempt are stored only in the browser’s local storage. There is no analytics script, login, backend, or remote score submission. GitHub Pages handles normal web hosting requests. Starting a new attempt replaces the saved one; download a report first if you want to retain it. Reset clears this site’s local saved progress.

## Verification

Automated tests cover all 63 schemas and source mappings, domain allocation, exact-match scoring, option shuffling, serialization, deadline boundaries, and the 33-objective map. Browser checks cover single/multi/dropdown interactions, selection limits, flags, reload recovery, submission, domain reports, reading progress, and mobile layout.

# Hemu Wellness — homepage mockup 2 (rebuilt)

A static homepage concept for **Hemu Wellness Centre**, Solaris Dutamas, Kuala Lumpur.

**Rebuilt from scratch** against the MyHealthPrac reference supplied by the client —
warm full-bleed hero with corner-anchored type, oversized light-weight statements,
an edge-bleeding image rail, and a hairline pillar grid. This replaces the earlier
Healia-template build entirely.

Positioned on **women's health**, matching mockup 1: fertility support alongside IVF
and IUI, cycle and uterine care, pregnancy and postpartum, and menopause.

No build step. Open `index.html`, or serve the folder:

```bash
python3 -m http.server 8000
```

## Files

| File | What's in it |
| --- | --- |
| `index.html` | All page content — copy lives here, not in a config file |
| `styles.css` | Whole design system. Palette + photo grades at the top |
| `script.js` | Hero carousel, drag-scroll rail, mobile drawer, scroll reveals |
| `images/` | Photographs, warm-graded in CSS to read as one shoot |

Both `styles.css` and `script.js` are loaded with a `?v=` query. **Bump it whenever
you edit either file** — otherwise browsers keep serving the cached copy.

## Design system (from the reference)

- **Instrument Sans** for everything Latin, **Noto Serif SC** for Chinese
- Paper `#F1F0ED` · ink `#111111` · muted `#6E6C68` · hairline `#DAD8D2` · deep `#14120F`
- Display type is **400 weight at huge sizes with -0.042em tracking** — that light,
  tight setting is the reference's signature, not an oversight
- Section tags are a small asterisk mark plus a sentence-case line
- Pills carry a circular arrow badge; the arrow, asterisk, hero marks and pillar glyphs
  are all CSS masks — no icon font, no SVG files

## What was carried across from mockup 1

- The women's-health positioning and all four stages
- 治病求本 / "A symptom is where the body speaks. It is rarely where the trouble began."
- The full treatment list with Chinese names, including Moxibustion 艾灸
- The cycle/sleep/digestion "one system" line
- The Taiwan herb sourcing and batch-testing detail
- "Come and sit with us a while", address, hours, contact
- The footer disclaimer

## The pregnancy arc section

Sits directly after the hero, before the "Ready to stop guessing" statement, so the
fertility and pregnancy work is the first thing on the page after the fold.

Tag + big statement, a full-bleed warm band, then three hairline-separated stages —
**备孕** (before, trying to conceive) · **安胎** (during, through pregnancy) ·
**产后调理** (after, the fourth trimester) — closing on a note that we work alongside
the fertility clinic and obstetrician rather than instead of them.

## Hero carousel

Three slides on a **2-second hold**, matching mockup 1. Background, headline and
sub-line rotate together; the three marks and the CTA stay fixed. Bars are clickable,
it pauses on hover and in background tabs, and it does not autoplay under
`prefers-reduced-motion`.

`HOLD` is a single constant at the top of the carousel block in `script.js`.

Text fades at 0.3s while the background fades at 0.55s — stacked headlines ghost
through each other if both run at the same speed.

## The image rail

The reference's cards lead with a large lab value (74 ng/mL, 310 U/L). Hemu has no
lab data and inventing biomarker readings for a real clinic is not on, so the **Chinese
term takes that visual role** — 备孕, 调经, 产后调理, 更年期, 筋骨, 中药 — with the
English name and category underneath. Same composition, nothing fabricated.

Drag or scroll horizontally; the rail bleeds off both edges as in the reference.

## ⚠️ Everything factual is still a placeholder

- **The name reading.** "Hemu" is pinyin *hémù*. The page uses **和睦** (harmony); it
  could equally be **禾木**. Still needs confirming.
- Address, hours, email, WhatsApp, WeChat, Instagram and Xiaohongshu are dummies.
  Every CTA points at `#visit`.
- "A full hour", "seven ways in", "six treatments, two disciplines" are derived from
  our own copy, not from the client.
- No practitioner names, credentials or T&CM registration numbers yet.
- **No testimonials** — the clinic has zero reviews and inventing patient quotes is
  not something to ship.

## ⚠️ Advertising law

Under Malaysia's **Medicines (Advertisement and Sale) Act 1956**, *infertility* is a
scheduled restricted condition; advertising a **treatment claim** for it needs Medicine
Advertisements Board approval. Practitioners must also be registered under the
**T&CM Act 2016 (Act 775)**.

Leading on fertility is fine — promising an outcome is not. Every fertility line here is
framed as **support alongside** medical treatment:

- ✅ "Support alongside IVF and IUI, or while you are trying naturally"
- ✅ "We work with your fertility clinic and your doctor, never instead of them"
- ❌ never "helps you get pregnant", "treats infertility", "improves IVF success rates"

The footer carries a results-vary disclaimer. Keep all of this, and route any new
fertility copy past the client's compliance check before launch.

## Images

Stock from Unsplash and Pexels, free for commercial use without attribution. Shared
with mockups 1 and 3 so the three concepts stay consistent. All placeholders — replace
with real clinic photography after the renovation.

A few images in the folder are unreferenced after the rebuild (`benefit-calm`,
`detail-needles`, `hero-inset`, `tx-cupping`, `tx-tuina`, `tx-womens`, `visit-detail`);
they are kept as spares for further iterations.

## Known gaps

- Nav links are in-page anchors; there are no other pages.
- WhatsApp buttons are inert.
- English only; the Chinese is decorative rather than a language toggle.

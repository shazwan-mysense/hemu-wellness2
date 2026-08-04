# Hemu Wellness — homepage mockup 2

A second static homepage concept for **Hemu Wellness Centre**, Solaris Dutamas, Kuala Lumpur.
This one rebuilds the **Healia** medical/healthcare template (unifato.com/healia) with Hemu's
own content — floating pill nav, split dark/photo hero, parenthetical section labels,
two-tone headlines, bento cards, dark feature bands, step tabs, pricing card and FAQ.

No build step. Open `index.html`, or serve the folder:

```bash
python3 -m http.server 8000
```

## Files

| File | What's in it |
| --- | --- |
| `index.html` | All page content — copy lives here, not in a config file |
| `styles.css` | Whole design system. Palette + `--grade` photo filter at the top |
| `script.js` | Mobile drawer, first-visit step tabs, scroll reveals |
| `images/` | 13 photographs, warm-graded in CSS to read as one shoot |

## Design system (taken from the Healia template)

- **Golos Text** for everything Latin, **Noto Serif SC** for Chinese
- Cream `#FDF6EE` · card `#F8EEE2` · espresso `#3C2219` · coral `#F38660`
- Muted body `#897770` · second headline line `#B29C94` · border `#E3D6D1`
- Radii 8 / 12 / 16 / 22px, pill buttons and nav
- Headlines are **light weight and large** — that is the template's signature, not a mistake
- The four-dot flower mark and button glyph are pure CSS, no icon font or SVG file

Healia's palette turned out to be very close to what mockup 1 already used, so the two
concepts sit in the same brand family despite completely different layouts.

## What carried over from mockup 1

All the Hemu copy is the same, reused verbatim where it fit:

- Hero headline and lead paragraph
- "Care for people who choose harmony"
- The unhurried-first-visit and pulse/tongue/history language
- "Acupuncture, cupping and tui na work on one system from different angles…"
- The Taiwan herb sourcing and batch-testing line
- 治病求本 / "Treat the root, not the branch" / "A symptom is where the body speaks…"
- All six treatments with their Chinese names and descriptions
- "Come and sit with us a while", address, hours, contact
- The footer disclaimer

## What is new in this mockup

The Healia layout has slots mockup 1 did not, so these were written fresh in the same voice:

- The three-step **first visit** tabs (consultation / diagnosis / treatment plan)
- **Common reasons people come in** — three cards
- The **FAQ** — four questions
- **Your first visit** pricing card
- Newsletter block in the footer

## ⚠️ Everything factual on this page is still a placeholder

Same position as mockup 1 — the clinic is mid-renovation and gave us no content:

- **The name reading.** "Hemu" is pinyin *hémù*. The page uses **和睦** (harmony). It could
  equally be **禾木** (grain + wood). Still needs confirming — it changes the brand story.
- **Pricing is invented.** RM 120 first visit / RM 90 follow-up are made up to show the
  layout. There is an on-page note saying so; delete it once real prices exist.
- The stats (**60 min**, **2** disciplines, **6** treatments) are derived from mockup 1's
  copy, not from the client.
- Address, hours, email, WhatsApp and WeChat are dummies. Every CTA points at `#visit`.
- "Registered traditional & complementary practitioners" in the hero is a claim that
  needs a real T&CM Council registration behind it before it can go live.
- No practitioner names or credentials yet.

**Testimonials were deliberately dropped.** Healia has a large testimonial section and
Hemu has zero reviews, so that block became **Common reasons people come in** instead —
same visual weight, nothing invented about real patients. Revisit once reviews exist.

## ⚠️ Advertising law

Unchanged from mockup 1. Under Malaysia's **Medicines (Advertisement and Sale) Act 1956**,
*infertility* is a scheduled restricted condition and advertising a treatment claim for it
needs Medicine Advertisements Board approval; practitioners must also be registered under
the **T&CM Act 2016 (Act 775)**.

Women's health is therefore worded as *support* throughout, the brief's "IVF/IUI support,
helps natural pregnancy" line is **not** used, and the footer carries a results-vary
disclaimer. Keep it that way.

## Images

Stock from Unsplash and Pexels, free for commercial use without attribution. Eleven are
carried over from mockup 1; `benefit-calm.jpg` and `detail-needles.jpg` were added for
this layout. All placeholders — replace with real clinic photography after the renovation.

## Known gaps

- Nav links are in-page anchors; there are no other pages.
- Newsletter form and WhatsApp buttons are inert.
- Healia's heavy lab-data visuals (radar charts, ECG traces, biomarker ranges) were not
  reproduced — there is no honest TCM equivalent, so those slots carry real clinic
  information instead.
- English only; the Chinese is decorative rather than a language toggle.

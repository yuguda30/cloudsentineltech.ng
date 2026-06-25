# CloudSentinel — HTML Fixes Guide
## Apply to: index.html, about.html, services.html, projects.html, use-cases.html, contact.html

---

## FIX 1 — Remove hub-bar-strip from main pages
## Add `no-hub-bar` class to `<body>` on all 6 main pages

**FIND** (on all 6 main pages):
```html
<body>
```
**REPLACE WITH:**
```html
<body class="no-hub-bar">
```

---

## FIX 2 — Navbar: Fix "Home" missing `nav-link` class
## Apply to: `index.html` only

**FIND:**
```html
<li><a href="index.html" class="active">Home</a></li>
```
**REPLACE WITH:**
```html
<li><a href="index.html" class="nav-link active">Home</a></li>
```

---

## FIX 3 — Footer logo: Replace external CDN URL with local asset
## Apply to: ALL 6 main pages (same change in each)

**FIND:**
```html
<img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Blue%20Illustration%20Cloud%20Business%20Logo_20251208_170044_0000-C7gBRRzGwJYC0VHHKi5ydbqPg0zPj4.png" alt="CloudSentinel Technologies">
```
**REPLACE WITH:**
```html
<img src="assets/logo.png" alt="CloudSentinel Technologies">
```

---

## FIX 4 — Footer social: Add Instagram icon after Facebook
## Apply to: ALL 6 main pages

**FIND** (the closing div after the Facebook social-link):
```html
                        <a href="#" class="social-link" aria-label="Facebook">
                            <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
                        </a>
                    </div>
```
**REPLACE WITH:**
```html
                        <a href="#" class="social-link" aria-label="Facebook">
                            <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
                        </a>
                        <a href="#" class="social-link" aria-label="Instagram">
                            <svg fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                            </svg>
                        </a>
                    </div>
```

---

## FIX 5 — Replace CSS file
Replace `css/style.css` with the new `style.css` from this delivery.

**Summary of what changed in CSS:**
- Removed invalid `<link>` HTML tag that was embedded inside the CSS file (line 71 of original)
- Hub-bar-strip: no margin-top push, hidden on main pages via `body.no-hub-bar`
- Footer: richer dark gradient, local logo, Instagram-branded hover, slide-in link hover
- Navbar: spacing, logo size, mobile menu border accent, all nav links consistent
- Section backgrounds: brand-tinted alternation on services page
- Typography: tighter letter-spacing, stronger weights
- Cards: left-border accent on service items, better hover
- Mobile: tighter padding, better stacking
- Dark mode: footer, navbar, sections

---

## FIX 6 — `<html>` tag (if not already done)
## Apply to: ALL pages

**FIND:**
```html
<html lang="en">
```
**REPLACE WITH:**
```html
<html lang="en" data-theme="">
```
*(services.html and others already have `data-theme=""` — skip those)*

---

## ISSUE SUMMARY

| # | Issue | File(s) | Fix |
|---|---|---|---|
| 1 | Hub-bar-strip showing on all main pages, pushing content down | All 6 main pages | Add `class="no-hub-bar"` to `<body>` |
| 2 | "Home" nav-link missing `.nav-link` class | index.html | Add class to `<a>` tag |
| 3 | Footer logo uses external CDN URL (breaks if CDN goes down) | All 6 main pages | Change to `assets/logo.png` |
| 4 | Instagram icon missing from footer social links | All 6 main pages | Add Instagram `<a>` block after Facebook |
| 5 | `<link>` HTML tag inside `style.css` (breaks CSS parsing) | css/style.css | Replaced — use new style.css |
| 6 | Section backgrounds too white, no brand tint | services.html + CSS | Services sections get alternating brand tint |
| 7 | Footer social link hover too generic | css/style.css | Each platform gets its brand color on hover |
| 8 | Mobile nav-links inconsistent (some missing class) | CSS | Universal rule covers `li > a:not(.btn)` |


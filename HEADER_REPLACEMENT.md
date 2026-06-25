# CloudSentinel — Header/Navbar Replacement Guide

## Problem Summary
- `index.html`, `about.html`, `services.html`, `projects.html`, `use-cases.html`, `contact.html` use the **correct** navbar (`.navbar` class + `css/style.css` + `js/main.js`)
- The three hub pages (`cloudsentinel-cybersecurity.html`, `cloudsentinel-data-insights.html`, `cloudsentinel-digitalization.html`) each have **their own custom inline navbar** — different classes, no hamburger menu, no site navigation, no `main.js`.

---

## Universal Navbar Block (copy-paste into each page)

Replace the ENTIRE `<nav>` block (and any hub-bar div) in each hub page with this:

```html
<!-- ── NAVBAR ─────────────────────────────────────────── -->
<nav class="navbar scrolled" id="mainNav">
    <div class="container">
        <a href="index.html" class="nav-logo">
            <img src="assets/logo.png" alt="CloudSentinel Technologies Logo">
            <span class="nav-logo-text">CloudSentinel Technologies</span>
        </a>

        <ul class="nav-menu">
            <li><a href="index.html" class="nav-link">Home</a></li>
            <li><a href="about.html" class="nav-link">About</a></li>
            <li><a href="services.html" class="nav-link">Services</a></li>
            <li><a href="projects.html" class="nav-link">Projects</a></li>
            <li><a href="use-cases.html" class="nav-link">Use Cases</a></li>
            <li><a href="contact.html" class="btn btn-gold nav-cta">Contact Us</a></li>
        </ul>

        <button class="nav-toggle" aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </div>
    <div class="nav-overlay"></div>
</nav>

<!-- Hub breadcrumb bar (keeps page context for users) -->
<div class="hub-bar-strip">
    <div class="container hub-bar-inner">
        <span class="hub-back">
            <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
            <a href="index.html#awareness">Knowledge Hub</a>
        </span>
        <div class="hub-pills">
            <a href="cloudsentinel-digitalization.html" class="hub-pill">🚀 Digital Transformation</a>
            <a href="cloudsentinel-cybersecurity.html" class="hub-pill">🛡️ Cybersecurity</a>
            <a href="cloudsentinel-data-insights.html" class="hub-pill">📊 Data Insights</a>
        </div>
    </div>
</div>
```

**Set the `active` class** on the matching `<a class="nav-link">` for each page:
- `cloudsentinel-cybersecurity.html` → no main nav item is active (it's a sub-page)
- Same for the other two hub pages

---

## CSS to ADD to the `<head>` of each hub page (after the page's own `<style>` block)

```css
/* ── Shared navbar override for hub pages ──────────────── */
<link rel="stylesheet" href="css/style.css">

/* Hub breadcrumb strip */
.hub-bar-strip {
    background: #f0f7fc;
    border-bottom: 1px solid rgba(0,170,239,.15);
    padding: 0.55rem 0;
    margin-top: 70px;   /* matches fixed navbar height */
}
.hub-bar-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
}
.hub-back {
    display: flex;
    align-items: center;
    gap: 0.35rem;
    font-size: 0.8rem;
    color: #5a9dc9;
}
.hub-back a { color: inherit; text-decoration: none; font-weight: 500; }
.hub-back a:hover { color: #00aaef; }
.hub-pills {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
}
.hub-pill {
    font-size: 0.75rem;
    font-weight: 500;
    padding: 0.3rem 0.75rem;
    border-radius: 999px;
    background: #fff;
    border: 1px solid rgba(0,170,239,.3);
    color: #3d7ba8;
    text-decoration: none;
    transition: all 0.2s ease;
}
.hub-pill:hover, .hub-pill.active {
    background: #00aaef;
    color: #fff;
    border-color: #00aaef;
}
@media (max-width: 600px) {
    .hub-bar-strip { display: none; }
}
```

---

## JS to ADD before `</body>` in each hub page (replaces old inline nav JS)

```html
<script src="js/main.js"></script>
```

Remove any old inline `window.addEventListener('scroll', ...)` code that targeted `.nav` — `main.js` handles this for `.navbar`.

---

## Per-page: what to replace and where

### `cloudsentinel-cybersecurity.html`
- **Remove** lines 1652–1671 (the old `<nav class="nav">` block)
- **Insert** the Universal Navbar Block above
- **Hero section** currently starts at `padding-top: 0` — add `padding-top: 130px` to `.hero` to compensate for the fixed navbar + hub bar
- Add `<link rel="stylesheet" href="css/style.css">` in `<head>`
- Add `<script src="js/main.js"></script>` before `</body>`

### `cloudsentinel-data-insights.html`
- **Remove** lines 2107–2127 (the old `<nav class="nav">` block)
- Same insertions as above

### `cloudsentinel-digitalization.html`
- **Remove** lines 1734–1767 (old navbar + old hub bar with inline pill nav)
- **Insert** the Universal Navbar Block (it includes the new hub bar)
- Same CSS/JS additions

---

## Result
All pages will share the same fixed navbar, hamburger menu (mobile), scroll-shadow effect from `main.js`, and the same logo image (`assets/logo.png`). The hub breadcrumb strip gives users context and one-click switching between the three hub articles.

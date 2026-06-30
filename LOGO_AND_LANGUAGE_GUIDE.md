# CloudSentinel — Circular Logo + Language Switcher (Hausa, Yorùbá, Igbo)

---

## PART 1 — Circular Logo (no HTML changes needed)

**What was wrong:** The logo `<img>` tags had no `border-radius`, so the PNG rendered as a square/rectangle with visible white background corners instead of the circular badge shape from your logo file.

**Fix already applied** in the new `style.css` (appended at the very end, so it overrides earlier rules):
- `.nav-logo img` → `border-radius: 50%`, fixed `44×44px`, `object-fit: cover` so the circular logo image fills the circle without distortion
- `.footer-logo img` → same circular treatment, `42×42px`
- Added a subtle border ring (brand blue, turns gold on hover) and a gentle rotate+scale hover animation on the navbar logo for a more polished feel
- Dark mode variants included

**Action needed:** None — just use the updated `style.css`. No HTML edits required for this part.

---

## PART 2 — Language Switcher (Hausa, Yorùbá, Igbo)

This adds a globe-icon dropdown next to the dark mode toggle in the navbar, letting visitors switch between **English, Hausa, Yorùbá, and Igbo**. The choice is saved and persists across pages.

### How it works
- `i18n.js` injects the dropdown UI into the navbar automatically — no HTML markup needed for the button itself
- It translates any element you tag with `data-i18n="key"` 
- Translation is instant (client-side dictionary swap), no page reload, no backend needed
- Saved to `localStorage` — sticks across pages and visits

### STEP 1 — Add the script tag

**Add to every page**, right after the `js/main.js` script tag, before `</body>`:

```html
<script src="js/main.js"></script>
<script src="js/i18n.js"></script>
```

*(Place `i18n.js` inside your existing `js/` folder.)*

### STEP 2 — Tag translatable text with `data-i18n`

This is the only manual work — going through your HTML and adding `data-i18n="key"` attributes to text elements you want translated. The dictionary in `i18n.js` already includes keys for the most important homepage and contact page text. Example:

**FIND** (in `index.html` hero section):
```html
<h1 class="hero-title">
    Securing Digital Futures
    Through <span class="text-gold">Compliance,
    Cybersecurity</span> & Smart
    Digital Solutions
</h1>
```

**REPLACE WITH** (split into tagged spans so each line translates):
```html
<h1 class="hero-title">
    <span data-i18n="hero_title_1">Securing Digital Futures</span>
    <span data-i18n="hero_title_2">Through</span>
    <span class="text-gold" data-i18n="hero_title_3">Compliance,
    Cybersecurity</span>
    <span data-i18n="hero_title_4">& Smart Digital Solutions</span>
</h1>
```

**Simpler example** — nav links:

**FIND:**
```html
<li><a href="index.html" class="nav-link active">Home</a></li>
<li><a href="about.html" class="nav-link">About</a></li>
<li><a href="services.html" class="nav-link">Services</a></li>
<li><a href="projects.html" class="nav-link">Projects</a></li>
<li><a href="use-cases.html" class="nav-link">Use Cases</a></li>
<li><a href="contact.html" class="btn btn-gold nav-cta">Contact Us</a></li>
```

**REPLACE WITH:**
```html
<li><a href="index.html" class="nav-link active" data-i18n="nav_home">Home</a></li>
<li><a href="about.html" class="nav-link" data-i18n="nav_about">About</a></li>
<li><a href="services.html" class="nav-link" data-i18n="nav_services">Services</a></li>
<li><a href="projects.html" class="nav-link" data-i18n="nav_projects">Projects</a></li>
<li><a href="use-cases.html" class="nav-link" data-i18n="nav_usecases">Use Cases</a></li>
<li><a href="contact.html" class="btn btn-gold nav-cta" data-i18n="nav_contact">Contact Us</a></li>
```

Repeat this pattern for any element you want translated — wrap or tag it with `data-i18n="matching_key"` using the keys already defined in `i18n.js` (see the full key list below), or add your own new keys.

### STEP 3 — Adding more translation keys

Open `i18n.js`, find the `TRANSLATIONS` object. Each language (`en`, `ha`, `yo`, `ig`) is a dictionary of `key: "translated text"`. To add a new translatable string:

1. Pick a unique key name, e.g. `services_page_title`
2. Add it to **all four** language blocks (`en`, `ha`, `yo`, `ig`) with the correct translation
3. Tag the matching HTML element with `data-i18n="services_page_title"`

---

## Keys already included (ready to use immediately)

| Key | English text |
|---|---|
| `nav_home`, `nav_about`, `nav_services`, `nav_projects`, `nav_usecases`, `nav_contact` | Navbar links |
| `hero_badge`, `hero_title_1` to `hero_title_4`, `hero_desc`, `hero_btn_services`, `hero_btn_consult` | Hero section |
| `whatwedo_badge`, `whatwedo_title`, `whatwedo_sub` | "What We Do" section |
| `why_badge`, `why_title`, `why_sub` | "Why CloudSentinel" section |
| `projects_badge`, `projects_title`, `projects_sub` | Featured Projects section |
| `partners_badge`, `partners_title`, `partners_sub` | Partners section |
| `footer_tagline`, `footer_quicklinks`, `footer_services`, `footer_contact`, `footer_rights`, `footer_privacy`, `footer_terms` | Footer |
| `contact_title`, `contact_sub`, `contact_form_title`, `contact_form_sub`, `contact_info_title` | Contact page |
| `learn_more` | "Learn More" links used in service cards |

---

## Important notes

- **Service/project card descriptions, FAQ content, and long-form Knowledge Hub articles are NOT pre-translated** — those are large bodies of text. The system is ready to support them; you just add `data-i18n` tags and the matching translations when ready. Translating all of that content properly (especially technical cybersecurity/compliance terminology into Hausa/Yorùbá/Igbo) is a significant content task best done with a native-speaking reviewer for accuracy — I've built the infrastructure so it's a content-filling exercise rather than a redevelopment.
- The language switcher appears automatically in the navbar on every page that includes `i18n.js` — no extra markup needed for the button.
- Works fully offline/client-side — no translation API costs, no backend, no page reload.
- If a `data-i18n` key has no entry in a language, it safely keeps the English text instead of breaking.

---

## Visual placement

The language switcher (globe icon + "EN"/"HA"/"YO"/"IG" label + dropdown caret) sits in the navbar between the **Contact Us button** and the **dark mode toggle**, matching the pill/circle styling of the rest of your navbar controls. On narrow mobile screens, the text label hides and only the globe icon shows to save space.

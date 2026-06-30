/* ===================================
   CloudSentinel Technologies
   Language Switcher / i18n System
   English · Hausa · Yorùbá · Igbo
   
   HOW IT WORKS:
   1. Add data-i18n="key" to any text element in HTML
   2. Add the same "key" with translations to TRANSLATIONS below
   3. This script swaps text content on language change
   4. Choice is saved to localStorage and persists site-wide
   =================================== */

const TRANSLATIONS = {
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_services: "Services",
        nav_projects: "Projects",
        nav_usecases: "Use Cases",
        nav_contact: "Contact Us",

        hero_badge: "Cybersecurity | Compliance | Digital Solutions",
        hero_title_1: "Securing Digital Futures",
        hero_title_2: "Through Compliance,",
        hero_title_3: "Cybersecurity",
        hero_title_4: "& Smart Digital Solutions",
        hero_desc: "CloudSentinel Technologies helps SMEs, NGOs, schools, and institutions become compliant, secure, data-driven, and digitally productive across Katsina, Nigeria and beyond.",
        hero_btn_services: "Explore Our Services",
        hero_btn_consult: "Start a Consultation",

        whatwedo_badge: "Our Solutions",
        whatwedo_title: "What We Do",
        whatwedo_sub: "Comprehensive digital solutions designed for Nigerian businesses and institutions",

        why_badge: "Why Choose Us",
        why_title: "Why CloudSentinel",
        why_sub: "Your trusted partner for compliance, security, and digital growth in Northern Nigeria",

        projects_badge: "Our Work",
        projects_title: "Featured Projects",
        projects_sub: "Innovative solutions and platforms developed by CloudSentinel Technologies",

        partners_badge: "Trusted Collaborations",
        partners_title: "Partners & Collaborations",
        partners_sub: "CloudSentinel Technologies collaborates with organizations, innovation hubs, and businesses focused on digital transformation, technology, entrepreneurship, and cybersecurity growth.",

        footer_tagline: "Securing Digital Futures Through Compliance, Cybersecurity & Smart Digital Solutions. Your trusted technology partner in Katsina, Nigeria.",
        footer_quicklinks: "Quick Links",
        footer_services: "Services",
        footer_contact: "Contact",
        footer_rights: "All rights reserved.",
        footer_privacy: "Privacy Policy",
        footer_terms: "Terms of Service",

        contact_title: "Contact Us",
        contact_sub: "For compliance, cybersecurity, website, data, and digital transformation inquiries, contact CloudSentinel Technologies today.",
        contact_form_title: "Send Us a Message",
        contact_form_sub: "Fill out the form below and our team will get back to you within 24-48 hours.",
        contact_info_title: "Contact Information",

        learn_more: "Learn More"
    },

    ha: {
        nav_home: "Gida",
        nav_about: "Game Da Mu",
        nav_services: "Ayyuka",
        nav_projects: "Ayyukanmu",
        nav_usecases: "Misalan Amfani",
        nav_contact: "Tuntube Mu",

        hero_badge: "Tsaron Yanar Gizo | Bin Doka | Hanyoyin Dijital",
        hero_title_1: "Tabbatar da Makomar Dijital",
        hero_title_2: "Ta Hanyar Bin Doka,",
        hero_title_3: "Tsaron Yanar Gizo",
        hero_title_4: "& Hanyoyin Dijital Masu sauki",
        hero_desc: "CloudSentinel Technologies tana taimaka wa SMEs, NGOs, makarantu, da cibiyoyi su bi doka, su zama masu tsaro, su yi amfani da bayanai, kuma su yi aiki ta hanyar dijital a Katsina, Najeriya da kuma sauran wurare.",
        hero_btn_services: "Duba Ayyukanmu",
        hero_btn_consult: "Fara Tattaunawa",

        whatwedo_badge: "Hanyoyinmu",
        whatwedo_title: "Abin Da Muke Yi",
        whatwedo_sub: "Cikakkun hanyoyin dijital da aka tsara don kasuwancin Najeriya da cibiyoyi",

        why_badge: "Me Yasa Ka Zabe Mu",
        why_title: "Me Yasa CloudSentinel",
        why_sub: "Abokin tarayya da kuke amincewa don bin doka, tsaro, da ci gaban dijital a Arewacin Najeriya",

        projects_badge: "Ayyukanmu",
        projects_title: "Manyan Ayyukanmu",
        projects_sub: "Sabbin hanyoyi da dandamali da CloudSentinel Technologies suka kirkira",

        partners_badge: "Hadin Gwiwa Masu Aminci",
        partners_title: "Abokan Hulda & Hadin Gwiwa",
        partners_sub: "CloudSentinel Technologies tana hadin gwiwa da kungiyoyi, cibiyoyin kirkire-kirkire, da kasuwanci da suka mayar da hankali kan canjin dijital, fasaha, kasuwanci, da ci gaban tsaron yanar gizo.",

        footer_tagline: "Tabbatar da Makomar Dijital Ta Hanyar Bin Doka, Tsaron Yanar Gizo & Hanyoyin Dijital Masu Wayo. Abokin fasahar da kuke amincewa a Katsina, Najeriya.",
        footer_quicklinks: "Mahimman Hanyoyi",
        footer_services: "Ayyuka",
        footer_contact: "Tuntuɓi Mu",
        footer_rights: "Duk wani hakki an kiyaye shi.",
        footer_privacy: "Manufar Sirri",
        footer_terms: "Sharuddan Hidima",

        contact_title: "Tuntube Mu",
        contact_sub: "Don bin doka, tsaron yanar gizo, gidan yanar gizo, bayanai, da tambayoyin canjin dijital, tuntubi CloudSentinel Technologies yau.",
        contact_form_title: "Aiko Mana Sako",
        contact_form_sub: "Cika fom din da ke kasa kuma tawagarmu za ta amsa muku cikin awa 24-48.",
        contact_info_title: "Bayanan Tuntuɓa",

        learn_more: "Karin Bayani"
    },

    yo: {
        nav_home: "Ilé",
        nav_about: "Nípa Wa",
        nav_services: "Iṣẹ́ Wa",
        nav_projects: "Àwọn Iṣẹ́",
        nav_usecases: "Àwọn Àpẹẹrẹ",
        nav_contact: "Kàn Sí Wa",

        hero_badge: "Ààbò Ayélujára | Ìbámu Òfin | Ojútùú Dìjítà",
        hero_title_1: "Ríṣe Àmúdájú Ọjọ́ Iwájú Dìjítà",
        hero_title_2: "Nípasẹ̀ Ìbámu Òfin,",
        hero_title_3: "Ààbò Ayélujára",
        hero_title_4: "& Ojútùú Dìjítà Tó Gbóná",
        hero_desc: "CloudSentinel Technologies ń ran àwọn SME, NGO, ilé-ìwé, àti àwọn ilé-iṣẹ́ lọ́wọ́ láti ní ìbámu, ààbò, àlàyé tó dáa, àti iṣẹ́ dìjítà ní Katsina, Nàìjíríà àti ní ibòmíràn.",
        hero_btn_services: "Wo Àwọn Iṣẹ́ Wa",
        hero_btn_consult: "Bẹ̀rẹ̀ Ìjíròrò",

        whatwedo_badge: "Àwọn Ojútùú Wa",
        whatwedo_title: "Ohun Tí A Ń Ṣe",
        whatwedo_sub: "Ojútùú dìjítà pípé tí a ṣe fún àwọn iṣẹ́ àti ilé-iṣẹ́ ní Nàìjíríà",

        why_badge: "Ìdí Tí O Fi Yẹ Kí O Yan Wa",
        why_title: "Ìdí CloudSentinel",
        why_sub: "Alábàákẹ́gbẹ́ tí o lè gbẹ́kẹ̀lé fún ìbámu, ààbò, àti ìdàgbàsókè dìjítà ní Àríwá Nàìjíríà",

        projects_badge: "Iṣẹ́ Wa",
        projects_title: "Àwọn Iṣẹ́ Tó Yọ́ Jáde",
        projects_sub: "Ojútùú àti pẹpẹ tuntun tí CloudSentinel Technologies ti ṣe àgbékalẹ̀ rẹ̀",

        partners_badge: "Ìfọwọ́sowọ́pọ̀ Tó Ní Ìgbẹ́kẹ̀lé",
        partners_title: "Àwọn Alábàákẹ́gbẹ́ & Ìfọwọ́sowọ́pọ̀",
        partners_sub: "CloudSentinel Technologies ń ṣiṣẹ́ pẹ̀lú àwọn àjọ, ibùdó ìmúdàgbà, àti àwọn iṣẹ́ tó dá lórí ìyípadà dìjítà, ìmọ̀-ẹ̀rọ, iṣẹ́ òwò, àti ìdàgbàsókè ààbò ayélujára.",

        footer_tagline: "Ríṣe Àmúdájú Ọjọ́ Iwájú Dìjítà Nípasẹ̀ Ìbámu Òfin, Ààbò Ayélujára & Ojútùú Dìjítà Tó Gbóná. Alábàákẹ́gbẹ́ ìmọ̀-ẹ̀rọ tí o lè gbẹ́kẹ̀lé ní Katsina, Nàìjíríà.",
        footer_quicklinks: "Ọ̀nà Kíákíá",
        footer_services: "Iṣẹ́ Wa",
        footer_contact: "Kàn Sí Wa",
        footer_rights: "Gbogbo ẹ̀tọ́ ni a dáàbò bò.",
        footer_privacy: "Ìlànà Àṣírí",
        footer_terms: "Àwọn Òfin Iṣẹ́",

        contact_title: "Kàn Sí Wa",
        contact_sub: "Fún ìbámu, ààbò ayélujára, wẹ́ẹ̀bùsàìtì, àlàyé, àti ìbéèrè ìyípadà dìjítà, kàn sí CloudSentinel Technologies lónìí.",
        contact_form_title: "Fi Ìránṣẹ́ Ránṣẹ́ Sí Wa",
        contact_form_sub: "Kun fọ́ọ̀mù tó wà nísàlẹ̀ kí ẹgbẹ́ wa lè dáhùn padà sí ọ láàrín wákàtí 24-48.",
        contact_info_title: "Àlàyé Ìbánisọ̀rọ̀",

        learn_more: "Kọ́ Sí I"
    },

    ig: {
        nav_home: "Ụlọ",
        nav_about: "Banyere Anyị",
        nav_services: "Ọrụ Anyị",
        nav_projects: "Ọrụ Ndị Anyị Rụrụ",
        nav_usecases: "Ihe Atụ Ojiji",
        nav_contact: "Kpọtụrụ Anyị",

        hero_badge: "Nchekwa Ịntanetị | Nrubeisi Iwu | Ngwọta Dijitalụ",
        hero_title_1: "Ichekwa Ọdịnihu Dijitalụ",
        hero_title_2: "Site na Nrubeisi Iwu,",
        hero_title_3: "Nchekwa Ịntanetị",
        hero_title_4: "& Ngwọta Dijitalụ Mara Mma",
        hero_desc: "CloudSentinel Technologies na-enyere SMEs, NGOs, ụlọ akwụkwọ, na ụlọ ọrụ aka ka ha nweta nrubeisi iwu, nchekwa, ọnụọgụ data, na ịrụ ọrụ dijitalụ na Katsina, Naịjirịa na ebe ndị ọzọ.",
        hero_btn_services: "Lelee Ọrụ Anyị",
        hero_btn_consult: "Malite Mkparịta ụka",

        whatwedo_badge: "Ngwọta Anyị",
        whatwedo_title: "Ihe Anyị Na-eme",
        whatwedo_sub: "Ngwọta dijitalụ zuru ezu emere maka azụmaahịa na ụlọ ọrụ Naịjirịa",

        why_badge: "Ihe Mere Ị Ga-eji Họrọ Anyị",
        why_title: "Ihe Mere CloudSentinel",
        why_sub: "Onye mmekọ ị nwere ike ịtụkwasị obi maka nrubeisi iwu, nchekwa, na uto dijitalụ na Northern Naịjirịa",

        projects_badge: "Ọrụ Anyị",
        projects_title: "Ọrụ Ndị Pụtara Ìhè",
        projects_sub: "Ngwọta na nnukwu ihe owuwu ọhụrụ nke CloudSentinel Technologies mepụtara",

        partners_badge: "Mmekọrịta A Tụkwasịrị Obi",
        partners_title: "Ndị Mmekọ & Mmekọrịta",
        partners_sub: "CloudSentinel Technologies na-emekọrịta ihe na ndị otu, ụlọ nrụpụta, na azụmaahịa lekwasịrị anya na mgbanwe dijitalụ, teknụzụ, ọchụnta ego, na uto nchekwa ịntanetị.",

        footer_tagline: "Ichekwa Ọdịnihu Dijitalụ Site na Nrubeisi Iwu, Nchekwa Ịntanetị & Ngwọta Dijitalụ Mara Mma. Onye mmekọ teknụzụ ị nwere ike ịtụkwasị obi na Katsina, Naịjirịa.",
        footer_quicklinks: "Njikọ Ngwa Ngwa",
        footer_services: "Ọrụ Anyị",
        footer_contact: "Kpọtụrụ Anyị",
        footer_rights: "Echekwara ikike niile.",
        footer_privacy: "Amụma Nzuzo",
        footer_terms: "Usoro Ọrụ",

        contact_title: "Kpọtụrụ Anyị",
        contact_sub: "Maka nrubeisi iwu, nchekwa ịntanetị, weebụsaịtị, data, na ajụjụ mgbanwe dijitalụ, kpọtụrụ CloudSentinel Technologies taa.",
        contact_form_title: "Zitere Anyị Ozi",
        contact_form_sub: "Dejupụta fọm dị n'okpuru ka ndị otu anyị wee zaghachi gị n'ime awa 24-48.",
        contact_info_title: "Ozi Kpọtụrụ Anyị",

        learn_more: "Mụtakwuo"
    }
};

const LANG_LABELS = {
    en: { short: "EN", name: "English" },
    ha: { short: "HA", name: "Hausa" },
    yo: { short: "YO", name: "Yorùbá" },
    ig: { short: "IG", name: "Igbo" }
};

/* ===================================
   Language Switcher Init
   =================================== */
function initLanguageSwitcher() {
    const STORAGE_KEY = 'cs-lang';
    const savedLang = localStorage.getItem(STORAGE_KEY) || 'en';

    /* --- Build dropdown markup --- */
    const wrapper = document.createElement('div');
    wrapper.className = 'lang-switcher';
    wrapper.innerHTML = `
        <button class="lang-toggle" aria-label="Change language" aria-expanded="false">
            <svg class="globe" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke-width="2"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
            </svg>
            <span class="lang-label" id="currentLangLabel">${LANG_LABELS[savedLang].short}</span>
            <svg class="caret" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
            </svg>
        </button>
        <div class="lang-dropdown" role="menu">
            <button class="lang-option" data-lang="en" role="menuitem">
                <span class="flag flag-en">EN</span> English
                <svg class="check" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
            </button>
            <button class="lang-option" data-lang="ha" role="menuitem">
                <span class="flag flag-ha">HA</span> Hausa
                <svg class="check" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
            </button>
            <button class="lang-option" data-lang="yo" role="menuitem">
                <span class="flag flag-yo">YO</span> Yorùbá
                <svg class="check" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
            </button>
            <button class="lang-option" data-lang="ig" role="menuitem">
                <span class="flag flag-ig">IG</span> Igbo
                <svg class="check" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
            </button>
        </div>
    `;

    /* --- Insert into navbar: before theme toggle if present, else before hamburger --- */
    const navbarContainer = document.querySelector('.navbar .container');
    const themeToggle = document.querySelector('.theme-toggle');
    const navToggle = document.querySelector('.nav-toggle');
    if (navbarContainer) {
        if (themeToggle) {
            navbarContainer.insertBefore(wrapper, themeToggle);
        } else if (navToggle) {
            navbarContainer.insertBefore(wrapper, navToggle);
        } else {
            navbarContainer.appendChild(wrapper);
        }
    }

    /* --- Toggle dropdown open/close --- */
    const toggleBtn = wrapper.querySelector('.lang-toggle');
    toggleBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        wrapper.classList.toggle('open');
        toggleBtn.setAttribute('aria-expanded', wrapper.classList.contains('open'));
    });
    document.addEventListener('click', function() {
        wrapper.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
    });

    /* --- Apply language function --- */
    function applyLanguage(lang) {
        const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
        document.body.classList.add('i18n-fading');

        setTimeout(function() {
            document.querySelectorAll('[data-i18n]').forEach(function(el) {
                const key = el.getAttribute('data-i18n');
                if (dict[key]) {
                    el.textContent = dict[key];
                }
            });
            document.body.classList.remove('i18n-fading');
        }, 120);

        document.getElementById('currentLangLabel').textContent = LANG_LABELS[lang].short;
        document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : lang);

        wrapper.querySelectorAll('.lang-option').forEach(function(opt) {
            opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
        });

        localStorage.setItem(STORAGE_KEY, lang);
    }

    /* --- Option click handlers --- */
    wrapper.querySelectorAll('.lang-option').forEach(function(opt) {
        opt.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            applyLanguage(lang);
            wrapper.classList.remove('open');
        });
    });

    /* --- Apply saved language on load --- */
    applyLanguage(savedLang);
}

/* Auto-init when DOM ready (call this from main.js DOMContentLoaded too) */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguageSwitcher);
} else {
    initLanguageSwitcher();
}

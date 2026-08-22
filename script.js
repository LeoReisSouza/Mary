/* =========================================================================
   Mary Reis Massage Therapy — behaviour
   Vanilla JS only. No build step, no dependencies.
   ========================================================================= */

/* -------------------------------------------------------------------------
   1. CONFIG — the only place you need to edit to go live
   ------------------------------------------------------------------------- */
const CONFIG = {
  // International format, digits only (country code + number). +55 11 98861-0626
  whatsappNumber: "5511988610626",

  instagramUrl: "https://www.instagram.com/mary.reis_bjj",

  businessName: "Mary Reis Massage Therapy",
  location: "Dublin, Ireland",

  // Pre-filled WhatsApp message, per language
  whatsappMessage: {
    en: "Hi Mary! I came across your massage therapy services and I'd love to know more about your treatments. Could you please tell me a little more? Thank you!",
    pt: "Oi, Mary! Encontrei o seu trabalho de massagem terapêutica e adoraria saber mais sobre as sessões. Você poderia me contar um pouco mais? Obrigado!"
  }
};

/* -------------------------------------------------------------------------
   2. TRANSLATIONS — keys map to data-i18n / data-i18n-attr in index.html
   ------------------------------------------------------------------------- */
const translations = {
  en: {
    "meta.title": "Mary Reis Massage Therapy | Therapeutic Massage in Dublin",
    "meta.description": "Personalised massage therapy in Dublin. Relax, release tension and take a moment for yourself with Mary Reis.",

    "brand.tagline": "Massage Therapy",

    "nav.home": "Home",
    "nav.about": "About",
    "nav.benefits": "Benefits",
    "nav.contact": "Contact",
    "nav.book": "Book Now",

    "hero.location": "Based in Dublin, Ireland",
    "hero.title": "Massage Therapy for Your Body & Mind",
    "hero.subtitle": "Relax, restore and reconnect with yourself through personalised therapeutic massage in Dublin.",
    "hero.ctaPrimary": "Book a Massage",
    "hero.ctaSecondary": "Message Mary",
    "hero.imageAlt": "Therapeutic back massage in a warm, calm treatment room",

    "about.eyebrow": "About",
    "about.title": "Feel Better. Move Better.",
    "about.p1": "Mary Reis offers personalised therapeutic massage in a calm, welcoming space. Every session is adapted to how your body feels on the day, at your own pace and with full attention to how you feel.",
    "about.p2": "Massage may help promote relaxation, ease everyday muscle tension and support a general sense of wellbeing. It is a moment to slow down, breathe and take care of yourself.",

    "benefits.eyebrow": "Benefits",
    "benefits.title": "A Simple Way to Care for Yourself",
    "benefits.card1.title": "Relaxation",
    "benefits.card1.text": "Helps release everyday tension and encourages deep relaxation.",
    "benefits.card2.title": "Muscle Relief",
    "benefits.card2.text": "A soothing approach to tired and tense muscles.",
    "benefits.card3.title": "Better Wellbeing",
    "benefits.card3.text": "Take time to slow down, reset and care for yourself.",
    "benefits.card4.title": "Mind & Body",
    "benefits.card4.text": "A calming experience designed to help you reconnect with your body.",

    "contact.eyebrow": "Get in touch",
    "contact.title": "Ready to Take a Moment for Yourself?",
    "contact.text": "Whether you are looking to relax, release tension or simply take some time for yourself, Mary would love to hear from you.",
    "contact.whatsapp": "Chat on WhatsApp",
    "contact.instagram": "Message on Instagram",
    "contact.location": "Dublin, Ireland",

    "footer.copyright": "© 2026 Mary Reis Massage Therapy. All rights reserved.",

    "a11y.skip": "Skip to content",
    "a11y.menuOpen": "Open menu",
    "a11y.menuClose": "Close menu",
    "a11y.language": "Language",
    "a11y.whatsapp": "Chat on WhatsApp",
    "a11y.toTop": "Back to top",

    "config.note": "Setup: open script.js and replace the placeholders in CONFIG so the contact buttons work — missing: "
  },

  pt: {
    "meta.title": "Mary Reis Massoterapia | Massagem Terapêutica em Dublin",
    "meta.description": "Massagem terapêutica personalizada em Dublin. Relaxe, alivie tensões e reserve um momento para você com Mary Reis.",

    "brand.tagline": "Massoterapia",

    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.benefits": "Benefícios",
    "nav.contact": "Contato",
    "nav.book": "Agendar",

    "hero.location": "Em Dublin, Irlanda",
    "hero.title": "Massagem Terapêutica para o Corpo e a Mente",
    "hero.subtitle": "Relaxe, restaure e reconecte-se com você através de uma massagem terapêutica personalizada em Dublin.",
    "hero.ctaPrimary": "Agendar uma Massagem",
    "hero.ctaSecondary": "Falar com a Mary",
    "hero.imageAlt": "Massagem terapêutica nas costas em uma sala aconchegante e tranquila",

    "about.eyebrow": "Sobre",
    "about.title": "Sinta-se Melhor. Mova-se Melhor.",
    "about.p1": "Mary Reis oferece massagem terapêutica personalizada em um espaço calmo e acolhedor. Cada sessão é adaptada ao que o seu corpo pede naquele dia, no seu ritmo e com total atenção ao que você sente.",
    "about.p2": "A massagem pode ajudar a promover relaxamento, aliviar a tensão muscular do dia a dia e favorecer uma sensação geral de bem-estar. É um momento para desacelerar, respirar e cuidar de você.",

    "benefits.eyebrow": "Benefícios",
    "benefits.title": "Um Jeito Simples de Cuidar de Você",
    "benefits.card1.title": "Relaxamento",
    "benefits.card1.text": "Ajuda a liberar a tensão do dia a dia e favorece um relaxamento profundo.",
    "benefits.card2.title": "Alívio Muscular",
    "benefits.card2.text": "Uma abordagem suave para músculos cansados e tensionados.",
    "benefits.card3.title": "Mais Bem-estar",
    "benefits.card3.text": "Um tempo para desacelerar, recomeçar e cuidar de si.",
    "benefits.card4.title": "Corpo e Mente",
    "benefits.card4.text": "Uma experiência tranquila para ajudar você a se reconectar com o seu corpo.",

    "contact.eyebrow": "Fale comigo",
    "contact.title": "Pronto para Reservar um Momento para Você?",
    "contact.text": "Se você quer relaxar, aliviar tensões ou simplesmente ter um tempo para si, a Mary vai adorar conversar com você.",
    "contact.whatsapp": "Conversar no WhatsApp",
    "contact.instagram": "Chamar no Instagram",
    "contact.location": "Dublin, Irlanda",

    "footer.copyright": "© 2026 Mary Reis Massage Therapy. Todos os direitos reservados.",

    "a11y.skip": "Ir para o conteúdo",
    "a11y.menuOpen": "Abrir menu",
    "a11y.menuClose": "Fechar menu",
    "a11y.language": "Idioma",
    "a11y.whatsapp": "Conversar no WhatsApp",
    "a11y.toTop": "Voltar ao topo",

    "config.note": "Configuração: abra o script.js e substitua os valores do CONFIG para os botões de contato funcionarem — faltando: "
  }
};

/* -------------------------------------------------------------------------
   3. Helpers
   ------------------------------------------------------------------------- */
const STORAGE_KEY = "maryreis:lang";
const DEFAULT_LANG = "en";

const isPlaceholder = (value) => typeof value !== "string" || value.startsWith("REPLACE_WITH");

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function readStoredLang() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored && translations[stored] ? stored : DEFAULT_LANG;
  } catch (error) {
    return DEFAULT_LANG; // private mode / storage disabled
  }
}

function storeLang(lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (error) {
    /* nothing to do — the language still applies for this visit */
  }
}

/* -------------------------------------------------------------------------
   4. Contact links (WhatsApp + Instagram)
   ------------------------------------------------------------------------- */
function whatsappUrl(lang) {
  const digits = String(CONFIG.whatsappNumber).replace(/\D/g, "");
  if (!digits) return null;
  const message = CONFIG.whatsappMessage[lang] || CONFIG.whatsappMessage[DEFAULT_LANG];
  return "https://wa.me/" + digits + "?text=" + encodeURIComponent(message);
}

function applyContactLinks(lang) {
  const missing = [];

  const waUrl = isPlaceholder(CONFIG.whatsappNumber) ? null : whatsappUrl(lang);
  if (!waUrl) missing.push("CONFIG.whatsappNumber");

  document.querySelectorAll("[data-whatsapp]").forEach((link) => {
    if (waUrl) {
      link.href = waUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.removeAttribute("aria-disabled");
    } else {
      link.href = "#contact";
      link.removeAttribute("target");
    }
  });

  const igUrl = isPlaceholder(CONFIG.instagramUrl) ? null : CONFIG.instagramUrl;
  if (!igUrl) missing.push("CONFIG.instagramUrl");

  document.querySelectorAll("[data-instagram]").forEach((link) => {
    link.href = igUrl || "#contact";
    if (igUrl) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    } else {
      link.removeAttribute("target");
    }
  });

  // Owner-facing hint, only visible while placeholders are still in place
  const note = document.getElementById("config-note");
  if (note) {
    if (missing.length) {
      note.hidden = false;
      note.textContent = translations[lang]["config.note"] + missing.join(", ");
      console.warn("[Mary Reis site] Still using placeholders: " + missing.join(", "));
    } else {
      note.hidden = true;
    }
  }
}

/* -------------------------------------------------------------------------
   5. Language switching (no page reload)
   ------------------------------------------------------------------------- */
let currentLang = DEFAULT_LANG;

function setLanguage(lang, { persist = true } = {}) {
  if (!translations[lang]) lang = DEFAULT_LANG;
  currentLang = lang;
  const dict = translations[lang];

  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";

  // Text nodes
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = dict[el.dataset.i18n];
    if (value !== undefined) el.textContent = value;
  });

  // Attributes: data-i18n-attr="alt:hero.imageAlt;aria-label:a11y.menuOpen"
  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    el.dataset.i18nAttr.split(";").forEach((pair) => {
      const [attr, key] = pair.split(":").map((part) => part && part.trim());
      if (attr && key && dict[key] !== undefined) el.setAttribute(attr, dict[key]);
    });
  });

  // Elements whose label depends on state
  const toggle = document.getElementById("nav-toggle");
  if (toggle) {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-label", open ? dict["a11y.menuClose"] : dict["a11y.menuOpen"]);
  }

  // Switch button state
  document.querySelectorAll(".lang-switch__btn").forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", String(active));
  });

  applyContactLinks(lang);
  if (persist) storeLang(lang);
}

/* -------------------------------------------------------------------------
   6. Mobile navigation
   ------------------------------------------------------------------------- */
function initNav() {
  const header = document.querySelector(".site-header");
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("site-nav");
  const backdrop = document.getElementById("nav-backdrop");
  if (!header || !toggle || !nav || !backdrop) return;

  const desktop = window.matchMedia("(min-width: 900px)");

  function openMenu() {
    header.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", translations[currentLang]["a11y.menuClose"]);
    backdrop.hidden = false;
    requestAnimationFrame(() => backdrop.classList.add("is-visible"));
    document.body.style.overflow = "hidden";
    // next frame: the panel is visible by then, so it can take focus
    requestAnimationFrame(() => {
      const firstLink = nav.querySelector(".site-nav__link");
      if (firstLink) firstLink.focus({ preventScroll: true });
    });
  }

  function closeMenu({ restoreFocus = false } = {}) {
    if (!header.classList.contains("is-open")) return;
    header.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", translations[currentLang]["a11y.menuOpen"]);
    backdrop.classList.remove("is-visible");
    document.body.style.overflow = "";
    window.setTimeout(() => { backdrop.hidden = true; }, 350);
    if (restoreFocus) toggle.focus({ preventScroll: true });
  }

  toggle.addEventListener("click", () => {
    header.classList.contains("is-open") ? closeMenu({ restoreFocus: true }) : openMenu();
  });

  backdrop.addEventListener("click", () => closeMenu());

  // Close after choosing a section, so the smooth scroll is visible
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu({ restoreFocus: true });

    // Keep keyboard focus inside the open panel
    if (event.key === "Tab" && header.classList.contains("is-open")) {
      const focusables = [toggle, ...nav.querySelectorAll("a, button")];
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  // Never leave the panel open when the layout switches to desktop
  const onBreakpoint = (event) => { if (event.matches) closeMenu(); };
  desktop.addEventListener ? desktop.addEventListener("change", onBreakpoint)
                           : desktop.addListener(onBreakpoint);
}

/* -------------------------------------------------------------------------
   7. Scroll driven UI: header state + back to top
   ------------------------------------------------------------------------- */
function initScrollUI() {
  const header = document.querySelector(".site-header");
  const toTop = document.getElementById("to-top");
  let ticking = false;

  function update() {
    const y = window.scrollY || window.pageYOffset;
    if (header) header.classList.toggle("is-scrolled", y > 16);
    if (toTop) toTop.classList.toggle("is-visible", y > 520);
    ticking = false;
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }, { passive: true });

  update();

  if (toTop) {
    toTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
      const brand = document.querySelector(".brand");
      if (brand) brand.focus({ preventScroll: true });
    });
  }
}

/* -------------------------------------------------------------------------
   8. Reveal on scroll
   ------------------------------------------------------------------------- */
function initReveals() {
  const items = Array.from(document.querySelectorAll("[data-reveal]"));

  const revealAll = () => items.forEach((el) => el.classList.add("is-visible"));

  if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
    revealAll();
    return;
  }

  let observerWorks = false;
  const observer = new IntersectionObserver((entries) => {
    observerWorks = true;
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

  items.forEach((el) => observer.observe(el));

  // Safety net: if the observer never reports (some embedded or background
  // rendering contexts), fall back to a plain scroll check so no text stays hidden.
  window.setTimeout(() => {
    if (observerWorks) return;
    observer.disconnect();

    let ticking = false;
    const check = () => {
      const limit = window.innerHeight * 0.94;
      items.forEach((el) => {
        const box = el.getBoundingClientRect();
        if (box.top < limit && box.bottom > 0) el.classList.add("is-visible");
      });
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) { ticking = true; requestAnimationFrame(check); }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    check();
  }, 1200);
}

/* -------------------------------------------------------------------------
   9. Start
   ------------------------------------------------------------------------- */
function init() {
  setLanguage(readStoredLang(), { persist: false });

  document.querySelectorAll(".lang-switch__btn").forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });

  initNav();
  initScrollUI();
  initReveals();
}

document.readyState === "loading"
  ? document.addEventListener("DOMContentLoaded", init)
  : init();

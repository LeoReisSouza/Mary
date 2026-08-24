/* =========================================================================
   MR | Massage & Relief — behaviour
   Vanilla JS only. No build step, no dependencies.
   ========================================================================= */

/* -------------------------------------------------------------------------
   1. CONFIG — the only place you need to edit to go live
   ------------------------------------------------------------------------- */
const CONFIG = {
  // International format, digits only (country code + number). +55 11 98861-0626
  whatsappNumber: "5511988610626",

  instagramUrl: "https://www.instagram.com/mary.reis_bjj",

  businessName: "MR | Massage & Relief",
  location: "Dublin, Ireland",
  address: "Basement, Castleview, 25, Clontarf East, Dublin, D05 X9F8",

  // Generic message used by the WhatsApp link in the footer.
  // The reservation form builds its own message from the visitor's choices.
  whatsappMessage: {
    en: "Hi Mary! I came across your massage therapy services and I'd love to know more about your treatments. Could you please tell me a little more? Thank you!",
    pt: "Oi, Mary! Encontrei o seu trabalho de massagem terapêutica e adoraria saber mais sobre as sessões. Você poderia me contar um pouco mais? Obrigado!"
  }
};

/* Treatments and extras — the source of truth for the reservation message.
   Prices live in the HTML too (they are visible content); these keys only
   describe what gets written into WhatsApp. */
const TREATMENTS = {
  full:         { nameKey: "treatments.full.name" },
  personalised: { nameKey: "treatments.personalised.name" },
  thai:         { nameKey: "treatments.thai.name" },
  sport:        { nameKey: "treatments.sport.name" }
};

const EXTRAS = {
  cupping:  { nameKey: "extras.cupping" },
  minutes:  { nameKey: "extras.minutes" },
  needling: { nameKey: "extras.needling" }
};

/* -------------------------------------------------------------------------
   2. TRANSLATIONS — keys map to data-i18n / data-i18n-attr in index.html
   ------------------------------------------------------------------------- */
const translations = {
  en: {
    "meta.title": "MR | Massage & Relief — Therapeutic Massage in Dublin",
    "meta.description": "Personalised massage therapy in Dublin. Full body, Thai and sport massage — choose your treatment and reserve with Mary.",

    "brand.tagline": "Massage Therapy",

    "nav.home": "Home",
    "nav.about": "About",
    "nav.treatments": "Treatments",
    "nav.reserve": "Reserve",

    "hero.location": "Based in Dublin, Ireland",
    "hero.title": "Massage Therapy for Your Body & Mind",
    "hero.subtitle": "Relax, restore and reconnect with yourself through personalised therapeutic massage in Dublin.",
    "hero.ctaPrimary": "Explore Treatments",
    "hero.ctaSecondary": "Meet Mary",
    "hero.imageAlt": "Therapeutic back massage in a warm, calm treatment room",

    "about.eyebrow": "About Mary",
    "about.title": "A Moment to Reconnect",
    "about.p1": "Massage therapy is a moment to slow down, release tension and reconnect with your body. Mary offers personalised massage experiences designed around what your body needs on the day.",
    "about.quote": "Therapeutic touch. Real results. Care tailored to your body and your needs.",
    "about.imageAlt": "Mary working with a client during a treatment",
    "about.imageAlt2": "Close-up of a dry needling treatment on a client's back",

    "quality.relaxation": "Relaxation",
    "quality.muscle": "Muscle Relief",
    "quality.wellbeing": "Wellbeing",
    "quality.mindbody": "Mind & Body",

    "location.title": "Find Me in Dublin",
    "location.lead": "Treatments take place in a quiet, private space in Clontarf East.",
    "location.label": "Address",
    "location.directions": "Get directions",
    "location.mapTitle": "Map showing the treatment location in Clontarf East, Dublin",

    "treatments.title": "Treatments",
    "treatments.lead": "Choose the treatment that feels right for you.",
    "treatments.duration": "40 minutes",
    "treatments.full.name": "Full Body Massage",
    "treatments.full.desc": "Relaxing full-body massage from head to toe.",
    "treatments.personalised.name": "Personalised Massage",
    "treatments.personalised.desc": "Choose one or two areas to be treated throughout the entire session.",
    "treatments.thai.name": "Thai Massage",
    "treatments.thai.desc": "An ancient technique that combines stretching, acupressure and assisted movements to improve flexibility, relieve tension and restore energy.",
    "treatments.sport.name": "Sport Massage",
    "treatments.sport.desc": "Ideal for pre and post events, prevention and recovery of muscles. Improves performance and reduces muscle soreness.",

    "extras.title": "Extras",
    "extras.cupping": "Cupping Therapy",
    "extras.minutes": "10 Minutes Extra",
    "extras.needling": "Dry Needling",

    "plans.title": "Monthly Plans",
    "plans.lead": "For a regular rhythm of care.",
    "plans.essential.name": "Essential",
    "plans.essential.item1": "3 full body massages per month",
    "plans.essential.item2": "40 minutes each",
    "plans.premium.name": "Premium",
    "plans.premium.item1": "3 full body massages per month",
    "plans.premium.item2": "40 minutes each",
    "plans.premium.item3": "+ Cupping therapy",
    "plans.premium.item4": "+ 10 minutes extra",
    "plans.note": "Ask about the monthly plans in your message.",

    "reserve.title": "Reserve Your Massage",
    "reserve.lead": "Choose your treatment and any extras you would like to add.",
    "reserve.step1": "Choose your massage",
    "reserve.step2": "Add extras",
    "reserve.optional": "optional",
    "reserve.button": "Reserve Your Massage",
    "reserve.hint": "Opens WhatsApp with your selection so Mary can confirm a time.",
    "reserve.error": "Please choose a massage first.",

    "footer.location": "Dublin, Ireland",
    "footer.locationLink": "Location",
    "footer.copyright": "© 2026 MR | Massage & Relief. All rights reserved.",

    "a11y.skip": "Skip to content",
    "a11y.menuOpen": "Open menu",
    "a11y.menuClose": "Close menu",
    "a11y.language": "Language",
    "a11y.instagram": "Mary on Instagram",
    "a11y.toTop": "Back to top",

    "wa.intro": "Hi Mary! I'd like to book a massage.",
    "wa.massage": "Massage",
    "wa.duration": "Duration",
    "wa.extras": "Extras",
    "wa.none": "None",
    "wa.closing": "Could you please let me know your available times?",
    "wa.thanks": "Thank you!",

    "config.note": "Setup: open script.js and replace the placeholders in CONFIG so the contact buttons work — missing: "
  },

  pt: {
    "meta.title": "MR | Massage & Relief — Massagem Terapêutica em Dublin",
    "meta.description": "Massagem terapêutica personalizada em Dublin. Massagem completa, tailandesa e desportiva — escolha o seu tratamento e reserve com a Mary.",

    "brand.tagline": "Massoterapia",

    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.treatments": "Tratamentos",
    "nav.reserve": "Reservar",

    "hero.location": "Em Dublin, Irlanda",
    "hero.title": "Massagem Terapêutica para o Corpo e a Mente",
    "hero.subtitle": "Relaxe, restaure e reconecte-se com você através de uma massagem terapêutica personalizada em Dublin.",
    "hero.ctaPrimary": "Ver Tratamentos",
    "hero.ctaSecondary": "Conhecer a Mary",
    "hero.imageAlt": "Massagem terapêutica nas costas em uma sala aconchegante e tranquila",

    "about.eyebrow": "Sobre a Mary",
    "about.title": "Um Momento para se Reconectar",
    "about.p1": "A massagem terapêutica é um momento para desacelerar, aliviar tensões e se reconectar com o seu corpo. A Mary oferece experiências de massagem personalizadas, pensadas para o que o seu corpo precisa naquele dia.",
    "about.quote": "Toque terapêutico. Resultados reais. Cuidado sob medida para o seu corpo e as suas necessidades.",
    "about.imageAlt": "Mary atendendo um cliente durante uma sessão",
    "about.imageAlt2": "Detalhe de uma sessão de dry needling nas costas de um cliente",

    "quality.relaxation": "Relaxamento",
    "quality.muscle": "Alívio Muscular",
    "quality.wellbeing": "Bem-estar",
    "quality.mindbody": "Corpo e Mente",

    "location.title": "Onde Me Encontrar em Dublin",
    "location.lead": "Os atendimentos acontecem em um espaço tranquilo e reservado em Clontarf East.",
    "location.label": "Endereço",
    "location.directions": "Como chegar",
    "location.mapTitle": "Mapa com a localização do atendimento em Clontarf East, Dublin",

    "treatments.title": "Tratamentos",
    "treatments.lead": "Escolha o tratamento que faz mais sentido para você.",
    "treatments.duration": "40 minutos",
    "treatments.full.name": "Massagem Completa",
    "treatments.full.desc": "Massagem relaxante de corpo inteiro, da cabeça aos pés.",
    "treatments.personalised.name": "Massagem Personalizada",
    "treatments.personalised.desc": "Escolha uma ou duas áreas para serem trabalhadas durante toda a sessão.",
    "treatments.thai.name": "Massagem Tailandesa",
    "treatments.thai.desc": "Uma técnica milenar que combina alongamentos, acupressão e movimentos assistidos para melhorar a flexibilidade, aliviar tensões e restaurar a energia.",
    "treatments.sport.name": "Massagem Desportiva",
    "treatments.sport.desc": "Ideal para antes e depois de competições, prevenção e recuperação muscular. Melhora o desempenho e reduz a dor muscular.",

    "extras.title": "Extras",
    "extras.cupping": "Ventosaterapia",
    "extras.minutes": "10 Minutos Extras",
    "extras.needling": "Dry Needling",

    "plans.title": "Planos Mensais",
    "plans.lead": "Para manter um ritmo constante de cuidado.",
    "plans.essential.name": "Essential",
    "plans.essential.item1": "3 massagens completas por mês",
    "plans.essential.item2": "40 minutos cada",
    "plans.premium.name": "Premium",
    "plans.premium.item1": "3 massagens completas por mês",
    "plans.premium.item2": "40 minutos cada",
    "plans.premium.item3": "+ Ventosaterapia",
    "plans.premium.item4": "+ 10 minutos extras",
    "plans.note": "Pergunte sobre os planos mensais na sua mensagem.",

    "reserve.title": "Reserve a Sua Massagem",
    "reserve.lead": "Escolha o seu tratamento e os extras que quiser adicionar.",
    "reserve.step1": "Escolha a sua massagem",
    "reserve.step2": "Adicione extras",
    "reserve.optional": "opcional",
    "reserve.button": "Reservar Minha Massagem",
    "reserve.hint": "Abre o WhatsApp com a sua escolha para a Mary confirmar o horário.",
    "reserve.error": "Escolha uma massagem primeiro.",

    "footer.location": "Dublin, Irlanda",
    "footer.locationLink": "Localização",
    "footer.copyright": "© 2026 MR | Massage & Relief. Todos os direitos reservados.",

    "a11y.skip": "Ir para o conteúdo",
    "a11y.menuOpen": "Abrir menu",
    "a11y.menuClose": "Fechar menu",
    "a11y.language": "Idioma",
    "a11y.instagram": "Mary no Instagram",
    "a11y.toTop": "Voltar ao topo",

    "wa.intro": "Oi, Mary! Gostaria de agendar uma massagem.",
    "wa.massage": "Massagem",
    "wa.duration": "Duração",
    "wa.extras": "Extras",
    "wa.none": "Nenhum",
    "wa.closing": "Você poderia me dizer os seus horários disponíveis?",
    "wa.thanks": "Obrigado!",

    "config.note": "Configuração: abra o script.js e substitua os valores do CONFIG para os botões de contato funcionarem — faltando: "
  }
};

/* -------------------------------------------------------------------------
   3. Helpers
   ------------------------------------------------------------------------- */
const STORAGE_KEY = "maryreis:lang";
const DEFAULT_LANG = "en";

let currentLang = DEFAULT_LANG;
const t = (key) => translations[currentLang][key] ?? translations[DEFAULT_LANG][key] ?? key;

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
   4. Contact links (WhatsApp, Instagram, Google Maps)
   ------------------------------------------------------------------------- */
function whatsappUrl(message) {
  const digits = String(CONFIG.whatsappNumber).replace(/\D/g, "");
  if (!digits || isPlaceholder(CONFIG.whatsappNumber)) return null;
  return "https://wa.me/" + digits + "?text=" + encodeURIComponent(message);
}

function applyContactLinks() {
  const missing = [];

  const waUrl = whatsappUrl(CONFIG.whatsappMessage[currentLang] || CONFIG.whatsappMessage[DEFAULT_LANG]);
  if (!waUrl) missing.push("CONFIG.whatsappNumber");

  document.querySelectorAll("[data-whatsapp]").forEach((link) => {
    if (waUrl) {
      link.href = waUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    } else {
      link.href = "#reserve";
      link.removeAttribute("target");
    }
  });

  const igUrl = isPlaceholder(CONFIG.instagramUrl) ? null : CONFIG.instagramUrl;
  if (!igUrl) missing.push("CONFIG.instagramUrl");

  document.querySelectorAll("[data-instagram]").forEach((link) => {
    link.href = igUrl || "#reserve";
    if (!igUrl) link.removeAttribute("target");
  });

  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(CONFIG.address);
  document.querySelectorAll("[data-maps]").forEach((link) => { link.href = mapsUrl; });

  // Owner-facing hint, only visible while placeholders are still in place
  const note = document.getElementById("config-note");
  if (note) {
    if (missing.length) {
      note.hidden = false;
      note.textContent = t("config.note") + missing.join(", ");
      console.warn("[MR site] Still using placeholders: " + missing.join(", "));
    } else {
      note.hidden = true;
    }
  }
}

/* -------------------------------------------------------------------------
   5. Language switching (no page reload)
   ------------------------------------------------------------------------- */
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

  const error = document.getElementById("booking-error");
  if (error && !error.hidden) error.textContent = dict["reserve.error"];

  // Switch button state
  document.querySelectorAll(".lang-switch__btn").forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", String(active));
  });

  applyContactLinks();
  refreshOpenPanels();
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
    toggle.setAttribute("aria-label", t("a11y.menuClose"));
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
    toggle.setAttribute("aria-label", t("a11y.menuOpen"));
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
   9. Treatments accordion (prices stay hidden until a treatment is opened)
   ------------------------------------------------------------------------- */
function setPanel(item, open) {
  const trigger = item.querySelector(".accordion__trigger");
  const panel = item.querySelector(".accordion__panel");

  item.classList.toggle("is-open", open);
  trigger.setAttribute("aria-expanded", String(open));

  if (open) {
    panel.style.height = panel.scrollHeight + "px";
    // release the fixed height once the transition is done, so the panel
    // can grow if the text reflows (language switch, resize)
    window.setTimeout(() => {
      if (item.classList.contains("is-open")) panel.style.height = "auto";
    }, 400);
  } else {
    panel.style.height = panel.scrollHeight + "px";
    void panel.offsetHeight; // force a reflow so the browser animates from the real height
    panel.style.height = "0px";
  }
}

function refreshOpenPanels() {
  document.querySelectorAll(".accordion__item.is-open .accordion__panel").forEach((panel) => {
    panel.style.height = "auto";
  });
}

function initAccordion() {
  document.querySelectorAll(".accordion__item").forEach((item) => {
    const trigger = item.querySelector(".accordion__trigger");
    if (!trigger) return;
    trigger.addEventListener("click", () => {
      setPanel(item, !item.classList.contains("is-open"));
    });
  });
}

/* -------------------------------------------------------------------------
   10. Reservation form → WhatsApp
   ------------------------------------------------------------------------- */
function buildReservationMessage(massageValue, extraValues) {
  const extras = extraValues.length
    ? extraValues.map((value) => t(EXTRAS[value].nameKey)).join(", ")
    : t("wa.none");

  return [
    t("wa.intro"),
    "",
    t("wa.massage") + ": " + t(TREATMENTS[massageValue].nameKey),
    t("wa.duration") + ": " + t("treatments.duration"),
    t("wa.extras") + ": " + extras,
    "",
    t("wa.closing"),
    "",
    t("wa.thanks")
  ].join("\n");
}

function initBooking() {
  const form = document.getElementById("booking-form");
  if (!form) return;

  const error = document.getElementById("booking-error");
  const massageStep = document.getElementById("step-massage");

  const syncOption = (input) => {
    const label = input.closest(".option");
    if (label) label.classList.toggle("is-selected", input.checked);
  };

  const hideError = () => { if (error) error.hidden = true; };

  form.addEventListener("change", (event) => {
    const input = event.target;
    if (input.name === "massage") {
      form.querySelectorAll('input[name="massage"]').forEach(syncOption);
      hideError();
    } else if (input.name === "extra") {
      syncOption(input);
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const chosen = form.querySelector('input[name="massage"]:checked');
    if (!chosen) {
      if (error) {
        error.textContent = t("reserve.error");
        error.hidden = false;
      }
      massageStep.classList.remove("is-shaking");
      void massageStep.offsetWidth; // restart the animation
      massageStep.classList.add("is-shaking");
      massageStep.addEventListener("animationend", () => massageStep.classList.remove("is-shaking"), { once: true });
      const firstOption = massageStep.querySelector('input[name="massage"]');
      if (firstOption) firstOption.focus({ preventScroll: true });
      return;
    }

    const extras = Array.from(form.querySelectorAll('input[name="extra"]:checked')).map((input) => input.value);
    const url = whatsappUrl(buildReservationMessage(chosen.value, extras));

    if (!url) {
      if (error) {
        error.textContent = t("config.note") + "CONFIG.whatsappNumber";
        error.hidden = false;
      }
      return;
    }

    hideError();
    const opened = window.open(url, "_blank", "noopener");
    if (!opened) window.location.href = url; // popup blocked
  });
}

/* -------------------------------------------------------------------------
   11. Start
   ------------------------------------------------------------------------- */
function init() {
  setLanguage(readStoredLang(), { persist: false });

  document.querySelectorAll(".lang-switch__btn").forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });

  initNav();
  initScrollUI();
  initReveals();
  initAccordion();
  initBooking();
}

document.readyState === "loading"
  ? document.addEventListener("DOMContentLoaded", init)
  : init();

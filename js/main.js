/* =====================================================================
   CONFIGURAÇÃO — edite aqui. Campos vazios simplesmente não aparecem.
   ===================================================================== */
const CONFIG = {
  // WhatsApp com DDI + DDD + número, só dígitos. Ex.: "5569912345678".
  // Enquanto estiver vazio, todos os botões de agendamento abrem o direct do Instagram.
  whatsapp: "",
  mensagemWhatsapp: "Olá, Sueli! Vim pelo site e gostaria de agendar uma consulta.",
  instagram: "nutri.sueliribeiro",

  // Opcionais: aparecem em "Contato" quando preenchidos.
  cidade: "",        // ex.: "Cacoal/RO"
  endereco: "",      // ex.: "Rua ..., nº ..., bairro"
  horarios: "",      // ex.: "Segunda a sexta, 8h às 18h"
  atendimento: "",   // ex.: "Presencial e online"
  mapaEmbedUrl: ""   // link "incorporar mapa" do Google Maps
};

(function () {
  "use strict";
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const esc = (t) => String(t ?? "").replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
  const html = document.documentElement;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
  const igUrl = `https://www.instagram.com/${CONFIG.instagram}/`;

  /* ---------- Agendamento: WhatsApp quando houver número, senão Instagram ---------- */
  const digits = String(CONFIG.whatsapp).replace(/\D/g, "");
  const hasWa = digits.length >= 12;
  if (hasWa) {
    const url = `https://wa.me/${digits}?text=${encodeURIComponent(CONFIG.mensagemWhatsapp)}`;
    $$("[data-agendar]").forEach((a) => (a.href = url));
    $$("[data-agendar-icon]").forEach((u) => u.setAttribute("href", "#i-wa"));
    $$("[data-agendar-label]").forEach((s) => { if (/Agendar consulta/.test(s.textContent)) s.textContent = "Agendar pelo WhatsApp"; });
  }
  $$("[data-ig-link]").forEach((a) => (a.href = igUrl));
  const yr = $("#year"); if (yr) yr.textContent = new Date().getFullYear();

  /* ---------- Dados opcionais de contato ---------- */
  const info = $("#contactInfo");
  [["Cidade", CONFIG.cidade], ["Endereço", CONFIG.endereco], ["Horários", CONFIG.horarios], ["Atendimento", CONFIG.atendimento]]
    .forEach(([k, v]) => { if (v) info.insertAdjacentHTML("beforeend", `<li><span>${esc(k)}</span>${esc(v)}</li>`); });
  if (CONFIG.mapaEmbedUrl) $("#mapSlot").innerHTML = `<div class="cta__map"><iframe src="${esc(CONFIG.mapaEmbedUrl)}" title="Mapa do consultório" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>`;

  /* ---------- Especialidades: lista que abre + palco ---------- */
  const espItems = $$(".esp__item"), figs = $$(".stage__fig"), stageNum = $("#stageNum");
  let espCur = 0;
  function espStage(i) {
    if (i === espCur || !figs.length) return;
    figs.forEach((f, k) => { f.classList.remove("was"); if (k === espCur) f.classList.add("was"); f.classList.toggle("is-on", k === i); });
    if (stageNum) stageNum.textContent = i + 1;
    espCur = i;
  }
  function espOpen(i, toggle) {
    espItems.forEach((it, k) => {
      const open = k === i ? (toggle ? !it.classList.contains("is-open") : true) : false;
      it.classList.toggle("is-open", open);
      $(".esp__btn", it).setAttribute("aria-expanded", String(open));
    });
    espStage(i);
    setTimeout(() => window.ScrollTrigger && ScrollTrigger.refresh(), 850);
  }
  espItems.forEach((it, i) => {
    $(".esp__btn", it).addEventListener("click", () => espOpen(i, true));
    if (fine) it.addEventListener("mouseenter", () => espStage(i));
  });
  espOpen(0);

  /* ---------- Receitas: filtros e lightbox ---------- */
  const grid = $("#recGrid"), recs = $$(".rec", grid), filters = $("#recFilters");
  filters.addEventListener("click", (ev) => {
    const b = ev.target.closest(".chip"); if (!b) return;
    $$(".chip", filters).forEach((c) => c.setAttribute("aria-pressed", String(c === b)));
    const cat = b.dataset.cat, show = recs.filter((r) => cat === "Todas" || r.dataset.cat === cat);
    if (window.gsap && !reduce) {
      gsap.to(recs, { opacity: 0, y: 24, duration: .28, ease: "power2.in", overwrite: true, onComplete: () => {
        recs.forEach((r) => (r.hidden = !show.includes(r)));
        gsap.fromTo(show, { opacity: 0, y: 60, clipPath: "inset(100% 0 0 0)" }, { opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)", duration: 1, stagger: .06, ease: "expo.out", clearProps: "clipPath", onComplete: () => window.ScrollTrigger && ScrollTrigger.refresh() });
      } });
    } else recs.forEach((r) => (r.hidden = !show.includes(r)));
  });
  const lb = $("#lb"); let lbI = 0, lastFocus = null;
  const visible = () => recs.filter((r) => !r.hidden);
  function lbFill(rec) {
    const b = $(".rec__btn", rec), list = visible();
    lbI = list.indexOf(rec);
    const img = $("#lbImg"); img.src = `fotos/${b.dataset.img}.webp`; img.alt = b.dataset.title; img.style.objectPosition = b.dataset.pos;
    $("#lbCat").textContent = b.dataset.cat; $("#lbTitle").textContent = b.dataset.title; $("#lbDesc").textContent = b.dataset.desc;
    $("#lbTags").innerHTML = (b.dataset.tags ? b.dataset.tags.split("|") : []).map((t) => `<span class="tag">${esc(t)}</span>`).join("");
    $("#lbLink").href = b.dataset.post;
    $("#lbCount").textContent = `${lbI + 1} de ${list.length}`;
    if (window.gsap && !reduce) gsap.fromTo([img, ".lb__info > *"], { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: .7, stagger: .04, ease: "expo.out" });
  }
  function lbOpen(rec) { lastFocus = document.activeElement; lbFill(rec); lb.classList.add("is-open"); lb.setAttribute("aria-hidden", "false"); document.body.classList.add("is-locked"); window.__lenis && __lenis.stop(); setTimeout(() => $(".lb__close").focus(), 60); }
  function lbClose() { lb.classList.remove("is-open"); lb.setAttribute("aria-hidden", "true"); document.body.classList.remove("is-locked"); window.__lenis && __lenis.start(); lastFocus && lastFocus.focus(); }
  function lbStep(d) { const l = visible(); lbFill(l[(lbI + d + l.length) % l.length]); }
  grid.addEventListener("click", (ev) => { const b = ev.target.closest(".rec__btn"); if (b) lbOpen(b.closest(".rec")); });
  $$("[data-close]", lb).forEach((b) => b.addEventListener("click", lbClose));
  $(".lb__prev").addEventListener("click", () => lbStep(-1)); $(".lb__next").addEventListener("click", () => lbStep(1));
  document.addEventListener("keydown", (ev) => {
    if (!lb.classList.contains("is-open")) return;
    if (ev.key === "Escape") lbClose(); else if (ev.key === "ArrowLeft") lbStep(-1); else if (ev.key === "ArrowRight") lbStep(1);
    else if (ev.key === "Tab") { const f = $$("button, a[href]", lb).filter((x) => x.offsetParent); const a = f[0], z = f[f.length - 1]; if (ev.shiftKey && document.activeElement === a) { ev.preventDefault(); z.focus(); } else if (!ev.shiftKey && document.activeElement === z) { ev.preventDefault(); a.focus(); } }
  });
  let tx = 0; lb.addEventListener("touchstart", (ev) => (tx = ev.touches[0].clientX), { passive: true });
  lb.addEventListener("touchend", (ev) => { const d = ev.changedTouches[0].clientX - tx; if (Math.abs(d) > 50) lbStep(d < 0 ? 1 : -1); });

  /* ---------- Dicas: arrastar com o mouse ---------- */
  const rail = $("#tipsRail");
  if (rail && fine) {
    let down = false, sx = 0, sl = 0, moved = false;
    rail.addEventListener("pointerdown", (ev) => { if (ev.pointerType !== "mouse") return; down = true; moved = false; sx = ev.clientX; sl = rail.scrollLeft; });
    addEventListener("pointermove", (ev) => { if (!down) return; const d = ev.clientX - sx; if (Math.abs(d) > 5) { moved = true; rail.classList.add("is-drag"); } rail.scrollLeft = sl - d; });
    addEventListener("pointerup", () => { if (!down) return; down = false; setTimeout(() => rail.classList.remove("is-drag"), 0); });
    rail.addEventListener("click", (ev) => { if (moved) { ev.preventDefault(); moved = false; } }, true);
  }

  /* ---------- FAQ: abre um por vez, com animação suave ---------- */
  const qas = $$(".qa");
  qas.forEach((d) => {
    const sum = $("summary", d), body = $(".qa__a", d);
    sum.addEventListener("click", (ev) => {
      if (!window.gsap || reduce) { if (!d.open) qas.forEach((o) => o !== d && (o.open = false)); return; }
      ev.preventDefault();
      if (d.open) gsap.to(body, { height: 0, duration: .5, ease: "power3.inOut", onComplete: () => { d.open = false; gsap.set(body, { clearProps: "height" }); window.ScrollTrigger && ScrollTrigger.refresh(); } });
      else {
        qas.forEach((o) => { if (o !== d && o.open) { const ob = $(".qa__a", o); gsap.to(ob, { height: 0, duration: .5, ease: "power3.inOut", onComplete: () => { o.open = false; gsap.set(ob, { clearProps: "height" }); } }); } });
        d.open = true; gsap.fromTo(body, { height: 0 }, { height: "auto", duration: .7, ease: "expo.out", onComplete: () => window.ScrollTrigger && ScrollTrigger.refresh() });
        gsap.fromTo($("p", body), { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: .6, delay: .08, ease: "expo.out" });
      }
    });
  });

  /* ---------- Menu ---------- */
  const header = $("#header"), mbtn = $(".menu-btn"), mnav = $("#mnav");
  function menu(open) {
    mbtn.setAttribute("aria-expanded", String(open)); mnav.classList.toggle("is-open", open); mnav.setAttribute("aria-hidden", String(!open));
    header.classList.toggle("menu-open", open); $(".menu-txt").textContent = open ? "Fechar" : "Menu";
    document.body.classList.toggle("is-locked", open); if (window.__lenis) open ? __lenis.stop() : __lenis.start();
  }
  mbtn.addEventListener("click", () => menu(mbtn.getAttribute("aria-expanded") !== "true"));
  $$("a", mnav).forEach((a) => a.addEventListener("click", () => menu(false)));
  document.addEventListener("keydown", (ev) => { if (ev.key === "Escape" && mnav.classList.contains("is-open")) { menu(false); mbtn.focus(); } });

  /* ---------- Âncoras ---------- */
  $$('a[href^="#"]').forEach((a) => a.addEventListener("click", (ev) => {
    const id = a.getAttribute("href"); if (id.length < 2) return; const t = $(id); if (!t) return;
    ev.preventDefault();
    if (window.__lenis) __lenis.scrollTo(t, { offset: 0, duration: 1.6 }); else t.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
    history.replaceState(null, "", id);
  }));

  /* ---------- Header e botão flutuante ---------- */
  const lightSecs = $$(".manifesto, .esp, .how, .tips, .faq");
  const floatCta = $(".float-cta"), contato = $("#contato");
  let lastY = 0;
  function onScrollUI(y) {
    header.classList.toggle("is-solid", y > 60);
    if (!mnav.classList.contains("is-open")) header.classList.toggle("is-hidden", y > lastY && y > 400);
    lastY = y;
    header.classList.toggle("on-light", lightSecs.some((s) => { const r = s.getBoundingClientRect(); return r.top <= 44 && r.bottom > 44; }));
    floatCta.classList.toggle("is-on", y > innerHeight * .9 && contato.getBoundingClientRect().top > innerHeight * .8);
  }
  if ("IntersectionObserver" in window) {
    const navLinks = $$(".nav a");
    const io = new IntersectionObserver((ents) => ents.forEach((en) => { if (en.isIntersecting) navLinks.forEach((l) => l.toggleAttribute("aria-current", l.getAttribute("href") === "#" + en.target.id)); }), { rootMargin: "-45% 0px -50% 0px" });
    $$("main section[id]").forEach((s) => io.observe(s));
  }

  /* ---------- Sem animação ---------- */
  function plain() {
    html.classList.remove("anim", "has-loader"); html.classList.add("no-anim");
    const l = $("#loader"); if (l) l.remove();
    addEventListener("scroll", () => onScrollUI(scrollY), { passive: true }); onScrollUI(scrollY);
  }
  if (reduce || !window.gsap || !window.ScrollTrigger) { window.__animReady = true; plain(); return; }
  window.__animReady = true;
  try { animate(); } catch (err) {
    console.error("Animação desativada:", err);
    try { ScrollTrigger.getAll().forEach((s) => s.kill()); gsap.globalTimeline.clear(); } catch (e) {}
    $$("[style]").forEach((el) => { if (el.closest("main, header, .loader") && !el.matches("img, .mnav li a")) { el.style.transform = ""; el.style.opacity = ""; el.style.visibility = ""; el.style.clipPath = ""; } });
    if (window.__lenis) { __lenis.destroy(); window.__lenis = null; }
    plain();
  }

  /* =====================================================================
     ANIMAÇÃO
     ===================================================================== */
  function animate() {
    gsap.registerPlugin(ScrollTrigger);
    if (window.SplitText) gsap.registerPlugin(SplitText);
    if (window.CustomEase) gsap.registerPlugin(CustomEase);
    const EASE = window.CustomEase ? CustomEase.create("silk", "M0,0 C0.16,1 0.3,1 1,1") : "expo.out";
    const mm = gsap.matchMedia();

    /* Rolagem suave */
    let lenis = null;
    if (window.Lenis) {
      lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 0.9, touchMultiplier: 1.3 });
      window.__lenis = lenis;
      lenis.on("scroll", (e) => { ScrollTrigger.update(); onScrollUI(e.scroll); });
      gsap.ticker.add((t) => lenis.raf(t * 1000)); gsap.ticker.lagSmoothing(0);
    } else addEventListener("scroll", () => onScrollUI(scrollY), { passive: true });
    onScrollUI(scrollY);

    /* Cursor + botões magnéticos */
    if (fine) {
      html.classList.add("has-cursor");
      const cur = $(".cursor"), lab = $(".cursor-label"), labS = $("span", lab);
      const cx = gsap.quickTo(cur, "x", { duration: .16, ease: "power3" }), cy = gsap.quickTo(cur, "y", { duration: .16, ease: "power3" });
      const lx = gsap.quickTo(lab, "x", { duration: .45, ease: "power3" }), ly = gsap.quickTo(lab, "y", { duration: .45, ease: "power3" });
      addEventListener("pointermove", (ev) => { cx(ev.clientX); cy(ev.clientY); lx(ev.clientX); ly(ev.clientY); }, { passive: true });
      document.addEventListener("pointerover", (ev) => {
        const c = ev.target.closest("[data-cursor]");
        if (c) { labS.textContent = c.dataset.cursor; lab.classList.add("is-on"); cur.style.opacity = 0; }
        else { lab.classList.remove("is-on"); cur.style.opacity = 1; cur.classList.toggle("is-link", !!ev.target.closest("a, button, summary, .chip")); }
      });
      $$("[data-magnetic]").forEach((b) => {
        const qx = gsap.quickTo(b, "x", { duration: .7, ease: "elastic.out(1, .4)" }), qy = gsap.quickTo(b, "y", { duration: .7, ease: "elastic.out(1, .4)" });
        b.addEventListener("pointermove", (ev) => { const r = b.getBoundingClientRect(); qx((ev.clientX - r.left - r.width / 2) * .3); qy((ev.clientY - r.top - r.height / 2) * .3); });
        b.addEventListener("pointerleave", () => { qx(0); qy(0); });
      });
    }

    /* Rastro de fotos no hero (mouse e dedo) */
    const hero = $(".hero"), trail = $("#trail");
    const pool = trail.dataset.imgs.split(",").map((n) => { const im = new Image(); im.src = `fotos/${n}-sm.webp`; im.onerror = () => { im.onerror = null; im.src = `fotos/${n}.webp`; }; im.alt = ""; trail.appendChild(im); return im; });
    let ti = 0, lastP = null, z = 1;
    function drop(x, y, dx, dy) {
      const im = pool[ti++ % pool.length]; z++;
      gsap.killTweensOf(im);
      const rot = gsap.utils.random(-12, 12), w = im.offsetWidth || 130, h = im.offsetHeight || 173;
      gsap.set(im, { x: x - w / 2, y: y - h / 2, zIndex: z, opacity: 1, scale: .3, rotate: rot - dx * .15 });
      gsap.timeline().to(im, { scale: 1, x: `+=${dx * 2}`, y: `+=${dy * 2}`, rotate: rot, duration: .9, ease: EASE })
        .to(im, { scale: .2, opacity: 0, y: "+=70", duration: .8, ease: "power3.in" }, .6);
    }
    function trailMove(px, py) {
      const r = hero.getBoundingClientRect(); const x = px - r.left, y = py - r.top;
      if (y < 0 || y > r.height) return;
      if (!lastP) { lastP = { x, y }; return; }
      const dx = x - lastP.x, dy = y - lastP.y;
      if (Math.hypot(dx, dy) > (fine ? 120 : 70)) { drop(x, y, dx, dy); lastP = { x, y }; }
    }
    hero.addEventListener("pointermove", (ev) => { if (ev.pointerType === "mouse") trailMove(ev.clientX, ev.clientY); }, { passive: true });
    hero.addEventListener("touchmove", (ev) => { const t = ev.touches[0]; trailMove(t.clientX, t.clientY); }, { passive: true });
    hero.addEventListener("pointerleave", () => (lastP = null));
    hero.addEventListener("touchend", () => (lastP = null));
    const glow = $(".hero__glow");
    gsap.set(glow, { x: innerWidth * .7, y: innerHeight * .35 });
    const gx = gsap.quickTo(glow, "x", { duration: 1.4, ease: "power3" }), gy = gsap.quickTo(glow, "y", { duration: 1.4, ease: "power3" });
    hero.addEventListener("pointermove", (ev) => { const r = hero.getBoundingClientRect(); gx(ev.clientX - r.left); gy(ev.clientY - r.top); }, { passive: true });

    /* Retrato: paralaxe com o mouse e inclinação no celular */
    const photo = $(".hero__photo"), mask = $(".hero__mask"), pImg = $(".hero__mask img"), seal = $(".seal"), food = $(".hero__food");
    if (fine) {
      const px = gsap.quickTo(mask, "x", { duration: 1.2, ease: "power3" }), py = gsap.quickTo(mask, "y", { duration: 1.2, ease: "power3" });
      const sx = gsap.quickTo(seal, "x", { duration: 1.4, ease: "power3" }), sy = gsap.quickTo(seal, "y", { duration: 1.4, ease: "power3" });
      const fx = gsap.quickTo(food, "x", { duration: 1.6, ease: "power3" }), fy = gsap.quickTo(food, "y", { duration: 1.6, ease: "power3" });
      hero.addEventListener("pointermove", (ev) => { const nx = ev.clientX / innerWidth - .5, ny = ev.clientY / innerHeight - .5; px(nx * -18); py(ny * -14); sx(nx * 40); sy(ny * 30); fx(nx * -50); fy(ny * -40); }, { passive: true });
    } else {
      document.addEventListener("pointerdown", (ev) => {
        const d = document.createElement("i");
        d.style.cssText = `position:fixed;left:${ev.clientX}px;top:${ev.clientY}px;width:18px;height:18px;margin:-9px 0 0 -9px;border-radius:50%;border:1.5px solid #C3D18A;pointer-events:none;z-index:1600`;
        document.body.appendChild(d);
        gsap.to(d, { scale: 5, opacity: 0, duration: .8, ease: "power2.out", onComplete: () => d.remove() });
      }, { passive: true });
    }

    /* Entrada do hero */
    const words = $$(".hero__title .w");
    function heroIn() {
      gsap.set([words, ".hero__intro", ".hero__kicker", photo], { visibility: "visible" });
      const tl = gsap.timeline();
      tl.fromTo(mask, { clipPath: "inset(100% 0% 0% 0% round 999px 999px 0 0)" }, { clipPath: "inset(0% 0% 0% 0% round 999px 999px 0 0)", duration: 1.7, ease: EASE }, 0)
        .from(pImg, { scale: 1.45, duration: 2.4, ease: EASE }, 0)
        .from(words, { yPercent: 105, rotate: 4, duration: 1.5, stagger: .12, ease: EASE }, .2)
        .from(".hero__kicker span", { y: 20, opacity: 0, stagger: .08, duration: 1, ease: EASE }, .4)
        .from(seal, { scale: 0, rotate: -120, duration: 1.4, ease: "back.out(1.6)" }, .9)
        .from(food, { scale: 0, duration: 1.2, ease: "back.out(1.8)" }, 1.05)
        .from(".hero__intro > *", { y: 30, opacity: 0, stagger: .1, duration: 1.1, ease: EASE }, .8)
        .from(".header__in", { y: -40, opacity: 0, duration: 1.1, ease: EASE, clearProps: "transform,opacity" }, .7)
        .from(".hero__scroll", { opacity: 0, duration: 1 }, 1.4)
        .add(() => { const r = hero.getBoundingClientRect(); [[.18, .38], [.42, .7], [.86, .78]].forEach(([fx2, fy2], k) => setTimeout(() => drop(r.width * fx2, r.height * fy2, (fx2 - .5) * 50, (fy2 - .5) * 50), k * 150)); }, 1.2);
    }

    /* Abertura (uma vez por sessão) */
    const loader = $("#loader");
    if (html.classList.contains("has-loader") && loader) {
      try { sessionStorage.setItem("sr-loader", "1"); } catch (e) {}
      lenis && lenis.stop();
      const imgs = $$(".loader__imgs img", loader), cnt = $("#loaderCount"), o = { v: 0 };
      const tl = gsap.timeline();
      tl.from(".loader__h span", { yPercent: 110, duration: 1.1, stagger: .1, ease: EASE })
        .to(o, { v: 100, duration: 2, ease: "power2.inOut", onUpdate: () => (cnt.textContent = Math.round(o.v)) }, .1)
        .to(".loader__bar", { scaleX: 1, duration: 2, ease: "power2.inOut" }, .1);
      imgs.forEach((im, k) => tl.fromTo(im, { opacity: 0, scale: 1.25 }, { opacity: 1, scale: 1, duration: .45, ease: "power3.out" }, .15 + k * .3));
      tl.to(".loader__imgs", { scale: 3.2, opacity: 0, duration: 1, ease: "expo.in" }, 2.15)
        .to(".loader__name, .loader__bar", { opacity: 0, y: -20, duration: .45 }, 2.2)
        .to(loader, { clipPath: "inset(0 0 100% 0)", duration: 1.1, ease: "expo.inOut", onComplete: () => { loader.remove(); html.classList.remove("has-loader"); lenis && lenis.start(); } }, 2.55)
        .add(heroIn, 2.8);
    } else { if (loader) loader.remove(); html.classList.remove("has-loader"); heroIn(); }

    /* Hero ao rolar: nome se separa, foto em câmera lenta */
    const hs = { trigger: hero, start: "top top", end: "bottom top", scrub: 1 };
    gsap.to(".hero__l1 .w", { xPercent: -14, ease: "none", scrollTrigger: hs });
    gsap.to(".hero__l2 .w", { xPercent: 12, ease: "none", scrollTrigger: { ...hs } });
    gsap.to(pImg, { scale: 1.22, yPercent: -6, ease: "none", scrollTrigger: { ...hs, scrub: 1.6 } });
    gsap.to(seal, { rotate: 160, ease: "none", scrollTrigger: { ...hs } });
    gsap.to(".hero__intro", { opacity: 0, y: -50, ease: "none", scrollTrigger: { trigger: hero, start: "25% top", end: "65% top", scrub: true } });

    /* Manifesto: palavras acendem */
    const man = $("#manifesto");
    (function wrap(node) {
      [...node.childNodes].forEach((n) => {
        if (n.nodeType === 3) { const f = document.createDocumentFragment(); n.textContent.split(/(\s+)/).forEach((p) => { if (!p) return; if (/^\s+$/.test(p)) f.appendChild(document.createTextNode(p)); else { const s = document.createElement("span"); s.className = "w"; s.textContent = p; f.appendChild(s); } }); n.replaceWith(f); }
        else if (n.nodeType === 1) wrap(n);
      });
    })(man);
    gsap.to($$(".w", man), { opacity: 1, stagger: .1, ease: "none", scrollTrigger: { trigger: man, start: "top 80%", end: "bottom 45%", scrub: true } });
    $$("[data-speed]").forEach((el) => {
      const s = parseFloat(el.dataset.speed);
      gsap.fromTo(el, { yPercent: -s * 120 }, { yPercent: s * 120, rotate: s * 30, ease: "none", scrollTrigger: { trigger: el.closest("section"), start: "top bottom", end: "bottom top", scrub: true } });
      gsap.from($("img", el), { scale: 1.6, duration: 1.6, ease: EASE, scrollTrigger: { trigger: el, start: "top 90%" } });
    });

    /* Títulos por linhas com máscara */
    const splitAll = () => {
      if (!window.SplitText) return;
      $$("section h2:not(#sobre-title), .chapter h3, .feat h3, .pull p").forEach((h) => {
        const sp = SplitText.create(h, { type: "lines", mask: "lines" });
        gsap.from(sp.lines, { yPercent: 108, rotate: 2.5, transformOrigin: "0 0", duration: 1.4, stagger: .09, ease: EASE, scrollTrigger: { trigger: h, start: "top 88%" } });
      });
      ScrollTrigger.refresh();
    };
    (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(() => { try { splitAll(); } catch (e) { console.error(e); } });
    $$(".label, .chapter__k").forEach((l) => gsap.from(l, { opacity: 0, x: -24, duration: 1, ease: EASE, scrollTrigger: { trigger: l, start: "top 92%" } }));

    /* Especialidades */
    mm.add("(min-width: 1000px)", () => {
      const sts = espItems.map((it, i) => ScrollTrigger.create({ trigger: it, start: "top 58%", end: "bottom 58%", onEnter: () => espStage(i), onEnterBack: () => espStage(i) }));
      gsap.from(".stage__frame", { clipPath: "inset(40% 20% 0% 20% round 240px 240px 0 0)", duration: 1.6, ease: EASE, scrollTrigger: { trigger: ".stage", start: "top 85%" } });
      return () => sts.forEach((s) => s.kill());
    });
    gsap.from(".esp__item", { y: 50, opacity: 0, stagger: .07, duration: 1.2, ease: EASE, scrollTrigger: { trigger: "#espList", start: "top 85%" } });

    /* Sobre: zoom fixado */
    const aboutTl = gsap.timeline({ scrollTrigger: { trigger: ".about__zoom", start: "top top", end: "+=120%", pin: true, scrub: 1.2, anticipatePin: 1 } });
    aboutTl.to(".about__img", { clipPath: "inset(0% 0% 0% 0% round 0px 0px 0 0)", ease: "power2.inOut" }, 0)
      .to(".about__img img", { scale: 1, ease: "power2.inOut" }, 0)
      .from(".about__over h2", { scale: .55, opacity: 0, ease: "power2.out" }, .1)
      .to(".about__over", { yPercent: -35, ease: "none" }, .6);
    $$(".chapter__img, .chapter__chip").forEach((f) => {
      const arch = f.classList.contains("arch");
      gsap.fromTo(f, { clipPath: arch ? "inset(100% 0 0 0 round 999px 999px 0 0)" : "inset(100% 0 0 0)" }, { clipPath: arch ? "inset(0% 0 0 0 round 999px 999px 0 0)" : "inset(0% 0 0 0)", duration: 1.6, ease: EASE, scrollTrigger: { trigger: f, start: "top 88%" } });
      const im = $("img", f); gsap.fromTo(im, { yPercent: -7, scale: 1.18 }, { yPercent: 7, scale: 1.18, ease: "none", scrollTrigger: { trigger: f, start: "top bottom", end: "bottom top", scrub: true } });
    });
    gsap.to(".chapter__chip", { y: -80, rotate: 4, ease: "none", scrollTrigger: { trigger: ".chapter--b", start: "top bottom", end: "bottom top", scrub: true } });
    gsap.from(".chapter__txt > *", { y: 40, opacity: 0, stagger: .08, duration: 1.2, ease: EASE, scrollTrigger: { trigger: ".chapters", start: "top 75%" } });
    $$(".chapter__txt").forEach((t) => gsap.from($$(":scope > p, :scope > a", t), { y: 30, opacity: 0, stagger: .08, duration: 1.1, ease: EASE, scrollTrigger: { trigger: t, start: "top 82%" } }));
    gsap.from(".facts li", { y: 30, opacity: 0, stagger: .08, duration: 1, ease: EASE, scrollTrigger: { trigger: ".facts", start: "top 90%" } });

    /* Como funciona: trilho horizontal com linha e pontos */
    const steps = $$(".step");
    mm.add("(min-width: 1000px)", () => {
      const sec = $(".how"); sec.classList.add("is-pinned");
      const track = $("#howTrack");
      const dist = () => Math.max(0, track.scrollWidth - innerWidth);
      const tw = gsap.to(track, { x: () => -dist(), ease: "none", scrollTrigger: { trigger: sec, start: "top top", end: () => "+=" + (dist() + innerHeight * .4), pin: ".how__pin", scrub: 1, invalidateOnRefresh: true,
        onUpdate: (s) => { gsap.set(".how__line line", { strokeDashoffset: 1000 - 1000 * s.progress }); steps.forEach((st, i) => st.classList.toggle("is-on", s.progress >= i / steps.length - .02)); } } });
      steps.forEach((st) => {
        const media = $(".step__media", st);
        gsap.fromTo(media, { clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0% 0)", ease: "none", scrollTrigger: { trigger: st, containerAnimation: tw, start: "left 95%", end: "left 55%", scrub: true } });
        const im = $("img", media); if (im) gsap.fromTo(im, { scale: 1.35, xPercent: 8 }, { scale: 1, xPercent: -4, ease: "none", scrollTrigger: { trigger: st, containerAnimation: tw, start: "left right", end: "right left", scrub: true } });
        gsap.from($(".step__n", st), { yPercent: 80, opacity: 0, ease: "none", scrollTrigger: { trigger: st, containerAnimation: tw, start: "left 90%", end: "left 55%", scrub: true } });
        gsap.from([$("h3", st), $("p", st)], { y: 30, opacity: 0, stagger: .1, ease: "none", scrollTrigger: { trigger: st, containerAnimation: tw, start: "left 80%", end: "left 50%", scrub: true } });
      });
      return () => { sec.classList.remove("is-pinned"); gsap.set(track, { clearProps: "transform" }); };
    });
    mm.add("(max-width: 999px)", () => {
      steps.forEach((st) => {
        ScrollTrigger.create({ trigger: st, start: "top 65%", onEnter: () => st.classList.add("is-on"), onLeaveBack: () => st.classList.remove("is-on") });
        gsap.fromTo($(".step__media", st), { clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0% 0)", duration: 1.4, ease: EASE, scrollTrigger: { trigger: st, start: "top 85%" } });
        gsap.from([$(".step__n", st), $("h3", st), $("p", st)], { y: 40, opacity: 0, stagger: .08, duration: 1.1, ease: EASE, scrollTrigger: { trigger: st, start: "top 75%" } });
      });
    });

    /* Receitas */
    gsap.fromTo(".feat__img", { clipPath: "inset(100% 0 0 0 round 999px 999px 0 0)" }, { clipPath: "inset(0% 0 0 0 round 999px 999px 0 0)", duration: 1.8, ease: EASE, scrollTrigger: { trigger: ".feat", start: "top 80%" } });
    gsap.fromTo(".feat__img img", { yPercent: -8 }, { yPercent: 2, ease: "none", scrollTrigger: { trigger: ".feat", start: "top bottom", end: "bottom top", scrub: true } });
    gsap.from(".feat__txt > *:not(h3)", { y: 30, opacity: 0, stagger: .08, duration: 1.1, ease: EASE, scrollTrigger: { trigger: ".feat__txt", start: "top 80%" } });
    gsap.set(recs, { opacity: 0 });
    ScrollTrigger.batch(recs, { start: "top 92%", once: true, onEnter: (b) => gsap.fromTo(b, { y: 110, opacity: 0 }, { y: 0, opacity: 1, stagger: .08, duration: 1.3, ease: EASE, overwrite: true }) });
    $$(".rec__img img").forEach((im) => gsap.fromTo(im, { yPercent: -8 }, { yPercent: 0, ease: "none", scrollTrigger: { trigger: im, start: "top bottom", end: "bottom top", scrub: true } }));
    const skewTo = gsap.quickTo(grid, "skewY", { duration: .6, ease: "power3" }), clamp = gsap.utils.clamp(-5, 5);
    ScrollTrigger.create({ trigger: grid, start: "top bottom", end: "bottom top", onUpdate: (s) => skewTo(clamp(s.getVelocity() / -400)), onLeave: () => skewTo(0), onLeaveBack: () => skewTo(0) });
    if (fine) $$(".rec__btn").forEach((b) => {
      const im = $(".rec__img", b); gsap.set(im, { transformPerspective: 900 });
      const rx = gsap.quickTo(im, "rotationX", { duration: .6, ease: "power3" }), ry = gsap.quickTo(im, "rotationY", { duration: .6, ease: "power3" });
      b.addEventListener("pointermove", (ev) => { const q = im.getBoundingClientRect(); ry(((ev.clientX - q.left) / q.width - .5) * 10); rx(((ev.clientY - q.top) / q.height - .5) * -10); });
      b.addEventListener("pointerleave", () => { rx(0); ry(0); });
    });

    /* Dicas: o trilho entra deslizando e os cartões em velocidades diferentes */
    gsap.from("#tipsRail", { x: 200, duration: 1.8, ease: EASE, scrollTrigger: { trigger: "#tipsRail", start: "top 85%" } });
    $$(".tip").forEach((t, i) => gsap.fromTo(t, { y: 60 + i * 20 }, { y: -(i % 2) * 40, ease: "none", scrollTrigger: { trigger: ".tips", start: "top bottom", end: "bottom top", scrub: true } }));

    /* FAQ */
    gsap.from(".qa", { y: 40, opacity: 0, stagger: .07, duration: 1.1, ease: EASE, scrollTrigger: { trigger: "#faqList", start: "top 85%" } });

    /* Contato: letreiro guiado pela rolagem + foto em arco */
    const loop = gsap.to("#ctaTrack", { xPercent: -50, duration: 26, ease: "none", repeat: -1 });
    ScrollTrigger.create({ trigger: ".cta", start: "top bottom", end: "bottom top", onUpdate: (s) => { const v = s.getVelocity(); gsap.to(loop, { timeScale: (1 + Math.min(Math.abs(v) / 250, 6)) * (v < 0 ? -1 : 1), duration: .2, overwrite: true }); gsap.to(loop, { timeScale: 1, duration: 1.2, delay: .25 }); } });
    gsap.fromTo(".cta__arch", { clipPath: "inset(100% 0 0 0 round 999px 999px 0 0)" }, { clipPath: "inset(0% 0 0 0 round 999px 999px 0 0)", duration: 1.8, ease: EASE, scrollTrigger: { trigger: ".cta__photo", start: "top 85%" } });
    gsap.from(".cta__magnet", { scale: 0, rotate: -180, duration: 1.6, ease: "elastic.out(1, .5)", scrollTrigger: { trigger: ".cta__photo", start: "top 70%" } });
    gsap.from(".cta__send li", { x: -30, opacity: 0, stagger: .1, duration: 1, ease: EASE, scrollTrigger: { trigger: ".cta__send", start: "top 85%" } });
    gsap.from(".footer__big", { yPercent: 60, opacity: 0, duration: 1.6, ease: EASE, scrollTrigger: { trigger: ".footer", start: "top 95%" } });

    addEventListener("load", () => ScrollTrigger.refresh());
  }
})();

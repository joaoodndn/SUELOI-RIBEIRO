/* =====================================================================
   CONFIGURAÇÃO — edite aqui. Nada abaixo inventa dados: campos vazios
   simplesmente não aparecem no site.
   ===================================================================== */
const CONFIG = {
  // WhatsApp com DDI + DDD + número, só dígitos. Ex.: "5569999999999".
  // Enquanto estiver vazio, os botões de agendamento abrem a conversa no Instagram.
  whatsapp: "",
  mensagemWhatsapp: "Olá, Sueli! Vim pelo site e gostaria de agendar uma consulta.",
  instagram: "nutri.sueliribeiro",

  // Opcionais: preencha para aparecerem em "Contato" e no "Sobre".
  cidade: "",            // ex.: "Cacoal/RO"
  endereco: "",          // ex.: "Rua ..., nº ..., bairro"
  horarios: "",          // ex.: "Segunda a sexta, 8h às 18h"
  atendimento: "",       // ex.: "Presencial e online"
  mapaEmbedUrl: "",      // link "incorporar mapa" do Google Maps
  formacao: [],          // ex.: ["Nutrição, Instituição (ano)"]

  // Só depoimentos reais, enviados por escrito e autorizados.
  // Ex.: { texto: "...", nome: "Maria S.", cidade: "Cacoal/RO" }
  depoimentos: [],

  // Receitas publicadas no Instagram (postId = código do link instagram.com/p/<postId>/)
  receitas: [
    { t: "Empanada assada", d: "Massa dourada e recheio caprichado, feita no forno.", c: "Lanches e bebidas", img: "receita-empanada-assada", pos: "40% 50%", post: "DeXmKA9Fib7", big: true },
    { t: "Café da manhã com manga e pitaya", d: "Omelete, pão, manga e pitaya num prato só.", c: "Café da manhã", img: "receita-cafe-manga-pitaya", pos: "50% 62%", post: "DemVB3zR4yP" },
    { t: "Bolo rubi", d: "Bolo de beterraba com cacau, amêndoas e mel.", c: "Doces e bolos", img: "receita-bolo-rubi-beterraba-cacau", pos: "50% 0%", tags: ["sem glúten", "sem lactose"], post: "DfyIelmMBDR" },
    { t: "Mingau, omelete e kiwi", d: "Ideia de café da manhã com variedade no prato.", c: "Café da manhã", img: "receita-cafe-mingau-omelete-kiwi", pos: "50% 50%", post: "Dd8y58jTGTy" },
    { t: "Pão zero glúten", d: "Pão caseiro para quem precisa evitar o glúten.", c: "Café da manhã", img: "esp-intolerancias-pao", pos: "50% 55%", tags: ["sem glúten"], post: "DdDCYhoMzAb" },
    { t: "Café gelado", d: "Café gelado com cacau, whey e canela.", c: "Lanches e bebidas", img: "receita-cafe-gelado", pos: "50% 70%", post: "De21DqgskUT" },
    { t: "Bolo de amêndoa", d: "Bolo úmido e chocolatudo para o café da tarde.", c: "Doces e bolos", img: "receita-bolo-amendoa", pos: "50% 30%", post: "Dfu7IzZFtW3" },
    { t: "Iogurte com uvas", d: "Lanche rápido com iogurte, uvas e proteína.", c: "Lanches e bebidas", img: "receita-iogurte-uvas-proteina", pos: "50% 45%", post: "DeKYN_azbpL" },
    { t: "Omelete com mamão", d: "Café da manhã simples, colorido e completo.", c: "Café da manhã", img: "receita-cafe-omelete-mamao", pos: "50% 62%", post: "Dd6H4E8zLrd" },
    { t: "Lanche de banana com tapioca", d: "Uma opção prática para o lanche da tarde.", c: "Lanches e bebidas", img: "receita-lanche-banana-tapioca", pos: "50% 60%", post: "DexBrZwTE-h" },
    { t: "Omelete com tomate", d: "Um prato rápido para começar o dia bem.", c: "Café da manhã", img: "receita-omelete-tomate-cafe-na-mesa", pos: "50% 38%", post: "DeB_WsgTGZp" },
    { t: "Tapioca invertida", d: "Um jeito diferente de preparar a tapioca.", c: "Lanches e bebidas", img: "receita-tapioca-invertida", pos: "50% 60%", post: "Dd_jqz_TUUD" }
  ],

  dicas: [
    { img: "dica-saleiro-ervas", t: "Mais sabor, menos dependência do saleiro", s: "Ervas e especiarias na cozinha", post: "DfgP8o-jGrl" },
    { img: "card-cru-ou-cozido", t: "Cru ou cozido?", s: "5 alimentos e o melhor preparo", post: "DdxaBvLjBbn" },
    { img: "card-tapioca-cuscuz-ou-pao", t: "Tapioca, cuscuz ou pão?", s: "Qual combina com o seu objetivo", post: "DfCsT9BEUUx" },
    { img: "card-cuscuz-flocao", t: "Quanto rende o flocão?", s: "35 g de flocão viram 100 g de cuscuz", post: "DfDFixlFhm6" },
    { img: "card-mel-iogurte-probioticos", t: "Mel no iogurte", s: "O que um estudo mostrou sobre probióticos", post: "DedU66XMIXo" }
  ],

  faq: [
    { p: "Como é a primeira consulta?", r: "É uma conversa detalhada sobre sua saúde, sua rotina, sua alimentação e seus objetivos, com avaliação inicial. A partir dela, o plano é construído junto com você." },
    { p: "Preciso levar exames?", r: "Se você tiver exames recentes, leve. Eles ajudam a individualizar o acompanhamento. Se não tiver, a Sueli orienta na consulta sobre o que pode ser útil." },
    { p: "Atende diabetes e tireoide?", r: "Sim. Doenças metabólicas, diabetes e alterações da tireoide fazem parte das especialidades do atendimento." },
    { p: "Quem usa medicamento para emagrecer pode fazer o acompanhamento?", r: "Pode. O acompanhamento para quem usa análogos de GLP-1 é uma das especialidades, sempre em conjunto com o médico que prescreveu o tratamento." },
    { p: "Quanto tempo dura o acompanhamento?", r: "Depende de cada caso e dos seus objetivos. O ritmo dos retornos é combinado na consulta." },
    { p: "Como eu agendo?", r: "Pelo botão “Agendar consulta” deste site. Você manda uma mensagem e recebe os horários disponíveis." }
  ]
};

/* Dimensões reais de cada foto (para srcset e para evitar salto de layout) */
const FOTOS = { "avaliacao-bioimpedancia": [720, 1280], "card-cru-ou-cozido": [1122, 1401], "card-cuscuz-flocao": [1200, 1495], "card-lista-de-compras-com-sueli": [1200, 1599], "card-mel-iogurte-probioticos": [1200, 1474], "card-tapioca-cuscuz-ou-pao": [1122, 1402], "card-tsh-alto-hipotireoidismo": [941, 1672], "dica-saleiro-ervas": [1122, 1402], "esp-diabetes-card-campanha": [1122, 1402], "esp-intestinal-cafe-da-manha": [720, 1280], "esp-intolerancias-pao": [720, 1280], "prato-sua-parte-pitaya": [720, 1280], "receita-bolo-amendoa": [1200, 1500], "receita-bolo-rubi-beterraba-cacau": [1200, 2134], "receita-cafe-gelado": [720, 1280], "receita-cafe-manga-pitaya": [720, 1280], "receita-cafe-mingau-omelete-kiwi": [1200, 2134], "receita-cafe-omelete-mamao": [1200, 2133], "receita-empanada-assada": [1200, 1600], "receita-iogurte-uvas-proteina": [720, 1280], "receita-lanche-banana-tapioca": [720, 1280], "receita-omelete-tomate-cafe-na-mesa": [1200, 2133], "receita-tapioca-invertida": [640, 1136], "vegetais-coloridos": [512, 910] };


/* Especialidades: título, texto curto e a foto que aparece ao passar o mouse */
CONFIG.especialidades = [
  { t: "Emagrecimento e GLP-1", d: "Emagrecer com saúde e sem radicalismo, inclusive para quem usa análogos de GLP-1 e precisa cuidar da alimentação no tratamento.", img: "prato-sua-parte-pitaya", pos: "50% 45%" },
  { t: "Diabetes e metabolismo", d: "Orientação alimentar para o controle da glicemia e da saúde metabólica, ajustada aos seus exames.", img: "esp-diabetes-card-campanha", pos: "50% 40%" },
  { t: "Tireoide e hormônios", d: "Alimentação para quem convive com alterações hormonais e da tireoide, em conjunto com o acompanhamento médico.", img: "card-tsh-alto-hipotireoidismo", pos: "50% 30%" },
  { t: "Saúde intestinal", d: "Estratégias para um intestino mais equilibrado, com mais conforto e bem-estar na rotina.", img: "esp-intestinal-cafe-da-manha", pos: "50% 60%" },
  { t: "Saúde do fígado", d: "Cuidado nutricional voltado à saúde hepática, com mais vegetais e ajustes graduais.", img: "vegetais-coloridos", pos: "50% 80%" },
  { t: "Intolerâncias alimentares", d: "Substituições inteligentes e receitas gostosas para quem precisa evitar glúten, lactose ou outros alimentos.", img: "esp-intolerancias-pao", pos: "50% 55%" }
];

(function () {
  "use strict";
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const esc = (t) => String(t ?? "").replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
  const html = document.documentElement;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
  const igUrl = `https://www.instagram.com/${CONFIG.instagram}/`;
  const post = (id) => (id ? `https://www.instagram.com/p/${encodeURIComponent(id)}/` : igUrl);
  const ARROW = '<svg aria-hidden="true"><use href="#i-arrow"/></svg>';

  function picture(name, alt, sizes, extra = "") {
    const [w, h] = FOTOS[name] || [600, 750];
    const set = w > 640 ? `fotos/${name}-sm.webp 600w, fotos/${name}.webp ${w}w` : `fotos/${name}.webp ${w}w`;
    return `<picture><source type="image/webp" srcset="${set}" sizes="${sizes}"><img src="fotos/${name}.jpg" width="${w}" height="${h}" alt="${esc(alt)}" loading="lazy" decoding="async" ${extra}></picture>`;
  }

  /* ---------- Agendamento ---------- */
  const digits = String(CONFIG.whatsapp).replace(/\D/g, "");
  const hasWa = digits.length >= 12;
  const agendarUrl = hasWa ? `https://wa.me/${digits}?text=${encodeURIComponent(CONFIG.mensagemWhatsapp)}` : `https://ig.me/m/${CONFIG.instagram}`;
  const agendarLabel = hasWa ? "Agendar pelo WhatsApp" : "Agendar pelo Instagram";
  $$("[data-agendar]").forEach((a) => (a.href = agendarUrl));
  $$("[data-agendar-label]").forEach((s) => (s.textContent = agendarLabel));
  if (!hasWa) $$("use[href='#i-wa']").forEach((u) => u.setAttribute("href", "#i-ig"));
  $$("[data-ig-link]").forEach((a) => (a.href = igUrl));
  $("#year").textContent = new Date().getFullYear();

  /* ---------- Dados opcionais ---------- */
  const info = $("#contactInfo");
  const addInfo = (k, v) => { if (v) info.insertAdjacentHTML("beforeend", `<li><b>${esc(k)}</b>${esc(v)}</li>`); };
  if (CONFIG.cidade) addInfo("Cidade", CONFIG.cidade);
  addInfo("Endereço", CONFIG.endereco); addInfo("Horários", CONFIG.horarios); addInfo("Atendimento", CONFIG.atendimento);
  if (CONFIG.mapaEmbedUrl) $("#mapSlot").innerHTML = `<div class="cta__map"><iframe src="${esc(CONFIG.mapaEmbedUrl)}" title="Mapa do consultório" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>`;
  if (CONFIG.formacao.length) $("#facts").insertAdjacentHTML("afterbegin", `<div style="grid-column:1/-1"><dt>Formação</dt><dd>${CONFIG.formacao.map(esc).join("<br>")}</dd></div>`);
  if (CONFIG.depoimentos.length) {
    $("#testiList").innerHTML = CONFIG.depoimentos.map((d) => `<figure><blockquote>${esc(d.texto)}</blockquote><figcaption>${esc(d.nome)}${d.cidade ? ", " + esc(d.cidade) : ""}</figcaption></figure>`).join("");
    $("#depoimentos").hidden = false;
  }

  /* ---------- Especialidades ---------- */
  $("#specList").innerHTML = CONFIG.especialidades.map((s, i) => `
    <li class="spec" data-i="${i}">
      <div class="spec__row">
        <h3>${esc(s.t)}</h3>
        <p>${esc(s.d)}</p>
        <span class="spec__go" aria-hidden="true">${ARROW}</span>
        <div class="spec__thumb">${picture(s.img, s.t, "90vw", `style="object-position:${s.pos}"`)}</div>
      </div>
    </li>`).join("");
  const preview = $("#preview");
  preview.innerHTML = CONFIG.especialidades.map((s) => `<img src="fotos/${s.img}${(FOTOS[s.img] || [0])[0] > 640 ? "-sm" : ""}.webp" alt="" style="object-position:${s.pos}" loading="lazy">`).join("");

  /* ---------- Receitas ---------- */
  const cats = ["Todas", "Café da manhã", "Doces e bolos", "Lanches e bebidas"];
  const filters = $("#recFilters"), grid = $("#recGrid");
  filters.innerHTML = cats.map((c, i) => `<button class="chip" type="button" aria-pressed="${i === 0}" data-cat="${esc(c)}">${esc(c)}</button>`).join("");
  grid.innerHTML = CONFIG.receitas.map((r, i) => `
    <figure class="rec${r.big ? " rec--big" : ""}" data-i="${i}" data-cat="${esc(r.c)}">
      <button class="rec__btn" type="button" data-cursor="Abrir" aria-label="Abrir receita: ${esc(r.t)}">
        ${picture(r.img, r.t, r.big ? "(min-width: 760px) 48vw, 92vw" : "(min-width: 1200px) 23vw, (min-width: 760px) 31vw, 46vw", `style="object-position:${r.pos || "50% 50%"}"`)}
      </button>
      <figcaption><div><h3>${esc(r.t)}</h3><p class="cat">${esc(r.c)}</p>${r.tags && r.tags.length ? `<div class="tags">${r.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>` : ""}</div></figcaption>
    </figure>`).join("");
  const recs = $$(".rec", grid);
  function filterBy(cat) {
    const first = new Map(recs.map((r) => [r, r.hidden ? null : r.getBoundingClientRect()]));
    recs.forEach((r) => { r.hidden = !(cat === "Todas" || r.dataset.cat === cat); r.classList.toggle("rec--big", cat === "Todas" && !!CONFIG.receitas[r.dataset.i].big); });
    if (window.ScrollTrigger) ScrollTrigger.refresh();
    if (reduce) return;
    recs.forEach((r) => {
      if (r.hidden) return;
      const last = r.getBoundingClientRect(), f = first.get(r);
      r.animate(f ? [{ transform: `translate(${f.left - last.left}px, ${f.top - last.top}px)` }, { transform: "none" }]
                  : [{ opacity: 0, transform: "translateY(30px) scale(.96)" }, { opacity: 1, transform: "none" }],
        { duration: 800, easing: "cubic-bezier(.16,1,.3,1)" });
    });
  }
  $$(".chip", filters).forEach((b) => b.addEventListener("click", () => { $$(".chip", filters).forEach((x) => x.setAttribute("aria-pressed", x === b)); filterBy(b.dataset.cat); }));

  const lb = $("#lb"), lbImg = $("#lbImg");
  let cur = 0, opener = null;
  const visible = () => recs.filter((r) => !r.hidden).map((r) => +r.dataset.i);
  function fill(i) {
    const r = CONFIG.receitas[i]; cur = i;
    const [w, h] = FOTOS[r.img] || [600, 750];
    lbImg.src = `fotos/${r.img}.webp`; lbImg.width = w; lbImg.height = h; lbImg.alt = r.t; lbImg.style.objectPosition = r.pos || "50% 50%";
    $("#lbCat").textContent = r.c; $("#lbTitle").textContent = r.t; $("#lbDesc").textContent = r.d;
    $("#lbTags").innerHTML = (r.tags || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("");
    $("#lbLink").href = post(r.post);
    const v = visible(); $("#lbCount").textContent = `${v.indexOf(i) + 1} de ${v.length}`;
  }
  function openLb(i, from) { opener = from; fill(i); lb.classList.add("is-open"); lb.setAttribute("aria-hidden", "false"); lenis && lenis.stop(); document.body.classList.add("is-locked"); setTimeout(() => $(".lb__close", lb).focus(), 60); }
  function closeLb() { lb.classList.remove("is-open"); lb.setAttribute("aria-hidden", "true"); lenis && lenis.start(); document.body.classList.remove("is-locked"); if (opener) opener.focus(); }
  const step = (d) => { const v = visible(); fill(v[(v.indexOf(cur) + d + v.length) % v.length]); };
  recs.forEach((r) => $(".rec__btn", r).addEventListener("click", (e) => openLb(+r.dataset.i, e.currentTarget)));
  $$("[data-close]", lb).forEach((b) => b.addEventListener("click", closeLb));
  $(".lb__prev", lb).addEventListener("click", () => step(-1));
  $(".lb__next", lb).addEventListener("click", () => step(1));
  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLb(); else if (e.key === "ArrowRight") step(1); else if (e.key === "ArrowLeft") step(-1);
    else if (e.key === "Tab") {
      const f = $$("button, a[href]", lb).filter((el) => el.offsetParent !== null);
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    }
  });
  let tx = null;
  lb.addEventListener("touchstart", (e) => (tx = e.touches[0].clientX), { passive: true });
  lb.addEventListener("touchend", (e) => { if (tx === null) return; const dx = e.changedTouches[0].clientX - tx; if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1); tx = null; });

  /* ---------- Dicas ---------- */
  const rail = $("#rail");
  rail.innerHTML = CONFIG.dicas.map((d) => `
    <figure class="tip"><a href="${post(d.post)}" target="_blank" rel="noopener" draggable="false">
      <div class="tip__img">${picture(d.img, `${d.t}: ${d.s}`, "(min-width: 760px) 340px, 76vw", 'draggable="false"')}</div>
      <figcaption>${esc(d.t)}<span>${esc(d.s)}</span></figcaption></a></figure>`).join("");
  const prevB = $("#railPrev"), nextB = $("#railNext");
  const slideW = () => { const t = $$(".tip", rail); return t[1] ? t[1].offsetLeft - t[0].offsetLeft : rail.clientWidth; };
  const upd = () => { prevB.disabled = rail.scrollLeft < 8; nextB.disabled = rail.scrollLeft > rail.scrollWidth - rail.clientWidth - 8; };
  prevB.addEventListener("click", () => rail.scrollBy({ left: -slideW(), behavior: "smooth" }));
  nextB.addEventListener("click", () => rail.scrollBy({ left: slideW(), behavior: "smooth" }));
  rail.addEventListener("scroll", upd, { passive: true }); addEventListener("resize", upd); upd();
  rail.addEventListener("keydown", (e) => { if (e.key === "ArrowRight") { e.preventDefault(); nextB.click(); } if (e.key === "ArrowLeft") { e.preventDefault(); prevB.click(); } });
  let drag = null;
  rail.addEventListener("pointerdown", (e) => { if (e.pointerType === "mouse") drag = { x: e.clientX, l: rail.scrollLeft, moved: false }; });
  addEventListener("pointermove", (e) => { if (!drag) return; const dx = e.clientX - drag.x; if (Math.abs(dx) > 6) { drag.moved = true; rail.classList.add("is-drag"); } if (drag.moved) rail.scrollLeft = drag.l - dx; });
  addEventListener("pointerup", () => { if (!drag) return; const m = drag.moved; drag = null; if (m) setTimeout(() => rail.classList.remove("is-drag"), 0); });

  /* ---------- Dúvidas ---------- */
  $("#faqList").innerHTML = CONFIG.faq.map((f, i) => `
    <div class="qa"><h3 style="margin:0;font:inherit;letter-spacing:inherit"><button class="qa__q" type="button" aria-expanded="false" aria-controls="qa${i}" id="qq${i}">${esc(f.p)}<span class="qa__ico" aria-hidden="true"></span></button></h3>
    <div class="qa__a" id="qa${i}" role="region" aria-labelledby="qq${i}"><div><p>${esc(f.r)}</p></div></div></div>`).join("");
  $$(".qa__q").forEach((q) => q.addEventListener("click", () => { const o = q.getAttribute("aria-expanded") !== "true"; q.setAttribute("aria-expanded", o); q.closest(".qa").classList.toggle("is-open", o); setTimeout(() => window.ScrollTrigger && ScrollTrigger.refresh(), 650); }));

  /* ---------- Fotos do hero levam às seções ---------- */
  $$(".strip__item[data-href]").forEach((f) => f.addEventListener("click", () => go(f.dataset.href)));

  /* ---------- Menu ---------- */
  const header = $("#header"), menuBtn = $(".menu-btn"), mnav = $("#mnav");
  function setMenu(open) {
    menuBtn.setAttribute("aria-expanded", open); menuBtn.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    mnav.classList.toggle("is-open", open); mnav.setAttribute("aria-hidden", !open); header.classList.toggle("menu-open", open);
    if (lenis) open ? lenis.stop() : lenis.start(); document.body.classList.toggle("is-locked", open);
    if (open) setTimeout(() => $("a", mnav).focus(), 400);
  }
  menuBtn.addEventListener("click", () => setMenu(menuBtn.getAttribute("aria-expanded") !== "true"));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && mnav.classList.contains("is-open")) { setMenu(false); menuBtn.focus(); } });

  /* ---------- Rolagem suave (Lenis) ---------- */
  let lenis = null;
  if (!reduce && window.Lenis) {
    lenis = new Lenis({ duration: 1.15, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
    if (window.gsap && window.ScrollTrigger) {
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((t) => lenis.raf(t * 1000)); gsap.ticker.lagSmoothing(0);
    } else { const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); }; requestAnimationFrame(raf); }
  }
  function go(hash) {
    const t = document.querySelector(hash); if (!t) return;
    if (lenis) lenis.scrollTo(t, { offset: hash === "#inicio" ? 0 : -90, duration: 1.4 });
    else window.scrollTo({ top: t.getBoundingClientRect().top + scrollY - 90, behavior: reduce ? "auto" : "smooth" });
    history.replaceState(null, "", hash);
  }
  $$('a[href^="#"]').forEach((a) => a.addEventListener("click", (e) => {
    const h = a.getAttribute("href"); if (h.length < 2) return;
    e.preventDefault(); if (mnav.classList.contains("is-open")) setMenu(false);
    go(h);
    if (h === "#conteudo") { const m = $("#conteudo"); m.setAttribute("tabindex", "-1"); m.focus({ preventScroll: true }); }
  }));

  /* ---------- Header e botão flutuante ---------- */
  const float = $(".float-cta"); let lastY = 0;
  function onScroll() {
    const y = scrollY;
    header.classList.toggle("is-solid", y > 20);
    if (!mnav.classList.contains("is-open")) header.classList.toggle("is-hidden", y > 500 && y > lastY + 2);
    if (y < lastY - 2) header.classList.remove("is-hidden");
    float.classList.toggle("is-on", y > innerHeight * .9 && y < document.documentElement.scrollHeight - innerHeight * 1.8);
    lastY = y;
  }
  addEventListener("scroll", onScroll, { passive: true }); onScroll();

  const navLinks = $$(".nav a");
  const spy = new IntersectionObserver((ents) => ents.forEach((en) => {
    if (!en.isIntersecting) return;
    navLinks.forEach((a) => (a.getAttribute("href") === "#" + en.target.id ? a.setAttribute("aria-current", "true") : a.removeAttribute("aria-current")));
  }), { rootMargin: "-45% 0px -50% 0px" });
  ["especialidades", "sobre", "como-funciona", "receitas", "dicas", "duvidas"].forEach((id) => spy.observe(document.getElementById(id)));

  /* ---------- Cursor e prévia das especialidades ---------- */
  if (fine && !reduce) {
    html.classList.add("has-cursor");
    const cur = $(".cursor"), label = $(".cursor__label");
    let mx = innerWidth / 2, my = innerHeight / 2, cx = mx, cy = my, px = mx, py = my;
    addEventListener("pointermove", (e) => { mx = e.clientX; my = e.clientY; }, { passive: true });
    (function loop() {
      cx += (mx - cx) * 0.22; cy += (my - cy) * 0.22; px += (mx - px) * 0.1; py += (my - py) * 0.1;
      cur.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      preview.style.left = px - 150 + "px"; preview.style.top = py - 190 + "px";
      requestAnimationFrame(loop);
    })();
    document.addEventListener("pointerover", (e) => {
      const t = e.target.closest("[data-cursor]"), l = e.target.closest("a, button, [data-cursor-link]");
      if (t) { label.textContent = t.dataset.cursor; cur.classList.add("is-label"); cur.classList.remove("is-link"); }
      else { cur.classList.remove("is-label"); cur.classList.toggle("is-link", !!l); }
    });
    const pimgs = $$("img", preview);
    $$(".spec").forEach((s) => {
      s.addEventListener("mouseenter", () => { preview.classList.add("is-on"); pimgs.forEach((im, k) => im.classList.toggle("is-on", k === +s.dataset.i)); });
      s.addEventListener("mouseleave", () => preview.classList.remove("is-on"));
    });
    // botões magnéticos
    $$("[data-magnetic], .btn").forEach((b) => {
      b.addEventListener("pointermove", (e) => { const r = b.getBoundingClientRect(); b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .25}px, ${(e.clientY - r.top - r.height / 2) * .35}px)`; });
      b.addEventListener("pointerleave", () => (b.style.transform = ""));
    });
  }

  /* =====================================================================
     ANIMAÇÕES (GSAP + ScrollTrigger + SplitText)
     ===================================================================== */
  if (reduce || !window.gsap || !window.ScrollTrigger) { html.classList.remove("anim"); html.classList.add("no-anim"); return; }
  window.__animReady = true;
  gsap.registerPlugin(ScrollTrigger);
  const hasSplit = !!window.SplitText;
  if (hasSplit) gsap.registerPlugin(SplitText);

  // 1. Entrada: título por linhas/letras, texto lateral e fotos subindo
  html.classList.remove("anim");
  const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
  if (hasSplit) {
    const st = SplitText.create(".hero h1", { type: "lines,words", mask: "lines" });
    tl.from(st.words, { yPercent: 115, duration: 1.4, stagger: .06 }, .1);
  } else tl.from(".hero h1", { y: 60, opacity: 0, duration: 1.2 }, .1);
  tl.from(".hero__side > *", { y: 30, opacity: 0, duration: 1.1, stagger: .08 }, .55)
    .from(".strip__item", { yPercent: 40, opacity: 0, duration: 1.6, stagger: .08, clipPath: "inset(30% 0 0 0 round 28px)" }, .45);

  // 2. Faixa do hero: desliza na horizontal e cada foto em velocidade diferente
  if (matchMedia("(min-width: 700px)").matches) gsap.to("#strip", { x: () => -Math.max(0, $("#strip").scrollWidth - innerWidth) * .6 - innerWidth * .08, ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: .6, invalidateOnRefresh: true } });
  if (matchMedia("(min-width: 700px)").matches) $$(".strip__item").forEach((el) => {
    gsap.to(el, { y: () => (1 - parseFloat(el.dataset.speed)) * 160, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: .6 } });
  });

  // 3. Manifesto: as palavras acendem com a rolagem
  const man = $("#manifesto");
  man.innerHTML = man.textContent.split(" ").map((w) => `<span class="w">${w}</span>`).join(" ");
  gsap.to("#manifesto .w", { opacity: 1, stagger: .1, ease: "none", scrollTrigger: { trigger: "#manifesto", start: "top 80%", end: "bottom 45%", scrub: true } });

  // 4. Títulos de seção sobem por linha
  $$(".sec-head h2, .about__text h2, .faq-aside h2, .cta h2").forEach((h) => {
    if (hasSplit) {
      const s = SplitText.create(h, { type: "lines", mask: "lines" });
      gsap.from(s.lines, { yPercent: 105, duration: 1.3, stagger: .1, ease: "expo.out", scrollTrigger: { trigger: h, start: "top 85%", once: true } });
    } else gsap.from(h, { y: 40, opacity: 0, duration: 1, scrollTrigger: { trigger: h, start: "top 85%", once: true } });
  });

  // 5. Especialidades: linhas entram em sequência
  gsap.from(".spec", { y: 40, opacity: 0, duration: 1, stagger: .07, ease: "expo.out", scrollTrigger: { trigger: "#specList", start: "top 82%", once: true } });

  // 6. Sobre: fotos com parallax e revelação por máscara
  gsap.fromTo(".ph1", { clipPath: "inset(100% 0 0 0 round 28px)" }, { clipPath: "inset(0% 0 0 0 round 28px)", duration: 1.6, ease: "expo.inOut", scrollTrigger: { trigger: ".about", start: "top 70%", once: true } });
  gsap.fromTo(".ph2", { clipPath: "inset(0 0 100% 0 round 28px)" }, { clipPath: "inset(0 0 0% 0 round 28px)", duration: 1.6, delay: .25, ease: "expo.inOut", scrollTrigger: { trigger: ".about", start: "top 70%", once: true } });
  gsap.to(".ph1 img", { yPercent: -8, ease: "none", scrollTrigger: { trigger: ".about", start: "top bottom", end: "bottom top", scrub: true } });
  gsap.fromTo(".ph2", { y: 80 }, { y: -80, ease: "none", scrollTrigger: { trigger: ".about", start: "top bottom", end: "bottom top", scrub: true } });

  // 7. Faixa de palavras: anda com a rolagem e acelera com a velocidade
  $$(".ticker__row").forEach((row) => {
    const dir = +row.dataset.dir;
    gsap.fromTo(row, { xPercent: dir > 0 ? 0 : -35 }, { xPercent: dir > 0 ? -35 : 0, ease: "none", scrollTrigger: { trigger: ".ticker", start: "top bottom", end: "bottom top", scrub: .4 } });
  });

  // 8. Como funciona: cartões empilham e os de trás encolhem
  const steps = $$(".step");
  steps.forEach((s, i) => {
    if (i === steps.length - 1) return;
    gsap.to(s, { scale: 1 - (steps.length - 1 - i) * 0.035, filter: "brightness(.92)", ease: "none",
      scrollTrigger: { trigger: steps[i + 1], start: "top bottom", end: "top 25%", scrub: true } });
  });
  gsap.from(".step__media img", { scale: 1.2, ease: "none", stagger: 0, scrollTrigger: { trigger: ".steps", start: "top bottom", end: "bottom top", scrub: true } });

  // 9. Receitas: fotos se revelam em lote
  ScrollTrigger.batch(".rec", { start: "top 92%", once: true,
    onEnter: (b) => gsap.fromTo(b, { y: 70, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, stagger: .08, ease: "expo.out", clearProps: "transform,opacity" }) });

  // 10. Dicas: trilho entra deslizando
  gsap.from(".tip", { x: 120, opacity: 0, duration: 1.3, stagger: .08, ease: "expo.out", scrollTrigger: { trigger: "#rail", start: "top 85%", once: true } });

  // 11. Encerramento: foto em arco sobe e o botão gira
  gsap.from(".cta__photo", { clipPath: "inset(100% 0 0 0 round 999px 999px 28px 28px)", duration: 1.6, ease: "expo.inOut", scrollTrigger: { trigger: ".cta", start: "top 70%", once: true } });
  gsap.from(".cta__magnet", { scale: 0, rotate: -120, duration: 1.2, ease: "back.out(1.6)", delay: .6, scrollTrigger: { trigger: ".cta", start: "top 70%", once: true } });
  gsap.from(".footer__big", { yPercent: 60, opacity: 0, duration: 1.4, ease: "expo.out", scrollTrigger: { trigger: ".footer__big", start: "top 95%", once: true } });

  addEventListener("load", () => ScrollTrigger.refresh());
})();

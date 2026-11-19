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
    { t: "Bolo rubi", d: "Bolo de beterraba com cacau, amêndoas e mel.", c: "Doces e bolos", img: "receita-bolo-rubi-beterraba-cacau-c", pos: "50% 50%", tags: ["sem glúten", "sem lactose"], post: "DfyIelmMBDR" },
    { t: "Mingau, omelete e kiwi", d: "Ideia de café da manhã com variedade no prato.", c: "Café da manhã", img: "receita-cafe-mingau-omelete-kiwi-c", pos: "50% 50%", post: "Dd8y58jTGTy" },
    { t: "Pão zero glúten", d: "Pão caseiro para quem precisa evitar o glúten.", c: "Café da manhã", img: "esp-intolerancias-pao", pos: "50% 55%", tags: ["sem glúten"], post: "DdDCYhoMzAb" },
    { t: "Café gelado", d: "Café gelado com cacau, whey e canela.", c: "Lanches e bebidas", img: "receita-cafe-gelado", pos: "50% 70%", post: "De21DqgskUT" },
    { t: "Bolo de amêndoa", d: "Bolo úmido e chocolatudo para o café da tarde.", c: "Doces e bolos", img: "receita-bolo-amendoa-c", pos: "50% 50%", post: "Dfu7IzZFtW3" },
    { t: "Iogurte com uvas", d: "Lanche rápido com iogurte, uvas e proteína.", c: "Lanches e bebidas", img: "receita-iogurte-uvas-proteina", pos: "50% 45%", post: "DeKYN_azbpL" },
    { t: "Omelete com mamão", d: "Café da manhã simples, colorido e completo.", c: "Café da manhã", img: "receita-cafe-omelete-mamao", pos: "50% 62%", post: "Dd6H4E8zLrd" },
    { t: "Lanche de banana com tapioca", d: "Uma opção prática para o lanche da tarde.", c: "Lanches e bebidas", img: "receita-lanche-banana-tapioca", pos: "50% 60%", post: "DexBrZwTE-h" },
    { t: "Omelete com tomate", d: "Um prato rápido para começar o dia bem.", c: "Café da manhã", img: "receita-omelete-tomate-cafe-na-mesa", pos: "50% 38%", post: "DeB_WsgTGZp" },
    { t: "Tapioca invertida", d: "Um jeito diferente de preparar a tapioca.", c: "Lanches e bebidas", img: "receita-tapioca-invertida-c", pos: "50% 50%", post: "Dd_jqz_TUUD" }
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
const FOTOS = { "sobre-sueli-camisa-bege-sorrindo-c": [720, 896], "sobre-sueli-camiseta-branca-c": [640, 784], "sobre-sueli-pre-treino-suco-c": [1200, 1644], "sobre-sueli-regata-proteina-c": [1200, 1388], "hero-alt-sueli-camisa-jeans-c": [720, 742], "sobre-sueli-explicando-pre-load-c": [1200, 608], "receita-bolo-rubi-beterraba-cacau-c": [1200, 1493], "receita-bolo-amendoa-c": [1200, 675], "receita-cafe-mingau-omelete-kiwi-c": [1200, 1451], "receita-tapioca-invertida-c": [640, 546], "vegetais-coloridos-c": [512, 382], "card-cru-ou-cozido": [1122, 1401], "card-cuscuz-flocao": [1200, 1495], "card-lista-de-compras-com-sueli": [1200, 1599], "card-mel-iogurte-probioticos": [1200, 1474], "card-tapioca-cuscuz-ou-pao": [1122, 1402], "dica-saleiro-ervas": [1122, 1402], "esp-intolerancias-pao": [720, 1280], "receita-cafe-gelado": [720, 1280], "receita-cafe-manga-pitaya": [720, 1280], "receita-cafe-omelete-mamao": [1200, 2133], "receita-empanada-assada": [1200, 1600], "receita-iogurte-uvas-proteina": [720, 1280], "receita-lanche-banana-tapioca": [720, 1280], "receita-omelete-tomate-cafe-na-mesa": [1200, 2133], "vegetais-coloridos": [512, 910] };


/* Especialidades: título, texto curto e a foto que aparece ao passar o mouse */
CONFIG.especialidades = [
  { t: "Emagrecimento e GLP\u20111", d: "Emagrecer com saúde e sem radicalismo, inclusive para quem usa análogos de GLP-1 e precisa cuidar da alimentação no tratamento.", img: "receita-cafe-manga-pitaya", pos: "50% 62%" },
  { t: "Diabetes e metabolismo", d: "Orientação alimentar para o controle da glicemia e da saúde metabólica, ajustada aos seus exames.", img: "receita-omelete-tomate-cafe-na-mesa", pos: "50% 45%" },
  { t: "Tireoide e hormônios", d: "Alimentação para quem convive com alterações hormonais e da tireoide, em conjunto com o acompanhamento médico.", img: "receita-cafe-omelete-mamao", pos: "50% 60%" },
  { t: "Saúde intestinal", d: "Estratégias para um intestino mais equilibrado, com mais conforto e bem-estar na rotina.", img: "receita-iogurte-uvas-proteina", pos: "50% 50%" },
  { t: "Saúde do fígado", d: "Cuidado nutricional voltado à saúde hepática, com mais vegetais e ajustes graduais.", img: "vegetais-coloridos-c", pos: "50% 50%" },
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
  const sm = (name) => `fotos/${name}${(FOTOS[name] || [0])[0] > 640 ? "-sm" : ""}.webp`;

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
  addInfo("Cidade", CONFIG.cidade); addInfo("Endereço", CONFIG.endereco); addInfo("Horários", CONFIG.horarios); addInfo("Atendimento", CONFIG.atendimento);
  if (CONFIG.mapaEmbedUrl) $("#mapSlot").innerHTML = `<div class="cta__map"><iframe src="${esc(CONFIG.mapaEmbedUrl)}" title="Mapa do consultório" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>`;
  if (CONFIG.formacao.length) $("#facts").insertAdjacentHTML("afterbegin", `<li style="grid-column:1/-1"><span>Formação</span><b>${CONFIG.formacao.map(esc).join("<br>")}</b></li>`);
  if (CONFIG.depoimentos.length) {
    $("#testiList").innerHTML = CONFIG.depoimentos.map((d) => `<figure><blockquote>${esc(d.texto)}</blockquote><figcaption>${esc(d.nome)}${d.cidade ? ", " + esc(d.cidade) : ""}</figcaption></figure>`).join("");
    $("#depoimentos").hidden = false;
  }

  /* ---------- Especialidades ---------- */
  const E = CONFIG.especialidades;
  $("#espList").innerHTML = E.map((s, i) => `
    <li class="esp__item${i === 0 ? " is-on" : ""}" data-i="${i}">
      <h3><small>${String(i + 1).padStart(2, "0")}</small>${esc(s.t)}</h3>
      <p>${esc(s.d)}</p>
      <div class="esp__thumb">${picture(s.img, s.t, "90vw", `style="object-position:${s.pos}"`)}</div>
    </li>`).join("");
  $("#espStage").insertAdjacentHTML("afterbegin", E.map((s, i) => `<figure class="${i === 0 ? "is-on" : ""}"><img src="${sm(s.img)}" alt="" style="object-position:${s.pos}" loading="lazy"></figure>`).join(""));
  const espItems = $$(".esp__item"), espFigs = $$("#espStage figure");
  let espCur = 0;
  function espSet(i) {
    if (i === espCur) return;
    espFigs.forEach((f, k) => { f.classList.toggle("was", k === espCur); f.classList.toggle("is-on", k === i); if (k !== i && k !== espCur) f.classList.remove("was"); });
    espItems.forEach((it, k) => it.classList.toggle("is-on", k === i));
    $("#espCount").textContent = `${String(i + 1).padStart(2, "0")} / ${String(E.length).padStart(2, "0")}`;
    espCur = i;
  }
  espItems.forEach((it, i) => it.addEventListener("mouseenter", () => espSet(i)));

  /* ---------- Receitas ---------- */
  const cats = ["Todas", "Café da manhã", "Doces e bolos", "Lanches e bebidas"];
  const filters = $("#recFilters"), grid = $("#recGrid");
  filters.innerHTML = cats.map((c, i) => `<button class="chip" type="button" aria-pressed="${i === 0}" data-cat="${esc(c)}">${esc(c)}</button>`).join("");
  grid.innerHTML = CONFIG.receitas.map((r, i) => `
    <figure class="rec" data-i="${i}" data-cat="${esc(r.c)}">
      <button class="rec__btn" type="button" data-cursor="Ver receita" aria-label="Abrir receita: ${esc(r.t)}">
        ${picture(r.img, r.t, "(min-width: 1200px) 23vw, (min-width: 760px) 31vw, 46vw", `style="object-position:${r.pos || "50% 50%"}"`)}
      </button>
      <figcaption><h3>${esc(r.t)}</h3><p class="cat">${esc(r.c)}</p>${r.tags && r.tags.length ? `<div class="tags">${r.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>` : ""}</figcaption>
    </figure>`).join("");
  const recs = $$(".rec", grid);
  filters.addEventListener("click", (e) => {
    const b = e.target.closest(".chip"); if (!b) return;
    $$(".chip", filters).forEach((c) => c.setAttribute("aria-pressed", String(c === b)));
    const cat = b.dataset.cat;
    const show = recs.filter((r) => cat === "Todas" || r.dataset.cat === cat);
    if (window.gsap && !reduce) {
      gsap.to(recs, { opacity: 0, y: 30, duration: .3, ease: "power2.in", onComplete: () => {
        recs.forEach((r) => (r.hidden = !show.includes(r)));
        gsap.fromTo(show, { opacity: 0, y: 60, rotate: 2 }, { opacity: 1, y: 0, rotate: 0, duration: .9, stagger: .06, ease: "expo.out", onComplete: () => window.ScrollTrigger && ScrollTrigger.refresh() });
      } });
    } else recs.forEach((r) => (r.hidden = !show.includes(r)));
  });

  /* Lightbox */
  const lb = $("#lb"); let lbI = 0, lastFocus = null;
  function lbFill(i) {
    const list = recs.filter((r) => !r.hidden).map((r) => +r.dataset.i);
    lbI = i; const r = CONFIG.receitas[i];
    const img = $("#lbImg"); img.src = `fotos/${r.img}.webp`; img.alt = r.t; img.style.objectPosition = r.pos || "50% 50%";
    $("#lbCat").textContent = r.c; $("#lbTitle").textContent = r.t; $("#lbDesc").textContent = r.d;
    $("#lbTags").innerHTML = (r.tags || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("");
    $("#lbLink").href = post(r.post);
    $("#lbCount").textContent = `${list.indexOf(i) + 1} de ${list.length}`;
  }
  function lbOpen(i) { lastFocus = document.activeElement; lbFill(i); lb.classList.add("is-open"); lb.setAttribute("aria-hidden", "false"); document.body.classList.add("is-locked"); window.__lenis && window.__lenis.stop(); setTimeout(() => $(".lb__close").focus(), 50); }
  function lbClose() { lb.classList.remove("is-open"); lb.setAttribute("aria-hidden", "true"); document.body.classList.remove("is-locked"); window.__lenis && window.__lenis.start(); lastFocus && lastFocus.focus(); }
  function lbStep(d) { const list = recs.filter((r) => !r.hidden).map((r) => +r.dataset.i); const k = (list.indexOf(lbI) + d + list.length) % list.length; lbFill(list[k]); }
  grid.addEventListener("click", (e) => { const b = e.target.closest(".rec__btn"); if (b) lbOpen(+b.closest(".rec").dataset.i); });
  $$("[data-close]", lb).forEach((b) => b.addEventListener("click", lbClose));
  $(".lb__prev").addEventListener("click", () => lbStep(-1)); $(".lb__next").addEventListener("click", () => lbStep(1));
  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("is-open")) return;
    if (e.key === "Escape") lbClose(); else if (e.key === "ArrowLeft") lbStep(-1); else if (e.key === "ArrowRight") lbStep(1);
    else if (e.key === "Tab") { const f = $$("button, a[href]", lb).filter((x) => x.offsetParent); const a = f[0], z = f[f.length - 1]; if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); } else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); } }
  });
  let tx = 0; lb.addEventListener("touchstart", (e) => (tx = e.touches[0].clientX), { passive: true });
  lb.addEventListener("touchend", (e) => { const d = e.changedTouches[0].clientX - tx; if (Math.abs(d) > 50) lbStep(d < 0 ? 1 : -1); });

  /* ---------- Dicas (leque) ---------- */
  $("#fan").innerHTML = CONFIG.dicas.map((d) => `
    <figure class="tip"><a href="${post(d.post)}" target="_blank" rel="noopener" data-cursor="Ler no Instagram">
      <div class="tip__img">${picture(d.img, d.t, "(min-width: 760px) 22vw, 72vw")}</div>
      <figcaption>${esc(d.t)}<span>${esc(d.s)}</span></figcaption></a></figure>`).join("");

  /* ---------- FAQ ---------- */
  $("#faqList").innerHTML = CONFIG.faq.map((q, i) => `
    <div class="qa"><h3><button class="qa__q" type="button" aria-expanded="false" aria-controls="qa${i}" id="qq${i}">${esc(q.p)}<span class="qa__ico" aria-hidden="true"></span></button></h3>
    <div class="qa__a" id="qa${i}" role="region" aria-labelledby="qq${i}"><div><p>${esc(q.r)}</p></div></div></div>`).join("");
  $("#faqList").addEventListener("click", (e) => {
    const b = e.target.closest(".qa__q"); if (!b) return;
    const qa = b.closest(".qa"), open = !qa.classList.contains("is-open");
    $$(".qa.is-open").forEach((o) => { o.classList.remove("is-open"); $(".qa__q", o).setAttribute("aria-expanded", "false"); });
    if (open) { qa.classList.add("is-open"); b.setAttribute("aria-expanded", "true"); }
    setTimeout(() => window.ScrollTrigger && ScrollTrigger.refresh(), 750);
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
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && mnav.classList.contains("is-open")) { menu(false); mbtn.focus(); } });

  /* Âncoras com rolagem suave */
  $$('a[href^="#"]').forEach((a) => a.addEventListener("click", (e) => {
    const id = a.getAttribute("href"); if (id.length < 2) return; const t = $(id); if (!t) return;
    e.preventDefault();
    if (window.__lenis) __lenis.scrollTo(t, { offset: id === "#inicio" ? 0 : -10, duration: 1.6 }); else t.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
    history.replaceState(null, "", id);
  }));

  /* Header: esconde ao descer, mostra ao subir, troca cor sobre fundo claro */
  const lightSecs = $$(".manifesto, .esp, .how, .tips, .faq, .testi");
  let lastY = 0;
  function onScrollUI(y) {
    header.classList.toggle("is-solid", y > 60);
    if (!mnav.classList.contains("is-open")) header.classList.toggle("is-hidden", y > lastY && y > 400);
    lastY = y;
    const probe = 44; header.classList.toggle("on-light", lightSecs.some((s) => { const r = s.getBoundingClientRect(); return !s.hidden && r.top <= probe && r.bottom > probe; }));
    $(".float-cta").classList.toggle("is-on", y > innerHeight * .9 && $("#contato").getBoundingClientRect().top > innerHeight);
  }
  const navLinks = $$(".nav a");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((ents) => ents.forEach((en) => { if (en.isIntersecting) navLinks.forEach((l) => l.toggleAttribute("aria-current", l.getAttribute("href") === "#" + en.target.id)); }), { rootMargin: "-45% 0px -50% 0px" });
    $$("main section[id]").forEach((s) => io.observe(s));
  }

  /* =====================================================================
     SEM ANIMAÇÃO: para aqui
     ===================================================================== */
  function plain() {
    addEventListener("scroll", () => onScrollUI(scrollY), { passive: true }); onScrollUI(scrollY);
    $$(".manifesto .w").forEach((w) => (w.style.opacity = 1));
  }
  if (reduce || !window.gsap || !window.ScrollTrigger) { html.classList.remove("anim", "has-loader"); html.classList.add("no-anim"); window.__animReady = true; plain(); return; }

  /* =====================================================================
     ANIMAÇÃO
     ===================================================================== */
  window.__animReady = true;
  gsap.registerPlugin(ScrollTrigger, ...(window.SplitText ? [SplitText] : []), ...(window.CustomEase ? [CustomEase] : []));
  const EASE = window.CustomEase ? CustomEase.create("silk", "M0,0 C0.16,1 0.3,1 1,1") : "expo.out";
  const mm = gsap.matchMedia();

  /* Rolagem suave (Lenis) */
  let lenis = null;
  if (window.Lenis) {
    lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 0.9, touchMultiplier: 1.4 });
    window.__lenis = lenis;
    lenis.on("scroll", (e) => { ScrollTrigger.update(); onScrollUI(e.scroll); });
    gsap.ticker.add((t) => lenis.raf(t * 1000)); gsap.ticker.lagSmoothing(0);
  } else addEventListener("scroll", () => onScrollUI(scrollY), { passive: true });
  onScrollUI(scrollY);

  /* ---------- Cursor ---------- */
  const glow = $(".hero__glow"), hero = $(".hero");
  if (fine) {
    html.classList.add("has-cursor");
    const cur = $(".cursor"), lab = $(".cursor-label"), labS = $("span", lab);
    const cx = gsap.quickTo(cur, "x", { duration: .18, ease: "power3" }), cy = gsap.quickTo(cur, "y", { duration: .18, ease: "power3" });
    const lx = gsap.quickTo(lab, "x", { duration: .45, ease: "power3" }), ly = gsap.quickTo(lab, "y", { duration: .45, ease: "power3" });
    addEventListener("pointermove", (e) => { cx(e.clientX); cy(e.clientY); lx(e.clientX); ly(e.clientY); }, { passive: true });
    document.addEventListener("pointerover", (e) => {
      const c = e.target.closest("[data-cursor]");
      if (c) { labS.textContent = c.dataset.cursor; lab.classList.add("is-on"); cur.style.opacity = 0; }
      else { lab.classList.remove("is-on"); cur.style.opacity = 1; cur.classList.toggle("is-link", !!e.target.closest("a, button")); }
    });
    document.addEventListener("pointerleave", () => gsap.to(cur, { opacity: 0 }));
    /* Botões magnéticos */
    $$("[data-magnetic]").forEach((b) => {
      const qx = gsap.quickTo(b, "x", { duration: .6, ease: "elastic.out(1, .4)" }), qy = gsap.quickTo(b, "y", { duration: .6, ease: "elastic.out(1, .4)" });
      b.addEventListener("pointermove", (e) => { const r = b.getBoundingClientRect(); qx((e.clientX - r.left - r.width / 2) * .35); qy((e.clientY - r.top - r.height / 2) * .35); });
      b.addEventListener("pointerleave", () => { qx(0); qy(0); });
    });
  }

  /* ---------- Rastro de fotos (mouse e dedo) ---------- */
  const trail = $("#trail");
  const TRAIL = ["receita-cafe-manga-pitaya", "receita-bolo-rubi-beterraba-cacau-c", "receita-empanada-assada", "receita-cafe-mingau-omelete-kiwi-c", "receita-iogurte-uvas-proteina", "receita-cafe-omelete-mamao", "receita-bolo-amendoa-c", "receita-omelete-tomate-cafe-na-mesa", "receita-lanche-banana-tapioca", "esp-intolerancias-pao", "receita-tapioca-invertida-c"];
  const POS = { "receita-cafe-manga-pitaya": "50% 62%", "receita-cafe-omelete-mamao": "50% 62%", "receita-lanche-banana-tapioca": "50% 60%" };
  const pool = TRAIL.map((n) => { const im = new Image(); im.src = sm(n); im.alt = ""; im.decoding = "async"; im.style.objectPosition = POS[n] || "50% 50%"; trail.appendChild(im); return im; });
  let ti = 0, lastP = null, z = 1;
  function drop(x, y, dx, dy) {
    const im = pool[ti++ % pool.length]; z++;
    gsap.killTweensOf(im);
    const rot = gsap.utils.random(-14, 14);
    gsap.set(im, { x: x - im.offsetWidth / 2, y: y - im.offsetHeight / 2, zIndex: z, opacity: 1, scale: .4, rotate: rot - dx * .2, transformOrigin: "50% 50%" });
    gsap.timeline()
      .to(im, { scale: 1, x: `+=${dx * 2.2}`, y: `+=${dy * 2.2}`, rotate: rot, duration: .9, ease: EASE })
      .to(im, { scale: .2, opacity: 0, y: "+=80", duration: .9, ease: "power3.in" }, .55);
  }
  function trailMove(cx, cy) {
    const r = hero.getBoundingClientRect(); const x = cx - r.left, y = cy - r.top;
    if (y < 0 || y > r.height) return;
    if (!lastP) { lastP = { x, y }; return; }
    const dx = x - lastP.x, dy = y - lastP.y;
    if (Math.hypot(dx, dy) > (fine ? 110 : 70)) { drop(x, y, dx, dy); lastP = { x, y }; }
  }
  hero.addEventListener("pointermove", (e) => trailMove(e.clientX, e.clientY), { passive: true });
  hero.addEventListener("touchmove", (e) => { const t = e.touches[0]; trailMove(t.clientX, t.clientY); }, { passive: true });
  hero.addEventListener("pointerleave", () => (lastP = null));
  hero.addEventListener("touchend", () => (lastP = null));
  /* Brilho que segue */
  const gx = gsap.quickTo(glow, "x", { duration: 1.4, ease: "power3" }), gy = gsap.quickTo(glow, "y", { duration: 1.4, ease: "power3" });
  hero.addEventListener("pointermove", (e) => { const r = hero.getBoundingClientRect(); gx(e.clientX - r.left); gy(e.clientY - r.top); }, { passive: true });
  gsap.set(glow, { x: innerWidth * .7, y: innerHeight * .3 });
  /* Retrato com paralaxe */
  const portrait = $(".hero__portrait"), pImg = $("img", portrait);
  if (fine) {
    const px = gsap.quickTo(portrait, "x", { duration: 1.2, ease: "power3" }), py = gsap.quickTo(portrait, "y", { duration: 1.2, ease: "power3" });
    const rx = gsap.quickTo(portrait, "rotate", { duration: 1.2, ease: "power3" });
    hero.addEventListener("pointermove", (e) => { const nx = e.clientX / innerWidth - .5, ny = e.clientY / innerHeight - .5; px(nx * -40); py(ny * -30); rx(nx * 6); }, { passive: true });
  }
  /* Celular: inclinação suave com o giroscópio não exige permissão no Android */
  if (!fine && "DeviceOrientationEvent" in window && typeof DeviceOrientationEvent.requestPermission !== "function") {
    addEventListener("deviceorientation", (e) => { if (e.gamma == null) return; gsap.to(portrait, { x: gsap.utils.clamp(-20, 20, e.gamma), rotate: gsap.utils.clamp(-5, 5, e.gamma / 6), duration: 1, overwrite: "auto" }); }, { passive: true });
  }
  /* Toque: pequena onda onde o dedo encosta */
  if (!fine) {
    document.addEventListener("pointerdown", (e) => {
      const d = document.createElement("i");
      d.style.cssText = `position:fixed;left:${e.clientX}px;top:${e.clientY}px;width:16px;height:16px;margin:-8px 0 0 -8px;border-radius:50%;border:1.5px solid #C3D18A;pointer-events:none;z-index:1600`;
      document.body.appendChild(d);
      gsap.to(d, { scale: 5, opacity: 0, duration: .8, ease: "power2.out", onComplete: () => d.remove() });
    }, { passive: true });
  }

  /* ---------- Abertura ---------- */
  const h1 = $(".hero h1");
  const chars = [];
  $$(".w1, .w2", h1).forEach((w) => { const t = w.textContent; w.textContent = ""; [...t].forEach((c) => { const s = document.createElement("span"); s.className = "ch"; s.textContent = c; w.appendChild(s); chars.push(s); }); w.setAttribute("aria-hidden", "true"); });
  h1.setAttribute("aria-label", "Sueli Ribeiro, nutricionista clínica em Rondônia");

  function heroIn(delay = 0) {
    gsap.set([h1, ".hero__foot", portrait], { visibility: "visible" });
    const tl = gsap.timeline({ delay });
    tl.from(portrait, { clipPath: "inset(100% 0 0 0 round 999px)", duration: 1.6, ease: EASE }, 0)
      .from(pImg, { scale: 1.5, duration: 2.2, ease: EASE }, 0)
      .from(chars, { yPercent: 110, rotate: 8, opacity: 0, duration: 1.4, stagger: .045, ease: EASE }, .15)
      .from(".hero__foot", { opacity: 0, y: 30, duration: 1.2, ease: EASE }, .7)
      .from(".hero__foot > *", { y: 20, opacity: 0, stagger: .08, duration: 1, ease: EASE }, .8)
      .from(header, { yPercent: -100, opacity: 0, duration: 1.2, ease: EASE }, .6)
      .add(() => { /* rajada de fotos de boas-vindas */
        const r = hero.getBoundingClientRect();
        [[.2, .35], [.8, .3], [.3, .7], [.72, .66]].forEach(([fx, fy], k) => setTimeout(() => drop(r.width * fx, r.height * fy, (fx - .5) * 60, (fy - .5) * 60), k * 140));
      }, .9);
  }

  const loader = $("#loader");
  if (html.classList.contains("has-loader")) {
    try { sessionStorage.setItem("sr-loader", "1"); } catch (e) {}
    lenis && lenis.stop();
    const imgs = $$(".loader__imgs img", loader), cnt = $("#loaderCount"), o = { v: 0 };
    const tl = gsap.timeline();
    tl.from(".loader__name h2 span", { yPercent: 110, duration: 1.1, stagger: .1, ease: EASE })
      .to(o, { v: 100, duration: 2.1, ease: "power2.inOut", onUpdate: () => (cnt.textContent = Math.round(o.v)) }, .1)
      .to(".loader__bar", { scaleX: 1, duration: 2.1, ease: "power2.inOut" }, .1);
    imgs.forEach((im, k) => tl.fromTo(im, { opacity: 0, scale: 1.25, clipPath: "inset(100% 0 0 0 round 18px)" }, { opacity: 1, scale: 1, clipPath: "inset(0% 0 0 0 round 18px)", duration: .5, ease: "power3.out" }, .2 + k * .3));
    tl.to(".loader__imgs", { scale: 4, opacity: 0, duration: 1.1, ease: "expo.in" }, 2.3)
      .to(".loader__name, .loader__bar", { opacity: 0, y: -20, duration: .5 }, 2.4)
      .to(loader, { clipPath: "inset(0 0 100% 0)", duration: 1.2, ease: "expo.inOut", onComplete: () => { loader.remove(); html.classList.remove("has-loader"); lenis && lenis.start(); } }, 2.75)
      .add(() => heroIn(0), 3.0);
  } else { loader.remove(); heroIn(.1); }

  /* Hero ao rolar: título se separa, retrato cresce em câmera lenta */
  gsap.to(".hero .w1", { xPercent: -18, ease: "none", scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: 1 } });
  gsap.to(".hero .w2", { xPercent: 14, ease: "none", scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: 1 } });
  gsap.to(pImg, { scale: 1.25, yPercent: -8, ease: "none", scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: 1.5 } });
  gsap.to(".hero__foot", { opacity: 0, y: -40, ease: "none", scrollTrigger: { trigger: hero, start: "30% top", end: "70% top", scrub: true } });

  /* ---------- Manifesto: palavras acendem com a rolagem ---------- */
  const man = $("#manifesto");
  (function wrapWords(node) {
    [...node.childNodes].forEach((n) => {
      if (n.nodeType === 3) { const f = document.createDocumentFragment(); n.textContent.split(/(\s+)/).forEach((p) => { if (!p) return; if (/^\s+$/.test(p)) f.appendChild(document.createTextNode(p)); else { const s = document.createElement("span"); s.className = "w"; s.textContent = p; f.appendChild(s); } }); n.replaceWith(f); }
      else if (n.nodeType === 1) wrapWords(n);
    });
  })(man);
  gsap.to($$(".w", man), { opacity: 1, stagger: .1, ease: "none", scrollTrigger: { trigger: man, start: "top 80%", end: "bottom 45%", scrub: true } });
  $$("[data-speed]").forEach((el) => gsap.to(el, { yPercent: parseFloat(el.dataset.speed) * 160, rotate: parseFloat(el.dataset.speed) * 40, ease: "none", scrollTrigger: { trigger: el.closest("section"), start: "top bottom", end: "bottom top", scrub: true } }));
  gsap.from(".manifesto__float", { scale: 0, duration: 1.4, ease: "elastic.out(1, .6)", stagger: .15, scrollTrigger: { trigger: ".manifesto", start: "top 70%" } });

  /* ---------- Títulos: linhas sobem de dentro de uma máscara ---------- */
  document.fonts.ready.then(() => {
    $$("section h2:not(.sr-only):not(#sobre-title)").forEach((h) => {
      if (!window.SplitText) return;
      const sp = SplitText.create(h, { type: "lines", mask: "lines", linesClass: "ln" });
      gsap.from(sp.lines, { yPercent: 105, rotate: 3, transformOrigin: "0 0", duration: 1.4, stagger: .1, ease: EASE, scrollTrigger: { trigger: h, start: "top 88%" } });
    });
    ScrollTrigger.refresh();
  });
  gsap.utils.toArray(".eyebrow").forEach((e) => gsap.from(e, { opacity: 0, x: -20, duration: 1, ease: EASE, scrollTrigger: { trigger: e, start: "top 90%" } }));

  /* ---------- Especialidades ---------- */
  mm.add("(min-width: 1000px)", () => {
    $(".esp").classList.add("is-pinnable");
    const sts = espItems.map((it, i) => ScrollTrigger.create({ trigger: it, start: "top 55%", end: "bottom 55%", onToggle: (s) => s.isActive && espSet(i) }));
    return () => { $(".esp").classList.remove("is-pinnable"); sts.forEach((s) => s.kill()); };
  });
  espItems.forEach((it) => gsap.from(it, { opacity: 0, y: 50, duration: 1.2, ease: EASE, scrollTrigger: { trigger: it, start: "top 92%" } }));
  gsap.from("#espStage", { clipPath: "inset(30% 20% 30% 20% round 32px)", duration: 1.6, ease: EASE, scrollTrigger: { trigger: "#espStage", start: "top 85%" } });

  /* ---------- Sobre: zoom em câmera lenta ---------- */
  const aboutTl = gsap.timeline({ scrollTrigger: { trigger: ".about__zoom", start: "top top", end: "+=130%", pin: true, scrub: 1.2, anticipatePin: 1 } });
  aboutTl.to(".about__img", { clipPath: "inset(0% 0% 0% 0% round 0px)", ease: "power2.inOut" }, 0)
    .to(".about__img img", { scale: 1, ease: "power2.inOut" }, 0)
    .from(".about__over h2", { scale: .6, opacity: 0, ease: "power2.out" }, .15)
    .to(".about__over", { yPercent: -30, ease: "none" }, .6);
  gsap.from(".about__body .lead", { opacity: 0, y: 60, duration: 1.4, ease: EASE, scrollTrigger: { trigger: ".about__body", start: "top 80%" } });
  gsap.from(".facts li", { opacity: 0, y: 30, stagger: .08, duration: 1, ease: EASE, scrollTrigger: { trigger: ".facts", start: "top 88%" } });
  $$(".about__duo figure").forEach((f, i) => {
    gsap.from(f, { clipPath: "inset(100% 0 0 0 round 22px)", duration: 1.6, ease: EASE, scrollTrigger: { trigger: f, start: "top 90%" } });
    gsap.fromTo($("img", f), { yPercent: -8, scale: 1.2 }, { yPercent: 8, scale: 1.2, ease: "none", scrollTrigger: { trigger: f, start: "top bottom", end: "bottom top", scrub: true } });
    gsap.to(f, { y: i ? -60 : 40, ease: "none", scrollTrigger: { trigger: ".about__duo", start: "top bottom", end: "bottom top", scrub: true } });
  });

  /* ---------- Como funciona: viagem horizontal ---------- */
  mm.add("(min-width: 1000px)", () => {
    const sec = $(".how"); sec.classList.add("is-pinned");
    const track = $("#howTrack");
    const dist = () => track.scrollWidth - innerWidth + parseFloat(getComputedStyle(track).paddingLeft);
    const tw = gsap.to(track, { x: () => -dist(), ease: "none", scrollTrigger: { trigger: sec, start: "top top", end: () => "+=" + dist(), pin: ".how__wrap", scrub: 1, invalidateOnRefresh: true, onUpdate: (s) => gsap.set("#howBar", { scaleX: s.progress }) } });
    $$(".card", track).forEach((c) => {
      gsap.from($(".card__media", c), { scale: .7, rotate: -4, ease: "none", scrollTrigger: { trigger: c, containerAnimation: tw, start: "left right", end: "left 40%", scrub: true } });
      gsap.from($(".card__n", c), { xPercent: 60, opacity: 0, ease: "none", scrollTrigger: { trigger: c, containerAnimation: tw, start: "left right", end: "left 50%", scrub: true } });
    });
    return () => { sec.classList.remove("is-pinned"); };
  });
  mm.add("(max-width: 999px)", () => {
    $$(".how .card").forEach((c, i) => gsap.from(c, { y: 80, rotate: i % 2 ? 3 : -3, opacity: 0, duration: 1.3, ease: EASE, scrollTrigger: { trigger: c, start: "top 92%" } }));
  });

  /* ---------- Receitas: entrada + distorção pela velocidade ---------- */
  ScrollTrigger.batch(recs, { start: "top 92%", once: true, onEnter: (b) => gsap.fromTo(b, { y: 120, opacity: 0, rotate: 3 }, { y: 0, opacity: 1, rotate: 0, stagger: .08, duration: 1.4, ease: EASE, overwrite: true }) });
  recs.forEach((r) => gsap.set(r, { opacity: 0 }));
  const skewTo = gsap.quickTo(grid, "skewY", { duration: .6, ease: "power3" });
  const clamp = gsap.utils.clamp(-6, 6);
  ScrollTrigger.create({ trigger: ".recipes", start: "top bottom", end: "bottom top", onUpdate: (s) => skewTo(clamp(s.getVelocity() / -350)) , onLeave: () => skewTo(0), onLeaveBack: () => skewTo(0) });
  $$(".rec__btn img").forEach((im) => gsap.fromTo(im, { yPercent: -6 }, { yPercent: 6, ease: "none", scrollTrigger: { trigger: im, start: "top bottom", end: "bottom top", scrub: true } }));
  /* Inclinação 3D dos cards no mouse */
  if (fine) recs.forEach((r) => {
    const b = $(".rec__btn", r); gsap.set(b, { transformPerspective: 800 });
    const rx = gsap.quickTo(b, "rotationX", { duration: .6, ease: "power3" }), ry = gsap.quickTo(b, "rotationY", { duration: .6, ease: "power3" });
    b.addEventListener("pointermove", (e) => { const q = b.getBoundingClientRect(); ry(((e.clientX - q.left) / q.width - .5) * 12); rx(((e.clientY - q.top) / q.height - .5) * -12); });
    b.addEventListener("pointerleave", () => { rx(0); ry(0); });
  });

  /* ---------- Dicas: leque que abre ---------- */
  mm.add("(min-width: 760px)", () => {
    const tips = $$(".fan .tip"), n = tips.length, mid = (n - 1) / 2;
    const spread = () => Math.min(innerWidth * .17, 250);
    gsap.set(tips, { x: 0, rotate: 0, y: 40 });
    const tw = gsap.to(tips, { x: (i) => (i - mid) * spread(), rotate: (i) => (i - mid) * 7, y: (i) => Math.abs(i - mid) * 28, ease: "power2.out", scrollTrigger: { trigger: ".fan", start: "top 85%", end: "center 55%", scrub: 1.2, invalidateOnRefresh: true } });
    return () => tw.kill();
  });

  /* ---------- FAQ ---------- */
  gsap.from(".qa", { opacity: 0, y: 40, stagger: .07, duration: 1.1, ease: EASE, scrollTrigger: { trigger: "#faqList", start: "top 85%" } });

  /* ---------- Contato: letreiro guiado pela rolagem ---------- */
  const mq = $("#ctaMarquee");
  const loop = gsap.to(mq, { xPercent: -50, duration: 22, ease: "none", repeat: -1 });
  ScrollTrigger.create({ trigger: ".cta", start: "top bottom", end: "bottom top", onUpdate: (s) => { const v = s.getVelocity(); gsap.to(loop, { timeScale: 1 + Math.min(Math.abs(v) / 250, 6) * (v < 0 ? -1 : 1), duration: .2, overwrite: true }); gsap.to(loop, { timeScale: 1, duration: 1.2, delay: .25 }); } });
  gsap.from(".cta__photo .ph", { clipPath: "inset(100% 0 0 0 round 999px 999px 30px 30px)", duration: 1.8, ease: EASE, scrollTrigger: { trigger: ".cta__photo", start: "top 85%" } });
  gsap.from(".cta__magnet", { scale: 0, rotate: -180, duration: 1.6, ease: "elastic.out(1, .5)", scrollTrigger: { trigger: ".cta__photo", start: "top 70%" } });
  gsap.from(".cta__in > div:first-child > *", { opacity: 0, y: 40, stagger: .1, duration: 1.2, ease: EASE, scrollTrigger: { trigger: ".cta__in", start: "top 85%" } });

  addEventListener("load", () => ScrollTrigger.refresh());
})();

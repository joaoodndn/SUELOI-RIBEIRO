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

(function () {
  "use strict";
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const esc = (t) => String(t ?? "").replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const igUrl = `https://www.instagram.com/${CONFIG.instagram}/`;
  const post = (id) => (id ? `https://www.instagram.com/p/${encodeURIComponent(id)}/` : igUrl);

  function picture(name, alt, sizes, extra = "") {
    const [w, h] = FOTOS[name] || [600, 750];
    const set = w > 640 ? `fotos/${name}-sm.webp 600w, fotos/${name}.webp ${w}w` : `fotos/${name}.webp ${w}w`;
    return `<picture><source type="image/webp" srcset="${set}" sizes="${sizes}"><img src="fotos/${name}.jpg" width="${w}" height="${h}" alt="${esc(alt)}" loading="lazy" decoding="async" ${extra}></picture>`;
  }

  /* ---------- Agendamento: WhatsApp quando houver número, senão Instagram ---------- */
  const digits = String(CONFIG.whatsapp).replace(/\D/g, "");
  const hasWa = digits.length >= 12;
  const agendarUrl = hasWa
    ? `https://wa.me/${digits}?text=${encodeURIComponent(CONFIG.mensagemWhatsapp)}`
    : `https://ig.me/m/${CONFIG.instagram}`;
  const agendarLabel = hasWa ? "Agendar pelo WhatsApp" : "Agendar pelo Instagram";
  $$("[data-agendar]").forEach((a) => {
    a.href = agendarUrl;
    if (a.classList.contains("float-cta")) a.setAttribute("aria-label", agendarLabel);
  });
  $$("[data-agendar-label]").forEach((s) => (s.textContent = agendarLabel));
  if (!hasWa) $$("use[href='#i-wa']").forEach((u) => u.setAttribute("href", "#i-ig"));
  $$("[data-ig-link]").forEach((a) => (a.href = igUrl));
  $("#year").textContent = new Date().getFullYear();

  /* ---------- Dados opcionais (só aparecem se preenchidos) ---------- */
  const info = $("#contactInfo");
  const addInfo = (k, v) => { if (v) info.insertAdjacentHTML("beforeend", `<li><b>${esc(k)}</b>${esc(v)}</li>`); };
  if (CONFIG.cidade) { info.querySelector("li:last-child").remove(); addInfo("Cidade", CONFIG.cidade); }
  addInfo("Endereço", CONFIG.endereco);
  addInfo("Horários", CONFIG.horarios);
  addInfo("Atendimento", CONFIG.atendimento);
  if (CONFIG.mapaEmbedUrl) $("#mapSlot").innerHTML = `<div class="contact__map"><iframe src="${esc(CONFIG.mapaEmbedUrl)}" title="Mapa do consultório" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>`;
  if (CONFIG.formacao.length) $("#creds").insertAdjacentHTML("afterbegin", `<li><span class="k">Formação</span><span class="v">${CONFIG.formacao.map(esc).join("<br>")}</span></li>`);
  if (CONFIG.depoimentos.length) {
    $("#testiList").innerHTML = CONFIG.depoimentos.map((d) => `<figure><blockquote>${esc(d.texto)}</blockquote><figcaption>${esc(d.nome)}${d.cidade ? ", " + esc(d.cidade) : ""}</figcaption></figure>`).join("");
    $("#depoimentos").hidden = false;
  }

  /* ---------- Menu móvel ---------- */
  const header = $("#header"), menuBtn = $(".menu-btn"), mnav = $("#mnav");
  function setMenu(open) {
    menuBtn.setAttribute("aria-expanded", open);
    menuBtn.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    mnav.classList.toggle("is-open", open);
    mnav.setAttribute("aria-hidden", !open);
    header.classList.toggle("menu-open", open);
    document.body.classList.toggle("is-locked", open);
    if (open) setTimeout(() => $("a", mnav).focus(), 350);
  }
  menuBtn.addEventListener("click", () => setMenu(menuBtn.getAttribute("aria-expanded") !== "true"));
  $$("a", mnav).forEach((a) => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && mnav.classList.contains("is-open")) { setMenu(false); menuBtn.focus(); } });
  mnav.addEventListener("keydown", (e) => {
    if (e.key !== "Tab") return;
    const f = [...$$("a", mnav), menuBtn]; const i = f.indexOf(document.activeElement);
    if (e.shiftKey && i <= 0) { e.preventDefault(); f[f.length - 1].focus(); }
    else if (!e.shiftKey && i === f.length - 1) { e.preventDefault(); f[0].focus(); }
  });

  /* ---------- Header: sólido ao rolar, some descendo e volta subindo ---------- */
  const float = $(".float-cta"), hero = $("#inicio");
  let lastY = 0;
  function onScroll() {
    const y = scrollY;
    header.classList.toggle("is-solid", y > hero.offsetHeight - 90);
    if (!mnav.classList.contains("is-open")) header.classList.toggle("is-hidden", y > 400 && y > lastY + 4);
    if (y < lastY - 4 || y < 400) header.classList.remove("is-hidden");
    float.classList.toggle("is-on", y > hero.offsetHeight * 0.8 && y < document.documentElement.scrollHeight - innerHeight * 1.6);
    lastY = y;
  }
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Link ativo no menu ---------- */
  const navLinks = $$(".nav a");
  const spy = new IntersectionObserver((ents) => ents.forEach((en) => {
    if (!en.isIntersecting) return;
    navLinks.forEach((a) => (a.getAttribute("href") === "#" + en.target.id ? a.setAttribute("aria-current", "true") : a.removeAttribute("aria-current")));
  }), { rootMargin: "-40% 0px -55% 0px" });
  ["sobre", "especialidades", "como-funciona", "receitas", "dicas", "duvidas", "contato"].forEach((id) => spy.observe(document.getElementById(id)));

  /* ---------- Especialidades: lista + moldura que troca a foto ---------- */
  const items = $$(".spec__item"), frame = $("#specFrame");
  items.forEach((it, i) => {
    const pic = $(".m picture", it).cloneNode(true);
    const img = $("img", pic); img.loading = i === 0 ? "eager" : "lazy";
    const fig = document.createElement("figure");
    if (i === 4) fig.className = "is-small";
    fig.appendChild(pic); frame.appendChild(fig);
  });
  function activate(i, toggleOnMobile) {
    const mobile = !matchMedia("(min-width: 960px)").matches;
    items.forEach((it, k) => {
      const on = k === i ? (mobile && toggleOnMobile ? !it.classList.contains("is-active") : true) : false;
      it.classList.toggle("is-active", on);
      $(".spec__btn", it).setAttribute("aria-expanded", on);
    });
    $$("figure", frame).forEach((f, k) => f.classList.toggle("is-on", k === i));
  }
  items.forEach((it, i) => {
    const b = $(".spec__btn", it);
    b.addEventListener("click", () => activate(i, true));
    b.addEventListener("mouseenter", () => { if (matchMedia("(hover: hover) and (min-width: 960px)").matches) activate(i, false); });
    b.addEventListener("focus", () => { if (matchMedia("(min-width: 960px)").matches) activate(i, false); });
  });
  activate(0, false);

  /* ---------- Receitas: filtros, grade e lightbox ---------- */
  const cats = ["Todas", "Café da manhã", "Doces e bolos", "Lanches e bebidas"];
  const filters = $("#recFilters"), grid = $("#recGrid");
  filters.innerHTML = cats.map((c, i) => `<button class="chip" type="button" aria-pressed="${i === 0}" data-cat="${esc(c)}">${esc(c)}</button>`).join("");
  grid.innerHTML = CONFIG.receitas.map((r, i) => `
    <figure class="rec${r.big ? " rec--big" : ""}" data-i="${i}" data-cat="${esc(r.c)}">
      <button class="rec__btn" type="button" aria-label="Ampliar: ${esc(r.t)}">
        ${picture(r.img, r.t, r.big ? "(min-width: 760px) 48vw, 92vw" : "(min-width: 1100px) 24vw, (min-width: 760px) 32vw, 46vw", `style="object-position:${r.pos || "50% 50%"}"`)}
        <svg class="crochet" aria-hidden="true"><use href="#crochet"/></svg><svg class="zoom" aria-hidden="true"><use href="#i-zoom"/></svg>
      </button>
      <figcaption>
        <h3>${esc(r.t)}</h3>
        <p class="cat">${esc(r.c)}</p>
        ${r.tags && r.tags.length ? `<div class="tags">${r.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>` : ""}
      </figcaption>
    </figure>`).join("");
  const recs = $$(".rec", grid);

  function filterBy(cat) {
    const first = new Map(recs.map((r) => [r, r.hidden ? null : r.getBoundingClientRect()]));
    recs.forEach((r) => { r.hidden = !(cat === "Todas" || r.dataset.cat === cat); r.classList.toggle("rec--big", cat === "Todas" && !!CONFIG.receitas[r.dataset.i].big); });
    if (reduce) return;
    recs.forEach((r) => {
      if (r.hidden) return;
      const last = r.getBoundingClientRect(), f = first.get(r);
      const kf = f ? [{ transform: `translate(${f.left - last.left}px, ${f.top - last.top}px)` }, { transform: "none" }]
                   : [{ opacity: 0, transform: "translateY(20px)" }, { opacity: 1, transform: "none" }];
      r.animate(kf, { duration: 650, easing: "cubic-bezier(.2,.8,.2,1)" });
    });
  }
  $$(".chip", filters).forEach((b) => b.addEventListener("click", () => {
    $$(".chip", filters).forEach((x) => x.setAttribute("aria-pressed", x === b));
    filterBy(b.dataset.cat);
  }));

  const lb = $("#lb"), lbImg = $("#lbImg");
  let cur = 0, opener = null;
  const visible = () => recs.filter((r) => !r.hidden).map((r) => +r.dataset.i);
  function fill(i) {
    const r = CONFIG.receitas[i]; cur = i;
    const [w, h] = FOTOS[r.img] || [600, 750];
    lbImg.src = `fotos/${r.img}.webp`; lbImg.width = w; lbImg.height = h; lbImg.alt = r.t;
    lbImg.style.objectPosition = r.pos || "50% 50%";
    $("#lbCat").textContent = r.c; $("#lbTitle").textContent = r.t; $("#lbDesc").textContent = r.d;
    $("#lbTags").innerHTML = (r.tags || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("");
    $("#lbLink").href = post(r.post);
    const v = visible(); $("#lbCount").textContent = `${v.indexOf(i) + 1} de ${v.length}`;
  }
  function openLb(i, from) {
    opener = from; fill(i);
    lb.classList.add("is-open"); lb.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-locked");
    setTimeout(() => $(".lb__close", lb).focus(), 60);
  }
  function closeLb() {
    lb.classList.remove("is-open"); lb.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-locked");
    if (opener) opener.focus();
  }
  const step = (d) => { const v = visible(); fill(v[(v.indexOf(cur) + d + v.length) % v.length]); };
  recs.forEach((r) => $(".rec__btn", r).addEventListener("click", (e) => openLb(+r.dataset.i, e.currentTarget)));
  $$("[data-close]", lb).forEach((b) => b.addEventListener("click", closeLb));
  $(".lb__prev", lb).addEventListener("click", () => step(-1));
  $(".lb__next", lb).addEventListener("click", () => step(1));
  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLb();
    else if (e.key === "ArrowRight") step(1);
    else if (e.key === "ArrowLeft") step(-1);
    else if (e.key === "Tab") {
      const f = $$("button, a[href]", lb).filter((el) => el.offsetParent !== null);
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    }
  });
  let tx = null;
  lb.addEventListener("touchstart", (e) => (tx = e.touches[0].clientX), { passive: true });
  lb.addEventListener("touchend", (e) => { if (tx === null) return; const dx = e.changedTouches[0].clientX - tx; if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1); tx = null; });

  /* ---------- Dicas: trilho com arraste ---------- */
  const rail = $("#rail");
  rail.innerHTML = CONFIG.dicas.map((d) => `
    <figure class="tip"><a href="${post(d.post)}" target="_blank" rel="noopener" draggable="false">
      <div class="tip__img">${picture(d.img, `${d.t}: ${d.s}`, "(min-width: 760px) 360px, 78vw", 'draggable="false"')}</div>
      <figcaption>${esc(d.t)}<span>${esc(d.s)}</span><span class="tip__more">Ler no Instagram</span></figcaption>
    </a></figure>`).join("");
  const prevB = $("#railPrev"), nextB = $("#railNext");
  const slideW = () => { const t = $$(".tip", rail); return t[1] ? t[1].offsetLeft - t[0].offsetLeft : rail.clientWidth; };
  const updRail = () => { prevB.disabled = rail.scrollLeft < 8; nextB.disabled = rail.scrollLeft > rail.scrollWidth - rail.clientWidth - 8; };
  prevB.addEventListener("click", () => rail.scrollBy({ left: -slideW(), behavior: reduce ? "auto" : "smooth" }));
  nextB.addEventListener("click", () => rail.scrollBy({ left: slideW(), behavior: reduce ? "auto" : "smooth" }));
  rail.addEventListener("scroll", updRail, { passive: true }); addEventListener("resize", updRail); updRail();
  rail.addEventListener("keydown", (e) => { if (e.key === "ArrowRight") { e.preventDefault(); nextB.click(); } if (e.key === "ArrowLeft") { e.preventDefault(); prevB.click(); } });
  let drag = null;
  rail.addEventListener("pointerdown", (e) => { if (e.pointerType === "mouse") drag = { x: e.clientX, l: rail.scrollLeft, moved: false }; });
  addEventListener("pointermove", (e) => {
    if (!drag) return; const dx = e.clientX - drag.x;
    if (Math.abs(dx) > 6) { drag.moved = true; rail.classList.add("is-drag"); }
    if (drag.moved) rail.scrollLeft = drag.l - dx;
  });
  addEventListener("pointerup", () => { if (!drag) return; const m = drag.moved; drag = null; if (m) setTimeout(() => rail.classList.remove("is-drag"), 0); });

  /* ---------- Dúvidas ---------- */
  $("#faqList").innerHTML = CONFIG.faq.map((f, i) => `
    <div class="qa">
      <h3 style="margin:0;font:inherit;letter-spacing:inherit"><button class="qa__q" type="button" aria-expanded="false" aria-controls="qa${i}" id="qq${i}">${esc(f.p)}<span class="qa__ico" aria-hidden="true"></span></button></h3>
      <div class="qa__a" id="qa${i}" role="region" aria-labelledby="qq${i}"><div><p>${esc(f.r)}</p></div></div>
    </div>`).join("");
  $$(".qa__q").forEach((q) => q.addEventListener("click", () => {
    const open = q.getAttribute("aria-expanded") !== "true";
    q.setAttribute("aria-expanded", open); q.closest(".qa").classList.toggle("is-open", open);
  }));

  /* ---------- Revelação de fotos ao entrar na tela (sem GSAP) ---------- */
  const revIO = new IntersectionObserver((ents) => ents.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-in"); revIO.unobserve(en.target); } }), { rootMargin: "0px 0px -12% 0px" });
  $$("[data-reveal]").forEach((el) => revIO.observe(el));

  /* =====================================================================
     ANIMAÇÕES COM GSAP (só se carregou e se o usuário não pediu menos movimento)
     ===================================================================== */
  const html = document.documentElement;
  if (reduce || !window.gsap || !window.ScrollTrigger) { html.classList.remove("anim"); return; }
  window.__animReady = true;
  gsap.registerPlugin(ScrollTrigger);

  // 1. Entrada do hero: um único momento orquestrado
  gsap.set(".hero h1 .ln > span", { y: 0, yPercent: 105 });
  gsap.set(".hero__portrait", { clipPath: "inset(100% 0% 0% 0% round 999px 999px 0px 0px)" });
  gsap.set(".plate", { opacity: 0, scale: .5, rotate: -40 });
  gsap.set(".hero [data-hero-fade]", { opacity: 0, y: 16 });
  html.classList.remove("anim"); // a partir daqui os estados iniciais são do GSAP
  gsap.timeline({ defaults: { ease: "expo.out" } })
    .to(".hero__portrait", { clipPath: "inset(0% 0% 0% 0% round 999px 999px 0px 0px)", duration: 1.6, ease: "expo.inOut" }, 0)
    .to(".hero h1 .ln > span", { yPercent: 0, duration: 1.3, stagger: .12 }, .35)
    .to(".plate", { opacity: 1, scale: 1, rotate: 0, duration: 1.4, stagger: .15 }, .8)
    .to(".hero [data-hero-fade]", { opacity: 1, y: 0, duration: 1, stagger: .1 }, 1)
    .to(".hero__ribbon", { opacity: 1, duration: .8 }, 1.4);

  // 2. Parallax sutil no hero
  $$(".hero [data-speed]").forEach((el) => {
    gsap.to(el, { yPercent: () => parseFloat(el.dataset.speed) * -100, ease: "none",
      scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
  });

  // 3. Fotos: revelação por máscara (sobre e contato) + leve zoom-out
  $$("[data-reveal]").forEach((el) => {
    el.classList.add("is-in");
    gsap.fromTo(el, { clipPath: "inset(0 0 100% 0 round 22px)" }, { clipPath: "inset(0 0 0% 0 round 22px)", duration: 1.3, ease: "expo.inOut", scrollTrigger: { trigger: el, start: "top 85%", once: true } });
    const img = $("img", el);
    if (img) gsap.fromTo(img, { scale: 1.18 }, { scale: 1, duration: 1.8, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 85%", once: true } });
  });
  gsap.to(".about__collage .crochet-deco", { rotate: 120, ease: "none", scrollTrigger: { trigger: ".about", start: "top bottom", end: "bottom top", scrub: true } });

  // 4. Jornada: rolagem horizontal fixa no desktop
  const mm = gsap.matchMedia();
  mm.add("(min-width: 1024px)", () => {
    const sec = $(".journey"), track = $("#journeyTrack");
    sec.classList.add("is-pinned");
    const dist = () => track.scrollWidth - innerWidth;
    const tween = gsap.to(track, { x: () => -dist(), ease: "none",
      scrollTrigger: { trigger: sec, start: "top top", end: () => "+=" + dist(), pin: true, scrub: .6, invalidateOnRefresh: true, anticipatePin: 1 } });
    $$(".step", track).forEach((s) => {
      gsap.from($(".step__media", s), { scale: .9, opacity: .3, ease: "none",
        scrollTrigger: { trigger: s, containerAnimation: tween, start: "left 95%", end: "left 45%", scrub: true } });
    });
    return () => sec.classList.remove("is-pinned");
  });

  // 5. Contato: o crochê gira com a rolagem
  gsap.to(".contact__photo .crochet", { rotate: -180, ease: "none", scrollTrigger: { trigger: ".contact", start: "top bottom", end: "bottom top", scrub: true } });

  // Recalcula depois que as fotos carregam
  addEventListener("load", () => ScrollTrigger.refresh());
})();

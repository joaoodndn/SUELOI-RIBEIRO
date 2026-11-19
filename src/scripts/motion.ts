import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import SplitType from 'split-type';

const root = document.documentElement;
declare global {
  interface Window { __motionTimer?: number }
}
clearTimeout(window.__motionTimer);

const reduz = window.matchMedia('(prefers-reduced-motion: reduce)').matches && !root.classList.contains('forcar-movimento');
const ponteiroFino = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const $$ = <T extends Element = HTMLElement>(s: string, el: ParentNode = document) => Array.from(el.querySelectorAll<T>(s));

/* ---------------- Interface (vale com ou sem animação) ---------------- */

// Menu mobile
const menuBtn = document.querySelector<HTMLButtonElement>('.menu-btn');
const fecharMenu = () => {
  root.classList.remove('menu-aberto');
  menuBtn?.setAttribute('aria-expanded', 'false');
  menuBtn?.querySelector('b')?.replaceChildren('Abrir menu');
  lenis?.start();
};
menuBtn?.addEventListener('click', () => {
  const abrir = !root.classList.contains('menu-aberto');
  if (!abrir) return fecharMenu();
  root.classList.add('menu-aberto');
  menuBtn.setAttribute('aria-expanded', 'true');
  menuBtn.querySelector('b')?.replaceChildren('Fechar menu');
  lenis?.stop();
});
$$('.menu-mobile a').forEach((a) => a.addEventListener('click', fecharMenu));
document.addEventListener('keydown', (e) => e.key === 'Escape' && fecharMenu());

// FAQ: abertura suave do <details>
$$<HTMLDetailsElement>('details.faq__item').forEach((d) => {
  const resumo = d.querySelector('summary')!;
  const corpo = d.querySelector<HTMLElement>('.faq__resp')!;
  resumo.addEventListener('click', (e) => {
    if (reduz) return;
    e.preventDefault();
    if (d.open) {
      gsap.to(corpo, { height: 0, opacity: 0, duration: 0.45, ease: 'power3.inOut', onComplete: () => { d.open = false; gsap.set(corpo, { clearProps: 'all' }); } });
      d.classList.remove('is-aberto');
    } else {
      d.open = true;
      d.classList.add('is-aberto');
      gsap.fromTo(corpo, { height: 0, opacity: 0 }, { height: 'auto', opacity: 1, duration: 0.55, ease: 'power3.out', onComplete: () => gsap.set(corpo, { clearProps: 'all' }) });
    }
  });
});

// Header: some ao descer, volta ao subir; fundo sólido depois do topo
const header = document.querySelector<HTMLElement>('.header');
const flutuante = document.querySelector<HTMLElement>('.flutuante');
let ultimoY = 0;
const barra = document.querySelector<HTMLElement>('.progresso span');
const anelProg = document.querySelector<SVGCircleElement>('.cursor-anel__prog');
const aoRolar = (y: number) => {
  const total = document.documentElement.scrollHeight - window.innerHeight;
  const p = total > 0 ? Math.min(1, Math.max(0, y / total)) : 0;
  if (barra) barra.style.transform = `scaleX(${p})`;
  if (anelProg) anelProg.style.strokeDashoffset = String(100 - p * 100);
  header?.classList.toggle('is-solido', y > 40);
  if (!root.classList.contains('menu-aberto')) header?.classList.toggle('is-oculto', y > 400 && y > ultimoY);
  flutuante?.classList.toggle('is-visivel', y > window.innerHeight * 0.6);
  ultimoY = y;
};


// "Ver mais comentários"
const btnMais = document.querySelector<HTMLButtonElement>('[data-ver-mais]');
btnMais?.addEventListener('click', () => {
  const extras = $$('.avaliacao--extra');
  const abrir = btnMais.getAttribute('aria-expanded') !== 'true';
  extras.forEach((el) => (el.hidden = !abrir));
  btnMais.setAttribute('aria-expanded', String(abrir));
  btnMais.textContent = abrir ? 'Ver menos comentários' : 'Ver mais comentários';
  if (abrir && !reduz) gsap.fromTo(extras, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.08 });
  if (abrir) extras[0]?.querySelector('a')?.focus({ preventScroll: true });
  ScrollTrigger?.refresh?.();
});

// Índice das etapas: marca a etapa visível
const indice = $$('.etapas__indice li');
const marcarEtapa = (i: number) => indice.forEach((li, k) => li.classList.toggle('is-ativa', k === i));
marcarEtapa(0);

/* ---------------- Sem animação ---------------- */
let lenis: Lenis | undefined;
if (reduz) {
  // Versão suave para quem desligou animações no sistema: só esmaecimentos, sem deslocamento.
  introSuave();
  window.addEventListener('scroll', () => aoRolar(window.scrollY), { passive: true });
  aoRolar(window.scrollY);
  const io = new IntersectionObserver((entradas) => {
    entradas.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add('is-visivel');
      io.unobserve(e.target);
    });
  }, { rootMargin: '0px 0px -8% 0px' });
  $$('[data-anim], [data-titulo], [data-hero]').forEach((el) => { el.classList.add('suave'); io.observe(el); });
  $$('.rotulo[data-traco]').forEach((el) => io.observe(el));

  const faixa = document.querySelector<HTMLElement>('.faixa');
  const rolo = faixa?.querySelector<HTMLElement>('.faixa__trilho');
  if (faixa && rolo) {
    faixa.classList.add('is-nativa');
    const barraF = faixa.querySelector<HTMLElement>('.faixa__barra span');
    const btns = $$<HTMLButtonElement>('.faixa__btn', faixa);
    const atualiza = () => {
      const max = rolo.scrollWidth - rolo.clientWidth;
      if (barraF) barraF.style.transform = `scaleX(${max > 0 ? rolo.scrollLeft / max : 0})`;
      btns.forEach((b) => (b.disabled = b.dataset.dir === '-1' ? rolo.scrollLeft < 8 : rolo.scrollLeft > max - 8));
    };
    rolo.addEventListener('scroll', atualiza, { passive: true });
    atualiza();
    btns.forEach((b) => b.addEventListener('click', () => {
      const passo = (faixa.querySelector<HTMLElement>('.faixa__item')?.offsetWidth ?? 300) + 24;
      rolo.scrollBy({ left: Number(b.dataset.dir) * passo, behavior: 'smooth' });
    }));
  }
  const ioEtapas = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) marcarEtapa($$('.etapa').indexOf(e.target as HTMLElement)); }), { rootMargin: '-45% 0px -45% 0px' });
  $$('.etapa').forEach((el) => ioEtapas.observe(el));
} else {
  iniciarMovimento();
}

/** Abertura para quem desligou animações: traço do monograma e esmaecimentos, sem deslocamento. */
function introSuave() {
  const intro = document.querySelector<HTMLElement>('.intro');
  if (!intro || root.classList.contains('sem-intro')) { intro?.remove(); return; }
  const anel = intro.querySelector<SVGCircleElement>('.mono-anel')!;
  const sr = intro.querySelector<SVGTextElement>('.mono-letras')!;
  const comp = 2 * Math.PI * 47;
  gsap.set(anel, { strokeDasharray: comp, strokeDashoffset: comp });
  gsap.set(sr, { fillOpacity: 0, strokeOpacity: 0 });
  gsap.set(['.intro__nome', '.intro__linha'], { opacity: 0 });
  gsap.set('.intro__linha', { scaleX: 1 });
  const fim = () => { try { sessionStorage.setItem('sr-intro', '1'); } catch {} intro.remove(); };
  const tl = gsap.timeline({ onComplete: fim });
  tl.to(anel, { strokeDashoffset: 0, duration: 1.1, ease: 'power2.inOut' })
    .to(sr, { fillOpacity: 1, strokeOpacity: 1, duration: 0.7 }, 0.5)
    .to('.intro__nome', { opacity: 1, duration: 0.7 }, 0.8)
    .to('.intro__linha', { opacity: 1, duration: 0.6 }, 1.1)
    .to(intro, { opacity: 0, duration: 0.7, ease: 'power1.inOut' }, 2.1);
  intro.querySelector('.intro__pular')?.addEventListener('click', () => tl.progress(1));
}

function iniciarMovimento() {
  gsap.registerPlugin(ScrollTrigger);

  lenis = new Lenis({ lerp: 0.085, smoothWheel: true, wheelMultiplier: 0.95 });
  // Fotos inclinam levemente conforme a velocidade da rolagem e voltam ao parar
  const inclinaveis = $$('.area__foto, .dica__foto, .faixa__foto, .etapa__foto');
  const inclina = { v: 0 };
  const aplicaInclinacao = () => inclinaveis.forEach((el) => (el.style.transform = `skewY(${inclina.v}deg)`));
  lenis.on('scroll', (e: { scroll: number; velocity: number }) => {
    ScrollTrigger.update();
    aoRolar(e.scroll);
    const alvo = gsap.utils.clamp(-2.2, 2.2, e.velocity * 0.12);
    gsap.to(inclina, { v: alvo, duration: 0.5, ease: 'power3.out', overwrite: true, onUpdate: aplicaInclinacao });
  });
  gsap.ticker.add((t) => lenis!.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  aoRolar(window.scrollY);

  // Links de âncora com rolagem suave
  $$<HTMLAnchorElement>('a[href^="#"], a[href^="/#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const hash = a.getAttribute('href')!.replace(/^\//, '');
      if (a.getAttribute('href')!.startsWith('/#') && location.pathname !== '/') return;
      const alvo = hash.length > 1 ? document.querySelector<HTMLElement>(hash) : null;
      if (!alvo) return;
      e.preventDefault();
      lenis!.scrollTo(alvo, { offset: -20, duration: 1.4 });
      if (hash === '#conteudo') alvo.focus({ preventScroll: true });
    });
  });

  // ---------- Etapas: uma por vez, trocando conforme a rolagem ----------
  const listaEtapas = document.querySelector<HTMLElement>('.etapas');
  const palco = document.querySelector<HTMLElement>('.etapas__palco');
  if (listaEtapas && palco) {
    const itens = $$('.etapa', listaEtapas);
    itens.forEach((it) => it.querySelector('[data-anim]')?.removeAttribute('data-anim'));
    listaEtapas.classList.add('is-empilhada');
    listaEtapas.removeAttribute('data-linha');
    itens.forEach((it, i) => {
      gsap.set(it, { autoAlpha: i === 0 ? 1 : 0 });
      const foto = it.querySelector('.etapa__foto');
      if (i > 0 && foto) gsap.set(foto, { clipPath: 'inset(100% 0% 0% 0%)' });
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: palco,
        start: () => (window.innerWidth < 900 ? 'top top+=90' : 'center center'),
        end: () => `+=${window.innerHeight * 1.1 * (itens.length - 1) + window.innerHeight * 0.4}`,
        pin: true,
        scrub: 0.7,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (st) => marcarEtapa(Math.min(itens.length - 1, Math.floor(st.progress * itens.length * 0.999))),
      },
    });
    tl.to({}, { duration: 0.3 });
    itens.forEach((it, i) => {
      if (i === 0) return;
      const ant = itens[i - 1];
      const foto = it.querySelector('.etapa__foto');
      const img = foto?.querySelector('img');
      tl.to(ant, { autoAlpha: 0, y: -50, duration: 0.5, ease: 'power2.in' })
        .fromTo(it, { autoAlpha: 0, y: 60 }, { autoAlpha: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '<0.25')
        .fromTo(it.querySelector('.etapa__n'), { yPercent: 60, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, '<');
      if (foto) tl.to(foto, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.7, ease: 'power2.inOut' }, '<0.1');
      if (img) tl.fromTo(img, { scale: 1.25 }, { scale: 1, duration: 0.8, ease: 'power2.out' }, '<');
      tl.to({}, { duration: 0.35 });
    });
  }

  // ---------- Títulos: revelação por linha, com máscara ----------
  const titulos = $$('[data-titulo]');
  const revelarTitulo = (el: HTMLElement, delay = 0) => {
    const split = new SplitType(el, { types: 'lines', lineClass: 'linha-t' });
    split.lines?.forEach((l) => {
      const m = document.createElement('span');
      m.className = 'linha-mascara';
      l.parentNode!.insertBefore(m, l);
      m.appendChild(l);
    });
    el.style.visibility = 'visible';
    return gsap.from(split.lines!, { yPercent: 105, duration: 1.15, ease: 'expo.out', stagger: 0.09, delay });
  };

  // ---------- Hero: espera a abertura ----------
  const heroTitulo = document.querySelector<HTMLElement>('[data-titulo="hero"]');
  const animarHero = () => {
    const tl = gsap.timeline();
    if (heroTitulo) tl.add(revelarTitulo(heroTitulo), 0);
    tl.from('[data-hero="foto"]', { clipPath: 'inset(100% 0% 0% 0%)', duration: 1.4, ease: 'expo.inOut', stagger: 0.15 }, 0)
      .from('[data-hero="foto"] img', { scale: 1.25, duration: 1.8, ease: 'expo.out', stagger: 0.15 }, 0.1)
      .from('[data-hero="sobe"]', { y: 28, opacity: 0, duration: 1, ease: 'power3.out', stagger: 0.08 }, 0.35);
  };

  const intro = document.querySelector<HTMLElement>('.intro');
  if (intro && !root.classList.contains('sem-intro')) {
    lenis.stop();
    const letras = $$('.intro__nome span', intro);
    const anel = intro.querySelector<SVGCircleElement>('.mono-anel')!;
    const sr = intro.querySelector<SVGTextElement>('.mono-letras')!;
    const comp = 2 * Math.PI * 47;
    gsap.set(anel, { strokeDasharray: comp, strokeDashoffset: comp });
    gsap.set(sr, { strokeDasharray: 260, strokeDashoffset: 260, fillOpacity: 0 });
    const fim = () => {
      try { sessionStorage.setItem('sr-intro', '1'); } catch {}
      intro.remove();
      lenis!.start();
    };
    const tl = gsap.timeline({ onComplete: fim });
    tl.to(anel, { strokeDashoffset: 0, duration: 1.1, ease: 'power2.inOut' })
      .to(sr, { strokeDashoffset: 0, duration: 1, ease: 'power2.inOut' }, 0.2)
      .to(sr, { fillOpacity: 1, duration: 0.5 }, 0.95)
      .from(intro.querySelector('.intro__sr'), { scale: 0.86, duration: 1.6, ease: 'expo.out' }, 0)
      .from(letras, { yPercent: 80, opacity: 0, filter: 'blur(6px)', duration: 0.7, ease: 'power3.out', stagger: 0.022 }, 0.55)
      .to('.intro__linha', { scaleX: 1, duration: 0.8, ease: 'power3.inOut' }, 1.1)
      .to('.intro__centro', { opacity: 0, y: -12, duration: 0.45, ease: 'power2.in' }, 2.0)
      .to('.intro__metade--a', { yPercent: -100, duration: 1, ease: 'expo.inOut' }, 2.15)
      .to('.intro__metade--b', { yPercent: 100, duration: 1, ease: 'expo.inOut' }, 2.15)
      .add(animarHero, 2.45);
    intro.querySelector('.intro__pular')?.addEventListener('click', () => tl.progress(1));
    intro.addEventListener('click', () => tl.timeScale(4));
  } else {
    intro?.remove();
    animarHero();
  }

  // Demais títulos: revelam ao entrar na tela
  titulos.filter((t) => t !== heroTitulo).forEach((el) => {
    ScrollTrigger.create({ trigger: el, start: 'top 88%', once: true, onEnter: () => revelarTitulo(el) });
  });

  // ---------- Traço dos rótulos ----------
  $$('.rotulo[data-traco]').forEach((el) => {
    ScrollTrigger.create({ trigger: el, start: 'top 90%', once: true, onEnter: () => el.classList.add('is-visivel') });
  });

  // ---------- Cartões: foto abre em máscara, texto sobe, em cascata por coluna ----------
  $$('[data-anim="cartoes"]').forEach((lista) => {
    const itens = Array.from(lista.children) as HTMLElement[];
    const colunas = () => {
      const topo = itens[0]?.getBoundingClientRect().top ?? 0;
      return Math.max(1, itens.filter((i) => Math.abs(i.getBoundingClientRect().top - topo) < 4).length);
    };
    const cols = colunas();
    itens.forEach((item, idx) => {
      const foto = item.querySelector<HTMLElement>('.foto');
      const img = foto?.querySelector('img');
      const textos = Array.from(item.querySelectorAll<HTMLElement>('h3, p, .area__mais'));
      const tl = gsap.timeline({ scrollTrigger: { trigger: item, start: 'top 88%', once: true }, delay: (idx % cols) * 0.12 });
      gsap.set(item, { opacity: 1 });
      if (foto) tl.fromTo(foto, { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.3, ease: 'expo.inOut' });
      if (img) {
        tl.fromTo(img, { scale: 1.35 }, { scale: 1.08, duration: 1.8, ease: 'expo.out' }, 0.05);
        gsap.fromTo(img, { yPercent: -4 }, { yPercent: 4, ease: 'none', scrollTrigger: { trigger: item, start: 'top bottom', end: 'bottom top', scrub: true } });
      }
      tl.fromTo(textos, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.07 }, 0.55);
    });
  });

  // ---------- Parallax interno da foto (dentro da moldura) ----------
  $$('[data-img-parallax]').forEach((el) => {
    const img = el.querySelector('img');
    if (!img) return;
    gsap.set(img, { scale: 1.18 });
    gsap.fromTo(img, { yPercent: -6 }, { yPercent: 6, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true } });
  });

  // ---------- Letreiro que acompanha a rolagem ----------
  $$('[data-letreiro]').forEach((el) => {
    const dir = parseFloat(el.dataset.letreiro || '-1');
    gsap.fromTo(el, { xPercent: dir < 0 ? 0 : -25 }, { xPercent: dir < 0 ? -25 : 0, ease: 'none', scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: 0.5 } });
  });

  // ---------- Sobe (fade up) ----------
  $$('[data-anim="sobe"]').forEach((el) => {
    gsap.fromTo(el, { y: 36, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%', once: true } });
  });

  // ---------- Stagger (listas e cartões) ----------
  $$('[data-anim="stagger"]').forEach((el) => {
    gsap.fromTo(el.children, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.1, scrollTrigger: { trigger: el, start: 'top 85%', once: true } });
  });

  // ---------- Máscara (clip-path) nas fotos ----------
  $$('[data-anim="mascara"]').forEach((el) => {
    const img = el.querySelector('img');
    const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: 'top 85%', once: true } });
    tl.fromTo(el, { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.4, ease: 'expo.inOut' });
    if (img) tl.from(img, { scale: 1.3, duration: 1.8, ease: 'expo.out' }, 0.1);
  });

  // ---------- Parallax ----------
  $$('[data-parallax]').forEach((el) => {
    const v = parseFloat(el.dataset.parallax || '12');
    gsap.fromTo(el, { yPercent: -v / 2 }, { yPercent: v / 2, ease: 'none', scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } });
  });

  // ---------- Texto que acende com a rolagem ----------
  $$('[data-acende]').forEach((el) => {
    const split = new SplitType(el, { types: 'words' });
    gsap.fromTo(split.words!, { opacity: 0.16 }, { opacity: 1, stagger: 0.1, ease: 'none', scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 45%', scrub: true } });
  });

  // ---------- Etapas: linha que se desenha ----------
  $$('[data-linha]').forEach((el) => {
    const barra = el.querySelector('.etapas__linha-fill');
    if (barra) gsap.fromTo(barra, { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: el, start: 'top 65%', end: 'bottom 70%', scrub: true } });
    $$('.etapa', el).forEach((etapa) => {
      ScrollTrigger.create({ trigger: etapa, start: 'top 68%', onEnter: () => etapa.classList.add('is-ativa'), onLeaveBack: () => etapa.classList.remove('is-ativa') });
    });
  });

  // ---------- Scroll horizontal (desktop) ----------
  ScrollTrigger.config({ ignoreMobileResize: true });
  const mm = gsap.matchMedia();
  mm.add('all', () => {
    $$('[data-horizontal]').forEach((sec) => {
      const trilho = sec.querySelector<HTMLElement>('.faixa__trilho');
      if (!trilho) return;
      const dist = () => trilho.scrollWidth - window.innerWidth + parseFloat(getComputedStyle(trilho).paddingLeft);
      const barraF = sec.querySelector<HTMLElement>('.faixa__barra span');
      const tween = gsap.to(trilho, { x: () => -dist(), ease: 'none', scrollTrigger: { trigger: sec, start: 'top top', end: () => `+=${dist()}`, pin: true, scrub: 0.6, invalidateOnRefresh: true, anticipatePin: 1, onUpdate: (st) => { if (barraF) barraF.style.transform = `scaleX(${st.progress})`; } } });
      $$('.faixa__item img', trilho).forEach((img) => {
        gsap.fromTo(img, { xPercent: -8 }, { xPercent: 8, ease: 'none', scrollTrigger: { trigger: img.parentElement, containerAnimation: tween, start: 'left right', end: 'right left', scrub: true } });
      });
    });
  });

  // ---------- Marquee (pausa fora da tela) ----------
  $$('.marquee').forEach((m) => {
    ScrollTrigger.create({ trigger: m, start: 'top bottom', end: 'bottom top', onToggle: (s) => m.classList.toggle('is-pausado', !s.isActive) });
  });

  // ---------- Botões magnéticos ----------
  if (ponteiroFino) {
    $$('[data-magnetico]').forEach((b) => {
      const xTo = gsap.quickTo(b, 'x', { duration: 0.6, ease: 'elastic.out(1, 0.4)' });
      const yTo = gsap.quickTo(b, 'y', { duration: 0.6, ease: 'elastic.out(1, 0.4)' });
      b.addEventListener('pointermove', (e) => {
        const r = b.getBoundingClientRect();
        xTo((e.clientX - r.left - r.width / 2) * 0.25);
        yTo((e.clientY - r.top - r.height / 2) * 0.35);
      });
      b.addEventListener('pointerleave', () => { xTo(0); yTo(0); });
    });

    // ---------- Fotos do hero acompanham o mouse ----------
    const hero = document.querySelector<HTMLElement>('.hero');
    const camadas = $$('[data-mouse]').map((el) => ({
      f: parseFloat(el.dataset.mouse || '20'),
      x: gsap.quickTo(el, 'x', { duration: 1.2, ease: 'power3.out' }),
      y: gsap.quickTo(el, 'y', { duration: 1.2, ease: 'power3.out' }),
    }));
    hero?.addEventListener('pointermove', (e) => {
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      camadas.forEach((c) => { c.x(nx * c.f); c.y(ny * c.f); });
    });
    hero?.addEventListener('pointerleave', () => camadas.forEach((c) => { c.x(0); c.y(0); }));

    // ---------- Cursor: ponto rápido + anel com atraso (o anel mostra o progresso da página) ----------
    const ponto = document.querySelector<HTMLElement>('.cursor-ponto');
    const anel = document.querySelector<HTMLElement>('.cursor-anel');
    if (ponto && anel) {
      root.classList.add('tem-cursor');
      const rotulo = anel.querySelector<HTMLElement>('.cursor-anel__rotulo')!;
      const px = gsap.quickTo(ponto, 'x', { duration: 0.12, ease: 'power3.out' });
      const py = gsap.quickTo(ponto, 'y', { duration: 0.12, ease: 'power3.out' });
      const ax = gsap.quickTo(anel, 'x', { duration: 0.55, ease: 'power3.out' });
      const ay = gsap.quickTo(anel, 'y', { duration: 0.55, ease: 'power3.out' });
      gsap.set([ponto, anel], { opacity: 0 });
      window.addEventListener('pointermove', (e) => {
        gsap.to([ponto, anel], { opacity: 1, duration: 0.3, overwrite: 'auto' });
        px(e.clientX); py(e.clientY); ax(e.clientX); ay(e.clientY);
      });
      document.documentElement.addEventListener('pointerleave', () => gsap.to([ponto, anel], { opacity: 0, duration: 0.3 }));
      window.addEventListener('pointerdown', () => ponto.classList.add('is-clique'));
      window.addEventListener('pointerup', () => ponto.classList.remove('is-clique'));

      const corFundo = (el: HTMLElement) => {
        if (el.closest('.foto')) return 'var(--creme)';
        if (el.closest('.sec--escura, .marquee, .rodape, .menu-mobile, .letreiro')) return 'var(--texto)';
        return 'var(--marrom)';
      };
      document.addEventListener('pointerover', (e) => {
        const alvo = e.target as HTMLElement;
        const comRotulo = alvo.closest<HTMLElement>('[data-cursor]');
        const link = !comRotulo && !!alvo.closest('a, button, summary, [role="button"]');
        const texto = !comRotulo && !link && !!alvo.closest('p, li, h1, h2, h3, blockquote, figcaption');
        anel.classList.toggle('is-rotulo', !!comRotulo);
        ponto.classList.toggle('is-rotulo', !!comRotulo);
        anel.classList.toggle('is-link', link);
        ponto.classList.toggle('is-link', link);
        ponto.classList.toggle('is-texto', texto);
        rotulo.textContent = comRotulo?.dataset.cursor ?? '';
        const cor = comRotulo ? 'var(--marrom)' : corFundo(alvo);
        ponto.style.setProperty('--cursor-cor', cor);
        anel.style.setProperty('--cursor-cor', cor);
      });
    }

    // ---------- Tilt discreto nos cartões das áreas ----------
    $$('[data-tilt]').forEach((c) => {
      const rx = gsap.quickTo(c, 'rotationX', { duration: 0.8, ease: 'power3.out' });
      const ry = gsap.quickTo(c, 'rotationY', { duration: 0.8, ease: 'power3.out' });
      gsap.set(c, { transformPerspective: 900 });
      c.addEventListener('pointermove', (e) => {
        const r = c.getBoundingClientRect();
        ry(((e.clientX - r.left) / r.width - 0.5) * 5);
        rx(-((e.clientY - r.top) / r.height - 0.5) * 5);
      });
      c.addEventListener('pointerleave', () => { rx(0); ry(0); });
    });
  }

  // Recalcula depois que fontes e imagens carregam
  document.fonts?.ready.then(() => ScrollTrigger.refresh());
  window.addEventListener('load', () => ScrollTrigger.refresh());
}

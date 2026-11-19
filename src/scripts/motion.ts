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
const aoRolar = (y: number) => {
  header?.classList.toggle('is-solido', y > 40);
  if (!root.classList.contains('menu-aberto')) header?.classList.toggle('is-oculto', y > 400 && y > ultimoY);
  flutuante?.classList.toggle('is-visivel', y > window.innerHeight * 0.6);
  ultimoY = y;
};

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

  lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
  lenis.on('scroll', (e: { scroll: number }) => { ScrollTrigger.update(); aoRolar(e.scroll); });
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
      if (img) tl.fromTo(img, { scale: 1.35 }, { scale: 1, duration: 1.8, ease: 'expo.out' }, 0.05);
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
  const mm = gsap.matchMedia();
  mm.add('(min-width: 900px)', () => {
    $$('[data-horizontal]').forEach((sec) => {
      const trilho = sec.querySelector<HTMLElement>('.faixa__trilho');
      if (!trilho) return;
      const dist = () => trilho.scrollWidth - window.innerWidth + parseFloat(getComputedStyle(trilho).paddingLeft);
      const tween = gsap.to(trilho, { x: () => -dist(), ease: 'none', scrollTrigger: { trigger: sec, start: 'top top', end: () => `+=${dist()}`, pin: true, scrub: 0.6, invalidateOnRefresh: true, anticipatePin: 1 } });
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

    // ---------- Cursor personalizado ----------
    const cursor = document.querySelector<HTMLElement>('.cursor');
    if (cursor) {
      root.classList.add('tem-cursor');
      const rotulo = cursor.querySelector<HTMLElement>('.cursor__rotulo')!;
      const cx = gsap.quickTo(cursor, 'x', { duration: 0.35, ease: 'power3.out' });
      const cy = gsap.quickTo(cursor, 'y', { duration: 0.35, ease: 'power3.out' });
      gsap.set(cursor, { opacity: 0 });
      window.addEventListener('pointermove', (e) => { gsap.to(cursor, { opacity: 1, duration: 0.3, overwrite: 'auto' }); cx(e.clientX); cy(e.clientY); });
      document.addEventListener('pointerleave', () => gsap.to(cursor, { opacity: 0, duration: 0.3 }));
      document.addEventListener('pointerover', (e) => {
        const alvo = e.target as HTMLElement;
        const comRotulo = alvo.closest<HTMLElement>('[data-cursor]');
        cursor.classList.toggle('is-rotulo', !!comRotulo);
        rotulo.textContent = comRotulo?.dataset.cursor ?? '';
        cursor.classList.toggle('is-link', !comRotulo && !!alvo.closest('a, button, summary'));
        cursor.classList.toggle('is-escuro', !!alvo.closest('[data-cursor-escuro], .rodape, .marquee, .menu-mobile'));
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

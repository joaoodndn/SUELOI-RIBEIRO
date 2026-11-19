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
  root.classList.add('sem-intro');
  document.querySelector('.intro')?.remove();
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
} else {
  iniciarMovimento();
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
      .from(letras, { yPercent: 60, opacity: 0, duration: 0.6, ease: 'power3.out', stagger: 0.022 }, 0.55)
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

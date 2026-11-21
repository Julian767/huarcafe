(() => {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Año dinámico ---------- */
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- Header con scroll ---------- */
  const header = document.getElementById('site-header');
  let ticking = false;

  const updateOnScroll = () => {
    if (header) {
      header.dataset.scrolled = window.scrollY > 24 ? 'true' : 'false';
    }
    updateActiveNav();
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateOnScroll);
      ticking = true;
    }
  }, { passive: true });

  /* ---------- Scrollspy ---------- */
  const sections = Array.from(document.querySelectorAll('main section[id], #platos, #bebidas'));
  const navLinks = Array.from(document.querySelectorAll('[data-nav]'));

  function updateActiveNav() {
    const marker = window.scrollY + 140;
    let currentId = '';

    sections.forEach((section) => {
      if (section.offsetTop <= marker) currentId = section.id;
    });

    let activeAssigned = false;
    navLinks.forEach((link) => {
      const isCurrent = !activeAssigned && link.getAttribute('href') === '#' + currentId;
      if (isCurrent) activeAssigned = true;

      if (isCurrent) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  /* ---------- Menú móvil ---------- */
  const menu = document.getElementById('mobile-menu');
  const menuToggle = document.getElementById('menu-toggle');
  const iconOpen = document.getElementById('icon-open');
  const iconClose = document.getElementById('icon-close');

  function setMenu(open) {
    if (!menu || !menuToggle) return;
    menu.classList.toggle('is-open', open);
    document.body.classList.toggle('overflow-hidden', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    if (iconOpen) iconOpen.classList.toggle('hidden', open);
    if (iconClose) iconClose.classList.toggle('hidden', !open);
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      setMenu(!menu.classList.contains('is-open'));
    });
  }

  if (menu) {
    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => setMenu(false));
    });
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenu(false);
  });

  /* Cerrar el menú si se agranda la ventana a desktop */
  window.matchMedia('(min-width: 1280px)').addEventListener('change', (event) => {
    if (event.matches) setMenu(false);
  });

  /* ---------- Reveal on scroll ---------- */
  const revealElements = Array.from(document.querySelectorAll('.reveal'));

  /* Stagger dentro de cada grupo */
  document.querySelectorAll('[data-stagger]').forEach((group) => {
    Array.from(group.children)
      .filter((child) => child.classList.contains('reveal'))
      .forEach((child, index) => {
        child.style.transitionDelay = Math.min(index * 70, 420) + 'ms';
      });
  });

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealElements.forEach((el) => el.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });

    revealElements.forEach((el) => revealObserver.observe(el));
  }

  /* ---------- Filtro de orígenes ---------- */
  const filterButtons = Array.from(document.querySelectorAll('[data-filter]'));
  const originRows = Array.from(document.querySelectorAll('[data-origin]'));
  const status = document.getElementById('origins-status');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;

      filterButtons.forEach((btn) => {
        const isActive = btn === button;
        btn.classList.toggle('is-active', isActive);
        btn.setAttribute('aria-pressed', String(isActive));
      });

      let visible = 0;
      originRows.forEach((row) => {
        const show = filter === 'todos' || row.dataset.process === filter;
        row.hidden = !show;
        if (show) visible += 1;
      });

      if (status) {
        status.textContent = 'Mostrando ' + visible + (visible === 1 ? ' café de origen.' : ' cafés de origen.');
      }
    });
  });

  /* ---------- Gift Cards · selector + WhatsApp ---------- */
  const giftSelector = document.getElementById('gift-selector');
  const giftForm = document.getElementById('gift-form');
  const giftWhatsapp = document.getElementById('gift-whatsapp');
  const giftSummary = document.getElementById('gift-summary');

  if (giftSelector && giftForm && giftWhatsapp) {
    const whatsappNumber = giftSelector.dataset.whatsapp || '5492645019966';

    const syncGiftChoices = () => {
      giftForm.querySelectorAll('.gift-choice').forEach((choice) => {
        const input = choice.querySelector('input');
        choice.classList.toggle('is-selected', Boolean(input && input.checked));
      });
    };

    const updateGiftLink = () => {
      const data = new FormData(giftForm);
      const people = data.get('gift-people') || 'una persona';
      const experience = data.get('gift-experience') || 'mixta';

      const message = 'Hola, quisiera consultar por una Gift Card de Huar Café. ' +
        'Me interesa una experiencia para ' + people + ', opción ' + experience +
        '. ¿Podrían enviarme más información?';

      giftWhatsapp.href = 'https://wa.me/' + whatsappNumber + '?text=' + encodeURIComponent(message);

      if (giftSummary) {
        giftSummary.textContent = 'Experiencia para ' + people + ' · Opción ' + experience;
      }

      syncGiftChoices();
    };

    giftForm.addEventListener('change', updateGiftLink);
    updateGiftLink();
  }

  /* ---------- Modales de información legal ---------- */
  const legalDialogs = Array.from(document.querySelectorAll('.legal-dialog'));
  let legalTrigger = null;

  document.querySelectorAll('[data-legal-open]').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const dialog = document.getElementById(trigger.dataset.legalOpen);
      if (!dialog || dialog.open) return;

      legalTrigger = trigger;
      dialog.showModal();
      document.body.classList.add('overflow-hidden');
    });
  });

  legalDialogs.forEach((dialog) => {
    dialog.querySelectorAll('[data-legal-close]').forEach((button) => {
      button.addEventListener('click', () => dialog.close());
    });

    /* Cerrar al hacer clic fuera del panel */
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) dialog.close();
    });

    dialog.addEventListener('close', () => {
      if (!legalDialogs.some((item) => item.open) && !(menu && menu.classList.contains('is-open'))) {
        document.body.classList.remove('overflow-hidden');
      }

      if (legalTrigger) {
        legalTrigger.focus();
        legalTrigger = null;
      }
    });
  });

  /* ---------- Estado inicial ---------- */
  updateActiveNav();
  updateOnScroll();
})();

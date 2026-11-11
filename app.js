(() => {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ========================================================================
     AUTHENTIC ANWAR LANDMARK PROJECT DATASET
     ======================================================================== */
  const PROJECTS = [
    {
      id: 'rosetta',
      title: 'Anwar Landmark Rosetta',
      status: 'Ongoing',
      zone: 'Mohammadpur',
      address: '13/C, Road: 8/C, Babar Road, Mohammadpur, Dhaka',
      size: '2,077 sft',
      stories: 'GF + 08',
      facing: 'East Facing',
      land: '3 Bed · 1 Parking/Flat',
      img: 'assets/images/proj-rosetta.jpg',
      heroImg: 'assets/images/hero-rosetta.jpg',
      url: 'https://anwarlandmark.com/project-details/anwar-landmark-rosetta',
      desc: 'An intimate urban residence along Babar Road crafted for sunlit morning living, featuring 3-bedroom family suites and refined arrival architecture.'
    },
    {
      id: 'allium',
      title: 'Allium',
      status: 'Ongoing',
      zone: 'Bashundhara',
      address: 'Plot 602 & 603, Road 19, Block-F, Bashundhara R/A',
      size: '2,198 sft',
      stories: 'GF + 08',
      facing: 'North Facing',
      land: '6 Katha Land',
      img: 'assets/images/proj-allium.jpg',
      heroImg: 'assets/images/hero-allium.jpg',
      url: 'https://anwarlandmark.com/project-details/allium',
      desc: 'Positioned on a dual-plot parcel in Block-F, Allium balances spacious single-floor proportions with quiet neighborhood connectivity.'
    },
    {
      id: 'mimosa',
      title: 'Mimosa',
      status: 'Ongoing',
      zone: 'Jolshiri',
      address: 'Plot 15, Road 502C, Sector-16, Jolshiri Abashon',
      size: '2,824 sft',
      stories: 'GF + M + 08',
      facing: 'South-East',
      land: '5 Katha · 1 Parking/Flat',
      img: 'assets/images/proj-mimosa.jpg',
      heroImg: 'assets/images/hero-mimosa.jpg',
      url: 'https://anwarlandmark.com/project-details/mimosa',
      desc: 'Expansive 2,824 sft residences tailored for Jolshiri’s green avenues, capturing prevailing south-east breezes across deep verandas.'
    },
    {
      id: 'sylvestra',
      title: 'Sylvestra',
      status: 'Ongoing',
      zone: 'Bashundhara',
      address: 'Plot 3473 & 3474, Road 13, Block-M, Bashundhara R/A',
      size: '2,165 sft',
      stories: 'GF + 09',
      facing: 'South-East',
      land: '6 Katha Land',
      img: 'assets/images/proj-sylvestra.jpg',
      heroImg: 'assets/images/hero-sylvestra.jpg',
      url: 'https://anwarlandmark.com/project-details/sylvestra',
      desc: 'Warm brick-and-louver articulation meets lush planted balconies on a premier Block-M twin plot.'
    },
    {
      id: 'wisteria',
      title: 'Wisteria',
      status: 'Ongoing',
      zone: 'Bashundhara',
      address: 'Plot 2754, Road 20, Block-M, Bashundhara R/A',
      size: '2,030 sft',
      stories: 'GF + M + 09',
      facing: 'South-East',
      land: '10 Katha Land',
      img: 'assets/images/proj-wisteria.jpg',
      heroImg: 'assets/images/hero-wisteria.jpg',
      url: 'https://anwarlandmark.com/project-details/wisteria',
      desc: 'Set on a 10-katha footprint in Block-M, Wisteria offers landscaped ground-level courtyards and mezzanine community lounges.'
    },
    {
      id: 'elysium',
      title: 'Elysium',
      status: 'Ongoing',
      zone: 'Jolshiri',
      address: 'Plot 13, Road 502/A, Sector-17, Jolshiri Abashon',
      size: '2,852 sft',
      stories: 'G + 08',
      facing: 'North Facing',
      land: '5 Katha Land',
      img: 'assets/images/proj-elysium.jpg',
      heroImg: 'assets/images/hero-elysium.jpg',
      url: 'https://anwarlandmark.com/project-details/elysium',
      desc: 'Contemporary sculptural massing in Sector-17 Jolshiri with 2,852 sft full-floor residences designed for effortless daylight.'
    },
    {
      id: 'jolshiri-507',
      title: 'Jolshiri Sector-16 Residence',
      status: 'Ongoing',
      zone: 'Jolshiri',
      address: 'Plot 8, Road 507, Sector-16, Jolshiri Abashon',
      size: '2,730 sft',
      stories: 'GF + M + 08',
      facing: 'East-West',
      land: '5 Katha · 1 Parking/Flat',
      img: 'assets/images/proj-jolshiri-507.jpg',
      heroImg: 'assets/images/proj-jolshiri-507.jpg',
      url: 'https://anwarlandmark.com/project-details/plot-8-road-507-sector-16-jolshiri',
      desc: 'Dual east-west aspect residence offering cross-ventilated living rooms and elevated mezzanine arrival.'
    },
    {
      id: 'isha-kha-uttara',
      title: 'Isha Kha Avenue, Sector-06',
      status: 'Ongoing',
      zone: 'Uttara',
      address: 'Plot 01, Road Isha Kha Avenue, Sector-06, Uttara',
      size: 'Signature Suites',
      stories: 'Residential',
      facing: 'Corner Avenue',
      land: 'Uttara Sector 06',
      img: 'assets/images/proj-isha-kha.jpg',
      heroImg: 'assets/images/proj-isha-kha.jpg',
      url: 'https://anwarlandmark.com/project-details/plot-01-road-isha-kha-avenue-sector-06-uttara',
      desc: 'Iconic corner address along Isha Kha Avenue in Uttara Sector-06, blending bold vertical fins with tranquil residential privacy.'
    },
    {
      id: 'amaryllis',
      title: 'Amaryllis',
      status: 'Ongoing',
      zone: 'Bashundhara',
      address: 'Bashundhara Residential Area, Dhaka',
      size: 'Luxury Suites',
      stories: 'Residential',
      facing: 'Modern Elevation',
      land: 'Ongoing Development',
      img: 'assets/images/proj-amaryllis.jpg',
      heroImg: 'assets/images/proj-amaryllis.jpg',
      url: 'https://anwarlandmark.com/project-details/amaryllis',
      desc: 'A refined contemporary residence engineered with Anwar Landmark’s signature facade proportion and landscaped terrace decks.'
    },
    {
      id: 'whispering-green',
      title: 'Anwar Landmark Whispering Green',
      status: 'Ready',
      zone: 'Gulshan & Banani',
      address: 'Plot 161/B, North Avenue, Gulshan 2, Dhaka-1212',
      size: '4,881 – 6,344 sft',
      stories: 'B2 + B1 + GF + 14',
      facing: 'Lake & Avenue',
      land: '11.83 Katha · 19 Residences',
      img: 'assets/images/proj-whispering-green.jpg',
      heroImg: 'assets/images/hero-whispering-green.jpg',
      url: 'https://anwarlandmark.com/project-details/anwar-landmark-whispering-green',
      desc: 'Ultra-bespoke single-unit and duplex residences overlooking Gulshan 2, featuring 4 & 5 bedroom suites and private double-height living.'
    },
    {
      id: 'whistling-woods',
      title: 'Anwar Landmark Whistling Woods',
      status: 'Ready',
      zone: 'Gulshan & Banani',
      address: 'Plot 94, Block-A, Road-23, Banani R/A, Dhaka',
      size: '2,616 sft',
      stories: 'B2 + B1 + GF + 12',
      facing: 'South Facing',
      land: '11.72 Katha',
      img: 'assets/images/proj-whistling-woods.jpg',
      heroImg: 'assets/images/hero-whistling-woods.jpg',
      url: 'https://anwarlandmark.com/project-details/anwar-landmark-whistling-woods',
      desc: 'Sculpted cantilevered greens on a south-facing Banani avenue, delivering serene courtyard warmth in the heart of the city.'
    },
    {
      id: 'lake-serene',
      title: 'Anwar Landmark Lake Serene',
      status: 'Ready',
      zone: 'Gulshan & Banani',
      address: 'Lakefront Residential Enclave, Dhaka',
      size: 'Ready Condominium',
      stories: 'Multi-Storied',
      facing: 'Lake View',
      land: 'Signature Completed',
      img: 'assets/images/proj-lake-serene.jpg',
      heroImg: 'assets/images/hero-lake-serene.jpg',
      url: 'https://anwarlandmark.com/project-details/anwar-landmark-lake-serene',
      desc: 'Celebrated by residents for its tranquil water-edge presence, lush sky terraces, and timeless architectural poise.'
    },
    {
      id: 'gold-dust',
      title: 'Anwar Landmark Gold Dust',
      status: 'Ready',
      zone: 'Uttara',
      address: 'Prime Residential Enclave, Dhaka',
      size: '1,288 – 2,021 sft',
      stories: '48 Residences',
      facing: '3 & 4 Bed Layouts',
      land: '15 Katha Land',
      img: 'assets/images/proj-gold-dust.jpg',
      heroImg: 'assets/images/hero-gold-dust.jpg',
      url: 'https://anwarlandmark.com/project-details/anwar-landmark-gold-dust',
      desc: 'A 15-katha residential community offering thoughtfully zoned 3 & 4 bedroom homes around central green courts.'
    },
    {
      id: 'nemesia',
      title: 'Anwar Landmark Nemesia',
      status: 'Ready',
      zone: 'Bashundhara',
      address: 'Bashundhara Residential Corridor, Dhaka',
      size: '2,091 sft',
      stories: '4 Bed Suites',
      facing: 'South & North',
      land: '10 Katha Land',
      img: 'assets/images/proj-nemesia.jpg',
      heroImg: 'assets/images/hero-nemesia.jpg',
      url: 'https://anwarlandmark.com/project-details/anwar-landmark-nemesia',
      desc: 'Dual south-and-north orientation over 10 katha, tailored for expansive family dining and daylight-filled bedrooms.'
    }
  ];

  const EXCELLENCE_CHAPTERS = [
    {
      counter: '01 — 04',
      tag: 'ENGINEERING',
      title: 'Superior Structural Quality.',
      thumb: 'assets/images/proj-elysium.jpg',
      desc: 'Precision-engineered frames, BNBC seismic compliance, and weather-resilient material palettes crafted for decades of poise.'
    },
    {
      counter: '02 — 04',
      tag: 'BIOPHILIC LIVING',
      title: 'Planted Sky Terraces.',
      thumb: 'assets/images/proj-sylvestra.jpg',
      desc: 'Multi-level green pockets, shaded louver balconies, and south-east breeze corridors bring serene garden calm to urban heights.'
    },
    {
      counter: '03 — 04',
      tag: 'SPATIAL CALM',
      title: 'Daylight & Acoustic Poise.',
      thumb: 'assets/images/proj-wisteria.jpg',
      desc: 'Generous floor-to-ceiling glazing and thoughtful room zoning ensure sunlit living halls and quiet private suites.'
    },
    {
      counter: '04 — 04',
      tag: 'HERITAGE VALUE',
      title: 'Built for Generations.',
      thumb: 'assets/images/proj-lake-serene.jpg',
      desc: 'Every landmark carries Anwar Group’s multi-generational commitment to timely handover, transparent craft, and lasting appreciation.'
    }
  ];

  const ENCLAVE_DATA = {
    bashundhara: {
      tag: 'BASHUNDHARA R/A · BLOCKS F & M',
      title: 'Tree-Lined Blocks & Corner Plots',
      desc: 'Home to Allium, Sylvestra, Wisteria, and Nemesia — 2,030 to 2,198 sft residences moments from leading universities, hospitals, and shopping hubs.',
      img: 'assets/images/hero-sylvestra.jpg'
    },
    jolshiri: {
      tag: 'JOLSHIRI ABASHON · SECTORS 16 & 17',
      title: 'Low-Density Waterfront Living',
      desc: 'Mimosa, Elysium, and Road-507 bring 2,730 to 2,852 sft full-floor residences to Dhaka’s greenest planned lakeside township.',
      img: 'assets/images/hero-elysium.jpg'
    },
    uttara: {
      tag: 'UTTARA · SECTORS 04, 06 & 07',
      title: 'Avenue Landmarks in North Dhaka',
      desc: 'Featuring Plot-01 Isha Kha Avenue (Sector 06) and prime upcoming addresses in Sectors 04 & 07 near metro transit and parks.',
      img: 'assets/images/proj-isha-kha.jpg'
    },
    gulshan: {
      tag: 'GULSHAN 2 & BANANI · FLAGSHIP ZONE',
      title: 'Iconic Ultra-Luxury Sanctuaries',
      desc: 'Whispering Green (up to 6,344 sft duplexes) and Whistling Woods stand as benchmarks of diplomatic-zone architectural prestige.',
      img: 'assets/images/hero-whispering-green.jpg'
    },
    mohammadpur: {
      tag: 'MOHAMMADPUR · BABAR ROAD',
      title: 'Heritage Charm, Modern Craft',
      desc: 'Anwar Landmark Rosetta brings 2,077 sft east-facing 3-bedroom homes to one of central Dhaka’s most connected neighborhoods.',
      img: 'assets/images/hero-rosetta.jpg'
    }
  };

  /* ========================================================================
     1. 0% -> 100% PHOTOREALISTIC BUILDING SEQUENCE ENGINE (169 Real Frames)
     ======================================================================== */
  const canvas = document.getElementById('buildingCanvas');
  const ctx = canvas?.getContext('2d');
  const buildPercentEl = document.getElementById('buildPercent');
  const buildBarFill = document.getElementById('buildBarFill');
  const buildPhaseLabel = document.getElementById('buildPhaseLabel');
  const buildFloorLabel = document.getElementById('buildFloorLabel');
  const heroReadyTag = document.getElementById('heroReadyTag');

  const TOTAL_FRAMES = 169;
  const frameCache = new Map();
  let lastLoadedIdx = 0;
  let buildProgress = prefersReducedMotion ? 1 : 0;
  let lastRenderedFrame = -1;

  function clamp01(v) {
    return Math.max(0, Math.min(1, v));
  }

  function rangeProgress(p, start, end) {
    return clamp01((p - start) / (end - start));
  }

  function loadFrame(idx) {
    if (frameCache.has(idx)) return Promise.resolve(frameCache.get(idx));
    return new Promise((resolve) => {
      const img = new Image();
      const num = String(idx).padStart(4, '0');
      img.onload = () => {
        frameCache.set(idx, img);
        if (idx > lastLoadedIdx) lastLoadedIdx = idx;
        if (Math.round(buildProgress * (TOTAL_FRAMES - 1)) === idx) {
          drawBuilding(buildProgress, true);
        }
        resolve(img);
      };
      img.onerror = () => resolve(null);
      img.src = `assets/hero-sequence/frame_${num}.jpg`;
    });
  }

  function preloadSequence() {
    // Load key milestone frames first for immediate response at any scroll spot
    const priority = [0, 1, 2, 168, 84, 42, 126];
    Promise.all(priority.map(loadFrame)).then(() => {
      drawBuilding(buildProgress, true);
      // Stream remaining frames smoothly in small parallel batches
      let cursor = 0;
      const batchLoad = async () => {
        const batch = [];
        while (batch.length < 8 && cursor < TOTAL_FRAMES) {
          if (!frameCache.has(cursor)) batch.push(loadFrame(cursor));
          cursor++;
        }
        if (batch.length > 0) await Promise.all(batch);
        if (cursor < TOTAL_FRAMES) requestAnimationFrame(batchLoad);
      };
      batchLoad();
    });
  }

  function resizeBuildingCanvas() {
    if (!canvas || !ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(window.innerWidth * dpr);
    canvas.height = Math.floor(window.innerHeight * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    drawBuilding(buildProgress, true);
  }

  function getNearestLoadedFrame(targetIdx) {
    if (frameCache.has(targetIdx)) return frameCache.get(targetIdx);
    for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
      if (targetIdx - offset >= 0 && frameCache.has(targetIdx - offset)) return frameCache.get(targetIdx - offset);
      if (targetIdx + offset < TOTAL_FRAMES && frameCache.has(targetIdx + offset)) return frameCache.get(targetIdx + offset);
    }
    return null;
  }

  function drawBuilding(p, force = false) {
    if (!canvas || !ctx) return;
    const clampedP = clamp01(p);
    const frameIdx = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(clampedP * (TOTAL_FRAMES - 1))));

    const img = getNearestLoadedFrame(frameIdx);
    if (img && (force || frameIdx !== lastRenderedFrame)) {
      lastRenderedFrame = frameIdx;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const cw = canvas.width / dpr;
      const ch = canvas.height / dpr;
      const imgAspect = img.naturalWidth / img.naturalHeight;
      const canvasAspect = cw / ch;

      let drawW;
      let drawH;
      if (canvasAspect > imgAspect) {
        drawW = cw;
        drawH = cw / imgAspect;
      } else {
        drawH = ch;
        drawW = ch * imgAspect;
      }
      const dx = (cw - drawW) * 0.5;
      const dy = (ch - drawH) * 0.5;

      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, dx, dy, drawW, drawH);
    }

    // Update Telemetry HUD (00% -> 100%)
    const pct = Math.round(clampedP * 100);
    if (buildPercentEl) buildPercentEl.textContent = `${String(pct).padStart(2, '0')}%`;
    if (buildBarFill) buildBarFill.style.width = `${pct}%`;
    if (buildFloorLabel) buildFloorLabel.textContent = `FRAME ${String(frameIdx + 1).padStart(3, '0')} / ${TOTAL_FRAMES}`;

    let phaseText = 'PHASE 01 · FOUNDATION';
    let readyText = `FOUNDATION · ${String(pct).padStart(2, '0')}%`;
    if (clampedP >= 0.85) {
      phaseText = 'PHASE 04 · LANDMARK COMPLETE';
      readyText = pct >= 99 ? '100% COMPLETE · READY TO INHABIT' : `FINAL POLISH · ${pct}%`;
    } else if (clampedP >= 0.52) {
      phaseText = 'PHASE 03 · FACADE & GREENS';
      readyText = `ENVELOPE ASSEMBLY · ${pct}%`;
    } else if (clampedP >= 0.2) {
      phaseText = 'PHASE 02 · STRUCTURAL CORE';
      readyText = `RISING STRUCTURE · ${pct}%`;
    }

    if (buildPhaseLabel) buildPhaseLabel.textContent = phaseText;
    if (heroReadyTag) heroReadyTag.textContent = readyText;

    const autoBtnLabel = document.querySelector('#autoBuildBtn span');
    if (autoBtnLabel) {
      autoBtnLabel.textContent = clampedP >= 0.96 ? 'Replay 0 → 100%' : 'Auto-Build 0 → 100%';
    }
  }

  /* ========================================================================
     2. PRELOADER CURTAIN + WORD-BY-WORD BLUR-TO-SHARP HERO ENTRANCE
     ======================================================================== */
  const preloader = document.getElementById('preloader');
  const preloaderCount = document.getElementById('preloaderCount');
  const preloaderFill = document.getElementById('preloaderFill');

  function runPreloader() {
    if (!preloader || prefersReducedMotion) {
      loadFrame(prefersReducedMotion ? 168 : 0).then(() => drawBuilding(buildProgress, true));
      document.body.classList.remove('is-loading');
      preloader?.classList.add('is-done');
      animateHeroEntrance();
      return;
    }

    let progress = 0;
    const step = () => {
      progress = Math.min(100, progress + Math.floor(Math.random() * 14) + 10);
      if (preloaderCount) preloaderCount.textContent = `${String(progress).padStart(2, '0')}%`;
      if (preloaderFill) preloaderFill.style.width = `${progress}%`;

      if (progress < 100) {
        setTimeout(step, 50);
      } else {
        Promise.all([loadFrame(0), new Promise((res) => setTimeout(res, 200))]).then(() => {
          drawBuilding(buildProgress, true);
          preloader.classList.add('is-done');
          document.body.classList.remove('is-loading');
          animateHeroEntrance();
        });
      }
    };
    step();
  }

  function animateHeroEntrance() {
    if (typeof gsap === 'undefined' || prefersReducedMotion) return;
    gsap.fromTo('[data-hero-word]',
      { yPercent: 120, opacity: 0, filter: 'blur(6px)' },
      { yPercent: 0, opacity: 1, filter: 'blur(0px)', duration: 1.05, stagger: 0.13, ease: 'power4.out' }
    );
    gsap.from('.hero-eyebrow, .hero-lead, .hero-cta-group, .build-hud', {
      y: 22,
      opacity: 0,
      duration: 0.85,
      stagger: 0.08,
      delay: 0.2,
      ease: 'power3.out'
    });
  }

  /* ========================================================================
     3. RENDER CORRIDOR & PORTFOLIO CARDS + MODAL INSPECTOR
     ======================================================================== */
  const corridorTrack = document.getElementById('corridorTrack');
  const projectsGrid = document.getElementById('projectsGrid');
  const dialog = document.getElementById('projectDialog');

  function renderCorridor() {
    if (!corridorTrack) return;
    const featured = PROJECTS.slice(0, 7);
    corridorTrack.innerHTML = featured.map((p, idx) => `
      <article class="corridor-card" data-project-id="${p.id}" data-float-dir="${idx % 2 === 0 ? 1 : -1}">
        <div class="corridor-card__media">
          <img src="${p.img}" alt="${p.title}" loading="lazy" />
          <span class="corridor-card__status ${p.status === 'Ready' ? 'corridor-card__status--ready' : ''}">${p.status}</span>
        </div>
        <div class="corridor-card__body">
          <span class="corridor-card__zone">${p.zone}</span>
          <h3 class="corridor-card__title">${p.title}</h3>
          <p class="corridor-card__meta">${p.size} · ${p.stories}</p>
        </div>
      </article>
    `).join('');

    corridorTrack.querySelectorAll('.corridor-card').forEach((card) => {
      card.addEventListener('click', () => openProjectModal(card.dataset.projectId));
    });
  }

  let activeStatus = 'all';
  let activeZone = 'all';
  let portfolioTriggers = [];
  let portfolioObserver = null;

  function clearPortfolioScrollAnimations() {
    portfolioTriggers.forEach((st) => st.kill());
    portfolioTriggers = [];
    if (portfolioObserver) {
      portfolioObserver.disconnect();
      portfolioObserver = null;
    }
  }

  function revealCardRow(cards) {
    cards.forEach((card, i) => {
      setTimeout(() => {
        card.classList.remove('is-scroll-hidden');
        card.classList.add('is-revealed');
      }, i * 85);
    });
  }

  function bindPortfolioCardReveals(immediate = false) {
    clearPortfolioScrollAnimations();
    const cards = [...document.querySelectorAll('#projectsGrid .project-card')];
    if (!cards.length) return;

    if (prefersReducedMotion || immediate) {
      if (!prefersReducedMotion) {
        cards.forEach((c) => c.classList.add('is-scroll-hidden'));
        requestAnimationFrame(() => requestAnimationFrame(() => revealCardRow(cards)));
      }
      if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
      return;
    }

    cards.forEach((c) => c.classList.add('is-scroll-hidden'));

    if (typeof ScrollTrigger !== 'undefined') {
      const batchTriggers = ScrollTrigger.batch(cards, {
        start: 'top 88%',
        once: true,
        onEnter: (batch) => revealCardRow(batch)
      });
      if (Array.isArray(batchTriggers)) portfolioTriggers.push(...batchTriggers);
      ScrollTrigger.refresh();
    } else if ('IntersectionObserver' in window) {
      portfolioObserver = new IntersectionObserver((entries) => {
        const entering = entries.filter((e) => e.isIntersecting).map((e) => e.target);
        if (entering.length) {
          revealCardRow(entering);
          entering.forEach((el) => portfolioObserver?.unobserve(el));
        }
      }, { threshold: 0.12 });
      cards.forEach((c) => portfolioObserver.observe(c));
    } else {
      revealCardRow(cards);
    }
  }

  function renderPortfolio(fromFilter = false) {
    if (!projectsGrid) return;
    const filtered = PROJECTS.filter((p) => {
      const okStatus = activeStatus === 'all' || p.status === activeStatus;
      const okZone = activeZone === 'all' || p.zone === activeZone;
      return okStatus && okZone;
    });

    projectsGrid.innerHTML = filtered.map((p) => `
      <article class="project-card" data-project-id="${p.id}" tabindex="0" role="button" aria-label="Inspect ${p.title}">
        <div class="project-card__media">
          <img src="${p.img}" alt="${p.title}" loading="lazy" />
          <span class="project-card__badge ${p.status === 'Ready' ? 'project-card__badge--ready' : ''}">${p.status}</span>
          <div class="project-card__overlay">
            <span class="project-card__size">${p.size}</span>
            <span class="project-card__inspect" aria-hidden="true">↗</span>
          </div>
        </div>
        <div class="project-card__body">
          <span class="project-card__zone">${p.zone}</span>
          <h3 class="project-card__title">${p.title}</h3>
          <p class="project-card__address">${p.address}</p>
        </div>
      </article>
    `).join('');

    projectsGrid.querySelectorAll('.project-card').forEach((card) => {
      const open = () => openProjectModal(card.dataset.projectId);
      card.addEventListener('click', open);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          open();
        }
      });

      if (!prefersReducedMotion) {
        card.addEventListener('pointermove', (e) => {
          const rect = card.getBoundingClientRect();
          const rx = ((e.clientY - rect.top) / rect.height - 0.5) * -6;
          const ry = ((e.clientX - rect.left) / rect.width - 0.5) * 6;
          card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
        });
        card.addEventListener('pointerleave', () => {
          card.style.transform = '';
        });
      }
    });

    bindPortfolioCardReveals(fromFilter);
  }

  function setupFilters() {
    document.getElementById('statusFilters')?.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-status]');
      if (!btn) return;
      activeStatus = btn.dataset.status;
      document.querySelectorAll('#statusFilters .filter-chip').forEach((b) => b.classList.toggle('is-active', b === btn));
      renderPortfolio(true);
    });

    document.getElementById('zoneFilters')?.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-zone]');
      if (!btn) return;
      activeZone = btn.dataset.zone;
      document.querySelectorAll('#zoneFilters .zone-chip').forEach((b) => b.classList.toggle('is-active', b === btn));
      renderPortfolio(true);
    });
  }

  function openProjectModal(id) {
    const p = PROJECTS.find((item) => item.id === id);
    if (!p || !dialog) return;

    document.getElementById('dialogImg').src = p.heroImg || p.img;
    document.getElementById('dialogImg').alt = p.title;
    document.getElementById('dialogStatus').textContent = p.status;
    document.getElementById('dialogZone').textContent = p.zone.toUpperCase();
    document.getElementById('dialogTitle').textContent = p.title;
    document.getElementById('dialogAddress').textContent = p.address;
    document.getElementById('dialogDesc').textContent = p.desc;
    document.getElementById('dialogExternalLink').href = p.url;

    document.getElementById('dialogSpecs').innerHTML = `
      <div><span>Apartment Size</span><strong>${p.size}</strong></div>
      <div><span>Elevation</span><strong>${p.stories}</strong></div>
      <div><span>Orientation</span><strong>${p.facing}</strong></div>
      <div><span>Land &amp; Key Info</span><strong>${p.land}</strong></div>
    `;

    const bookBtn = document.getElementById('dialogBookBtn');
    bookBtn.onclick = () => {
      const input = document.getElementById('inqProject');
      if (input) input.value = p.title;
      dialog.close();
    };

    dialog.showModal();
  }

  document.getElementById('dialogClose')?.addEventListener('click', () => dialog?.close());
  dialog?.addEventListener('click', (e) => {
    if (e.target === dialog) dialog.close();
  });

  /* ========================================================================
     4. NAVANA-INSPIRED "ALL EYES ON DESIGN" CHAPTER UPDATER
     ======================================================================== */
  let currentExIndex = -1;
  let isExcellenceInView = false;
  const exSection = document.getElementById('excellence');
  const exBgs = [...document.querySelectorAll('.ex-bg')];
  const exDots = [...document.querySelectorAll('.ex-dot')];
  const exCounter = document.getElementById('exCounter');
  const exTag = document.getElementById('exTag');
  const exTitle = document.getElementById('exTitle');
  const exThumb = document.getElementById('exThumb');
  const exDesc = document.getElementById('exDesc');
  const exProgressFill = document.getElementById('exProgressFill');

  function syncExcellenceVideos(activeIdx, restartActive = false) {
    exBgs.forEach((bg, i) => {
      if (bg.tagName !== 'VIDEO') return;
      if (i === activeIdx && isExcellenceInView && !prefersReducedMotion) {
        if (bg.preload !== 'auto') bg.preload = 'auto';
        if (restartActive) {
          try {
            bg.currentTime = 0;
          } catch (_) {
            /* ignore seek errors before metadata */
          }
        }
        const playPromise = bg.play();
        if (playPromise && typeof playPromise.catch === 'function') {
          playPromise.catch(() => {});
        }
        // Gently warm up adjacent chapter videos for instant crossfade on scroll
        [exBgs[i + 1], exBgs[i - 1]].forEach((adj) => {
          if (adj && adj.tagName === 'VIDEO' && adj.preload !== 'auto') {
            adj.preload = 'auto';
          }
        });
      } else {
        const delay = i !== activeIdx ? 850 : 0;
        setTimeout(() => {
          if ((i !== currentExIndex || !isExcellenceInView || prefersReducedMotion) && !bg.paused) {
            bg.pause();
          }
        }, delay);
      }
    });
  }

  if (exSection && 'IntersectionObserver' in window) {
    const exObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isExcellenceInView = entry.isIntersecting;
          syncExcellenceVideos(currentExIndex, false);
        });
      },
      { threshold: 0.08 }
    );
    exObserver.observe(exSection);
  } else {
    isExcellenceInView = true;
  }

  function setExcellenceChapter(idx) {
    if (idx === currentExIndex || !EXCELLENCE_CHAPTERS[idx]) return;
    const hadPrevious = currentExIndex !== -1;
    currentExIndex = idx;
    const data = EXCELLENCE_CHAPTERS[idx];

    exBgs.forEach((bg, i) => bg.classList.toggle('is-active', i === idx));
    exDots.forEach((dot, i) => dot.classList.toggle('is-active', i === idx));
    syncExcellenceVideos(idx, hadPrevious);

    if (exCounter) exCounter.textContent = data.counter;
    if (exTag) exTag.textContent = data.tag;
    if (exTitle) exTitle.textContent = data.title;
    if (exThumb) {
      exThumb.src = data.thumb;
      exThumb.alt = data.title;
    }
    if (exDesc) exDesc.textContent = data.desc;
    if (exProgressFill) exProgressFill.style.width = `${((idx + 1) / EXCELLENCE_CHAPTERS.length) * 100}%`;
  }

  /* ========================================================================
     5. VELOCITY GALLERY LOOP
     ======================================================================== */
  let scrollVelocity = 0;

  function startVelocityGallery() {
    if (prefersReducedMotion) return;
    const velocityTracks = [...document.querySelectorAll('.velocity-track')];
    const trackOffsets = [0, -400];
    let lastTime = performance.now();

    function tick(now) {
      const dt = Math.min(48, now - lastTime) / 1000;
      lastTime = now;
      scrollVelocity *= 0.92;
      const boost = Math.max(-4, Math.min(4, scrollVelocity * 0.08));

      velocityTracks.forEach((track, i) => {
        const dir = i === 0 ? -1 : 1;
        const speed = 38 * dir + boost * 55 * dir;
        trackOffsets[i] += speed * dt;
        const half = track.scrollWidth / 2 || 1200;
        if (trackOffsets[i] <= -half) trackOffsets[i] += half;
        if (trackOffsets[i] >= 0) trackOffsets[i] -= half;
        track.style.transform = `translate3d(${trackOffsets[i]}px, 0, 0)`;
      });

      requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }

  /* ========================================================================
     6. ENCLAVE PREVIEWER + INQUIRY FORM + MOBILE MENU
     ======================================================================== */
  function setupEnclaves() {
    const items = [...document.querySelectorAll('#enclaveList .enclave-item')];
    const img = document.getElementById('enclavePreviewImg');
    const tag = document.getElementById('enclavePreviewTag');
    const title = document.getElementById('enclavePreviewTitle');
    const desc = document.getElementById('enclavePreviewDesc');

    function selectEnclave(key, el) {
      const data = ENCLAVE_DATA[key];
      if (!data) return;
      items.forEach((item) => item.classList.toggle('is-active', item === el));
      if (img) {
        img.style.opacity = '0.35';
        setTimeout(() => {
          img.src = data.img;
          img.alt = data.title;
          img.style.opacity = '1';
        }, 160);
      }
      if (tag) tag.textContent = data.tag;
      if (title) title.textContent = data.title;
      if (desc) desc.textContent = data.desc;
    }

    items.forEach((item) => {
      item.addEventListener('mouseenter', () => selectEnclave(item.dataset.enclave, item));
      item.querySelector('button')?.addEventListener('click', () => selectEnclave(item.dataset.enclave, item));
    });
  }

  function setupInquiryAndNav() {
    const form = document.getElementById('inquiryForm');
    const feedback = document.getElementById('formFeedback');
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('inqName').value.trim();
      const zone = document.getElementById('inqZone').value;
      const proj = document.getElementById('inqProject').value.trim();
      feedback.textContent = `Thank you, ${name}. An Anwar Landmark advisor will contact you shortly regarding ${proj || zone} (Hotline: 16709).`;
      form.reset();
    });

    const toggle = document.getElementById('menuToggle');
    const drawer = document.getElementById('mobileDrawer');
    toggle?.addEventListener('click', () => {
      const open = drawer.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      drawer.setAttribute('aria-hidden', String(!open));
    });
    drawer?.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        drawer.classList.remove('is-open');
        toggle?.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ========================================================================
     7. LENIS SMOOTH SCROLL + GSAP SCROLLTRIGGER CHOREOGRAPHY
     ======================================================================== */
  function setupScrollChoreography() {
    const progressBar = document.getElementById('scrollProgressBar');
    const header = document.getElementById('siteHeader');
    let lenis = null;
    let lastScrollY = 0;

    if (typeof Lenis !== 'undefined' && !prefersReducedMotion) {
      lenis = new Lenis({
        duration: 1.25,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 1.6
      });

      lenis.on('scroll', ({ scroll, limit, velocity }) => {
        scrollVelocity = velocity;
        if (progressBar && limit > 0) {
          progressBar.style.width = `${(scroll / limit) * 100}%`;
        }
        if (scroll > 140 && scroll > lastScrollY + 4) {
          header?.classList.add('is-hidden');
        } else if (scroll < lastScrollY - 4 || scroll < 120) {
          header?.classList.remove('is-hidden');
        }
        lastScrollY = scroll;
      });
    } else {
      window.addEventListener('scroll', () => {
        const doc = document.documentElement;
        const max = doc.scrollHeight - window.innerHeight;
        if (progressBar && max > 0) progressBar.style.width = `${(window.scrollY / max) * 100}%`;
      }, { passive: true });
    }

    // Smooth anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const id = anchor.getAttribute('href');
        if (!id || id === '#') return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        if (lenis) lenis.scrollTo(target, { offset: 0 });
        else target.scrollIntoView({ behavior: 'smooth' });
      });
    });

    // Auto-Build 0 -> 100% button in Hero (replays from 0% if already near 100%)
    const autoBuildBtn = document.getElementById('autoBuildBtn');
    autoBuildBtn?.addEventListener('click', () => {
      const hero = document.getElementById('hero');
      if (!hero) return;
      const targetY = hero.offsetHeight - window.innerHeight;
      const runBuildScroll = () => {
        if (lenis) {
          lenis.scrollTo(targetY, { duration: 4.0, easing: (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2) });
        } else {
          window.scrollTo({ top: targetY, behavior: 'smooth' });
        }
      };
      if (window.scrollY > targetY * 0.75) {
        if (lenis) lenis.scrollTo(0, { immediate: true });
        else window.scrollTo(0, 0);
        setTimeout(runBuildScroll, 50);
      } else {
        runBuildScroll();
      }
    });

    // Clickable Excellence Dots
    exDots.forEach((dot) => {
      dot.addEventListener('click', () => {
        const idx = Number(dot.dataset.exBtn);
        setExcellenceChapter(idx);
        const sec = document.getElementById('excellence');
        if (!sec) return;
        const maxScroll = sec.offsetHeight - window.innerHeight;
        const targetY = sec.offsetTop + (idx / (EXCELLENCE_CHAPTERS.length - 1)) * maxScroll;
        if (lenis) lenis.scrollTo(targetY);
        else window.scrollTo({ top: targetY, behavior: 'smooth' });
      });
    });

    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      // Offline / No-CDN native scroll fallback for 0%->100% building sequence & Excellence chapters
      const onFallbackScroll = () => {
        const hero = document.getElementById('hero');
        if (hero) {
          const maxHero = Math.max(1, hero.offsetHeight - window.innerHeight);
          buildProgress = clamp01(window.scrollY / maxHero);
          drawBuilding(buildProgress);
        }
        const exSec = document.getElementById('excellence');
        if (exSec) {
          const rel = clamp01((window.scrollY - exSec.offsetTop) / Math.max(1, exSec.offsetHeight - window.innerHeight));
          setExcellenceChapter(Math.min(EXCELLENCE_CHAPTERS.length - 1, Math.floor(rel * EXCELLENCE_CHAPTERS.length)));
        }
      };
      window.addEventListener('scroll', onFallbackScroll, { passive: true });
      onFallbackScroll();
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    if (lenis) {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    }

    if (prefersReducedMotion) {
      drawBuilding(1);
      return;
    }

    // A) 0% -> 100% Building Construction Scrubbed by Scroll
    ScrollTrigger.create({
      trigger: '#hero',
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: (self) => {
        buildProgress = self.progress;
        drawBuilding(buildProgress);
      }
    });

    // B) Manifesto Clip-Path Curtain Expand + Line Masks + Counter Metrics
    gsap.to('[data-clip-reveal]', {
      clipPath: 'inset(0% 0% 0% 0% round 24px)',
      ease: 'none',
      scrollTrigger: {
        trigger: '#manifesto',
        start: 'top 80%',
        end: 'top 25%',
        scrub: true
      }
    });

    gsap.from('#manifesto .line-inner', {
      yPercent: 110,
      opacity: 0,
      duration: 0.95,
      stagger: 0.12,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: '#manifesto',
        start: 'top 72%',
        once: true
      }
    });

    document.querySelectorAll('.metric-value[data-count]').forEach((el) => {
      const target = Number(el.dataset.count);
      const prefix = el.dataset.prefix || '';
      const suffix = el.dataset.suffix || '';
      const obj = { val: prefix ? target - 60 : 0 };
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.to(obj, {
            val: target,
            duration: 1.4,
            ease: 'power2.out',
            onUpdate: () => {
              el.textContent = `${prefix}${Math.round(obj.val)}${suffix}`;
            }
          });
        }
      });
    });

    // C) Navana-Inspired Scroll-Drawn SVG Elevation + Horizontal Staggered Type
    const bpPaths = [...document.querySelectorAll('#blueprintSvg .bp-path')];
    bpPaths.forEach((path) => {
      const len = path.getTotalLength();
      path.style.strokeDasharray = `${len}`;
      path.style.strokeDashoffset = `${len}`;
    });

    const bpPhoto = document.getElementById('blueprintPhoto');
    ScrollTrigger.create({
      trigger: '#commitment',
      start: 'top 75%',
      end: 'bottom 45%',
      scrub: true,
      onUpdate: (self) => {
        const p = self.progress;
        bpPaths.forEach((path, idx) => {
          const len = path.getTotalLength();
          const staggerStart = (idx / bpPaths.length) * 0.45;
          const local = clamp01((p - staggerStart) / 0.55);
          path.style.strokeDashoffset = `${len * (1 - local)}`;
        });
        if (bpPhoto) {
          bpPhoto.style.opacity = String(0.12 + rangeProgress(p, 0.55, 1.0) * 0.65);
        }
      }
    });

    gsap.fromTo('.commit-line--left',
      { x: -48 },
      {
        x: 0,
        ease: 'none',
        scrollTrigger: { trigger: '#commitment', start: 'top 85%', end: 'top 25%', scrub: true }
      }
    );
    gsap.fromTo('.commit-line--right, .commit-line--emerald',
      { x: 48 },
      {
        x: 0,
        ease: 'none',
        scrollTrigger: { trigger: '#commitment', start: 'top 85%', end: 'top 25%', scrub: true }
      }
    );

    // D) Navana-Inspired Sticky "All Eyes on Designs" Chapter Switcher
    ScrollTrigger.create({
      trigger: '#excellence',
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onEnter: () => {
        isExcellenceInView = true;
        syncExcellenceVideos(currentExIndex, false);
      },
      onEnterBack: () => {
        isExcellenceInView = true;
        syncExcellenceVideos(currentExIndex, false);
      },
      onLeave: () => {
        isExcellenceInView = false;
        syncExcellenceVideos(currentExIndex, false);
      },
      onLeaveBack: () => {
        isExcellenceInView = false;
        syncExcellenceVideos(currentExIndex, false);
      },
      onUpdate: (self) => {
        const idx = Math.min(
          EXCELLENCE_CHAPTERS.length - 1,
          Math.floor(self.progress * EXCELLENCE_CHAPTERS.length)
        );
        setExcellenceChapter(idx);
      }
    });

    // E) Navana-Inspired Crosshair Divider Line Animation
    gsap.to('.crosshair-line--h', {
      scaleX: 1,
      duration: 1.1,
      ease: 'power3.out',
      scrollTrigger: { trigger: '#crosshairGrid', start: 'top 75%', once: true }
    });
    gsap.to('.crosshair-line--v', {
      scaleY: 1,
      duration: 1.1,
      delay: 0.15,
      ease: 'power3.out',
      scrollTrigger: { trigger: '#crosshairGrid', start: 'top 75%', once: true }
    });

    // F) Generic Parallax Elements
    document.querySelectorAll('[data-parallax]').forEach((el) => {
      const amt = Number(el.dataset.parallax || 12);
      gsap.to(el, {
        yPercent: amt,
        ease: 'none',
        scrollTrigger: {
          trigger: el.closest('section, article') || el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    });

    // G) Sticky Curtain Stack Depth Scaling + Active Pip Sync
    const stackSlides = [...document.querySelectorAll('.stack-slide')];
    const stackNav = document.querySelector('.curtain-stack__nav');
    const stackPips = [...document.querySelectorAll('.stack-pip')];

    if (stackNav) {
      ScrollTrigger.create({
        trigger: '#pillars',
        start: 'top 35%',
        end: 'bottom 65%',
        onToggle: (self) => stackNav.classList.toggle('is-visible', self.isActive)
      });
    }

    stackSlides.forEach((slide, idx) => {
      ScrollTrigger.create({
        trigger: slide,
        start: 'top 50%',
        end: 'bottom 50%',
        onEnter: () => setActivePip(idx),
        onEnterBack: () => setActivePip(idx)
      });

      if (idx < stackSlides.length - 1) {
        const nextSlide = stackSlides[idx + 1];
        gsap.to(slide, {
          scale: 0.93,
          filter: 'brightness(0.68)',
          ease: 'none',
          scrollTrigger: {
            trigger: nextSlide,
            start: 'top bottom',
            end: 'top top',
            scrub: true
          }
        });
      }
    });

    function setActivePip(idx) {
      stackPips.forEach((pip, i) => pip.classList.toggle('is-active', i === idx));
    }

    stackPips.forEach((pip) => {
      pip.addEventListener('click', () => {
        const target = stackSlides[Number(pip.dataset.stackTarget)];
        if (!target) return;
        if (lenis) lenis.scrollTo(target);
        else target.scrollIntoView({ behavior: 'smooth' });
      });
    });

    // H) Pinned Horizontal Floating Slide Corridor (Desktop)
    const mm = gsap.matchMedia();
    mm.add('(min-width: 901px)', () => {
      const track = document.getElementById('corridorTrack');
      const counter = document.getElementById('corridorCounter');
      if (!track) return;

      const cards = [...track.querySelectorAll('.corridor-card')];
      const getScrollDist = () => Math.max(0, track.scrollWidth - window.innerWidth + 120);

      gsap.to(track, {
        x: () => -getScrollDist(),
        ease: 'none',
        scrollTrigger: {
          trigger: '#corridor',
          pin: '.horizontal-corridor__sticky',
          start: 'top top',
          end: () => `+=${getScrollDist()}`,
          scrub: 0.9,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const p = self.progress;
            const current = Math.min(cards.length, Math.max(1, Math.floor(p * cards.length) + 1));
            if (counter) counter.textContent = `${String(current).padStart(2, '0')} — ${String(cards.length).padStart(2, '0')}`;

            cards.forEach((card, i) => {
              const dir = Number(card.dataset.floatDir || 1);
              const wave = Math.sin(p * Math.PI * 2.5 + i * 0.85) * 18 * dir;
              card.style.transform = `translate3d(0, ${wave}px, 0)`;
            });
          }
        }
      });
    });

    // I) Portfolio Header, Filter Bar & Filter Chip Staggered Scroll Entrance
    gsap.from('.portfolio-header .section-index, .portfolio-header .display-heading, .portfolio-subtitle', {
      y: 36,
      opacity: 0,
      duration: 0.85,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '#portfolio',
        start: 'top 82%',
        once: true
      }
    });

    gsap.from('.filter-bar', {
      y: 28,
      scale: 0.97,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.filter-bar',
        start: 'top 86%',
        once: true
      }
    });

    gsap.from('.filter-chip, .zone-chip', {
      y: 14,
      opacity: 0,
      duration: 0.5,
      stagger: 0.035,
      ease: 'power2.out',
      clearProps: 'opacity,transform',
      scrollTrigger: {
        trigger: '.filter-bar',
        start: 'top 86%',
        once: true
      }
    });

    // Re-bind row-by-row portfolio reveals now that ScrollTrigger is registered
    bindPortfolioCardReveals(false);

    // J) Light/Dark Header Theme Switching
    document.querySelectorAll('[data-theme]').forEach((sec) => {
      ScrollTrigger.create({
        trigger: sec,
        start: 'top 60px',
        end: 'bottom 60px',
        onEnter: () => header?.classList.toggle('is-light-surface', sec.dataset.theme === 'light'),
        onEnterBack: () => header?.classList.toggle('is-light-surface', sec.dataset.theme === 'light')
      });
    });
  }

  /* ========================================================================
     INIT
     ======================================================================== */
  window.addEventListener('resize', resizeBuildingCanvas);
  resizeBuildingCanvas();
  preloadSequence();
  setExcellenceChapter(0);
  renderCorridor();
  renderPortfolio();
  setupFilters();
  setupEnclaves();
  setupInquiryAndNav();
  setupScrollChoreography();
  startVelocityGallery();
  runPreloader();
})();

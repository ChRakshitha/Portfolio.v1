(function () {
  'use strict';

  const D = window.PORTFOLIO_DATA;

  /* ────────────────────────────────────────────────────────
     RENDER HELPERS
  ──────────────────────────────────────────────────────── */

  function el(id) { return document.getElementById(id); }

  function setText(id, value) {
    const node = el(id);
    if (node) node.textContent = value;
  }

  function setHTML(id, value) {
    const node = el(id);
    if (node) node.innerHTML = value;
  }

  /* ────────────────────────────────────────────────────────
     HOME
  ──────────────────────────────────────────────────────── */

  function renderHome() {
    setText('hero-name', D.meta.name + ',');
    setText('hero-role', D.meta.tagline);
  }

  /* ────────────────────────────────────────────────────────
     ABOUT
  ──────────────────────────────────────────────────────── */

  function renderAbout() {
    setText('about-lead', D.about.lead);

    setHTML('about-bio', D.about.paragraphs.map(p => `<p>${p}</p>`).join(''));

    setHTML('experience-list', D.experience.map(exp => `
      <div class="credential-item">
        <div class="credential-role">${exp.role}</div>
        <div class="credential-sub">${exp.company}</div>
        <div class="credential-period">${exp.period}</div>
        <ul class="credential-bullets">
          ${exp.bullets.map(b => `<li>${b}</li>`).join('')}
        </ul>
      </div>
    `).join(''));

    setHTML('education-list', D.education.map(edu => `
      <div class="credential-item">
        <div class="credential-role">${edu.degree}</div>
        <div class="credential-sub">${edu.institution}</div>
        <div class="credential-period">${edu.period}</div>
        <ul class="credential-bullets">
          ${edu.detail.split('·').map(d => `<li>${d.trim()}</li>`).join('')}
        </ul>
      </div>
    `).join(''));

    setHTML('skills-grid',
      Object.entries(D.skills).map(([category, items]) => `
        <div class="skill-group">
          <div class="skill-group-label">${category}</div>
          <div class="skill-group-tags">
            ${items.map(s => `<span class="skill-tag">${s}</span>`).join('')}
          </div>
        </div>
      `).join('')
    );

    setHTML('leadership-list',
      D.leadership.map(l => `<li>${l}</li>`).join('')
    );
  }

  /* ────────────────────────────────────────────────────────
     PROJECTS
  ──────────────────────────────────────────────────────── */

  function renderProjects(filter) {
    filter = filter || 'all';
    const html = D.projects.map(p => {
      const hidden  = (filter !== 'all' && p.role !== filter) ? ' hidden' : '';
      const noteRow = p.note ? `<div class="project-note">${p.note}</div>` : '';
      const repoLnk = p.repo ? `<a href="${p.repo}" class="project-link" target="_blank" rel="noopener">Repository ↗</a>` : '';
      const demoLnk = p.demo ? `<a href="${p.demo}" class="project-link" target="_blank" rel="noopener">Live Demo ↗</a>` : '';
      const linksRow = (repoLnk || demoLnk)
        ? `<div class="project-links">${repoLnk}${demoLnk}</div>` : '';
      const statusSlug = p.status ? p.status.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') : '';
      const statusBadge = p.status ? `<span class="status-badge ${statusSlug}">${p.status}</span>` : '';

      return `
        <div class="project-card${hidden}" data-role="${p.role}">
          <div class="project-header">
            <div class="project-title">${p.title}</div>
            <div class="project-meta">
              <span class="project-year">${p.year}</span>
              <span class="role-badge ${p.role}">${p.role}</span>
              ${statusBadge}
            </div>
          </div>
          ${noteRow}
          <p class="project-desc">${p.description}</p>
          <div class="project-tags">
            ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
          </div>
          ${linksRow}
        </div>
      `;
    }).join('');

    setHTML('projects-list', html);
  }

  /* ────────────────────────────────────────────────────────
     CONTACT
  ──────────────────────────────────────────────────────── */

  function renderContact() {
    const m = D.meta;
    setText('contact-desc',
      `I'm open to internships, collaborations, and interesting conversations. ` +
      `Reach me at ${m.email}.`
    );

    const rows = [
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
        html: `<a href="mailto:${m.email}">${m.email}</a>`
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 14a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 3.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 10a16 16 0 0 0 5.91 5.91l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.92 17z"></path></svg>`,
        html: `${m.phone}`
      }
    ];

    if (m.github) rows.push({
      icon: githubIcon(17),
      html: `<a href="${m.github}" target="_blank" rel="noopener">GitHub ↗</a>`
    });

    if (m.linkedin) rows.push({
      icon: linkedinIcon(17),
      html: `<a href="${m.linkedin}" target="_blank" rel="noopener">LinkedIn ↗</a>`
    });

    setHTML('contact-details', rows.map(r => `
      <div class="contact-row">
        ${r.icon}
        <span class="contact-row-text">${r.html}</span>
      </div>
    `).join(''));
  }

  /* ────────────────────────────────────────────────────────
     PROFILE SIDEBAR
  ──────────────────────────────────────────────────────── */

  function renderProfile() {
    const m = D.meta;
    setText('profile-avatar',  m.initials || (m.name.split(' ').map(n => n[0]).join('').slice(0, 2)));
    setText('profile-name',    m.name);
    setText('profile-tagline', 'Software dev, CS student');
    setText('profile-blurb',   m.bio);

    const links = [];
    if (m.github)   links.push(`<a href="${m.github}"   class="social-link" target="_blank" rel="noopener" title="GitHub">${githubIcon(20)}</a>`);
    if (m.linkedin) links.push(`<a href="${m.linkedin}" class="social-link" target="_blank" rel="noopener" title="LinkedIn">${linkedinIcon(20)}</a>`);
    links.push(`<a href="mailto:${m.email}" class="social-link" title="Email">${mailIcon(20)}</a>`);

    setHTML('profile-socials', links.join(''));
  }

  /* ────────────────────────────────────────────────────────
     ICON HELPERS
  ──────────────────────────────────────────────────────── */

  function svgWrap(size, path) {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;
  }

  function githubIcon(s) {
    return svgWrap(s, `<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>`);
  }

  function linkedinIcon(s) {
    return svgWrap(s, `<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>`);
  }

  function mailIcon(s) {
    return svgWrap(s, `<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>`);
  }

  /* ────────────────────────────────────────────────────────
     THEME
  ──────────────────────────────────────────────────────── */

  function initTheme() {
    const saved = localStorage.getItem('rc-theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
  }

  el('theme-toggle').addEventListener('click', function () {
    const cur  = document.documentElement.getAttribute('data-theme');
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('rc-theme', next);
  });

  /* ────────────────────────────────────────────────────────
     NAVIGATION
  ──────────────────────────────────────────────────────── */

  const SECTIONS = ['home', 'about', 'projects', 'contact'];

  function scrollTo(id) {
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  }

  // expose for inline onclick handlers
  window.Portfolio = { scrollTo };

  function setActive(id) {
    document.querySelectorAll('.nav-btn, .mobile-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.section === id);
    });
  }

  // bind sidebar + mobile nav buttons
  document.querySelectorAll('.nav-btn, .mobile-btn').forEach(btn => {
    btn.addEventListener('click', () => scrollTo(btn.dataset.section));
  });

  // scroll-spy: fires when a section's top edge enters the upper 30% of the viewport.
  // rootMargin shrinks the detection zone so the active section is whichever one
  // owns the top of the screen — works correctly on both short and very long sections.
  const io = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
    { threshold: 0, rootMargin: '-10% 0px -60% 0px' }
  );

  SECTIONS.forEach(id => {
    const sec = document.getElementById(id);
    if (sec) io.observe(sec);
  });

  /* ────────────────────────────────────────────────────────
     PROJECT FILTER
  ──────────────────────────────────────────────────────── */

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      renderProjects(this.dataset.filter);
    });
  });

  /* ────────────────────────────────────────────────────────
     CONTACT FORM
  ──────────────────────────────────────────────────────── */

  el('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name    = el('f-name').value.trim();
    const email   = el('f-email').value.trim();
    const message = el('f-message').value.trim();

    if (!name || !email || !message) {
      el('form-feedback').textContent = 'Please fill in all fields.';
      return;
    }

    // Opens the visitor's email client with the message pre-filled
    const mailto = `mailto:${D.meta.email}`
      + `?subject=${encodeURIComponent('Portfolio contact from ' + name)}`
      + `&body=${encodeURIComponent(message + '\n\n— ' + name + ' (' + email + ')')}`;

    window.location.href = mailto;

    el('form-feedback').textContent = 'Opening your email client…';
    this.reset();
    setTimeout(() => { el('form-feedback').textContent = ''; }, 5000);
  });

  /* ────────────────────────────────────────────────────────
     INIT
  ──────────────────────────────────────────────────────── */

  initTheme();
  renderHome();
  renderAbout();
  renderProjects('all');
  renderContact();
  renderProfile();

})();

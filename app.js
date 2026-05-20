// Mobile menu toggle
const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

// Admissions form (demo submit)
const form = document.getElementById('admissions-form');
const statusEl = document.getElementById('form-status');
if (form && statusEl) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    statusEl.textContent = 'Submitting...';
    try {
      await new Promise(r => setTimeout(r, 800)); // simulate
      statusEl.textContent = 'Thank you — we will contact you shortly.';
      form.reset();
    } catch (err) {
      statusEl.textContent = 'Submission failed. Please try again.';
    }
  });
}

// Events stub — sample Sat–Wed pattern
const events = document.getElementById('events');
if (events) {
  const data = [
    { title: 'Term 1 Opening Day', date: '2026-01-10', where: 'Campus (Sat)' },
    { title: 'Parent Orientation', date: '2026-01-12', where: 'Hall A (Mon)' },
    { title: 'Hifdh Assessment', date: '2026-02-03', where: 'Masjid (Tue)' }
  ];
  data.forEach(ev => {
    const el = document.createElement('div');
    el.className = 'event';
    el.innerHTML = `<div><strong>${ev.title}</strong><div class="meta">${ev.where}</div></div><time>${ev.date}</time>`;
    events.appendChild(el);
  });
}

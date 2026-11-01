// Muntean Grünpflege & Abbruch – kleine Interaktionen

// Aktuelles Jahr im Footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile Navigation umschalten
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

navToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  navToggle.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', String(open));
});

// Menü nach Klick auf einen Link wieder schließen
mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Kontaktformular: Eingaben prüfen und Bestätigung anzeigen
const form = document.getElementById('contact-form');
const note = document.getElementById('form-note');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = form.elements.name.value.trim();
  const contact = form.elements.contact.value.trim();
  const message = form.elements.message.value.trim();

  if (!name || !contact || !message) {
    note.textContent = 'Bitte füllen Sie alle Pflichtfelder aus.';
    note.style.color = '#b71c1c';
    return;
  }

  note.textContent =
    'Vielen Dank, ' + name + '! Ihre Anfrage ist eingegangen – wir melden uns in Kürze.';
  note.style.color = '';
  form.reset();
});

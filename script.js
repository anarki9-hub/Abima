document.getElementById('year').textContent = new Date().getFullYear();

const navLinks = document.querySelectorAll('.nav-link');
const tabContents = document.querySelectorAll('.tab-content');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    const target = link.getAttribute('data-tab');
    tabContents.forEach(tab => {
      tab.classList.remove('active');
      if (tab.id === target) {
        tab.classList.add('active');
      }
    });
  });
});

document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Pesan terkirim! (Demo)');
  e.target.reset();
});

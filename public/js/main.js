// Navegação entre seções
function navigateTo(sectionName) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  document.getElementById('section-' + sectionName).classList.add('active');
  document.querySelectorAll('nav button').forEach(btn => btn.classList.remove('active'));
  const navBtn = document.querySelector(`nav button[data-nav="${sectionName}"]`);
  if (navBtn) navBtn.classList.add('active');
  window.scrollTo({top:0, behavior:'smooth'});
}

// Tabs do bestiário
function openBestTab(evt, tabId) {
  const parent = evt.target.closest('section');
  parent.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
  parent.querySelectorAll('.tab-btn').forEach(tb => tb.classList.remove('active'));
  document.getElementById('tab-' + tabId).classList.add('active');
  evt.target.classList.add('active');
}

// Busca no bestiário
function filterBestiario() {
  const query = document.getElementById('search-best').value.toLowerCase();
  document.querySelectorAll('.creature-card').forEach(card => {
    const text = card.getAttribute('data-search').toLowerCase();
    card.style.display = text.includes(query) ? '' : 'none';
  });
}

// Partículas estelares
(function() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  const maxP = 150;
  function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.2;
      this.speedY = (Math.random() - 0.5) * 0.2;
      this.opacity = Math.random() * 0.7 + 0.3;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.opacity = 0.3 + Math.sin(Date.now() * 0.002 + this.x) * 0.3;
      if (this.x < -10 || this.x > canvas.width+10 || this.y < -10 || this.y > canvas.height+10) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
      ctx.fillStyle = `rgba(180,140,255,${this.opacity})`;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size*3, 0, Math.PI*2);
      ctx.fillStyle = `rgba(180,77,255,${this.opacity*0.1})`;
      ctx.fill();
    }
  }
  for(let i=0; i<maxP; i++) particles.push(new Particle());
  function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
  }
  animate();
})();

// Navegação por teclado
document.addEventListener('keydown', (e) => {
  const sections = ['home','bestiario','planetas','civilizacoes','flora','echion'];
  const current = document.querySelector('.section.active')?.id?.replace('section-','');
  const idx = sections.indexOf(current);
  if (e.key === 'ArrowRight' && idx < sections.length-1) navigateTo(sections[idx+1]);
  if (e.key === 'ArrowLeft' && idx > 0) navigateTo(sections[idx-1]);
});
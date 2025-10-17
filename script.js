function toggleMenu(open){
  const btn  = document.getElementById('hamburgerBtn');
  const menu = document.getElementById('mobileMenu');
  const state = (typeof open === 'boolean') ? open : btn.getAttribute('aria-expanded') !== 'true';

  btn.setAttribute('aria-expanded', String(state));
  menu.hidden = !state;
  menu.classList.toggle('open', state);
  document.body.classList.toggle('body-lock', state);

  if(state){
    // focus premier lien
    const firstLink = menu.querySelector('a');
    firstLink && firstLink.focus();
  }else{
    btn.focus();
  }
}

// bouton
document.getElementById('hamburgerBtn')?.addEventListener('click', ()=>toggleMenu());

// fermer en cliquant sur X, backdrop, ou un lien
document.addEventListener('click', (e)=>{
  const menu = document.getElementById('mobileMenu');
  if(menu?.hidden) return;
  if(e.target.matches('[data-close]')) toggleMenu(false);
});

// fermer avec Échap
document.addEventListener('keydown', (e)=>{
  const menu = document.getElementById('mobileMenu');
  if(e.key === 'Escape' && menu && !menu.hidden) toggleMenu(false);
});

// lien actif (facultatif)
function highlightActiveLink(){
  const hash = location.hash || '#profile';
  document.querySelectorAll('.sheet-links a').forEach(a=>{
    if(a.getAttribute('href') === hash) a.setAttribute('aria-current','page');
    else a.removeAttribute('aria-current');
  });
}
window.addEventListener('hashchange', highlightActiveLink);
window.addEventListener('load', highlightActiveLink);

/* DWCE Help Centre — Navigation JS */
(function () {
  const toggle   = document.getElementById('menuToggle');
  const sidebar  = document.getElementById('sidebar');
  const overlay  = document.getElementById('sidebarOverlay');

  function openMenu() {
    sidebar.classList.add('open');
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
    document.body.style.overflow = '';
  }

  if (toggle)  toggle.addEventListener('click', openMenu);
  if (overlay) overlay.addEventListener('click', closeMenu);

  /* Mark active nav link */
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(function (a) {
    const href = a.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  /* Close sidebar on nav-link click (mobile) */
  document.querySelectorAll('.nav-link').forEach(function (a) {
    a.addEventListener('click', closeMenu);
  });
})();

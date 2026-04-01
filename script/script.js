(function () {
    const menuBtn = document.getElementById('mochiMenuBtn');
    const closeBtn = document.getElementById('menuCloseBtn');
    const overlay = document.getElementById('menuOverlay');
    if (!menuBtn || !overlay) return;
    menuBtn.addEventListener('click', function () {
        overlay.classList.add('active');
        menuBtn.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    function closeMenu() {
        overlay.classList.remove('active');
        menuBtn.classList.remove('active');
        document.body.style.overflow = '';
    }
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    document.querySelectorAll('.menu-link').forEach(function (link) {
        link.addEventListener('click', closeMenu);
    });
    
    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) closeMenu();
    });
})();
(function () {
    var header = document.querySelector('header');
    if (!header) return;
    window.addEventListener('scroll', function () {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });
})();

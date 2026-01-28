// Hamburger Menu - 書庫
(function() {
    'use strict';
    
    const btn = document.querySelector('.hamburger-btn');
    const menu = document.querySelector('.hamburger-menu');
    const overlay = document.querySelector('.menu-overlay');
    
    if (!btn || !menu || !overlay) return;
    
    function toggleMenu() {
        btn.classList.toggle('open');
        menu.classList.toggle('open');
        overlay.classList.toggle('open');
        document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
    }
    
    function closeMenu() {
        btn.classList.remove('open');
        menu.classList.remove('open');
        overlay.classList.remove('open');
        document.body.style.overflow = '';
    }
    
    btn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', closeMenu);
    
    // Escキーで閉じる
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && menu.classList.contains('open')) {
            closeMenu();
        }
    });
    
    // メニュー内リンククリックで閉じる
    menu.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', closeMenu);
    });
})();

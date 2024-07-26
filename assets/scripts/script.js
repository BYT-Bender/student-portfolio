document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");

    function setActiveItemFromHash() {
        const hash = window.location.hash;
        const navItems = document.querySelectorAll('.nav-list a');
        navItems.forEach(nav => nav.querySelector('.nav-item').classList.remove('active'));

        if (hash) {
            const activeLink = document.querySelector(`.nav-list a[href="${hash}"]`);
            if (activeLink) {
                activeLink.querySelector('.nav-item').classList.add('active');
            }
        } else {
            const defaultLink = document.querySelector('.nav-list a[href="#home"]');
            if (defaultLink) {
                defaultLink.querySelector('.nav-item').classList.add('active');
            }
        }
    }

    setActiveItemFromHash();

    const navItems = document.querySelectorAll('.nav-list a');
    navItems.forEach(item => {
        item.addEventListener('click', function () {
            navItems.forEach(nav => nav.querySelector('.nav-item').classList.remove('active'));
            item.querySelector('.nav-item').classList.add('active');
        });
    });

    window.addEventListener('hashchange', setActiveItemFromHash);
});

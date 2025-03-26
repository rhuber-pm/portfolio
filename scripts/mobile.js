// Mobile menu functionality
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuButton = document.getElementById('mobile-menu-button');
const closeMenuButton = document.getElementById('close-menu-button');
const mobileBackdrop = document.getElementById('mobile-menu-backdrop');

function toggleMobileMenu() {
    mobileMenu.classList.toggle('translate-x-full');
    mobileBackdrop.classList.toggle('opacity-0');
    mobileBackdrop.classList.toggle('pointer-events-none');
    document.body.classList.toggle('overflow-hidden');
}

mobileMenuButton.addEventListener('click', toggleMobileMenu);
closeMenuButton.addEventListener('click', toggleMobileMenu);
mobileBackdrop.addEventListener('click', toggleMobileMenu);

// Close menu when clicking on a link
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', toggleMobileMenu);
});

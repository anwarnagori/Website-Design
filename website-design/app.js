function toggleNavbar() {
    const navbar = document.getElementById('navbar');
    // Toggle visibility of navbar
    if (navbar.style.display === 'flex') {
        navbar.style.display = 'none';
    } else {
        navbar.style.display = 'flex';
    }
}


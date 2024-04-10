function setActiveLink(element) {
    let navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
        link.classList.remove('active');
    });
    element.classList.add('active');
}
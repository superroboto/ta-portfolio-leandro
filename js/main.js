// This is for being able to click on project image to fullscreen them
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.project-container');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    // Safety in case page doesn't have project container
    if (!container || !lightbox) return;

    // Listen for clicks on images inside project
    container.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            lightboxImg.src = e.target.src;
            lightboxImg.alt = e.target.alt;
            lightbox.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });

    // Close lightbox
lightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
        document.body.style.overflow = ''; // Restore scrolling
    });
});

// This is for the mobile navigation burger
document.getElementById('navbar-toggle-button').addEventListener('click', function() {
    console.log("PRINT!");
    const element = document.getElementById('mobile-navbar-collapse');
    
    // Toggle between the two classes
    if (element.classList.contains('show')) {
        element.classList.remove('show');
        element.classList.add('hide');
    } else {
        element.classList.remove('hide');
        element.classList.add('show');
    }
});
// Gallery lightbox functionality
(function() {
  'use strict';

  // Initialize lightbox when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGallery);
  } else {
    initGallery();
  }

  function initGallery() {
    // Find all galleries with lightbox enabled
    const galleries = document.querySelectorAll('.gallery[data-lightbox="true"]');
    if (galleries.length === 0) return;

    // Create lightbox overlay (only once)
    if (!document.getElementById('lightbox-overlay')) {
      createLightboxOverlay();
    }

    // Add click handlers to all gallery links
    galleries.forEach(gallery => {
      const links = gallery.querySelectorAll('.gallery-link');
      links.forEach((link, index) => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          openLightbox(links, index);
        });
      });
    });
  }

  function createLightboxOverlay() {
    const overlay = document.createElement('div');
    overlay.id = 'lightbox-overlay';
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML = `
      <button class="lightbox-close" aria-label="Close">&times;</button>
      <button class="lightbox-nav lightbox-prev" aria-label="Previous">&lsaquo;</button>
      <button class="lightbox-nav lightbox-next" aria-label="Next">&rsaquo;</button>
      <div class="lightbox-content">
        <img class="lightbox-image" src="" alt="">
        <div class="lightbox-caption"></div>
      </div>
    `;
    document.body.appendChild(overlay);

    // Close lightbox when clicking outside image or on close button
    const closeBtn = overlay.querySelector('.lightbox-close');
    closeBtn.addEventListener('click', closeLightbox);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeLightbox();
    });

    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboard);
  }

  let currentLinks = [];
  let currentIndex = 0;

  function openLightbox(links, index) {
    currentLinks = Array.from(links);
    currentIndex = index;
    showImage();

    const overlay = document.getElementById('lightbox-overlay');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling

    // Setup navigation
    const prevBtn = overlay.querySelector('.lightbox-prev');
    const nextBtn = overlay.querySelector('.lightbox-next');

    prevBtn.style.display = currentLinks.length > 1 ? 'block' : 'none';
    nextBtn.style.display = currentLinks.length > 1 ? 'block' : 'none';

    prevBtn.onclick = showPrevious;
    nextBtn.onclick = showNext;
  }

  function closeLightbox() {
    const overlay = document.getElementById('lightbox-overlay');
    overlay.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
    currentLinks = [];
    currentIndex = 0;
  }

  function showImage() {
    const overlay = document.getElementById('lightbox-overlay');
    const img = overlay.querySelector('.lightbox-image');
    const caption = overlay.querySelector('.lightbox-caption');

    const currentLink = currentLinks[currentIndex];
    const imgSrc = currentLink.getAttribute('href');
    const imgCaption = currentLink.getAttribute('data-caption') || '';

    img.src = imgSrc;
    img.alt = imgCaption;
    caption.textContent = imgCaption;
    caption.style.display = imgCaption ? 'block' : 'none';
  }

  function showPrevious(e) {
    if (e) e.stopPropagation();
    currentIndex = (currentIndex - 1 + currentLinks.length) % currentLinks.length;
    showImage();
  }

  function showNext(e) {
    if (e) e.stopPropagation();
    currentIndex = (currentIndex + 1) % currentLinks.length;
    showImage();
  }

  function handleKeyboard(e) {
    const overlay = document.getElementById('lightbox-overlay');
    if (!overlay || !overlay.classList.contains('active')) return;

    switch(e.key) {
      case 'Escape':
        closeLightbox();
        break;
      case 'ArrowLeft':
        if (currentLinks.length > 1) showPrevious();
        break;
      case 'ArrowRight':
        if (currentLinks.length > 1) showNext();
        break;
    }
  }

})();

let currentIndex = 0;
let images = [];

function openLightbox(src) {
  images = Array.from(document.querySelectorAll('.gallery-item.image'));
  currentIndex = images.findIndex(img => img.src === src);
  document.getElementById('lightbox-image').src = src;
  document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById('lightbox-image').src = images[currentIndex].src;
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById('lightbox-image').src = images[currentIndex].src;
}

function filterGallery(category) {
  const images = document.querySelectorAll('.gallery-item.image');
  const videos = document.querySelectorAll('.gallery-item.video');

  if (category === 'videos') {
    images.forEach(img => img.style.display = 'none');
    videos.forEach(video => video.style.display = 'block');
  } else {
    images.forEach(img => img.style.display = 'block');
    videos.forEach(video => video.style.display = 'block');
  }
}

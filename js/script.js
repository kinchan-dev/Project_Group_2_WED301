// Làm mờ header khi scroll
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('blur-header');
  } else {
    header.classList.remove('blur-header');
  }
});

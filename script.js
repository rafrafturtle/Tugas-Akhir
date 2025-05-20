let slideIndex = 0;
let slides = document.querySelectorAll(".slide");
let timer;

function showSlide(n) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
  });

  slideIndex = (n + slides.length) % slides.length;
  slides[slideIndex].classList.add("active");
}

function plusSlides(n) {
  clearTimeout(timer); // reset otomatis jika diklik manual
  showSlide(slideIndex + n);
  timer = setTimeout(autoSlide, 5000);
}

function autoSlide() {
  plusSlides(1);
}

// Inisialisasi saat halaman siap
document.addEventListener("DOMContentLoaded", () => {
  showSlide(slideIndex);
  timer = setTimeout(autoSlide, 5000);
});

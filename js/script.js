const sliders = document.querySelectorAll(".projet-slides");

sliders.forEach((slider) => {

  const slides = slider.querySelectorAll(".projet-image");
  const dots = slider.querySelectorAll(".dot");
  const prevBtn = slider.querySelector(".slider-prev");
  const nextBtn = slider.querySelector(".slider-next");

  let currentSlide = 0;

  function showSlide(index) {

    slides.forEach((slide) => {
      slide.classList.remove("active");
    });

    dots.forEach((dot) => {
      dot.classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");

    slider.style.height = slides[index].offsetHeight + "px";

    currentSlide = index;
  }

  nextBtn.addEventListener("click", () => {

    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    showSlide(currentSlide);
  });

  prevBtn.addEventListener("click", () => {

    currentSlide--;

    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
  });

  dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {
      showSlide(index);
    });

  });

  showSlide(0);

  window.addEventListener("resize", () => {
    slider.style.height = slides[currentSlide].offsetHeight + "px";
});

});
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

const plusCards = document.querySelectorAll(".plus-card");

plusCards.forEach((card) => {

    const button = card.querySelector(".plus-card-btn");

    button.addEventListener("click", () => {

        card.classList.toggle("active");

        if (card.classList.contains("active")) {
            button.textContent = "−";
        } else {
            button.textContent = "+";
        }

    });

});

const revealElements = document.querySelectorAll(".reveal, .reveal-projet");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        } else {
            entry.target.classList.remove("visible");
        }

    });

});

revealElements.forEach((element) => {
    observer.observe(element);
});

const portfolioIntro = document.querySelector(".portfolio-intro");
const portfolioDossier = document.querySelector(".portfolio-dossier");
const portfolioContenu = document.querySelector(".portfolio-contenu");

portfolioDossier.addEventListener("click", () => {
    portfolioIntro.classList.add("ferme");
    portfolioContenu.classList.add("ouvert");
});

const sousDossiers = document.querySelectorAll(".sous-dossier");

sousDossiers.forEach((dossier) => {
    dossier.addEventListener("click", () => {

        const nomDossier = dossier.dataset.dossier;

        if (nomDossier === "projets") {
            document.querySelector("#projects").scrollIntoView();
        }

    });
});

const projetsDossier = document.querySelector(".sous-dossier");

projetsDossier.addEventListener("click", () => {
    const premiereCarte = document.querySelector(".projet-carte");

    const position = premiereCarte.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
        top: position - 100,
        behavior: "smooth"
    });
});

const aProposDossier = document.querySelector("#dossier-a-propos");

aProposDossier.addEventListener("click", () => {
    const aPropos = document.querySelector("#about");

    const position = aPropos.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
        top: position - 100,
        behavior: "smooth"
    });
});
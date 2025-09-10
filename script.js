/*  EVENTOS DE CLICKS */
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-infor")) {
    let botoes = [...document.querySelectorAll(".btn-infor")]; // Converte NodeList em array
    let index = botoes.indexOf(event.target); // Descobre o índice do botão clicado
    let oculta = document.querySelectorAll(".oculta")[index]; // Pega o elemento correspondente

    if (oculta) {
      oculta.classList.toggle("ativo");
    }
  }
});

/*   FIX DUPLICAR CARROSSEL */
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".carousel-container").forEach((container) => {
    let carousel = container.querySelector(".carousel");
    let slides = container.querySelectorAll(".slide");
    let prevButton = container.querySelector(".prev");
    let nextButton = container.querySelector(".next");
    let currentIndex = 0;

    function showSlide(index) {
      const totalSlides = slides.length;

      if (index >= totalSlides) {
        currentIndex = 0;
      } else if (index < 0) {
        currentIndex = totalSlides - 1;
      } else {
        currentIndex = index;
      }

      const slideWidth = slides[0].clientWidth;
      carousel.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
    }

    function nextSlide() {
      showSlide(currentIndex + 1);
    }

    function prevSlide() {
      showSlide(currentIndex - 1);
    }

    // Adiciona eventos aos botões do carrossel correspondente
    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);

    // Ajusta caso a tela mude de tamanho
    window.addEventListener("resize", () => showSlide(currentIndex));

    // Troca de slide automática a cada 3 segundos
    setInterval(nextSlide, 4700);
  });
});
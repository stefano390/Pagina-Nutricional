const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const cards = document.querySelectorAll('.carousel .card');

let activeIndex = Math.floor(cards.length / 2);


function updateActiveCard() {
  cards.forEach((card, index) => {
    card.classList.remove('active');
    if(index === activeIndex) {
      card.classList.add('active');
    }
  });
}

function moveNext() {
  activeIndex = (activeIndex + 1) % cards.length;
  updateActiveCard();
}

function movePrev() {
  activeIndex = (activeIndex - 1 + cards.length) % cards.length;
  updateActiveCard();
}

prevBtn.addEventListener('click', movePrev);
nextBtn.addEventListener('click', moveNext);

// Inicializar activo
updateActiveCard();

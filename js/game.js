const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

const winningMessageTextElement = document.querySelector(
  "[data-winning-message-text]"
);
const winningMessage = document.querySelector("[data-winning-message]");
const RestartButton = document.querySelector(
  "[data-restart-button]"
);


const characters = [
    '1',
    '2',
    '3',
    '4',
    '6',
    '7',
    '8',
    '9',
    'krusty',
    '5',
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {
  
  const disabledCards = document.querySelectorAll('.disabled-card');

  if (disabledCards.length === 20) {
    clearInterval(this.loop);
    winningMessage.classList.add("show-winning-messsage");
  }
  winningMessageTextElement.innerText = "Fim de Jogo"();
}


const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');
  
    if (firstCharacter === secondCharacter) {
  
      firstCard.firstChild.classList.add('disabled-card');
      secondCard.firstChild.classList.add('disabled-card');
  
      firstCard = '';
      secondCard = '';
  
      checkEndGame();
  
    } else {
      setTimeout(() => {
  
        firstCard.classList.remove('reveal-card');
        secondCard.classList.remove('reveal-card');
  
        firstCard = '';
        secondCard = '';
  
      }, 500);
    }
  
  }

const revealCard = ({ target }) => {

    if (target.parentNode.className.includes('reveal-card')) {
      return;
    }
  
    if (firstCard === '') {
  
      target.parentNode.classList.add('reveal-card');
      firstCard = target.parentNode;
  
    } else if (secondCard === '') {
  
      target.parentNode.classList.add('reveal-card');
      secondCard = target.parentNode;
  
      checkCards();
  
    }  
}

const createCard = (character) => {

  const card = createElement('div', 'card');
  const front = createElement('div', 'face front');
  const back = createElement('div', 'face back');

  front.style.backgroundImage = `url('../images/${character}.png')`;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener('click', revealCard);
  card.setAttribute('data-character', character)

  return card;
}

  const loadgame = () => {

    const duplicateCharacters = [ ...characters, ...characters ];

    const shuffledarray = duplicateCharacters.sort( () => Math.random() - 0.5 );

    duplicateCharacters.forEach((character) => {

        const card = createcard(character);
        grid.appendChild(card);


     

    });

}


const startTimer = () => {

 this.loop = setInterval(() => {

    const currentTime = +timer.innerHTML;
    timer.innerHTML = currentTime + 1;

  }, 1000);

}

window.onload = () => {
  spanPlayer.innerHTML = localStorage.getItem('player');
  startTimer(); 
  loadgame();
}

RestartButton.addEventListener('click'), loadgame;

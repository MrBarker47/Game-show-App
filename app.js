//Getting the elements by their ID's and Classes
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const button = document.querySelector('.btn__reset');
const divOne = document.getElementById('overlay');
const newDiv = phrase.firstElementChild;
let missed = 0;
let match = null;



// Get a random phrases from the array that you created
const phrases = ['hello world', 'only the strong survive', 'work hard play hard', 'you wear the crown',
'everybody eats', 'you wear the crown'];

function getRandomPhrasesArray(array) {
  const randomNumber = Math.floor(Math.random() * array.length);
    let newWord = array[randomNumber].split('');
     addPhraseToDisplay(newWord);
}

function addPhraseToDisplay(array) {
  for (let i = 0; i < array.length; i++) {
    const li = document.createElement('li');
     li.textContent = array[i];
        newDiv.appendChild(li);
       if(array[i] === " " ) {
        li.classList.add('space');
       } else {
        li.classList.add('letter');
       }
     }
  }


function checkLetter(button) { 
  const list = document.getElementsByTagName(li);
  for (let i = 0; i < list.length; i++) {
    if(button === li) {
      li.classList.add('show');
    } else {
      match = button;
    }
    return match;
  }
}


button.addEventListener('click', () => {
    overlay.style.display = 'none';
    getRandomPhrasesArray(phrases);
  });


qwerty.addEventListener('click', () => {
   if (button === " ") {
    button.classList.add('chosen');
   } 
   console.log(qwerty);
});
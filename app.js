//Getting the elements by their ID's and Classes
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const button = document.querySelector('.btn__reset');
let missed = 0;


const phrases = ['Hello World', 'Only The Strong Survive', 'Work Hard, Play Hard',
'EveryBody Eats', 'You Wear The Crown'];

// Get a random phrases from the array that you created
function getRandomPhrasesArray(phrases) {
   let newWord =  phrase.split('');
    let word = phrases[0];
    return phrases;
}

// const arr = getRandomPhrasesArray(phrases);


function addPhraseToDisplay(phrases) {
    const li = document.createElement('li');
    for (let i = 0; i < li.length; i++) {
     li.append('ul');
    }

}

const phraseArray = getRandomPhrasesArray(phrases);
addPhraseToDisplay(phraseArray);









// button.addEventListener('click', () => {
//     console.log('clicked');


// });


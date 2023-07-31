import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

function updateWordCount(){
  const textarea= document.querySelector('textarea[name="user-input"]');
  const text = textarea.value; 
  const wordCount =analyzer.getWordCount(text);
  const wordCountElement = document.querySelector('[data-testid="word-count"]');
  wordCountElement.textContent=`Recuento de palabras: ${wordCount}`;
}

function updateCharacterCount(){
  const textarea= document.querySelector('textarea[name="user-input"]');
  const text = textarea.value;
  const characterCount=analyzer.getCharacterCount(text);
  const characterCountElement = document.querySelector('[data-testid="character-count"]');
  characterCountElement.textContent = `Recuento de carácteres: ${characterCount}`;
}

function updateCharacterCountExcludingSpaces () {
  const textarea = document.querySelector ('textarea[name="user-input"]');
  const text = textarea.value;
  const characterCountExcludingSpaces=analyzer.getCharacterCountExcludingSpaces(text);
  const characterCountExcludingSpacesElement = document.querySelector('[data-testid="character-no-spaces-count"]');
  characterCountExcludingSpacesElement.textContent= `Recuento de carácteres sin espacios y signos de puntuación: ${characterCountExcludingSpaces}`;
}

function updateNumberCount (){
  const textarea = document.querySelector ('textarea[name="user-input"]');
  const text = textarea.value; 
  const numberCount = analyzer.getNumberCount (text);
  const numberCountElement = document.querySelector ('[data-testid="number-count"]');
  numberCountElement.textContent= `Recuento de números: ${numberCount}`;
}

function updateNumberSum (){
  const textarea= document.querySelector('textarea[name="user-input"]')
  const text = textarea.value; 
  const numberSum = analyzer.getNumberSum (text);
  const numberSumElement = document.querySelector ('[data-testid="number-sum"]');
  numberSumElement.textContent= `Suma total de números: ${numberSum}`;
}

function updateAverageWordLength() {
  const textarea= document.querySelector('textarea[name="user-input"]')
  const text = textarea.value; 
  const AverageWordLength = analyzer.getAverageWordLength (text);
  const AverageWordLengthElement = document.querySelector ('[data-testid="word-length-average"]');
  AverageWordLengthElement.textContent= `Longitud media de palabras: ${AverageWordLength}`; 
}

const textarea = document.querySelector('textarea[name="user-input"]');
textarea.addEventListener('keyup',updateCharacterCount);
textarea.addEventListener('keyup',updateWordCount);
textarea.addEventListener('keyup',updateCharacterCountExcludingSpaces);
textarea.addEventListener('keyup',updateNumberCount);
textarea.addEventListener('keyup',updateNumberSum);
textarea.addEventListener('keyup',updateAverageWordLength);


document.addEventListener('DOMContentLoaded', () => {
  const resetbutton = document.getElementById('reset-button');
  resetbutton.addEventListener("click", analyzer.limpiarCajadeTexto);
});

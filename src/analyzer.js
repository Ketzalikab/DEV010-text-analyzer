const analyzer = {  

  getWordCount: (text) => {
    if (!text || text.trim().length ===0){
      return 0; 
    }
    //Eliminamos los espacios en blanco al principio y al final del texto 
    //y luego dividimos el texto en palabras utilizando el método split
    const words = text.trim().split(/\s+/);
    //Retornamos la cantidad de palabras encontradas en el texto 
    return words.length; 
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCount: (text) => {
    if (!text) { 
      return 0;
    }
    //Dividir el texto en caracteres individuales y contarlos 
    const characters = text.split('');
    return characters.length;
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCountExcludingSpaces: (text) => {
    if (!text) {
      return 0; 
    }
    //Eliminamos los signos de puntuación del texto sin espacios.
    const textWithoutSpacesAndPunctuation  = text.replace(/[^\w]/g,'');
    //Retornamos la longitud del texto sin espacios ni signos de puntuación 
    return textWithoutSpacesAndPunctuation.length; 
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => { 
    //si el texto es null o contenga solo espacios en blanco, retornamos 0.
    if (!text || text.trim().length ===0){
      return 0;
    } else {
      //si el texto no es null eliminamos los espacios en blanco al principio y al final del texto y dividimos el texto en palabras.
      const words = text.trim().split(/\s+/);
      //Inicializamos una variable para almacenar la suma de las longitudes de todas las palabras. 
      let totalLength = 0; 
      //utilizamos for para recorrer todas las palabras y sumar la longuitud de cada una en la variable. 
      for (let i = 0; i <words.length; i++) {
        totalLength += words[i].length; 
      }
      //Calculamos la longitud promedio dividiendo la variable por la cantidad de texto y se almacena en la constante siguiente. 
      const averageLength = totalLength / words.length;
      return parseFloat(averageLength.toFixed(2));
    }
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },

  getNumberCount: (text) => {
    if (!text) {
      return 0; 
    } else{
      //Usamos una expresión regular para extraer todo los números del texto.
      const numbers = text.match(/\b\d+(\.\d+)?\b/g);
      //Si no se encuentran números en el texto, retornamos 0.
      if (!numbers || numbers.length === 0) {
        return 0;
      } else {
        //Retornamos la cantidad de números encontrados. 
        return numbers.length; 
      }
    }
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => { 
    if (!text) {
      return 0; 
    } else {
      //Expresión regular para extraer los números enteros (incluyendo decimales) del texto.
      const numbers = text.match (/\b\d+(\.\d+)?\b/g);
      //si no se encuentran números en el texto, retornamos 0. 
      if (!numbers || numbers.length === 0) {
        return 0; 
      } else {
        //Convertimos los números de texto a valores numéricos y los sumamos. 
        const sum = numbers.reduce((acc,num) => acc + parseFloat(num), 0); 
        return sum;
      }
    }
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },

  limpiarCajadeTexto:() => {
    const textarea = document.querySelector ('textarea[name="user-input"]');
    textarea.value = "";
    const contadores = document.querySelectorAll ('.contadores li');
    contadores.forEach(contador => {
      contador.textContent = contador.textContent.split(':')[0] + ':0'; 
    });

  }
};
  

export default analyzer;

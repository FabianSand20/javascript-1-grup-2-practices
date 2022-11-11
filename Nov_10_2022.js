//LISTO
//Ejercicio 1
// function reverseString(str) {
//   if (str === "") {
//     return "";
//   } else {
//     return reverseString(str.substr(1)) + str.charAt(0);
//   }
// }

// console.log(reverseString('freeCodeCamp'))

//Ejercicio 2

// let cadena = "Este es un ejemplo de una cadena";
// let letra = "e";
// let contador = 0;

// for (i = 0; i < cadena.length; i++) {
//   if (cadena.charAt(i) === letra) {
//     contador++;
//   }
// }

// console.log("La letra '" + letra + "' aparece " + contador + " veces en la cadena.");

//LISTO
//Ejercicio 3
// function intercambiar (frase){
//   if(frase.length == 0)
//       return('');
//   else
//       return(frase[0] == 'a' || frase[0] == 'e' || frase[0] == 'o' || frase[0] == 'u' ? 'i' : frase[0]) + intercambiar(frase.slice(1));
// }

// console.log(intercambiar('El CETAV esta muy lejos'));


//LISTO 
//Ejercicio 4

// function ordenText (text) {
//   return [... text].sort ((a,b) => a.localeCompare(b)).join('');
// }

// console.log (ordenText('CETAV'));
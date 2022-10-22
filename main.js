//EJERCICIO #1

// let array = [1 , 84, 16, 74, 60, 5, 10, 2];
// let biggernumber = 0;
// for(i = 0; i < array.length; i++){
//     if (array[i] > biggernumber)
//     {
//         biggernumber = array[i];
//     }
// }
// console.log(biggernumber);


//EJERCICIO #2

// let palabra = prompt('Ingresa una palabra');

// function palindromo(palabra) {
//     let resultado = true;
//     for (let i = 0; i < palabra.length; i++) {
//         if (palabra[i] !== palabra[palabra.length - 1 - i]) {
//             resultado = false;
//         }
//     }
//     return resultado;
// }

// document.write(palindromo(palabra));

//EJERCICIO #3

// const miArray = [
//   [1,0,0],
//   [0,1,1], 
//   [0,1,0]
// ];
// let contador = 0;

// for (let i = 0; i < miArray.length; i++) {
//   for (let j = 0; j < miArray[i].length; j++) {
//     if (miArray[i][j] === 0 ){
//       contador ++
//     } 
//   }
// }
// console.log("La cantida de ceros repetirdos son: " +contador)

//EJERCICIO #4

// const array= [10, 1, 2, 10, 4, 5, 7,].sort()

// console.log(array)

// let arrayunico = [];

// for (let i = 0; i < array.length; i++){
//     if(arrayunico.includes(array[i])){
//         console.log("Se repite el numero " + array[i]);
//     }

//     else{
//         arrayunico.push(array[i])
//         }
//     }


//EJERCICIO #5

// let num = 6;

// for(let i = 1; i <= num; ++i) {
//     let resultado = '';

//     for(let j = 1; j <= i; ++j) {
//         resultado += '*';
//     }

//     console.log(resultado);
// }
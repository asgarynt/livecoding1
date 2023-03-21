// // 1.- Construye una función que reciba por parámetros un string y un array de strings. La función debe retornar un arreglo de strings con los strings que sean de mayor longitud que el string recibido por parámetros.

// Escribe una función que reciba 2 parámetros
// Parámetro 1 - Un string
// Parámetro 2 - Un array de strings
// La función debe devolver todas las palabras del array de entrada (parámetro 2) que sean más largas que el string de entrada (parámetro 1)
// Ejemplo:
// const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];
// bigWords('bocina', myArray);
// Output - ['insecto', 'bootcamp', 'escritorio']

const myArray = [
  "insecto",
  "bootcamp",
  "mangos",
  "reptil",
  "mosca",
  "escritorio",
];

function bigWords(string, array) {
  let biggestWord = [];
  array.forEach((element) => {
    if (element.length > string.length) {
      biggestWord.push(element);
    }
  });
  return biggestWord;
}

console.log(bigWords("bocina", myArray));

// 2.- Construye una función que reciba por parámetros un array de strings y lo imprima dentro de la lista (<ul></ul>) en el index.html. La función debe mostrar la lista en el HTML manipulando el DOM, cada string del arreglo debe imprimirse en un elemento **<li></li>**. El array que se recibe por parámetros debe ser un array resultante de utilizar la función anterior.

// - Escribe una función que reciba 1 parámetro
//    - Parámetro 1 - Un array de strings
// - La función debe mostrar la lista en el HTML, cada string del arreglo debe imprimirse en un elemento **<li></li>**.
// - Ejemplo:
//    - `const myArray = ['insecto', 'bootcamp', 'escritorio'];`
//    - `printArray(myArray);`
//    - Output - `<li>insecto</li>
//                <li>bootcamp</li>
//                <li>escritorio</li>

let listaPalabras = document.getElementById("sectionWordsList");

const list = (array) => {
  array.forEach((element) => {
    listaPalabras.innerHTML += `<li>${element}</li>`;
  });
};

list(myArray);

let addWord = document.getElementById("addWord");
let btn = document.getElementById("btnAddWord");

const listAdd = (word) => {
  return listaPalabras.innerHTML += `<li>${word.value}</li>`;
};

btn.addEventListener("click", () => listAdd(addWord));
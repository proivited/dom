let subtitle = document.querySelector('#subtitle'); //asi llamas a un id
let parrafo = document.querySelector('#parrafo');

console.log(subtitle);
console.log(subtitle.textContent); //obtienes el valor del id

subtitle.textContent = 'Nuevo valor';
subtitle.classList.add('red'); //agreegamos una clase con este comando

subtitle.classList.remove('red');

/*subtitle.textContent = 'Subtitulo';*/

const animales = ['Perro', 'Gato', 'Mapache', 'Pez', 'Leopardo', 'Raton', 'Zorro'];
const list = document.querySelector('#list');

/*animales.forEach(animal=> {
    let item = document.createElement('li'); //<l></li>
    item.textContent = animal; //<li>perros></li>
    list.appendChild(item); //agrega a la lista del html
});*/


animales.forEach(function(animal, index) {
    let item = document.createElement('li'); 
    item.textContent =  `${index+1} ${animal}`;
    list.appendChild(item); 
});
/* var parrafos = document.getElementsByClassName('parrafo');
console.log(parrafos);

document.getElementsByClassName('parrafo')[0].innerHTML = 'Parrafo cambiado dinamicamente';

document.getElementById('parrafo2').innerHTML = 'Soy el parrafo 2' */

document.querySelectorAll('.parrafo')[1].textContent = 'Nuevo texto de parrafo';
document.querySelector('#parrafo1').textContent = 'esta es para id';

var parrafo1 = document.querySelectorAll('.parrafo')[0];
var parrafo2 = document.querySelector('#parrafo2');

console.log(document)
console.log(document.head);
console.log(document.body);
console.log(parrafo1);
console.log(parrafo2);
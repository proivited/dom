function agregar (arreglo) { //funcion para no repetir codigo

arreglo.forEach(function(contenido,index){

    let item = document.createElement('li'); 
    item.textContent =  `${index+1} ${contenido}`; //es lo que rellena
    list.appendChild(item); 

});
}
//se declaran constantes ver que la list cambia 
const animales = ['Perro', 'Gato', 'Mapache', 'Pez', 'Leopardo', 'Raton', 'Zorro'];
const list = document.querySelector('#listAnimales');
const companeros = ['Jaquie','Yannie','Joel','Luz','Yomerengues','Ana','Luis','Felipe'];
const list2 = document.querySelector('#listCompaneros');
const computadoras = ['Mac','Lenovo','Asus','Cromebook','otra','otra','mas4paradiez'];
const list3 = document.querySelector('#listComputadoras');

let button = document.querySelector('#button1');
button.addEventListener('click', event => {
    agregar(animales);
})

let button2 = document.querySelector('#button2');
button2.addEventListener('click', event => {
    agregar(companeros);
})

let button3 = document.querySelector('#button3');
button3.addEventListener('click', event => {
    agregar(computadoras);
})




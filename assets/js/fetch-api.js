 //para trabajar promesas se convierte en formato con el then
let button = document.querySelector('#button');
button.addEventListener('click', () => {  
    let apiFetch = fetch('https://api.thecatapi.com/v1/images/search'); //cada api lo hace diferente
    apiFetch 
    .then(resp => resp.json()) //json es java scrip objet algo XD 
    .then(data =>{
        let cat = document.querySelector('#cat'); //aqui es lo del id de la imagen
        cat.src = data[0].url; //aqui seleccionamos los datos de la api 0 es objeto y url es elemento
        console.log(data[0].url);
    }) .catch(e => console.log(e)); //por si falla la promesa
});
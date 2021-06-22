//el evento se dispara cuando el documento esta cargado
window.onload = function () {
   let nameInput = document.querySelector('#nameInput');

nameInput.addEventListener('keyup', function(event){ //keydown, change para el elemento guardado
    console.log(nameInput.value);
  // console.log(event.target.value);
});

let button = document.querySelector('#button');
button.addEventListener('click', event => {
    let nameHeader = document.querySelector('#nameH');
    nameHeader.textContent = nameInput.value;
}); 
}






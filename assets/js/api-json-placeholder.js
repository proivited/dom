let btnUsers = document.querySelector('#btnUsers');
let divUsers = document.querySelector('#divUsers');

//comentado por que la funcion activa hace lo "mismo"

/*btnUsers.addEventListener('click', () =>{
    let getUsers = fetch('https://jsonplaceholder.typicode.com/users');

    getUsers
        .then(resp => resp.json())
        .then(data => {
            //console.log(data) sirve para ver todo en consola de los datos
            data.forEach(user => {
                let parr = document.createElement('p');  
                parr.textContent = user.name;
                divUsers.appendChild(parr);
            });
            
        }).catch(e => console.log(e));
})*/

btnUsers.addEventListener('click', displayData);
async function displayData(){
    let getUsers = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log(getUsers.ok);
    
    let data = await getUsers.json();
    
    data.forEach(user => {
        let parr = document.createElement('p');  
        parr.textContent = `Nommbre de usuario ${user.name} Email ${user.email} ciudad ${user.address.city} numero ${user.phone}`;
        divUsers.appendChild(parr);
    });

    console.log(data);
    
    //return data; //retorna nuestra funcion para usarla por fuera
}

/*async function otraFuncion(){  //esto ayuda a regresar la funcion de fuera 
    console.log(await displayData());  //recordar que el await detiene el codigo en espera
}

otraFuncion();*/

//console.log(displayData());

//displayData();
const listAnimals = ['cacatua','otro','y otro'];
const listComputers = ['Asus','otro','y otro'];
const listPeople = ['Miguel','otro','y otro'];

const btnAnimal = document.querySelector('#animals');
const btnComputers = document.querySelector('#computers');
const btnPeople = document.querySelector('#people');
const list = document.querySelector('#list');


function displayList(lists){
    list.textContent = '';
    lists.forEach(l => {
        const item = document.createElement('li');
        item.textContent = l;
        list.appendChild(item);
    });
}

btnAnimal.addEventListener('click', () =>{
    displayList(listAnimals);
});
btnComputers.addEventListener('click', () =>{
    displayList(listComputers);
})

btnPeople.addEventListener('click', () =>{
    displayList(listPeople);
})








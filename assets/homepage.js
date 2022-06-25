var submitBtnEl = document.getElementById('submitBtn')
var animalTypeEl = document.getElementById('animal-type')
var searchLocationEl = document.getElementById('findlocate')

function animalSearchHandler(event){
    event.preventDefault();

     localStorage.setItem('initalAnimalType', animalTypeEl.value)
     localStorage.setItem('initialSearchLocation', searchLocationEl.value)

     document.location.href='./animal-search.html';
}

submitBtnEl.addEventListener('click', animalSearchHandler)

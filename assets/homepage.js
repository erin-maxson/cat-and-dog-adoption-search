var submitBtnEl = document.getElementById('submitBtn')
var animalTypeEl = document.getElementById('animal-type')
var searchLocationEl = document.getElementById('findlocate')

// function for handling search selections and redirect to search results
function animalSearchHandler(event){
    event.preventDefault();

    // set user search preferences in local storage
     localStorage.setItem('initialAnimalType', animalTypeEl.value)
     localStorage.setItem('initialSearchLocation', searchLocationEl.value)

     // redirect to search page to display results
     document.location.href='./animal-search.html';
}

// event listener for search submit
submitBtnEl.addEventListener('click', animalSearchHandler)
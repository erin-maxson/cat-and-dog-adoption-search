var catsBtnEl = document.getElementById('catsBtn')
var dogsBtnEl = document.getElementById('dogsBtn')
var submitBtnEl = document.getElementById('submitBtn')

// stores search preference for cats and redirects to search page
function searchCats(){
    sessionStorage.setItem('animal', 'cat')
    document.location.href = 'animal-search.html'
}

// stores search preference for dogs and redirects to search page
function searchDogs(){
    sessionStorage.setItem('animal', 'dog')
    document.location.href = 'animal-search.html'
}

// event listeners for cat and dog buttons
catsBtnEl.addEventListener('click', searchCats);
dogsBtnEl.addEventListener('click', searchDogs);
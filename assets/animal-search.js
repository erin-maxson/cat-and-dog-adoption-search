var animalCardContainerEl = document.getElementById('animal-card-container')
var resultsEl = document.getElementById('results')
var animalTypeEl = document.getElementById('animalType')
var animalAgeEl = document.getElementById('animalAge')
var animalSizeEl = document.getElementById('animalSize')
var animalGenderEl = document.getElementById('animalGender')
var findLocateEl = document.getElementById('findlocate')
var submitBtnEl = document.getElementById('submitBtn')
var numPetsTextEl = document.getElementById('num-pets-text')
var loadMoreBtnEl = document.getElementById('loadMoreBtn')

// stores access token
var accessToken;

// results to show per page
var resultsPerPage = 20;
var pageCount = 1;

// inital tokenRequest
function init() {
    tokenRequest();
}

// fetch request for authorization token
function tokenRequest() {
    return fetch("https://api.petfinder.com/v2/oauth2/token", {
        method: "POST",
        body: JSON.stringify({
            "grant_type": "client_credentials",

            //client id and client secret are tied to petfinder account
            "client_id": "Zzxet4zxY6hMq4jnp00K1VYVnFud7GgUIP1FL9IV8SZ1SfAa6e",
            "client_secret": "Es5DnZkRubR4t3eWLae0rKo1FBcuP9qjxEy0wX5C"
        }),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (currentData) {
            // set the access token equal to what the server gives us
            var tempAccessToken = currentData.access_token;
            sessionStorage.setItem('token', tempAccessToken)
        })
}

// retreives animal information from api
function animalSearch(event) {
    event.preventDefault();

    var currentUrl = `https://api.petfinder.com/v2/animals?type=${animalTypeEl.value}&age=${animalAgeEl.value}&size=${animalSizeEl.value}&gender=${animalGenderEl.value}&page=${pageCount}&limit=100`;

    accessToken = sessionStorage.getItem('token');
    fetch(currentUrl, {
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': 'application/json',
        }
    })

        .then(function (response) {
            return response.json();
        })
        .then(function (currentData) {
            console.log(currentData)

            // display the animals' information
            drawAnimalCards(currentData.animals.filter(filterByNamePhoto))
        })
}

// filters currentData by animals that have a photo and no numbers in their name
function filterByNamePhoto(animal) {

    if (animal.primary_photo_cropped?.small && !(/\d/.test(animal.name))) {
        return true;
    }
    else {
        return false;
    }
}

function loadMore(event){
    pageCount++;
    animalCardContainerEl.innerHTML = '';
    resultsEl.innerHTML = '';
    animalSearch(event);
}

// displays the animals information in a card
function drawAnimalCards(animal) {
    console.log(animal)

    // displays number of results
    resultsEl.textContent = 'Number of Pets Found: ' + animal.length;

    // for as many results we want to display on a page (18)
    for (let i = 0; i < animal.length; i++) {
        // create the animal card, set it's attributes and contents
        var animalCard = document.createElement('div');
        animalCard.setAttribute('class', 'animal-card');
        animalCard.innerHTML =
            `<div class=“card-user-profile cell medium-3">
        <img id=“animal-photo” class=“card-user-profile-img”
        ${(() => {
                if (animal[i].primary_photo_cropped.small != null && animal[i].primary_photo_cropped.small != undefined) {
                    return `
              src='${animal[i].primary_photo_cropped.small}'
              `
                }
                else {
                    return `src='./assets/images/dogs.jpg'`
                }
            })()}
            src=“https://images.pexels.com/photos/5439/earth-space.jpg?h=350&auto=compress&cs=tinysrgb”
            alt=“picture of adoptable pet” />
        <div class=“card-user-profile-content card-section”>
            <p id=“animal-name” class=“card-user-profile-name”>${animal[i].name}</p>
            <p id=“animal-location” class=“card-user-profile-status”>${animal[i].contact.address.city}, ${animal[i].contact.address.state}</p>
            <ul class=“card-user-profile-info”>
                <li>Age: <span id=“age”>${animal[i].age}</span></li>
                <li>Size: <span id=“size”>${animal[i].size}</span></li>
                <li>Breed: <span id=“breed”>${animal[i].breeds.primary}</span> </li>
                <li>Gender: <span id=“gender”>${animal[i].gender}</span></li>
                <li>Spayed/Neutered: <span id=“fixed”>${(() => {
                if (animal[i].attributes.spayed_neutered === true) {
                    return `Yes`
                }
                else {
                    return `No`
                }
            })()}</span></li>
            </ul>
        </div>
        <div class=“card-user-profile-actions”>
            <a href=${animal[i].url} id=“moreInfoBtn” class=“card-user-profile-button button hollow”>ADOPT ME</a>
        </div>
    </div>`;

        // append the animal card
        animalCardContainerEl.appendChild(animalCard);
    }
}

// start-up function
init();

submitBtnEl.addEventListener('click', animalSearch);
loadMoreBtnEl.addEventListener('click', loadMore);
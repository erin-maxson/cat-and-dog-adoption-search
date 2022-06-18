var catFactsEl = document.getElementById('catFacts')

// fetches cat facts from the meowfacts api
fetch('https://meowfacts.herokuapp.com/')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // log the data then change catFactsEl text content to the fact from the api
        console.log(data);
        catFactsEl.textContent = data.data;
    })

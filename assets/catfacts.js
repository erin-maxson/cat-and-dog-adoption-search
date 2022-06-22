var catFactsEl = document.getElementById('catFacts')

var factContainsInvalid;
var factContainsUnsubscribe;

// fetches cat facts from the meowfacts api
function grabCatFact() {
    fetch('https://meowfacts.herokuapp.com/')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // log the data
        console.log(data);

        // check for invalid cat facts
        factContainsInvalid = data.data[0].includes('Invalid');
        factContainsUnsubscribe = data.data[0].includes('tj3G5de$se')


        // if any cases are true
        if (factContainsInvalid || factContainsUnsubscribe) {
            // is not a valid fact
            grabCatFact();
        }
        else {
            // is a valid fact
            catFactsEl.textContent = data.data;
        }
        console.log(validFact)
    })
}

grabCatFact();
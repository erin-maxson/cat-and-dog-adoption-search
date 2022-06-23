var catFactsEl = document.getElementById('catFacts')

var factContainsInvalid;
var factContainsUnsubscribe;
var factContainsLowerUnsub;

// fetches cat facts from the meowfacts api
function grabCatFact() {
    fetch('https://meowfacts.herokuapp.com/')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // check for invalid cat facts
        factContainsInvalid = data.data[0].includes('Invalid');
        factContainsUnsubscribe = data.data[0].includes('tj3G5de$se');
        factContainsLowerUnsub = data.data[0].includes('unsubscribe?')


        // if any cases are true
        if (factContainsInvalid || factContainsUnsubscribe || factContainsLowerUnsub) {
            // is not a valid fact
            grabCatFact();
        }
        else {
            // is a valid fact
            catFactsEl.textContent = data.data;
        }
    })
}

grabCatFact();
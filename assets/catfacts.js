var catFactsEl = document.getElementById('catFacts')




fetch('https://meowfacts.herokuapp.com/')
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        console.log(data);
        catFactsEl.textContent = data.data;
    })

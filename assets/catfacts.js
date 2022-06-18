var meowFactsAPI = url('https://meowfacts.herokuapp.com/')


fetch('meowFactsAPI')
.then(response => response.json())
.then(data => console.log(data));



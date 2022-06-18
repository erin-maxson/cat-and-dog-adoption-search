fetch('https://meowfacts.herokuapp.com/')
.then(response => response.json())
.then(data => console.log(data));

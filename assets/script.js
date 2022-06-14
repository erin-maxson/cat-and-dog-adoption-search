var accessToken;

function init(){
    tokenRequest();
}


// fetch request for authorization token
function tokenRequest() {
    fetch("https://api.petfinder.com/v2/oauth2/token", {
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
            accessToken = currentData.access_token;
            console.log(accessToken)
        })
}

function animalSearch(accessToken) {
    fetch("https://api.petfinder.com/v2/animals?type=dog&page=2", {
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
        })
}

function (drawAnimalCards)

init();


// curl - H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJaenhldDR6eFk2aE1xNGpucDAwSzFWWVZuRnVkN0dnVUlQMUZMOUlWOFNaMVNmQWE2ZSIsImp0aSI6IjBlNDY2NDAyNzNiMTk0NTVjOWRkOTM3OWE4N2VkMDU0ZGY3YzhkYjdiNWNiYmIwYjNkNTA4YTY1OTQwMzNkODQyM2YwOTE2NTk4ZTU2MGIyIiwiaWF0IjoxNjU1MTcxMzUzLCJuYmYiOjE2NTUxNzEzNTMsImV4cCI6MTY1NTE3NDk1Mywic3ViIjoiIiwic2NvcGVzIjpbXX0.K-kBNKK-fjVjeH3Z6g_oHidaAoH0EUVq1ihtZSuoWV2vE1EDbB5qsXxVCbNMQ5m_acTxDd53MzzJMS3P_n9kgiRCC7f70qeqOCNm-W9RWVwX_w77LeU9Eyv4PkxsZR1Ihh8to2q6YO-36onmUAoDqyYCWLe_fs0ZUXh2UciAAJkVlU6U_QP5DmbBlUIivlqExpXiZEvrg23hXcU6ZlzLwflOsRupnJVFo1XYR66Q61ky8rbI0qPCCnXVcga_BI0aNkNhs1vdl1uovgbRHzMSoRw7i6rUEIL5IYtMOSSRH6Ps2qFjmRmtuMkvQxDY0giPAI-qHu_l4nO-R02khK3NL" https://api.petfinder.com/v2/animals?type=dog&page=2
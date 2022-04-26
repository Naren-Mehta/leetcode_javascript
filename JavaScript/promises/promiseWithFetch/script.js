fetch('http://www.omdbapi.com/?s=batman&y=2018&apikey=83325855')
    .then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
    });

// In ES6

// fetch('http://www.omdbapi.com/?s=superman&y=2018&apikey=83325855')
//     .then(response => response.json())
//     .then(data => console.log(data));
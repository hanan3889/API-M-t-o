let ville;
recevoirTemperature(ville);

// let changerDeVille = document.querySelector('#changer');

// changerDeVille.addEventListener('click', () =>{
//     ville = prompt('Which city would you like to see ? ');
//     recevoirTemperature(ville);
// })

// function recevoirTemperature(ville){
//     const url = 'https://api.openweathermap.org/data/2.5/weather?q='
//     + ville + '&appid=558943e66503455f250afa6808ed2879&units=metric';

//     //créer un objet
//     let requete = new XMLHttpRequest();
//     requete.open('GET', url);
//     requete.responseType = 'json';
//     requete.send();

//     requete.onload = function() {
//         if (requete.readyState === XMLHttpRequest.DONE) {
//             if (requete.status === 200) {
//                 let reponse = requete.response;
//                 let temperature = reponse.main.temp;
//                 let ville       = reponse.name;
//                 document.querySelector('#temperature_label').textContent = temperature;
//                 document.querySelector('#ville').textContent = ville;
//             }
//         }
//         else {
//             alert('A problem has occurred, please come back later.')
//         }
//     }
// }

if ("geolocation" in navigator) {
    navigator.geolocation.watchPosition(
        (position) => {
            const url =
                "https://api.openweathermap.org/data/2.5/weather?lon=" +
                position.coords.longitude +
                "&lat=" +
                position.coords.latitude +
                "&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric";
            console.log(url);

            let requete = new XMLHttpRequest(); // Nous créons un objet qui nous permettra de faire des requêtes
            requete.open("GET", url); // Nous récupérons juste des données
            requete.responseType = "json"; // Nous attendons du JSON
            requete.send(); // Nous envoyons notre requête

            // Dès qu'on reçoit une réponse, cette fonction est executée
            requete.onload = function () {
                if (requete.readyState === XMLHttpRequest.DONE) {
                    if (requete.status === 200) {
                        let reponse = requete.response;
                        // console.log(reponse);
                        let temperature = reponse.main.temp;
                        let ville = reponse.name;
                        // console.log(temperature);
                        document.querySelector(
                            "#temperature_label"
                        ).textContent = temperature;
                        document.querySelector("#ville").textContent = ville;
                    } else {
                        alert(
                            "A problem has occurred, please come back later."
                        );
                    }
                }
            };
        },
        error,
        options
    );
} else {
    villeChoisie = "Paris";
    recevoirTemperatur(villeChoisie);
}

var options = {
    enableHighAccuracy: true,
};

let changerDeVille = document.querySelector("#changer");
changerDeVille.addEventListener("click", () => {
    villeChoisie = prompt("Which city would you like to see ?");
    recevoirTemperature(villeChoisie);
});

function error() {
    villeChoisie = "Paris";
    recevoirTemperature(villeChoisie);
}
function recevoirTemperature(ville) {
    const url =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        ville +
        "&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric";

    let requete = new XMLHttpRequest(); // Nous créons un objet qui nous permettra de faire des requêtes
    requete.open("GET", url); // Nous récupérons juste des données
    requete.responseType = "json"; // Nous attendons du JSON
    requete.send(); // Nous envoyons notre requête

    // Dès qu'on reçoit une réponse, cette fonction est executée
    requete.onload = function () {
        if (requete.readyState === XMLHttpRequest.DONE) {
            if (requete.status === 200) {
                let reponse = requete.response;
                // console.log(reponse);
                let temperature = reponse.main.temp;
                let ville = reponse.name;
                // console.log(temperature);
                document.querySelector("#temperature_label").textContent =
                    temperature;
                document.querySelector("#ville").textContent = ville;
            } else {
                alert("A problem has occurred, please come back later.");
            }
        }
    };
}

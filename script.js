let ville = "Paris";

const url = 'https://api.openweathermap.org/data/2.5/weather?q=' 
+ ville + '&appid=558943e66503455f250afa6808ed2879&units=metric';

//créer un objet
let requete = new XMLHttpRequest();
requete.open('GET', url);
requete.responseType = 'json';
requete.send();

requete.onload = function() {
    if (requete.readyState === XMLHttpRequest.DONE) {
        if (requete.status === 200) {
            let reponse = requete.response;
            let temperature = reponse.main.temp;
            document.querySelector('#temperature_label').textContent = temperature;
            console.log(temperature);
        }
    }
}

let ville = "Paris";
recevoirTemperature(ville);



let changerDeVille = document.querySelector('#changer');

changerDeVille.addEventListener('click', () =>{
    ville = prompt('Which city would you like to see ? ');
    recevoirTemperature(ville);
})


function recevoirTemperature(ville){
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
                let ville       = reponse.name;
                console.log(ville);    
                document.querySelector('#temperature_label').textContent = temperature;
                document.querySelector('#ville').textContent = ville;
            }
        }
        else {
            alert('A problem has occurred, please come back later.')
        }
    }
}



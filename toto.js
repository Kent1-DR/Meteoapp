async function meteo (inputValue) {
try {
    const response = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${inputValue}`, options);

    if (response.ok) {
        var data = await response.json();
    } else if (response.status === 400) {
        errormessage.textContent = "Entrer une ville existante";
        throw new Error("Ville invalide");
    } else {
        errormessage.textContent = "Impossible d'afficher les infos";
        throw new Error("Erreur, impossible d'afficher les infos");
    }

    console.log(data);
    

  } catch (err) {
    console.error(err);

    errormessage.innerHTML = `Impossible d'afficher les infos météo, <br> Entrer une ville existante`; // Shows an error message if the fetch fails
  }

  return document
}

module.exports = meteo;
const formsubmit = document.querySelector("form");
const errormessage = document.querySelector(".error");
const city = document.querySelector("#city");

formsubmit.addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevents the form from submitting and refreshing the page

  const inputValue = document.querySelector("input").value.trim();
  if (inputValue === "") {
    errormessage.textContent = "Entrer une ville";
    return;
  }

  errormessage.textContent = "";

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '916d2df44emsh40dd21cb4cfc667p132195jsn434e8686479d',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };

  errormessage.textContent = "Chargement....";

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

    errormessage.innerHTML = `Météo pour : <Span id="city">${inputValue}</Span>`;
    document.querySelector("#temp").innerHTML = data.temp + "°C";
    document.querySelector("#min_temp").innerHTML = data.min_temp + "&#176;";
    document.querySelector("#max_temp").innerHTML = data.max_temp + "&#176;";
    document.querySelector("#feels_like").innerHTML = data.feels_like + "°C";
    document.querySelector("#humidity").innerHTML = data.humidity;
    document.querySelector("#sunrise").innerHTML = "Levé de soleil: " + new Date(data.sunrise * 1000).toLocaleTimeString();
    document.querySelector("#sunset").innerHTML = "Couché de soleil: " + new Date(data.sunset * 1000).toLocaleTimeString();
    document.querySelector("#windspeed").innerHTML = data.wind_speed + "m/s";
    document.querySelector("#wind_degrees").innerHTML = data.wind_degrees + "&#176;";
  } catch (err) {
    console.error(err);

    errormessage.innerHTML = ``; // Shows an error message if the fetch fails
  }
});
// Je vais utiliser l'API de https://open-meteo.com/en/docs pour récupérer la météo des lieux clefs de chaque voyage proposé

document.addEventListener("DOMContentLoaded", () => {
  // L'API retournant un code météo, je les convertis en pictogrammes
  function getWeatherIcon(code) {
    if (code === 0) return "☀️";
    if (code === 1 || code === 2 || code === 3) return "⛅";
    if (code === 45 || code === 48) return "🌫️";
    if (code === 51 || code === 53 || code === 55) return "🌦️";
    if (code === 61 || code === 63 || code === 65) return "🌧️";
    if (code === 71 || code === 73 || code === 75) return "🌨️";
    if (code === 95) return "⛈️";
    return "❓";
  }

  // Je stocke une liste des lieux avec leurs coordonnées et l'id du conteneur HTML correspondant
  const locations = [
    {
      id: "weather__mountain",
      name: "La Clusaz",
      lat: 45.9042,
      lon: 6.4231,
    },
    {
      id: "weather__california",
      name: "Los Angeles",
      lat: 34.0522,
      lon: -118.2437,
    },
    {
      id: "weather__hossegor",
      name: "Hossegor",
      lat: 43.6656,
      lon: -1.4400,
    },
    {
      id: "weather__jura",
      name: "Lons-le-Saunier",
      lat: 46.6745,
      lon: 5.5567,
    },
    {
      id: "weather__newyork",
      name: "New York",
      lat: 40.7128,
      lon: -74.0060,
    },
    {
      id: "weather__horseshoe",
      name: "Horseshoe Bend",
      lat: 32.7668,
      lon: -96.5992,
    },
  ];

  // Je crée une boucle (for of), pour utiliser un même conteneur type et afficher les bonnes données pour chaque lieu dans chaque conteneur (qui a son propre id)
  for (const loc of locations) {
    const container = document.getElementById(loc.id);

    // J'utilise une fonction asynchrone auto-appelée pour chaque lieu, et l'englobe dans un try catch
    (async () => {
      try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${loc.lat}&longitude=${loc.lon}&current_weather=true`);
        const data = await response.json();
        const weather = data.current_weather;
        container.innerHTML = `
          <strong>Météo sur place :</strong><br>
          ${getWeatherIcon(weather.weathercode)} ${weather.temperature}°C<br>
        `;

        // S'il y a une erreur, je n'affiche rien dans le conteneur HTML
      } catch (error) {
        container.textContent = "";
      }
    })();
  }
});
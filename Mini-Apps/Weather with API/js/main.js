var input = document.getElementById('input');
var btn = document.getElementById('find');
var temperature = document.getElementById('temperature');
var locationContainer = document.getElementById('location');
var minTempContainer = document.getElementById('minTemp');
var maxTempContainer = document.getElementById('maxTemp');
var windSpeedContainer = document.getElementById('windSpeed');
var descContainer = document.getElementById('temperature-description');
var img = document.getElementById('icon');
var notification = document.getElementById('notification');
var tip = document.getElementById('tip');
tip.style.visibility = "visible";


function wmoToIcon(code, isDay) {
  var suffix = isDay ? 'd' : 'n';
  if (code === 0) return '01' + suffix;
  if (code === 1 || code === 2) return '02' + suffix;
  if (code === 3) return '04' + suffix;
  if (code >= 45 && code <= 48) return '50' + suffix;
  if (code >= 51 && code <= 67) return '10' + suffix;
  if (code >= 71 && code <= 77) return '13' + suffix;
  if (code >= 80 && code <= 82) return '09' + suffix;
  if (code >= 85 && code <= 86) return '13' + suffix;
  if (code >= 95 && code <= 99) return '11' + suffix;
  return '01' + suffix;
}

// Check if it's daytime from ISO time string (e.g. "2026-02-01T18:45")
function isDayFromTime(isoTime) {
  if (!isoTime) return true;
  var hour = parseInt(isoTime.slice(11, 13), 10);
  return hour >= 6 && hour < 18;
}

// Human-readable description from WMO code
function wmoToDescription(code) {
  var desc = {
    0: 'Clear sky',
    1: 'Mainly clear',
    2: 'Partly cloudy',
    3: 'Overcast',
    45: 'Foggy',
    48: 'Depositing rime fog',
    51: 'Light drizzle',
    53: 'Moderate drizzle',
    55: 'Dense drizzle',
    61: 'Slight rain',
    63: 'Moderate rain',
    65: 'Heavy rain',
    71: 'Slight snow',
    73: 'Moderate snow',
    75: 'Heavy snow',
    80: 'Slight rain showers',
    81: 'Moderate rain showers',
    82: 'Violent rain showers',
    85: 'Slight snow showers',
    86: 'Heavy snow showers',
    95: 'Thunderstorm',
    96: 'Thunderstorm with slight hail',
    99: 'Thunderstorm with heavy hail'
  };
  return desc[code] || 'Unknown';
}

async function getWeather() {
  var query = (input.value || '').trim();
  if (!query) {
    showError();
    return;
  }

  try {
    // 1. Geocode city name → lat, lon (Open-Meteo, no API key)
    var geoUrl = 'https://geocoding-api.open-meteo.com/v1/search?name=' + encodeURIComponent(query) + '&count=1';
    var geoRes = await fetch(geoUrl);
    var geoData = await geoRes.json();

    if (!geoData.results || geoData.results.length === 0) {
      showError();
      return;
    }

    var loc = geoData.results[0];
    var lat = loc.latitude;
    var lon = loc.longitude;
    var locationName = loc.name + ', ' + loc.country;

    // 2. Get weather (Open-Meteo, no API key) – do not request 'time' (can trigger API error)
    var weatherUrl = 'https://api.open-meteo.com/v1/forecast?latitude=' + lat + '&longitude=' + lon +
      '&current=temperature_2m,weather_code,wind_speed_10m&daily=temperature_2m_min,temperature_2m_max';
    var weatherRes = await fetch(weatherUrl);
    var data = await weatherRes.json();

    if (!data.current) {
      showError();
      return;
    }

    notification.style.display = 'none';

    var current = data.current;
    var daily = data.daily;
    var cels = Math.round(current.temperature_2m);
    var farh = Math.round((cels * 1.8) + 32);
    var minTemp = daily.temperature_2m_min ? Math.round(daily.temperature_2m_min[0]) : cels;
    var maxTemp = daily.temperature_2m_max ? Math.round(daily.temperature_2m_max[0]) : cels;
    var windSpeed = Math.round(current.wind_speed_10m || 0);
    var weatherCode = current.weather_code || 0;
    var isDay = current.time != null ? isDayFromTime(current.time) : true;
    var iconName = wmoToIcon(weatherCode, isDay);
    var desc = wmoToDescription(weatherCode);

    locationContainer.innerHTML = locationName;
    descContainer.innerHTML = desc;
    minTempContainer.innerHTML = 'Min: ' + minTemp + '°C';
    maxTempContainer.innerHTML = 'Max: ' + maxTemp + '°C';
    windSpeedContainer.innerHTML = windSpeed + ' km/h';
    img.src = 'icons/' + iconName + '.png';
    img.alt = desc;

    var degree = ['°F', '°C'];
    temperature.innerHTML = cels + degree[1];

    var flag = true;
    temperature.onclick = function () {
      if (flag) {
        temperature.innerHTML = farh + degree[0];
      } else {
        temperature.innerHTML = cels + degree[1];
      }
      flag = !flag;
    };

    tip.ondblclick = function () {
      tip.style.visibility = 'hidden';
    };
  } catch (err) {
    console.error(err);
    showError();
  }
}

function showError() {
  notification.style.display = 'block';
  temperature.innerHTML = '?? ??';
  descContainer.innerHTML = 'Search a State/City';
  locationContainer.innerHTML = 'Unknown';
  img.src = 'icons/unknown.png';
  windSpeedContainer.innerHTML = '???';
  maxTempContainer.innerHTML = '???';
  minTempContainer.innerHTML = '???';
}

// Search on Enter key
input.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') getWeather();
});

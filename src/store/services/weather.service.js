import axios from "axios";

const API_KEY = '5cd8941082abe243ed4d89243b916e5a';

export default {
  getWeather({lat, lon}) {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    console.log(url);
    return axios
      .get(url)
      .then(r => r);
  }
};




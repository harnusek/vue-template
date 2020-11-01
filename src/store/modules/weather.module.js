import weatherService from "../services/weather.service";

const state = {
  weather: {
    "coord":{
      "lon":0,
      "lat":0
    },
    "weather":[
      {
        "id":1,
        "main":"main",
        "description":"description",
        "icon":"10d"
      }
    ],
    "base":"stations",
    "main":{
      "temp":0,
      "feels_like":0,
      "temp_min":0,
      "temp_max":0,
      "pressure":0,
      "humidity":0
    },
    "visibility":0,
    "wind":{
      "speed":0,
      "deg":0
    },
    "rain":{
      "1h":0
    },
    "clouds":{
      "all":9
    },
    "dt":0,
    "sys":{
      "type":0,
      "id":0,
      "country":"COUNTRY",
      "sunrise":0,
      "sunset":0
    },
    "timezone":0,
    "id":0,
    "name":"Town",
    "cod":0
  }

};

const mutations = {
  updateWeather(state, position) {
    weatherService.getWeather(position).then(r => {
      state.weather = r.data
    })
  }
};

export const weather = {
  namespaced: true,
  state,
  mutations
};

import Vue from "vue";
import Vuex from "vuex";

import { albums } from "./modules/albums.module";
import { weather } from "./modules/weather.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    albums,
    weather
  }
});

import Vue from "vue";
import Vuex from "vuex";

import { albums } from "./modules/albums.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    albums
  }
});

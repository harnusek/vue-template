 <template>
   <div>
     <v-overlay
         :absolute="true"
         :value="overlay"
     >
       <v-img
           src="../assets/loading.gif"
       ></v-img>
     </v-overlay>
     <v-card
        class="mx-auto"
        max-width="400"
    >
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline">
            {{ weather.name }}, {{ weather.sys.country }}
          </v-list-item-title>
          <v-list-item-subtitle>
            <b>{{ timedate }}</b>
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            {{ weather.weather[0].description }}
          </v-list-item-subtitle>
          <br>
          <v-list-item-subtitle>
            sunrise: {{ new Date(weather.sys.sunrise * 1000).toLocaleTimeString() }}
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            sunset: {{ new Date(weather.sys.sunset * 1000).toLocaleTimeString() }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-card-text>
        <v-row align="center">
          <v-col
              class="display-3"
              cols="6"
          >
            {{ (weather.main.temp - 272.15).toFixed(1) }}&deg;C
          </v-col>
          <v-col cols="6">
            <v-img
                v-bind:src="'http://openweathermap.org/img/wn/'+ this.weather.weather[0].icon + '@2x.png'"
                width="150"
            ></v-img>
          </v-col>
        </v-row>
      </v-card-text>

      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-weather-windy</v-icon>
        </v-list-item-icon>
        <v-list-item-subtitle>{{ weather.wind.speed }} m/s</v-list-item-subtitle>
      </v-list-item>

      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-water-percent</v-icon>
        </v-list-item-icon>
        <v-list-item-subtitle>{{ weather.main.humidity }}%</v-list-item-subtitle>
      </v-list-item>

      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-weight-kilogram</v-icon>
        </v-list-item-icon>
        <v-list-item-subtitle>{{ weather.main.pressure }}hPa</v-list-item-subtitle>
      </v-list-item>
    </v-card>
   </div>
</template>


<script>
import moment from 'moment';

export default {
  data: () => ({
    timedate: moment().format('hh:mm:ss, dddd DD.MM. YYYY'),
    overlay: true,
    position: {
      lat: 0,
      lon: 0
    }
  }),
  computed: {
    hint() {
      return JSON.stringify(this.weather, null, 4);
    },
    weather() {
      return this.$store.state.weather.weather;
    }
  },
  beforeCreate() {
    setInterval(() => {
      this.timedate = moment().format('hh:mm:ss, dddd DD.MM. YYYY')
    }, 1000);

    navigator.geolocation.getCurrentPosition((position => {
      this.position = {
        lat: position.coords.latitude,
        lon: position.coords.longitude
      };
      this.$store.commit("weather/updateWeather", this.position);
      this.overlay = false;
    }));

    // setInterval(() => this.$store.commit("weather/updateWeather", this.position), 10000);

  }
}
</script>

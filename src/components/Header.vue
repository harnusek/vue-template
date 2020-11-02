<template>
  <div>
    <router-link to="/admin" style="color: grey; text-decoration: none;">
      <v-icon to="/admin">mdi-account-circle</v-icon>
      Log in
    </router-link>
    <v-card color="white">
      <v-card-title v-on:click="clickH2()" class="text-center justify-center py-6">
        <h1 class="font-weight-bold display-3 basil--text">
          Vue template
        </h1>
      </v-card-title>
      <h2 v-if="mouse">Vue is awesome!</h2>
      <v-tabs
          v-model="tab"
          background-color="transparent"
          color="basil"
          grow
      >
        <v-tab
            v-for="item in items"
            :key="item.tab"
            :to="item.path"
        >
          {{ item.tab }}
        </v-tab>
        <v-tab-item
            v-for="item in items"
            :key="item.tab"
        >
          <h2>{{ item.text }}</h2>
        </v-tab-item>
      </v-tabs>
    </v-card>

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "Header",

  data: () => ({
    mouse: false,
    tab: 1,
    items: [
      {tab:'Counter', text:'Reactive counter', path: '/counter'},
      {tab:'Albums', text:'Super table conected with API', path: '/albums'},
      {tab:'Photos', text:'Boring banner', path: '/photos'},
      {tab:'Bark', text:'Dog is such reactive', path: '/bark'},
      {tab:'Weather', text:'Connected to openweathermap.org API', path: '/weather'},
    ],
    text: 'Just testing',
  }),
  methods: {
    clickH2() {
      this.mouse = !this.mouse
    }
  }
}
</script>

<style>w
/* Helper classes */
.basil {
  background-color: #FFFBE6 !important;
}
.basil--text {
  color: teal !important;
}
h2 {
  text-align: center;
  background-color: lightgray;
}
</style>

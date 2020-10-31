<template>
  <div>
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
            :key="item"
        >
          {{ item.tab }}
        </v-tab>
        <v-tab-item
            v-for="item in items"
            :key="item"
        >
          <h2>{{ item.text }}</h2>
        </v-tab-item>
      </v-tabs>
    </v-card>

    <Counter v-if="tab==0"></Counter>
    <Table v-if="tab==1"></Table>
    <Photos v-if="tab==2"></Photos>

  </div>
</template>

<script>
import Counter from './Counter';
import Table from './Albums';
import Photos from "./Photos";

export default {
  name: "Header",

  components: {
    Counter,
    Table,
    Photos
  },

  data: () => ({
    mouse: false,
    tab: null,
    items: [
      {tab:'Counter', text:'Reactive counter'},
      {tab:'Albums', text:'Super table conected with API'},
      {tab:'Photos', text:'Boring banner'},
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

<style>
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

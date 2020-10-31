<template>
<div>
  <v-img
      v-on:click="bark()"
      lazy-src="../assets/dog.jpg"
      max-height="300"
      max-width="362"
      src=""
  ></v-img>
  <v-img
      v-on:click="bark2()"
      lazy-src="../assets/dog2.png"
      max-height="300"
      max-width="362"
      src=""
  ></v-img>
</div>
</template>

<script>

export default {
  data: () => ({
  //
  }),
  methods: {
    bark() {
      console.log('bark')
      new Audio( require('../assets/bark.mp3') ).play();
    },
    bark2() {
      console.log('bark2')
      new Audio( require('../assets/bark2.mp3') ).play();
    }
  }
}
</script>

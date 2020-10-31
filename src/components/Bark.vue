<template>
<div>
  <v-card
      max-height="500"
      max-width="500"
      :class="{'bounce animated': animated}"
      @animationend="animated = false"
  >
    <v-img
        v-on:click="bark()"
        lazy-src="../assets/dog.png"
        src=""
    ></v-img>
  </v-card>>

  <v-card
      max-height="500"
      max-width="500"
      :class="{'bounce animated': animated2}"
      @animationend="animated2 = false"
  >
    <v-img
        v-on:click="bark2()"
        lazy-src="../assets/dog2.png"
        src=""
    ></v-img>
  </v-card>>
</div>
</template>



<script>

export default {
  data: () => ({
    animated: false,
    animated2: false
  }),
  methods: {
    bark() {
      console.log('bark')
      this.animated = true
      new Audio( require('../assets/bark.mp3') ).play()
    },
    bark2() {
      console.log('bark2')
      this.animated2 = true
      new Audio( require('../assets/bark2.mp3') ).play()
    }
  }
}
</script>

<style scoped>
.v-card {
  border-radius: 50%;
  size: 100px;
  margin: 0 auto;
}
</style>

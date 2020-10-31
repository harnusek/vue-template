<template>
  <div class="hello">
    <p>
      <v-progress-circular
          :rotate="360"
          :size="100"
          :width="15"
          :value="counter"
          color="teal"
      >
        {{ counter }}
      </v-progress-circular>
    </p>
    <p>
      <v-btn class="action" color="green" @click="plus()">+</v-btn>
      <v-btn class="action" color="red" @click="minus()">-</v-btn>
    </p>
    <h1 v-if="counter<20">Please add!</h1>
    <h1 v-else-if="counter>80">Oh no, this is too much 😢</h1>
  </div>
</template>

<script>
export default {
  name: 'Counter',

  data: () => ({
    counter: 50,
    users: [
      {name: 'Adam'},
      {name: 'Beta'},
      {name: 'Cyril'},
      {name: 'Dana'},
      {name: 'Emil'}
      ]
  }),

  computed: {
  //
  },

  methods: {
    plus() {
      this.counter+=10
      this.counter%=100
    },
    minus() {
      this.counter-=10
      this.counter%=100
    }
  }
}
</script>

<style scoped>
h1 {
  margin: 40px 0 0;
  text-align: center;
}
p {
  list-style-type: none;
  padding: 0;
  text-align: center;
}
action {
  padding: 70px;
}
</style>

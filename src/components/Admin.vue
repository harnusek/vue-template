<template>
  <div style="text-align: center">
    <form v-if="!isAuthorized"
        @submit.prevent="submit"
    >
      <v-text-field
          v-model="password"
          label="Password"
          required
      ></v-text-field>
      <v-btn
          class="mr-4"
          type="submit"
      >
        OK
      </v-btn>
    </form>
    <p v-else>
      <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRpYqsQrCWvOswzXupAuFmWJDJ6GzcY_XlCYy3zbocRjYxp5rJcwaaSzfpPnkRXY14YdEivcQp0vX9f/embed?start=true&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
    </p>
  </div>
</template>

<script>
const shajs = require('sha.js');

export default {
  name: "Admin",

  data: () => {
    return {
      isAuthorized: false,
      secret: '389ceca3b42c5183c5a74886469e85233111b505caaded85693d4d9a7e877feb',
      password: '',
    }
  },

  methods: {
    submit() {
      if (shajs('sha256').update(this.password).digest('hex') !== this.secret) {
        alert('Password not valid!')
      } else {
        this.isAuthorized = true;
        // window.location.href = 'http://google.com';
      }
    }
  }
};
</script>

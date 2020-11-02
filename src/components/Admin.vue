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
      Secret message
    </p>
  </div>
</template>

<script>
export default {
  name: "Admin",

  data: () => {
    return {
      isAuthorized: false,
      secret: 'nbu123',
      password: '',
    }
  },

  methods: {
    submit() {
      if (this.password !== this.secret) {
        alert('Password not valid!')
      } else {
        this.isAuthorized = true;
      }
    }
  }
};
</script>

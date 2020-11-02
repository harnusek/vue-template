<template>
  <div>
     <v-footer
      dark
      padless
  >
    <v-card
        class="flex"
        flat
        tile
    >
      <v-card-title class="teal">
        <strong class="subheading">{{ goodby }}</strong>

        <v-spacer></v-spacer>

        <v-btn
            v-for="site in sites"
            :key="site.icon"
            class="mx-4"
            dark
            icon
            :href="site.url"
        >
          <v-icon size="24px">
            {{ site.icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ 2020 }} — <strong>Corona Edition</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  </div>
</template>

<script>

export default {
  data: () => ({
    goodby: "See ya in better times!",
    sites: [
      { icon: 'mdi-facebook', url: 'https://www.pinkfloyd.com/design/album_covers.php'},
      { icon: 'mdi-twitter', url: 'https://www.pinkfloyd.com/design/album_covers.php'},
      { icon: 'mdi-linkedin', url: 'https://www.pinkfloyd.com/design/album_covers.php'},
      { icon: 'mdi-instagram', url: 'https://www.pinkfloyd.com/design/album_covers.php'},
    ],
  }),
}
</script>

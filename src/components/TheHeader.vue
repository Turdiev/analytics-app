<template>
    <v-app-bar
      app
      color="white"
      dark
    >
      <div class="d-flex align-center">
        <a
          href="https://leadhit.ru/"
          target="_blank"
        >
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="./../assets/images/logo.svg"
            transition="scale-transition"
            width="150"
          />
        </a>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/Turdiev/analytics-app"
        target="_blank"
        text
        class="text-black"
      >
        <span class="text-black mr-2">Github</span>
        <v-icon color="black">mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
</template>

<script>
export default {
    name: 'TheHeader',

    components: {}
};
</script>

<style>
</style>
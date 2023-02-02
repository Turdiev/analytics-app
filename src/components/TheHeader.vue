<template>
    <v-app-bar
      app
      color="white"
      dark
    >
      <v-btn
          href="https://github.com/Turdiev"
          target="_blank"
          text
          class="text-black"
      >
        <span class="text-black mr-2">Turdiev</span>
      </v-btn>

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
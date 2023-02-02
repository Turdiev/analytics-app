<template>
  <v-app>
    <TheHeader />
    <v-main class="pt-0">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";

export default {
  name: "App",

  components: {
    TheHeader,
  },

  data: () => ({
    //
  }),
};
</script>

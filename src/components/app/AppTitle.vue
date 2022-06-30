<template>
  <h2 class="font-medium leading-tight text-4xl mt-0 mb-2 text-gray-600">
    <slot />
  </h2>
</template>

<script>
export default {
  name: "AppTitle",

  components: {},

//   props: {
//     text: {
//         type: String,
//         default: ''
//     },

//     tag: {
//         type: String,
//         default: 'h2'
//     }
//   },
};
</script>

<style>
</style>
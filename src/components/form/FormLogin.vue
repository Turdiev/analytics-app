<template>
  <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="onSubmit">
    <h5 class="font-medium leading-tight text-xl mt-0 mb-6 text-gray-600">Авторизация</h5>
    <v-text-field
      v-model="idSymbol"
      :counter="24"
      :rules="idSymbolRules"
      label="ID"
      required
    ></v-text-field>
    <v-btn class="mr-4 mt-2" type="submit" :disabled="!valid"> Войти </v-btn>
  </v-form>
</template>

<script>
export default {
  name: "FormLogin",

  data() {
    return {
      valid: true,
      idSymbol: "5f8475902b0be670555f1bb3",
      idSymbolRules: [
        (v) => !!v || "Поле не должно быть пустым",
        (v) => (v && v.length === 24) || "id сайта должен содержать 24 символа",
      ],
    };
  },

  methods: {
    onSubmit() {
      let valid = this.$refs.form.validate();

      if (valid) {
        this.$emit("click", this.idSymbol);
      }
    },
  },
};
</script>

<style>
</style>
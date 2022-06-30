<template>
  <v-app>
    <div class="flex justify-center items-center max-h-10 mt-28">
      <AppTitle>LeadHit</AppTitle>
    </div>
    <div class="flex justify-center items-center">
      <FormLogin class="w-80" @click="onSubmit" />
    </div>

    <transition name="fade">
      <div v-if="errorMessage !== ''" class="alert">
        <v-alert type="error">
          {{ errorMessage }}
        </v-alert>
      </div>
    </transition>
  </v-app>
</template>

<script>
import FormLogin from "../components/form/FormLogin.vue";
import AppTitle from "../components/app/AppTitle.vue";
export default {
  name: "HomePage",

  components: {
    FormLogin,
    AppTitle,
  },

  data() {
    return {
      errorMessage: "",
    };
  },

  methods: {
    onSubmit(id) {
      this.$store.dispatch("getLeadhitSiteId", id).then((res) => {
        let status = res.status;

        if (status === 200) {
          this.$router.push("/analytics");
        } else {
          this.errorMessage = res.data.detail;

          setTimeout(() => {
            this.errorMessage = ''
          }, 3000);
        }
      });
    },
  },
};
</script>

<style lang="scss">
.alert {
  position: absolute;
  left: 25%;
  bottom: 0;
  width: 50%;
}

.fade-enter-active {
  transition: all .4s linear;
}
.fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateY(20px);
  opacity: 0;
}
</style>

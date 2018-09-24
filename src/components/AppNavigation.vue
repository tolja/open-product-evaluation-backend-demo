<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light">
    <div class="container">

      <!-- Brand -->
      <a class="navbar-brand" href="#">OPE Demo</a>
      <button
        class="navbar-toggler"
        type="button"
        @click="showNavigation = !showNavigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse"
           :class="{'show': showNavigation}"
           id="navbarSupportedContent">


        <!-- User Items -->
        <ul class="navbar-nav">
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'NavBar',
    data() {
      return {
        showNavigation: false,
      };
    },
    computed: {
    hasDevice()
      {
        return this.$store.getters.getDeviceToken;
      }
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light">
    <div class="container">

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
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

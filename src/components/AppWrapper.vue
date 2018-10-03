<template>
  <div>
    <app-navigation></app-navigation>

    <div class="container">

      <router-view></router-view>


    </div>
    <div class="footer">

    </div>
  </div>
</template>

<script>
  import AppNavigation from '../components/AppNavigation';
  export default {
    name: 'AppWrapper',
    components: {
      'app-navigation': AppNavigation,
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .container {
   padding-top:30px;
   margin-bottom:50px;
 }
</style>

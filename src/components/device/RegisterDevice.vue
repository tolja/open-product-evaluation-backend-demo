<template>
    <div></div>
</template>

<script>
  import Router from '@/router';
    export default {
        name: "RegisterDevice",
      created: function () {
        this.$store.dispatch('createDevice', {name: "Demo-Client"}).then((response) => {
          Router.push('/context/list');
        })
      }
    }
</script>

<style scoped>

</style>

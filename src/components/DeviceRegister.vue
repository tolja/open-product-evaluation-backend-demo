<template>

    <div></div>

</template>

<script>
  export default {
    name: 'DeviceRegister',
    data() {
      return {
      };
    },
    created: function () {
      this.$store.dispatch('createDevice', {name: "Demo-Client"})
    },
  };
</script>

<style scoped>

</style>

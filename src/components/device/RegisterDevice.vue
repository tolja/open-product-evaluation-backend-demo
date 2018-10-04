<template>
    <div></div>
</template>

<script>
    export default {
        name: "RegisterDevice",
      created: function () {
        this.$store.dispatch('createDevice', {name: "Demo-Client"}).then((response) => {
          this.$store.dispatch('updateDeviceOwners', ["bb4028c0657dfd7092f316dcbf5b006dce87217141e1b974441f040126acc142"])
        })
      }
    }
</script>

<style scoped>

</style>

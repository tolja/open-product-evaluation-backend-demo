<template>
    <div></div>
</template>

<script>
    export default {
        name: "RegisterDevice",
      created: function () {
        this.$store.dispatch('createDevice', {name: "Demo-Client"})
      }
    }
</script>

<style scoped>

</style>

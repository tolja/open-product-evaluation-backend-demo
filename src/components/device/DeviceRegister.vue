<template>

    <form id="createDevice-form" method="post" v-on:submit="createDevice">
      <div class="card">
        <div class="card-header">
         Device registrieren
        </div>
        <div class="card-body">
          <div class="container">
            <div class="row">
              <div class="col-9">
          <p class="card-text text-left">Mit diesem Button wird das Device am Server registriert.</p>
              </div>
              <div class="col-3">
          <button type="submit" class="btn btn-primary">Device registrieren</button>
              </div>
        </div>
          </div>
          </div>
      </div>
    </form>

</template>

<script>
  export default {
    name: 'DeviceRegister',
    data() {
      return {
      };
    },
    computed: {
    },
    methods: {
      createDevice(event) {
        event.preventDefault();
        this.$store.dispatch('createDevice', {name: "Demo-Client"})
      },
    },
  };
</script>

<style scoped>

</style>

<template>
    <div class="card">
      <div class="card-header">
        Device Info
      </div>
      <div class="card-body">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <p class="card-text text-center">Das Device wurde erfolgreich registriert!</p>
              <p></p>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-6">
              <p class="card-text text-left"><strong>Device ID:</strong> {{deviceID}}</p>
            </div>
            <div class="col-6">
              <p class="card-text text-left"><strong>Device Token:</strong> {{deviceToken}}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <p></p>
              <router-link to="/context/list" class="btn btn-primary" tag="button">Weiter</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "DeviceInfo",
      computed: {
        deviceToken() {
          return this.$store.getters.getDeviceToken;

        },
        deviceID() {
          return this.$store.getters.getDeviceID;
        },
      },
    }
</script>

<style scoped>

</style>

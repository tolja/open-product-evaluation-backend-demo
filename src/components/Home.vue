<template>
  <div class="card">
    <div class="card-header">
      Hauptseite
    </div>
    <div class="card-body">
      <div class="container">
        <div class="row">
          <div class="col-9">
            <p class="card-text text-left">Dieses Device muss zunächst registriert werden, um es zu benutzen.</p>
          </div>
          <div class="col-3">
            <router-link to="/device/register">Jetzt das Device registrieren</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>

</style>

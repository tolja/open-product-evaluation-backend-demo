<template>
  <div class="card">
    <div class="card-header">
    Vielen Dank!
    </div>
    <div class="card-body">
  <div class="row">
    <div class="col">
      <router-link to="/vote" class="btn btn-success" tag="button">Zur Auswertung</router-link>
    </div>
    <div class="col">
      <router-link to="/context/list" class="btn btn-secondary" tag="button">Zurück zu den Kontexten</router-link>
    </div>
  </div>
  </div>
  </div>
</template>

<script>
    export default {
        name: "QuestionsAnswered",
    }
</script>

<style scoped>

</style>

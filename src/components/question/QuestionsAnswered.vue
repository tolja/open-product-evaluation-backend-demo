<template>
  <div class="card">
    <div class="card-header">
   Auswertung
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col">
          An dieser Umfrage haben bisher {{votes.length}} Personen teilgenommen.
        </div>
      </div>
      <p></p>
    <div class="row">
    <div class="col">
      <button type="submit" v-on:click.prevent="deleteDeviceFromContext()" class="btn btn-secondary">Zurück zu den Kontexten</button>
    </div>
  </div>
  </div>
  </div>
</template>

<script>
  import Router from '@/router';
    export default {
      name: "QuestionsAnswered",
      created: function () {
      },
      computed: {
        votes() {
          return this.$store.getters.getCurrentContext.activeSurvey.votes;
        }
      },
      methods: {
        deleteDeviceFromContext() {
          this.$store.dispatch('deleteDeviceFromContext').then((response) => {
            this.$store.dispatch('unsubscribeContext')
            Router.push('/context/list')
          })
        }
      }
    }
</script>

<style scoped>

</style>

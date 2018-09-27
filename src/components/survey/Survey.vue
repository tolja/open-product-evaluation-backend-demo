<template>
  <div class="card">
    <div class="card-body">

      <form id="context-list" method="post">
        <div class="card context">
          <div class="card-header">
           Umfrage starten
          </div>

          <div class="row">
            <div class="col-8">
              <div class="card-body">
                <strong class="card-title">Gewählter Kontext:</strong>
                <p class="card-text">
                  {{survey.name}}
                </p>
                <strong class="card-title">Aktuelle Umfrage</strong>
                <p class="card-text" v-if="survey.activeSurvey">
                {{survey.activeSurvey.title}}
                </p>
                <p class="card-title" v-else>
                  <span class="error">Noch keine Umfrage definiert!</span>
                </p>
                <p class="card-title" v-if="(survey.activeSurvey) && !survey.activeSurvey.questions">
                  <span class="error">Für diese Umfrage wurden noch keine Fragen definiert!</span>
                </p>
              </div>
            </div>
            <div class="col">
              <div class="card-body">
                <router-link to="/question" v-if="(survey.activeSurvey) && survey.activeSurvey.questions" class="btn btn-primary" tag="button">Umfrage starten!</router-link>
              </div>
              <div class="col">
                <div class="card-body">
                  <router-link to="/context/list" v-on:click.native="deleteDeviceFromContext()" class="btn btn-secondary" tag="button">Zurück zu den Kontexten</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>


    </div>
  </div>

</template>

<script>
  export default {
    name: 'Survey',
    data() {
      return {
      }
    },
    created() {
        this.$store.dispatch('subscribeContext', this.$store.getters.getCurrentContext.id)
    },
    mounted() {

    },
    computed: {
      survey() {
        return this.$store.getters.getCurrentContext;
      }
    },
    methods: {
      deleteDeviceFromContext() {
        this.$store.dispatch('deleteDeviceFromContext')
      }
    },
  };
</script>

<style scoped>
.error {
  color: red;
}
</style>

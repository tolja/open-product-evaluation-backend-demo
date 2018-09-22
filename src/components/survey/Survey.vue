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
                <p class="card-text">
                {{survey.activeSurvey.title}}
                </p>
              </div>
            </div>
            <div class="col-4 my-auto">
              <div class="card-body">
                <router-link to="/question" class="btn btn-primary" tag="button">Umfrage starten!</router-link>
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
    },
    computed: {
      survey() {
        return this.$store.getters.getCurrentContext;
      }
    },
    methods: {

    },
  };
</script>

<style scoped>

</style>

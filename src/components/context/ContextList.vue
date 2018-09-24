<template>
      <form id="context-list" method="post">
      <div class="card context" v-for="context in contexts" :key="context.id">
        <div class="card-header">
         {{context.name}}
        </div>

        <div class="row">
          <div class="col-8">
            <div class="card-body">
              <strong class="card-title">Aktive Umfrage</strong>
              <p class="card-text">
                {{ context.activeSurvey.title }}
              </p>
              <strong class="card-title">Fragen-Typen in dieser Umfrage</strong>
              <p class="card-text">
                {{ context.activeSurvey.types }}
              </p>
            </div>
          </div>
          <div class="col-4 my-auto">
            <div class="card-body">
              <button type="submit" v-on:click.prevent="updateDevice(context.id);setCurrentContext(context)" class="btn btn-primary">Wählen</button>
            </div>
          </div>
        </div>
      </div>
      </form>


</template>

<script>
  export default {
    name: 'ContextList',
    data() {
      return {
      }
    },
    created() {
      this.$store.dispatch("getContextList")
      this.$store.dispatch("cleanCurrentContext")
    },
    computed: {
      contexts() {
        return this.$store.getters.getContextList;
      }
    },
    methods: {
      updateDevice(context) {
        this.$store.dispatch('updateDevice',{ context: context } )
      },
      setCurrentContext(context) {
        this.$store.dispatch('setCurrentContext',{ context: context } )
      }
    },
  };
</script>

<style scoped>
.context {
  margin-bottom:10pt;
}
</style>

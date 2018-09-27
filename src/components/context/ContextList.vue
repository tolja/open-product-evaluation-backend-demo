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
              <p class="card-text" v-if="context.activeSurvey">
                {{ context.activeSurvey.title }}
              </p>
              <p class="card-text" v-else>
                Keine Umfrage aktiv!
              </p>
              <strong class="card-title">Fragen-Typen in dieser Umfrage</strong>
              <p class="card-text" v-if="(context.activeSurvey) && context.activeSurvey.types">
                {{ context.activeSurvey.types }}
              </p>
              <p class="card-text" v-else>
                Bisher wurden noch keine Fragen definiert.
              </p>
              <strong class="card-title" v-if="context.devices">Verbundene Devices mit diesem Kontext</strong>
              <p>
              <span class="card-text" v-for="(device,index) in context.devices" :key="device.id">
                {{ device.name }} <span v-if="index !== (context.devices.length - 1)">,</span>
              </span>
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
        deviceID: this.$store.getters.getDeviceID,
        hasContext: this.$store.getters.hasContext,
      }
    },
    created() {
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

<template>
  <div>
      <form id="private-context" method="post">

          <div class="card context">
              <div class="card-header">
                Privater Kontext
              </div>
            <div class="row">
              <div class="col-12">
            <div class="card-body">
              <p class="card-text">
                Mit einem privaten Kontext verbinden
              </p>
        </div>
            </div>
            </div>
            <div class="row">
              <div class="col-3">
                <div class="card-body">
                  <label for="input_contextID">Kontext ID eingeben</label>
                </div>
              </div>
              <div class="col-5">
                <div class="card-body">
                    <input type="text"
                           name="contextID"
                           id="input_contextID"
                           class="form-control"
                           v-model="contextID" />
                  </div>
                </div>
          <div class="col-4 my-auto">
            <div class="card-body">
              <button type="submit" v-on:click.prevent="getContext(contextID)" class="btn btn-primary">Wählen</button>
            </div>
          </div>
        </div>
        </div>
      </form>
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
              <button type="submit" v-on:click.prevent="getContext(context.id)" class="btn btn-primary">Verbinden</button>
            </div>
          </div>
        </div>
      </div>
      </form>

  </div>
</template>

<script>
  export default {
    name: 'ContextList',
    data() {
      return {
        deviceID: this.$store.getters.getDeviceID,
        hasContext: this.$store.getters.hasContext,
        contextID: null
      }
    },
    created() {
      this.$store.dispatch("cleanCurrentContext")
      this.$store.dispatch("cleanCurrentContextAnswers")
    },
    computed: {
      contexts() {
        return this.$store.getters.getContextList;
      }
    },
    methods: {
      getContext(contextID) {
        this.$store.dispatch('getContext', contextID )
      },
    },
  };
</script>

<style scoped>
.context {
  margin-bottom:10pt;
}
</style>

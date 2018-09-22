<template>
  <div>hallo i bims 1 regulator question

    <button type="submit" v-on:click.prevent="createRegulatorAnswer()" class="btn btn-primary">Wählen</button>
  </div>
</template>

<script>
  import Router from '@/router';
  export default {
    name: "RegulatorQuestion",
    props: ['currentQuestion'],
    computed: {
    },
    methods: {
      createRegulatorAnswer() {
        this.$store.dispatch('createRegulatorAnswer',{ questionID: this.currentQuestion.id, rating: 4 } ).then(() => {
          this.$emit('nextQuestion')
          Router.push('/question');
        })
      },
    }
  }
</script>

<style scoped>

</style>

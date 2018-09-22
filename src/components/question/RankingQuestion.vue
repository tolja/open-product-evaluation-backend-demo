<template>
  <div>hallo i bims 1 ranking question

    <button type="submit" v-on:click.prevent="createRankingAnswer()" class="btn btn-primary">Wählen</button>
  </div>
</template>

<script>
  import Router from '@/router';
  export default {
    name: "RankingQuestion",
    props: ['currentQuestion'],
    computed: {
    },
    methods: {
      createRankingAnswer() {
        this.$store.dispatch('createRankingAnswer',{ questionID: this.currentQuestion.id, rankedItems: ["f4e119e5e2543f70c2f45d4054618fdb6f998d6c901091528265c4dababd5554","53f312b11f49b0137d440cb66af808c7af736619bf71ef5a0e2c7349f1da5bbd"] } ).then(() => {
          this.$emit('nextQuestion')
          Router.push('/question');
        })
      },
    }
  }
</script>

<style scoped>

</style>

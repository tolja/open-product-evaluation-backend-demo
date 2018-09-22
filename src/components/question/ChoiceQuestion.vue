<template>
<div>hallo i bims 1 choice question

  <button type="submit" v-on:click.prevent="createChoiceAnswer()" class="btn btn-primary">Wählen</button>
</div>
</template>

<script>
  import Router from '@/router';
    export default {
        name: "ChoiceQuestion",
      props: ['questionCounter','currentQuestion'],
      computed: {
      },
      methods: {
        createChoiceAnswer() {
          this.$store.dispatch('createChoiceAnswer',{ questionID: this.currentQuestion.id, choiceID: this.currentQuestion.choices[0].id } ).then(() => {
            this.$emit('nextQuestion')
            Router.push('/question');
          })
        },
      }
    }
</script>

<style scoped>

</style>

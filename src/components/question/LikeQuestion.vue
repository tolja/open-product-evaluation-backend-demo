<template>
  <div>hallo i bims 1 like question

    <button type="submit" v-on:click.prevent="createLikeAnswer()" class="btn btn-primary">Wählen</button>
  </div>
</template>

<script>
  import Router from '@/router';
  export default {
    name: "LikeQuestion",
    props: ['questionCounter','currentQuestion'],
    computed: {
    },
    methods: {
      createLikeAnswer() {
        this.$store.dispatch('createLikeAnswer',{ questionID: this.currentQuestion.id, liked: false } ).then(() => {
          this.$emit('nextQuestion')
          Router.push('/question');
        })
      },
    }
  }
</script>

<style scoped>

</style>

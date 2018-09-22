<template>
  <div>hallo i bims 1 likedislike question

    <button type="submit" v-on:click.prevent="createLikeDislikeAnswer()" class="btn btn-primary">Wählen</button>
  </div>
</template>

<script>
  import Router from '@/router';
  export default {
    name: "LikeDislikeQuestion",
    props: ['currentQuestion'],
    computed: {
    },
    methods: {
      createLikeDislikeAnswer() {
        this.$store.dispatch('createLikeDislikeAnswer',{ questionID: this.currentQuestion.id, liked: false } ).then(() => {
          this.$emit('nextQuestion')
          Router.push('/question');
        })
      },
    }
  }
</script>

<style scoped>

</style>

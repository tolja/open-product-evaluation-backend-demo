<template>
  <div>hallo i bims 1 favorite question

    <button type="submit" v-on:click.prevent="createFavoriteAnswer()" class="btn btn-primary">Wählen</button>
  </div>
</template>

<script>
  import Router from '@/router';
  export default {
    name: "FavoriteQuestion",
    props: ['currentQuestion'],
    computed: {
    },
    methods: {
      createFavoriteAnswer() {
        this.$store.dispatch('createFavoriteAnswer',{ questionID: this.currentQuestion.id, itemID: this.currentQuestion.items[0].id } ).then(() => {
          this.$emit('nextQuestion')
          Router.push('/question');
        })
      },
    }
  }
</script>

<style scoped>

</style>

<template>

  <div class="card">
    <div class="card-header">
      Frage {{(questionCounter+1)}}/{{questionLength}}
    </div>
    <div class="card-body">
      <div class="container">
        <div class="row">
          <div class="col-12"><h4>{{currentQuestion.value}}</h4></div>
        </div>
        <div class="row">
          <div class="col-12"> {{currentQuestion.description}}  <p></p></div>

        </div>
        <div class="row">
          <div class="col">
            <img class="like-image" v-bind:src="currentQuestion.likeIcon.url" />
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <p><button type="submit" v-on:click="liked=true;changeColor()" :class="likeButton">Like</button></p>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <p><button type="submit" v-on:click.prevent="createLikeAnswer()" class="btn btn-primary">Antwort senden</button></p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import Router from '@/router';
  export default {
    name: "LikeQuestion",
    data() {
      return {
       liked: false,
        likeButton: 'btn btn-outline-primary'
      }
    },
    props: ['currentQuestion','questionCounter','questionLength'],
    computed: {
    },
    methods: {
      createLikeAnswer() {
        this.$store.dispatch('createLikeAnswer',{ questionID: this.currentQuestion.id, liked: false } ).then(() => {
          this.$emit('nextQuestion')
          Router.push('/question');
        })
      },
      changeColor(){
        if(this.likeButton = 'btn btn-outline-secondary'){
          this.likeButton = 'btn btn-success';
        }
        else
          this.likeButton = 'btn btn-outline-secondary';

      }
    }
  }
</script>

<style scoped>
.like-image {
  width:200px;
  height:200px;
  margin-bottom:20pt;
}
</style>

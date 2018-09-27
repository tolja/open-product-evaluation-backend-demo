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
          <div class="col" v-for="item in currentQuestion.items" :key="item.id">
            <img class="likedislike-image-item" v-bind:src="item.image.url" v-bind:alt="item.label">
          </div>
        </div>
        <p></p>

        <div class="row">
          <div class="col">
            <img class="like-image" v-bind:src="currentQuestion.likeIcon.url" />
            <p><button type="submit" v-on:click="liked=true;changeButtonColor()" :class="likeButton">Like</button></p>
          </div>
          <div class="col">
            <img class="dislike-image" v-bind:src="currentQuestion.dislikeIcon.url" />
            <p><button type="submit" v-on:click="liked=false;changeButtonColor()" :class="dislikeButton">Dislike</button></p>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <p><button type="submit" v-on:click.prevent="createLikeDislikeAnswer()" class="btn btn-primary">Antwort senden</button></p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import Router from '@/router';
  export default {
    name: "LikeDislikeQuestion",
    data() {
      return {
        liked: null,
        likeButton: 'btn btn-outline-success',
        dislikeButton: 'btn btn-outline-danger'
      }
    },
    props: ['currentQuestion','questionCounter','questionLength'],
    methods: {

      createLikeDislikeAnswer() {
        this.resetButtons();
        if (this.$store.getters.getLikeDislikeAnswers.length !== 0) {

          const likeDislikeAnswers = this.$store.getters.getLikeDislikeAnswers;

          if(!likeDislikeAnswers.includes(this.currentQuestion.id)) {
            this.sendLikeDislikeAnswer();
          }
          else {
            this.$emit('nextQuestion')
            Router.push('/question');
          }

        } else {
          this.sendLikeDislikeAnswer()
        }
      },
      sendLikeDislikeAnswer() {
        this.$store.dispatch('createLikeDislikeAnswer', {
          questionID: this.currentQuestion.id,
          liked: this.liked
        }).then(() => {
          this.$emit('nextQuestion')
          Router.push('/question');
        })
      },
      changeButtonColor() {
        if (this.liked) {
          this.likeButton = 'btn btn-success';
          this.dislikeButton = 'btn btn-outline-danger';
        }
        else {
          this.dislikeButton = 'btn btn-danger';
          this.likeButton = 'btn btn-outline-success';
        }
      },
      resetButtons() {
          this.dislikeButton = 'btn btn-outline-danger';
          this.likeButton = 'btn btn-outline-success';
      }
    }
  }
</script>

<style scoped>
  .like-image,.dislike-image {
    width:75px;
    height:75px;
    margin-bottom:20pt;
  }
  .likedislike-image-item {
    width:300px;
    height:200px;
  }
</style>

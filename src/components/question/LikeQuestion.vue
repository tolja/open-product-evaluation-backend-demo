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
            <img class="like-image-item" v-bind:src="item.image.url" v-bind:alt="item.label">
              </div>
        </div>
<p></p>
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
            <label>
              <input type="radio" name="name" v-model="liked" v-on:change="changeColor()" v-bind:value="null"/>
              <label>Ich möchte diese Antwort nicht geben</label>
            </label>
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
       liked: null,
        likeButton: 'btn btn-outline-success'
      }
    },
    props: ['currentQuestion','questionCounter','questionLength'],
    computed: {
    },
    methods: {

      createLikeAnswer() {
        this.resetButton();
        if (this.$store.getters.getLikeAnswers.length !== 0) {

          const likeAnswers = this.$store.getters.getLikeAnswers;

          if(!likeAnswers.includes(this.currentQuestion.id)) {

            this.sendLikeAnswer()
          }
          else {
            this.$emit('nextQuestion')
            Router.push('/question');
          }

        } else {
          this.sendLikeAnswer()
        }
      },
      sendLikeAnswer() {
        this.$store.dispatch('createLikeAnswer',{ questionID: this.currentQuestion.id, liked: this.liked } ).then(() => {
          this.$emit('nextQuestion')
          Router.push('/question');
        })
      },
      changeColor(){
        if(this.liked){
          this.likeButton = 'btn btn-success';
        }
        else if(this.liked === false) {
          this.likeButton = 'btn btn-outline-success';
        }
        else {
          this.resetButton()
        }

      },
      resetButton() {
        this.likeButton = 'btn btn-outline-success';
      }
    }
  }
</script>

<style scoped>
.like-image {
  width:75px;
  height:75px;
  margin-bottom:20pt;
}
.like-image-item {
  width:300px;
  height:200px;
}
</style>

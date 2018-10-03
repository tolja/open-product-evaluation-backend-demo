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

        <div class="container">
          <div class="row align-items-center justify-content-center">
          <div class="col-auto" v-for="item in currentQuestion.items" :key="item.id">
            <img class="image" v-bind:src="item.image.url" :key="item.id" />
            <div class="row">
              <div class="col">
            <label>
              <input type="radio" name="name" v-model="itemID" v-bind:value="item.id"/>
              <p>
                <label v-bind:for="item.id"> {{item.label}}</label>
              </p>
            </label>
              </div>
            </div>
          </div>
        </div>
          <div class="row">
            <div class="col-12">
              <label>
                <input type="radio" name="name" v-model="itemID" v-bind:value="null"/>
                <label>Ich möchte diese Antwort nicht geben</label>
              </label>
            </div>
          </div>
        <div class="row">
          <div class="col-12">
            <p><button type="submit" v-on:click.prevent="createFavoriteAnswer()" class="btn btn-primary">Antwort senden</button></p>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import Router from '@/router';
  export default {
    name: "FavoriteQuestion",
    data() {
      return {
       itemID: null
      }
    },
    props: ['currentQuestion','questionCounter','questionLength'],
    computed: {
    },
    methods: {

      createFavoriteAnswer() {

        if (this.$store.getters.getFavoriteAnswers.length !== 0) {

          const favoriteAnswers = this.$store.getters.getFavoriteAnswers;

          if(!favoriteAnswers.includes(this.currentQuestion.id)) {
            this.sendFavoriteAnswer()
          }
          else {
            this.$emit('nextQuestion')
            Router.push('/question');
          }

        } else {
          this.sendFavoriteAnswer()
        }
      },
      sendFavoriteAnswer() {
        this.$store.dispatch('createFavoriteAnswer',{ questionID: this.currentQuestion.id, itemID: this.itemID } ).then(() => {
          this.$emit('nextQuestion')
          Router.push('/question');
        })
      }
    }
  }
</script>

<style scoped>
  .image {
    width:300px;
    height:200px;
    margin-bottom:15pt;
  }
</style>

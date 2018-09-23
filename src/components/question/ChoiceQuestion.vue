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
          <div class="col" v-for="choice in currentQuestion.choices" :key="choice.id">
            <img class="choice-image" v-bind:src="choice.image.url" v-bind:alt="choice.label">
            <p></p>
              <label>
              <input type="radio" name="name" v-model="choiceID" v-bind:value="choice.id"/>
            <p>
              <label v-bind:for="choice.id"> {{choice.label}}</label>
            </p>
              </label>
          </div>
        </div>
      <div class="row">
        <div class="col-12">
          <p><button type="submit" v-on:click.prevent="createChoiceAnswer()" class="btn btn-primary">Antwort senden</button></p>
        </div>
      </div>
      </div>
    </div>
  </div>

</template>

<script>
  import Router from '@/router';
    export default {
        name: "ChoiceQuestion",
      data() {
          return {
           choiceID: '',
          }
      },
      props: ['currentQuestion','questionCounter','questionLength'],
      computed: {
      },
      methods: {
        createChoiceAnswer() {
          this.$store.dispatch('createChoiceAnswer',{ questionID: this.currentQuestion.id, choiceID: this.choiceID } ).then(() => {
            this.$emit('nextQuestion')
            Router.push('/question');
          })
        },
      }
    }
</script>

<style scoped>
.choice-image {
  width:150px;
  height:150px;
}
</style>

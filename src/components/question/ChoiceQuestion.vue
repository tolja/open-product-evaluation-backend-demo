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
              <div class="row">
                <div class="col">
                  <p></p>
                  <label v-bind:for="item.id"> {{item.label}}</label>
                </div>
              </div>
              <div class="row">
                <div class="col-auto">
              <img class="choice-image-item" v-bind:src="item.image.url" v-bind:alt="item.label">
                </div>
              </div>
          </div>
          </div>
        </div>
<p></p>
        <div class="row">
          <div class="col" v-for="choice in currentQuestion.choices" :key="choice.id">
            <img class="choice-image" v-bind:src="choice.image.url" v-bind:alt="choice.label">
            <p></p>
            <label>
              <input type="radio" name="name" v-model="choiceID" v-bind:value="choice.id"/>
             <label v-bind:for="choice.id">{{choice.label}}</label>
              </label>
            <div class="row">
              <div class="col">
              <p><strong>Code:</strong> {{choice.code}}</p>
              </div>
            </div>
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
           choiceID: null
          }
      },
      props: ['currentQuestion','questionCounter','questionLength'],
      computed: {
      },
      methods: {
        createChoiceAnswer() {

          if (this.$store.getters.getChoiceAnswers.length !== 0) {

            const choiceAnswers = this.$store.getters.getChoiceAnswers;

            if(choiceAnswers.includes(this.currentQuestion.id)) {
              this.$emit('nextQuestion')
              Router.push('/question');
            }

          } else {
            this.sendChoiceAnswer()
          }
        },
        sendChoiceAnswer() {
          if(this.choiceID != null) {
            this.choiceID.toString();
          }
            this.$store.dispatch('createChoiceAnswer', {
              questionID: this.currentQuestion.id,
              choiceID: this.choiceID
            }).then(() => {
              this.$emit('nextQuestion')
              Router.push('/question');
            })
        }
      }
    }
</script>

<style scoped>
.choice-image {
  width:75px;
  height:75px;
}
.choice-image-item {
  width:300px;
  height:200px;
}
</style>

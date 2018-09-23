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
            <b-form-slider v-model="rating" :ticks="sliderTicks" :ticks-labels="sliderTickLabels" :min="this.currentQuestion.min" :max="this.currentQuestion.max" :step="this.currentQuestion.stepSize" trigger-change-event></b-form-slider>
            <p>{{this.rating}}</p>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <p><button type="submit" v-on:click.prevent="createRegulatorAnswer()" class="btn btn-primary">Antwort senden</button></p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import Router from '@/router';
  export default {
    name: "RegulatorQuestion",
    data() {
      return {
        rating: this.currentQuestion.default,
        sliderTicks: [],
        sliderTickLabels: []
      }
    },
    props: ['currentQuestion','questionCounter','questionLength'],
    computed: {
    },
    created: function() {
      this.getSliderData();
    },
    methods: {
      createRegulatorAnswer() {
        this.$store.dispatch('createRegulatorAnswer', {
          questionID: this.currentQuestion.id,
          rating: this.rating
        }).then(() => {
          this.$emit('nextQuestion')
          Router.push('/question');
        })
      },
      getSliderData() {

        this.currentQuestion.labels.forEach((label) => {
          this.sliderTicks.push(label.value);
          this.sliderTickLabels.push(label.label)

        })
      }
    }
  }
</script>

<style scoped>
  .choice-image {
    width:150px;
    height:150px;
  }
</style>

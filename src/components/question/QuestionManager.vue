<template>
  <div class="card">
    <div class="card-body">

      <div v-if="!allQuestionsAnswered" class="vote">

        <like-question
          v-if="currentQuestion.__typename === 'LikeQuestion'"
          @nextQuestion='nextQuestion' :currentQuestion="currentQuestion"></like-question>

        <like-dislike-question
          v-if="currentQuestion.__typename === 'LikeDislikeQuestion'"
          @nextQuestion='nextQuestion' :currentQuestion="currentQuestion"></like-dislike-question>

        <choice-question
          v-if="currentQuestion.__typename === 'ChoiceQuestion'"
          @nextQuestion='nextQuestion' :currentQuestion="currentQuestion"></choice-question>

        <regulator-question
          v-if="currentQuestion.__typename === 'RegulatorQuestion'"
          @nextQuestion='nextQuestion' :currentQuestion="currentQuestion"></regulator-question>

        <favorite-question
          v-if="currentQuestion.__typename === 'FavoriteQuestion'"
          @nextQuestion='nextQuestion' :currentQuestion="currentQuestion"></favorite-question>

        <ranking-question
          v-if="currentQuestion.__typename === 'RankingQuestion'"
          @nextQuestion='nextQuestion' :currentQuestion="currentQuestion"></ranking-question>

      </div>

      <div v-if="allQuestionsAnswered" class="vote">
        <questions-answered></questions-answered>
      </div>

      </div>

  </div>

</template>

<script>
  import ChoiceQuestion from '@/components/question/ChoiceQuestion';
  import LikeQuestion from '@/components/question/LikeQuestion';
  import LikeDislikeQuestion from '@/components/question/LikeDislikeQuestion';
  import RegulatorQuestion from '@/components/question/RegulatorQuestion';
  import FavoriteQuestion from '@/components/question/FavoriteQuestion';
  import RankingQuestion from '@/components/question/RankingQuestion';
  import QuestionsAnswered from '@/components/question/QuestionsAnswered';
  export default {
    name: 'QuestionManager',
    data() {
      return {
        questions: null,
        currentQuestion: null,
        questionCounter: 0,
        allQuestionsAnswered: false
      }
    },
    components: {
      'choice-question': ChoiceQuestion,
      'like-question': LikeQuestion,
      'like-dislike-question': LikeDislikeQuestion,
      'regulator-question': RegulatorQuestion,
      'favorite-question': FavoriteQuestion,
      'ranking-question': RankingQuestion,
      'questions-answered': QuestionsAnswered
    },
    created() {
     this.questions = this.$store.getters.getCurrentContext.activeSurvey.questions;
     this.currentQuestion = this.$store.getters.getCurrentContext.activeSurvey.questions[this.questionCounter];
    },
    computed: {
    },
    methods: {
      nextQuestion() {
        if(this.questionCounter < this.$store.getters.getCurrentContext.activeSurvey.questions.length - 1) {
        this.questionCounter += 1;
        this.currentQuestion = this.$store.getters.getCurrentContext.activeSurvey.questions[this.questionCounter];
  }
  else {
    this.allQuestionsAnswered = true;
        }
      }
    },
  }
</script>

<style scoped>

</style>

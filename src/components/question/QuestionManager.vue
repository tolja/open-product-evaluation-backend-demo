<template>
<div v-if="!voteCreated">
        <like-question
          v-if="currentQuestion && currentQuestion.__typename === 'LikeQuestion'"
          @nextQuestion='nextQuestion' :currentQuestion="currentQuestion" :questionCounter="questionCounter"
          :questionLength="questionLength" ></like-question>

        <like-dislike-question
          v-if="currentQuestion && currentQuestion.__typename === 'LikeDislikeQuestion'"
          @nextQuestion='nextQuestion' :currentQuestion="currentQuestion" :questionCounter="questionCounter"
          :questionLength="questionLength"></like-dislike-question>

        <choice-question
          v-if="currentQuestion && currentQuestion.__typename === 'ChoiceQuestion'"
          @nextQuestion='nextQuestion' :currentQuestion="currentQuestion" :questionCounter="questionCounter"
          :questionLength="questionLength"></choice-question>

        <regulator-question
          v-if="currentQuestion && currentQuestion.__typename === 'RegulatorQuestion'"
          @nextQuestion='nextQuestion' :currentQuestion="currentQuestion" :questionCounter="questionCounter"
          :questionLength="questionLength"></regulator-question>

        <favorite-question
          v-if="currentQuestion && currentQuestion.__typename === 'FavoriteQuestion'"
          @nextQuestion='nextQuestion' :currentQuestion="currentQuestion" :questionCounter="questionCounter"
          :questionLength="questionLength"></favorite-question>

        <ranking-question
          v-if="currentQuestion && currentQuestion.__typename === 'RankingQuestion'"
          @nextQuestion='nextQuestion' :currentQuestion="currentQuestion" :questionCounter="questionCounter"
          :questionLength="questionLength"></ranking-question>

</div>
        <questions-answered :votes="votes" v-else></questions-answered>

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
        questionLength: 0,
        voteCreated: false,
        votes: []
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
      if(Object.keys(this.$store.getters.getCurrentContext).length !== 0) {
        this.questions = this.$store.getters.getCurrentContext.activeSurvey.questions;
        this.currentQuestion = this.$store.getters.getCurrentContext.activeSurvey.questions[this.questionCounter];
        this.questionLength = this.$store.getters.getCurrentContext.activeSurvey.questions.length;
      }
    },
    computed: {
    },
    methods: {
      nextQuestion() {
        if(this.questionCounter < this.questionLength - 1) {
        this.questionCounter += 1;
        this.currentQuestion = this.$store.getters.getCurrentContext.activeSurvey.questions[this.questionCounter];
  }
  else {
          this.$store.dispatch('getVotes', this.$store.getters.getCurrentContext.activeSurvey.id).then((response) => {
            this.votes = this.$store.getters.getVotes
            this.voteCreated = true;
          });
        }
      },
    },
  }
</script>

<style scoped>

</style>

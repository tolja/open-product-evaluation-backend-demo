import Answer from '@/api/answer';


const state = {
  answers: [],
 };

const getters = {

  getChoiceAnswer(state) {
    const __typename = "ChoiceAnswer";
    return state.answers.find(answers => answers.__typename === __typename);
  },
}

const actions = {

  createChoiceAnswer(context, payload) {
    Answer.createChoiceAnswer(payload.questionID, payload.choiceID)
      .then((choiceAnswer) => {
        context.commit('createChoiceAnswer', choiceAnswer);
      })
  },

  createLikeAnswer(context, payload) {
    Answer.createLikeAnswer(payload.questionID, payload.liked)
      .then((likeAnswer) => {
        context.commit('createLikeAnswer', likeAnswer);
      })
  },

  createLikeDislikeAnswer(context, payload) {
    Answer.createLikeAnswer(payload.questionID, payload.liked)
      .then((likeDislikeAnswer) => {
        context.commit('createLikeDislikeAnswer', likeDislikeAnswer);
      })
  },

  createRegulatorAnswer(context, payload) {
    Answer.createRegulatorAnswer(payload.questionID, payload.rating)
      .then((regulatorAnswer) => {
        context.commit('createRegulatorAnswer', regulatorAnswer);
      })
  },

  createFavoriteAnswer(context, payload) {
    Answer.createFavoriteAnswer(payload.questionID, payload.itemID)
      .then((favoriteAnswer) => {
        context.commit('createFavoriteAnswer', favoriteAnswer);
      })
  },

  createRankingAnswer(context, payload) {
    Answer.createRankingAnswer(payload.questionID, [JSON.stringify(payload.rankedItems)])
      .then((rankingAnswer) => {
        context.commit('createRankingAnswer', rankingAnswer);
      })
  },

}

const mutations = {

  createChoiceAnswer(state, payload) {
    state.answers.push(payload.data.createAnswer.answer)
  },
  createLikeAnswer(state, payload) {
    state.answers.push(payload.data.createAnswer.answer)
  },
  createLikeDislikeAnswer(state, payload) {
    state.answers.push(payload.data.createAnswer.answer)
  },
  createRegulatorAnswer(state, payload) {
    state.answers.push(payload.data.createAnswer.answer)
  },
  createFavoriteAnswer(state, payload) {
    state.answers.push(payload.data.createAnswer.answer)
  },
  createRankingAnswer(state, payload) {
    state.answers.push(payload.data.createAnswer.answer)
  },


};

export default {
  state,
  getters,
  actions,
  mutations
};

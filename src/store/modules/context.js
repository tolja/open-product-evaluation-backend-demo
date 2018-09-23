import Answer from '@/api/answer';
import Context from '@/api/context';

const state = {
  contextList: [],
  currentContext: {
    context: {},
    answerList: [],
    choiceAnswers: [],
    likeAnswers: [],
    likeDislikeAnswers: [],
    favoriteAnswers: [],
    rankingAnswers: [],
    regulatorAnswers: []
  }
};

const getters = {

  getContextList( state ){
    return state.contextList
  },

  getCurrentContext( state ){
    return state.currentContext.context;
  },

  getChoiceAnswers(state) {
    return state.currentContext.choiceAnswers;
  },
  getLikeAnswers(state) {
    return state.currentContext.likeAnswers;
  },
  getLikeDislikeAnswers(state) {
    return state.currentContext.likeDislikeAnswers;
  },
  getFavoriteAnswers(state) {
    return state.currentContext.favoriteAnswers;
  },
  getRankingAnswers(state) {
    return state.currentContext.rankingAnswers;
  },
  getRegulatorAnswers(state) {
    return state.currentContext.regulatorAnswers;
  },


}

const actions = {

  cleanAnswers(context) {
    context.commit('cleanAnswers');
  },

  getContextList(context) {
    Context.getContextList().then((data) => {
      context.commit('getContextList', data);
    })
  },

  setCurrentContext(context, id) {
      context.commit('setCurrentContext', id);
  },

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

  cleanAnswers(state) {
    state.currentContext.answerList = [];
    state.currentContext.choiceAnswers = [];
    state.currentContext.likeAnswers = [];
    state.currentContext.likeDislikeAnswers = [];
    state.currentContext.regulatorAnswers = [];
    state.currentContext.favoriteAnswers = [];
    state.currentContext.rankingAnswers = [];
  },

  getContextList(state, payload) {
    state.contextList = payload.data.contexts;
  },

  setCurrentContext(state, payload) {
    state.currentContext.context = payload.context;
  },

  createChoiceAnswer(state, payload) {
    state.currentContext.answerList.push(payload.data.createAnswer.answer);
    state.currentContext.choiceAnswers.push(payload.data.createAnswer.answer.question);
  },
  createLikeAnswer(state, payload) {
    state.currentContext.answerList.push(payload.data.createAnswer.answer);
    state.currentContext.likeAnswers.push(payload.data.createAnswer.answer.question);
  },
  createLikeDislikeAnswer(state, payload) {
    state.currentContext.answerList.push(payload.data.createAnswer.answer);
    state.currentContext.likeDislikeAnswers.push(payload.data.createAnswer.answer.question);
  },
  createRegulatorAnswer(state, payload) {
    state.currentContext.answerList.push(payload.data.createAnswer.answer);
    state.currentContext.regulatorAnswers.push(payload.data.createAnswer.answer.question);
  },
  createFavoriteAnswer(state, payload) {
    state.currentContext.answerList.push(payload.data.createAnswer.answer);
    state.currentContext.favoriteAnswers.push(payload.data.createAnswer.answer.question);
  },
  createRankingAnswer(state, payload) {
    state.currentContext.answerList.push(payload.data.createAnswer.answer);
    state.currentContext.rankingAnswers.push(payload.data.createAnswer.answer.question);
  },

};

export default {
  state,
  getters,
  actions,
  mutations
};

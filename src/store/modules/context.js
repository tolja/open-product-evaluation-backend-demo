import client from '@/api/client';
import gql from 'graphql-tag';

const state = {
  contextList: [],
  currentContext: {
    context: JSON.parse(localStorage.getItem('currentContext')),
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

  async getContextList({ commit }) {
    const data = await client.query({
      query: gql` 
        query getContextList {
          contexts {
            id
            name
            activeSurvey {
              id
              description
              title
              types
              questions {
                id
                description
                value
                items {
                  image {
                    url
                    id
                  }
                  label
                }
                ... on LikeQuestion {
                  likeIcon {
                    id
                    url
                  }
                }
                ... on LikeDislikeQuestion {
                  likeIcon {
                    id
                    url
                  }
                  dislikeIcon {
                    id
                    url
                  }
                }
                ... on ChoiceQuestion {
                  choices {
                    id
                    image {
                      url
                    }
                    label
                    code
                  }
                  choiceDefault: default
                }
                ... on RegulatorQuestion {
                  labels {
                    image {
                      url
                    }
                    id
                    label
                    value
                  }
                  default
                  max
                  min
                  stepSize
                }
                items {
                  id
                  image {
                    url
                  }
                  label
                }
              }
            }
            states {
              key
              value
            }
          }
        }`
    });
    commit('getContextList', data);
  },

  setCurrentContext(context, payload) {
      context.commit('setCurrentContext', payload);
      localStorage.setItem('currentContext',JSON.stringify(payload.context));
  },

  async createChoiceAnswer({ commit }, payload) {
    const data = await client.mutate({
      mutation: gql`
      mutation createChoiceAnswer($questionID: ID!, $choiceID: ID) {
        createAnswer(data: {questionID: $questionID, choice: $choiceID})
        {
          __typename
          answer{
            __typename
            question
          }
        },
      }`,
      variables: { questionID: payload.questionID, choiceID: payload.choiceID },
  });
    commit('createChoiceAnswer', data);
  },

  async createLikeAnswer({ commit }, payload) {
    const data = await client.mutate({
      mutation: gql`
        mutation createLikeAnswer($questionID: ID!, $liked: Boolean) {
          createAnswer(data: {questionID: $questionID, liked: $liked})
          {
            __typename
            answer{
              __typename
              question
            }
          },
        }`,
      variables: { questionID: payload.questionID, liked: payload.liked },
    });
    commit('createLikeAnswer', data);
  },

  async createLikeDislikeAnswer({ commit }, payload) {
    const data = await client.mutate({
      mutation: gql`
        mutation createLikeDislikeAnswer($questionID: ID!, $liked: Boolean) {
          createAnswer(data: {questionID: $questionID, liked: $liked})
          {
            __typename
            answer{
              __typename
              question
            }
          },
        }`,
      variables: { questionID: payload.questionID, liked: payload.liked },
    });
    commit('createLikeDislikeAnswer', data);
  },

  async createRegulatorAnswer({ commit }, payload) {
    const data = await client.mutate({
      mutation: gql`
        mutation createRegulatorAnswer($questionID: ID!, $rating: Float!) {
          createAnswer(data: {questionID: $questionID, rating: $rating})
          {
            __typename
            answer{
              __typename
              question
            }
          },
        }`,
      variables: { questionID: payload.questionID, rating: payload.rating },
    });
    commit('createRegulatorAnswer', data);
  },

  async createFavoriteAnswer({ commit }, payload) {
    const data = await client.mutate({
      mutation: gql`
        mutation createFavoriteAnswer($questionID: ID!, $favoriteItem: ID!) {
          createAnswer(data: {questionID: $questionID, favoriteItem: $favoriteItem})
          {
            __typename
            answer{
              __typename
              question
            }
          },
        }`,
      variables: { questionID: payload.questionID, favoriteItem: payload.itemID },
    });
    commit('createFavoriteAnswer', data);
  },

  async createRankingAnswer({ commit }, payload) {
    const data = await client.mutate({
      mutation: gql`
        mutation createRankingAnswer($questionID: ID!, $rankedItems: [ID!]) {
          createAnswer(data: {questionID: $questionID, rankedItems: $rankedItems})
          {
            __typename
            answer{
              __typename
              question
            }
          },
        }`,
      variables: { questionID: payload.questionID, rankedItems: payload.rankedItems },
    });
    commit('createRankingAnswer', data);
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

import gql from 'graphql-tag';
import Router from '@/router';
import client from '@/api/client';
import SubscriptionClient from '@/api/subscriptionClient'

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

  cleanCurrentContext(context) {
    context.commit('cleanCurrentContext');
  },

  async getContext({ commit }, payload) {

    SubscriptionClient.close();
    SubscriptionClient.connect();

    const data = await client.query({
      query: gql`
        query getContext($contextID: ID!) {
          context(contextID: $contextID) {
            id
            name
            devices {
              id
              name
            }
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
              votes {
                id
                context
                device
                answers{
                  question
                  ...on LikeAnswer { liked }
                  ...on LikeDislikeAnswer { liked }
                  ...on ChoiceAnswer { choice }
                  ...on RegulatorAnswer { rating normalized }
                  ...on RankingAnswer { rankedItems }
                  ...on FavoriteAnswer { favoriteItem }
                }
              }
            }
          }
        }`, variables: { contextID: payload },

    });
    commit('setCurrentContext', data);
  },

  async getContextList({ commit }) {
    const data = await client.query({
      query: gql` 
        query getContextList {
          contexts {
            id
            name
            devices {
              id
              name
            }
            activeSurvey {
              id
              description
              title
              types
            }
          }
        }`
    });
    commit('getContextList', data);
  },

  unsubscribeContext({ commit } ){
    SubscriptionClient.unsubscribeAll();
    commit('unsubscribeContext');
  },

   async subscribeContext({ commit, dispatch }, payload){

     SubscriptionClient.close();
     SubscriptionClient.connect();

    await client.subscribe({
      query: gql`subscription subscribeContext($contextID: ID!) {
          contextUpdate(contextID: $contextID)
          {
            context {
              id
              name
              devices {
                id
                name
              }
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
                votes {
                  id
                  context
                  device
                  answers{
                    question
                    ...on LikeAnswer { liked }
                    ...on LikeDislikeAnswer { liked }
                    ...on ChoiceAnswer { choice }
                    ...on RegulatorAnswer { rating normalized }
                    ...on RankingAnswer { rankedItems }
                    ...on FavoriteAnswer { favoriteItem }
                  }
                }
              }
              states {
                key
                value
              }
            }
            changedAttributes
            stateKey
            event
          },
        }`,
       variables: { contextID: payload } }).subscribe({
      next(data) {
        commit('subscribeContext', data);
      },
      error(err) { console.error('err', err); },
    });
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
        mutation createFavoriteAnswer($questionID: ID!, $favoriteItem: ID) {
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

  subscribeContext(state, payload) {
    state.currentContext.context = payload.data.contextUpdate.context;
  },

  unsubscribeContext(state) {
    state.currentContext.context = null;
  },

  cleanCurrentContext(state) {
    state.currentContext.answerList = [];
    state.currentContext.context = {};
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
    state.currentContext.context = payload.data.context;
    localStorage.setItem('currentContext',JSON.stringify(payload.data.context));
    Router.push('/survey');
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

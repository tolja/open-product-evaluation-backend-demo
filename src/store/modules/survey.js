import gql from 'graphql-tag';
import client from '@/api/client';

const state = {
    answerList: [],
    choiceAnswers: [],
    likeAnswers: [],
    likeDislikeAnswers: [],
    favoriteAnswers: [],
    rankingAnswers: [],
    regulatorAnswers: [],
    votes: []
};


const getters = {

getVotes(state) {
  return state.votes;
},

getChoiceAnswers(state) {
  return state.choiceAnswers;
},
getLikeAnswers(state) {
  return state.likeAnswers;
},
getLikeDislikeAnswers(state) {
  return state.likeDislikeAnswers;
},
getFavoriteAnswers(state) {
  return state.favoriteAnswers;
},
getRankingAnswers(state) {
  return state.rankingAnswers;
},
getRegulatorAnswers(state) {
  return state.regulatorAnswers;
}

}

const actions = {

  cleanCurrentContextAnswers(context) {
    context.commit('cleanCurrentContextAnswers');
  },

  async getVotes({ commit }, payload) {
    client.cache.data.clear()
    const data = await client.query({
      query: gql`
        query getVotes($surveyID: ID!) {
          votes(surveyID: $surveyID)
          {
              id
            creationDate
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
          },
        }`,
      variables: { surveyID: payload },
    });
    console.log(data);
    commit('getVotes', data);
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
        mutation createRegulatorAnswer($questionID: ID!, $rating: Float) {
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

  cleanCurrentContextAnswers(state) {

    state.answerList = [];
    state.choiceAnswers = [];
    state.likeAnswers = [];
    state.likeDislikeAnswers = [];
    state.regulatorAnswers = [];
    state.favoriteAnswers = [];
    state.rankingAnswers = [];
    state.votes = [];

  },

  getVotes(state, payload) {
    state.votes = payload.data.votes
  },

  createChoiceAnswer(state, payload) {
    state.answerList.push(payload.data.createAnswer.answer);
    state.choiceAnswers.push(payload.data.createAnswer.answer.question);
  },
  createLikeAnswer(state, payload) {
    state.answerList.push(payload.data.createAnswer.answer);
    state.likeAnswers.push(payload.data.createAnswer.answer.question);
  },
  createLikeDislikeAnswer(state, payload) {
    state.answerList.push(payload.data.createAnswer.answer);
    state.likeDislikeAnswers.push(payload.data.createAnswer.answer.question);
  },
  createRegulatorAnswer(state, payload) {
    state.answerList.push(payload.data.createAnswer.answer);
    state.regulatorAnswers.push(payload.data.createAnswer.answer.question);
  },
  createFavoriteAnswer(state, payload) {
    state.answerList.push(payload.data.createAnswer.answer);
    state.favoriteAnswers.push(payload.data.createAnswer.answer.question);
  },
  createRankingAnswer(state, payload) {
    state.answerList.push(payload.data.createAnswer.answer);
    state.rankingAnswers.push(payload.data.createAnswer.answer.question);
  },

};

export default {
  state,
  getters,
  actions,
  mutations
};


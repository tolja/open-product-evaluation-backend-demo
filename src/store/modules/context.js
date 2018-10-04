import gql from 'graphql-tag';
import Router from '@/router';
import client from '@/api/client';
import SubscriptionClient from '@/api/subscriptionClient'

const state = {
  contextList: [],
  context: JSON.parse(localStorage.getItem('currentContext')),

};

const getters = {

  getContextList( state ){
    return state.contextList
  },

  getCurrentContext( state ){
    return state.context;
  },


}

const actions = {

  cleanCurrentContext(context) {
    context.commit('cleanCurrentContext');
  },

  async getContext({ commit }, payload) {
      console.log("getting context")
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
    SubscriptionClient.unsubscribe('contextUpdate');
    commit('unsubscribeContext');
  },

   async subscribeContext({ commit, dispatch }, payload){

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

}

const mutations = {

  subscribeContext(state, payload) {
    state.context = payload.data.contextUpdate.context;
  },

  unsubscribeContext(state) {
    state.context = null;
  },

  cleanCurrentContext(state) {
    state.context = {};
  },

  getContextList(state, payload) {
    state.contextList = payload.data.contexts;
  },

  setCurrentContext(state, payload) {
    console.log("setting current context")
    state.context = payload.data.context;
    localStorage.setItem('currentContext',JSON.stringify(payload.data.context));
    Router.push('/survey');
  },

};

export default {
  state,
  getters,
  actions,
  mutations
};

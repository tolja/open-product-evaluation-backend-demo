import gql from 'graphql-tag';
import Router from '@/router';
import client from '@/api/client';
import SubscriptionClient from '@/api/subscriptionClient';

const state = {
    token: localStorage.getItem('token'),
    deviceID: localStorage.getItem('deviceID'),
    hasContext: localStorage.getItem('hasContext')
};

const getters = {

  getDeviceID( state ){
    return state.deviceID;
  },

  getDeviceToken(state) {
    return state.token;
  },

  hasContext(state) {
    return state.hasContext;
  }

}

const actions = {

  async createDevice({ commit }) {
    const payload = await client.mutate(
      {mutation: gql`
        mutation createDevice($name: String!) {
          createDevice(data: {name: $name}) {
            device {
              id
            }
            token
          }
        }`,
      variables: { name: "Demo-Client" },
    });
    commit('createDevice', payload);
  },

  async updateDevice({ commit }, contextID) {
    await client.mutate({
      mutation: gql`
        mutation updateDevice($deviceID: ID!, $context: ID) {
          updateDevice(data: {context: $context}, deviceID: $deviceID) {
            device {
              id
              name
            }
          }
        }`,
      variables: { deviceID: state.deviceID, context: contextID },
    });
    commit('updateDevice');
  },

  async updateDeviceOwners({ commit }, owners) {
   const data = await client.mutate({
      mutation: gql`
        mutation updateDeviceOwners($deviceID: ID!, $context: ID, $owners: [ID!]) {
          updateDevice(data: {context: $context, owners: $owners}, deviceID: $deviceID) {
            device {
              id
              name
            }
          }
        }`,
      variables: { deviceID: state.deviceID, context: null, owners: owners },
    });
    commit('updateDeviceOwners', data);
  },

  async deleteDeviceFromContext({ commit }) {
    await client.mutate({
      mutation: gql`
        mutation updateDevice($deviceID: ID!, $context: ID) {
          updateDevice(data: {context: $context}, deviceID: $deviceID) {
            device {
              id
              name
            }
          }
        }`,
      variables: { deviceID: state.deviceID, context: null },
    });
    commit('deleteDeviceFromContext');
  },

  async subscribeDevice({ commit, dispatch } ){

   await client.subscribe({
      query: gql`subscription subscribeDevice($deviceID: ID!) {
        deviceUpdate(deviceID: $deviceID)
        {
          device {
          id
          lastUpdate
          context {
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
          }
          }
          changedAttributes
          event
        },
      }`,
      variables: { deviceID: state.deviceID } }).subscribe({
      next(data) {
        console.log(data)
        if(data.data.deviceUpdate.changedAttributes && (data.data.deviceUpdate.changedAttributes).includes('context')) {

          if(data.data.deviceUpdate.device.context !== null) {
            console.log("context!=null")
            dispatch('getContext', data.data.deviceUpdate.device.context.id)
          }
        }


      },
      error(err) { console.error('err', err); },
    });
  },

  reconnectClient() {
    SubscriptionClient.close();
    SubscriptionClient.connect();
  },

  unsubscribeDevice(){
    SubscriptionClient.unsubscribe('deviceUpdate');
  },

  deleteToken({commit }) {
    commit('deleteToken')
  }

}

const mutations = {

  createDevice(state, payload) {
    state.deviceID = payload.data.createDevice.device.id;
    state.token = payload.data.createDevice.token;
    localStorage.setItem('deviceID',payload.data.createDevice.device.id);
    localStorage.setItem('token',payload.data.createDevice.token);
    Router.push('/context/list');
  },

  updateDevice(state) {
    state.hasContext = true;
    localStorage.setItem('hasContext',JSON.stringify(true));
  },

  updateDeviceOwners(state, payload) {
    console.log(payload)
  },

  deleteDeviceFromContext(state) {
    state.hasContext = false;
    localStorage.setItem('hasContext',JSON.stringify(false));
  },

  subscribeDevice(state, payload) {

    console.log(payload)


  },

  deleteToken(state) {
    localStorage.setItem('token', null);
    state.token = null;
  }


};

export default {
  state,
  getters,
  actions,
  mutations
};

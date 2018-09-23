import Device from '@/api/device';
import Router from '@/router';

const state = {
    token: localStorage.getItem('token'),
    deviceID: localStorage.getItem('deviceID'),
    hasContext: false
};

const getters = {

  getDeviceID( state ){
    return state.deviceID;
  },

  getDeviceToken(state) {
    return state.token;
  }
}

const actions = {

  createDevice(context) {
    Device.createDevice().then((data) => {
      context.commit('createDevice', data);
      Router.push('/device/info');
    })
  },

  updateDevice(context, payload) {
    Device.updateDevice(payload.contextID, context.getters.getDeviceID)
      .then((data) => {
        context.commit('updateDevice', data);
        Router.push('/survey');
      })
  },

}

const mutations = {

  createDevice(state, payload) {
    state.deviceID = payload.data.createDevice.device.id;
    state.token = payload.data.createDevice.token;
    localStorage.setItem('deviceID',payload.data.createDevice.device.id);
    localStorage.setItem('token',payload.data.createDevice.token);
  },

  updateDevice(state, data) {
    state.hasContext = true;
  },


};

export default {
  state,
  getters,
  actions,
  mutations
};

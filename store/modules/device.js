import Device from '@/api/device';
import Router from '@/router';

const state = {
  device: {
    token: null,
    deviceID: null,
    hasContext: false
  }
};

const getters = {

  getDeviceID( state ){
    return state.device.deviceID;
  },

  getDeviceToken(state) {
    return state.device.token;
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
    state.device.deviceID = payload.data.createDevice.device.id;
    state.device.token = payload.data.createDevice.token;
    localStorage.setItem('token',payload.data.createDevice.token);
  },

  updateDevice(state, data) {
    state.device.hasContext = true;
  },


};

export default {
  state,
  getters,
  actions,
  mutations
};

import Vue from 'vue';
import Vuex from 'vuex';
import Device from './modules/device';
import Context from './modules/context';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    device: Device,
    contexts: Context
  },
});

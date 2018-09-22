import Vue from 'vue';
import Vuex from 'vuex';
import Device from '../store/modules/device';
import Context from '../store/modules/context';
import Answer from '../store/modules/answer';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    device: Device,
    contexts: Context,
    answer: Answer
  },
});

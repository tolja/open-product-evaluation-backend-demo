import Context from '@/api/context';

const state = {
  contexts: [],
  currentContext: {}
};

const getters = {

  getContextList( state ){
    return state.contexts
  },

  getCurrentContext( state ){
    return state.currentContext.context;
  },


}

const actions = {

  getContextList(context) {
    Context.getContextList().then((data) => {
      context.commit('getContextList', data);
    })
  },

  setCurrentContext(context, id) {
      context.commit('setCurrentContext', id);
  },

}

const mutations = {

  getContextList(state, payload) {
    state.contexts = payload.data.contexts;
  },

  setCurrentContext(state, payload) {
    state.currentContext = payload;
  },

};

export default {
  state,
  getters,
  actions,
  mutations
};

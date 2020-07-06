import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: JSON.parse(localStorage.getItem('user')) || null
  },
  mutations: {
    setuser: function(state, user) {
      localStorage.setItem('user', JSON.stringify(user));
      state.user = user
    }
  },
  actions: {},
  modules: {}
})

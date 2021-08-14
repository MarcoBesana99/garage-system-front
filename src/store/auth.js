
export default {
  namespaced: true,
  state: {
    authenticated: false,
    token : null,
  },
  getters: {
    authenticated(state) {
      return state.authenticated
    },
    token(state) {
      return state.token
    }
  },
  mutations: {
    SET_AUTHENTICATED(state, value) {
      state.authenticated = value
    },
    SET_TOKEN(state, value) {
      state.token = value
    }
  },
  actions: {
    setAuthenticated({ commit }, data) {
      commit('SET_AUTHENTICATED', data)
    },
    setToken({ commit }, data) {
      commit('SET_TOKEN', data)
    },
  }
}
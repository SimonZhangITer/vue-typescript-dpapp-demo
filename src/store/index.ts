import Vue from 'vue'
import Vuex, { ActionTree, MutationTree } from 'vuex'
import actions from './actions'
import mutations from './mutations'
// import 'babel-polyfill'

Vue.use(Vuex)

interface State {
  login: Boolean,
  modules: Object[],
}

let state: State = {
  login: false,
  modules: []
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
})

import Vue from 'vue'
import Vuex, { ActionTree, MutationTree } from 'vuex'
import actions from './actions'
import mutations from './mutations'
// import 'babel-polyfill'

Vue.use(Vuex)

interface State {
  login: Boolean,
  modules: Object[],
  count: number
}

let state: State = {
  login: false,
  modules: [],
  count: 0
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
})

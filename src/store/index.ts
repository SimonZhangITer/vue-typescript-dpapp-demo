import Vue from 'vue'
import Vuex, { ActionTree, MutationTree } from 'vuex'
import actions from './actions'
import mutations from './mutations'
// import 'babel-polyfill'

Vue.use(Vuex)

interface State {
  login: Boolean
}

const state: State = {
  login: false
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
})

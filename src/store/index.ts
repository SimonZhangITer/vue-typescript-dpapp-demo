import Vue from 'vue'
import Vuex, { ActionTree, MutationTree } from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
// import 'babel-polyfill'

Vue.use(Vuex)

interface State {
  login: Boolean,
  modules: StoreState.module[],
  headline: StoreState.headline[],
  activities: StoreState.activity[],
  superSales: StoreState.superSale[],
  shops: StoreState.shop[],
  searchVal: string
}

let state: State = {
  login: false,
  modules: [],
  headline: [],
  activities: [],
  superSales: [],
  shops: [],
  searchVal: ''
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})

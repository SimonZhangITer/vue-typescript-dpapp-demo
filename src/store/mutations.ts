import TYPES from './types'
import { MutationTree } from 'vuex'

const mutations: MutationTree<any> = {
  [TYPES.SET_MODULES](state, modules): void {
    state.modules = modules
  },
  [TYPES.SET_HEADLINE](state, headline): void {
    state.headline = headline
  },
  [TYPES.SET_ACTIVITIES](state, activities): void {
    state.activities = activities
  },
  [TYPES.SET_SUPER_SALE](state, superSales): void {
    state.superSales = superSales
  },
  [TYPES.SET_SHOPS](state, shops): void {
    state.shops = shops
  },
  [TYPES.SET_SEARCH_VAL](state, val): void {
    state.searchVal = val
  }
}
export default mutations

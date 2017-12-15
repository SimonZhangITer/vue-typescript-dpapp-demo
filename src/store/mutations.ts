import TYPES from './types'
import { MutationTree } from 'vuex'

const mutations: MutationTree<any> = {
  [TYPES.SET_MODULES](state, modules): void {
    state.modules = modules
  },
  [TYPES.SET_HEADLINE](state, headline): void {
    state.headline = headline
  }
}
export default mutations

import TYPES from './types'
import { MutationTree } from 'vuex'

const mutations: MutationTree<any> = {
  [TYPES.SET_MODULES](state, modules): void {
    state.modules = modules
  }
}
export default mutations

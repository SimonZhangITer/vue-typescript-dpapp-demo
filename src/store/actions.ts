import { ActionTree } from 'vuex'
import axios from 'axios'
import TYPES from './types'


const actions: ActionTree<any, any> = {
  async initAjax({ dispatch }) {
    Promise.all([dispatch('getModules'), dispatch('getHeadline')])
  },
  async getModules({ state, commit }) {
    const res: Ajax.AjaxResponse = await axios.get('/modules').then((res) => res.data)
    if (res && res.code == 200) commit(TYPES.SET_MODULES, res.result.list)
  },
  async getHeadline({ state, commit }) {
    const res: Ajax.AjaxResponse = await axios.get('/headline').then((res) => res.data)
    if (res && res.code == 200) commit(TYPES.SET_HEADLINE, res.result.list)
  },
}

export default actions

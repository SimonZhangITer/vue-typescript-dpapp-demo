import { ActionTree } from 'vuex'
import axios from 'axios'
import TYPES from './types'

const actions: ActionTree<any, any> = {
  // ajax 初始化
  async initAjax({ dispatch }) {
    dispatch('getModules')
    dispatch('getHeadline')
    setTimeout(() => dispatch('getActivity'), 2000)
    dispatch('getSuperSale')
    dispatch('getShops')
  },
  // 获取modules
  async getModules({ state, commit }) {
    const res: Ajax.AjaxResponse = await axios.get('/modules').then((res) => res.data).catch((e: string) => console.error(e))
    if (res && res.code == 200) commit(TYPES.SET_MODULES, res.result.list)
  },
  // 点评头条
  async getHeadline({ state, commit }) {
    const res: Ajax.AjaxResponse = await axios.get('/headline').then((res) => res.data).catch((e: string) => console.error(e))
    if (res && res.code == 200) commit(TYPES.SET_HEADLINE, res.result.list)
  },
  // 活动面板
  async getActivity({ state, commit }) {
    const res: Ajax.AjaxResponse = await axios.get('/activity').then((res) => res.data).catch((e: string) => console.error(e))
    if (res && res.code == 200) commit(TYPES.SET_ACTIVITIES, res.result.list)
  },
  // 特卖优惠
  async getSuperSale({ state, commit }) {
    const res: Ajax.AjaxResponse = await axios.get('/supersale').then((res) => res.data).catch((e: string) => console.error(e))
    if (res && res.code == 200) commit(TYPES.SET_SUPER_SALE, res.result.list)
  },
  // 商户列表
  async getShops({ state, commit }) {
    const res: Ajax.AjaxResponse = await axios.get('/shops').then((res) => res.data).catch((e: string) => console.error(e))
    if (res && res.code == 200) commit(TYPES.SET_SHOPS, res.result.list)
  },
  // 更新搜索内容
  setSearchVal({ commit }, val: string) {
    commit(TYPES.SET_SEARCH_VAL, val)
  }
}

export default actions

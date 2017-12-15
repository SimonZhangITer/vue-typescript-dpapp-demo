import { ActionTree } from 'vuex'
import axios from 'axios'


const actions: ActionTree<any, any> = {
  async getList({ state }, pageNum) {
    console.log(pageNum);
    const res: Ajax.AjaxResponse = await axios.get('/list').then((res) => res.data)
    state.count = res.result
  },
  async test({ state }, str: string) {
    console.log('ss')
  }
}

export default actions

import { ActionTree } from 'vuex'
import axios from 'axios'


const actions: ActionTree<any, any> = {
  async getList({ state }) {
    const res: Ajax.AjaxResponse = await axios.get('/modules').then((res) => res.data)
    state.count = res.result
  },
}

export default actions

import { GetterTree } from 'vuex'

const getters: GetterTree<any, any> = {
  load(state): boolean {
    const { modules, headline, activities, superSales, shops } = state
    return !!(modules.length && headline.length && activities.length && superSales.length && shops.length)
  }
}

export default getters

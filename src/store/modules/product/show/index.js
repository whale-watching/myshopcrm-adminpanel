import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

export default {
  namespaced: true,
  state: {
    error: '',
    isLoading: false,
    retrieved: {
      files: []
    },
    companyProducts: [],
    productSellPrices: [],
  },
  actions,
  getters,
  mutations
}

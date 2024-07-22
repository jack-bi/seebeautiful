import ajaxService from './ajaxService'
import util from './util'
import store from '../store'
export default {
  getSNSettings: ()=> {
      let params = {
          sn: util.getSN()
      }
      return ajaxService.post('sn.settings.get', params)
  },
  setPromotionCode: () => {
      if(util.isBlank(store.getters.snConfig.agentCode)) return Promise.resolve({result:1});
      let params = {
          sn: util.getSN(),
          promotionCode: store.getters.snConfig.agentCode
      }
      return ajaxService.post('sn.user.promotionCode.set', params)
  }
}

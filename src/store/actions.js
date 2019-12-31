import {getDetail} from '../api/index'
export default {
  async getDetailInfo({commit}){
    const result = await getDetail()
    console.log(result);
    commit('setDetailInfo',result.data)
  },
  updateCount({commit},isAdd) {
    if(isAdd){
      commit('saveAdd')
    }else{
      
      commit('saveIncrement')
    }
  },
}
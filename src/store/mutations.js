export default {
  setCount(state) {
    state.count = ++state.count
  },
  setDetailInfo(state,detail){
    state.detail=detail
  },
  saveAdd(state){
    if(state.countI){
      state.countI++
    }
    },
    saveIncrement(state){
      if(state.countI>0){
       state.countI--
      }
      
    }
}
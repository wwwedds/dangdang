export default {
  setCount(state,countI) {
    state.count = ++state.count+countI
  },
  setDetailInfo(state,detail){
    state.detail=detail
  },
  updateCount(state,countI){
    state.countI=countI
  }
 ,
    updateReview(state,review){
      state.review_list=review
       }

    
}
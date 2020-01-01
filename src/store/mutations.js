export default {
  setCount(state) {
    
      state.count=++state.count
    
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
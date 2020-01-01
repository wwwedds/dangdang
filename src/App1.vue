<template>
  <div>
    <van-area
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import areaList from "./assets/area";
export default {
  name: "Address",
  data() {
    return {
      areaList,
      searchResult: []
    };
  },
  methods: {
 
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "万达广场",
            address: "郑州市二七区"
          }
        ];
      } else {
        this.searchResult = [];
      }
    }
  }
};
</script>

<style scoped>
</style>

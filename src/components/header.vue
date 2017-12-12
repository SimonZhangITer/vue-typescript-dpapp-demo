<template lang="pug">
  header
    .city 上海
    .search-wrap 输入商户名、地点
    .user
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class header extends Vue {
  city: string = "shanghai";

  mounted() {
    this.showCity();
  }

  showCity(): void {
    console.log(this.city);
  }
}
</script>

<style lang="stylus">
header {
  display: flex;
  height: 50px;
  line-height: 50px;
  background-color: #f63;
  color: #ffffff;
  text-align: center;

  .city {
    width: 18%;
  }

  .search-wrap {
    width: 64%;
    color: #b8b8b8;
    border-radius 25px
    background-color #FFF
  }

  .user {
    width: 18%;
  }
}
</style>


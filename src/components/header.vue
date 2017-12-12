<template lang="pug">
  header
    .city 上海
    .search-wrap 输入商户名、地点
    .user
       .icon
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
    position: relative;
    width: 20%;
  }

  .search-wrap {
    width: 62%;
    margin: 10px 0;
    line-height: 30px;
    color: #b8b8b8;
    border-radius: 25px;
    background-color: #FFF;
  }

  .user {
    display: flex;
    justify-content: center;
    width: 18%;

    .icon {
      background-image: url('//www.dpfile.com/app/app-m-module/static/d53930bbff0bf22cb8cea72503da44d9.png');
      background-repeat: no-repeat;
      background-position: left -67px;
      background-size: 250px;
      width: 28px;
      height: 100%;
    }
  }
}
</style>


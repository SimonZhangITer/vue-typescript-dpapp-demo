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

<style lang="stylus" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 50px;
  line-height: 50px;
  background-color: #f63;
  color: #ffffff;
  text-align: center;
  z-index: 9;

  .city {
    position: relative;
    width: 20%;
  }

  .search-wrap {
    position: absolute;
    width: 60%;
    left: 0;
    right: 0;
    top: 10px;
    margin: auto;
    line-height: 30px;
    color: #b8b8b8;
    border-radius: 25px;
    background-color: #FFF;
  }

  .user {
    position: absolute;
    right: 0;
    width: 20%;
    z-index: 99;
    height: 50px;

    .icon {
      background-image: url('//www.dpfile.com/app/app-m-module/static/d53930bbff0bf22cb8cea72503da44d9.png');
      background-repeat: no-repeat;
      background-position: left -67px;
      background-size: 250px;
      width: 28px;
      height: 100%;
      margin: 0 auto;
    }
  }
}
</style>


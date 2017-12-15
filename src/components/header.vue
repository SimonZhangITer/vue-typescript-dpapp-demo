<template lang="pug">
  header
    .city 上海
    .search-wrap(ref="search")
      span(ref="placeholder" v-if="!searchValue") 输入商户名、地点
      input(@input="onValueChange" @focus="onfocus" @blur="onBlur" ref="input" v-model="searchValue")
    .user
       .icon
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Action } from "vuex-class";

@Component
export default class header extends Vue {
  @Action setSearchVal: (val: string) => void;

  searchValue: string = "";

  mounted() {
    this.onChangeSize();
  }

  onValueChange() {
    const val: string = this.searchValue;
    this.setSearchVal(val);
  }

  onfocus(): void {
    const TRANS_X: string = "translateX(15px)";
    const LEFT: string = "0";
    const placeholder: any = this.$refs.placeholder;
    if (!placeholder) return;
    placeholder.style.left = LEFT;
    placeholder.style.transform = TRANS_X;
  }

  onBlur(): void {
    const placeholder: any = this.$refs.placeholder;
    if (placeholder) placeholder.removeAttribute("style");
  }

  onChangeSize(): void {
    window.addEventListener("scroll", (e: any) => {
      const TRANS_HEIGHT: number = 10;
      const BIG_WIDTH: string = "90%";
      const scrollY: number = window.scrollY;
      const el_search: any = this.$refs.search;
      const input: any = this.$refs.input;
      if (input) input.blur();
      if (!el_search) return;
      if (scrollY > TRANS_HEIGHT) el_search.style.width = BIG_WIDTH;
      else el_search.removeAttribute("style");
    });
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
    height: 30px;
    line-height: 30px;
    color: #b8b8b8;
    border-radius: 25px;
    background-color: #FFF;
    transition: width 0.1s ease;

    span {
      display: inline-block;
      position: absolute;
      width: 120px;
      left: 50%;
      transform: translateX(-50%);
      transition: all 0.2s ease;
    }

    input {
      position: absolute;
      left: 15px;
      padding: 0;
      margin: 0;
      width: 90%;
      color: #999;
      background: none;
      border: none;
      height: 30px;
      outline: none;
      caret-color: #f63;
    }
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


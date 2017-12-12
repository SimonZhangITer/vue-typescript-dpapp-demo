<template lang="pug">
  .main-wrapper
      v-header
      modules
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { State } from "vuex-class";
import header from "@/components/header.vue";
import modules from "@/components/modules.vue";

@Component({
  components: {
    "v-header": header,
     modules
  }
})
export default class App extends Vue {
  // 初始化数据
  msg = 123;

  @State("login") login: Boolean;

  // 声明周期钩子
  mounted() {
    console.log(this.login);
  }

  // 计算属性
  get computedMsg() {
    return "computed " + this.msg;
  }

  // 方法
  greet() {
    alert("greeting: " + this.msg);
  }
}
</script>

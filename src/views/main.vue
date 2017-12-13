<template lang="pug">
  .main-wrapper
      v-header
      modules
      headline
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { State } from "vuex-class";
import header from "@/components/header.vue";
import modules from "@/components/modules.vue";
import headline from "@/components/headline.vue";

@Component({
  components: {
    "v-header": header,
    modules,
    headline
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
}
</script>

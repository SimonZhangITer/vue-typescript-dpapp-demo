<template lang="pug">
  .main-wrapper
    v-header
    modules
    headline
    board
    super_sale
    shop_list
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { State, Action } from "vuex-class";
import header from "@/components/header.vue";
import modules from "@/components/modules.vue";
import headline from "@/components/headline.vue";
import board from "@/components/board.vue";
import super_sale from "@/components/super_sale.vue";
import shop_list from "@/components/shops.vue";

@Component({
  components: {
    "v-header": header,
    modules,
    headline,
    board,
    super_sale,
    shop_list
  }
})
export default class App extends Vue {
  // 初始化数据
  msg = 123;

  @State login: Boolean;
  @Action getList: (str: string) => void;

  get isLogin(): string {
    return this.$store.state.login;
  }
  // 声明周期钩子
  mounted() {
    // this.getList('2');
    console.log(this.$store.dispatch("getList"));
  }
}
</script>

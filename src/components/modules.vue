<template lang="pug">
  swiper.modules(:options="swiperOption")
    swiper-slide.page(v-for="(page,index) in modules" :key="index")
      .module(v-for="module in page" :key="module.name")
        img(v-lazy="module.imgUrl")
        .name {{module.name}}
    .swiper-pagination(slot="pagination")
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { State, Action } from "vuex-class";

@Component({
  name: "modules",
  components: { swiper, swiperSlide }
})
export default class modules extends Vue {
  @State modules: StoreState.module[];

  private swiperOption: Object = {
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  };
}
</script>

<style lang="stylus">
.modules {
  padding-bottom: 25px;

  .page {
    .module {
      display: inline-block;
      width: 20%;
      text-align: center;
      padding-top: 13px;

      img {
        height: 44px;
        width: 44px;
      }

      .name {
        font-size: 12px;
      }
    }
  }

  .swiper-pagination {
    bottom: 3px;

    span {
      background: #f5734b;
    }
  }
}
</style>

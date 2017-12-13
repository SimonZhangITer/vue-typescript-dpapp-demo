<template lang="pug">
  .headline-wrap
    .logo
    swiper.headline(:options="swiperOption")
      swiper-slide.article(v-for="(item,index) in articles" :key="index")
        .title {{item.title}}
        img(:src="")
        .img-count
      .swiper-pagination(slot="pagination")
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import headline from "@/assets/mock/headline.js";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

@Component({
  name: "headline",
  components: { swiper, swiperSlide }
})
export default class modules extends Vue {
  articles: Object[] = headline.list;
  swiperOption: Object = {
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  };
  mounted() {
    console.log(this.articles);
  }
}
</script>

<style lang="stylus" scoped>
.modules {
  padding-bottom: 22px;

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

  .swiper-pagination span {
    background: #f5734b;
  }
}
</style>

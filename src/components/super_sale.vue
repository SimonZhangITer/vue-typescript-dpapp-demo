<template lang="pug">
  .sales-wrap
    .wrap(v-for="(saleItem,index) in sales" :key="index")
      .sale-item
        .title-wrap
          .titleIcon
          .more-benift
        .content
          .item(v-for="item in saleItem" :key="item.title")
            img(:src="item.imgUrl" width="100%")
            .title {{item.title}}
            .price-wrap
              .price.now {{item.price_current}}
              .price.old(v-cloak) {{item.price_old}}
              .cutdown(v-cloak) {{item.price_down}}
      .divider

</template>
 <script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import sales from "../assets/mock/super_sale";

export default class SuperSale extends Vue {
  sales: Object[] = sales.list;
}
</script>

<style lang="stylus" scoped>
.sale-item {
  padding: 0 5px;

  .title-wrap {
    height: 32px;
    line-height: 32px;
    padding: 5px 0;
  }

  .titleIcon {
    display: inline-block;
    height: 30px;
    width: 75px;
    background-size: 200px;
    background-image: url('//www.dpfile.com/app/app-m-module/static/a41a9b3b0c7b20af96d3cacbfd8692c5.png');
    background-repeat: no-repeat;
  }

  .content {
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    overflow: hidden;

    .item {
      display: block;
      width: 33%;
      padding: 0 2px;
      box-sizing: border-box;
      border-radius: 3px;

      .title {
        color: #333;
        font-size: 14px;
        padding-top: 3px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      .price-wrap {
      }
    }
  }
}

.wrap {
  &:nth-child(1) {
    .titleIcon {
      background-position: 0 -29px;
    }
  }

  &:nth-child(2) {
    .titleIcon {
      background-position: 0 -63px;
    }
  }
}
</style>

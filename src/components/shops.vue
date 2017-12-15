<template lang="pug">
  .shop-list-wrap
    .head 猜你喜欢
    .shop-list
      .shop(v-for="shop in shopList" :key="shop.url")
        .shop-logo
          img(v-lazy="shop.imgUrl" width="90px" height="90px")
          .tag 免预约
        .content
          .title {{shop.shopName}}
          .desc {{shop.desc}}
          .status
            .price-wrap
              span.price.now {{shop.price_current}}
              span.price.old {{shop.price_old}}
              span.cutdown {{shop.price_cutdown}}
            .sale-count {{shop.sale_count}}
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { State } from "vuex-class";

@Component
export default class Shops extends Vue {
  @State shops: StoreState.shop[];
  @State searchVal: string;

  get shopList(): StoreState.shop[] {
    const shops = this.shops;
    const searchVal = this.searchVal;
    return shops.filter(
      (el: StoreState.shop) => el.shopName.indexOf(searchVal) > -1
    );
  }
}
</script>

<style lang="stylus" scoped>
.shop-list-wrap {
  .head {
    padding-left: 15px;
    font-size: 14px;
    color: #777;
    padding: 10px;
  }

  .shop-list {
    .shop {
      display: -webkit-box;
      padding: 0 10px 10px 10px;

      .shop-logo {
        position: relative;

        .tag {
          position: absolute;
          top: 0;
          font-size: 12px;
          transform: scale(0.98);
          padding: 3px 7px;
          background-color: #000;
          color: #e0ba81;
          font-weight: 700;
        }
      }

      .content {
        flex: 1;
        padding-left: 10px;

        .title {
          font-size: 17px;
          font-weight: 700;
          color: #111;
          padding-right: 8px;
        }

        .desc {
          font-size: 13px;
          color: #777;
          padding: 10px 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .status {
          display: flex;
          align-items: center;

          .price-wrap {
            position: relative;

            .price {
              &.now {
                color: #f63;
                font-size: 22px;
                font-weight: 700;
              }

              &.old {
                color: #999;
                font-size: 12px;
                padding-left: 10px;
                text-decoration: line-through;
              }

              &::before {
                content: '\A5';
                font-size: 14px;
                padding-right: 8px;
              }

              &:empty {
                display: none;
              }
            }

            .cutdown {
              position: absolute;
              top: 5px;
              padding: 1px 3px;
              border-radius: 2px;
              color: #f63;
              font-size: 12px;
              border: 1px solid #ff9470;
              max-width: 60px;
              transform: scale(0.75);
              margin-left: -3px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;

              &:empty {
                display: none;
              }
            }
          }

          .sale-count {
            flex: 1;
            font-size: 13px;
            color: #777;
            text-align: right;
          }
        }
      }
    }
  }
}
</style>

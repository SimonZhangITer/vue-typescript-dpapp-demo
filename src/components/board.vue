<template lang="pug">
  .board-wrap
    .divider
    .wrap(v-for="(board,index) in activities" :key="index")
      .board
        .item(v-for="item in board" :key="item.imgUrl")
          .cnt
            .title {{item.title}}
            .desc {{item.desc}}
          img(:src="item.imgUrl")
      .divider
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { State } from "vuex-class";

@Component
export default class Board extends Vue {
  @State activities: StoreState.activity[]
}
</script>

<style lang="stylus" scoped>
.board-wrap {
  .board {
    display: flex;
    align-items: center;

    .item {
      display: flex;
      flex: 1;
      align-items: center;
      padding: 10px;

      .cnt {
        flex: 1;

        .title {
          font-size: 16px;
        }

        .desc {
          font-size: 12px;
          color: #999;
          margin-top: 5px;
        }
      }

      img {
        height: 60px;
        width: 60px;
      }
    }
  }

  .wrap:nth-child(2) {
    .item:first-child {
      border-right: 1px solid #f1f1f1;
    }
  }

  .wrap:nth-child(3) {
    .item {
      background-color: #ffa383;
      color: white;
      margin-right: 5px;

      .desc {
        width: 75px;
        padding: 2px;
        border-radius: 12px;
        background-color: #f97e54;
        transform: scale(0.9);
        color: #e6e6e6;
        text-align: center;
      }
    }

    .item:last-child {
      background-color: #44d0cd;
      margin: 0;

      .desc {
        background-color: #22bab7;
      }
    }
  }
}
</style>

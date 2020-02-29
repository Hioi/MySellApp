<template>
  <div class="goods-div">
    <div class="left-div">
      <ul class="content">
        <div
          @click="clickLeftTitle(index)"
          v-for="(item,index) in list"
          :key="item.name"
          :class="{leftGoods:true,selected:index==curSelected}"
        >
          <img v-show="item.type==2" src="../assets/imgs/img/special_1@2x.png" />
          <span>{{ item.name }}</span>
        </div>
      </ul>
    </div>
    <div class="right-div">
      <ul class="content">
        <div :id="index" v-for="(item,index) in list" :key="item.id">
          <h5>{{item.name}}</h5>
          <div v-for="child in item.foods" :key="child.id" class="foods-child-div">
            <img :src="child.icon" alt />
            <label>{{child.name}}</label>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { getGoods } from "../api/apis";
import BScroll from "better-scroll";

export default {
  data() {
    return {
      list: {},
      curSelected: 0
    };
  },
  created() {
    getGoods().then(res => {
      this.list = res.data.data;
    });
  },
  mounted() {
    new BScroll(document.querySelector(".left-div"), {
      click: true
    });
    this.rightDiv = new BScroll(document.querySelector(".right-div"));
  },
  methods: {
    clickLeftTitle(index) {
      this.curSelected = index;

      this.rightDiv.scrollToElement(document.getElementById(index), 500);
    }
  }
};
</script>

<style lang="less" scoped>
.selected {
  background: #fff;
}

.goods-div {
  display: flex;
  height: 400px;
  .left-div {
    overflow: scroll;
    height: 100%;
    width: 80px;
    background: #ccc;
    .leftGoods {
      height: 60px;
      margin: 0 8px;
      display: flex;
      align-items: center;
      img {
        width: 14px;
        height: 14px;
      }
    }
  }
  .right-div {
    flex: 1;
    overflow: scroll;

    .foods-child-div {
      img {
        width: 100px;
        height: 100px;
      }
    }
  }
}
</style>
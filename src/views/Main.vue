<template>
  <div>
    <!-- 容器 -->
    <div class="head-div" :style="{backgroundImage:'url('+data.avatar+')'}">
      <img class="head-foodPic" :src="data.avatar" />
      <div>
        <h2>{{data.name}}</h2>
        <p>{{data.description}}/{{data.deliveryTime}}分钟送达</p>
        <div class="jian">
          <img src="../assets/imgs/img/decrease_1@2x.png" alt />
          <p>{{data.supports[0].description}}</p>
        </div>
      </div>
    </div>

    <div class="router-link-div">
      <router-link to="/goods">商品</router-link>
      <router-link to="/evaluate">评价</router-link>
      <router-link to="/merchant">商家</router-link>
    </div>

    <router-view></router-view>

    <div class="shopcar-bar">购物车</div>
  </div>
</template>

<script>
import { getSeller } from "../api/apis";
export default {
  data() {
    return {
      data: {}
    };
  },
  mounted() {
    var that = this;
    that.$router.push("/goods");
  },
  created() {
    getSeller().then(res => {
      this.data = res.data.data;
    });
  }
};
</script>

<style lang="less" scoped>
.head-div {
  display: flex;
  padding: 12px;
  .head-foodPic {
    width: 70px;
    height: 70px;
    margin-right: 16px;
  }
  h2 {
    color: #fff;
  }
  p {
    color: #fff;
  }
  .jian{
    display: flex;
    align-items: center;
    img{
      width: 14px;
      height: 14px;
    }
  }
}
.router-link-div {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 40px;
  text-align: center;
  width: 100%;
}
.router-link-active {
  color:red
}
.shopcar-bar {
  position: fixed;
  height: 60px;
  width: 100%;
  bottom: 0;
  background-color: #141c27;
  img {
    width: 70%;
    height: 80%;
  }

}
</style>
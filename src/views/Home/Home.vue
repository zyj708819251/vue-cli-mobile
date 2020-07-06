<template>
  <div class="home">
    <div class="home-wrap"><router-view /></div>
    <van-tabbar route>
      <van-tabbar-item replace to="/Home/Person" icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item replace to="/Home/Search" icon="search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant';
export default {
  name: 'home',
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  created() {
    
  },
  methods:{

  }
};
</script>
<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  @include flex(column);
  .container {
    @include height(100%, 100px);
    @include flex;
  }
}
</style>

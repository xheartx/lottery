<template>
  <div id="app">
    <router-view></router-view>
    <div class="tabbar" v-if="$route.path !== '/'">
      <tabbar>
        <tabbar-item :selected="$route.path === '/lottery'" link="/lottery">
          <span class="lottery-icon" slot="icon"></span>
          <span slot="label">抽奖</span>
        </tabbar-item>
        <!-- <tabbar-item :selected="$route.path === '/recording'" link="/recording">
          <span class="recording-icon" slot="icon"></span>
          <span slot="label">记录</span>
        </tabbar-item> -->
        <tabbar-item :selected="$route.path === '/setup'" link="/setup">
          <span class="setup-icon" slot="icon"></span>
          <span slot="label">设置</span>
        </tabbar-item>
        <!-- <tabbar-item :selected="$route.path === '/admin'" link="/setup" v-if="$route.path === '/admin'">
          <span class="admin-icon" slot="icon"></span>
          <span slot="label">高级设置</span>
        </tabbar-item> -->
      </tabbar>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Tabbar from 'vux/src/components/tabbar/tabbar'
import TabbarItem from 'vux/src/components/tabbar/tabbar-item'
export default {
  name: 'app',
  computed: {
    ...mapState({
      frequency: state => state.frequency
    })
  },
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
a{text-decoration:none}
body {
  background-color: #fbf9fe;
  .weui-tabbar{
    height: 1.31rem;
    font-size: 0;
    &:before{
      border-color: #e1e2e3;
    }
  }
  .weui-tabbar__item {
    padding: 0;
    &.weui-bar__item_on {
      .weui-tabbar__label{
        color: #1ba196;
      }
      .weui-tabbar__icon {
        .lottery-icon{
          background-image: url('./assets/lottery_yes.png');
        }
        .recording-icon{
          background-image: url('./assets/recording_yes.png');
        }
        .setup-icon{
          background-image: url('./assets/set_yes.png');
        }
        .admin-icon{
          background-image: url('./assets/admin_yes.png');
        }
      }
    }
    .weui-tabbar__icon {
      display: block;
      width: 0.65rem;
      height: 0.65rem;
      margin: 0.2rem auto 0;
      span {
        display: block;
        width: 0.65rem;
        height: 0.65rem;
        background-position: center;
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }
      .lottery-icon{
        background-image: url('./assets/lottery_no.png');
      }
      .recording-icon{
        background-image: url('./assets/recording_no.png');
      }
      .setup-icon{
        background-image: url('./assets/set_no.png');
      }
      .admin-icon{
        background-image: url('./assets/admin_no.png');
      }
    }
    .weui-tabbar__label {
      display: block;
      font-size: 10px;
      color: #827d7b;
      margin-top: 0.1rem;
      line-height: 1;
    }
  }
}
 .weui-toast{
   padding: 0 0.5rem;
   .weui-toast__content{
     margin-top: 0.1rem;
   }
 }
</style>

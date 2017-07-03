<template>
   <div class="set-form">
    <group title="自定义设置随机参数">
      <!--页数-->
      <x-switch title="是否开启" v-model="isSwitch"></x-switch>
      <x-input title="正常随机次数" placeholder="请填写正常随机次数" type="number" v-model="times"></x-input>
      <x-input title="指定用户页码" placeholder="指定用户所在页码" type="number" v-model="oneSet"></x-input>
      <x-input title="指定用户排序" placeholder="指定用户所在排序" type="number" v-model="twoSet"></x-input>
    </group>
    <div class="footer-btn carry" @click.stop.prevent="_submitCarry">保存</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Group from 'vux/src/components/group/'
import XInput from 'vux/src/components/x-input/'
import XSwitch from 'vux/src/components/x-switch/'

export default {
  data () {
    return {
      isSwitch: false,
      times: '',
      oneSet: '',
      twoSet: ''
    }
  },
  created () {
    this.times = this.customize.times
    this.oneSet = this.customize.oneSet
    this.twoSet = this.customize.twoSet
    this.isSwitch = this.customize.switch
  },
  computed: {
    ...mapState({
      customize: state => state.customize
    })
  },
  methods: {
    _submitCarry () {
      this.$store.dispatch('ADMIN_SAVE_SET', { times: parseInt(this.times) + 1, oneSet: this.oneSet, twoSet: this.customize.twoSet, switch: this.isSwitch })
      this.$vux.toast.show({
        text: '    保存成功     '
      })
    }
  },
  components: {
    Group,
    XInput,
    XSwitch
  }
}
</script>

<style lang="less">
 .set-form {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 1.31rem;
    width: 100%;
    background: #eee;
    .weui-cells__title{
      margin-top: 0.1rem;
    }
    .weui-cells{
      &:before, &:after{
        display: none;
      }
    }
    .weui-cell {
      padding: 0.26rem 0.2rem;
      &.noline{
        &:before {
          display: none;
        }
      }
      .weui-label {
        width: 3rem !important;
        font-size: 16px;
        color: #666;
        letter-spacing: 1px;
        word-spacing: 1.3px;
        vertical-align: top;
        &:before {
          content: '';
          display: inline-block;
          width: 0.26rem;
          line-height: inherit;
          vertical-align: middle;
          color: #09BB07;
        }
      }
      .weui-cell__bd{
        input{
          font-size: 16px;
          vertical-align: top;
          color: #000;
          opacity: 1;
        }
      }
      &.disabled {
        .weui-cell__primary {
          padding-right: 0.5rem;
          &:after {
            content: " ";
            display: inline-block;
            height: 6px;
            width: 6px;
            border-width: 2px 2px 0 0;
            border-color: #C8C8CD;
            border-style: solid;
            -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
            transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
            position: relative;
            top: -2px;
            position: absolute;
            top: 50%;
            right: 15px;
            margin-top: -4px;
          }
        }
      }
      &.weui-cell_warn {
        .weui-label {
          &:before {
            content: '*';
            display: inline-block;
            width: 0.26rem;
            vertical-align: middle;
            color: red;
          }
        }
      }
    }
    .carry {
      height: 1.2rem;
      background: #b2b2b2;
      border-radius: 0.1rem;
      line-height: 1.2rem;
      color: #fff;
      font-size: 18px;
      text-align: center;
      margin: 1rem 0.3rem 0;
      background: #09BB07;
    }
  }
</style>

<template>
   <div class="set-form">
    <group title="随机数抽取">
      <!--页数-->
      <!-- <x-input title="总页数" placeholder="请填写总页数" type="number" v-model="oneMax"></x-input>
      <x-input title="每页用户数" placeholder="请填写每页用户数" type="number" v-model="twoMax"></x-input>
      <x-input title="末页用户数" placeholder="请填写最后一页评论条数" type="number" v-model="lastNum"></x-input> -->
      <x-input title="起始范围" placeholder="请填写总页数" type="number" v-model="Mix"></x-input>
      <x-input title="结束范围" placeholder="请填写每页用户数" type="number" v-model="Max"></x-input>
    </group>
    <div class="footer-btn carry" @click.stop.prevent="_submitCarry">保存</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Group from 'vux/src/components/group/'
import XInput from 'vux/src/components/x-input/'

export default {
  data () {
    return {
      Max: '',
      Mix: ''
    }
  },
  created () {
    this.Max = this.MAX
    this.Mix = this.MIX
  },
  computed: {
    ...mapGetters([
      'MAX',
      'MIX'
    ])
  },
  methods: {
    _submitCarry () {
      if (this.Max && this.Mix) {
        this.$store.dispatch('SAVE_SET', { Max: this.Max, Mix: this.Mix })
        this.$router.push('/lottery')
        this.$vux.toast.show({
          text: '    保存成功     ',
          time: 1000,
          type: 'success'
        })
      } else {
        this.$vux.toast.show({
          text: '请填写起始结束范围',
          time: 1000,
          type: 'cancel'
        })
      }
    }
  },
  components: {
    Group,
    XInput
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
        width: 2.5rem !important;
        font-size: 16px;
        color: #666;
        letter-spacing: 1px;
        word-spacing: 1.3px;
        vertical-align: top;
        text-align:justify;
        text-justify:distribute-all-lines;/*ie6-8*/
        text-align-last:justify;/* ie9*/
        -moz-text-align-last:justify;/*ff*/
        -webkit-text-align-last:justify;/*chrome 20+*/
        padding: 0 0.26rem;
        &:before {
          display: none !important;
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

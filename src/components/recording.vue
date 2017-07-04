<template>
   <div class="recording">
    <div class="recording-content" v-if="DONE_RECORDING.length">
      <li v-for="(item, index) in DONE_RECORDING" :key="item" >
        <span class="index">{{index + 1}}.</span>
        获奖用户:  第<span>{{item.oneNum}}</span>页，第<span>{{item.twoNum}}</span>位
      </li>
    </div>
    <div class="null" v-else>暂无记录</div>
    <div class="clear-all" @click.stop.prevent="_clearAll">清空</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      oneMax: '',
      twoMax: '',
      lastNum: ''
    }
  },
  created () {
    this.oneMax = this.ONE_MAX
    this.twoMax = this.TWO_MAX
    this.lastNum = this.LAST_NUM
  },
  computed: {
    ...mapGetters([
      'DONE_RECORDING'
    ])
  },
  methods: {
    _clearAll () {
      this.$store.dispatch('CLEAR_ALL')
      this.$vux.toast.show({
        text: '    已清空记录     '
      })
    }
  },
  components: {
  }
}
</script>

<style lang="less">
.recording::-webkit-scrollbar {display:none}
.recording {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  background: #fff;
  overflow-x: hidden;
  overflow-y: scroll;
  .recording-content{
    background: #fff;
    padding: 0.26rem;
    li{
      list-style: none;
      font-size: 14px;
      line-height: 1rem;
    }
  }
  .null{
    font-size: 0.5rem;
    text-align: center;
    line-height: 3rem;
    color: #999;
  }
  .clear-all {
    position: fixed;
    left: 0.5rem;
    right: 0.5rem;
    bottom: 1.5rem;
    height: 1.2rem;
    background: #b2b2b2;
    border-radius: 0.1rem;
    line-height: 1.2rem;
    color: #fff;
    font-size: 18px;
    text-align: center;
    background: #09BB07;
  }
}
</style>

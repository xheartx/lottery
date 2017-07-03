<template>
  <div class="lottery">
    <div class="content">
      <h1 class="title">{{ set.text }}</h1>
      <h1 class="num">{{ num }}</h1>
      <div class="lottery-btn" @click.stop.prevent="_start">
        <x-button type="primary">{{text}}</x-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import XButton from 'vux/src/components/x-button/'
export default {
  name: 'lottery',
  data () {
    return {
      num: 0,
      null: {
        text: '随机页数'
      },
      isStart: false
    }
  },
  computed: {
    ...mapState({
      oneSet: state => state.oneSet,
      twoSet: state => state.twoSet,
      customize: state => state.customize,
      frequency: state => state.frequency
    }),
    ...mapGetters([
      'DONE_STEP_COUNT'
    ]),
    set () {
      if (this.DONE_STEP_COUNT === 1) {
        return this.oneSet
      } else if (this.DONE_STEP_COUNT === 2) {
        return this.twoSet
      } else {
        return this.null
      }
    },
    text () {
      if (!this.isStart) {
        return '开始'
      } else {
        return '停止'
      }
    }
  },
  methods: {
    _start () {
      if (this.isStart) {
        this.isStart = false
        if (this.customize.switch && this.customize.times === this.frequency) {
          console.log(this.customize.times)
          this.num = this.customize[this.set.name]
        }
        this.$store.commit('TOGGLE_NUM', {name: this.set.name, newNum: this.num})
        if (this.DONE_STEP_COUNT === 2) {
          this.$store.dispatch('ADD_RECORDING')
        }
      } else {
        this.isStart = true
        this.$store.commit('TOGGLE_STEP_COUNT')
        this.random()
      }
    },
    random () {
      let _this = this
      if (_this.isStart) {
        if (this.oneSet.num === this.oneSet.maxNum && this.DONE_STEP_COUNT === 2) {
          this.num = this.getRandom(this.set.minNum, this.set.lastNum)
        } else {
          this.num = this.getRandom(this.set.minNum, this.set.maxNum)
        }
        setTimeout(function () {
          _this.random()
        }, 90)
      }
    },
    getRandom (min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
  },
  components: {
    XButton
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h1, h2 {
  font-weight: normal;
}
.lottery{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 1.31rem;
  width: 100%;
}
.content{
  position: relative;
  height: 100%;
}
.title{
  font-size: 0.5rem;
  color: #04BE02;
  text-align: center;
  margin: 1rem 0;
}
.num{
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
  font-size: 3rem;
  color: #04BE02;
  text-align: center;
  position: absolute;
  top: 50%;
  width: 100%;
  margin-top: -5rem;
}
.lottery-btn{
  position: absolute;
  bottom: 3rem;
  left: 1rem;
  right: 1rem;
}
.weui-btn:after{
  display: none;
}
</style>

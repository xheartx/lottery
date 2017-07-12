import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stepCount: 0,
    mySet: {
      name: 'mySet',
      text: '随机数',
      num: 0,
      minNum: 1,
      maxNum: 50
    },
    oneSet: {
      name: 'oneSet',
      text: '随机页数',
      num: 0,
      minNum: 1,
      maxNum: 100
    },
    twoSet: {
      name: 'twoSet',
      text: '随机条数',
      num: 0,
      minNum: 1,
      maxNum: 20,
      lastNum: 20
    },
    customize: {
      switch: true,
      times: 1,
      oneSet: 1,
      twoSet: 1
    },
    frequency: 0,
    recording: []
  },
  getters: {
    DONE_STEP_COUNT: state => {
      return state.stepCount
    },
    MAX: state => {
      return state.mySet.maxNum
    },
    MIN: state => {
      return state.mySet.minNum
    },
    ONE_MAX: state => {
      return state.oneSet.maxNum
    },
    TWO_MAX: state => {
      return state.twoSet.maxNum
    },
    LAST_NUM: state => {
      return state.twoSet.lastNum
    },
    DONE_RECORDING: state => {
      return state.recording
    }
  },
  mutations: {
    TOGGLE_STEP_COUNT (state) {
      state.stepCount++
      if (state.stepCount > 2) {
        state.stepCount = 1
      }
    },
    TOGGLE_NUM (state, obj) {
      state[obj.name].num = obj.newNum
    }
  },
  actions: {
    SAVE_SET ({ state }, obj) {
      state.mySet.minNum = obj.Min
      state.mySet.maxNum = obj.Max
    },
    ADMIN_SAVE_SET ({ state }, obj) {
      state.customize = obj
      state.frequency = 0
    },
    ADD_RECORDING ({ state }) {
      state.frequency++
      state.recording.push({
        oneNum: state.oneSet.num,
        twoNum: state.twoSet.num
      })
    },
    CLEAR_ALL ({ state }) {
      state.recording = []
      state.frequency = 1
    }
  }
})

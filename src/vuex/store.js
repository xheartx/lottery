import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stepCount: 0,
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
      switch: false,
      times: 1,
      oneSet: 1,
      twoSet: 1
    },
    frequency: 1,
    recording: []
  },
  getters: {
    DONE_STEP_COUNT: state => {
      return state.stepCount
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
      state.oneSet.maxNum = obj.oneMax
      state.twoSet.maxNum = obj.twoMax
      state.twoSet.lastNum = obj.lastNum
    },
    ADMIN_SAVE_SET ({ state }, obj) {
      state.customize = obj
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

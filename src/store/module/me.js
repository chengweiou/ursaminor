import accountService from '@/sdk/accountService'
import { router } from '@/router'
import { clone } from '@/fn'
const CLEAN_STATE = {
  showLogin: false,
  auth: false,
  user: {},
}

const state = clone(CLEAN_STATE)
const actions = {
  async onLogin({ commit, dispatch, state, rootState }, payload, config = {}) {
    commit('showLogin', true)
  },
  async offLogin({ commit, dispatch, state, rootState }, payload, config = {}) {
    commit('showLogin', false)
  },
  async login({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await accountService.all().login(payload)
    if (rest.code !== 'OK') {
      dispatch('failBox/onRest', rest, { root: true })
      return
    }
    commit('login', rest.data.user)
    router.replace({ name: 'refresh' })
  },
  async logout({ commit, dispatch, state, rootState }, payload, config = {}) {
    accountService.all().logout()
    sessionStorage.clear()
    commit('logout')
  },
}

const mutations = {
  showLogin(state, e) {
    state.showLogin = e
  },
  login(state, e) {
    state.showLogin = false
    state.auth = true
    state.user = e
  },
  logout(state) {
    initState(state)
  },
}

function initState(s) {
  Object.keys(CLEAN_STATE).forEach(key => {
    s[key] = CLEAN_STATE[key]
  })
}

export default {
  namespaced: true, state, actions, mutations,
}

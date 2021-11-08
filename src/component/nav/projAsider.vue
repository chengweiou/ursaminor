<template>
  <label for="profile-switch" class="center profile-switch" style="height: 60px; font-size: 18px; font-weight: 400;">Ursaminor</label>
  <el-menu :default-active="active" :collapse="isCollapse" class="el-menu-vertical-demo" style="border: 0;">
    <el-menu-item index="home" @click="goAsider('home')"><icon-document-checked style="margin: 3px; width: 12px;"/>{{t('home')}}</el-menu-item>
    <el-sub-menu index="flowGroup">
      <template #title>
        <icon-location style="margin: 3px; width: 12px;"/>
        <span>{{t('flow')}}{{t('managment')}}</span>
      </template>
      <el-menu-item index="login" @click="goDetail('login')">{{t('login')}}</el-menu-item>
      <el-menu-item index="weapon" @click="goDetail('weapon')">{{t('weapon')}}</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="i18nGroup">
      <template #title>
        <icon-location style="margin: 3px; width: 12px;"/>
        <span>语言</span>
      </template>
      <el-menu-item index="i18nZh" @click="changeLanguage('zh')">中文</el-menu-item>
      <el-menu-item index="i18nEn" @click="changeLanguage('en')">English</el-menu-item>
    </el-sub-menu>
    <!-- <el-menu-item index="restapi" @click="goAsider('restapi')"><icon-document-checked style="margin: 3px; width: 12px;"/>restapi</el-menu-item> -->
  </el-menu>
</template>

<script setup>
// tip: 导入 component
import { DocumentChecked as IconDocumentChecked, Location as IconLocation } from '@element-plus/icons'
// tip: 导入 data
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { wait, empty, clone, storage } from '@/fn'

// tip: 定义 各种 use
const store = useStore(), router = useRouter(), route = useRoute(), { t, locale } = useI18n({ inheritLocale: true })
// tip: 定义 页面
// tip: 定义 不需要关联的
// tip: 定义 需要关联的
const isCollapse = ref(false)
// tip: 定义 computed 计算的
const me = computed(() =>store.state.me.user)
const active = computed(() =>store.state.tab.asider)
// tip: 定义 方法
const goDetail = (v) => {
  if (route.name == v) return
  store.dispatch('flow/init', store.state[v].map)
  router.push({ name: 'detail' })
}
const goAsider = (v) => {
  if (route.name == v) return
  store.dispatch('tab/changeAsider', v)
  router.push({ name: v })
}
const changeLanguage = (v) => {
  locale.value = v
  storage.set('lang', locale.value)
}

// tip: 初始化空数据
// tip 其他生命周期
onMounted(() => {
  window.onresize = () => {
    let w = document.body.clientWidth
    isCollapse.value = w < 800
  }

})
</script>


<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 150px;
}
</style>

<style>
</style>

<i18n>
en:
  login: login
  home: Home
  dashboard: Dashboard
  managment: Manament
  flow: Flow
  all: 所有
  add: 添加
  person: User
  pet: Pet
  weapon: Weapon
zh:
  login: 登录
  home: 首页
  dashboard: 面板
  managment: 管理
  flow: 流程
  all: 所有
  add: 添加
  person: 用户
  pet: 宠物
  weapon: 武器
</i18n>

<template>
  <div v-if="show" class="center" style="width: 100%; height: 100%; background: rgba(255, 255, 255, .3); position: fixed; top: 0;">
    <div class="center bg-black" style="width: 300px; height: 300px; position: relative;">
      <div style="position: absolute; top: 0; right: 0;"><div class="center pointer" style="width: 30px; height: 30px;" @click="off">x</div></div>
      <div style="width: 80%; height: 80%;">
        <div class="center f-t1" style="margin-bottom: 50px;">Login</div>
        <div style="margin-bottom: 50px;">
          <section class="df df-aic" style="margin-bottom: 10px;">
            <div style="margin-right: 10px;">username:</div>
            <div class="" style="width: 200px; height:20px; border: 1px solid #ddd;"><input v-model="form.username" style="margin: 0 10px; width: 90%; background: transparent; border: 0; color: #ddd;"></div>
          </section>
          <section class="df df-aic" style="margin-bottom: 10px;">
            <div style="margin-right: 10px;">password:</div>
            <div class="" style="width: 200px; height:20px; border: 1px solid #ddd;"><input v-model="form.password" type="password" style="margin: 0 10px; width: 90%; background: transparent; border: 0; color: #ddd;"></div>
          </section>
        </div>
        <section class="center" style="margin-bottom: 10px;">
          <div v-if="loading" class="center" style="width: 100%;"><loadingIcon style="width: 30px; height: 30px;"/></div>
          <button v-else class="btn-white" style="width: 100px; height: 30px;" @click="login">Login</button>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
// tip: 导入 component
import LoadingIcon from '@/component/loadingIcon'
// tip: 导入 data
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { wait, empty, clone, storage } from '@/fn'
// tip: 定义 各种 use
const store = useStore(), router = useRouter(), route = useRoute()
// tip: 定义 页面
// tip: 定义 不需要关联的
const cleanForm = ref({username: '', password: ''})
// tip: 定义 需要关联的
const form = clone(cleanForm)
// tip: 定义 computed 计算的
const show = computed(() => store.state.me.showLogin)
// tip: 定义 方法
const login = async() => {
  loading.value = true
  await Promise.all([store.dispatch('me/login', this.form), wait(1000)])
  loading.value = false
}
const off = () => {
  store.dispatch('me/offLogin')
}
// tip: 初始化空数据
</script>

<style scoped>
</style>

<style>

</style>

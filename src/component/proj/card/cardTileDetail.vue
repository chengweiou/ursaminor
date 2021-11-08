<template>
<label class="center pointer card" style="padding: 0 2px;" :class="{'active': e.active}">
  <div class="df df-column" style="width: 100%;">
    <section class="center" style="width: 100%;"><div style="width: 90%; height: 20px; font-size: 12px;">{{e.name}}</div></section>
    <section class="center f-t2 " style="width: 100%;" :class="{'active': e.active}" :title="e.desc" >
      <div class="desc" style="" :class="{'active': e.active}">{{e.desc}}</div>
    </section>
    <section class="center">
      <input class="dev-rdo" type="radio" name="devRdo" @click="$emit('click')">
      <div class="df df-column" style="width: 100%;">
        <div class="center c-light-blue" style="">{{e.dev.url}}</div>
        <div class="center c-light-blue" style="">{{e.dev.param}}</div>
        <div v-if="e.dev.result" class="center df-column c-purple" style="width: 100%; border-top: 1px solid #ccf;">
          {{e.dev.result}}
        </div>
      </div>
    </section>
  </div>
</label>
</template>

<script setup>
// tip: 导入 component
// tip: 导入 data
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
// tip: 定义 各种 use
const store = useStore(), router = useRouter(), route = useRoute()
// tip: 定义 页面
defineProps({
  e: { type: Object, required: true },
})
defineEmits(['click'])
// tip: 定义 不需要关联的
// tip: 定义 需要关联的
// tip: 定义 computed 计算的
// tip: 定义 方法
// tip: 初始化空数据
</script>

<style scoped>
.dev-rdo { display: none; }
.dev-rdo ~ div { max-height: 0; }
.dev-rdo:checked ~ div { max-height: 500px; }
.dev-rdo:hover ~ div { max-height: 500px; transition: max-height .5s ease-in-out; }
.card { margin: 0 3px; width: 200px; background: #070B34; border-radius: 4px; overflow: hidden; text-overflow: ellipsis; }
.card.active { background: #141852; color: #7DF9FF; font-weight: 500; }

.desc { margin-bottom: 20px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.desc.active { white-space: normal; }
.btn-reset:hover { transform: scale(1.2); transition: all .5s ease-in-out; }
</style>

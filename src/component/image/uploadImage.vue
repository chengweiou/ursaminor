<template>
  <div class="pointer" style="width: 100%; height: 100%;">
    <div v-if="src" style="position: relative; width: 100%; height: 100%;">
      <label class="df" style="width: 100%; height: 100%;">
        <centerImage :src="src"/>
        <input ref="fileEl" type="file" accept="image/*" style="display: none;" @change="$emit('change', $event)">
      </label>
      <div class="center" style="width: 24px; height: 24px; background: #F56C6C; border-radius: 50%; position: absolute; top: -5px; right: -5px;" @click="remove($event)"><icon-delete style="width: 12px;"/></div>
    </div>
    <label v-if="!src" class="center btn-white" style="width: 100%; height: 100%;">
      {{t('upload')}} <input style="display: none;" type="file" accept="image/*" @change="$emit('change', $event)" >
    </label>
  </div>
</template>

<script setup>
// tip: 导入 component
import CenterImage from '@/component/image/centerImage.vue'
import { Delete as IconDelete } from '@element-plus/icons-vue'
// tip: 导入 data
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
// tip: 定义 各种 use
const { t } = useI18n()
// tip: 定义 页面
defineProps({
  src: { type: String, default: '' },
})
const emit = defineEmits(['change'])
const fileEl = ref(null)
// tip: 定义 不需要关联的
// tip: 定义 需要关联的
// tip: 定义 computed 计算的
// tip: 定义 方法
const remove = ($event) => {
  fileEl.value.value = ''
  emit('change', $event)
}
// tip: 初始化空数据
</script>

<i18n>
en:
  upload: Upload Image
zh:
  upload: 上传图片
</i18n>

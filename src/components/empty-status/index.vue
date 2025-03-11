<template>
  <view class="flex flex-col justify-center items-center p-4">
    <image :src="imgUrl || '/static/images/empty-status/content.svg'" class="w-18 h-18 mb-4" />
    <view class="text-gray-500">{{ props.tip || tip }}</view>
  </view>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { emptyStatusProps } from './types'

// 定义 props
const props = defineProps(emptyStatusProps)

// 根据传入的 mode 计算图片的 URL
const imgUrl = computed(() => {
  let img: string = ''
  switch (props.mode) {
    case 'search':
      img = '/static/images/search.svg'
      break
    case 'network':
      img = '/static/images/network.svg'
      break
    case 'content':
      img = '/static/images/empty-status/content.svg'
      break
    case 'collect':
      img = '/static/images/collect.svg'
      break
    case 'comment':
      img = '/static/images/comment.svg'
      break
    case 'halo':
      img = '/static/images/halo.svg'
      break
    case 'message':
      img = '/static/images/message.svg'
      break
    default:
      img = '/static/empty-page/content.svg' // 默认图片
  }
  return img
})

const tip = computed(() => {
  let content: string = ''
  switch (props.mode) {
    case 'search':
      content = '/static/images/search.svg'
      break
    case 'network':
      content = '/static/images/network.svg'
      break
    case 'content':
      content = '暂无内容'
      break
    case 'collect':
      content = '/static/images/collect.svg'
      break
    case 'comment':
      content = '/static/images/comment.svg'
      break
    case 'halo':
      content = '/static/images/halo.svg'
      break
    case 'message':
      content = '/static/images/message.svg'
      break
    default:
      content = '暂无内容' // 默认图片
  }
  return content
})
</script>

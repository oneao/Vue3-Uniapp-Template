<template>
  <view class="custom-cell">
    <view></view>
    <view class="cell-indicator"></view>

    <view class="cell-title">
      <slot name="title">{{ title }}</slot>
    </view>
    <view class="cell-value">
      <slot name="value">{{ value }}</slot>
      <view v-if="isLink" class="cell-icon i-carbon:chevron-right"></view>
    </view>
  </view>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'CustomCell',
})

defineProps<{ title?: string; labelIcon?: string; value?: string; isLink?: boolean }>()
</script>

<style lang="scss" scoped>
.custom-cell {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  overflow: hidden;
}

.cell-indicator {
  position: absolute;
  left: 0;
  width: 0.2rem;
  height: 55%;
  background-color: #007aff;
  border-radius: 0.2rem;
}

.cell-title {
  flex: 1;
  padding-left: 0.7rem;
  font-size: 0.9rem;
  font-weight: bold;
  line-height: 0.9rem;
}

.cell-value {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-size: 0.9rem;
  line-height: 0.9rem;
  color: #666;
  text-align: right;
  white-space: nowrap;
}

.cell-icon {
  width: 1rem;
  height: 1rem;
  color: #aaa;
  transition: color 0.2s ease-in-out;
}
</style>

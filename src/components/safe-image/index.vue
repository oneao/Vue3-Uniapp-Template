<template>
  <image :src="imageSrc" mode="scaleToFill" @error="handleLoadImageError" />
</template>

<script lang="ts" setup>
defineOptions({
  name: 'SafeImage',
})

const props = defineProps<{ src?: string; errorSrc?: string }>()

const imageSrc = ref('')

watch(
  () => props.src,
  (newVal) => {
    if (!props.src) {
      imageSrc.value = props.errorSrc || '/static/images/NoAvatar.png'
      return
    }
    imageSrc.value = newVal
  },
  { immediate: true, deep: true },
)

const handleLoadImageError = () => {
  imageSrc.value = props.errorSrc || '/static/images/NoAvatar.png'
}
</script>

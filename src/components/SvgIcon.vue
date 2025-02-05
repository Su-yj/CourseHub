<template>
  <svg aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script setup lang="ts">
import {computed} from 'vue'
const props = defineProps({
  name: {
    type: String,
    required: true,
  }
})
const iconName = computed(()=>{
  return `#${props.name}`
})
</script>

<style scoped lang="scss">

</style>

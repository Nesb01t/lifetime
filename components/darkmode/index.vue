<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean;
}>();
</script>

<template>
  <div>
    <slot />
  </div>
</template>

<style lang="scss" scoped></style>

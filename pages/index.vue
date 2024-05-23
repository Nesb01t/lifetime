<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean;
}>();
</script>

<template>
  <div class="timer-block">
    <Timer></Timer>
  </div>
</template>

<style lang="scss" scoped></style>

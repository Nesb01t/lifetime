<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean;
}>();
</script>

<template>
  <div class="default-layout">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.default-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  font-family: "Arial", sans-serif;
  color: #333;
  line-height: 1.5;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
}
</style>

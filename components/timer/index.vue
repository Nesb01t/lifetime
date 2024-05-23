<script setup lang="ts">
import dayjs, { Dayjs } from "dayjs";
import { type TimeFragment } from "./timer-types";

const props = defineProps<{
  modelValue?: boolean;
}>();

const { displayTime, running, duration, start, end } = useTimer();

const result = ref<TimeFragment>();
const onStart = () => {
  start();
};
const onEnd = () => {
  result.value = end();
};
</script>

<template>
  <div class="timer">
    <h1 class="timer-header">Time Clock</h1>
    <div class="timer-timeregion">
      <span class="timer-time">
        {{ displayTime }}
      </span>
    </div>
    <div class="timer-btns">
      <button v-if="!running" @click="start">Start</button>
      <button v-else @click="onEnd">End</button>
    </div>
    {{ result }}
  </div>
</template>

<style lang="scss" scoped>
.timer {
  &-header {
    font-size: 24px;
    font-weight: 700;
  }
}
</style>

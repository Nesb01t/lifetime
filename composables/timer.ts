import dayjs from "dayjs";
import { type TimeFragment } from "~/components/timer/timer-types";

export const useTimer = () => {
  const running = ref(false);
  const startTime = ref(dayjs());

  const displayTime = computed(() => {
    return startTime.value.format("HH:mm:ss");
  });

  const duration = computed(() => {
    const endTime = dayjs();
    return endTime.diff(startTime.value, "second");
  });

  const start = () => {
    startTime.value = dayjs();
    running.value = true;
  };

  const end = (): TimeFragment => {
    running.value = false;

    const endTime = dayjs();
    const duration = endTime.diff(startTime.value, "second");
    return {
      startTime: startTime.value,
      endTime,
      duration,
      linkedSubject: {
        id: "123",
        displayName: "Study",
        badgeColor: "blue",
        achievementPoint: 100,
      },
    };
  };

  return { displayTime, running, duration, start, end };
};

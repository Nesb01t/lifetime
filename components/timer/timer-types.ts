import type { Dayjs } from "dayjs";

export interface TimeFragment {
  startTime: Dayjs;
  endTime: Dayjs;
  duration: number;

  linkedSubject: TimeSubject;
}

export interface TimeSubject {
  id: string;
  displayName: string;
  badgeColor: string;

  achievementPoint: number;
}

export interface Achievement {
  id: string;
  displayName: string;
  description: string;
  point: number;
  avatar: string;
}

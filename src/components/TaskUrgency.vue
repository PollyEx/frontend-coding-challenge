<script lang="ts" setup>
import { computed } from "vue";

import type { Task, TaskStatus } from "../types/task";

const props = defineProps<{
  task: Task;
}>();

const resetTime = (date: Date) => {
  date.setHours(0, 0, 0, 0);
  return date;
};

const simplifyDate = (date: Date) => {
  return date.toISOString().split("T")[0];
};

const taskStatus = computed<TaskStatus>(() => {
  if (!props.task.dueDate) {
    return {
      urgency: "none",
      formattedDate: "",
    };
  }

  const today = resetTime(new Date());
  const todayDateOnly = simplifyDate(today);

  const tomorrow = resetTime(new Date(today.getTime() + 86400000));
  const tomorrowDateOnly = simplifyDate(tomorrow);

  const [year, month, day] = props.task.dueDate.split("-").map(Number);
  const dueDate = resetTime(new Date(year, month - 1, day));

  const dueDateDateOnly = simplifyDate(dueDate);

  if (dueDateDateOnly < todayDateOnly) {
    return {
      urgency: "overdue",
      formattedDate: "Overdue",
    };
  }

  if (dueDateDateOnly === todayDateOnly) {
    return {
      urgency: "today",
      formattedDate: "Today",
    };
  }

  if (dueDateDateOnly === tomorrowDateOnly) {
    return {
      urgency: "tomorrow",
      formattedDate: "Tomorrow",
    };
  }

  // If task is due within the next week, show the day of the week else show the date
  const nextWeek = new Date(today.getTime() + 7 * 86400000);
  const nextWeekDateOnly = simplifyDate(nextWeek);

  if (dueDateDateOnly < nextWeekDateOnly) {
    return {
      urgency: "future",
      formattedDate: dueDate.toLocaleDateString("en-US", {
        weekday: "long",
      }),
    };
  }

  return {
    urgency: "future",
    formattedDate: dueDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }),
  };
});
</script>

<template>
  <div
    class="task-status"
    :class="{
      'task-status--overdue': taskStatus.urgency === 'overdue',
      'task-status--today': taskStatus.urgency === 'today',
      'task-status--tomorrow': taskStatus.urgency === 'tomorrow',
      'task-status--future': taskStatus.urgency === 'future',
    }"
  >
    {{ taskStatus.formattedDate }}
  </div>
</template>

<style>
.task-status {
  border-radius: 1rem;
  padding: 0.25rem 0.5rem;
}

.task-status--overdue {
  background-color: var(--colors-red-200);
}

.task-status--today {
  background-color: var(--colors-red-100);
}

.task-status--tomorrow {
  background-color: var(--colors-yellow-100);
}

.task-status--future {
  background-color: var(--colors-green-100);
}
</style>

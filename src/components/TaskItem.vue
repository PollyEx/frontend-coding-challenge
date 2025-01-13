<script lang="ts" setup>
import TaskUrgency from "./TaskUrgency.vue";

import SquareIcon from "../assets/SquareIcon.svg";
import CheckedIcon from "../assets/CheckedIcon.svg";
import EllipsisIcon from "../assets/EllipsisIcon.svg";
import { Task } from "../types/task";

const { task } = defineProps<{
  task: Task;
}>();
</script>

<template>
  <div class="task-item">
    <div class="task-item__check">
      <template v-if="task.completed">
        <CheckedIcon
          class="task-item__check-icon task-item__check-icon--checked"
          @click="task.completed = false"
        />
      </template>
      <template v-else>
        <SquareIcon
          class="task-item__check-icon"
          @click="task.completed = true"
        />
      </template>
    </div>

    <div
      class="task-item__description"
      :class="{ 'task-item__description--checked': task.completed }"
    >
      {{ task.description }}
    </div>

    <TaskUrgency :task="task" />

    <div class="task-item__menu">
      <EllipsisIcon class="task-item__menu-icon" />
    </div>
  </div>
</template>

<style>
.task-item {
  padding: 0.5rem;
  display: flex;
  align-items: center;
  min-width: 180px;
  gap: 0.5rem;
  border-radius: 6px;
  border: 1px solid var(--colors-grey-200);
}

.task-item__description {
  flex-grow: 1;
}

.task-item__description--checked {
  text-decoration: line-through;
}

.task-item__check-icon {
  cursor: pointer;
  width: 20px;
}

.task-item__check-icon--checked {
  fill: var(--colors-blue-500);
}

.task-item__menu-icon {
  width: 20px;
}
</style>

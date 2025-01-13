<script lang="ts" setup>
import { computed, ref } from "vue";

import TaskItem from "./TaskItem.vue";
import TaskFilters from "./TaskFilters.vue";
import { Task, filterOptions } from "../types/task";

const { tasks } = defineProps<{
  tasks: Task[];
}>();

defineEmits<{
  (e: "update:tasks", tasks: Task[]): void;
}>();

const selectedFilter = ref<string>(filterOptions[0].id);

const filteredTasks = computed(() => {
  const currentFilter = filterOptions.find(
    (option) => option.id === selectedFilter.value
  );
  return tasks.filter((task) => currentFilter?.filterFn(task));
});
</script>

<template>
  <div class="task-list">
    <TaskFilters
      :filter-options="filterOptions"
      v-model:selectedFilter="selectedFilter"
    />
    <template v-for="task in filteredTasks" :key="task.description">
      <TaskItem :task="task" />
    </template>
  </div>
</template>

<style>
.task-list {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
</style>

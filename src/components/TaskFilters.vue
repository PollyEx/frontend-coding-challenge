<script lang="ts" setup>
import { FilterOption } from "../types/task";

const { filterOptions, selectedFilter } = defineProps<{
  filterOptions: FilterOption[];
  selectedFilter: string;
}>();

const emit = defineEmits<{
  "update:selectedFilter": [value: string];
}>();
</script>

<template>
  <div class="task-filters">
    <label for="task-filters" class="task-filters__label">Filter</label>
    <button
      v-for="filter in filterOptions"
      :key="filter.id"
      class="task-filters__option"
      :class="{
        'task-filters__option--selected': selectedFilter === filter.id,
      }"
      @click="emit('update:selectedFilter', filter.id)"
    >
      {{ filter.label }}
    </button>
  </div>
</template>

<style>
.task-filters {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-bottom: 0.5rem;
}

.task-filters__option {
  border-radius: 1rem;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  background: var(--colors-grey-50);
  transition: all 0.2s ease;
}

.task-filters__option--selected {
  background-color: var(--colors-blue-50);
  color: var(--colors-blue-500);
}

.task-filters__option:hover {
  background-color: var(--colors-blue-100);
}

.task-filters__label {
  color: var(--colors-grey-600);
  margin-right: 0.25rem;
}
</style>

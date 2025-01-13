<script setup lang="ts">
import CardContainer from "./components/CardContainer.vue";
import TaskBotIcon from "./assets/TaskBotIcon.svg";
import CalendarIcon from "./assets/CalendarIcon.svg";
import ClipboardIcon from "./assets/ClipboardIcon.svg";
import ActionButton from "./components/ActionButton.vue";
import FormInput from "./components/FormInput.vue";
import { reactive, ref } from "vue";
import TaskList from "./components/TaskList.vue";

const newDescription = ref<string>();
const newDueDate = ref<string>();
const tasks = reactive<any[]>([]);

function createTask(): void {
  tasks.push({
    description: newDescription.value,
    dueDate: newDueDate.value,
    completed: false,
  });

  clearForm();
}

function clearForm(): void {
  newDescription.value = undefined;
  newDueDate.value = undefined;
}

function close(): void {
  tasks.splice(0, tasks.length);
  clearForm();
}
</script>

<template>
  <CardContainer class="app__card" @close="close">
    <template #heading>
      <div class="app__heading">
        <TaskBotIcon class="app__icon" />
        <span>TaskBot</span>
      </div>
    </template>

    <div class="app__form-container">
      <h1>New Task</h1>
      <form class="app__form" @submit.prevent="createTask">
        <FormInput placeholder="Task" v-model="newDescription">
          <template #icon>
            <ClipboardIcon />
          </template>
        </FormInput>

        <FormInput type="date" placeholder="Due Date" v-model="newDueDate">
          <template #icon>
            <CalendarIcon />
          </template>
        </FormInput>

        <ActionButton type="submit">Add Task</ActionButton>
      </form>
    </div>

    <template v-if="tasks.length">
      <div class="app__tasks-container">
        <h1>Task List</h1>
        <TaskList :tasks="tasks" />
      </div>
    </template>
  </CardContainer>
</template>

<style>
.app__card {
  margin-top: 10rem;
}

.app__heading {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.app__icon {
  height: 34px;
  flex-shrink: 0;
}

.app__form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}
</style>

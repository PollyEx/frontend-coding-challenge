export type Task = {
  description: string;
  dueDate?: string;
  completed: boolean;
};

export type FilterOption = {
  id: string;
  label: string;
  filterFn: (task: Task) => boolean;
};

export const filterOptions: FilterOption[] = [
  {
    id: "all",
    label: "All",
    filterFn: () => true,
  },
  {
    id: "incomplete",
    label: "Incomplete",
    filterFn: (task) => !task.completed,
  },
  {
    id: "completed",
    label: "Completed",
    filterFn: (task) => task.completed,
  },
];

type TaskUrgency = "none" | "overdue" | "today" | "tomorrow" | "future";

export interface TaskStatus {
  urgency: TaskUrgency;
  formattedDate: string;
}

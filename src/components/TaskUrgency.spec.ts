import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import TaskUrgency from "./TaskUrgency.vue";

describe("TaskUrgency", () => {
  const createWrapper = (dueDate: string | null) => {
    return mount(TaskUrgency, {
      props: {
        task: {
          description: "Test Task",
          completed: false,
          dueDate: dueDate || undefined,
        },
      },
    });
  };

  it("displays no urgency when there is no due date", () => {
    const wrapper = createWrapper(null);
    expect(wrapper.text()).toBe("");
    expect(wrapper.classes()).not.toContain("task-status--overdue");
  });

  it("displays overdue status for past dates", () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const formattedDate = yesterday.toISOString().split("T")[0];

    const wrapper = createWrapper(formattedDate);
    expect(wrapper.text()).toBe("Overdue");
    expect(wrapper.classes()).toContain("task-status--overdue");
  });

  it("displays today status for today's date", () => {
    const today = new Date().toISOString().split("T")[0];
    const wrapper = createWrapper(today);

    expect(wrapper.text()).toBe("Today");
    expect(wrapper.classes()).toContain("task-status--today");
  });

  it("displays tomorrow status for tomorrow's date", () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const formattedDate = tomorrow.toISOString().split("T")[0];

    const wrapper = createWrapper(formattedDate);
    expect(wrapper.text()).toBe("Tomorrow");
    expect(wrapper.classes()).toContain("task-status--tomorrow");
  });

  it("displays day of week for dates within next week", () => {
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 3);
    const formattedDate = nextWeek.toISOString().split("T")[0];

    const wrapper = createWrapper(formattedDate);
    const expectedDay = nextWeek.toLocaleDateString("en-US", {
      weekday: "long",
    });

    expect(wrapper.text()).toBe(expectedDay);
    expect(wrapper.classes()).toContain("task-status--future");
  });

  it("displays date for dates beyond next week", () => {
    const farFuture = new Date();
    farFuture.setDate(farFuture.getDate() + 14);
    const formattedDate = farFuture.toISOString().split("T")[0];

    const wrapper = createWrapper(formattedDate);
    const expectedDate = farFuture.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });

    expect(wrapper.text()).toBe(expectedDate);
    expect(wrapper.classes()).toContain("task-status--future");
  });
});

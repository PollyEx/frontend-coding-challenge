import { describe, it, expect, vi } from "vitest";
import { shallowMount } from "@vue/test-utils";
import TaskFilters from "./TaskFilters.vue";

const filterFn = vi.fn();

describe("TaskFilters", () => {
  it("renders properly", () => {
    const wrapper = shallowMount(TaskFilters, {
      props: {
        filterOptions: [
          { id: "all", label: "All", filterFn },
          { id: "incomplete", label: "Incomplete", filterFn },
        ],
        selectedFilter: "all",
      },
    });
    expect(wrapper.text()).toContain("Filter");
  });

  it("emits update:selectedFilter when button is clicked", async () => {
    const wrapper = shallowMount(TaskFilters, {
      props: {
        filterOptions: [
          { id: "all", label: "All", filterFn },
          { id: "incomplete", label: "Incomplete", filterFn },
        ],
        selectedFilter: "all",
      },
    });

    await wrapper.findAll("button")[1].trigger("click");
    expect(wrapper.emitted("update:selectedFilter")?.[0]).toEqual([
      "incomplete",
    ]);
  });

  it("applies selected class to incomplete filter", () => {
    const wrapper = shallowMount(TaskFilters, {
      props: {
        filterOptions: [
          { id: "all", label: "All", filterFn },
          { id: "incomplete", label: "Incomplete", filterFn },
        ],
        selectedFilter: "incomplete",
      },
    });

    const buttons = wrapper.findAll("button");
    expect(buttons[1].classes()).toContain("task-filters__option--selected");
    expect(buttons[0].classes()).not.toContain(
      "task-filters__option--selected"
    );
  });
});

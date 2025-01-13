describe("Create a Task", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should create a task without a due date", () => {
    cy.get(".form-input__control[type='text']").type("Test task");
    cy.get(".action-button").click();
    cy.get(".task-item").should("exist");
    cy.get(".task-status").should("be.empty");
  });

  it("should create a task with a due date", () => {
    cy.get(".form-input__control[type='text']").type("Test task");
    cy.get(".form-input__control[type='date']").type("2025-01-01");
    cy.get(".action-button").click();
    cy.get(".task-item").should("exist");
    cy.get(".task-status").should("not.be.empty");
  });
});

describe("Filter Tasks", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get(".form-input__control[type='text']").type("Test task");
    cy.get(".action-button").click();
  });

  it("should display filter options", () => {
    cy.get(".form-input__control[type='text']").type("Test task");
    cy.get(".action-button").click();
    cy.get(".task-filters__option").should("have.length.at.least", 1);
  });

  it("should highlight selected filter", () => {
    cy.get(".task-filters__option").contains("Incomplete").click();
    cy.get(".task-filters__option--selected").should("exist");
  });

  it("should display tasks matching selected filter", () => {
    cy.get(".task-filters__option").contains("Completed").click();
    cy.get(".task-item").should("have.length", 0);
  });
});

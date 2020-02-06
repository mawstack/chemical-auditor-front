describe("Test our login page and check func.", () => {
  it("Visit login page", () => {
    cy.visit("http://localhost:3000/login");

    // Value validation
    cy.get(".email")
      .type("max@test.com")
      .should("have.value", "max@test.com");

    cy.get(".password")
      .type("password")
      .should("have.value", "password");

    // Functionality check
    cy.request("POST", "http://localhost:3001/users/login", {
      email: "max@test.com",
      password: "password"
    });

    cy.url().should("include", "/");
  });
});

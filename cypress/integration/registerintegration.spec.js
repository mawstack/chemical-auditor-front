describe("Test our register page and check func.", () => {
  it("Visit register page", () => {
    cy.visit("http://localhost:3000/register");

    // Value validation
    cy.get(".email")
      .type("max@test.com")
      .should("have.value", "max@test.com");

    cy.get(".username")
      .type("Micky")
      .should("have.value", "Micky");

    cy.get(".password")
      .type("password")
      .should("have.value", "password");

    // Functionality check
    cy.request("POST", "http://localhost:3001/users/register", {
      email: "max@test.com",
      username: "Micky",
      password: "password"
    });

    cy.url().should("include", "/");
  });
});

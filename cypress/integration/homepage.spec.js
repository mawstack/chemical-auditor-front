describe("Test that the homepage loads and that we can redirect to register page", () => {
  it("visit the homepage", () => {
  
    cy.visit("http://localhost:3000");

    // Check that pages contain relevant information
    cy.contains("Username");
    cy.contains("Password");

    cy.url().should("include", "/register");
  });
});

// Arquivo: signup_spec.js (dentro da pasta cypress/integration)

describe.only("Signup Form Test", () => {
  it.only("should show error messages for empty fields", () => {
    cy.visit("http://127.0.0.1:5500/index.html");

    cy.get("form#signupForm").submit();

    cy.get("#username").should("have.class", "error");
    cy.get("#email").should("have.class", "error");
    cy.get("#password").should("have.class", "error");
  });

  it.only("should submit the signup form successfully with valid data", () => {
    cy.visit("http://127.0.0.1:5500/index.html");

    cy.get("#username").type("usuarioTeste");
    cy.get("#email").type("teste@example.com");
    cy.get("#password").type("senha123");

    cy.get("form#signupForm").submit();

    cy.get("#username").should("not.have.class", "error");
    cy.get("#email").should("not.have.class", "error");
    cy.get("#password").should("not.have.class", "error");
  });
});

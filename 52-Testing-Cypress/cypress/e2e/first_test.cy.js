const title = '[data-cy="title"]';
const citasHeading = '[data-cy="citas-heading"]';

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:5500/52-Testing-Cypress/index.html')
    cy.contains(title, 'Administrador de Pacientes de Veterinaria');
    cy.get(title).should('exist');
    cy.get(title)
      .invoke("text")
      .should('equal', 'Administrador de Pacientes de Veterinaria');
    cy.get(citasHeading)
      .invoke('text')
      .should('equal', 'No hay Citas, comienza creando una');
    cy.get(citasHeading)
      .invoke('text')
      .should('not.equal', '');
  })
})
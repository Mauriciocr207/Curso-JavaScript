///<reference types="cypress"/>
const form = '[data-cy="form"]';
const alert = '[data-cy="alerta"]';
const typeData = [
  {
    input: '[data-cy=mascota]',
    type: 'Hook'
  },
  {
    input: '[data-cy=propietario]',
    type: 'Juan'
  },
  {
    input: '[data-cy=telefono]',
    type: '9991345678'
  },
  {
    input: '[data-cy=fecha]',
    type: '2024-10-10'
  },
  {
    input: '[data-cy=hora]',
    type: '22:48'
  },
  {
    input: '[data-cy=sintomas]',
    type: 'algunos sintomas'
  }
];
const submitBtn = '[data-cy=submit-btn]';
const citasHeading = '[data-cy=citas-heading]';
const btnEditar = '[data-cy="btn-info"]';
const btnELiminar = '[data-cy="btn-eliminar"]';

describe('form validation', () => {
  it('submit empty form validation', emptyFormTest);
  it('submit form create cita', createCitaTest);
  it('submit form edit cita', editCitaTest);
  it('submit form delete cita', deleteCita);
});

function emptyFormTest() {
  cy.visit('/');
  cy.get(form).submit();
  cy.get(alert)
    .should('have.class', 'alert-danger')
    .invoke('text')
    .should('equal', 'Todos los campos son Obligatorios');
}

function createCitaTest() {
  cy.visit('/');
  fillForm(typeData);
  cy.get(submitBtn).click();
  cy.get(citasHeading).invoke('text').should('equal', 'Administra tus Citas');
  cy.get('[data-cy=alerta]')
    .invoke('text')
    .should('equal', 'Se agregó correctamente');
}

function editCitaTest() {
  const newTypeData = typeData;
  newTypeData[0].type = "Hook nuevo";
  createCitaTest();
  cy.get(btnEditar).click();
  fillForm(newTypeData);
  cy.get(submitBtn).click();
  cy.get('[data-cy=alerta]')
    .invoke('text')
    .should('equal', 'Guardado correctamente');
}

function deleteCita() {
  createCitaTest();
  cy.get(btnELiminar).click();
  cy.get(citasHeading).invoke('text').should('equal', 'No hay Citas, comienza creando una');
}

function fillForm(data) {
  data.forEach(({input, type}) => {
    cy.get(input).focus().clear().type(type);
  })
}
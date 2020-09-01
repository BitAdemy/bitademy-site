---
title: 📱 Pruebas de una SPA y un API
subtitle: >-
  Cypress para probar aplicaciones empresariales.
excerpt: >-
  Pruebas de una SPA y un API. Cypress para probar aplicaciones empresariales.
post_url: tutorial/web-testing/functional/pruebas-de-spa-y-api
img_path: images/undraw_science.png
thumb_img_path: images/undraw_science.png
date: '2020-05-14'
up: Tutorial WebTesting
up_url: tutorial/web-testing
previous: Pruebas de comportamiento
previous_url: tutorial/web-testing/functional/pruebas-de-comportamiento
next: Pruebas unitarias con Jest
next_url: tutorial/web-testing/web-testing/unit
laboratory: Laboratorio
laboratory_url: https://github.com/LabsAdemy/WebTesting_e2e-functional_cypress_Labs/tree/master/cypress/integration/basic
sections:
  - section_id: call-to-action
    type: section_cta
    title: Garantiza tus desarrollos
    subtitle: Testing de aplicaciones web fácil y productivo para todos.
    actions:
      - label: Curso online
        url: /cursos/testing-de-aplicaciones-web-facil-y-productivo-para-todos/
template: tutorial
---

> _"La calidad requiere hacerlo bien incluso cuando nadie te está mirando"_
>
> -- ✍️ **Henry Ford**

Para continuar aprendiendo cypress y además enfrentarnos a situaciones cotidianas voy a cambiar de ejemplo. Ahora será una aplicación desarrollada en _Angular_ (podría ser _React_ o _Vue_, es lo mismo) y que consume un API rest.


### El problema de las SPA

Estas aplicaciones on conocidas porque generan el html dinámicamente ejecutando JavaScript. Aunque responden a muchas rutas, técnicamente son una única página con todo el código necesario para mostrar vistas según se requiera, es decir una _Single Page Application_

El problema es que al solicitar una ruta al servidor, este realmente no la conoce. De hecho devuelve siempre la misma página vacía para que sea el navegador el que agregue contenido. Una solución sencilla es no solicitar la página destino directamente, si no suponer que nos llegará la raíz y proceder a la navegación manual simulando un click por parte del usuario.


### El problema de las API

Con las llamadas a API remota nos enfrentamos a un problema distinto: la integración de distintos sistemas. Porque eso es lo que ocurre, en realidad tenemos dos aplicaciones ejecutándose en dos entornos. Por un lado la web en el navegador y por otro el API en un servidor más o menos lejano.

A pesar de que estas pruebas son de integración de alto nivel, es muy recomendable desacoplar estos dos ámbitos. Al menos si lo que queremos es comprobar la funcionalidad web, porque un fallo en el _back_ invalidaría nuestras pruebas _front_.

#### Fixtures

La solución de Cypress es sencillamente elegante. Se trata de usar un doble de pruebas, concretamente un _stub_, que responde con datos fijos las llamadas esperadas.

### Ejemplo completo

Te copio aquí el código más significativo que aparece en el proyecto laboratorio.

Primero, como siempre, definimos la funcionalidad que vamos a probar. Recuerda que las pruebas ayuda a documentar funcionalmente la aplicación.

```
FEATURE:     list my current projects
As a:        user with involved in projects
I want to:   get a list of them
In order to: follow up my work
```

En este caso el SUT es otra _to do list_ esta vez desarrollada en _Angular_ https://angularbuilders.github.io/angular-budget

El escenario que quiero probar es otro sencillo _happy path_

```
Scenario: complete a task
  GIVEN: An API with 2 projects
  WHEN: I visit the projects page
  THEN: should show 2 items on the projects list
```

Que se traduce en código _cypress_ de manera casi literal

```
describe('GIVEN: An API with 2 projects', () => {
  before(() => {
    const stubbedApiUrl = 'https://api-base.herokuapp.com/api/pub/projects';
    const fixtureData = 'fx:projects';
    cy.server();
    cy.route(stubbedApiUrl, fixtureData);
  });
  context('WHEN: I visit the projects page', () => {
    before(() => {
      const homeSpaUrl = 'https://angularbuilders.github.io/angular-budget';
      cy.visit(homeSpaUrl);
      cy.get('a').contains('Projects').click();
    });
    it('THEN: should show 2 items on the projects list', () => {
      const expectedListItemsLength = 2;
      const selectorListItems = 'section > ul > li';
      cy.get(selectorListItems).should('have.length', expectedListItemsLength);
    });
  });
});
```

Simplemente llamar la atención sobre la navegación forzada por ser una SPA y el uso de la _fixture_ para interceptar las llamadas al API devolviendo datos _fake_

```
[
  {
    "name": "dummy one",
    "projectId": 1,
    "_id": "1",
    "owner": "tester"
  },
  {
    "name": "two dummies",
    "projectId": 2,
    "_id": "2",
    "owner": "tester"
  }
]
```

Con esto te puedes hacer una idea clara de las capacidades de _Cypress_ y de la importancia y retorno de inversión de las **pruebas funcionales e2e**.
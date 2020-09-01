---
title: 🎪 Pruebas de comportamiento
subtitle: >-
  Cypress y Behavior Driven Development.
excerpt: >-
  Pruebas funcionales. Cypress y Behavior Driven Development.
post_url: tutorial/web-testing/functional/pruebas-de-comportamiento
img_path: images/undraw_science.png
thumb_img_path: images/undraw_science.png
date: '2020-05-14'
up: Tutorial WebTesting
up_url: tutorial/web-testing
previous: Pruebas funcionales con Cypress
previous_url: tutorial/web-testing/functional
next: Pruebas de una SPA y un API
next_url: tutorial/web-testing/functional/pruebas-de-spa-y-api
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

> _"Los ordenadores son muy buenos siguiendo instrucciones, pero muy malos leyendo mentes"_
>
> -- ✍️ **Donald Knuth**

En [el tema anterior presentamos _Cypress_](https://www.bitademy.com/tutorial/web-testing/functional) con el típico _Hola Mundo_. En este tema vamos a incorporar características que nos permitan agrupar y gestionar mejor las pruebas de comportamiento.

Veremos algunos **convenios de nombrado** y acabaremos con una batería de pruebas que, además de testear. documenta la funcionalidad de la aplicación.

## Funcionalidad

Y hablando de funcionalidad. Toda aplicación se construye para resolver un problema de un usuario. Si no ¿para qué? En las metodologías ágiles se ha extendido el término **historia de usuario** como un mecanismo estándar para definir la funcionalidad que resuelve un problema.

Así que no es mala idea atar las pruebas de comportamiento con las historias de los usuarios de forma que la prueba acompañe al comportamiento desarrollado. Formalmente los practicantes de metodologías _Agile_ lo llaman **behavior-driven development (BDD)**.

Pero tanto si odias o amas los procedimientos y las metodologías ágiles te pido que aceptes este consejo: **estructura y documenta muy bien tus pruebas funcionales**. Si no se te ocurre nada mejor usa este convenio.

### Role Feature Reason

Antes de desarrollar la prueba, de hecho antes de desarrollar el software, siempre parto de una mínima documentación, lo imprescindible. Una tarjeta que incluye la descripción genérica de la funcionalidad, y que responde a tres preguntas básicas: el rol (**quién**), la solución (**qué**) y la razón (**por qué**) de existir de este software.

Un ejemplo muy sencillo sería la típica _To Do List_. Voy a usar como _SUT_ una aplicación de ejemplo de otros cursos. [Proton tasks](https://labsademy.github.io/ProtonTasks/)

```yaml
// FEATURE:     the app should allow me to create new tasks
// As a:        user with tasks to do
// I want to:   create new tasks
// In order to: follow up my work
```

## Comportamiento

Cuando hablamos de pruebas web y comportamiento nos referimos a **cómo se comporta el sistema ante las acciones de los usuarios**. Es como una especie de guion esperado. Se plantea un escenario, se simula la interacción del usuario y se comprueba el resultado esperado.

### Arrange, Act, Assert

Este guion a fuerza de repetirse acabó por generar un convenio para estructurar el código de las pruebas. Para facilitar su adopción se escogió un acrónimo pegadizo: _AAA o **la triple A**_.

Está tomado de las palabras inglesas _Arrange, Act, Assert_ que se traducen algo así como: **preparar, actuar y comprobar**.

Para acomodar estos tres eventos a _Cypress_ necesitarás algo más de contexto.

#### Context

Esta función es similar a `describe` pero se usa como un agrupador de nivel inferior. Específicamente yo la uso para definir distintos **escenarios de prueba**. Este sería un esqueleto típico que incluye dichas funciones funciones.

```
describe('Funcionalidad que se pretende probar', () => {
  context('Escenario o situación prevista', () => {
    it('Lo que debería ocurrir', () => {});
  });
});
```
No es un ejemplo de funcionalidad ni de sintaxis. Es simplemente **una guía para que organices el código de pruebas**, al tiempo que lo documentas.

## Aceptación

Y hablando de documentar. La _triple AAA_ nos ayuda dentro de nuestro código de prueba. Es _muy de programador_. Pero estas pruebas son _tan de caja blanca_ que las podía desarrollar o ejecutar alguien que no participa en el desarrollo. Que demonios, **incluso podría ejecutarlas un usuario no técnico**.

Se asemejan a lo que se denomina **pruebas de aceptación**, muy cercanas al usuario. De hecho se deberían definir con sus palabras y con sus criterios. De forma que si se cumplen se puedan considerar como una aceptación implícita de que el software cumple con un requerimiento.

### Given When Then

Ya así llegamos al último convenio que quiero presentarte. Es un convenio para **documentar la traza de la prueba**. Un convenio que se aplica a los textos que reciben y escriben las funciones. Un convenio **en lenguaje de usuario**.

_GWT_ es una fórmula fácil de recordar y que nos narra en lenguaje humano lo que sucede por debajo. `Given, when, then` traducido como **dado, cuando, entonces** explica que **dado** un contexto, **cuando** se ejecuta una acción, **entonces** debería haber una consecuencia esperada.

Plantearlo formalmente puede que requiero cierto esfuerzo. No tanto por escribir, más bien porque te obliga a pensar lo que vas a hacer

```
Scenario: add a task
  GIVEN: the form to add tasks
  WHEN: I type task description and click on _Add task_
  THEN: should clear the input box
    AND THEN: should appear on the _Things to do_ list
```

Pero el resultado merece mucho la pena porque después escribirlo en _cypress_ es una delicia. Aplicándolo a nuestro ejemplo de la tareas, quedaría algo así:

```
describe(`GIVEN: the form to add tasks`, () => {
  const sutUrl = 'https://labsademy.github.io/ProtonTasks/';
  const selectorFormInput = 'form > input';
  const inputTaskDescription = 'Dummy task one';
  const selectorFormButton = 'form > button';
  const inputButtonText = 'Add task';
  const expectedTaskDescription = 'Dummy task one';
  const selectorIncompleteListLabel = '#incomplete-tasks > li:first-child > label';
  const selectorIncompleteListButton = '#incomplete-tasks > li:first-child > button.delete';
  context(`WHEN: I type task description and click on _Add task_ `, () => {
    before(() => {
      cy.visit(sutUrl);
      cy.get(selectorFormInput).type(inputTaskDescription);
      cy.get(selectorFormButton).contains(inputButtonText).click();
    });
    it(`THEN: should clear the input box`, () => {
      cy.get(selectorFormInput).should('not.include.value');
    });
    it(`AND THEN: should appear on the _Things to do_ list`, () => {
      cy.get(selectorIncompleteListLabel).should('contain', expectedTaskDescription);
    });
    after(() => {
      cy.get(selectorIncompleteListButton).click();
    });
  });
});
```

Yo lo destaco poniéndolo al principio, en mayúsculas y con los dos puntos. Pero lo mejor es que hagas tus pruebas y que lo ajustes de forma **que siempre te deje claro qué es lo que está ocurriendo**.


### Comandos custom

Ya que estamos aprendiendo Cypress, veamos un poco más de sintaxis, y alguna de sus utilidades. Por ejemplo la creación de nuevos comandos reutilizables. Para ello disponemos del fichero `/support/commands.js` destinado a contener nuevas definiciones.

```
Cypress.Commands.add('addTask', inputTaskDescription => {
  const selectorFormInput = 'form > input';
  const selectorFormButton = 'form > button';
  const inputButtonText = 'Add task';
  cy.get(selectorFormInput).type(inputTaskDescription);
  cy.get(selectorFormButton).contains(inputButtonText).click();
});
```
Por ejemplo en este caso podemos invocar a este comando cada vez que queramos agregar una nueva tarea durante una prueba. Sería tan sencillo como llamar a cualquier otro método propio de Cypress: `cy.addTask('Mi nueva tarea');`

Tienes más código de muestra en el laboratorio asociado.

## Resumen

Quizá no haya una relación directa obligatoria entre todos estos conceptos; tampoco un estándar o convenio universal que lo resuelva todo. Pero **un poco de orden y una guía para no reinventar la rueda** nunca sobran.

Te propongo que te inspires en esta **tabla para organizar y documentar tus pruebas**.

<table>
  <thead>
    <tr>
      <th>Organización</th>
      <th>Documentación</th>
      <th>Implementación</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Arrange</td>
      <td>GIVEN:</td>
      <td>`describe()`</td>
    </tr>
    <tr>
      <td>Act</td>
      <td>WHEN:</td>
      <td>`context() before()`</td>
    </tr>
    <tr>
      <td>Assert</td>
      <td>THEN:</td>
      <td>`it()`</td>
    </tr>
    <tr>
      <td>After</td>
      <td></td>
      <td>`after()`</td>
    </tr>
  </tbody>
  <tfoot>
  </tfoot>
</table>

Esto debería ayudarte a demostrar que tu aplicación es aceptable. Es decir, explicar qué hace, para quién lo hace y por qué lo hace.

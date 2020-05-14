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

Un ejemplo muy sencillo, y en realidad demasiado genérico sería:

```yaml
FEATURE: have web site with courses and a subscribing form
As a: visitor
I want to: view, navigate and subscribe
In order to: get information and be notified
```

## Comportamiento

Cuando hablamos de pruebas web y comportamiento nos referimos a **cómo se comporta el sistema ante las acciones de los usuarios**. Es como una especie de guion esperado. Se plantea un escenario, se simula la interacción del usuario y se comprueba el resultado esperado.

### Arrange, Act, Assert

Este guion a fuerza de repetirse acabó por generar un convenio para estructurar el código de las pruebas. Para facilitar su adopción se escogió un acrónimo pegadizo: _AAA o **la triple A**_.

Está tomado de las palabras inglesas _Arrange, Act, Assert_ que se traducen algo así como: **preparar, actuar y comprobar**.

Para acomodar estos tres eventos a _Cypress_ necesitarás algo más de contexto.

#### Context

Esta función es similar a `describe` pero se usa como un agrupador de nivel inferior. Específicamente yo la uso para definir distintos **escenarios de prueba**. Este sería un esqueleto típico que incluye dichas funciones funciones.

```js
describe('Funcionalidad que se pretende probar', () => {
  context('Escenario o situación prevista', () => {
    it('Lo que debería ocurrir', () => {});
  });
});
```

Entonces estas tres funciones son... ¿_la triple AAA_?. No exactamente pero sí, efectivamente tiene cierta equivalencia con estas tres funciones. Veámoslo con el _Hola Mundo_.

```js
describe('Visiting the url https://www.bitademy.com', () => {
  // Arrange
  const sutUrl = 'https://www.bitademy.com';
  context('I visit it', () => {
    // Act
    before(() => cy.visit(sutUrl));
    // Assert
    it('should have an h2 on the hero header with text _Aprender a programar mejor_', () => {
      cy.get('#hero > div > div > div.cell.block-content > h2').should(
        'contain',
        'Aprender a programar mejor'
      );
    });
  });
});
```

No hemos mejorado ni funcionalidad ni sintaxis. Es simplemente **una guía para que organices el código de pruebas**, al tiempo que lo documentas.

## Aceptación

Y hablando de documentar. La _triple AAA_ nos ayuda dentro de nuestro código de prueba. Es _muy de programador_. Pero estas pruebas son _tan de caja blanca_ que las podía desarrollar o ejecutar alguien que no participa en el desarrollo. Que demonios, **incluso podría ejecutarlas un usuario no técnico**.

Se asemejan a lo que se denomina **pruebas de aceptación**, muy cercanas al usuario. De hecho se deberían definir con sus palabras y con sus criterios. De forma que si se cumplen se puedan considerar como una aceptación implícita de que el software cumple con un requerimiento.

### Given When Then

Ya así llegamos al último convenio que quiero presentarte. Es un convenio para **documentar la traza de la prueba**. Un convenio que se aplica a los textos que reciben y escriben las funciones. Un convenio **en lenguaje de usuario**.

_GWT_ es una fórmula fácil de recordar y que nos narra en lenguaje humano lo que sucede por debajo. `Given, when, then` traducido como **dado, cuando, entonces** explica que **dado** un contexto, **cuando** se ejecuta una acción, **entonces** debería haber una consecuencia esperada.

Aplicándolo a nuestro ejemplo, quedaría algo así:

```js
describe('GIVEN: the url https://www.bitademy.com', () => {
  // Arrange
  const sutUrl = 'https://www.bitademy.com';
  context('WHEN: I visit it', () => {
    // Act
    before(() => cy.visit(sutUrl));
    // Assert
    it('THEN: should have an h2 on the hero header with text _Aprender a programar mejor_', () => {
      cy.get('#hero > div > div > div.cell.block-content > h2').should(
        'contain',
        'Aprender a programar mejor'
      );
    });
  });
});
```

Yo lo destaco poniéndolo al principio, en mayúsculas y con los dos puntos. Pero lo mejor es que hagas tus pruebas y que lo ajustes de forma **que siempre te deje claro qué es lo que está ocurriendo**.

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

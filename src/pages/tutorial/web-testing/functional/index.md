---
title: 🧪 Pruebas funcionales
subtitle: >-
  Cypress para comprobación funcional interactiva.
excerpt: >-
  Pruebas funcionales. Cypress para comprobación funcional interactiva.
post_url: tutorial/web-testing/functional
img_path: images/undraw_science.png
thumb_img_path: images/undraw_science.png
date: '2020-05-13'
up: Tutorial WebTesting
up_url: tutorial/web-testing
previous: Pruebas de rendimiento web con Lighthouse
previous_url: tutorial/web-testing/e2e/pruebas-de-rendimiento-web-con-lighthouse
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

> _"Si un usuario final percibe una mal rendimiento en tu website, su siguiente click probablemente sea en tu-competencia.com"_
>
> -- ✍️ **Ian Molyneaux**

Las pruebas E2E pueden, y deben, incorporar comprobaciones funcionales. Hasta ahora habíamos visto situaciones muy básicas en las que una herramienta libre y gratuita como _Puppeteer_ se defendía muy bien.

Pero cuando probamos funcionalidades complejas, se nos complica la el uso continuado de la sintaxis asíncrona. Incluso con el _async/await_. Tampoco _Puppeteer_ trae de fábrica funciones adaptadas al testing. Se le tienen que añadir ayudas como [la Integración con Jest](https://jestjs.io/docs/en/puppeteer), o con otros frameworks de testing como _Mocha_ o _Jasmine_.

## Cypress

_Cypress_ es un framework para pruebas funcionales e2e. En este sentido es mucho más potente y cómodo de utilizar que _Puppeteer_ que no deja de ser un automatizador de navegadores. El fallo es que... _Cypress_ es de pago; pero lo bueno es que tiene una buena parte gratis que es más suficiente para las pruebas funcionales.

### Instalar Cypress

Instalarlo es muy sencillo. Partimos de una aplicación Node y agregamos la dependencia.

```terminal
yarn add cypress
npm i --save cypress
```

Este proceso tarda un poco porque _Cypress_ es mucho más que una librería. Es un _test runner_ que necesita su propio servidor y controlador del navegador. La espera merecerá la pena porque además nos genera una estructura de carpetas para que empecemos con nuestros tests.

Así que una vez instalado, se habrá creado una carpeta en la ruta `cypress\integration`. En ella crearemos nuestras especificaciones en ficheros con nombre tipo `mi-prueba.spec.js`

## Test funcionales

Las pruebas funcionales de aplicaciones web, son un tipo _e2e_ que va más allá de las superficialidad de _surfear_ con un navegador automatizado. También controlan los navegadores y por supuesto que simulan el comportamiento del usuario en ellos: hacer clic, escribir, desplazarse, etc.

Son consideradas como de integración, porque evidentemente para su ejecución deben coordinarse distintos servicios. Pero lo diferencial es que:

> las pruebas funcionales aseguran que determinados escenarios realmente funcionen desde el punto de vista de un usuario final.

### Probar funcionalidades web con Cypress

Como la mayoría de los frameworks de pruebas, _Cypress_ nos ofrece la conocida sintaxis `describe it`. Se trata de dos funciones que reciben un primer argumento de texto y en el segundo una función.

#### Describe it

```js
describe('Funcionalidad que se pretende probar', () => {
  // Código de preparación y actuación pruebas
  it('Lo que debería ocurrir', () => {
    // Comprobación mediante aserciones
  });
});
```

Es tan importante, o más, prestar atención al texto que reciben en el primer parámetro como al código que se ejecutará. Recuerda que el usuario final de este programa eres tú. Hazte un favor a ti mismo y especifica el texto de la manera más clara posible.

#### Actuaciones y aserciones

Dentro de las anteriores funciones irá el código propiamente dicho. Ahora ya usaremos _Cypress_ como una librería mas y hab´ra que familiarizarse con su API. Aunque tu editor puede ayudarte en eso.

```js
/// <reference types="Cypress" />

// Actuaciones como un usuario
cy.visit('https://www.bitademy.com');
// Comprobaciones como un programador
cy.title().should('include', 'bitAdemy');
```

### Ejecutar las pruebas con Cypress

La ejecución es recomendable lanzarla desde el _package.json_. Os muestro dos alternativas. Podéis instalar _Cypress_ y ejecutar las pruebas desde el mismo repositorio que la aplicación que estáis probando. O podéis crear una aplicación de pruebas independiente.

```json
{
  "scripts": {
    "test:e2e": "cypress open",
    "start": "cypress open"
  }
}
```

En el primer caso, la aplicación arranca en _start_ y las pruebas en algo tipo _test:e2e_. Pero si lo hacéis en un repo aparte... entonces el test se ejecuta directamente desde _start_.

En [el laboratorio](https://github.com/LabsAdemy/WebTesting_e2e-functional_cypress_Labs) he optado por esta aproximación, un repositorio independiente para la prueba funcional. Adaptadlo a vuestro gusto o situación particular.

### El Hola mundo con Cypress

Para que lo veas todo junto te propongo que te crees un fichero `cypress\integration\examples\0.0_hello-world.spec.js` y escribas esto en él.

```js
/// <reference types="Cypress" />

describe('Visiting the url https://www.bitademy.com', () => {
  it('should have _bitAdemy_ on its title', () => {
    cy.visit('https://www.bitademy.com');
    cy.title().should('include', 'bitAdemy');
  });
});
```

Si no lo habías hecho antes lanza el _runner_ con el comando `cypress open` o el script equivalente... y espera que te muestre el panel de administrador con todos los tests disponibles.

Selecciona el `0.0_hello-world` y disfruta.

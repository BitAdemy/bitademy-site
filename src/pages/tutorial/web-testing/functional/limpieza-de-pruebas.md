---
title: 🧪 Limpieza de pruebas
subtitle: >-
  Los tests son código. Deben ser lo más explícitos y claros posible.
excerpt: >-
  Limpieza de pruebas. Los tests son código. Deben ser lo más explícitos y claros posible.
post_url: tutorial/web-testing/functional/limpieza-de-pruebas
img_path: images/undraw_science.png
thumb_img_path: images/undraw_science.png
date: '2020-05-15'
up: Tutorial WebTesting
up_url: tutorial/web-testing
previous: Pruebas de comportamiento
previous_url: tutorial/web-testing/functional/pruebas-de-comportamiento
laboratory: Laboratorio
laboratory_url: https://github.com/LabsAdemy/WebTesting_e2e-functional_cypress_Labs/tree/master/cypress/integration/pro
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

> _"La duplicidad es más barata que la mala abstracción"_
>
> -- ✍️ **Sandi Metz**

Hemos visto [cómo estructurar una prueba de comportamiento](https://www.bitademy.com/tutorial/web-testing/functional/pruebas-de-comportamiento) con un típico _Hola Mundo_ razonable. Ahora vamos a **prestar atención al código de las pruebas** para saltarnos lo menos posible los principios del código limpio.

Se dice que **el código de las pruebas debe ser muy sencillo**, que cualquiera lo entienda a primera vista. Que no debe abusar de indirecciones, abstracciones o cualquier artificio que dificulte su entendimiento.

Estoy totalmente de acuerdo. Pero. Que nadie interprete esto como una barra libre para saltarse cualquier norma de limpieza de código y construir una pocilga en la que chapotear. **Las pruebas son código, y el código ha de estar limpio.**

Aunque, efectivamente, las pruebas son un tipo de código muy concreto que tiene sus particularidades. Podríamos permitirles _ciertas licencias_. Pero otras rotundamente no:

## Malos olores en las pruebas

### Comentarios

En las pruebas el texto de salida es muy importante; no es un adorno, es parte de la solución. Debemos aprovechar ese mismo texto para que **aclarar en código la intención de la prueba**. No hacen falta más comentarios.

Excepcionalmente se admiten encabezados que definan las funcionalidades siguiendo algún patrón formal, tipo historia de usuario.

### Datos mágicos

Es habitual compartir datos de entrada en varias pruebas. ¿Por qué no van a estar en sus propias variables? ¿Por qué los resultados esperados no van estar en sus variables? ¿Por qué hay cadenas y números desperdigados por las pruebas?

### Datos absurdos

Si una prueba necesita un email de entrada ¿Qué ganas aporreando el teclado y generando _sdfasd@yjtj.cf_ ?

### Anidamientos sin fin

La propia sintaxis de las pruebas nos lleva a encadenar funciones de distintos niveles: ¿Te gusta esto?

`describe('',()=>{context('',()=>it('', ()=>{yourTestingCode(yourParam);}))})`

Recomiendo encarecidamente que se extraigan todos los _callbacks_ a funciones con nombre. Es código, hay que depurarlo, puede reutilizarse. Repito; es código, trátalo con respeto.

## Licencias para manchar

### DRY, WET y DAMP

#### DRY

El principio **DRY (Don´t Repeat Yourself)** asegura que **"La duplicidad es el principal enemigo de un sistema bien diseñado**". Pero no puedes combatirla a cualquier precio. Normalmente se requieren mecanismos de abstracción que obligan a un esfuerzo cognitivo extra. No queremos eso en las pruebas. Por tres buenas razones.

- Primero porque **las pruebas deben ser fácilmente entendidas** y modificadas por cualquiera.
- Segundo porque **el código de una prueba debe aislarse** de las demás; no debe tener efectos secundarios, y por tanto la duplicidad es menos problemática.
- Por último y fundamental: **las pruebas no tienen pruebas**. Si algo falla haz que sea evidente.

#### WET

Por contra tampoco es práctico caer en el **WET (Write Everything Twice)**. Incluso afecta a la moral del equipo verse **repitiendo, copiando y pegando, siempre el mismo código**. Hay que buscar un equilibrio.

#### DAMP

Para completar el juego de palabras tenemos otro acrónimo aplicable: **DAMP (Descriptive And Meaningful Phrases)**. Se refiere a que el código es más entendible cuanto mejor nombrado esté. Algo que cumplen los frameworks de testing facilitando las aserciones y que cumplimos los programadores al rellenar las cadenas de cada `describe('')` y de cada `it('')`

## Recomendaciones para el código de pruebas

Habrás adivinado que ni un extremo ni el otro. Considerando todo lo anterior, las recomendaciones se resumen en:

- Muchas pruebas pequeñas.

- Un fichero, módulo, para cada prueba.

- Textos _super mega ultra hyper_ descriptivos.

- Extrae los datos a variables o constantes del módulo.

- Extrae los _callbacks_ a funciones locales con nombre __AAA__.

- Permítete pequeños ficheros de utilidad comunes a las pruebas.

- Pero **sin abstracciones complejas**, sólo configuraciones o funciones.

## Ejemplo con Cypress

En [el laboratorio](https://github.com/LabsAdemy/WebTesting_e2e-functional_cypress_Labs/tree/master/cypress/integration/pro) te muestro un para de técnicas que pueden fomentar la legibilidad de las pruebas, y al mismo tiempo evitar ciertas redundancias.

### Intención, comentarios y otras historias

Hay frameworks que transforman el comentario en código, siguiendo normas de leguajes formales. Está fuera del alcance de este rurorial. Yo os propongo que al menos encabecéis las pruebas con una declaración de intenciones:

```js
// FEATURE:     the app should have a well formed html
// As a:        user
// I want to:   view a recognizable web page
// In order to: feel safe using it
```

### Textos significativos y descriptivos

Si quieres entender algo de un vistazo, mejor que sea conciso:

```js
describe(`GIVEN: the proton tasks web app`, () => {
  arrangeTest();
  context(`WHEN: I visit the url ${Cypress.env(baseUrl)} `, () => {
    actVisit();
    it(`THEN: should have charset UTF-8`, assertCharset);
    it(`AND THEN: should have _Proton Tasks_ on Title`, assertTitle);
    it(`AND THEN: should have a header`, assertHeader);
    it(`AND THEN: should have an h1 on the header with text _Proton Tasks_`, assertH1ContainText);
  });
});
```

En el anterior ejemplo se aplican algunas de las prácticas recomendadas. Poco anidamiento, código en funciones con nombre y textos descriptivos siguiendo un patrón.

### Variables y funciones

Nunca viene mal empezar con una sección para declarar variables o constantes.

```js
let sutUrl;
let expectedTitle;
let selectorHeader;
let selectorH1;
```

La asignación de valore irá en alguno de los métodos de preparación

```js
function arrangeTest() {
  ignoreParcelError();
  sutUrl = Cypress.env('baseUrl');
  expectedTitle = 'Proton Tasks';
  selectorHeader = 'header';
  selectorH1 = 'header > h1';
}
```

Y hablando de las funciones, y recordando a la _Triple A_, te propongo que todas empiecen por uno de esos tres verbos `Arrange-Act-Assert`. Como en el siguiente ejemplo.

```js
function arrangeTest() {
  ignoreParcelError();
  sutUrl = Cypress.env('baseUrl');
  expectedTitle = 'Proton Tasks';
  selectorHeader = 'header';
  selectorH1 = 'header > h1';
}

function actVisit() {
  before(() => cy.visit(sutUrl));
}
function assertCharset() {
  cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
}
```

### Configuraciones, datos, utilidades y ejecución

Y ya está; sólo nos quedaría extraer algunas configuraciones y utilidades que se reutilicen entre pruebas.

#### Configuración

En _Cypress_ nos ofrecen un fichero de configuración: el `cypress.json`. Aquí va la configuración normal de trabajo del framework. Pero además puedes usarlo para tus propias variables.

Incluso puedes sobrescribir en tu máquina local con valores específicos en un fichero llamado `cypress.env.json` que no debes subir al repositorio remoto ni a producción.

La idea es que puedas **adaptar fácilmente los tests a distintos entornos**. Teniendo una configuración para integración

```json
{
  "chromeWebSecurity": false,
  "baseUrl": "https://labsademy.github.io/ProtonTasks/",
  "env": {},
  "video": true
}
```
Y otra para desarrollo

```json
{
  "chromeWebSecurity": false,
  "baseUrl": "http://localhost:1234",
  "env": {},
  "video": false
}
```

En cualquier caso puedes acceder a la configuración usando el comando `Cypress.env(nombrePropiedad)`. Pero esto está pensado para configuraciones, no para datos.

#### Datos enviados y esperados

En _Cypres_ también tienen su lugar y su nombre: `fixtures`. Se trata de que para lleves a ciertos fichero los datos que vas a usar como parámetros de entrada o como muestras esperadas.

Es clave **usar este tipo de convenios para no sobrecargar el cerebro** del siguiente lector. Todo debe ser claro y evidente para todos.

#### Comandos

Llegamos a un asunto peliagudo. Compartir o reutilizar lógica y utilidades. _Cypress_ nos ofrece su propia solución y le llama `commands`. En principio está bien y es sencilla de usar.

```js
Cypress.Commands.add('typeText', (selector, text) => cy.get(selector).type(text));
```

Se trata de enseñarle nuevos trucos a un perro viejo. El problema es que es un mecanismo dinámico; y si queremos que los usen hay que sabérselo de memoria o liarse más para ofrecer _intellisense_.

```js
 cy.typeText(selector, text);
```

La alternativa es usar un función de toda la vida y exportarla.
```js
export const typeText = (selector, text) => cy.get(selector).type(text);
```

Y luego importarla y usarla como si tal cosa.

```js
import { typeText } from '../../support/actions';
typeText(selector, text);
```

Cualquiera de las dos funciones es válida y te puede ayudar a reducir código repetitivo. Especialmente para **preparar y limpiar escenarios antes y después de los tests**. Por ejemplo, haciendo _login_, _logout_, creando o borrando datos...

#### Scripts

Por último, queda decir que la ejecución de las pruebas puede hacerse **presencialmente o de manera desatendida.**

En el primer caso el desarrollador ejecuta las pruebas mientras desarrolla, o antes, si es un _TDD practitioner_. Esta es una gran ventaja de _Cypress_, que es rápido y agradable de usar en el día a día. En ese caso yo lo arranco con el navegador abierto.

Es igualmente interesante lanzarlo en modo consola, incluso desatendido o como parte de algún sistema de **integración continua**. Aquí ya entraría más a configura cosas como si graba o no los videos, las fotos y el formato del reporte.

En cualquier caso, _escriptarlo_ es así de fácil, y la configuración a su fichero...

```json
  "scripts": {
    "start": "cypress open",
    "test": "cypress run"
  },
```

> En definitiva, las pruebas son código y merecen un respeto. _Cypress_ te ofrece lo necesario para que sean fáciles de entender y mantener.
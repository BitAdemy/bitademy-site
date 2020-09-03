---
title: 🔬 Pruebas de código con Jest
subtitle: >-
  Configuración, desarrollo y ejecución de tests con Jest.
excerpt: >-
  Pruebas de código con Jest. Configuración, desarrollo y ejecución de tests con Jest.
post_url: tutorial/web-testing/code
img_path: images/undraw_science.png
thumb_img_path: images/undraw_science.png
date: '2020-05-18'
preview: Preview video gratis
preview_url: https://aula.bitademy.com/courses/testing-de-aplicaciones-web-facil-y-productivo-para-todos/lectures/18131152
up: Tutorial WebTesting
up_url: tutorial/web-testing
previous: Pruebas de una SPA y un API
previous_url: tutorial/web-testing/functional/pruebas-de-spa-y-api
next: Pruebas con espías y dobles
next_url: tutorial/web-testing/unit/pruebas-con-espias-y-dobles
laboratory: Laboratorio
laboratory_url: https://github.com/LabsAdemy/webtesting_jest/tree/master/src/0-hello-world
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

> _"Es difícil encontrar un error cuando lo estás buscando; es aún más difícil cuando supones que el código está libre de errores."_
>
> -- ✍️ **Steve McConnell**

Las pruebas de código deben ser **fáciles de preparar y cómodas de ejecutar**. Estas son las cualidades que aporta _Jest_ al mundo del testing. Son pruebas de caja blanca, dónde conocemos y tenemos delante el código que vamos aprobar. Con Jest hacer las pruebas del código o el código que supere las pruebas es sencillo y cómodo. Vamos a verlo por pasos.

## Jest

_[Jest](https://jestjs.io/)_ es un framework para pruebas unitarias. Centrado en determinar que todo tu código es correcto. Para ello vamos a empezar por el principio.

### Instalar Jest

Instalarlo es cosa de niños. Partimos de una aplicación _Node_ y agregamos la dependencia. Puedes hacerlo con _npm_ o con _yarn_ y guardarlo como dependencia principal o para desarrollo.

```terminal
yarn add jest
npm i --save jest
```

Y ya está. Aunque yo recomiendo agregar unas dependencias extra para facilitar aún mas el uso. Incluyo el analizador de código _eslint_ , el embellecedor _prettier_ y el empaquetador _babel_ (para evitar usar los `require` de Node). En VSCode también activo la extensión _[orta.vscode-jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)_ para que me ayude en línea.

```json
{
  "devDependencies": {
    "@babel/core": "^7.11.5",
    "@babel/preset-env": "^7.11.5",
    "@types/jest": "^26.0.13",
    "babel-jest": "^26.3.0",
    "eslint": "^7.8.1",
    "eslint-config-prettier": "^6.11.0",
    "eslint-plugin-jest": "^23.20.0",
    "eslint-plugin-prettier": "^3.1.4",
    "jest": "^26.4.2",
    "jest-fetch-mock": "^3.0.3",
    "prettier": "^2.1.1"
  }
}
```

### Configuración

Nada. Como lo oyes, no hay nada que hacer. Simplemente ejecutarlo y listo. Por supuesto que lo puedes adaptar o manipular, pero sólo lo haremos cuando lo necesitemos.

Ya, pero quieres saber cómo... Pues hay varias opciones; a mi me gusta configurarlo en su propio fichero `jest.config.js`.

```js
// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html
module.exports = {
  verbose: true
};
```

En este caso le he dicho que quiero explicaciones detalladas de lo que va ocurriendo.

### Ejecución

Las pruebas se pueden lanzar desde línea de comandos o mejor _escriptándolo_ en el `package.json`. Algo así es suficiente para empezar.

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

Aquí le decimos que se lancen todas las pruebas, que vigile los cambios para relanzarlas, pero sólo aquellas afectadas desde el último _commit_. Tienes más información en la página dedicada al [CLI de Jest](https://jestjs.io/docs/en/cli)

## Desarrollo de pruebas con Jest

¿Ejecutar? ¿El qué? Pues una **especificación**, o en el argot de _Jest_ un fichero `tu-prueba.spec.js`.

Vamos a realizar un conjunto de pruebas muy sencillo. Es un _Hola Mundo_  en JavaScript, pero un poco mejorado con algún control de argumentos como este:

```
export function sayHi(userName) {
  if (isNotAString(userName)) {
    throw `What kind of name is ${userName}?`;
  }
  if (isEmpty(userName)) {
    return `I don´t know your name`;
  }
  return `Hello ${userName}!`;
}

function isNotAString(userName) {
  return typeof userName !== 'string' && !(userName instanceof String);
}

function isEmpty(userName) {
  return userName.length === 0;
}
```

Ya lo sé, es muy básico; pero esto es solo un _Hola Mundo_.
### Hola Mundo

```
import { sayHi } from './0-hello-world';

test('Say Hi', () => {
  expect(sayHi('Jest')).toBe('Hello Jest!');
});
```

Evidente, ¿no?. Si somos novatos en las pruebas sólo tenemos que familiarizarnos con un concepto común a otros frameworks.

> Las pruebas se definen como funciones dentro de otras funciones que las ejecutan.

En este caso la función `test()`, también usable bajo el alias `it()` es la función clave de todas tus pruebas _Jest_.

Es una función que recibe dos argumentos. El primero es una cadena que describe la prueba y el segundo es otra función con la prueba en sí.

Dentro de esa función interna encontraremos llamadas a más funciones del framework; que casi siempre seguirán una sintáis similar a esta `expect(actual).toEqual(expected)`;



### Código cubierto

Al lanzar las pruebas se ejecuta también el sujeto de pruebas, el SUT. Pero **¿Cuántas líneas se ejercitan?** Pues depende de lo cuidadoso que seas al especificar las condiciones y las expectativas. Al porcentaje de líneas que se ejecutan sobre el total se le llama cobertura.

En principio **una mayor cobertura es un signo de mayor confianza en la prueba**. Pero no es determinante. De todas formas se considera que 80% es un buen indicador y _Jest_ te ofrece ese dato y otros muchos.

Como siempre, te sugiero que _escriptes_ todos tus comando de consola.

```json
  {
    "coverage": "jest src/unit/basic/basic.spec.js --collect-coverage",
  }
```

Solicitar el informe de cobertura de código es así de simple; pero necesita que en la configuración le especifique qué umbrales consideras aptos. Yo suelo utilizar algo así en el `jest.config.js`:

En el se incluyen el famoso 80% para líneas, ramas condicionales y funciones.

```
module.exports = {
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80
    },
  },
}

```

Al sólo haber probado el _Happy Path_ vemos que nuestra cobertura deja mucho que desear. Así que vamos añadiendo pruebas hasta que alcancemos los límites propuestos.

```
import { sayHi } from './0-hello-world';

test('Say Hi', () => {
  expect(sayHi('Jest')).toBe('Hello Jest!');
  expect(sayHi('')).toBe('I don´t know your name');
  expect(() => sayHi(42)).toThrow('What kind of name is 42?');
});
```

Si estás empezando con las pruebas no te obsesiones con esta métrica. Cada test que hagas estarás más cerca del objetivo: **tener confianza en tu código y dormir tranquilamente**.

Tienes el ejemplo completo en el laboratorio del curso de **Testing con Jest**.

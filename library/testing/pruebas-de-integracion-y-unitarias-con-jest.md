# 🔬 Pruebas unitarias con Jest

> _"Es difícil encontrar un error cuando lo estás buscando; es aún más difícil cuando supones que el código está libre de errores."_
>
> -- ✍️ **Steve McConnell**

Las pruebas de código deben ser **fáciles de preparar y cómodas de ejecutar**. Estas son las cualidades que aporta _Jest_ al mundo del testing. Es sencillo y cómodo. Vamos a verlo por pasos.

## Jest

_[Jest](https://jestjs.io/)_ es un framework para pruebas unitarias. Centrado en determinar que todo tu código es correcto. Para ello vamos a empezar por el principio.

### Instalar Jest

Instalarlo es cosa de niños. Partimos de una aplicación _Node_ y agregamos la dependencia. Puedes hacerlo con _npm_ o con _yarn_ y guardarlo como dependencia principal o para desarrollo.

```terminal
yarn add jest
npm i --save jest
```

Y ya está. Aunque yo recomiendo agregar unas dependencias extra para facilitar aún mas el uso. Incluyo el analizador de código _eslint_ , el embellecedor _prettier_ y el empaquetador _babel_. En VSCode también activo la extensión _[orta.vscode-jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)_

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
    "test": "jest --watch -o"
  }
}
```

Aquí le decimos que se lancen todas las pruebas, que vigile los cambios para relanzarlas, pero sólo aquellas afectadas desde el último _commit_. Tienes más información en la página dedicada al [CLI de Jest](https://jestjs.io/docs/en/cli)

## Desarrollo de pruebas con Jest

¿Ejecutar? ¿El qué? Pues una **especificación**, o en el argot de _Jest_ un fichero `tu-prueba.spec.js`.

Vamos a realizar un conjunto de pruebas muy sencillo. Dado un código en JavaScript como este:

```
export const basic = {
  balance: 0,
  deposit(amount) {
    this.balance += amount;
  },
  withdraw(amount) {
    this.balance -= amount;
  }
};
```

Ya lo sé, es muy básico; pero esto es solo un _Hola Mundo_. Lo puedes ver en [el repositorio del laboratorio](https://github.com/LabsAdemy/WebTesting_unit_Labs/tree/master/src/unit/basic)

### Hola Mundo

```
import { basic } from './basic';

test('basic exists', () => {
  expect(basic).toBeDefined();
});

test('basic balance is 0', () => {
  expect(basic.balance).toEqual(0);
});
```

Evidente, ¿no?. Si somos novatos en las pruebas sólo tenemos que familiarizarnos con un concepto común a otros frameworks.

> Las pruebas se definen como funciones dentro de otras funciones que las ejecutan.

En este caso la función `test()`, también usable bajo el alias `it()` es la función clave de todas tus pruebas _Jest_.

Es una función que recibe dos argumentos. El primero es una cadena que describe la prueba y el segundo es otra función con la prueba en sí.

Dentro de esa función interna encontraremos llamadas a más funciones del framework; que casi siempre seguirán una sintáis similar a esta `expect(recibido).toEqual(esperado)`;

### Comportamiento unitario

Pon un poco de orden en tus pruebas. Ya hemos visto en Cypress que [las pruebas deben ser limpias](tutorial/web-testing/functional/limpieza-de-pruebas). Es decir, que debe haber un orden y una estructura similar de una prueba a otra.

A mi me gusta tomar prestado el _Given When Then_ de las pruebas de comportamiento, pero también es muy usado el simple _it should_ para decir en lenguaje humano lo que debería ocurrir. Y eso es lo importante, **que quede muy claro el objetivo de la prueba**. Y para eso no ahorres texto en las descripciones de tus test. Recuerda el acrónimo **DAMP (Descriptive And Meaningful Phrases)**.

Estos son ejemplos un poco más elaborados, pero igualmente sencillos. Lo importante es que el resultado sea significativo. Y que el código que lo acompañe responda a las expectativas.

```
describe('GIVEN: a basic object', () => {
  test('WHEN: read the balance THEN returns 0', () => {
    expect(basic.balance).toEqual(0);
  });
  test('WHEN: make a deposit of 6 THEN should have a balance of 6', () => {
    const input = 6;
    basic.deposit(input);
    const actual = basic.balance;
    const expected = 6;
    expect(actual).toEqual(expected);
  });
});
```

Fíjate también en la nomenclatura propuesta para las variables. Además de aclarar mucho la intención a quién lo lea, también puede servirte de guía cuando estás empezando.

- `input` : valores de entrada
- `actual` : valores reales obtenidos
- `expected` : resultado esperado

¿Te recuerda a algo?. Sí a la triple _AAA: Arrange, Act Assert_ . No importa tanto qué convenio sigas. Pero asegúrate de seguir uno.

### Antes de nada

Vas a tener ocasiones en las que la preparación de la pruebas sea compleja. En otros casos será la propia prueba la que sea compleja. Vamos a ver estas dos situaciones, aunque por supuesto sigamos en un escenario muy básico.

```
describe('GIVEN: a basic object with a previous balance of 6', () => {
  beforeEach(() => {
    basic.balance = 0;
    const input = 6;
    basic.deposit(input);
  });
  test('WHEN: make a withdraw of 4 THEN should have a balance of 2', () => {
    const input = 4;
    basic.withdraw(input);
    const actual = basic.balance;
    const expected = 2;
    expect(actual).toEqual(expected);
  });
  test('WHEN: make a withdraw of 8 THEN should have a balance of -2', () => {
    const input = 8;
    basic.withdraw(input);
    const actual = basic.balance;
    const expected = -2;
    expect(actual).toEqual(expected);
  });
});
```

Aquí hacemos uso de la función `beforeEach()` de _Jest_ que te permite ejecutar un código común a diversas pruebas. Vale, eso está bien, pero también es cierto que las funciones empiezan a crecer y a tener mucho código similar, cuando no redundante. Necesitamos una solución común.

### Vuelve la triple AAA

Lo sé me encantan los acrónimos. Tengo poca memoria y es una manera de acordarme y empezar con una estructura. Aquí lo voy a hacer creando unas funciones de ayuda que iré invocando o asignando según necesite.

```
describe('GIVEN: a basic object with a previous balance of 10 WHEN: i ask for a borrow of 4', () => {
  beforeAll(() => {
    arrangeBalance();
    const input = 4;
    actBorrow(input);
  });
  test('THEN should have a balance of 14', assertBalance);
  test('AND THEN should have disposed of 4', assertDisposed);
});
function arrangeBalance() {
  const input = 10;
  basic.balance = input;
}
function actBorrow(input) {
  basic.borrow(input);
}
function assertBalance() {
  const actual = basic.balance;
  const expected = 14;
  expect(actual).toEqual(expected);
}
function assertDisposed() {
  const actual = basic.disposed;
  const expected = 4;
  expect(actual).toEqual(expected);
}
```

Estas micro funciones cumplen varios cometidos. Al tener nombre dejan un rastro claro para casos de fallos. Por supuesto que el nombre también sirve para aclarar el propósito a otro programador. Y ahí es dónde entra _Arrange, Act, Assert_ asignando a cada función un cometido único: preparar, ejercitar el código y comprobar el resultado. Además, algunas veces son reutilizables; pero eso no es lo fundamental.

### Sin fallos

**Todo código puede fallar**. Pero si la la excepción ya es esperada, entonces la prueba debe también comprobar que lo excepcional funciona como se espera.

```
  borrow(amount) {
    if (amount + this.disposed > this.balance) {
      throw "you can't request so much credit";
    }
    this.disposed += amount;
    this.balance += amount;
  },
```

Esta función comprueba una condición lógica y lanza un error si no se cumple. Debemos capturar ese error y asegurar que se lanza cuando es preciso.

```
describe('GIVEN: a basic object with a previous balance of 10 WHEN: i ask for a borrow of 40', () => {
  beforeAll(() => {
    arrangeBalance();
  });
  test('THEN should receive an error', assertDisposedThrowsError);
});
function arrangeBalance() {
  const input = 10;
  basic.balance = input;
}
function assertDisposedThrowsError() {
  const input = 14;
  expect(() => actBorrow(input)).toThrow();
}
```

Aquí la sintaxis es un poquitín rara, pero necesaria para que _Jest_ haga internamente el trabajo sucio de envolver en `try{}catch(e){}` tu sujeto de pruebas.

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

En el se incluyen el famoso 80% para líneas, ramas condicionales y funciones. Si estás empezando con las pruebas no te obsesiones con esta métrica. Cada test que hagas estarás más cerca del objetivo: **tener confianza en tu código y dormir tranquilamente**.

Tienes el ejemplo completo en el [laboratorio](https://github.com/LabsAdemy/WebTesting_unit_Labs/tree/master/src/unit/basic) del curso de **Testing con Jest**.

<div class="page"/>
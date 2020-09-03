---
title: 🏗 Pruebas de integración
subtitle: >-
  Pruebas de sistemas legacy complejos.
excerpt: >-
  Pruebas de integración. Pruebas de sistemas legacy complejos.
post_url: tutorial/web-testing/code/pruebas-de-integracion
img_path: images/undraw_science.png
thumb_img_path: images/undraw_science.png
date: '2020-05-19'
up: Tutorial WebTesting
up_url: tutorial/web-testing
previous: Pruebas de código con Jest
previous_url: tutorial/web-testing/code
next: TDD, ciclo virtuoso RGR
next_url: tutorial/web-testing/code/tdd-ciclo-virtuoso-rgr
laboratory: Laboratorio
laboratory_url: https://github.com/LabsAdemy/webtesting_jest/tree/master/src/2-tdd
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

> _"Los probadores de software siempre van al cielo; Ya han tenido su parte de infierno."_
>
> -- ✍️ **Tester anónimo**

La mayoría del software empresarial se ha escrito sin pruebas. Y esto dificulta mucho su mantenimiento. **Hacer pruebas sobre código heredado es costoso y poco atractivo. Pero hay que hacerlo.**

Lo contrario implica hacer las mínimas modificaciones y siempre con la inquietud de haber roto algo. Desde luego ya no hablamos de refactoring. _Si funciona... no lo toques_. Y así nos va, con software mal diseñado en el cual es difícil arreglar defectos o añadir funcionalidad.

Y la solución pasa por hacer pruebas. **Las pruebas automáticas son una inversión rentable** que te permite asegurar el funcionamiento de un programa mientras lo modificas para corregir, mantener o mejorar.

## Código heredado

Con _Jest_ es relativamente sencillo probar este código heredado, que quizá sea reciente, quizás incluso sea tuyo. No importa, vamos a ver qué situaciones y problemas nos encontramos.

El ejemplo propuesto es un sistema bancario ridículamente simple en tres ficheros.

Se trata de una clase `Account` con métodos de negocio para ingresos y gastos y otra `Clerk` para ejecutar operaciones y otra `Tranasactions` almacenar dichas operaciones.

### Happy Path

Con lo que sabemos de _Jest_ es fácil entender esta prueba; y entendiendo esta prueba es fácil adivinar la funcionalidad del programa. Además seguimos usando el patrón `given-when-then` y los nombrados de variables también por convenio `sut`, `input`, `actual`, `expected`.

```
import { Account } from './bank/account';

describe('GIVEN a new account with a deposit', () => {
  const sut = new Account();
  const input = 20;
  sut.deposit(input);
  test('SHOULD have the correct balance', () => {
    const actual = sut.getBalance();
    const expected = 20;
    expect(actual).toBe(expected);
  });
});

describe('GIVEN a new account with two deposits', () => {
  const sut = new Account();
  const inputA = 20;
  sut.deposit(inputA);
  const inputB = 10;
  sut.deposit(inputB);
  test('SHOULD accumulate the amounts in the balance', () => {
    const actual = sut.getBalance();
    const expected = 30;
    expect(actual).toBe(expected);
  });
});
```

### Excepciones

¿Todo bien? Más o menos. El caso es que este código puede demostrar que el programa funciona, eso está bien; y se puede extender para realizar pruebas más complejas (manejo de descubiertos, aportaciones más o menos generosas...). Por ejemplo en otro fichero podríamos probar las retiradas de dinero y sus límites aceptables.
```
describe('GIVEN a new account with slightly more withdraw than deposit', () => {
  const sut = new Account();
  const inputDeposit = 15;
  sut.deposit(inputDeposit);
  const inputWithdraw = 20;
  sut.withdraw(inputWithdraw);
  test('SHOULD have a negative balance', () => {
    const actual = sut.getBalance();
    expect(actual).toBeLessThan(0);
  });
});

describe('GIVEN a new account with a lot more withdraw than deposit', () => {
  const sut = new Account();
  const inputDeposit = 15;
  sut.deposit(inputDeposit);
  const inputWithdraw = 200;
  test('SHOULD throw an exception', () => {
    expect(() => sut.withdraw(inputWithdraw)).toThrow();
  });
});
```

Fíjate por ejemplo cómo se prueban las excepciones. Es muy importante comprobar que el código se comporta de la manera esperada justo en los peores momentos.

### Asincronismo

En JavaScript más temprano que tarde te vas a encontrar con código asíncrono. En programación _front-end_ es el día día; y en el _back_... también.

Pero actualmente tenemos técnicas de desarrollo asíncrono muy sencillas como los comandos `async` y `await` y que se implementan perfectamente en _Jest_.

Suponiendo que ahora nuestro sistema almacenase y recuperase las transacciones en un almacén remoto, todo el proceso pasaría a ser asíncrono. Y eso en _Jest_ es casi transparente. Solamente tendremos que anotar las función de pruebas con los comandos `async` y `await`

```
import { Account } from './bank_async/account';

describe('a new async account with a deposit', () => {
  const sut = new Account();
  const input = 20;
  test('should have the correct balance', async () => {
    await sut.deposit(input);
    const actual = sut.getBalance();
    const expected = 20;
    expect(actual).toBe(expected);
  });
});
```

A pesar de que este código es correcto, es posible que te encuentres con que no puedes ejecutar estas pruebas. ¿Cómo? Pues porque al ser _Jest_ un framework originalmente basado en Node, pues se lleva mal con algunas librerías típicas del front. Yo lo he forzado en el laboratorio usando `fetch` para las llamadas remotas. Forcé el problema para mostrarte una solución.

### Mocks

La teoría del testing nos dice que podemos, casi debemos, usar dobles en lugar de dependencias reales. Sobre todo si estas nos impiden ejecutar las pruebas, como en este caso. Así que recurro a un _mock_ de las funciones `fetch`.

Afortunadamente no hay que programar nada porque los problemas comunes tienen soluciones comunes y públicas. En este caso con el paquete `est-fetch-mock` que se instala y luego se invoca en una sola instrucción.

```
require('jest-fetch-mock').enableMocks();
import { Account } from './bank _async/account';
```

¿Entonces? Ya está todo bien, ¿no?. Mas o menos, pues la trampa está en que es todo esto es una **prueba de integración**.

En esta prueba estamos ejercitando a `Acount` y _sin querer_ a a todas sus dependencias. Es decir damos por bueno que `Clerk` y `Transactions` también funcionan. ¿Y eso es malo? No necesariamente; si la prueba pasa es una buena dosis de confianza. Pero si no la pasa... entonces no sabremos gran cosa sobe el motivo del fallo.

Pero tras refrescar el concepto de _mock_ la mejora de esta situación está cerca.


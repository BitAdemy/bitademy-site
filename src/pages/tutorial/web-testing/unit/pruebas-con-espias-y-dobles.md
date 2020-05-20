---
title: 🕵🏼‍♂️ Pruebas con espías y dobles
excerpt: >-
  Pruebas con espías y dobles. Pruebas de sistemas legacy complejos.
post_url: tutorial/web-testing/unit/pruebas-con-espias-y-dobles
img_path: images/undraw_science.png
thumb_img_path: images/undraw_science.png
date: '2020-05-19'
up: Tutorial WebTesting
up_url: tutorial/web-testing
previous: Pruebas unitarias con Jest
previous_url: tutorial/web-testing/unit
next: Pruebas de código asíncrono
next_url: tutorial/web-testing/unit/pruebas-de-codigo-asincrono
laboratory: Laboratorio
laboratory_url: https://github.com/LabsAdemy/WebTesting_unit_Labs/tree/master/src/unit/legacy
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

Con _Jest_ es relativamente sencillo probar este código heredado, que quizá sea reciente, quizás incluso sea tuyo. No importa, vamos a ver qué situaciones y problemas nos encontramos.

## Integración

El ejemplo propuesto es una evolución del sistema financiero visto en la [introducción a las pruebas con _Jest_](https://www.bitademy.com/tutorial/web-testing/unit). Tienes en el [repositorio del laboratorio](https://github.com/LabsAdemy/WebTesting_unit_Labs/tree/master/src/unit/legacy) tres ficheros que implementan un sistema bancario ridículamente simple.

Se trata de una clase `BankClient` que utiliza a otras para su operativa. Una `Account` para ingresos y gastos y otra `Loan` para créditos. La clase principal es la fachada que utiliza el usuario y dispone de una lógica mínima para manejar entradas y salidas de dinero.

Con lo que sabemos de _Jest_ es fácil entender esta prueba; y entendiendo esta prueba es fácil adivinar la funcionalidad del programa. Mira en el código de [legacy-integration.spec.js](https://github.com/LabsAdemy/WebTesting_unit_Labs/blob/master/src/unit/legacy/tests/legacy-integration.spec.js)

```js
import { BankClient } from '../bank-client';

let sutBankClient;
describe('GIVEN: a new BankClient WHEN: i deposit 20', () => {
  beforeAll(() => {
    const inputCredit = 100;
    const inputAmount = 20;
    arrangeBank(inputCredit);
    actDeposit(inputAmount);
  });
  test('THEN should have a balance of 20', assertBalance);
});
function arrangeBank(input) {
  sutBankClient = new BankClient(input);
}
function actDeposit(input) {
  sutBankClient.deposit(input);
}
function assertBalance() {
  const actual = sutBankClient.getPosition();
  const expected = 20;
  expect(actual).toEqual(expected);
}
```

¿Todo bien? Más o menos. El caso es que este código puede demostrar que el programa funciona, eso está bien; y se puede extender para realizar pruebas más complejas (manejo de descubiertos, aportaciones más o menos generosas...) ¿Entonces? Pues la trampa está en que es una **prueba de integración**.

En esta prueba estamos ejercitando a `BankClient` y _sin querer_ a a todas sus dependencias. Es decir damos por bueno que `Acount` y `Loan` también funcionan. ¿Y eso es malo? No necesariamente; si la prueba pasa es una buena dosis de confianza. Pero si no la pasa... entonces no sabremos gran cosa sobe el motivo del fallo.

## Unitarias

Las pruebas unitarias las hacemos para **descubrir fallos en una unidad manejable** de código. Y en nuestro caso, las dependencias agregan un nivel extra de casuística que dificultan el determinar la responsabilidad del código de `BankClient`.

### DOC Depended On Components

Este escenario. donde las dependencias están incrustadas en el sujeto a probar (_Subject Under Test_), se evita como al diablo al realizar **TDD** (_Testing Driven Development_). Pero en código _legacy_ hay que ajustarse a la realidad e intentar esquivar el problema de las dependencias simulando a los DOC (_Depended On Components_).

Entramos en el ambiguo mundo de los **_mocks_**.

## Espías

El caso más sencillo sólo pretende **sustituir a cada dependencia por un objeto que cumpla** su interfaz. No necesita implementación. La idea es simplemente **comprobar si se llaman o no a los métodos adecuados**.

Esto es el concepto de **espía**, alguien que nos cuenta lo que ocurre. Montar este sistema de espionaje con _Jest_ es relativamente simple, pero se entiende mejor con un ejemplo:

```js
import { Account } from '../account';
import { BankClient } from '../bank-client';
jest.mock('./account');
describe('GIVEN: a new BankClient', () => {
  beforeEach(() => {
    Account.mockClear();
    const inputCredit = 100;
    arrangeBank(inputCredit);
  });
  test('THEN account constructor should be called', assertAccountConstructorIsCalled);
});
function arrangeBank(input) {
  sutBankClient = new BankClient(input);
}
function assertAccountConstructorIsCalled() {
  expect(Account).toHaveBeenCalledTimes(1);
}
```

La clave está en la línea `jest.mock('./account')` en la cual se instruye a _Jest_ para que cuando el _SUT_ `BankClient` reclame una instancia de su _DOC_ `Account` le dé un doble y no la clase real.

**La clase doble no hace nada práctico**, pero permite saber si nuestro _SUT_ hace las llamadas correctas. En este caso simplemente saber que fue instanciado una y sólo una vez.

En el laboratorio tienes [el ejemplo completo](https://github.com/LabsAdemy/WebTesting_unit_Labs/blob/master/src/unit/legacy/tests/legacy-spy.spec.js) y verás que nuestro espía es capaz de informarte también de **los argumentos de cada llamada**.

## Dobles

En muchas situaciones no es suficiente saber que se ha llamado a algo, ni siquiera saber los argumentos de entrada. Muchas veces es necesario **actuar en función de las respuestas** posibles. Y aquí es donde ya necesitamos toda la potencia del doblaje para crear implementaciones _mock_.

El siguiente ejemplo usa un espía para la gestión del crédito, pero necesita **un doble para simular** el balance de la cuenta.

```js
import { Account } from '../account';
import { BankClient } from '../bank-client';
import { Loan } from '../loan';
jest.mock('./account');
jest.mock('./loan');

let sutBankClient;
let mockLoanInstance;
let spyBorrowMethod;

describe('GIVEN: a new BankClient with 25 WHEN: i ask for 30', () => {
  beforeEach(() => {
    Account.mockClear();
    Loan.mockClear();
    const fakeBalance = 25;
    arrangeAccountDouble(fakeBalance);
    const inputCredit = 100;
    arrangeBankWithCash(inputCredit);
    arrangeLoanSpy();
    const inputAsked = 30;
    actWithdraw(inputAsked);
  });
  test('THEN loan.borrow should be called with 5', assertLoanBorrowIsCalledWithAmount);
});
function arrangeAccountDouble(fakeBalance) {
  Account.mockImplementation(() => {
    return {
      getBalance: () => fakeBalance,
      withdraw: () => {}
    };
  });
}
function arrangeBankWithCash(inputCredit) {
  sutBankClient = new BankClient(inputCredit);
}
function arrangeLoanSpy() {
  mockLoanInstance = Loan.mock.instances[0];
  spyBorrowMethod = mockLoanInstance.borrow;
}
function actWithdraw(input) {
  sutBankClient.withdraw(input);
}
function assertLoanBorrowIsCalledWithAmount() {
  const expected = 5;
  expect(spyBorrowMethod).toHaveBeenCalledWith(expected);
}
```

La instrucción clave es `Account.mockImplementation()` que lleva incrustada una factoría de dobles de la clase `Account`. En esta factoría implementamos los mínimos métodos imprescindibles, y simulamos las respuestas que nos convenga para probar el `BankClient`. No es interesante la clase `Account`. Recuerda, probamos el _SUT_ no sus _DOCs_

> Fíjate en el orden. Necesitamos montar al doble antes de que lo instancien. Mientras que el espionaje se realiza sobre una instancia ya construida.

Todo esto puede parecer lioso, y aunque al principio lo es, en cuestión de semanas lo integrarás en tus habilidades y te resultará natural. Pero sobre todo valorarás mucho no tener que abusar de estas técnicas. ¿Cómo? Con software bien diseñado ¿Cómo? Con TDD.

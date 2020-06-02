---
title: 🏇🏼 Pruebas de código asíncrono
subtitle: >-
  Pruebas con llamadas a servicios remotos.
excerpt: >-
  Pruebas de código asíncrono. Pruebas con llamadas a servicios remotos.
post_url: tutorial/web-testing/unit/pruebas-de-codigo-asincrono
img_path: images/undraw_science.png
thumb_img_path: images/undraw_science.png
date: '2020-05-20'
up: Tutorial WebTesting
up_url: tutorial/web-testing
previous: Pruebas con espías y dobles
previous_url: tutorial/web-testing/unit/pruebas-con-espias-y-dobles
next: TDD, desarrollo guiado por las pruebas
next_url: tutorial/web-testing/tdd
laboratory: Laboratorio
laboratory_url: https://github.com/LabsAdemy/WebTesting_unit_Labs/tree/master/src/unit/async
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

> _"El testing te lleva al fallo, y el fallo te lleva al entendimiento."_
>
> -- ✍️ **Burt Rutan**

La comunicación asíncrona presenta uno de los retos más comunes al desarrollar, y por tanto probar, aplicaciones web. Hemos avanzado mucho desde los viejos _callbacks_ hasta las modernos `async- await`. Pero hay algo inherentemente complejo a la programación asíncrona. Vamos a ver cómo afrontarla desde el punto de vista de las pruebas.

## Programación asíncrona

He modificado el ejemplo bancario y ahora disponemos de un servicio para guardar y recuperar transacciones en un API remota. Puedes ver el código en [el repositorio.](https://github.com/LabsAdemy/WebTesting_unit_Labs/tree/master/src/unit/async)

Tenemos una clase y un módulo con funciones de ayuda. Veamos primero la clase `BankClient`

```
import { getAllTransactions, postTransaction } from './bank-service';

export class BankClient {
  constructor() {}
  async deposit(amount) {
    const depositTransaction = { date: Date(), type: 'deposit', amount };
    const savedTransaction = await postTransaction(depositTransaction);
    return savedTransaction;
  }

  async withdraw(amount) {
    const withdrawTransaction = { date: Date(), type: 'withdraw', amount };
    const savedTransaction = await postTransaction(withdrawTransaction);
    return savedTransaction;
  }

  async getPosition() {
    return await getAllTransactions();
  }
}
```

Depende del módulo `bank.service` que exporta funciones asíncronas, las cuales preparan la petición, esperan por su ejecución y retornan un resultado adecuado.

```
const url = 'https://api-base.herokuapp.com/api/pub/transactions/';
export { getAllTransactions, postTransaction };

async function getAllTransactions() {
  const request = createRequest(url, 'GET');
  const res = await fetch(request);
  return await getDataOrEmpty(res, []);
}
async function postTransaction(transaction) {
  const request = createRequest(url, 'POST', transaction);
  const res = await fetch(request);
  return getDataOrEmpty(res, {});
}

function createRequest(url, method = 'GET', payload = null) {
  return new Request(url, {
    method: method,
    body: payload ? JSON.stringify(payload) : null,
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  });
}
async function getDataOrEmpty(res, empty) {
  let result = empty;
  if (res.status >= 200 && res.status < 400) {
    const data = await res.text();
    result = data ? JSON.parse(data) : empty;
  }
  return result;
}
```

### Estrategias de prueba: integración vs unitaria

Antes de nada debemos recordar lo aprendido en el tema de [Pruebas con espías y dobles](/tutorial/web-testing/unit/pruebas-con-espias-y-dobles). Si ejercitamos el código de `BankClient` a alto nivel, estaremos haciendo una integración que necesita que sus dependencias funcionen. Y merece la pena pensar en sus dependencias.

- BankClient

  - bank-service

    - fetch

      - Remote API


Con el problema _browser-node_ hemos topado. Una de las librerías más usadas en JavaScript es la estándar `fetch` que no tiene equivalente en Node. Y las pruebas _Jest_ son en realidad aplicaciones Node que ejecutan nuestro código. Así que mejor buscar un sustituto. Afortunadamente es fácil encontrarlo, yo uso y te recomiendo [jest-fetch-mock](https://github.com/jefflau/jest-fetch-mock).

Como su nombre indica,`jest-fetch-mock`, nos crea un doble de `fetch` para poder realizar las pruebas con _Jest_. Y por supuesto con distintas modalidades. Vayamos de menos a más.

Para configurarlo simplemente agrega esta línea antes de tus pruebas o en un fichero de setUp `require('jest-fetch-mock').enableMocks();`

## Pruebas de integración asíncronas

Con las herramientas adecuados y los conceptos básicos sobre asincronismo ya podemos probar nuestro sistema.

### Sin mocks

Usaremos **un mock sin mocks**. 🥴 Me explico; al no poder usar `fetch` desde Node, usaremos un doble que sí funciona y que hace exactamente lo mismo. Es un simple _polyfill_ pero con tecnología _mock_. Esta es la aparentemente contradictoria instrucción  que lo consigue: `fetchMock.dontMock();`

### Alto nivel

Y ahora la prometida prueba de integración sencilla. Vamos a ejercitar ciegamente `BankClient` y todas sus dependencias hasta el servidor del API. Como digo, es lo más sencillo. Y aún así al estar en en entorno asíncrono tenemos que hacer ciertos cambios.

Lo más evidente es que las funciones de prueba son ahora síncronas. Y, por supuesto, debemos esperar por las respuestas de nuestras dependencias.

```
import { BankClient } from '../bank-client';
let sut;
describe('GIVEN: a BankClient system', () => {
  beforeAll(() => {
    fetchMock.dontMock();
    sut = new BankClient();
  });
  test('WHEN: save a deposit THEN it posts the transaction', async () => {
    const input = 10;
    const actual = await sut.deposit(input);
    const expected = 10;
    expect(actual.amount).toEqual(expected);
    expect(actual._id).toBeDefined();
  });
});
```

Con `async await` es pan comido y no hay nada inherentemente malo en esta prueba de integración. Especialmente si la prueba pasa; pues indica un grado alto de confianza en el sistema. Pero hay que ser conscientes de que si esta prueba no pasa, entonces sabremos poco acerca de dónde está el problema.

### Bajo nivel

¿Y si hago las prueba un piso más abajo? Está claro que cuanto mas bajo sea el nivel de tu código menos dependencias tendrá. Y por tanto menos culpables potenciales. El código sigue muy parecido al anterior, sólo que ahora ejercitamos directamente las funciones asíncronas del módulo `bank-service`.

```
import { getAllTransactions, postTransaction } from '../bank-service';
describe('GIVEN: a connected Bank service', () => {
  beforeAll(() => {
    fetchMock.dontMock();
  });
  test('WHEN: i post a transaction THEN it returns the _id', async () => {
    const input = { date: new Date(), type: 'Deposit', amount: 10 };
    const actual = await postTransaction(input);
    expect(actual._id).toBeDefined();
  });
  test('WHEN: i ask for all transactions THEN it returns an array', async () => {
    const actual = await getAllTransactions();
    const expected = 1;
    expect(actual.length).toBeGreaterThanOrEqual(expected);
  });
});
```

Lo dicho, esto sigue siendo un prueba de integración porque dependemos del API para su ejecución. Para focalizar el problema hay que volver a las pruebas unitarias, pero en modo asíncrono y con _mocks_ de verdad.

## Tests Unitarios asíncronos

Vamos a repetir las pruebas de arriba a abajo pero ahora sin depender de código externo. Es decir vamos al **Unit Test** asíncrono.

### Con servicios mock

Lo primero es probar el `BankClient` pero sin depender del módulo `bank-service`. Aquí parece de nuevo la instrucción _Jest_ para generar dobles `jest.mock('../bank-service');` Y desaparece la extraña `fetchMock.dontMock();`

Claro que un buen doble tiene que simular el comportamiento de su gemelo. Recordamos que con _Jest_ podemos hacerlo con `funcion.mockReturnValue(fakeResult)`. Sólo que ahora debemos adaptarnos al ambiente asíncrono y retornar promesas.

```
import { BankClient } from '../bank-client';

import { postTransaction } from '../bank-service';

jest.mock('../bank-service');

let sut;

describe('GIVEN: a BankClient class', () => {
  beforeAll(() => {
    const fake = { _id: 42, amount: 10 };
    postTransaction.mockReturnValue(Promise.resolve(fake));
    sut = new BankClient();
  });
  test('WHEN: save a deposit THEN it posts the transaction', async () => {
    const input = 10;
    const actual = await sut.deposit(input);
    console.log({ actual });
    const expected = 10;
    expect(actual.amount).toEqual(expected);
    expect(actual._id).toBeDefined();
  });
});
```

Ya está; si ahora algo va mal, el culpable es `BankClient`. Ese es el objetivo de la prueba unitaria: aislar la fuente de problemas.

### Con llamadas mock

En el punto anterior, no hemos hecho uso de `fetchMock`. El propio sistema de doblaje de _Jest_ nos aisló de las llamadas `fetch`  a bajo nivel que realiza el `bank-service`. Pero, ¿y si queremos probar esas funciones?

El objetivo ahora es aislarnos del API, así que volvemos a usar la librería `jest-fetch-mock` pero ahora simulando las llamadas _http_. Lo hacemos con una instrucción mucho más coherente `fetchMock.doMock();`

```
import { getAllTransactions } from '../bank-service';

describe('GIVEN: a disconnected Bank service', () => {
  beforeAll(() => {
    fetchMock.doMock();
  });
  test('WHEN: i ask for all transactions THEN it returns an empty array', async () => {
    const actual = await getAllTransactions();
    const expected = [];
    expect(actual).toEqual(expected);
  });
});
```

Eso sí, no esperéis grandes resultados. De hecho lo único esperable es que cada llamada real a `fetch` retorne un valor _fake_ indefinido. Estamos aislados del API, todo funciona, pero con respuestas poco prácticas y monótonas.

### Con respuestas fake

Afortunadamente es muy fácil preparar el sistema para que devuelva la respuesta que nos parezca más adecuada. Incluso podemos simular errores, códigos de respuesta, cabeceras... Es decir, simular lo que haría un API de verdad.

```
import { getAllTransactions } from '../bank-service';

describe('GIVEN: a mocked Bank service', () => {
  beforeAll(() => {
    fetchMock.doMock();
    fetch.mockResponseOnce(
      JSON.stringify([
        { id: 1, amount: 1 },
        { id: 2, amount: 20 }
      ])
    );
  });
  test('WHEN: i ask for all transactions THEN it returns the expected array', async () => {
    const actual = await getAllTransactions();
    const expected = [
      { id: 1, amount: 1 },
      { id: 2, amount: 20 }
    ];
    expect(actual).toEqual(expected);
  });
});
```

Ahora cualquier fallo, cualquier prueba que no pase, apuntará directamente al único involucrado. El único culpable posible es el módulo `bank-service` y sus funciones.

> Prueba superada; podemos probar cualquier clase, módulo o función, síncrona o asíncrona sin depender de nadie.
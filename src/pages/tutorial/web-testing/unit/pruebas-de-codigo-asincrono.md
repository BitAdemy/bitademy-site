---
title: 🏇🏼 Pruebas de código asíncrono
excerpt: >-
  Pruebas con llamadas a servicios remotos.
post_url: tutorial/web-testing/unit/pruebas-de-codigo-asincrono
img_path: images/undraw_science.png
thumb_img_path: images/undraw_science.png
date: '2020-05-20'
up: Tutorial WebTesting
up_url: tutorial/web-testing
previous: Pruebas con espías y dobles
previous_url: tutorial/web-testing/pruebas-con-espias-y-dobles
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

## Integración asíncrona

`jest-fetch-mock`

### Sin mocks

`fetchMock.dontMock();`

#### Alto nivel

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

#### Bajo nivel

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

## Unitarios asíncronos

### Con servicios mock

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

### Con llamadas mock

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

### Con respuestas fake

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

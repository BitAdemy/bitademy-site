---
title: 📈 Mejores resultados y mejor diseño
subtitle: >-
  Hacer las pruebas antes mejora el código de después.
excerpt: >-
  Mejores resultados y mejor diseño. Hacer las pruebas antes mejora el código de después.
post_url: tutorial/web-testing/tdd/mejores-resultados-y-mejor-diseno
img_path: images/undraw_science.png
thumb_img_path: images/undraw_science.png
date: '2020-05-22'
up: Tutorial WebTesting
up_url: tutorial/web-testing
previous: Pruebas de código asíncrono
previous_url: tutorial/web-testing/unit/pruebas-de-codigo-asincrono
laboratory: Laboratorio
laboratory_url: https://github.com/LabsAdemy/WebTesting_unit_Labs/tree/master/src/tdd/better
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

> _"TDD te hace escribir código más desacoplado, lo cual mejora el diseño del sistema."_
>
> -- ✍️ **Robert C. Martin (Uncle Bob)**

Aprender algo es costos, incluirlo en tu rutina lo es aún más. Tenemos que visualizar el objetivo para motivarnos. E ir paso a paso para no desmotivarnos.

Venga, vamos a continuar con nuestro micro sistema bancario según vimos en la [introducción a TDD](https://www.bitademy.com/tutorial/web-testing/tdd).

## Test first

Supongamos que nos piden que el sistema sea capaza de obtener un balance a partir de transacciones anteriores.

```
FEATURE: a BankClient account
As_a: high level service
I_want_to: have a class where deposit money
In_order_to: accumulate several amounts of money for MUCH later
```

Pues empezamos por especificar nuestros deseos: un método llamado `calculateBalance` estaría bien. Que reciba un array y me devuelva un valor sería fantástico para mis pruebas.

```
describe('GIVEN: a calculate balance function', () => {
  test('WHEN i have a transactions array THEN it calculates the balance', () => {
    const input = [{ _id: 1, amount: 12 }];
    const sut = new BankClient();
    const actual = sut.calculateBalance(input);
    const expected = 12;
    expect(actual).toEqual(expected);
  });
});
```

Con esto podemos empezar, obviamente habría que incluir más casos. Pero tenemos la idea.

### Better implementation

La implementación en la clase `BankClient` no es para el premio Turing de informática; pero tiene algo implícitamente bueno: Se ha creado un método, se ha nombrado según el uso esperado y usando el código ya hecho, como la propiedad `this.balance`.

```
calculateBalance(transactions) {
  this.balance = transactions.reduce(
    (runningBalance, transaction) => runningBalance + transaction.amount,
    this.balance
  );
  return this.balance;
}
```

Listo, refactorízalo a tu gusto. Por dentro es todo tuyo.

## Dependencias

Recuerda que nos piden que las transacciones se persistan. De modo que habrá que disponer de funciones que almacenen y que lean transacciones. Pero no nos han dicho nada de su implementación. Y siendo este un efecto colateral no relacionado con la lógica bancaria... ¡Vamos a declara su dependencia!

```
describe('GIVEN: a BankClient class with load logic', () => {
  test('WHEN  i load the transactions THEN it calls the specific function', () => {
    const getAllTransactions = () => [];
    const sut = new BankClient(getAllTransactions);
    const calculateBalanceSpy = jest.spyOn(sut, 'getAllTransactions');
    sut.load();
    expect(calculateBalanceSpy).toHaveBeenCalled();
  });
});
```

Es decir, deseamos que nuestro sistema bancario use una función llamada `getAllTransactions`. Pensamos que será muy usada, así que se la pasaremos ya en el constructor; para que la llamen sus métodos en cualquier momento. Realmente queremos asegurar que la llaman al realizar la carga de datos, dentro del método `load`. Hagámoslo.

### Inyectables

```
export class BankClient {
  constructor(getAllTransactions) {
    this.getAllTransactions = getAllTransactions;
    this.balance = 0;
  }
  load() {
    const transactions = this.getAllTransactions();
  }
  ...
}
```

Y esto es todo lo que se necesita por ahora. Casi nada. Pero muy interesante porque da por hecho que la responsabilidad de la carga no es mía. Y además que tampoco me preocupa quien la hará. No voy a importar ni a instanciar nada. Que me lo den todo hecho.

### Mejoras paso a paso

Y con esta tranquilidad vamos incorporando funcionalidad. Por ejemplo, ya que tenemos la función de cálculo de balances, estaría bien llamarla tras la carga de las transacciones. Vamos a expresar este nuevo capricho.

```
test('WHEN i load the transactions THEN it calls the calculateBalance function', () => {
  const fakePreviousTransactions = [{ _id: 1, amount: 12 }];
  const getAllTransactions = () => fakePreviousTransactions;
  const sut = new BankClient(getAllTransactions);
  const calculateBalanceSpy = jest.spyOn(sut, 'calculateBalance');
  sut.load();
  expect(calculateBalanceSpy).toHaveBeenCalledWith(fakePreviousTransactions);
});
```

Es decir, queremos que durante la llamada a `load()` también se llame a `calculateBalance(transactions)`. Pero además, con el argumento de entrada que corresponda con la salida producida por `getAllTransactions()`.

Y para cumplirlo hay que hacer muy poquito.

```
load() {
  const transactions = this.getAllTransactions();
  this.calculateBalance(transactions);
}
```

## Asíncrono

Pasarnos al mundo asíncrono es independiente de realizar los tests antes o después. Pero ya que estás aprendiendo testing te dejo un par de ejemplos de cómo hacerlo; ya lo has adivinado, se trata de exigir a nuestra función `load` que sea asíncrona.

```
describe('GIVEN: a BankClient class with load logic', () => {
  test('WHEN i asynchronously load the transactions THEN waits for the data and calculates the balance', async () => {
    const fakePreviousTransactions = [{ _id: 1, amount: 12 }];
    const getAllTransactions = () => fakePreviousTransactions;
    const sut = new BankClient(getAllTransactions);
    const calculateBalanceSpy = jest.spyOn(sut, 'calculateBalance');
    await sut.load();
    expect(calculateBalanceSpy).toHaveBeenCalledWith(fakePreviousTransactions);
  });
});
```

```
async load() {
  const transactions = await this.getAllTransactions();
  this.calculateBalance(transactions);
}
```

No hemos hecho nada, simplemente obligar a que la implementación use la sintaxis asíncrona. Vale, quieres ver algo mas, ¿no?

## Promesas

Mas pronto que tarde necesitarás implementar algún tipo de doble de estas funciones. Los dobles de las funciones asíncronas tiene la dificultad de... las funciones asíncronas.

Te muestro un par de ejemplo usando promesas y simulando un retardo con el típico `setTimeout`. Descarga [el laboratorio](https://github.com/LabsAdemy/WebTesting_unit_Labs/blob/master/src/tdd/better/bank-client-persisted-async.js) para verlo con calma en tu editor de código.

```
describe('GIVEN: a BankClient system with a previous saved transaction of 12', () => {
  let sut;
  beforeEach(async () => {
    const fakePreviousTransactions = [{ _id: 1, amount: 12 }];
    const fakeDelay = 1000;
    const loadPromise = new Promise(resolve => {
      setTimeout(() => resolve(fakePreviousTransactions), fakeDelay);
    });
    const getAllTransactions = async () => loadPromise;
    const saveTransaction = function resolveAfter(transaction) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({ ...transaction, _id: 1 });
        }, fakeDelay);
      });
    };
    sut = new BankClient(getAllTransactions, saveTransaction);
    await sut.load();
  });
  test('WHEN: i make a deposit of 10 THEN returns a balance of 22', async () => {
    const input = 10;
    const actual = await sut.deposit(input);
    const expected = 22;
    expect(actual).toEqual(expected);
  });
});
```

### Refactored

Las pruebas son código, y por tanto, [las pruebas deben de estar limpias](https://www.bitademy.com/tutorial/web-testing/functional/limpieza-de-pruebas). Te recomiendo que saques a funciones con nombre **AAA** todas la lógica que puedas. Especialmente la de preparación con _Arrange_.

```
beforeEach(async () => {
  const { getAllTransactions, saveTransaction } = arrangeDependencies();
  sut = new BankClient(getAllTransactions, saveTransaction);
  await sut.load();
});

function arrangeDependencies() {
  const fakeDelay = 1000;
  const loadPromise = new Promise(resolve => {
    setTimeout(() => resolve(fakePreviousTransactions), fakeDelay);
  });
  const getAllTransactions = async () => loadPromise;
  const saveTransaction = function (transaction) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ ...transaction, _id: 1 });
      }, fakeDelay);
    });
  };
  return { getAllTransactions, saveTransaction };
}
```

### Sin API

¿De qué API me hablas? Estamos en una capa de lógica de negocio. A este nivel no sabemos, ni nos importa, cómo o dónde se guardan las transacciones. Nos basta con estar preparados para trabajar de forma asíncrona con las funciones que decidan inyectarnos...

Um, esto suena a que tenemos el código preparado para usar técnicas de inversión de control.

> El código está desacoplado y es muy sencillo mantenerlo. Este es el objetivo del software bien diseñado. Para conseguirlo merece la pena el esfuerzo invertido.

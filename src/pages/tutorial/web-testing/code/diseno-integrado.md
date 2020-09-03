---
title: 📈 Diseño integrado
subtitle: >-
  Mejores resultados y mejor diseño. Hacer las pruebas antes mejora el código de después.
excerpt: >-
  Diseño integrado. Mejores resultados y mejor diseño. Hacer las pruebas antes mejora el código de después.
post_url: tutorial/web-testing/code/diseno-integrado
img_path: images/undraw_science.png
thumb_img_path: images/undraw_science.png
date: '2020-09-03'
up: Tutorial WebTesting
up_url: tutorial/web-testing
previous: TDD, ciclo virtuoso RGR
previous_url: tutorial/web-testing/code/tdd-ciclo-virtuoso-rgr
next: Refactoring y rediseño
next_url: tutorial/web-testing/code/refactoring-y-rediseno
laboratory: Laboratorio
laboratory_url: https://github.com/LabsAdemy/webtesting_jest/tree/master/src/3-design
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

Aprender algo es costoso, incluirlo en tu rutina lo es aún más. Tenemos que visualizar el objetivo para motivarnos. E ir paso a paso para no desmotivarnos.

Venga, vamos a continuar con nuestro micro sistema bancario según vimos en la [introducción a TDD](https://www.bitademy.com/tutorial/web-testing/tdd).

## Test first

Supongamos que nos piden que el sistema sea capaza de obtener un balance a partir de transacciones anteriores.

```
FEATURE: a BankClient account
As_a: high level service
I_want_to: have a class where deposit money
In_order_to: accumulate several amounts of money for MUCH later
```

Pues empezamos por especificar nuestros deseos: un método llamado `getBalance` estaría bien.

```
describe('GIVEN: a calculate balance function', () => {
  test('WHEN I make a deposit of 10 THEN any new instance should returns the running balance of 10', () => {
    const inputSut = new BankClient();
    const input = 10;
    inputSut.deposit(input);
    const sut = new BankClient();
    const actual = sut.getBalance();
    const expected = 10;
    expect(actual).toEqual(expected);
  });
});
```

Con esto podemos empezar, obviamente habría que incluir más casos. Pero tenemos la idea.

### Better implementation

La implementación en la clase `BankClient` no es para el premio Turing de informática; pero tiene algo implícitamente bueno: Se ha creado un método, se ha nombrado según el uso esperado y usando el código ya hecho, como la propiedad `this.balance`.

```
getBalance() {
    return this.balance;
  }
```


### Dependencias

Recuerda que nos piden que las transacciones se persistan. De modo que habrá que disponer de funciones que almacenen y que lean transacciones. Pero no nos han dicho nada de su implementación.

Desde luego no queremos incorporar a la prueba el conocimiento de cómo se haga la implementación. Y al mismo tiempo nos interesará mucho mantener las pruebas sencillas, con la menor necesidad de dobles y mocks.


### Mejoras paso a paso

Y con esta tranquilidad vamos incorporando funcionalidad. Siempre definiendo antes la prueba. Viendo el fallo por falta de implementación y luego hacerla pasar de manera minimalista.



### Refactored

Es el siguiente nivel. Mejorar el código, y si es necesario la prueba, pero manteniendo segura la funcionalidad. Esto produce buenos resultados probados y mejor diseño.

> Si el código está desacoplado es muy sencillo mantenerlo. Este es el objetivo del software bien diseñado. Para conseguirlo merece la pena el esfuerzo invertido.

---
title: 🧬 TDD, desarrollo guiado por las pruebas
subtitle: >-
  Todo empieza definiendo una prueba.
excerpt: >-
  TDD, desarrollo guiado por las pruebas. Todo empieza definiendo una prueba.
post_url: tutorial/web-testing/tdd
img_path: images/undraw_science.png
thumb_img_path: images/undraw_science.png
date: '2020-05-21'
up: Tutorial WebTesting
up_url: tutorial/web-testing
previous: Pruebas de código asíncrono
previous_url: tutorial/web-testing/unit/pruebas-de-codigo-asincrono
laboratory: Laboratorio
laboratory_url: https://github.com/LabsAdemy/WebTesting_unit_Labs/tree/master/src/tdd/basic
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

> _"Haz lo más simple que pueda funcionar."_
>
> -- ✍️ **Kent Beck**

La idea de **TDD, _Test Driven Development_,** es hacer antes las pruebas que el código. ¿Por qué?

- Si haces las pruebas antes... bien, porque al menos tienes **las pruebas hechas**.
- Solo tienes que hacer **el mínimo código** que pase la prueba. Nada más.
- Para poder probar fácilmente, harás un código fácil de manejar; **mejor diseñado**.

## Todo empieza con los requerimientos

Antes de hacer nada, conviene **saber qué vamos a hacer**. Esto es, conocer los requerimientos funcionales del software.
Te los pueden dar de manera más o menos formal. Pero en cualquier caso tú puedes adaptarlos al estándar que mejor te convenga.

A lo largo de este curso he empleado una versión sencilla de las historias de usuario. Creo que cualquiera las puede entender, y hay pocos estándares que exijan menos. Para el caso de las pruebas unitarias lo adaptaré tanto que casi debería llamarle **historias de programador**. Son mucho más granulares y definen el detalle de un proceso, conociendo las tripas del sistema. Son pruebas de **caja blanca** absoluta, y su documentación es una por tanto mucho más técnica y precisa.

```yaml
FEATURE: a BankClient account
As_a: high level service
I_want_to: have a class where deposit money
In_order_to: accumulate several amounts of money for later
```

Esto aún es muy genérico, pero podemos mejorarlo con la especificación de lo casos de comportamiento esperado. Usando como plantilla el **GWT, Given When Then,** podemos ir poco a poco haciéndolos cada vez más detallados.

```yaml
Given: a new BankClient objec
When: i make a deposit of 10
Then: returns a balance of 10
```

De aquí sacaremos directamente las cadenas de texto que acompañan a las pruebas, tanto en ejecución como en desarrollo.

## Las pruebas

Las pruebas **TDD son pruebas para programadores**. Las hacemos por nuestro propio bien. Sin que nos las pidan, sin esperar que las valoren.

> Hacemos las pruebas para estar seguros de hacer lo que se nos pide, nada da más, pero bien hecho.

La estructura, los textos y el cómo se hacen debe ser a nuestro gusto. Yo te propongo seguir con la estructura _AAA_ y el nombrado _GWT_. Pero repito, estas pruebas son para ti, es posible que no las vea nadie que no vea el código. Están al mismo nivel.

Empezamos.

```
describe('GIVEN: a new BankClient object', () => {
  const sut = new BankClient();
  test('WHEN: i make a deposit of 10 THEN returns a balance of 10', () => {
    const input = 10;
    const actual = sut.deposit(input);
    const expected = 10;
    expect(actual).toEqual(expected);
  });
});
```

Y la ejecutamos... y falla. 🔴

## La implementación

Ahora que hemos visto fallar a nuestra prueba, vamos a hacer que la pase. ¿Cómo? Escribiendo **el mínimo código que satisfaga** la especificación funcional descrita.

```
export class BankClient {
  constructor() {}
  deposit(amount) {
    return 10;
  }
}
```

Listo 🟩, vámonos a casa que se está haciendo de noche.

## La mejora

¿Sigues ahi? Ya, te crees que te estoy tomando el pelo. Pero no. Normalmente el mínimo código que pasa una prueba se resuelve con una constante y, la verdad, es poco práctico. Poco variable mejor dicho.

Es momento de hacer dos cosas. Lo primero enriquecer las pruebas, lo segundo refactorizar el código.

```
import { BankClient } from './bank-client';
describe('GIVEN: a new BankClient object', () => {
  let sut;
  beforeEach(() => {
    sut = new BankClient();
  });
  test('WHEN: i make a deposit of 10 THEN returns a balance of 10', () => {
    const input = 10;
    const actual = sut.deposit(input);
    const expected = 10;
    expect(actual).toEqual(expected);
  });
  test('WHEN: i make a deposit of 15 THEN returns a balance of 15', () => {
    const input = 15;
    const actual = sut.deposit(input);
    const expected = 15;
    expect(actual).toEqual(expected);
  });
});
```

Ok, ya veo dónde falla 🔴. Realmente quieres que se te devuelva lo mismo que ingresas. No puede ser más fácil.

```
export class BankClient {
  constructor() {}
  deposit(amount) {
    return amount;
  }
}
```

Ahora sí que está bien 🟩.

No tan rápido, vamos a seguir enriqueciendo la prueba. Agrega este caso

```
test('WHEN: i make a deposit of 10 and then a new one of 15 THEN the last one returns the accumulate of 25', () => {
  let input = 10;
  sut.deposit(input);
  input = 15;
  const actual = sut.deposit(input);
  const expected = 25;
  expect(actual).toEqual(expected);
});
```

Vaya 🔴, parece que necesitaré algún tipo de acumulador... Hagámoslo

```
export class BankClient {
  constructor() {
    this.acumlator = 0;
  }
  deposit(amount) {
    this.acumlator += amount;
    return this.acumlator;
  }
}
```

Correcto de nuevo 🟩. Imagino que vas pillando el sistema. Pasito a pasito. Escribiendo el código que pase la prueba. Refinándola para cubrir más casos. Escribiendo código para pasar la nueva prueba.

## El ciclo virtuoso

Este ciclo descrito se completa con un proceso de **_refactoring_, o mejora en el diseño**. Este trabajo se realiza sobre el código correcto; lo recalco, **es una mejora**. Pero al hacerlo sobre código respaldado por las pruebas nos permite realizar los cambios con plena tranquilidad.

```
export class BankClient {
  constructor() {
    this.balance = 0;
  }
  deposit(amount) {
    this.balance += amount;
    return this.balance;
  }
}
```

Pequeñas mejoras constantes 💙. Caminando despacio sobre suelo seguro. Es el ciclo virtuoso completo:

🔴 RED : definir la prueba y comprobar que falla.

🟩 GREEN : Escribir el mínimo código posible que satisfaga la prueba.

💙 REFACTOR : Mejorar dicho código manteniendo el respaldo de la prueba.

Repetir este ciclo refinando y creando nuevas pruebas hasta completar el requerimiento funcional completo.

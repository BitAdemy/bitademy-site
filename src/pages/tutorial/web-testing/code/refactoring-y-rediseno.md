---
title: 🕵️‍♀️ Refactoring y rediseño
subtitle: >-
  La mejora continua
excerpt: >-
  Refactoring y rediseño. La mejora continua.
post_url: tutorial/web-testing/code/refactoring-y-rediseno
img_path: images/undraw_science.png
thumb_img_path: images/undraw_science.png
date: '2020-09-03'
up: Tutorial WebTesting
up_url: tutorial/web-testing
previous: Diseño integrado
previous_url: tutorial/web-testing/code/diseno-integrado
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

> _"La excelencia no es un destino, es un viaje que no termina nunca"_
>
> -- ✍️ **Brian Tracy**


Las pruebas de TDD vistas hasta el momento eran de integración. están muy bien porque por un lado prueban el sistema y con el TDD al escribir el código tras la prueba, nos obligamos a ocultar las dependencias.

### Unit TDD

El problema de las pruebas de integración es que cuando fallan no sabemos con precisión dónde esta el fallo. Justamente para eso están las pruebas unitarias, par ir al detalle y saber dónde hay un problema.

#### Ejemplo

En el Laboratorio tienes la carpeta `3-design` con los ficheros de código y pruebas. Hay una versión previa al refactoring `3_0-bank-client` y otra posterior `3_1-bank-client`.


### Dependencias

Lo que hacemos es eliminar las dependencias. Al empezar no queremos saber nada de cómo almacenar el balance para su futuro.

Pero sabemos que lo necesitaremos, así que en lugar de crearlo pediremos que nos lo den hecho. Es decir declararemos una dependencia.

```
export class BankClient {
  constructor(store) {
    this.balanceStore = store;
    this.balance = this.balanceStore.load();
  }
  deposit(amount) {
    this.balance += amount;
    this.balanceStore.save(this.balance);
    return this.balance;
  }
  getBalance() {
    return this.balance;
  }
}
```

Esta es la gran ventaja, al hacer TDD con mentalidad unitaria hemos incorporado el patrón de inyección de dependencias sin despeinarnos. El código es ahora mucho más flexible.


### Dobles y espías

Ahora desde la prueba tengo que inyectar esa dependencia. ¿Y qué le paso en ese constructor? Elimina de tu cabeza la posibilidad de pasarle el almacenador real. Para empezar aún no existe, pero si así fuese estaríamos dependiendo de que funcionase bien. Es decir volveríamos a la integración. Y no quiero; sólo quiero probar BankClient

La solución asa por utilizar algún tipo de doble. Es decir algo que durante la prueba sustituya a lo que en realidad se usará en ejecución. _Jest_ nos facilita mucho la creación de un tipo de doble muy útil: el espía.

```
test('WHEN I make a deposit THEN save to the store will be called one time', () => {
    const inputStore = {
      load: () => {},
      save: () => {},
    };
    const saveSpy = jest.spyOn(inputStore, 'save');
    const inputSut = new BankClient(inputStore);
    const input = 10;
    inputSut.deposit(input);
    expect(saveSpy).toBeCalledTimes(1);
  });
```

Como ves, se trata de pasarle algo que el sistema bajo pruebas reconozca como una dependencia usable. En este caso que tenga los métodos `load` y `save`. Y lo más interesante, después comprobaremos sus invocaciones. Eso es lo que hace nuestro agente, espiar las llamadas a esas dependencias.

De esa forma tú sólo pruebas una clase, sin depender de sus dependencias. Esto es clave para un buen diseño flexible, que es la máxima aspiración del código: que sea correcto y mejorable.
---
title: 👔 Comportamiento
subtitle: >-
  BDD Desarrollo por comportamiento.
excerpt: >-
  Comportamiento. BDD Desarrollo por comportamiento.
post_url: tutorial/web-testing/comportamiento
img_path: images/undraw_science.png
thumb_img_path: images/undraw_science.png
date: '2020-08-31'
up: Tutorial WebTesting
up_url: tutorial/web-testing
previous: Software que funciona
previous_url: tutorial/web-testing/software-que-funciona
next: E2E
next_url: /tutorial/web-testing/e2e/
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

> _"Si a ti no te apetece probar tu software, lo normal es que a tus usuarios tampoco."_
>
> ✍🏼 Programador desconocido

Cuando empezamos con las pruebas, a veces lo más difícil es determinar qué es lo que vamos a probar. Aquí es dónde el _Behavior Driven Development_ nos ayuda. Al final se trata de satisfacer a los usuarios, y eso se hace **comprobando el comportamiento** de nuestro software.


## Pruebas funcionales

Definir la funcionalidad esperada.

### 🎪 Escenarios

Situación en la que se encuentra el sistema.

### 👩‍🦰 Usuario final

Comportamiento y resultado obtenido por el usuario.

## No sólo e2e

Este esquema mental es muy utilizado en pruebas de alto nivel... Pero

### 🐛 También integración
### 🦠 También unitarias
### 🧬 También TDD

## Historias de usuarios

Este esquema mental se puede usar en cualquier nivel de abstracción para captar la

### Funcionalidad...
### que resuelve un problema ✅

Aunque es original y fundamental en _Agile_ lo podemos aplicar pues nos va a ayudar a **documentar y estructurar** las pruebas.

Hablando de estructura; vamos a encontrarnos repetidamente un patrón de tres fases. Puede que tenga representación formal en alguna de estas variantes:

## 1️⃣ Rol; 2️⃣ Feature; 3️⃣ Reason

### 1️⃣ Quién; 2️⃣ Qué; 3️⃣ Por qué
##### 1️⃣ As a []; 2️⃣ I want to []; 3️⃣ In order to []

Pero siempre responde a las mismas dudas. Quién usa el software? ¿Qué hace con el? ¿Qué espera de su uso?

Estos on algunos ejemplos formales a distintos niveles de abstracción.

```yaml
FEATURE: have web store with products
As a: visitor
I want to: view, navigate and purchase
In order to: get information and buy from home
```

```yaml
FEATURE: Get the lowest price
As a: customer
I want to: get the lowest price
In order to: choose the cheaper product
```

```yaml
FEATURE: Get the lowest number from array
As a: array
I want to: compare all numbers
In order to: return the lowest
```

## Documentar pruebas

Otra forma de especificar este comportamiento es documentando las pruebas con textos muy _human frindly_

### 1️⃣ Given
##### Dado un escenario

### 2️⃣ When
##### Cuando realizo una acción

### 3️⃣ Then
##### Entonces compruebo una expectativa

La documentación funcional es uno de los valores fundamentales de las pruebas.

## Estructurar pruebas

Por último reaparece la regla de tres al organizar el código dentro de una prueba. Es decir, al estructurar la prueba también seguiremos un esquema repetible que facilite su escritura y comprensión.

En este caso el acrónimo propuesto es el de la _tripe A_

### 1️⃣ Arrange
##### Preparar el escenario

### 2️⃣ Act
##### Actuar para ejercitar el SUT

### 3️⃣ Assert
##### Comprobar el resultado

## Implementar pruebas

Claro que hablar es barato, al final hay que escribir código. Obviamente cada framework de pruebas hacen sus propias lectura de los conceptos anteriores. Pero casi todos acaban usando alguna de estas funciones para los tres actos de la prueba.

### 1️⃣ **given()**, describe(), beforeAll()...
### 2️⃣ **when()**, before(), context()...
### 3️⃣ **then()**, it(), assert()...


## Limpieza de las pruebas

Las pruebas son código, y por tanto deben estar limpias. Pero su objetivo fundamental es explicar claramente un comportamiento. Así que se les permitirá ciertas licencias.

### ⚠ No es código de producción.

### 🆗 Permiten cierta humedad...

### 🚫Pero no mal olor

Por ejemplo, nunca permitiremos estos *Malos olores:*

### 🤢 Comentarios

### 🤢 Datos mágicos

### 🤢 Datos absurdos

### 🤢 Anidamientos profundos

Pero sí que podremos admitir duplicidades que en código de producción podrían resultar molestas.

## Licencias para humedades

### 🐫 DRY
##### Don´t Repeat Yourself

### 🌊 WET
#### Write Everything Twice

### 🧽 DAMP
#### Descriptive And Meaningful Phrases


## Recomendaciones finales

- Muchas pruebas pequeñas.

- Un fichero, módulo, por prueba.

- Textos _super mega ultra hyper_ descriptivos.

- Datos en variables.

- Extrae _callbacks_ complejos a funciones.

- Algunos ficheros de utilidad comunes.

- Pero **sin abstracciones complejas.**
---
title: 🔀 Tipos de Pruebas
subtitle: >-
  Hay una prueba para cada situación.
excerpt: >-
  Tipos de Pruebas. Hay una prueba para cada situación.
post_url: tutorial/web-testing/tipos-de-pruebas
img_path: images/undraw_science.png
thumb_img_path: images/undraw_science.png
date: '2020-04-28'
up: Tutorial WebTesting
up_url: tutorial/web-testing
previous: Software que funciona
previous_url: tutorial/web-testing/software-que-funciona
next: Filosofía y patrones
next_url: /tutorial/web-testing/filosofia-y-patrones/
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

> _"Escribe tests. No demasiados. Principalmente de integración."_
>
> ✍🏼 Kent C. Dodds

Si empiezo con esta frase es para introducir la idea de que no hay un sólo tipo de test. Y dejar caer que no hay que volverse locos probado código. Es mejor **empezar poco a poco**, pero empezar. Si ya has empezado, entonces **avanzar un poco más**.

En cualquier caso te vendrá bien un repaso de conceptos básicos y nomenclatura.

## Tipos de Pruebas

### 🤖 Manuales -> Programadas

- ❌ Dependemos de las personas

- ✔️ Se pueden configurar y lanzar automáticamente

### ⚖ Técnicas -> Funcionales

- ⚪ Se puede comprobar el rendimiento, la seguridad, usabilidad...

- ✔️ La función del software, su utilidad.

### 🔎 Unitarias -> De integración -> De inicio a fin

- ✔️ **unitarias**: Pruebas de caja blanca que verifican una función, una clase o un componente.

- ✔️ **de integración**: Pruebas de caja blanca que verifican que varios componentes funcionan bien juntos.

- ✔️ **de inicio a fin**: Pruebas de caja negra que replican el comportamiento de un usuario ante un sistema completo.

> Otras: de regresión, de humo, de aceptación...

### ⌚ Después -> Durante -> Antes

- ✔️ **Después** o mucho después _legacy_. Es costoso, pero imprescindible para un _refactoring_ y muy habitual en un _end to end_

- ✔️ **Durante** es aburrido pero necesario para las pruebas de integración, vas probando lo que vas programando.

- ✔️ **Antes** El conocido como _TDD_ para pruebas unitarias o _BDD_ para las de integración. Menos costoso, más divertido y con mucho mejor diseño resultante.

---
title: 🗃️ Cohesion de primitivos
subtitle: >-
  Agrupación de variables con sentido de negocio.
excerpt: >-
  Cohesion de primitivos. Agrupación de variables con sentido de negocio.
post_url: tutorial/clean-code/datos/cohesion_de_primitivos
img_path: images/3.1-clean-code.png
thumb_img_path: images/3.1-clean-code.png
date: '2020-04-28'
up: Tutorial Clean Code
up_url: tutorial/clean-code
previous: Datos
previous_url: tutorial/clean-code/datos/
next: Condiciones y algoritmos
next_url: tutorial/clean-code/datos/condiciones_y_algoritmos
laboratory: Laboratorio
laboratory_url: https://github.com/LabsAdemy/CleanCodeLab/tree/DATA/src/examples/1-structures
sections:
  - section_id: call-to-action
    type: section_cta
    title: Mejora tus desarrollos
    subtitle: Clean Code aplicado para desarrollos limpios y rentables.
    actions:
      - label: Curso online
        url: /cursos/clean-code-aplicado-para-desarrollos-limpios-y-rentables/
template: tutorial
---

!["Las estructuras de datos exponen sus propiedades y no tienen funciones significativas." ✍🏼 Robert C. Martin](/images/citas/3.1-clean-code.png)

Este tema lo he titulado en positivo "Cohesión de primitivos". Suele relacionarse negativamente con el anti patrón o _bad smell **Primitive Obsession**_.

La idea central es **reducir el uso de variables de tipos básicos**, primitivos, de tu lenguaje. En concreto booleanos, números, cadenas y fechas.

Y dirás, claro, pero es que justo esos son los tipos de datos más comunes. Lo sé; y está bien usarlos. Pero no para crear obsesivamente variables o argumentos de funciones. Mejor emplearlos **dentro de estructuras de datos, en forma de propiedades.**

## 🧙🏼‍♀️ Guías

Para ayudarte he recogido una serie de consejos que te puede servir de guía. Se basan en la creación de estructuras de datos no inteligentes. Te recuerdo la primera máxima de _Uncle Bob_ al respecto.

> _"La estructura de datos expone sus propiedades y no tiene funciones significativas"_
>
> -- ✍️ **Robert C. Martin**

#### 😶 Sin comportamiento de negocio: poca o ninguna función

Por lo tanto, si tu lenguaje te lo permite, debes utilizar el artificio más simple. Quizá un `struct` o un simple _Object Literal_ `{ prop: value }`.

#### 💞 Cohesionan variables relacionadas

Cuando dos o más variables aparecen juntas al inicio de un módulo, en una función o van como argumentos... cabe preguntarse si tienen una relación.

```javascript
🤮
let amount = 10;
let currency = 'EUR';
💐
let price = {
  amount: 10,
  currency: 'EUR'
}
```

#### 📦 Suelen tener nombres de Entidades

Al ser almacenadores de datos es normal que se comporten como cualquier otra variable o clase. Por tanto las reglas de nombrado que le aplicamos es la del **sustantivo**. Pero además, en muchas ocasiones reflejan entidades del modelo de negocio.

#### 👴 _Composición_ mejor que ~~herencia~~

Los proyectos reales manejan una enorme cantidad de información. Y en muchas ocasiones sus datos tienen un formato similar.

En _el paradigma orientado a objetos_ es tentador recurrir a la herencia para aprovechar trabajo. Pero casi nunca es buena idea. Más temprano que tarde aparecerán casos con herencias múltiples e incompatibles.

La solución recomendada para reutilizar código es **la composición de estructuras**. Es decir crear estructuras muy pequeñas, que sirvan para montar jerarquías más grandes. Consulta [el laboratorio](https://github.com/LabsAdemy/CleanCodeLab/tree/DATA/src/examples/1-structures) para un ejemplo.

## ⚠️ Límites

Para terminar, intenta establecer unos límites que te ayuden a detectar problemas.

- 👉🏼 1 ↔ 2 👈🏼 _variables juntas con tipos primitivos_
- 👉🏼 2 ↔ 8 👈🏼 _propiedades por estructura_
- 👉🏼 1 ↔ 4 👈🏼 _niveles de jerarquía_
- 👉🏼 0 ↔ 1 👈🏼 _niveles de herencia_

Son rangos de confianza para examinar objetivamente el código del equipo. Pero siempre con sentido común.

Últimos consejos

> _"Asigna un valor de negocio a lo que son datos sueltos."_
>
> -- ✍️ **Alguien que ha programado**

> _"Crea muchas estructuras pequeñas, y agrúpalas en jerarquías cuando sea necesario."_
>
> -- ✍️ **Alguien que ha programado mucho**

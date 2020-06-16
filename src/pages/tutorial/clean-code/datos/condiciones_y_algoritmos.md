---
title: 🔱 Condiciones y algoritmos
subtitle: >-
  Simplificación de algoritmos.
excerpt: >-
  Condiciones y algoritmos. Simplificación de algoritmos.
post_url: tutorial/clean-code/datos/condiciones_y_algoritmos
img_path: images/3.2-clean-code.png
thumb_img_path: images/3.2-clean-code.png
date: '2020-04-29'
up: Tutorial Clean Code
up_url: tutorial/clean-code
previous: Cohesion de primitivos
previous_url: tutorial/clean-code/datos/cohesion_de_primitivos
next: Objetos y lógica de negocio
next_url: tutorial/clean-code/objetos/
laboratory: Laboratorio
laboratory_url: https://github.com/LabsAdemy/CleanCodeLab/tree/DATA/src/examples/2-algorithms
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

!["Algoritmos + Estructuras de datos = Programas." ✍🏼 Niklaus Wirth](/images/citas/3.2-clean-code.png)

## 🤔 La lógica puede estar en los datos

Normalmente **los requisitos funcionales son complejos y volátiles**. Este tandem genera mucho ruido en el código. Manipulaciones constantes de secciones complejas son fuente de dolor de cabeza.

Hemos dedicado un tema a las [estructuras repetitivas y condicionales](https://www.bitademy.com/tutorial/clean-code/funciones/estructuras_repetitivas_y_condicionales) y hemos visto cómo reducir la complejidad o al menos clarificar la intención de la lógica.

En estas regiones de código es dónde más claramente se expresa **la lógica del negocio que estamos modelando** y debemos prestarles especial atención. Pero mucho mejor sería no tener que hacerlo.

#### 🔨 Usa estructuras de datos que eviten el uso de estructuras condicionales

Si la lógica cambia y no queremos cambiar el código; tenemos un problema. La solución pasa por reducir el uso de las **estructuras condicionales** sustituyéndolas por **estructuras de datos**.

#### 3️⃣ La regla de 3

Este tipo de actuación en el código es **exigente en términos de destreza técnica y dominio del negocio**. Pero eso no debe echarte atrás. Simplemente quiere decir que empieces poco a poco y que lo apliques como un _refactor_ cuando lo veas necesario.

Como regla para recordar, nos sugieren que optemos por la sustitución de estructuras lógicas en cuanto haya **tres modificaciones** de cualquier regla establecida. Es por eso que se recuerda como _la regla de tres_. Veamos un ejemplo.

1️⃣ No hay que anticipar nada cuando te expresan una primera regla. Por ejemplo _"Mi empresa opera en España"_.

2️⃣ Puedes empezar sospechar ante un primer cambio _"Vamos a abrir también en México con estas condiciones"_.

3️⃣ Pero ante el tercer caso... no dudes: **aplícate y generaliza** tu código. _"En dos meses estaremos en Colombia"_

#### El `if` y sobre todo el `switch` huelen mal 🤢

Como consecuencia de los cambios en las reglas de negocio tendrás que implantar o modificar muchas instrucciones con `if else` o peor aún con `switch case`. Cuanto menos toques el código mejor. Así que procura usar menos el _if y el switch_

- Reduce los `if` evitando 🚩 flags en las funciones, creando funciones distintas.
- Sustituye un 🔱`switch` por un objeto, un array o un mapa y busca en él un valor o función.
- Incluso valora cambiar un 🔱`switch` por un sistema de clases con ~~herencia~~ 😱 usando la inversión de control 🙃.

Verás que poco a poco **tu código será más genérico y admitirá más cambios** funcionales sin necesidad de recompilar. Verás entonces que el mundo está llenos de estructuras de datos por todas partes.

![Estructuras de datos por todas partes](/images/data-everywhere.jpg)

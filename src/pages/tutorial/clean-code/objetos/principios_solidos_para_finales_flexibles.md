---
title: ⚒️ Principios sólidos para finales flexibles
subtitle: >-
  SOLID: Principios para organizar clases.
excerpt: >-
  Principios sólidos para finales flexibles. SOLID: Principios para organizar clases.
post_url: tutorial/clean-code/objetos/principios_solidos_para_finales_flexibles/
img_path: images/undraw_clean_up.png
thumb_img_path: images/undraw_clean_up.png
date: '2020-05-06'
up: Tutorial Clean Code
up_url: tutorial/clean-code
previous: Cohesión de funciones
previous_url: tutorial/clean-code/objetos/cohesion_de_funciones/
laboratory: Laboratorio
laboratory_url: https://github.com/LabsAdemy/CleanCodeLab/tree/OBJECT/src/examples/
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

> "No caigas en la flexibilidad innecesaria."
>
> -- ✍️ **Steve Maguire-**

Este acrónimo se hizo famoso por lo rotundo de su nombre y por la vehemencia con la que lo defiende su autor. Y porque bien aplicados mejoran mucho el flexibilidad del código. Pero antes de explicarlo lanzo una advertencia; y lo repetiré más tarde.

_Cuidado: recuerda el KISS 💋 vs YAGNI 🚫_

Estos buenos principios deben aplicarse, pero no deben introducir más complejidad de la necesaria. Vamos con ellos.

![solid diagram](/images/solid.jpg)

## S 🦄

### SRP : Single responsibility principle

#### Principio de responsabilidad única.

Un objeto solo debería tener una única responsabilidad, o razón para cambiar.

Está íntimamente relacionado con el principio de cohesión de Fenton. En cada objeto sólo debería haber cosas que cambian por la misma razón.

[⌨ lab SRP](https://github.com/LabsAdemy/CleanCodeLab/tree/OBJECT/src/examples/1-S_rp)

## O 🔐

### OCP : Open/closed principle

#### Principio de abierto/cerrado.

Las entidades de software deben estar abiertas para su extensión, pero cerradas para su modificación.

Quiere decir que el código ya escrito no debería tocarse cuando tengamos que agregar funcionalidad. Que esta siempre debería ser un extra. Este principio se incumple por ejemplo al usar un `switch`, pues un nuevo `case` implica tocar el código.

[⌨ lab OCP](https://github.com/LabsAdemy/CleanCodeLab/tree/OBJECT/src/examples/2-O_cp)

## L ⚛️

### LSP : Liskov substitution principle

#### Principio de sustitución de Liskov.

Los objetos deberían ser reemplazables por subtipos sin alterar el funcionamiento del programa.

Toma su nombre de Barbar Liskov que lo anunció de manera más formal. Establece serias limitaciones al uso de la herencia. De tal forma que acaba por usarse en muy pocas ocasiones.

[⌨ lab LSP](https://github.com/LabsAdemy/CleanCodeLab/tree/OBJECT/src/examples/3-L_sp)

## I 🤹

### ISP : Interface segregation principle

#### Principio de segregación de la interfaz.

Muchas interfaces específicas son mejores que una interfaz de propósito general.​

Se trata de mantener la complejidad funcional distribuida. Definiendo múltiples capacidades que se puedan implementar con pocos métodos o propiedades. De nuevo _muchas cosas pequeñas_. Lo grande será una composición de pequeñas capacidades.

[⌨ lab ISP](https://github.com/LabsAdemy/CleanCodeLab/tree/OBJECT/src/examples/4-I_sp)

# D 🙃

## DIP : Dependency inversion principle

### Principio de inversión de la dependencia.

Depender de abstracciones, no de implementaciones concretas. Resolver en ejecución usando la Inyección de Dependencias.

Este principio es el que mayor flexibilidad aporta al código. Pero a cambio exige un mayor esfuerzo cognitivo al programador. De ahí que a veces no se aplique en su totalidad y se quede sólo en su fundamento: **Depender de abstracciones y no de implementaciones concretas**.

[⌨ lab DIP](https://github.com/LabsAdemy/CleanCodeLab/tree/OBJECT/src/examples/5-D_ip)

Estos cinco famosos principios en contraposición con us acrónimo SOLID, aportan flexibilidad al código. Cada uno de ellos resuelve un problema de rigidez que hace que los cambios en un programa sean más costosos cuanto mayor es su base de código, su tamaño.

No son gratis, y no deben usarse siempre y en todo caso como una ley universal. _Mantener la sencillez está por delante de cualquier arrogancia técnica._ Si tuviera que quedarme con un par de consejos que te acercan a estos principios serían:

- Escribe clases pequeñas.

- Escribe clases más pequeñas.

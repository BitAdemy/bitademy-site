---
title: 🧩 Funciones puras y métodos de clase
subtitle: >-
  Pequeñas piezas para organizar programas.
excerpt: >-
  Funciones puras y métodos de clase. Pequeñas piezas para organizar programas.
post_url: tutorial/clean-code/funciones/funciones_puras_y_metodos_de_clase
img_path: images/undraw_clean_up.png
thumb_img_path: images/undraw_clean_up.png
date: '2020-04-17'
up: Tutorial Clean Code
up_url: tutorial/clean-code
laboratory: Laboratorio
laboratory_url: https://github.com/LabsAdemy/CleanCodeLab/tree/FUNCTION/src/examples/3-functions
previous: Estructuras repetitivas y condicionales
previous_url: tutorial/clean-code/funciones/estructuras_repetitivas_y_condicionales
next: Datos
next_url: tutorial/clean-code/datos/
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

> _"Una función debería hacer una sola cosa, hacerla bien, y hacerla sólo ella."_
>
> -- ✍️ **Ley de Curly**.

Esta frase para enmarcar encierra la verdad esencial de este curso tutorial. **Las funciones son las piezas fundamentales de construcción de las aplicaciones** limpias. ¿Por qué? Porque son el conjunto mínimo de instrucciones que se le puede asignar un nombre y que se pueden reutilizar.

Es decir, **claridad y reutilización en un mismo artefacto**. Normal que nos inciten a prestarle toda la atención, hasta conseguir los tres mandatos:

- **Hacer una sola cosa:** Un único propósito especificado en su nombre
- **Hacerla bien\_** Provista de test o al menos con facilidad para la prueba
- **Hacerla sólo ella:** Nombrarla y situarla de forma que no se duplique su cometido accidentalmente

Para conseguirlo podemos desgranar una serie de consejos y límites aplicables todas nuestras funciones.

## 🛩️ Pequeñas y Claras

- ♻️ Cuanto más pequeñas más reutilizables.
- 💪 Con **verbos** en su nombre que indiquen propósito
- 🐫 _DRY_: Don´t Repeat yourself.
- 🥚 con valores por defecto en sus argumentos si el lenguaje los soporta.
- 🧐 sin condiciones complejas.
- 🚩 ...sin flags: crea dos variantes con nombre específico.
- 💬 ...sin comentarios. El nombre es el mejor comentario.

## ⚠️ Límites

- ✅0**\_**0❌ _flags_
- ✅1**\_**2❌ _argumentos_
- ✅8\__\_\_12❌ \_complejidad ciclomática_
- ✅16*\_\_24❌ \_instrucciones*

## 💧 Favorece el estilo funcional puro:

> _En una **función pura** el valor de retorno solo está determinado por sus valores de entrada, sin efectos secundarios observables._
>
> -- ✍️ **Alguien a quien le gustan las matemáticas**.

_Disclaimer_: Puede que el repentino auge de la programación funcional te haga dudar de si esto es una cuestión de modas. No, no lo es. Los paradigmas de programación son clásicos y se deben aplicar consciente y coherentemente. Por supuesto que los lenguajes te predisponen en mayor o menor medida hacia la programación funcional, imperativa o la orientada a objetos.

Pero este principio de pureza, obligatorio en programación funcional, es la antítesis de la globalización; y por tanto es una guía incluso en la programación con objetos.

- #### 🌙 Predecibles.

  - Ante la misma entrada,

  - deben producir la misma salida.

- #### 🏞 Sin dependencias del entorno.

  - Sus argumentos son su materia prima

  - y su maquinaria.

- #### 🚯 Sin efectos secundarios en el entorno.

  - No deben manipular variables externas

  - ni utilizar sistemas externos

Obviamente no todas tus funciones puede ser puras. La idea es que separes unas de otras y favorezcas **que la lógica resida en funciones puras**.

## 📦 Métodos en _P.O.O._:

> _En un **método de clase** deberíamos trabajar mucho con el resto de propiedades de la clase y depender poco del exterior._
>
> -- ✍️ **Alguien a quien le gustan la encapsulación**.

En el paradigma de **Programación Orientada a Objetos**, a la función se le llama método. Y su entorno de trabajo se circunscribe a la clase en la que se define. Los consejos y límites recomendados son los siguientes:

- #### 0️⃣ cuantos menos argumentos mejor.

  - 🎏 evita argumentos _flag_ usando múltiples funciones específicas.

  - favorece objetos en lugar de ~~primitivos~~.

  - los argumentos en métodos públicos son señal de dependencia exterior.

- #### 1️⃣ un mismo nivel de abstracción: delega en funciones privadas

  - las instrucciones en funciones públicas deberían llamar a funciones privadas.

  - si un método tiene muchas instrucciones, es que tienen muchas responsabilidades

  - debe delegarlas en otros métodos de ayuda

- #### ❎ retornando datos; nunca errores.

  - los errores tienen su propio flujo mediante `try-catch throw`.
  - si el lenguaje no lo permitiese, usar convenio en los argumentos
    - como los viejos _callbacks_ `(err, data)`.

## 🎯 Objetivo: Muchas Pequeñas Funciones Organizadas

Nuestro reto es conseguir grandes aplicaciones a partir de muchas, muchísimas, funciones pequeñas. Y para ello es crucial mantener un orden y una organización que permitan **encontrar y no duplicar el conocimiento** que encierran.

- 👆 Una función,

  - ### 🦄 un sólo propósito.

  - ... o al menos un mismo nivel de abstracción.

  - claramente definido en su nombre

* 💬 Sin comentarios.
  - ¿Me repito?. MAL!!! 😈

> _"Una función debería hacer una sola cosa, hacerla bien, y hacerla sólo ella"_.
>
> -- ✍️ **Ley de Curly**

![Don´t repeat Yourself](/images/dry.jpg)

Como colofón a esta primera parte del curso tutorial te dejo esta máxima de _Uncle Bob_. Trata de cumplirla manteniendo las reglas de claridad y modularidad con **muchas funciones pequeñas bien nombradas y organizadas**.

> _"La duplicidad es el principal enemigo de un sistema bien diseñado"_
>
> -- ✍️ **Robert C. Martin**

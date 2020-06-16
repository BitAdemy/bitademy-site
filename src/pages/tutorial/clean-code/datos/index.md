---
title: 🗂️ Datos, Abstracciones de información
subtitle: >-
  Cohesiona variables y reduce la complejidad.
excerpt: >-
  Abstracciones de información. Cohesiona variables y reduce la complejidad.
post_url: tutorial/clean-code/datos/
img_path: images/citas/3.0-clean-code.png
thumb_img_path: images/citas/3.0-clean-code.png
date: '2020-04-27'
up: Tutorial Clean Code
up_url: tutorial/clean-code
previous: Funciones puras y métodos de clase
previous_url: tutorial/clean-code/funciones/funciones_puras_y_metodos_de_clase
next: Cohesion de primitivos
next_url: tutorial/clean-code/datos/cohesion_de_primitivos
laboratory: Laboratorio
laboratory_url: https://github.com/LabsAdemy/CleanCodeLab/tree/DATA
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

!["Los malos programadores se preocupan por el código. Los buenos se preocupan por las estructuras de datos y sus relaciones." ✍🏼 Linus Torvalds](/images/citas/3.0-clean-code.png)

Esta frase lapidaria no me atrevería a ponerla si no viniese firmada por uno de los grandes de la programación. Quizás yo la hubiera suavizado diciendo que **las estructuras de datos nos ayudan a mejorar** nuestros programas.

Pero, ¿a qué se refiere al pedirnos que nos preocupemos por las estructuras de datos? ¿No es algo que ya hacemos todos? Vamos a puntualizar. Lo que hacemos todos es usar estructuras de datos para mostrar, almacena y transmitir información relevante para el problema de negocio tratado.

Esto es imprescindible y se ha estandarizado en leyes, buenas prácticas, patrones y anti-patrones según cada cual; pues hay para elegir: documentos, normalización relacional, _DTOs_, _ActiveRecord_, _POJOs_... Efectivamente, creo que todos nos preocupamos por este tipo de estructuras.

En código limpio nos preocupamos además por dos usos de los datos con **impacto en la legibilidad y mantenimiento** del código.

Por un lado está la **cohesión de tipos primitivos** en estructuras que aporten orden y significado. El infame _code smell "Primitive obsession"_.

Por otra parte tenemos el uso de **estructuras para simplificar condiciones lógicas** que de otro modo están _hard coded_ dificultando el mantenimiento.

En cualquier caso se resuelve creando unas **estructuras muy simples**. Según el lenguaje (idioma) en el que programes puede que tengan nombre propio. Por ejemplo `struct` en _C#_ o un `object literal` de _JavaScript_. A veces requerirán una clase para darle cuerpo; pero **nunca expondrán métodos con lógica** de negocio. Esos son otros objetos que aún no tocan en este tutorial.

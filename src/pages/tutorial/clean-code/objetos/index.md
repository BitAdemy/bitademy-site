---
title: 📦 Objetos y lógica de negocio
subtitle: >-
  Muchas clases pequeñas bien encapsuladas.
excerpt: >-
  Objetos y lógica de negocio. Muchas clases pequeñas bien encapsuladas.
post_url: tutorial/clean-code/objetos/
img_path: images/undraw_clean_up.png
thumb_img_path: images/undraw_clean_up.png
date: '2020-05-04'
up: Tutorial Clean Code
up_url: tutorial/clean-code
previous: Condiciones y algoritmos
previous_url: tutorial/clean-code/datos/condiciones_y_algoritmos
next: Cohesión de funciones
next_url: tutorial/clean-code/objetos/cohesion_de_funciones/
laboratory: Laboratorio
laboratory_url: https://github.com/LabsAdemy/CleanCodeLab/tree/OBJECT
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

> _"La encapsulación es importante. Pero la razón por la cual es importante es aún más importante. La encapsulación nos ayuda a razonar sobre nuestro código."_
>
> -- ✍️ **Michael C. Feathers**.

Otra frase dura, aunque en este caso lo difícil es entenderla bien para luego aplicarla. Nos habla de _lógica de negocio_ y usa el término _encapsular_. Supongo que todo ello unido es lo que genera incomprensión. Vayamos por partes.

## Lógica de negocio

Hemos visto cómo [expresar la lógica de negocio de nuestra aplicación en funciones](https://www.bitademy.com/tutorial/clean-code/funciones/funciones_puras_y_metodos_de_clase), o procedimientos o rutinas; da igual, eso es cosa del lenguaje. Pero es en esos bloques en donde reside la inteligencia. Donde escribimos **los algoritmos con sus condiciones y repeticiones**.

Si lo hacemos bien acabaremos teniendo **muchas funciones pequeñas bien nombradas**. Y nuestro siguiente reto consiste en agrupar esas funciones en módulos con algún criterio.

### Clases

En programación orientada a objetos a esos módulos les llamamos clases. En otros paradigmas pueden ser _name spaces_, paquetes, librerías o simplemente módulos. De nuevo esto no es lo transcendental.

Lo importante es **el criterio que usas para agrupar las funciones**. Y aquí ya no hay recetas mágicas. Hay que conocer el negocio y aprender de la experiencia para ir ajustando el reparto de responsabilidades en clases. Esta es la razón por la cual la encapsulación es importante: porque **te obliga a razonar sobre tu desarrollo**.

## Encapsulación

En esos módulos viven encerradas las funciones. Y en esos módulos viven aún mas encerrados los datos con los que operan las funciones. Esos son los objetos y esa es la otra clave de la encapsulación: **exponer lógica y proteger datos**.

### SOLID

Veremos algunas claves para organizar toda esta lógica. Bajo el acrónimo **SOLID** se esconden una serie de **principios que permiten flexibilizar el mantenimiento** de los sistemas de objetos complejos.

Pero por ahora la clave de estos objetos nos la resume _Uncle Bob_ en la segunda de sus dos máximas:

> _"Los objetos protegen sus datos detrás de abstracciones y exponen las funciones que operan con esos datos."_
>
> -- ✍️ **Robert C. Martin**

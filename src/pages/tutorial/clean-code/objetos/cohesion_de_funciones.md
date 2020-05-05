---
title: 🧱 Cohesión de funciones
subtitle: >-
  Agrupación de funciones con sentido de negocio.
excerpt: >-
  Cohesión de funciones. Agrupación de funciones con sentido de negocio.
post_url: tutorial/clean-code/objetos/cohesion_de_funciones/
img_path: images/undraw_clean_up.png
thumb_img_path: images/undraw_clean_up.png
date: '2020-05-05'
up: Tutorial Clean Code
up_url: tutorial/clean-code
previous: Objetos y lógica de negocio
previous_url: tutorial/clean-code/objetos/
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

> _"Al diseñar nuestras clases debemos juntar las características relacionadas, de modo que cada vez que cambien sea por la misma razón. Y deberíamos separar las características que cambian por diferentes razones."_
>
> -- ✍️ **Steve Fenton**

Otra vez empezado fuerte con una frase que hay que desmenuzar para entenderla. La verdad es que casi todo hay que destriparlo para comprenderlo. Supongo que así pensaba _Jack the ripper_...

Bromas macabras aparte, cuando esta regla no se cumple los problemas y dificultades en el mantenimiento aumentan. Así que merece la pena entenderla y después aplicarla.

## Distribuir con criterio

La idea es que dadas _n funciones_ que vas a distribuir en _m clases_, lo hagas con este criterio: **junta en una misma clase las cambian por el mismo motivo**. Y no metas en una misma clase aquellas que cambian por otros motivos. Ejemplos de motivos pueden ser estos:

- **Cada vez que** cambie el cómo leemos o escribimos datos en un fichero.
- **Cada vez que** cambia la política de precios de nuestros productos.
- **Cada vez que** validamos temas de seguridad.
- **Cada vez que** mostramos alertas de proceso a los usuarios.

Si lo haces de esta manera, sabrás **dónde hay que tocar para realizar cada cambio**, en función del origen o tipo de cambio. Saber dónde hay que tocar es la primera parte de arreglar o modificar algo. Y **es fundamental para no repetirlo** en caso de que ya exista.

Así que vuelve a leer esta regla, asegúrate de entenderla y empieza a implantarla y difundirla.

### 👓 Los objetos encapsulan La Lógica

Dado que la lógica se expresa en instrucciones dentro de las funciones. Y decimos que un módulo, clase o como le llames, es un conjunto de funciones. Pues queda claro que esos objetos encapsulan, guardan, la lógica del programa.

### 📦 Usan estructuras de datos

¿Y los datos? Pues son recibidos, mantenidos, creados y enviados entre estos objetos. Son los argumentos de sus métodos públicos. Son el resultado que retornan. Son la materia prima de los objetos.

### 👯 Cohesionan funciones relacionadas

Al cumplir las reglas y límites del código limpio se acaban generando muchas, muchísimas funciones. Al cumplir con la regla de _Fenton_ acabamos por cohesionar esas funciones en ficheros según un criterio; y evitamos que acaben desperdigadas, o lo que es peor, repetidas.

### 💑 Relacionan unas entidades con otras.

Un objeto no puede ni debe saberlo y hacerlo él todo. Por fuerza ha de delegar en otros. Instanciar e invocar métodos de otras clases es la manera de relacionarse que tienen nuestros objetos. Es decir las relaciones entre las entidades.

### 👵 _Interfaces_ mejor que ~~herencia~~

Mas temprano que tarde aparecerán objetos que implanten lógica similar o incluso la misma pero en otro contexto. En P.O.O. técnicamente podremos echar mano de la herencia para reutilizar código. Pero una vez más, casi siempre va a ser una mala idea. La solución recomendada será declarar, implementar y depender de interfaces. Pero eso requiere un estudio aparte.

## ⚠️ Límites

Cuanto más avanzas en tu destreza y conocimiento del código y su expresividad, más nos alejamos de recetas triviales. Muchos de los límites que propongo en este curso se pueden recomendar a casi cualquier código con los ojos cerrados.

Pero llegados a tocar el core de la lógica... ya hay que hilar más fino. De todas formas se pueden dar **unas recomendaciones y establecer unos indicadores** que nos alerten de si algo está yendo mal.

- 👉🏼 4 ↔ 16 👈🏼 _propiedades y métodos públicos_
- 👉🏼 0 ↔ 2 👈🏼 _argumentos por método_
- 👉🏼 0 ↔ 1 👈🏼 _niveles de herencia_
- 👉🏼 100 ↔ 200 👈🏼 _instrucciones por clase_

**Una última recomendación.** Si todo va bien verás que los métodos de tus clases usan con mucha frecuencia sus propios datos, es decir, sus propiedades. Desconfía de un objeto que usa demasiado o necesita saber demasiado de otros objetos.

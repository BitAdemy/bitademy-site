---
title: Muchas pequeñas cosas
subtitle: >-
  Crea muchas funciones y clases pequeñas y nómbralas consistentemente.
excerpt: >-
  Si tuviera que dar sólo dos consejos para desarrolladores que quieran producir código limpio serían: Crea muchas cosas pequeñas y nómbralas consistentemente.
date: '2018-05-18'
thumb_img_path: images/muchas_pequeñas_cosas.s.jpeg
img_path: images/muchas_pequeñas_cosas.jpeg
category: Clean Code
category_url: blog/clean-code
post_url: blog/clean-code/muchas-pequeñas-cosas
sections:
  - section_id: call-to-action
    type: section_cta
    title: Mejora tus desarrollos
    subtitle: Clean Code aplicado para desarrollos limpios y rentables.
    actions:
      - label: Curso online
        url: /cursos/clean-code-aplicado-para-desarrollos-limpios-y-rentables/
template: post
---

Si tuviera que dar sólo dos consejos para desarrolladores que quieran producir código limpio serían:

> Crea muchas cosas pequeñas y nómbralas consistentemente.


Cualquier problema informático al que nos enfrentemos tiene múltiples soluciones. Cuando hablamos de Código Limpio no buscamos la óptima en cuanto a tiempos de ejecución o desarrollo. Buscamos la más legible, y por ende la que menor coste de mantenimiento tenga.

Resolver un problema es un trabajo arduo y meritorio. Resolverlo en tiempo y forma es heroico y extenuante. Resolverlo bien requiere más tiempo: el tiempo necesario para adquirir la maestría que te permita resolverlo bien y rápido; o el tiempo necesario para rehacer la solución. Vamos a ver un par de atajos.

## El monolito es el enemigo.

Empezar un programa con el fichero en blanco genera dos sensaciones contradictorias, la del horror vacui compensada por la fiebre creadora. El resultado tras un par de horas (o semanas) son cientos (o miles) de líneas que de forma aproximada resuelven el problema… y llenan el vacío. **Ha nacido un monolito.**

A veces este nacimiento no es abrupto. Le ocurre como a la rana que se cuece sin saltar de la olla porque la temperatura aumenta de manera gradual. Pero el resultado es el mismo: **un monstruo de instrucciones**, o de etiquetas html, o de estilos css o de atributos de configuración.

## Divide y vencerás.

Nuestra suerte, a diferencia de la pobre rana, es que nosotros tenemos varias oportunidades para no salir escaldados de la olla. Podemos rebajar la temperatura dividiendo el monolito. **Dividiéndolo cuanto antes** y tan a menudo como sea posible.

La **división funcional sucesiva** genera que grandes procedimientos se dividan en pequeñas funciones de responsabilidad limitada. Estas pequeñas funciones tienden a amontonarse en clases gigantes. La salvación viene por la nueva división de esas clases en otras según patrones de diseño que reparten responsabilidades. El resultado son módulos obesos de engullir clases. El tratamiento requiere hacerles unas liposucciones a esos señores y dejarlos como un equipo de gimnastas.

Así que tras la batalla el monolito se habrá dividido en muchos módulos **pequeños y reutilizables** en distintos sistemas. Cada módulo con varias clases de responsabilidad limitada, que bien orquestadas ofrecen soluciones ocultando los mecanismos . Y esas clases pobladas de funciones de responsabilidad única.

> Las funciones son las moléculas de la vida.

## El peligro de la bomba atómica.

El monolito es el límite teórico inicial de agrupamiento máximo. Es el mal absoluto al que rara vez nos enfrentamos por nuestra pericia y la de nuestros compañeros. Pero, ¿hay peligro por el otro frente?.

> Bien, nunca despidieron a nadie por hacer demasiadas funciones, o demasiadas clases o demasiados módulos. Pero demasiado es demasiado.

Quizá sea ridículo hacer un módulo para cada clase. Es un sinsentido crear una clase para cada función. Y es poco práctico crear funciones de una sola instrucción. Pero **la atomización excesiva es un riesgo que merece la pena correr**, porque nos conduce al nirvana de la reutilización, al paraíso de la prueba sencilla y es el arma de destrucción masiva en nuestra yihad contra el monolito.

## Todo lo mucho, si es breve, es muchas veces bueno.

Termino con esta patada al refranero, resumiendo:

- **Muchas pequeñas funciones** que expresen en su nombre las especificaciones para programar en un lenguaje cercano al negocio.

- **Muchas pequeñas clases** que implemente muchos pequeños interfaces para repartir responsabilidades.

- **Muchos pequeños módulos** para componer aplicaciones y …

- **Muchas pequeñas aplicaciones** (o microservicios) para componer sistemas.

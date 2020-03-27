---
title: Carpetas para organizar ficheros de código
subtitle: >-
  El código limpio genera muchas clases pequeñas.
excerpt: >-
  El código limpio genera muchas clases pequeñas. Cada una en su fichero acaban siendo muchos ficheros. ¿Cómo los organizas?.
date: '2019-09-19'
thumb_img_path: images/tree.s.jfif
img_path: images/tree.jfif
category: Clean Code
category_url: blog/clean-code
post_url: blog/clean-code/carpetas-para-organizar-ficheros-de-codigo
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

Cada artificio programado va en su propio fichero, lo cual acaban siendo muchos ficheros. ¿Cómo los organizas?.

Parece una pregunta trivial, pero merece la pena dedicarle unos minutos y reflexionar sobre los criterios de organización.

## Organización:
Porque de eso se trata, de organizar lo que de otra forma sería un caos. Seleccionar los criterios y el orden que empleamos para agrupar ficheros en estructuras jerárquicas: el árbol de carpetas. Para empezar deciros que no veo un orden ganador que aplicar a todo.

Dependiendo del tamaño y vida útil unos serán más adecuados que otros. En realidad el árbol de carpetas dice mucho sobre la arquitectura de código o la falta de ella. Pero ahora no toca arquitectura, sólo estructura de directorios.

### Principios:
Antes de analizar los criterios me gustaría reflexionar sobre el objetivo. ¿Para qué organizamos los ficheros en carpetas?. Para que las personas encuentren rápida y fácilmente lo que necesitan al resolver un problema.

Pero encontrarlos rápidamente sabiendo lo que busco ya no es un problema de primer orden porque los buscadores de los editores y del OS pueden hacerlo cada vez mejor. Entonces ¿para qué?. Pues en mi opinión para dos cosas:

- Explorar o buscar algo sin saber o recordar su nombre.

- Tener a mano el conjunto de ficheros que habitualmente se tocan juntos.

En ambos casos los árboles muy profundos se desaconsejan, pues requiere desplegar muchas ramas antes de llegar al objetivo. Además, si el árbol tienen muchos niveles, es probable que llegado al fondo haya pocos ficheros y sea obligado e incómodo saltar de una carpeta a otra.
Tampoco puede haber carpetas con cientos de ficheros, porque dificulta la exploración al novato y porque tampoco queda cómodo aunque esté en mi carpeta pero a dos pantallas de scroll.

Árboles en torno a tres o cuatro niveles suelen funcionar bien. Pero estas son guías de sentido común. De una forma más profesional nos planteamos: ¿Qué criterios usar para definir los niveles? Voy a exponerte los que uso y en en el orden que mejor me funcionan.

### Criterios:
#### Por capa física:
Esta primera ruptura es casi de libro y muy típica hoy en día con soluciones mono repositorio. Carpetas por servicios back-end y aplicaciones front-end. A primer nivel cada carpeta se puede considerar un proyecto distinto, pero no es raro verlos convivir en el mismo repositorio.

#### Por funcionalidad o componente:
Se trata de tener en un mismo lugar todo lo que se usa para resolver un problema de negocio. Pueden ser vistas, controladores, servicios, tests… Favorece la cohesión y el trabajo focalizado.

#### Por utilidad:
Realmente es un variante o añadido del anterior. Se trata de disponer de una o más ramas que den soporte transversal a las funcionalidades. Algo así como librerías de utilidades propias del proyecto que resuelven problemas que no son de negocio.

#### Por categoría:
Dejo para el final un criterio que mucha gente usa como principal. Agrupar los ficheros que tienen responsabilidades similares: controllers, managers, services, exceptions, interfaces, entidades, templates, DAOs… Este sistema requiere abrir ficheros en muchas carpetas para resolver un problema. Pero lo peor es que no favorece la cohesión entre clases y esconde la funcionalidad repartiéndola en mil carpetas.
En resumen, organiza siguiendo unos criterios coherentes en cada nivel. No te pases de profundidad, y favorece siempre la función sobre el tipo.

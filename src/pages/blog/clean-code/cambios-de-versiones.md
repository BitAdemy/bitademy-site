---
title: Cambios de versiones
subtitle: >-
  Primero programar y probar, luego a casa corriendo.
excerpt: >-
  Primero programar y probar, luego a casa. Ah, no que aún faltan el despliegue y el control de versiones.
date: '2020-02-20'
thumb_img_path: images/changes.s.jfif
category: Clean Code
category_url: blog/clean-code
post_url: blog/clean-code/cambios-de-versiones
template: post
---

![Cambios de versiones](/images/changes.jfif "Cambios de versiones")

Ah, no puede ser. Aún faltan el despliegue y el control de versiones. Buff, cuando menos me apetece tengo que hacer todo ese rollo de etiquetar, cambiar número de versión, documentar los cambios…

Vamos a ver si podemos hacer algo para facilitar esas tareas, pero produciendo valor y documentando el proceso.

## Versiones y cambios
Para empezar. ¿Qué es eso del versionado? Pues cada fase de entrega de valor a nuestro usuario es de facto una versión. Podemos hacerlo más o menos formal, pero el objetivo de todo desarrollo es generar una nueva versión del producto.

> _El versionado debería responder a cambios apreciables por su destinatario._

### Aplicaciones y equipos: El destinatario es el usuario
Y no todo es igual. Por ejemplo desarrollar una aplicación o una solución usable (incluido hardware) por un usuario final, no sitúa ante esta paradoja: Sólo presta atención a grandes cambios. Especialmente si son visibles.No se entera, ni le interesa cualquier mejora interna. Así que para él una versión es algo que mejora, corrige o aumenta su experiencia.
### Librerías y servicios: El destinatario es el programador
Otras veces el destinatario es alguien más cercano, otro programador por ejemplo. Cabría esperar una mayor valoración técnica, pero tampoco te ilusiones. Eso sí, con estos podemos y debemos usar convenios formales de control de cambios y nombrado de versiones.
### Pero al final todo es Marketing.
Si programas por dinero, entenderás que este sólo fluye si el destinatario de tu esfuerzo percibe valor en su inversión. E incluso los proyectos open source sin ánimo de lucro económico inmediato, luchan por la atención de sus potenciales usuarios. Digo esto porque en muchas ocasiones el tema de las versiones se ve muy condicionado por el marketing.


---

## ¿Cambiar de versión es bueno o malo?
_Depende_. Esto no es ni bueno ni malo, pero conviene tenerlo presente. Tenemos ejemplos para todos los gustos en las empresas más punteras

### Google
**AngularJS -> Angular** Un producto nuevo que hereda el nombre del antiguo. Genera errores de interpretación y devalúa el nuevo por asociación con los defectos del anterior.

**Angular**: tras el fallo inicial de llamarle 2 a algo que no tenía predecesor, han intentando generar versiones de manera predictiva: cada seis meses. Poco a poco han tenido que abandonar ese ciclo fijo y desplegar cuando se puede.

**Chrome**: El número de versión avanza con tal frecuencia que nadie es capaz de establecer hitos recordables. Paradigma de la mejora continua.
### Microsoft

**Windows**: Mezcla de números secuenciales, años, alias y vuelta a los números. Este caos sólo funciona porque es Windows.

**Surface**: Es un equipo, pero me llama la atención por lo mismo.Saltos incoherentes en los números y nombres. ¿Será defecto de fabricante?
### Apple
**iPhone**: Pues algo parecido. Números secuenciales con inventos intermedios 3, 4, 4s, 5, 5s, 6s, 7, y de repente 8, X, 11 ¿?

**MacOS**: con décadas de historia bastante bien lo han hecho. Las 15 últimas son del renombrado MacOS X y llevan asociado un nombre para facilitar el recuerdo. Un acierto de marketing en este caso.
### Facebook
**React**: Formalmente es correcto el uso de las versiones… pero necesita el apoyo (de marketing) al introducir cambios tan potentes como Hooks. Porque de no ser así sería una más, la 16.8 concretamente.

Y así hay ejemplos para todos los gustos hasta el infinito y más allá.


---

## Recomendaciones y Herramientas
Pero volviendo a tu terreno. Te preguntarás si hay alguna recomendación y herramientas de ayuda para llevarla a cabo. Pues claro que sí:
### Control de cambios en el Changelog
Lo primero sería establecer y seguir unos criterios para indicar la magnitud de los cambios. Eso tiene solución con los Conventional Commits.

[**Conventional Commits**, A specification for adding human and machine readable meaning to commit messages](https://www.conventionalcommits.org)

### Nombrado de versiones semántico: SemVer
Sabiendo la categoría del cambio podemos adoptar el sistema de nombrado basado en ellos. El llamado Semantic Versioning.

[Semantic Versioning (SemVer) explained](https://pawelgrzybek.com/semantic-versioning-semver-explained/)

[Versioning with SemVer and Conventional Commits](https://codete.com/blog/versioning-with-semver-and-conventional-commits/)

### Publicar cada Release de forma coherente y rastreable
Desplegar implica generar un entregable que se puede ejecutar o usar directamente. Sería ideal enlazar el estado del desarrollo con lo generado. De nuevo estamos de suerte. Hay productos para etiquetar y enlazar el repositorio de código con los paquetes resultantes.

[Prereleases and Npm](https://medium.com/@mbostock/prereleases-and-npm-e778fc5e2420)

[**Release-it** ,Automate versioning and package publishing](https://github.com/release-it/release-it)

Pues eso, espero que alguna de estas ideas y herramientas te ayuden a controlar y comunicar mejor la entrega de valor resultado de tu esfuerzo.


_Publicado originalmente en [el perfil de Medium](https://medium.com/@albertobasalo71/cambios-en-las-versiones-a850d5d49ae2) del autor: [Alberto Basalo](https://twitter.com/albertobasalo)_
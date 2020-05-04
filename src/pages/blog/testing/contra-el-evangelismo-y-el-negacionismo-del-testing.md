---
title: Contra el evangelismo y el negacionismo del testing
subtitle: >-
  Puedes hacer buen software sin pruebas. Pero con pruebas lo harás mucho mejor.
excerpt: >-
  No me gustan los dogmas ni el inmovilismo. Tampoco en lo que se refiere a hacer pruebas de software. Puedes hacer buen software sin ellas. Pero con pruebas lo harás mucho mejor.
post_url: blog/testing/contra-el-evangelismo-y-el-negacionismo-del-testing
img_path: images/contra-el-evangelismo-y-el-negacionismo-del-testing.png
img_size: inner-micro
thumb_img_path: images/contra-el-evangelismo-y-el-negacionismo-del-testing.s.png
date: '2019-11-19'
category: Testing
category_url: blog/testing
sections:
  - section_id: call-to-action
    type: section_cta
    title: Comprueba tus desarrollos
    subtitle: Testing de aplicaciones web fácil y productivo para todos.
    actions:
      - label: Curso online
        url: /cursos/testing-de-aplicaciones-web-facil-y-productivo-para-todos/
template: post
---

Quizá sea una manera de ver la vida en general, pero aquí me voy a ceñir a un tema muy concreto del ámbito profesional para decir que **no me gustan los dogmas ni el inmovilismo**. Y el tema concreto al que me refiero en este momento son las pruebas del software.

Por los años en la industria y las empresas y profesionales que he conocido, tengo una ligera idea de cómo esta la cuestión de las pruebas del software. Y me parece que hay dos bandos claros. Por un lado están los convencidos de que **sin pruebas no hay paraíso**, y por otro una resistencia que **desprecia las pruebas como si fuese una tendencia pasajera** difundida por _youtubers_ adolescentes.

Así que voy a tratar de encontrar una tercera vía que supongo me reportará críticas de ambos bandos, pero que si acerca alguna postura y sobre todo atrae a alguien hacia la realización de algún tipo de pruebas lo daré por muy bueno.

## ¿Qué es lo más importante en el software?

Que satisfaga las necesidades de los usuarios resolviendo un problema que tenían, facilitándoles la realización de una tarea o proporcionándoles la información que necesitan. Es decir que sea **eficaz**.

- ¿Qué es lo segundo más importante?. Que funcione correctamente. Es decir que sea **fiable**.
- ¿Y lo tercero? Que se adapte a los cambios que ocurran en el entorno tecnológico, funcional, de rendimiento y de - usabilidad. Es decir que sea **mantenible**.
- ¿Y lo cuarto? Que lo haga de la forma menos costosa contando el desarrollo y la ejecución. Es decir que sea **eficiente**.
- ¿Hay más? Seguro que sí, pero te dejo a ti completar o corregir esta lista.

## ¿Y qué hay de las pruebas?

Nada. Los anteriores objetivos se pueden alcanzar (lo he vivido, no me lo han contado) juntando un equipo de desarrollo cohesionado, implicado, bien formado, multidisciplinar, estable y valorado. Esto es lo más importante, las personas.

- ¿Y después de las personas?. La tecnología. Es nuestra industria, es a lo que nos dedicamos, así que no pueden estar muy lejos las decisiones tecnológicas. Escoger las herramientas, diseñar los sistemas y proponer las arquitecturas y patrones correctos tiene un peso determinante en la vida y resultado final del software.
- ¿Y después de las personas y de la tecnología?. La metodología y los procesos. Entro los cuales están las pruebas.

Si has llegado hasta aquí y eres un _TDD practitioner_ quizás te estés removiendo en la silla y afilando el twitter. Si eres de los de tirar _palante_ pasando de las pruebas o mintiéndote con un "ya se harán cuando se pueda" quizá te las prometas muy felices.
En cualquier caso, seas del bando que seas, a estas alturas unos minutos más no importan. Sigue leyendo.

## ¿Porqué hacerlas si no son lo más importante?

Repasa la lista de características de un buen software: eficaz, fiable, mantenible y eficiente.

- Las pruebas garantizan que el software produce el resultado adecuado a cada escenario. Es decir que es **eficaz**.
- Las pruebas garantizan que el software soporta, notifica o corrige situaciones extremas o no deseadas. Es decir que es **fiable**.
- Las pruebas garantizan que el software permanece estable después de cambios en su diseño interno o mejoras en su comportamiento. Es decir que es **mantenible**.
- Las pruebas garantizan que el software genera un menor número de errores en ejecución, mayores tiempos de uso entre fallos y menos tiempo de desarrollo dedicado a su reparación. Es decir que es **eficiente**.

## ¿Y dónde quedan tus excusas?

Por supuesto que las pruebas requieren tiempo. Claro, y esfuerzo de aprendizaje, y también disciplina. Y todo eso al final tiene un coste. Para no enfrentar ese coste los individuos y las organizaciones han desarrollado su propio catálogo de excusas.

- ❌ _Las pruebas son inútiles porque pruebo lo que ya sé._
- ❌ _Bufff.. Requieren demasiado esfuerzo._
- ❌ _No dudo de mi código. Eso es para novatos._
- ❌ _Nadie me las pide. Sólo me hablan de fechas y funcionalidades._
- ❌ _Nadie las valora. Mi jefe, mi cliente no sabe ni de qué le hablo._

Pero la realidad es muy tozuda. Hay pruebas de que las pruebas ayudan a cumplir con los objetivos del software. Y hay respuesta a cada objeción.

- ✅ **Las pruebas reducen errores.**
- ✅ **Son menos costosas cuanto más pronto se incluyan. Mejor con TDD.**
- ✅ **Si tu código es bueno, al incluir tests será aún mejor. Técnicamente mejor.**
- ✅ **Las pruebas te permiten dormir tranquilamente tras la entrega.**
- ✅ **El valor del trabajo bien hecho empieza por uno mismo.**

## ¿Entonces las hacemos?

Por supuesto. Pero siempre después de crear un buen equipo y tomar las mejores decisiones tecnológicas. Y poco a poco. Si nunca lo has hecho te costará mas empezar. No importa. **No hay un objetivo sacrosanto que cumplir.** Primero haz la primera prueba. Después ya harás las demás.
Y sí, te estoy hablando a ti. **Es una responsabilidad individual.** No necesitas apoyo ni mucho menos permiso de nadie. Aunque es mucho mejor y deseable que el equipo y la organización se involucren. Pero que no sea un freno.
Para que este rollo que te acabo de soltar no parezca la obra de un loco solitario te dejo dos citas que apoyan el argumentario.

> _"Escribe pruebas. No muchas. Principalmente integración."_
>
> ✍🏼 Kent C. Dodds

> _"Nunca pidas permiso para refactorizar. Nunca pidas permiso para escribir pruebas. Haces estas cosas porque SABES que son la mejor manera de ir rápido. Cuando pides permiso, le estás pidiendo a otra persona que se responsabilice de tus acciones."_
>
> ✍🏼 Uncle Bob Martin

Es decir: acércate, aprende, practica un poco e introduce pruebas en tu código. No porque esté de moda. No porque lo predique un gurú. No porque no hacerlas sea pecado. Si no porque **hacer pruebas mejora tu habilidad como profesional y así generas aún más valor.**

---
title: ➰ Estructuras repetitivas y condicionales
subtitle: >-
  Bloques: Aquí vive la lógica.
excerpt: >-
  Estructuras repetitivas y condicionales. Bloques: Aquí vive la lógica.
post_url: tutorial/clean-code/funciones/estructuras_repetitivas_y_condicionales
img_path: images/undraw_clean_up.png
thumb_img_path: images/undraw_clean_up.png
date: '2020-04-17'
up: Tutorial Clean Code
up_url: tutorial/clean-code
laboratory: Laboratorio
laboratory_url: https://github.com/LabsAdemy/CleanCodeLab/tree/FUNCTION/src/examples/2-blocks
previous: Declaración, asignación e invocación
previous_url: tutorial/clean-code/funciones/declaracion_asignacion_e_invocacion
next: Funciones puras y métodos de clase
next_url: tutorial/clean-code/funciones/funciones_puras_y_metodos_de_clase
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

!["Cada vez que escribas un comentario, debes sentirlo como un fallo de tu capacidad de expresión." ✍🏼 Robert C. Martin](/images/citas/2.2-clean-code.png)

<!-- > _"Cada vez que escribas un comentario, debes sentirlo como un fallo de tu capacidad de expresión"_
>
> -- ✍️ **Robert C. Martin** -->

Cuando tengo cierta confianza con mis alumnos les suelo realizar una pregunta grosera:

> ¿Programas por dinero?

Tras el impacto viene un incómodo silencio para acabar reconociendo lo obvio. Por más que nos guste nuestra profesión, **la inmensa mayoría de nuestro código la hemos escrito a cambio de dinero**; o al menos de su expectativa.

Roto el hielo ya nos sinceramos y reflexionamos acerca de por qué otros nos dan su dinero. Y la respuesta suele ser que tienen un problema y nos necesitan para solucionarlo. Suele ser un problema complejo, pues de otra manera buscarían una solución menos costosa. El caso es que **tienen un problema complejo y nosotros debemos resolverlo** programando.

Es decir escribiendo en código las instrucciones que ejecutará un ordenador para satisfacer a tu cliente. Eres un traductor, un intermediario. Y el lugar en el que mejor se ve esa labor es en las estructuras condicionales que escribes, y su caso particular de las repeticiones. Es **en estas estructuras dónde realmente reflejas la solución al problema** de tu pagador.

## ❓ Condicionales

Son los famosos _if_ _else_ _switch_ En tu lenguaje (idioma) puede que se digan de otra forma pero apuesto a que tienen su equivalente.

La recomendación para expresar la lógica van de lo simple a lo complejo.

- ⚠️ Si es trivial puedes usar operadores ternarios

- En otro caso utiliza siempre estructuras y envuelve los bloques 🔑 entre llaves.🗝 aunque el lenguaje no te obligue.

- LA condición de 1️⃣ sólo operador lógico.

- Si la condición es compleja debe convertirse en una una función cuyo nombre comenzará por un verbo del estilo _is, has, can should_...

- Favorecer el retorno **anticipado** cuando las condiciones chequean datos erróneos o incompletos.

- Favorecer el retorno **unificado** para la lógica de negocio.

- Evitar los ~~switches~~. Ya veremos cómo.

## ➿ Repetitivas

Son un caso particular de condiciones que repiten la ejecución de un bloque de instrucciones mientras, o hasta que, se cumpla una condición.

De nuevo aplican los mismos criterios:

- LA condición de ruptura de 1️⃣ sólo operador lógico.

- Las variables **locales** deben ser legibles.

- Se permiten los índices clásicos `i, j`.

## ⚠️ Límites

Los algoritmos que resuelven problemas de negocio, aquellos por los que te pagan, suelen ser complejos. Es muy común encontrar grupos de las anteriores estructuras juntas para resolver un problema.

La cuestión es que no pasa nada por encontrar un

```
bucle for

  que dentro lleva otro bucle for
```

Pero ¿y si dentro necesita un if?

```
bucle for

  que dentro lleva otro bucle for

    el if que se necesita dentro
```

¿Y qué ocurre si dentro del if hay switch?

```
  bucle for

    que dentro lleva otro bucle for

        el if que se necesita dentro

          aquí empieza el switch...
```

Pues ya vemos. El anidamiento de estructuras nos lleva a un código que cada vez se hace más difícil de leer.

Así que ese va a ser nuestro primer límite. Máximo dos niveles de anidamiento.

- ✅1*\_\_2❌ \_niveles de anidamiento*

Tampoco es agradable encontrase una estructura, da igual un `if` que un `for`, rellena de docenas de líneas. Cuando termina la estructura, te preguntas ¿a qué venía yo aquí?

Así que ahí te va el segundo límite: no metas más de ocho líneas dentro de un bloque `for` o un rama de un `if`. Idealmente no pases de cuatro. A partir de ahí, crea una función e invócala.

- ✅4*\_\_8❌ \_instrucciones por bloque*

Por último algo que ya dije al principio. Mantén simples las condiciones y esconde la complejidad en funciones.

- ✅1*\_\_2❌ \_operadores lógicos por condición*

Para cumplir estos límites

> Te obligas a extraer código a funciones.

> Te obligas a nombrar las nuevas funciones.

## Consecuencias

- 💼 Más **reglas de negocio** descritas en las funciones`.

- 💬 **Cero** necesidad de comentarios.

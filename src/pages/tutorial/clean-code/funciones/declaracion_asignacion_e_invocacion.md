---
title: 👉 Declaración, asignación e invocación
subtitle: >-
  Claridad desde el interior.
excerpt: >-
  Declaración, asignación e invocación. Claridad desde el interior.
post_url: tutorial/clean-code/funciones/declaracion_asignacion_e_invocacion
img_path: images/undraw_clean_up.png
thumb_img_path: images/undraw_clean_up.png
date: '2020-04-16'
up: Tutorial Clean Code
up_url: tutorial/clean-code
laboratory: Laboratorio
laboratory_url: https://github.com/LabsAdemy/CleanCodeLab/tree/FUNCTION/src/examples/1-instructions
previous: Funciones
previous_url: tutorial/clean-code/funciones
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

> _"No soy un gran programador; Solo soy un buen programador con buenos hábitos"_
>
> -- ✍️ **Kent Beck**

Los buenos hábitos para programar, **la disciplina**, es lo que hace realmente bueno a un programador. Tras el habito de estilizar el código y nombrar correctamente variables y funciones, es hora de escribir instrucciones.

Si lo piensas, todas **las instrucciones** que le das a una máquina caen en alguna de estas tres categorías: declarar el nacimiento de un variable o función; asignar valores a dichos variables o invocar las funciones.

No hay más, ni tampoco menos. Así que dediquémosle unos minutos.

## 👶 Declaración

Independientemente de las diabluras que te permita tu lenguaje (idioma), yo te propongo unas restricciones. Son unos buenos hábitos que no te costará adquirir.

- Una variable o constante por línea.

- Primero las constantes.

- Procura inicializar siempre con un valor tus declaraciones de variables.

Ya está, no es para tanto. Quizá alguno se plantee separar las declaraciones del resto de instrucciones con _una línea en blanco_. Vale; aunque en funciones pequeñas esto no será tan necesario.

## 📥 Asignación

Si has declarado variables es porque tienes pensado asignarles valores dinámicamente. Por ejemplo como resultado del cálculo de una expresión.
Pues bien, una sola norma:

- **Haz que la expresión sea sencilla.**

¿Qué significa sencilla?

- Máximo 2 operadores aritméticos o booleanos.
- Usa paréntesis para evidenciar el orden de ejecución.
- Respeta el largo máximo de línea.
- Deja espacio alrededor de los operadores para que la expresión _respire_...

Y ¿si el expresión es mucho más compleja?

- Lleva a **funciones** todo aquello que incumpla lo anterior

## 📞 Invocación

Así que en cuanto la cosa se complique... **habrá que delegar en funciones**, métodos, rutinas o como le llaméis en vuestro idioma.

Y entonces tu instrucción de asignación incluirá una llamada o invocación a ese nuevo método o función.

### 👮 Atajos a vigilar

Algunos lenguajes facilitan el uso de **operadores condicionales** en medio de expresiones. Pero deben de ser sometidos a las reglas anteriores y estar muy vigilados. Considéralos como _azúcar sintáctico_: es goloso pero dañino si abusas.

#### ⚠️ Operadores ternarios

En este caso, el uso del operador ternario se considera como si fuesen dos operadores. Por tanto invalida el anidamiento con otros ternarios o el uso de expresiones complejas en sus ramas de flujo.

- `condition ? value if true : value if false`

#### ⚠️ Operadores lógicos

De nuevo, hay diferencias entre lenguajes. Los operadores _and_ , _or_, _not_ y familia no se representan siempre igual. El caso es que si abusas de notaciones muy concisas puedes estar entorpeciendo la incorporación de miembros junior; o dificultando la interpretación de una expresión demasiado _clever_

Intenta evitar loos chequeos en busca nulos. Por ejemplo asignando valores por defecto en los argumentos de las funciones.

- `value = value || defaultValue;`

- `anObject && anObject.doSomething();`

```javascript
// really? wtf!
result = year % 400 === 0 ? true : year % 100 === 0 ? false : year % 4 === 0 ? true : false;
```

En resumen:

> _No encadenes o agrupes estos atajos.
> Úsalos sólo como una abreviación de casos muy simples.
> Usa características del lenguaje para evitar tratar nulos y valores por defecto._

Considera la posibilidad de **automatizar la detección de su incumplimiento** usando algún tipo de _linter_ o chequeador estático.

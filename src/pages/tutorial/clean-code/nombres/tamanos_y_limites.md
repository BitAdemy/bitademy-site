---
title: 📏 Tamaños y límites
subtitle: >-
  Código homogéneo, sin sobresaltos.
excerpt: >-
  Tamaños y límites. Código homogéneo, sin sobresaltos.
post_url: tutorial/clean-code/nombres/tamanos_y_limites
img_path: images/undraw_clean_up.png
thumb_img_path: images/undraw_clean_up.png
date: '2020-04-07'
up: Tutorial Clean Code
up_url: tutorial/clean-code
laboratory: Laboratorio
laboratory_url: https://github.com/LabsAdemy/CleanCodeLab/blob/NAME/docs/size-config.md
previous: Estilo y orden
previous_url: tutorial/clean-code/nombres/estilo_y_orden
next: Definiciones con sustantivos
next_url: tutorial/clean-code/nombres/definiciones_con_sustantivos
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

> _"No me gusta usar las barras de desplazamiento para leer tu código."_
>
> -- ✍️ **Quien lo vaya a leer**

## 👕 Código con Reglas de Estilo

Al hablar de establecer normas, reglas y límites siempre me sale un poco de sarpullido. No soy yo la persona más amante de la reglamentación que hayas visto.

Por eso me apoyo en los que saben de estas cosas, psicólogos y sociólogos, para hablaros en su nombre. Nos dicen, que a la hora de establecer una norma, sea de tráfico o de desarrollo, se pasa por tres fases.

### Decisión:

Deliberadamente vamos a establecer reglas sobre ciertos aspectos, y vamos a dejar libres otros. ¿Cuáles regularemos?. Ya lo veremos, pero adelanto que serán los que tengan un mayor impacto y que al mismo tiempo se les pueda controlar su aplicación. Un ejemplo del tráfico sería la velocidad en carretera.

### Opción:

Una vez determinado algo importante, viene el momento de ponerle letra, o en nuestro caso cifra. Las cifras límite tienen que ser asumibles pero eficaces. De nada vale limitar la velocidad de un automóvil en carretera a 1o km/hora o a 1000km.

### Sentido:

Hay quien dice que las normas están para romperlas. Tampoco os animo aquí a la anarquía pero hay que ser razonables. En ciertas situaciones vamos a incumplirlas... pero a sabiendas. Esto es importante, porque la temeridad se reduce significativamente sabiendo que hay un límite.

> Define unas reglas y haz que se cumplan señalando lo que es incorrecto.

## ⚠️Límites

De lo anterior me daría por satisfecho si aceptáis que hay métricas de vuestro código que convendría encauzar dentro de unos límites. Las opciones concretas las tenéis que aportar dentro del equipo.

Te propongo unas horquillas con respecto a los límites aplicables al tema anterior sobre **estilo y orden en el código**

- 👉🏼 80 ↔ 120 👈🏼 _caracteres por línea_
- 👉🏼 1 ↔ 2 👈🏼 _líneas en blanco seguidas_
- 👉🏼 100 ↔ 200 👈🏼 _líneas por fichero_
- 👉🏼 2 ↔ 4 👈🏼 _espacios de cada tab_

### 🔁 Consistencia

Te recomiendo que empieces por un conjunto reducido de normas. Ya verás que son más fáciles de aplicar que de cumplir. **Es mejor ser consistente con pocas normas**... _que cambiar de norma consistentemente_.

![Tabs vs Spaces](/images/tabs_vs_spaces.png)

### ⚔️ Evita conflictos trasladando la decisión a otros:

No hay porqué llegar alas manos, como en la viñeta anterior, pero es verdad que establecer límites es fuente de conflictos. Ya hemos mencionada las infames tres guerras mundiales del desarrollo:

- Tabs vs Spaces
- Comillas simples o dobles
- Posición de llaves, paréntesis, operadores...

Lo ideal en estos casos es trasladar la decisión a otros. Un profesor podría valer.

### 🛠 Herramientas de limpieza

Pero lo mejor de lo mejor es usar herramientas para garantizar el cumplimiento. En el mundillo web hay varias que además traen su propio catálogo de prescripciones dogmáticas. Muy útil para en caso de discusión sacar el típico _¿sabes tú más que los de Facebook?_

- [Prettier](https://prettier.io/)
- [Beautify](https://www.npmjs.com/package/js-beautify)

> Busca según tu IDE y lenguaje porque las hay aplicables a todo tipo de situaciones.

### 🔗 Links de referencia

- [eslint-recommended](https://github.com/eslint/eslint/blob/master/conf/eslint-recommended.js)

- [These tools will help you write clean code](https://www.freecodecamp.org/news/these-tools-will-help-you-write-clean-code-da4b5401f68e/)

- [Poetic](https://github.com/arianacosta/poetic)

- [Code guide for HTML & CSS](https://codeguide.co/)

- [12 Principles For Clean HTML Code](https://www.smashingmagazine.com/2008/11/12-principles-for-keeping-your-code-clean/)

- [Clean Code in SQL](https://riptutorial.com/sql/topic/9843/clean-code-in-sql)

En cualquier caso la recomendación final es la siguiente: **haz que tu código sea más agradable de leer e independiente del autor.**

#### Corolario:

Estas normas pueden parecer triviales. Incluso superficiales o cosméticas. Pero no lo son.

Mantener **ficheros de tamaño reducido** obliga a encapsular el código.
Mantener **líneas cortas** obliga no _indentar_ demasiado anidando bloques.
También dificulta escribir expresiones demasiado complejas en una sola instrucción.

Pero todo esto se verá más adelante.

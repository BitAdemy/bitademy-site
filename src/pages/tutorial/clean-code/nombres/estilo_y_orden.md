---
title: ✨Estilo y orden.
subtitle: >-
  Código agradable, bonito, elegante.
excerpt: >-
  Estilo y orden. Código agradable, bonito, elegante.
post_url: tutorial/clean-code/nombres/estilo_y_orden
img_path: images/undraw_clean_up.png
thumb_img_path: images/undraw_clean_up.png
date: '2020-04-07'
up: Tutorial Clean Code
up_url: tutorial/clean-code
laboratory: Laboratorio
laboratory_url: https://github.com/LabsAdemy/CleanCodeLab/blob/NAME/docs/style-config.md
previous: Estilo y nombrado
previous_url: tutorial/clean-code/nombres/estilo_y_nombrado
next: Tamaños y límites
next_url: tutorial/clean-code/nombres/tamanos_y_limites
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

> _"Cada línea de código debe parecer escrita por la misma persona, sin importar el número de participantes."_
>
> -- ✍️ **Quien lo vaya a leer**

Esta cita la firmaría cualquier lector de código. Seguro que conoces **esa sensación de abrir un fichero e inmediatamente saber quien es su autor**. Es como un rastro, un olorcillo que dejó detrás de si. Y casi nunca es bueno.

Resulta muy desagradable cuando cada fichero huele distinto al anterior. Así que lo primero será **hacer la experiencia de lectura un poco más placentera**. Sensación íntimamente relacionada con la belleza.

## 🌼 Belleza

> _Algo que agrada a tus sentidos._

Si un programador escribe sobre belleza, mejor que cierres inmediatamente el navegador. Y menos este programador que ahora estás leyendo.

Respecto a la cualidad subjetiva de la belleza no tengo nada que aportar. Sé que está en los ojos del que la mira, y sé que hay gente capaz de generarla... y otros que a duras penas podemos admirarla.

Pero aquí no hablamos de la belleza como una expresión artística. **No valoramos el tema de color de tu editor**... aunque el mío es más chulo.😎 Sería una discusión entretenida pero poco concluyente.

En cambio, hay consenso científico en decir que **los cerebros humanos valoran positivamente todo aquello que comprenden sin esfuerzo**. Y resulta que hay ciertas características objetivas que aportan esa dosis de placer neuronal:

#### Sencillez.

Las formas geométricas sencillas agradan a todo el mundo.

#### Armonía.

Facilidad para interpretar el siguiente objeto una vez conocido el anterior.

#### Repetición.

Caso extremo de la armonía, como por ejemplo la simetría y las series.

Pues esto mismo lo puedes aplicar al texto que escribes en tu editor. Que sea **sencillo de interpretar**, que haya una coherencia en su apariencia, y desde luego que sea todo igual en lo formal.

Bajando al detalle de qué hacer con el texto para facilitar su lectura, nos dicen que **lo primero es prestar atención a sus dimensiones.**

### 🚥 Belleza **horizontal**

Se trata de determina como se colocan y acumulan las instrucciones en las líneas físicas del editor.

#### Sangría y llaves en **bloques**

Por ejemplo. ¿Alguien leería cómodamente un código dónde todas sus instrucciones empiezan en la posición cero? Claro que no, porque nuestras instrucciones no tienen todas el mismo peso. Desde hace décadas lo resolvemos usando **márgenes específicos, llamados sangrías o indentaciones.**

Y hasta ahí el consenso. Hay lenguajes que obligan a un determinado tipo de sangrado, como Python o yaml. En otros lo dejan a criterio del programador. Originando _las guerras del tab_.

#### Tamaño de las **líneas**

Obvio que los libros y revistas físicos tienen un ancho. También lo tienen los blogs y demás medios online. Cierto que en unos dispositivos la lectura es más cómoda que en otros. Pero nadie, repito nadie, crea una aplicación de lectura cuyo contenido no se ajuste a los márgenes horizontales de la ventana.

Entonces ¿por qué el código escrito en un navegador tienen que ser distinto? ¿Es que acaso **nos gusta la barra de scroll horizontal?** ¿O es que queremos hacer ejercicios con el cuello mientras programamos?

Diréis que no es tan sencillo, que depende mucho del tamaño de letra, y del tamaño y resolución de la pantalla. Por supuesto, pero aún así podríamos **poner límites**, ¿no?

### 🚦 Belleza **vertical**

La preocupación en horizontal, debes rotarla y trasponerla al eje vertical. En este caso puedes preguntarte por el orden en el que escribes ciertas instrucciones.

#### Orden de las variables o propiedades.

- **estilo funcional**: Todas al inicio de su bloque o función.
- **estilo optimizador**: O quizás decidas que lo mejor es lo más cerca de su uso.

#### Orden de las funciones o métodos:

En este caso algunos lenguajes no te dan opción y te obligan a declarar las funciones antes de poder invocarlas. Pero en otros, especialmente en los orientados a objetos, puedes colocar tus funciones en el orden que estimes. Y, cómo no, esto ha dado lugar a otro par de estilos.

- **estilo revelador**: Primero todos los métodos públicos para revelar lo antes posible lo que hace el módulo; y más abajo, sólo para quien le interese, los métodos privados.
- **estilo newsletter**: En este caso cada método público tiene lo más cerca posible a los métodos privados en los que se apoya. Se intenta agrupar funcionalidades usando criterios semánticos en lugar de usar criterios sintácticos.

### 🔬 Belleza **interna**

Seguro que has oído eso de que la belleza está en el interior, es lo que decimos los feos 👺. Pero aquí no hablaremos de esa belleza. La idea es prestar atención a **todos esos caracteres no leíbles** tan habituales en el desarrollo. Paréntesis, llaves, corchetes, comas, comillas de todo tipo...

#### **Separadores** de listas e instrucciones

Por ejemplo el uso de la coma final en los arrays

#### **Espacios** en las expresiones

Piensa en dejar algún espacio en blanco para que respiren las expresiones lógicas o aritméticas

- alrededor de los paréntesis
- alrededor de los operadores

#### **Delimitadores** de cadenas

La otra gran batalla de nuestros días. **Comillas dobles o simples** para las cadenas de texto.

Para finalizar este tema dedicado a reflexionar sobre algo tan etéreo como la belleza te dejo con estas preguntas en el aire.

> _¿Cuántas líneas en blanco seguidas **realmente** necesitas?_

.

.

> _¿Sólo entre métodos o también dentro, entre sus instrucciones?_

.

.

.

> _¿Tantas?_
> .

.

.

.

.

> _¿En serio?_

# Clean Code

## 🗂️ 3 - Datos.

### Abstracciones de información

![Código limpio](../../static../../static/images/undraw_clean_up.png)

### Para TrainingIT

#### Por Alberto Basalo

<div class="page"/>

# 🗂️ 3 - Datos, Abstracciones de información

## Cohesiona variables y reduce la complejidad.

> _"Los malos programadores se preocupan por el código. Los buenos se preocupan por las estructuras de datos y sus relaciones."_
>
> -- ✍️ **Linus Torvalds**.

Esta frase lapidaria no me atrevería a ponerla si no viniese firmada por uno de los grandes de la programación. Quizás yo la hubiera suavizado diciendo que **las estructuras de datos nos ayudan a mejorar** nuestros programas.

Pero, ¿a qué se refiere al pedirnos que nos preocupemos por las estructuras de datos? ¿No es algo que ya hacemos todos? Vamos a puntualizar. Lo que hacemos todos es usar estructuras de datos para mostrar, almacena y transmitir información relevante para el problema de negocio tratado.

Esto es imprescindible y se ha estandarizado en leyes, buenas prácticas, patrones y anti-patrones según cada cual; pues hay para elegir: documentos, normalización relacional, _DTOs_, _ActiveRecord_, _POJOs_... Efectivamente, creo que todos nos preocupamos por este tipo de estructuras.

En código limpio nos preocupamos además por dos usos de los datos con **impacto en la legibilidad y mantenimiento** del código.

Por un lado está la **cohesión de tipos primitivos** en estructuras que aporten orden y significado. El infame _code smell "Primitive obsession"_.

Por otra parte tenemos el uso de **estructuras para simplificar condiciones lógicas** que de otro modo están _hard coded_ dificultando el mantenimiento.

En cualquier caso se resuelve creando unas **estructuras muy simples**. Según el lenguaje (idioma) en el que programes puede que tengan nombre propio. Por ejemplo `struct` en _C#_ o un `object literal` de _JavaScript_. A veces requerirán una clase para darle cuerpo; pero **nunca expondrán métodos con lógica** de negocio. Esos son otros objetos que aún no tocan en este tutorial.

Nos lo resume _Uncle Bob_ en dos máximas; aquí va la primera:

> _"La estructura de datos expone sus propiedades y no tiene funciones significativas"_
>
> -- ✍️ **Robert C. Martin**

<div class="page"/>

# 🗃️ 3.1 - Cohesion de primitivos

## Agrupación de variables con sentido de negocio.

> _"Asigna un valor de negocio a lo que son datos sueltos."_
>
> -- ✍️ **Alguien que ha programado mucho**

Este tema lo he titulado en positivo "Cohesión de primitivos". Suele relacionarse negativamente con el anti patrón o _bad smell **Primitive Obsession**_.

La idea central es **reducir el uso de variables de tipos básicos**, primitivos, de tu lenguaje. En concreto booleanos, números, cadenas y fechas.

Y dirás, claro, pero es que justo esos son los tipos de datos más comunes. Lo sé; y está bien usarlos. Pero no para crear obsesivamente variables o argumentos de funciones.

Mejor emplearlos **dentro de estructuras de datos, en forma de propiedades.**

## 🧙🏼‍♀️ Guías

Para ayudarte he recogido una serie de consejos que te puede servir de guía. Se basan en la creación de estructuras de datos no inteligentes.

Te recuerdo la primera máxima de _Uncle Bob_ al respecto.

> _"La estructura de datos expone sus propiedades y no tiene funciones significativas"_
>
> -- ✍️ **Robert C. Martin**

#### 😶 Sin comportamiento de negocio: poca o ninguna función

Por lo tanto, si tu lenguaje te lo permite, debes utilizar el artificio más simple. Quizá un `struct` o un simple _Object Literal_ `{ prop: value }`.

#### 💞 Cohesionan variables relacionadas

Cuando dos o más variables aparecen juntas al inicio de un módulo, en una función o van como argumentos... cabe preguntarse si tienen una relación.

```javascript
🤮
let amount = 10;
let currency = 'EUR';
💐
let price = {
  amount: 10,
  currency: 'EUR'
}
```

#### 📦 Suelen tener nombres de Entidades

Al ser almacenadores de datos es normal que se comporten como cualquier otra variable o clase. Por tanto las reglas de nombrado que le aplicamos es la del **sustantivo**. Pero además, en muchas ocasiones reflejan entidades del modelo de negocio.

#### 👴 _Composición_ mejor que ~~herencia~~

Los proyectos reales manejan una enorme cantidad de información. Y en muchas ocasiones sus datos tienen un formato similar.

En _el paradigma orientado a objetos_ es tentador recurrir a la herencia para aprovechar trabajo. Pero casi nunca es buena idea. Más temprano que tarde aparecerán casos con herencias múltiples e incompatibles.

La solución recomendada para reutilizar código es **la composición de estructuras**. Es decir crear estructuras muy pequeñas, que sirvan para montar jerarquías más grandes. Consulta [el laboratorio](https://github.com/LabsAdemy/CleanCodeLab/tree/DATA/src/examples/1-structures) para un ejemplo.

## ⚠️ Límites

Para terminar, intenta establecer unos límites que te ayuden a detectar problemas.

- 👉🏼 1 ↔ 2 👈🏼 _variables juntas con tipos primitivos_
- 👉🏼 2 ↔ 8 👈🏼 _propiedades por estructura_
- 👉🏼 1 ↔ 4 👈🏼 _niveles de jerarquía_
- 👉🏼 0 ↔ 1 👈🏼 _niveles de herencia_

Son rangos de confianza para examinar objetivamente el código del equipo. Pero siempre con sentido común.

> _"Crea muchas estructuras pequeñas, y agrúpalas en jerarquías cuando sea necesario."_
>
> -- ✍️ **Alguien que ha programado mucho**

<div class="page"/>

# 🔱 3.2 - Condiciones y algoritmos

## Simplificación de algoritmos.

> _"Algoritmos + Estructuras de datos = Programas"_
>
> -- ✍️ **Niklaus Wirth**

## 🤔 La lógica puede estar en los datos

Normalmente **los requisitos funcionales son complejos y volátiles**. Este tandem genera mucho ruido en el código. Manipulaciones constantes de secciones complejas son fuente de dolor de cabeza.

Hemos dedicado un tema a las [estructuras repetitivas y condicionales](https://www.bitademy.com/tutorial/clean-code/funciones/estructuras_repetitivas_y_condicionales) y hemos visto cómo reducir la complejidad o al menos clarificar la intención de la lógica.

En estas regiones de código es dónde más claramente se expresa **la lógica del negocio que estamos modelando** y debemos prestarles especial atención. Pero mucho mejor sería no tener que hacerlo.

#### 🔨 Usa estructuras de datos que eviten el uso de estructuras condicionales

Si la lógica cambia y no queremos cambiar el código; tenemos un problema. La solución pasa por reducir el uso de las **estructuras condicionales** sustituyéndolas por **estructuras de datos**.

#### 3️⃣ La regla de 3

Este tipo de actuación en el código es **exigente en términos de destreza técnica y dominio del negocio**. Pero eso no debe echarte atrás. Simplemente quiere decir que empieces poco a poco y que lo apliques como un _refactor_ cuando lo veas necesario.

Como regla para recordar, nos sugieren que optemos por la sustitución de estructuras lógicas en cuanto haya **tres modificaciones** de cualquier regla establecida. Es por eso que se recuerda como _la regla de tres_. Veamos un ejemplo.

1️⃣ No hay que anticipar nada cuando te expresan una primera regla. Por ejemplo _"Mi empresa opera en España"_.

2️⃣ Puedes empezar sospechar ante un primer cambio _"Vamos a abrir también en México con estas condiciones"_.

3️⃣ Pero ante el tercer caso... no dudes: **aplícate y generaliza** tu código. _"En dos meses estaremos en Colombia"_

#### El `if` y sobre todo el `switch` huelen mal 🤢

Como consecuencia de los cambios en las reglas de negocio tendrás que implantar o modificar muchas instrucciones con `if else` o peor aún con `switch case`. Cuanto menos toques el código mejor. Así que procura usar menos el _if y el switch_

- Reduce los `if` evitando 🚩 flags en las funciones, creando funciones distintas.
- Sustituye un 🔱`switch` por un objeto, un array o un mapa y busca en él un valor o función.
- Incluso valora cambiar un 🔱`switch` por un sistema de clases con ~~herencia~~ 😱 usando la inversión de control 🙃.

Verás que poco a poco **tu código será más genérico y admitirá más cambios** funcionales sin necesidad de recompilar. Verás entonces que el mundo está llenos de estructuras de datos por todas partes.

![Estructuras de datos por todas partes](../../static/images/data-everywhere.jpg)

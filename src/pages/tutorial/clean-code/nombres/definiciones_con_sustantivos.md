---
title: 📫 Definiciones con sustantivos
subtitle: >-
  Expresa claramente una intención.
excerpt: >-
  Definiciones con sustantivos. Expresa claramente una intención.
post_url: tutorial/clean-code/nombres/definiciones_con_sustantivos
img_path: images/undraw_clean_up.png
thumb_img_path: images/undraw_clean_up.png
date: '2020-04-13'
up: Tutorial Clean Code
up_url: tutorial/clean-code
laboratory: Laboratorio
laboratory_url: https://github.com/LabsAdemy/CleanCodeLab/tree/NAME/src/examples/1-nouns
previous: Tamaños y límites
previous_url: tutorial/clean-code/nombres/tamanos_y_limites
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

> _"Da sentido mediante los nombres."_
>
> -- ✍️ **Quien lo vaya a leer**

## 🌄 Objetivo: Claridad

Un programa expresa un proceso con detalle en un lenguaje no ambiguo. Definición perfecta para el código que ejecuta un ordenador. Pero si queremos que alguien, seguramente nosotros mismos, lo podamos modificar en el futuro, entonces **el lenguaje debe además ser comprensible**.

Cuando elegimos un lenguaje (idioma) de alto nivel para escribir un programa es porque **queremos expresar claramente** lo que va a hacer durante la ejecución. Si no fuese así, deberíamos escoger lenguajes optimizados para el rendimiento u otros criterios. Pero, casi todo el desarrollo empresarial moderno escoge la claridad antes que la velocidad. ¿Por qué será?

Los desarrolladores profesionales nos enfrentamos siempre a problemas de negocio complejos. Si fuesen sencillos no gastarían el dinero en nosotros. Y hablando de dinero, el presupuesto que nos asignan cubre a duras penas las necesidades reales. Así que no iremos sobrados de tiempo.

Luego **tenemos problemas complejos y poco tiempo**. ¿De verdad que además queremos código enrevesado? Por supuesto que no, **queremos que el código se lea fácilmente y se entienda con el menor esfuerzo posible**. Y para ello, si podemos, debemos elegir la claridad ante cualquier otra característica.

### Mostrar la INTENCIÓN

Al hablar de claridad en el código nos referimos a **mostrar en el lenguaje escrito la intención del programador** del proceso. El lenguaje (idioma) de programación suele ser de propósito general. Es decir sirve para desarrollar un video juego, una tienda online o una aplicación de gestión.

Así que el lenguaje de programación, per se, no nos va a ayudar a expresar la intención que tenemos durante el desarrollo. Tenemos que **enriquecer ese lenguaje, idioma, con un vocabulario propio** del modelo que estamos codificando.

Nuestra primera parada en la creación de este lenguaje (idioma) serán **los sustantivos**. Es posible que en tu juego parezca el concepto de partida, jugador o puntuación. En una tienda online tendremos pedidos, artículos y precios. Las aplicaciones de gestión empresarial hablarán de clientes, proveedores, facturas, citas o presupuestos.

Normalmente los conceptos de negocio que acabo de recitar forman parte de una análisis más o menos formal del dominio del sistema. Suelen ser los nombres asignados a las entidades y sus atributos. En muchos casos aparecen en las bases de datos (estados congelados de uno o varios programas) o se accede a ellos mediante APIS (estados remotos de los programas).

Pues bien, el uso correcto de **ese vocabulario es la base de la creación de un lenguaje** (idioma) específico para tu propósito. Y en ese lenguaje creado por ti, será mucho más sencillo expresar y entender la intención del programador.

#### 🏬 Explica lo que vas a almacenar.

Los programas de ordenador manipulan información almacenándola en recursos de hardware. Desde la memoria volátil de trabajo a un disco físico y remoto. Cada vez que almacenamos o recuperamos esa información tenemos que referirnos a su localización, su dirección en términos coloquiales. Pero las direcciones de memoria, de sectores o de servidores no son aptas para el consumo humano. Son la antítesis de la claridad. Así que para facilitar la labor **usamos alias inventados para nuestro favor**. _Háganse las variables._

> Tu primera y principal responsabilidad es nombrar extraordinariamente bien las variables, constantes, clases, y propiedades de tus desarrollos. Sin excusas.

¿Y qué significa hacerlo bien? Pues consiste en dar **un nombre que explique claramente lo que se va a almacenar** en cada caso. Para que esto no se quede en una guía de buenas intenciones, tengo al intención de darte unos consejos que te sirvan de guía.

### Guía para nombrar variables / propiedades / constantes / clases

#### Emplear siempre palabras completas y descriptivas.

```js
// 🤢 Evita las abreviaturas:
cli, numInvs;
// 🍋 Usa siempre su versión completa
client, numberOfInvoices;
```

#### Para que sean **pronunciables y corregibles** ortográficamente.

```js
// 🤢 No hay quien lo pronuncia, ni detecte una mala escritura:
pndOrdr;
// 🍋 Usa siempre su versión ortográficamente correcta
pendingOrders;
```

#### 📚 Definiendo un vocabulario de negocio.

```js
// 🤢 No uses distintos nombres para el mismo concepto:
client, customer;
// 🍋 establece un vocabulario mínimo
client;
```

#### Sin prefijos o sufijos técnicos.

```js
// 🤢 No uses distintos nombres para el mismo concepto:
ClientClass, intAmount;
// 🍋 establece un vocabulario mínimo
Client, amount;
```

#### Agregando valor sin redundancias.

```js
// 🤢 no te repitas
client.clientAddress;
// 🍋 aprovecha el contexto
client.address;
```

#### Lo siento Harry, pero mejor sin magia.

```js
// 🔮 No magic numbers:
db = (h / 8) * 50;
// 🧙 Define constantes y asígnales el valor.
hoursByDay = 8;
amountPerHour = 50;
dailyBudget = (totalHours / hoursByDay) * amountPerHour;
```

![wtf-naming](/images/naming.png)

### Reduce el número de WTF! 😤

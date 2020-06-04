---
title: 💪 Acciones con verbos
subtitle: >-
  Creamos un idioma para nuestro negocio.
excerpt: >-
  Acciones con verbos. Creamos un idioma para nuestro negocio.
post_url: tutorial/clean-code/nombres/acciones_con_verbos
img_path: images/undraw_clean_up.png
thumb_img_path: images/undraw_clean_up.png
date: '2020-04-14'
up: Tutorial Clean Code
up_url: tutorial/clean-code
laboratory: Laboratorio
laboratory_url: https://github.com/LabsAdemy/CleanCodeLab/tree/NAME/src/examples/2-verbs
previous: Definiciones con sustantivos
previous_url: tutorial/clean-code/nombres/definiciones_con_sustantivos
next: Funciones
next_url: tutorial/clean-code/funciones
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

!["Expresa la lógica con verbos." ✍🏼 Cualquier lector](/images/citas/1.4-clean-code.png)

## 🌄 Objetivo: Claridad

Desarrollamos programas para procesar datos, para manipularlos de alguna manera, aunque sólo sea almacenarlos para recuperarlos mas tarde. Esas son las acciones que nos encomiendan a los desarrolladores profesionales: guarda, recupera y manipula esta información.

### Mostrar la INTENCIÓN

Así que los programadores profesionales hacemos lo que nos dicen y trasladamos esos deseos humanos a órdenes procesables. Pero de tal forma que la intención de los programadores quede meridianamente clara.

#### 🏭 Explica lo que vas a hacer.

Para trabajar con las variables creadas emplearemos instrucciones. Según el lenguaje y paradigma usados las agruparemos en bloques lógicos que pueden llamarse, procedimientos, métodos, rutinas o funciones.

Lo importante es el nombre que le damos esos bloques. Porque será ahí dónde mostremos nuestra intención al escribir instrucciones para el ordenador.

> Una responsabilidad fundamental al programar es nombrar extraordinariamente bien las funciones, métodos, o procedimientos de tus desarrollos. Sin excusas.

¿Y qué significa hacerlo bien? Pues consiste en dar **un verbo que explique claramente lo que se va a realizar** en cada caso. Para que esto no se quede en una guía de buenas intenciones, tengo al intención de darte unos consejos que te sirvan de guía.

### Guía para nombrar funciones / métodos / rutinas / procedimientos

#### 👮 Obligatorio emplear siempre verbos que indiquen una acción.

```js
// 🤢 qué hace este método?
order.client(client);
// 🍋  al comenzar por un verbo queda claro
order.setClient(client);
```

#### 📜 Para que se lea como una historia.

```js
// 🤢 Evita las abreviaturas:
const client = clients.new(name, taxId);
order.client(client);
// 🍋 Usa siempre su versión completa
const client = clients.create(name, taxId);
order.setClient(client);
```

#### 🚩 Cortos y concretos en flags

`is, has, can, must`

```js
// 🤢 esto no es agradable de leer
if (client.pendingOrders()) {
}
// 🍋 facilita la lectura de las condiciones
if (client.hasPendingOrders()) {
}
```

#### 👮 Define listas permitidas para acciones comunes

- Vocabulario para **relaciones y acciones**.

- Define listas permitidas para acciones comunes.

- `get | set - read | write - select | insert`

```js
// 🤢 no mezcles
clients.select();
clients.post();
orders.read();
// 🍋 usa simpre el mismo tipo de verbos
clients.select();
clients.insert();
orders.select();
```

#### 🎀 Clarifica añadiendo sustantivos, adverbios o preposiciones.

```js
// 🤢 Evita las sobrecargas:
const client = clients.select(name);
const client = clients.select(name, country);
// 🍋 No te cobran por caracter
const client = clients.selectByName(name);
const client = clients.selectByNameAndCountry(name, country);
```

## 💭 Piensa en mi

### 😲 No me sorprendas

### 🤔 No me hagas pensar

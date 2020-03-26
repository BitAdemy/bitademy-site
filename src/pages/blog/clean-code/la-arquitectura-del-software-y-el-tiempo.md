---
title: La arquitectura del software y el tiempo
subtitle: >-
  Programar bien es un arte, pero hay ciertas reglas. Algunas se pueden cuantificar. Te propongo mis reglas binarias.
excerpt: >-
  En algún sitio he leído que el software es como el plástico: maleable y costosamente duradero.Lo primero lo distingue del hardware, algo que es costoso de cambiar. Lo segundo lo distingue de casi todo.
date: '2019-05-19'
thumb_img_path: images/blocks.s.jfif
category: Clean Code
category_url: blog/clean-code
post_url: blog/clean-code/la-arquitectura-del-software-y-el-tiempo
template: post
---

![Pruebas, prototipos, plantillas y frameworks](/images/blocks.jfif "Pruebas, prototipos, plantillas y frameworks")

El software como tal no caduca, ni siquiera se degrada; pero su mantenimiento es un quebradero de cabeza.

Con el tiempo y la lucidez de unos cuantos maestros del desarrollo, ha aparecido una disciplina para facilitar el mantenimiento de los programas: **la arquitectura del software**. Podríamos definirla como **el conjunto de decisiones que tomamos al diseñar un programa para facilitar su mantenimiento**.

Dichas decisiones han de ser proporcionadas al tamaño, y sobre todo, al tiempo de desarrollo y vida esperada después de la puesta en producción. Todas y cada una de esas decisiones tendrán un objetivo pero también un coste.

Hay muchos libros sobre el tema que desde hace años se incluye como materia troncal en estudios universitarios y másteres. No se aprende en un artículo en un blog o una newsletter. Lo que aquí pretendo es simplemente que veas la necesidad de la arquitectura y que uses lo que ya sabes, que aprendas lo que desconoces o que busques ayuda si lo necesitas.

Para ello me he propuesto *catalogar los proyectos por tamaños*. Por tallas, como la ropa. Pero la principal variable que los define será el tiempo de desarrollo activo. Es decir cuanto tiempo va estar en uso y mantenimiento. Normalmente con el tiempo se correlaciona el tamaño del equipo, la dimensión del negocio y en menos medida la complejidad técnica.

# S: Proyectos cortos

_Hasta **1 año** de tiempo de desarrollo y mantenimiento evolutivo activo_

_Equipos estables de **1 o 2 integrantes**._

**Ejemplos**:

- Producto mínimo viable en una start-up que no se sabe si vivirán lo suficiente.
- Proyectos para campañas o negocios de duración limitada y conocida.
- Herramientas ad hoc para integración temporal entre sistemas.
- Otros desarrollos técnica y funcionalmente simples.

**Situación**:
- Los tiempos y presupuestos serán muy rigurosos, por tanto debemos abaratar y reducir el desarrollo.

- Los cambios funcionales serán muy frecuentes, aunque afortunadamente muchos ocurrirán antes de la puesta en producción con cliente y riesgo real.

- La reducción del coste del cambio está en la reducción del coste de entender y manipular el código.

### Reglas:

**Mantra**: Muchas estructuras y funciones pequeñas y bien nombradas.

**Código**: Evitar los code smells mediante aplicación de reglas que lleven a un código limpio fácil de leer y modificar.

**Test**: Garantizar que el software sigue funcionando a pesar de los frecuentes cambios mediante smoke-test.

**Componentes**: Agrupar componentes por responsabilidades.

**Despliegue**: Despliegue en monolito en cada capa física.

### Objetivo:
>En estos proyectos el objetivo es reutilizar código, principio DRY, pero sin complicarlo demasiado para facilitar el cambio constante: principios YAGNI y KISS.

**Consejos**:
Para empezar puedes formarte leyendo libros, asistir a seminarios o bien contratar puntualmente un consultor durante el inicio del proyecto. El resultado debe ser un conjunto de buenas prácticas y métricas que mantengan la base de código en unos parámetros de legibilidad razonables.
El equipo de desarrolladores se hará cargo de la arquitectura, la cual va emergiendo y evolucionando con las necesidades concretas del proyecto.


---

# M: Proyectos medios.
_Entre **2 y 4 años** de tiempo de desarrollo y mantenimiento evolutivo activo._

_Equipos poco variables de entre **2–8 integrantes**_

**Ejemplos**:
- Producto en marcha en una start-up en crecimiento.
- Aplicaciones departamentales o para pequeñas empresas.
- Aplicaciones web sobre plataformas standard.
- Otros desarrollos técnica y funcionalmente poco complejos.

**Situación**:
- Los tiempos y presupuestos permiten dedicar recursos al diseño técnico del desarrollo.

- Los cambios funcionales serán menos frecuentes pero potencialmente más graves, pues el software estará en uso.

- La reducción del coste de explotación está en la reducción de bugs y mantenimiento.

### Reglas:

**Mantra**:: Reparto de responsabilidades entre clases.

**Código**: Evitar más code smells mediante patrones de diseño que lleven a un código fácil de ampliar.

**Test**: Garantizar que el software admite los cambios mediante pruebas de integración sencillas.

**Componentes**: Separar el código en capas lógicas (packages, namespaces, modules… según el lenguaje). Ej.: presentación -> negocio -> infraestructura.

**Despliegue**: Mantener mientras sea posible un despliegue sencillo, tendente al monolito en cada capa física. Ej. : cliente <-> servidor

### Objetivo:
Facilitar el cambio funcional mediante Design Patterns, pero con un código localizable con 3 simple layers.

**Consejos**:
Para definir e implantar esta arquitectura se necesita la participación de alguien experimentado. Según el calibre del problema y los recursos disponibles puede ser necesario personal interno dedicado o la contratación de un consulting externo; pero implicado durante todo el ciclo de vida.
El equipo debe participar en el diseño y elección constante de patrones. La imposición desde un pedestal de arquitecto de software no funciona si es vista sólo como una restricción en la libertad de acción del programador. Pero sin dichas restricciones el software es muy probable que degenere en una masa deforme muy difícil de cambiar.


---

# L: Proyectos largos.
_Entre **4 y 8 años** de tiempo de desarrollo y mantenimiento evolutivo activo._

_Equipos variables de **8 o más integrantes**._

**Ejemplos**:
- Productos de start-up que ya han funcionado.
- Automatización de procesos de negocio de empresas consolidadas.
- Renovación de sistemas de información en organizaciones con sistemas legacy.

**Situación**:

- Si algo hay seguro para los próximos años es que las reglas del negocio informatizado van a cambiar.

- Por si fuera poco, lo harán ya con el sistema en producción dando servicio ininterrumpido a un público crítico para la empresa.

- Así que el cambio ha de integrarse de manera transparente y sin oposición. Impactando lo menos posible en el código ya hecho y en los paquetes ya desplegados.

### Reglas:

**Mantra**: Encapsular lo que varía y depender de interfaces.

**Código**: Fomentar el cambio funcional mediante la aplicación de los principios SOLID al diseño de las clases.

**Test**: Garantizar que el software funciona unitariamente mediante pruebas a nivel de paquete desplegable.

**Componentes**: Las tres capas lógicas por niveles son insuficientes. Para permitir un desarrollo paralelo e independiente debemos desacoplaras mediante abstracciones intermedias.

**Despliegue**: Para reducir el impacto de un cambio, este debe afectar a partes y nunca a todo del sistema. Los componentes, agrupados en silos, se ejecutan en servicios funcionales verticales que no exijan el compilado y despliegue completo.

### Objetivo:
La extensibilidad de un sistema crítico en producción; que se consigue facilitando el desarrollo mediante el uso de los principios SOLID y el despliegue en silos funcionales conectados pero independientes.

**Consejos**:
Recomendable que un departamento de arquitectura interno o una consultora especializada participe en las fases críticas del desarrollo.


---

# XL : Proyectos muy largos
_Entre **8 y 16 años** de tiempo de desarrollo y mantenimiento evolutivo activo._

_Equipos variables de **16 o más integrantes**._

**Ejemplos**:
- Software de gestión de grandes corporaciones, bancos y administraciones públicas.
- Continuidad de productos o servicios online de gran éxito.

**Situación**:
- Más allá de 8 años ya sólo una cosa será cierta; todo habrá cambiado.

- Además del negocio también cambiarán las tecnologías, las personas, y las demandas y expectativas de los usuarios.

- Así que, si algo va a durar una década, mejor que no dependa de pequeños detalles sin importancia como las bases de datos, las interfaces de usuario, los protocolos de comunicaciones, los frameworks o los dispositivos físicos de última generación :-).

### Reglas:

**Mantra**: Que el negocio no dependa de la tecnología.

**Código**: Aplicar técnicas de inyección de dependencias para invertir el control.

**Test**: Garantizar que el software funciona unitariamente mediante pruebas a nivel de paquete desplegable.

**Componentes**: Reducir las dependencias de la lógica de negocio a los básicos del lenguaje.

**Despliegue**: Propiciar el despliegue de servicios (o micro-servicios) y aplicaciones (o micro-aplicaciones) al menor nivel posible. Las arquitecturas más usadas son la hexagonal y la circular o cebolla con las entidades del dominio y las reglas en el centro o cúspide del árbol de dependencias

### Objetivo:
El desacoplamiento extremo entre el núcleo del negocio y los detalles técnicos. Inversión del control para que las reglas de negocio no dependan de otras capas.

**Consejos**:
Sólo hay un consejo posible. Un departamento de arquitectura interno o una consultora especializada deben pilotar todo el desarrollo todo el tiempo.

_Publicado originalmente en [el perfil de Medium](https://medium.com/@albertobasalo71/la-arquitectura-del-software-y-el-tiempo-dc7f55c23bce) del autor: [Alberto Basalo](https://twitter.com/albertobasalo)_
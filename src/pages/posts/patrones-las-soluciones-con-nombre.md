---
title: Patrones, las soluciones con nombre
subtitle: >-
  Repasemos algunos de los patrones más aplicados en el desarrollo front-end.
excerpt: >-
  Para cada problema siempre existe al menos una solución, o al menos suele ocurrir así en la programación moderna.
date: '2018-03-18'
thumb_img_path: images/patrones-las-soluciones-con-nombre.jpeg
category: Clean Code
template: post
---

Para cada problema siempre existe al menos una solución, o al menos suele ocurrir así en la programación moderna. Muchas veces re-inventamos la rueda por desconocimiento de su existencia o de su nombre. A esas soluciones con nombre propio es a lo que conocemos como patrones.

Prepárate un café y disfrútalo leyendo esta lista con algunos de los patrones más aplicados en el desarrollo front-end actual.

## 1. Modelo-Vista-Controlador … y familia
Uno de los más conocidos y con distintas variantes: Model-View-Presenter, Model-View-Viewmodel… Trata del reparto de responsabilidades entre tres componentes: La Vista, para mostrar información al usuario.

El Modelo, para gestionar lógica y datos. Y el Controlador, para responder a eventos de la Vista que manipulen el Modelo y para enviar cambios en el Modelo hacia la Vista.

>_En una cafetería habría una Vista para tratar con los clientes, un Modelo para prepara las bebidas en la cocina y un Controlador para entregar las bebidas preparadas junto con el ticket a la Vista._

## 2. Componentes: Contenedor Presentadores
Las interfaces complejas se crean montando componentes más pequeños y especializados. Una pagina de consulta tendrá un componente para el filtro, otro para el listado, que a su vez tendrá un menú para ordenación, una barra de paginación… Al componente principal lo llamaremos Contenedor (a veces también padre, controlador o inteligente) y a los sub componentes se les llamará Presentadores (también hijos o… tontos).

La idea es que la responsabilidad de obtener y manipular el modelo se centralice en el Contenedor. Los Presentadores recibirá la información desde el Contenedor y la presentarán al usuario, esperando su reacción. Cuando ocurra, lo notificarán de vuelta al Contenedor padre que interactúa con el modelo.

>_Un jefe de proyecto encargado de comprar el café y que los programadores lo consuman. Cuando se termine el café o quieran cambiar de marca, los programadores se lo dirán al jefe de proyectos, y éste irá a la compra. Nunca los programadores sabrán de dónde viene el café._

## 3. Inyección de dependencias
Los sistemas informáticos son agrupaciones de componentes. Se dice que un componente depende de otro si lo necesita para realizar su función. Para ello puede instanciar el componente concreto que necesita. O mejor, esperar que otro componente se lo inyecte simplemente declarando su dependencia.

>_Un programador puede necesitar estimulantes para trabajar… Si quiere puede prepararse un café, y para ello traerse us cafetera de casa y prepararse el café a su gusto. Otra opción es incluir en su contrato una cláusula indicando de que necesita un estímulo, declarando su dependencia del café y esperando que se lo provean en el puesto de trabajo._

## 4 Inversión del control
Asociando al anterior, permite que un sistema externo decida el sub componente con el que trabajará un componente de primer nivel. Esto es muy útil para aplicar distintas estrategias, modificar el comportamiento sin cambiar el código o hacer pruebas unitarias sin depender de terceros.

>_El programador dependiente de un estimulante cede el control sobre el estímulo concreto, a cambio de que se lo den ya preparado. Será el encargado de la compra el que decida la marca de café, o incluso si traerle chocolate o té. Es cuestión de que cumplan un contrato o interfaz que puede se más o menos flexible._

## 5. Observador
Permite estar al tanto de los cambios de valor de una variable (más formalmente del estado de un sistema) atendiendo a las notificaciones que esta emite. Sin necesidad de comprobar su valor cada tanto ni contrastarlo con el anterior para saber si ha cambiado.

>_El jefe de proyecto para atender las necesidades del equipo de desarrollo (estado del sistema : ‘falto de estímulo’) puede hacer dos cosas. En modo madre, preguntar insistentemente ¿quieres algo?, ¿y ahora?, ¿de verdad, quieres alguna cosa?… o acordar con el equipo que el que quiera algo levante la mano. De esa forma sólo tendrá que observar y esperar a que el estado cambie para actuar._

## 6. Unidirectional data flow
La vista y el modelo son dos representaciones de la misma información, no hay una fuente de la verdad única. Esa información está expuesta al cambio constante forzado por el usuario o por procesos automáticos. Peor me lo pones. Mantener en sincronía la representación en memoria y en pantalla es complejo y costoso.

>_Una solución es forzar a que los cambios en el modelo fluyan en una sola dirección, haciendo el sistema más predecible. La vista atiende a los deseos del usuario y los transmite a un almacén único de información. Cuando el contenido del almacén es modificado se notifica a los observadores interesados (normalmente vistas) para que actualicen su presentación._

Hay un único responsable del stock de café, el director general. Ningún project manager puede preparar café para su equipo por su cuenta. El director es el único con poder para acceder, reponer y contar los productos del almacén. Muerte al sírvase usted mismo.

## 7. Redux
Es una variante del anterior que establece las reglas, los actores y los artefactos necesarios para que los cambios en el estado de un sistema sean predecibles. Para ello convierte al estado en una estructura de sólo lectura como la única fuente de la verdad.

Las mutaciones (cambios de estado) se realizarán mediante funciones puras llamadas reductores. Esas funciones serán invocadas por el almacén en respuesta a peticiones de acciones disponibles en un catálogo.

>_En la cafetería Redux no sólo no puedes llegar y servirte tu mismo, si no que el gestor único establece un conjunto limitado y bien definido de órdenes que atender. Obviamente no se mancha las manos y despacha esas acciones a cocineros puros para luego notificarte que los cafés están reducidos… digo listos ;-)_

_Publicado originalmente en [el perfil de Medium](https://medium.com/@albertobasalo71/patrones-las-soluciones-con-nombre-6e642c7ff04d) del autor: [Alberto Basalo](https://twitter.com/albertobasalo)_
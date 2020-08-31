# ✅ Test, Software que funciona

El código se escribe para resolver un problema. El test es su garantía.

> _"Nunca pidas permiso para refactorizar. Nunca pidas permiso para escribir pruebas. Haces estas cosas porque SABES que son la mejor manera de ir rápido."_
>
> -- ✍️ **Robert C. Martin**

## 😏 Las excusas

- ❌ _Las pruebas son inútiles._

- ❌ _Requieren demasiado esfuerzo._

- ❌ _No dudo de mi código._

- ❌ _Nadie me las pide._

- ❌ _Nadie las valora._

## 😉 Los motivos

- ✔️ **Las pruebas reducen errores.**

- ✔️ **Son menos costosas cuanto más pronto se incluyan.**

- ✔️ **Si tu código es bueno, al incluir tests será aún mejor.**

- ✔️ **Las pruebas te permiten dormir tranquilamente.**

- ✔️ **El valor del trabajo bien hecho empieza por uno mismo.**


> _"Los geeks son gente que aman tanto algo que le importan todos sus detalles."_
>
> ✍🏼 Marissa Mayer

<div class="page"/>

# 🔀 Tipos de Pruebas

Hay una prueba para cada situación.

> _"Escribe tests. No demasiados. Principalmente de integración."_
>
> ✍🏼 Kent C. Dodds

Si empiezo con esta frase es para introducir la idea de que no hay un sólo tipo de test. Y dejar caer que no hay que volverse locos probado código. Es mejor **empezar poco a poco**, pero empezar. Si ya has empezado, entonces **avanzar un poco más**.

En cualquier caso te vendrá bien un repaso de conceptos básicos y nomenclatura.

## Tipos de Pruebas

### 🤖 Manuales -> Programadas

- ❌ Dependemos de las personas

- ✔️ Se pueden configurar y lanzar automáticamente

### ⚖ Técnicas -> Funcionales

- ⚪ Se puede comprobar el rendimiento, la seguridad, usabilidad...

- ✔️ La función del software, su utilidad.

### 🔎 Unitarias -> De integración -> De inicio a fin

- ✔️ **unitarias**: Pruebas de caja blanca que verifican una función, una clase o un componente.

- ✔️ **de integración**: Pruebas de caja blanca que verifican que varios componentes funcionan bien juntos.

- ✔️ **de inicio a fin**: Pruebas de caja negra que replican el comportamiento de un usuario ante un sistema completo.

> Otras: de regresión, de humo, de aceptación...

### ⌚ Después -> Durante -> Antes

- ✔️ **Después** o mucho después _legacy_. Es costoso, pero imprescindible para un _refactoring_ y muy habitual en un _end to end_

- ✔️ **Durante** es aburrido pero necesario para las pruebas de integración, vas probando lo que vas programando.

- ✔️ **Antes** El conocido como _TDD_ para pruebas unitarias o _BDD_ para las de integración. Menos costoso, más divertido y con mucho mejor diseño resultante.

<div class="page"/>

# 👨🏼‍🏫 Filosofía y patrones

## 👨‍🎓 Qué hay que saber para programar tests.

### 1️⃣ Mantra

- **El código de prueba no es como el código de producción:** diséñalo para que sea simple, corto, sin abstracciones, agradable de leer. Uno debe mirar una prueba y obtener la intención al instante.

### 2️⃣ Siglas y conceptos

- **SUT**: _System (Subject) Under Test_. Lo que se está probando.

- **DOCs**: _Depended On Components_. Lo que se necesita para que funcione el SUT.

### 3️⃣ Secciones: Arrange, Act & Assert (AAA Pattern)

- **Arrange**: Prepara y organiza lo que necesitas.

- **Act**: Ejecuta el código y obtén una respuesta.

- **Assert**: Verifica que la respuesta es la esperada.

### 4️⃣ Cuestiones: Given, Should, Actual, Expected.

- **Given**: 📃 Texto. Condiciones de la prueba. _(Arrange)_

- **Should**: 📃 Texto. Funcionalidad esperada.

- **Actual**: 🎰 Variable. El resultado obtenido. _(Act)_

- **Expected**: 💰 Variable. La respuesta esperada. _(Assert)_

### 5️⃣ Test Doubles: Simuladores para no depender de las dependencias DOC.

- **Dummy**: Datos requeridos para que el SUT funcione, pero que no se usan durante la prueba. _(Carga previa de una base de datos)_

- **Stub**: Un objeto que cumpliendo una interfaz de un DOC tiene una respuesta constante y predeterminada. _(Responder como lo haría un llamada http)_

- **Fake**: Un objeto que realiza una funcionalidad coherente pero simplificada de un DOC. _(Simular una base de datos en memoria)_

- **Spy**: Cuenta las llamadas a una función o método. _(Comprobar que se ejecuta una acción un determinado número de veces)_

- **Mock**: Monitoriza el uso de un objeto y las llamadas a una función junto con sus argumentos. _(Simular un envío de correo completo)_

### 6️⃣ Comprobaciones: igualdad, existencia, comparación, pertenencia, excepciones y negación

- **igualdad**: El valor actual es igual al esperado.

- **existencia**: El valor actual existe.

- **comparación**: El valor actual es mayor o menor que el esperado.

- **pertenencia**: El valor actual contiene o está contenido en el esperado.

- **excepciones**: Se espera que una excepción sea lanzada.

- **negación**: Niega cualquiera de los anteriores.

### 7️⃣ Consejos generales

- **incorpora herramientas**: Puedes empezar de cero, pero hay muchas ayudas.

- **evita arreglos globales**: Cada prueba deber ser autónoma e independiente.

- **datos realistas en los fakes**: Nada de _foo_ _bar_ _baz_ _asdf_

- **usa etiquetas o códigos**: Útil para buscar resultados o pre filtrar pruebas.

- **public black box**: Prueba los métodos públicos.

- **evita los mocks**: Mejor usa _Stubs_ y _Spies_.

- **haz alguna prueba**: Esto no va de todo o nada.

<div class="page"/>

# 👔 Comportamiento

BDD Desarrollo por comportamiento.

> _"Si a ti no te apetece probar tu software, lo normal es que a tus usuarios tampoco."_
>
> ✍🏼 Programador desconocido

Cuando empezamos con las pruebas, a veces lo más difícil es determinar qué es lo que vamos a probar. Aquí es dónde el _Behavior Driven Development_ nos ayuda. Al final se trata de satisfacer a los usuarios, y eso se hace **comprobando el comportamiento** de nuestro software.


## Pruebas funcionales

Definir la funcionalidad esperada.

### 🎪 Escenarios

Situación en la que se encuentra el sistema.

### 👩‍🦰 Usuario final

Comportamiento y resultado obtenido por el usuario.

## No sólo e2e

Este esquema mental es muy utilizado en pruebas de alto nivel... Pero

### 🐛 También integración
### 🦠 También unitarias
### 🧬 También TDD

## Historias de usuarios

Este esquema mental se puede usar en cualquier nivel de abstracción para captar la

### Funcionalidad...
### que resuelve un problema ✅

Aunque es original y fundamental en _Agile_ lo podemos aplicar pues nos va a ayudar a **documentar y estructurar** las pruebas.

<div class="page"/>

Hablando de estructura; vamos a encontrarnos repetidamente un patrón de tres fases. Puede que tenga representación formal en alguna de estas variantes:

## 1️⃣ Rol; 2️⃣ Feature; 3️⃣ Reason

### 1️⃣ Quién; 2️⃣ Qué; 3️⃣ Por qué
##### 1️⃣ As a []; 2️⃣ I want to []; 3️⃣ In order to []

Pero siempre responde a las mismas dudas. Quién usa el software? ¿Qué hace con el? ¿Qué espera de su uso?

Estos son algunos ejemplos formales a distintos niveles de abstracción.

```yaml
FEATURE: have web store with products
As a: visitor
I want to: view, navigate and purchase
In order to: get information and buy from home
```

```yaml
FEATURE: Get the lowest price
As a: customer
I want to: get the lowest price
In order to: choose the cheaper product
```

```yaml
FEATURE: Get the lowest number from array
As a: array
I want to: compare all numbers
In order to: return the lowest
```

## Documentar pruebas

Otra forma de especificar este comportamiento es documentando las pruebas con textos muy _human frindly_

### 1️⃣ Given
##### Dado un escenario

### 2️⃣ When
##### Cuando realizo una acción

### 3️⃣ Then
##### Entonces compruebo una expectativa

La documentación funcional es uno de los valores fundamentales de las pruebas.

## Estructurar pruebas

Por último reaparece la regla de tres al organizar el código dentro de una prueba. Es decir, al estructurar la prueba también seguiremos un esquema repetible que facilite su escritura y comprensión.

En este caso el acrónimo propuesto es el de la _tripe A_

### 1️⃣ Arrange
##### Preparar el escenario

### 2️⃣ Act
##### Actuar para ejercitar el SUT

### 3️⃣ Assert
##### Comprobar el resultado

## Implementar pruebas

Claro que hablar es barato, al final hay que escribir código. Obviamente cada framework de pruebas hacen sus propias lectura de los conceptos anteriores. Pero casi todos acaban usando alguna de estas funciones para los tres actos de la prueba.

### 1️⃣ **given()**, describe(), beforeAll()...
### 2️⃣ **when()**, before(), context()...
### 3️⃣ **then()**, it(), assert()...


## Limpieza de las pruebas

Las pruebas son código, y por tanto deben estar limpias. Pero su objetivo fundamental es explicar claramente un comportamiento. Así que se les permitirá ciertas licencias.

### ⚠ No es código de producción.

### 🆗 Permiten cierta humedad...

### 🚫Pero no mal olor

Por ejemplo, nunca permitiremos estos *Malos olores:*

### 🤢 Comentarios

### 🤢 Datos mágicos

### 🤢 Datos absurdos

### 🤢 Anidamientos profundos

Pero sí que podremos admitir duplicidades que en código de producción podrían resultar molestas.

## Licencias para humedades

### 🐫 DRY
##### Don´t Repeat Yourself

### 🌊 WET
#### Write Everything Twice

### 🧽 DAMP
#### Descriptive And Meaningful Phrases


## Recomendaciones finales

- Muchas pruebas pequeñas.

- Un fichero, módulo, por prueba.

- Textos _super mega ultra hyper_ descriptivos.

- Datos en variables.

- Extrae _callbacks_ complejos a funciones.

- Algunos ficheros de utilidad comunes.

- Pero **sin abstracciones complejas.**
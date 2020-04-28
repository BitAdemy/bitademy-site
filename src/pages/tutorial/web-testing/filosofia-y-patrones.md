---
title: 👨🏼‍🏫 Filosofía y patrones
subtitle: >-
  Qué hay que saber para programar tests.
excerpt: >-
  Filosofía y patrones. Qué hay que saber para programar tests.
post_url: tutorial/web-testing/filosofia-y-patrones
img_path: images/undraw_science.png
thumb_img_path: images/undraw_science.png
date: '2020-04-28'
up: Tutorial WebTesting
up_url: tutorial/web-testing
previous: Tipos de Pruebas
previous_url: tutorial/web-testing/tipos-de-pruebas
sections:
  - section_id: call-to-action
    type: section_cta
    title: Garantiza tus desarrollos
    subtitle: Testing de aplicaciones web fácil y productivo para todos.
    actions:
      - label: Curso online
        url: /cursos/testing-de-aplicaciones-web-facil-y-productivo-para-todos/
template: tutorial
---

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

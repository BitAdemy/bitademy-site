---
title: 🎭 Pruebas de aplicaciones web con Puppeteer
subtitle: >-
  Puppeteer para comprobación de existencia, navegación, tamaño, velocidad y otras métricas.
excerpt: >-
  Pruebas de aplicaciones web con Puppeteer. Puppeteer para comprobación de existencia, navegación, tamaño, velocidad y otras métricas.
post_url: tutorial/web-testing/e2e/pruebas-de-aplicaciones-web-con-puppeteer
img_path: images/undraw_science.png
thumb_img_path: images/undraw_science.png
date: '2020-05-04'
previous: E2E
previous_url: tutorial/web-testing/e2e
laboratory: Laboratorio
laboratory_url: https://github.com/LabsAdemy/WebTesting_e2e-puppeteer_Labs
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

> _"Hacer las pruebas de existencia y rendimiento al terminar el desarrollo o tras las pruebas funcionales es como tomar el pulso o hacer una analítica a un paciente que ya está muerto."_
>
> -- ✍️ **Scott Barber**

Vamos a usar _Puppeteer_ para realizar una pruebas muy básicas. Pero vamos a **prepararlo y automatizarlo** de forma que sea muy sencillo y barato realizarlas con frecuencia.

Para seguir este tutorial no se requiere ningún conocimiento previo sobre testing. Pero se recomienda familiarizarse con la terminología leyendo el artículo [Filosofía y patrones](https://www.bitademy.com/tutorial/web-testing/filosofia-y-patrones)

## Puppeteer

Lo primero es tener las herramientas adecuadas. Como vamos a automatizar el chequeo constante de una web, lo más sensato será usar herramientas familiares.

Os propongo desarrollar un script Node que tome como dependencia a [Puppeteer](https://pptr.dev/).

Para mantenerlo muy simple no voy a incluir ninguna dependencia a ningún framework de testing, usaremos los comandos `assert` propios de Node.

Lo que sí que respetaré será la estructura básica de un test. La famosa _triple A_ **Arrange-Act-Assert**. Incluso con una última _cuarta A_ **After**.

### Arrange

La sección de preparación de cualquier test debe dejarlo listo para la ejecución de pruebas. Habitualmente **se preparan objetos** de negocio, ficheros, servicios o como en este caso se configura _Puppeteer_ para visitar páginas en modo oculto.

```js
async function arrangeBrowser() {
  console.info(`arranging browser `);
  const browser = await puppeteer.launch({
    headless: true
  });
  const pagePuppet = await browser.newPage();
  return { browser, pagePuppet };
}
```

A partir de este momento ya empezamos con **lo que debería ocurrir**. Son los habituales mensajes que suelen aparecer en inglés `it should...`.

En los casos más básicos se puede optar por un simple `try catch` que detecte errores. Por ejemplo para comprobar si una página existe o no.

```js
async function itShouldExist(pagePuppet, pageUrl) {
  console.info(`it Should Exist a page: ${pageUrl}`);
  try {
    await pagePuppet.goto(pageUrl, { waitUntil: 'networkidle2' });
    return 0;
  } catch (error) {
    console.warn({ error });
    return 1;
  }
}
```

Aunque mucho más habitual será **actuar y comprobar**. Por ejemplo si la página existe pero queremos comprobar que es la adecuada. Para ello se usan dos secciones. En la primera actuamos sobre el sistema y en la segunda comprobamos el resultado.

```js
async function itShouldHaveTitle(pagePuppet) {
  const expected = 'bitAdemy';
  console.info(`it Should Have Title: ${expected}`);
  ...
}
```

### Act

En esta sección actuamos contra el sistema de pruebas, en este caso la página visitada. Obteniendo un **resultado real**; que en inglés se denota como `actual`.

El ejemplo más sencillo con _Puppeteer_ podría ser algo así.

```js
async function itShouldHaveTitle(pagePuppet) {
  ...
  const actual = await actGetTitle(pagePuppet);
  ...
}
async function actGetTitle(pagePuppet) {
  return await pagePuppet.title();
}
```

### Assert

Estamos ya en la delicada fase de comprobación. En esencia queremos saber si algo es o no cierto y para ello **realizamos una afirmación**; lo que se denomina en inglés `assert`.

```js
async function itShouldHaveTitle(pagePuppet) {
  ...
  return assertEqual(actual, expected);
}
function assertEqual(actual, expected) {
  try {
    assert.strictEqual(actual, expected);
    return 0;
  } catch (error) {
    console.warn({ error });
    return 1;
  }
}
```

Si nuestra afirmación sobre el resultado real es la esperada, entonces habremos pasado la prueba. En caso contrario la prueba habrá fallado detectando un potencial error.

> En este tutorial por simplicidad empleamos la librería propia de Node; pero te recomiendo que valores usar otras más potentes como [chai](https://www.chaijs.com/) o la que usaremos más adelante: [jest](https://jestjs.io/).

## After

Es muy recomendable disponer de una sección que limpie cualquier efecto secundario de una prueba. Estos métodos se ejecutan después de realizarse y en inglés son simplemente `after`.

```js
async function afterAll(browser, numErrors) {
  await browser.close();
  if (numErrors) {
    console.warn(`there are ${numErrors} site errors`);
  } else {
    console.info('test completed successfully');
  }
  process.exit(numErrors);
}
```

Podemos usarlo para informar al usuario, o cualquier otro proceso, que el ejercicio ha finalizado pasando o no las pruebas. En [el laboratorio](https://github.com/LabsAdemy/WebTesting_e2e-puppeteer_Labs) tienes un ejemplo más completo de lo que es capaz Puppeteer.

🚧 work in progress 🚧

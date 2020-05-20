---
title: 🎭 Pruebas de aplicaciones web con Puppeteer
subtitle: >-
  Puppeteer para comprobación de existencia, navegación, tamaño, velocidad y otras métricas.
excerpt: >-
  Pruebas de aplicaciones web con Puppeteer. Puppeteer para comprobación de existencia, navegación, tamaño, velocidad y otras métricas.
post_url: tutorial/web-testing/e2e/pruebas-de-aplicaciones-web-con-puppeteer
img_path: images/undraw_science.png
thumb_img_path: images/undraw_science.png
date: '2020-05-07'
up: Tutorial WebTesting
up_url: tutorial/web-testing
previous: E2E
previous_url: tutorial/web-testing/e2e
next: Pruebas de rendimiento web con Lighthouse
next_url: tutorial/web-testing/e2e/pruebas-de-rendimiento-web-con-lighthouse
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

La sección de preparación de cualquier test debe dejarlo listo para la ejecución de pruebas. Habitualmente **se preparan objetos** de negocio, ficheros, servicios o como en este caso se configura _Puppeteer_ para visitar páginas en modo oculto y a la resolución que determinemos.

```
async function arrangeBrowser() {
  console.info(`arranging browser `);
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: { width: 1920, height: 1080 }
  });
  const pagePuppet = await browser.newPage();
  return { browser, pagePuppet };
}
```

A partir de este momento ya empezamos con **lo que debería ocurrir**. Son los habituales mensajes que suelen aparecer en inglés `it should...`.

En los casos más básicos se puede optar por un simple `try catch` que detecte errores. Por ejemplo para comprobar si una página existe o no.

```
module.exports = async function itShouldExist(pagePuppet) {
  let errors = 1;
  const inputPageUrl = 'https://www.bitademy.com';
  console.info(`GIVEN the url: ${inputPageUrl}`);
  try {
    console.info(`  WHEN is visited`);
    await pagePuppet.goto(inputPageUrl, { waitUntil: 'networkidle2' });
    console.info(`    THEN it Should Exist a page: ${inputPageUrl}`);
    errors = 0;
  } catch (error) {
    console.warn({ error });
  }
  assertTrue(errors == 0, `Could not visit the url: ${inputPageUrl}`);
  return errors;
};
```

Fíjate en la auditoria tan explícita que se hace. En un test siempre querrás saber lo que está pasando. Recuerda que es una herramienta para el desarrollador, es decir, para ti. Así que haz que te resulte cómoda, agradable y util.

Para homogenizar los mensajes te propongo que uses la terminología que tomo prestada del BDD. Se basa en usar los tres sucesos de toda prueba. _Given, when, then_. Es decir **dada** una situación de partida, **cuando** el usuario realiza una acción, **entonces** el sistema debería responder adecuadamente.

Este caso de **intentar** es habitual, aunque mucho más habitual será **actuar y comprobar**. Por ejemplo si la página existe pero queremos comprobar que es la adecuada. Para ello se usan dos secciones. En la primera actuamos sobre el sistema y en la segunda comprobamos el resultado.

```
async function itShouldHaveTitle(pagePuppet) {
  console.info(`GIVEN a page`);
  const expected = 'bitAdemy';
  ...
}
```

### Act

En esta sección actuamos contra el sistema de pruebas, en este caso la página visitada. Obteniendo un **resultado real**; que en inglés se denota como `actual`.

El ejemplo más sencillo con _Puppeteer_ podría ser algo así.

```
async function itShouldHaveTitle(pagePuppet) {
  ...
  console.info(`  WHEN we get its title`);
  const actual = await actGetTitle(pagePuppet);
  ...
}
async function actGetTitle(pagePuppet) {
  return await pagePuppet.title();
}
```

### Assert

Estamos ya en la delicada fase de comprobación. En esencia queremos saber si algo es o no cierto y para ello **realizamos una afirmación**; lo que se denomina en inglés `assert`.

```
async function itShouldHaveTitle(pagePuppet) {
  ...
  console.info(`    THEN it Should Have Title: ${expected}`);
  return assertEqual(actual, expected);
}
function assertEqual(actual, expected) {
  try {
    assert.strictEqual(actual, expected);
    console.info(`      🟩 SUCCESS`);
    return 0;
  } catch (error) {
    console.info(`      🔴 FAIL: expected ${error.expected} but got ${error.actual} `);
    return 1;
  }
}
```

Si nuestra afirmación sobre el resultado real es la esperada, entonces habremos pasado la prueba. En caso contrario la prueba habrá fallado detectando un potencial error.

> En este tutorial por simplicidad empleamos la librería propia de Node; pero te recomiendo que valores usar otras más potentes como [chai](https://www.chaijs.com/) o la que usaremos más adelante: [jest](https://jestjs.io/).

### After

Es muy recomendable disponer de una sección que limpie cualquier efecto secundario de una prueba. Estos métodos se ejecutan después de realizarse y en inglés son simplemente `after`.

```
async function afterAll(browser, numErrors) {
  await browser.close();
  if (numErrors) {
    console.warn(`🔴 FAIL: there are ${numErrors} site errors`);
  } else {
    console.info('🟩 SUCCESS: all tests completed successfully');
  }
  process.exit(numErrors);
}
```

También podemos usar esta sección para informar al usuario, o a cualquier otro proceso, de que el ejercicio ha finalizado pasando o no las pruebas.

### Interacción

_Puppeteer_ no sólo permite visitar páginas, si no que **simula la interacción de un usuario**. Desde hacer click en un enlace hasta cubrir formularios complejos.

**Cuando la interacción se complica**, es decir cuando queremos hacer una prueba funcional, yo **prefiero usar** una herramienta más adecuada como **[Cypress](https://www.cypress.io/)**. Pero, hay situaciones de poca interacción y que resuelve muy bien Puppeteer.

Por ejemplo, permite hacer _logIn_ en un sitio autenticado, o cubrir pequeños formularios. Para ver la sintaxis necesaria te muestro cómo probar un formulario de suscripción a una _newsletter_; que además es algo muy similar a una pantalla de _logIn_.

```
module.exports = async function itShouldAllowSubscribe(pagePuppet) {
  let errors = 1;
  console.info(`GIVEN a page with a subscribe form `);
  try {
    console.info(`  WHEN we select the input `);
    await actSelect(pagePuppet, '#MERGE0');
    console.info(`  AND WHEN we type at the selected input `);
    await actType(pagePuppet, 'puppet@bitademy.com');
    console.info(`  AND WHEN we click on the subscribe button `);
    await actClick(pagePuppet, '#subscribe-form > button');
    console.info(`    THEN it Should Allow Subscribe`);
    errors = 0;
  } catch (error) {
    console.warn({ error });
  }
  assertTrue(errors == 0, `Could not complete subscribe process`);
  return errors;
};

async function actSelect(pagePuppet, selector) {
  await pagePuppet.evaluate(function (selector) {
    return document.querySelector(selector).scrollBy(0, 10);
  }, selector);
  await pagePuppet.focus(selector);
}

async function actType(pagePuppet, value) {
  await pagePuppet.keyboard.type(value);
}

async function actClick(pagePuppet, selector) {
  await pagePuppet.click(selector);
}
```

### Imagen

Con _Puppeteer_ podemos **capturar instantáneas y guardarlas** en distintos formatos en cualquier momento de la ejecución de un test. Es habitual usarlas para hacer un seguimiento de los cambios de apariencia con el tiempo. Y mucho más importante, usarlo para comprobar cómo se visualiza a **distintas resoluciones o simuladores de dispositivos**.

La sintaxis no puede ser más sencilla. Cuidado que te puedes enganchar y llenar un disco en un par de tardes.

```
module.exports = async function takeScreenshot(pagePuppet) {
  const timeStamp = new Date().getTime();
  const shotPath = path.join(process.cwd(), 'images', `${timeStamp}.png`);
  await pagePuppet.screenshot({
    path: shotPath,
    fullPage: true
  });
};
```

> En [el laboratorio](https://github.com/LabsAdemy/WebTesting_e2e-puppeteer_Labs) tienes más ejemplos de lo que es capaz _Puppeteer_. Y si aún quieres más puede mirar este otro repositorio aún más completo [AtomicBuilders/muon](https://github.com/AtomicBuilders/muon)

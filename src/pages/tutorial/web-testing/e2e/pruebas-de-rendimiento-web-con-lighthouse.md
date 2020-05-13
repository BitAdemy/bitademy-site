---
title: 🚢 Pruebas de rendimiento web con Lighthouse
subtitle: >-
  Lighthouse para comprobación tamaño, velocidad, SEO y otras métricas.
excerpt: >-
  Pruebas de rendimiento web con Lighthouse. Lighthouse para comprobación tamaño, velocidad, SEO y otras métricas.
post_url: tutorial/web-testing/e2e/pruebas-de-rendimiento-web-con-lighthouse
img_path: images/undraw_science.png
thumb_img_path: images/undraw_science.png
date: '2020-05-08'
up: Tutorial WebTesting
up_url: tutorial/web-testing
previous: Pruebas de aplicaciones web con Puppeteer
previous_url: tutorial/web-testing/e2e/pruebas-de-aplicaciones-web-con-puppeteer
next: Pruebas funcionales
next_url: tutorial/web-testing/functional
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

> _"Cualquier optimización que no sea sobre el cuello de botella es una ilusión de mejora."_
>
> -- ✍️ **Federico Toledo**

Es decir, que antes de optimizar hay que medir y saber qué es lo que falla. Para medir de forma automática tras cada deploy, o cuando se establezca, te propongo que uses [Lighthouse](https://github.com/GoogleChrome/lighthouse).

Seguro que conoces _lighthouse_ como un complemento de _Chrome_. Pero aquí te voy a enseñar como integrarlo con _Puppeteer_ para realizar una pruebas de rendimiento. Pero vamos a **prepararlo y automatizarlo** de forma que sea muy sencillo y barato realizarlas con frecuencia.

Para seguir este tutorial no se requiere ningún conocimiento previo sobre testing. Pero se recomienda familiarizarse con la terminología leyendo el artículo [Filosofía y patrones](https://www.bitademy.com/tutorial/web-testing/filosofia-y-patrones)

## Lighthouse

Este producto de Google lo puedes usar de distintas formas manualmente. Para automatizarlo vamos a desarrollar un script Node que tome como dependencia a [su librería desde npm](https://www.npmjs.com/package/lighthouse)

Seguiremos las misma premisas que empleamos con [Puppeteer para las pruebas básicas](tutorial/web-testing/e2e/pruebas-de-aplicaciones-web-con-puppeteer). Es decir la famosa _triple A_ **Arrange-Act-Assert**. Incluso con una última _cuarta A_ **After** para organizar el código. Y el _Given, when, then_ para informar al usuario del test, es decir al programador, copiado del _behavior-driven development._

### Arrange

Esta fase es un poco tediosa, pero te puede valer para todos los tests que hagas con _Lighthouse_. En esencia lanza una instancia de _Chrome_ y se conecta a ella. Es en esa instancia en la que se cargará tu página usando _Puppeteer_ y contra la que se lanzarán las peticiones de métricas.

```js
async function arrangeBrowser() {
  const chrome = await launchChrome();
  console.info(`chrome.port : ${chrome.port}`);
  const browser = await connectToChrome(chrome);
  return { chrome, browser };
}

async function launchChrome() {
  const chrome = await chromeLauncher.launch(config);
  config.port = chrome.port;
  console.log(`Chrome launched at port: ${chrome.port}`);
  return chrome;
}
async function connectToChrome(chrome) {
  const resp = await util.promisify(request)(`http://localhost:${chrome.port}/json/version`);
  const { webSocketDebuggerUrl } = JSON.parse(resp.body);
  const browser = await puppeteer.connect({ browserWSEndpoint: webSocketDebuggerUrl });
  console.log(`Browser connected at url: ${browser._connection._url}`);
  return browser;
}
```

### Act

Esta fase es más simple, aunque aquí si que tendrás que trabajar cada test. _Lighthouse_ es capaza de tomar cientos de métricas y generar informes _json_ o _html_. Eso está muy bien, pero exige que algo o alguien los procese después.

Mi propuesta minimalista y enfocada al paso de la prueba es que pidas una métrica concreta y la valides contra un resultado esperado.

```js
async function actGetReport(url) {
  lh_desktop_config.settings.skipAudits = null;
  lh_desktop_config.settings.onlyAudits = ['speed-index'];
  const report = await lighthouse(url, config, lh_desktop_config).then(results => {
    return results;
  });
  const audits = getSimpleArray(report.lhr.audits);
  console.log(`lighthouse audits: ${JSON.stringify(audits)}`);
  return audits;
}
function getSimpleArray(property) {
  return Object.keys(property).map(x => ({
    id: x,
    title: property[x].title,
    score: property[x].score
  }));
}
```

Vale, pedir una sola métrica quizá sea poco realista. Pero recuerda dos cosas antes de pedir a lo loco. **Las pruebas deben ser rápidas**. Y deben usarse con un objetivo concreto, **detectar y un cuello de botella y corregirlo**.

### Assert

Esta es la parte más sencilla. Determina el umbral de rendimiento aceptable y compáralo con el resultado obtenido. Por ejemplo yo aquí estoy midiendo el _speed-index_ , que es el criterio principal, y lo comparo contra el umbral que recomiendan en google.

```js
module.exports = async function itShouldBeFast() {
  const inputPageUrl = 'https://www.bitademy.com';
  const { chrome, browser } = await arrangeBrowser();
  console.info(`GIVEN chrome attached : ${chrome.port}`);
  console.info(`  WHEN ${inputPageUrl} is scanned with lighthouse`);
  const actualAudits = await actGetReport(inputPageUrl);
  const actual = getSpeedIndex(actualAudits).score;
  const minimunExpected = 0.89;
  console.info(`    THEN it Should be faster than: ${minimunExpected}`);
  const failMessage = `     Actual Speed Index ${actual} is lower than minimum expected ${minimunExpected}`;
  await afterAll({ chrome, browser });
  return assertTrue(actual > minimunExpected, failMessage);
};
```

### After

Al acabar tus pruebas deberías liberar los recursos, que3 en este caso es simplemente desconectar y cerrar la instancia de _chrome_

```js
async function afterAll({ chrome, browser }) {
  browser.disconnect();
  await chrome.kill();
}
```

> En [el laboratorio](https://github.com/LabsAdemy/WebTesting_e2e-puppeteer_Labs) tienes más ejemplos de lo que es capaz _Lighthouse_. Y si aún quieres más puede mirar este otro repositorio aún más completo [AtomicBuilders/muon](https://github.com/AtomicBuilders/muon)

Con esto tienes para empezar en el mundo de las pruebas de las aplicaciones web, ojo que **empezamos por lo más fácil de probar**. Pero algo salimos ganando, al menos comprobar que las páginas respondan rápido. Ya veremos cómo garantizar que además lo hagan correctamente.

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

normalmente vas a querer comprobar algo más que la existencia básica de una web. Hay tantas posibles pruebas que hacer como situaciones pueda vivir un usuario. Pero para empezar te voy a mostrar las más utilizadas.

### Emulación

Algo típico es que despliegues una aplicación web, pero quieras comprobar que se ejecuta correctamente en distintos dispositivos. Ya que Puppeteer usa por debajo un Chrome, podemos usar las capacidades de emulación que tiene.

```javascript
module.exports = async function (pagePuppet) {
  await given(`Any page of my site`, async () => {
    const inputPageUrl = `https://www.bitademy.com`;
    const inputUserAgent =
      'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1';
    await pagePuppet.setUserAgent(inputUserAgent);
    await pagePuppet.setViewport({ width: 375, height: 812 });
    await when(`we visit emulating an iPhone`, async () => {
      await pagePuppet.goto(inputPageUrl, { waitUntil: `load` });
      const actual = await pagePuppet.evaluate(() => {
        const nav = document.getElementById(`main-navigation`);
        const style = window.getComputedStyle(nav, ``);
        return style.getPropertyValue(`visibility`);
      });
      const expected = `hidden`;
      then(`it hides main-navigation`, actual, expected);
    });
  });
};
```
De esta forma puedes determinar si se aplican o no ciertos estilos, la validez de tus _media queries_...


### Evaluación

Hablando de evaluar; te habrás fijado en la función `evaluate` de primer orden que admite un _callback_ para ejecutar. La clave está en entender cuándo esa función se va a ejecutar. Evaluate ejecutará el callback de forma asíncrona una vez descargada la página.
Por ejemplo lo uso para comprobar que no tenemos links vacíos en una web.

```javascript
module.exports = async function (pagePuppet) {
  await given(`A site url`, async () => {
    const inputPageUrl = `https://www.bitademy.com`;
    await when(`we scrap it for empty links`, async () => {
      await pagePuppet.goto(inputPageUrl, { waitUntil: `load` });
      const actual = await pagePuppet.evaluate(() =>
        window.find(`a:is(:not([href]),[href=""],[href="#"])`)
      );
      const expected = false;
      then(`have no one`, actual, expected);
    });
  });
};
```

Cualquier expresión JavaScript que pongamos se ejecutará como si la hubiéramos escrito en la consola del Chrome.

### Seguimiento

Además de lanzar el script y ver directo lo que ocurre, también puedes querer ver lo que pasó una vez terminado. Es decir comprobar qué ha ocurrido y tener un rastro sobre todo si se ejecuta en modo desatendido o sin visualización.

```javascript
exports.takeScreenshot = async function takeScreenshot(pagePuppet) {
  const timeStamp = new Date().getTime();
  const shotPath = path.join(process.cwd(), 'images', `${timeStamp}.png`);
  await pagePuppet.screenshot({
    path: shotPath,
    fullPage: false
  });
};
```
La función `screenshot` saca instantáneas de las pantallas que permitirán analizar tranquilamente lo que ocurrió. Recuerda que la prueba la haces para ti. El log o rastro de lo sucedido es tu principal activo al terminar la prueba.

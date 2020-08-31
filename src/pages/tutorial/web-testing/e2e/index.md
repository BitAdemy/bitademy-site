---
title: 🌐 E2E Pruebas externas de principio a fin
subtitle: >-
  Pruebas de aplicaciones web de caja negra. Puppeteer para comprobación de existencia, navegación, tamaño, velocidad y otras métricas.
excerpt: >-
  E2E Pruebas externas de principio a fin. Pruebas de aplicaciones web de caja negra. Puppeteer para comprobación de existencia, navegación, tamaño, velocidad y otras métricas.
post_url: tutorial/web-testing/e2e
img_path: images/undraw_science.png
thumb_img_path: images/undraw_science.png
date: '2020-05-04'
preview: Preview video gratis
preview_url: https://aula.bitademy.com/courses/testing-de-aplicaciones-web-facil-y-productivo-para-todos/lectures/18124760
up: Tutorial WebTesting
up_url: tutorial/web-testing
previous: Primeras pruebas
previous_url: tutorial/web-testing/primeras-pruebas
next: Pruebas de aplicaciones web con Puppeteer
next_url: /tutorial/web-testing/e2e/pruebas-de-aplicaciones-web-con-puppeteer
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

> _"Si un usuario final percibe una mal rendimiento en tu website, su siguiente click probablemente sea en tu-competencia.com"_
>
> -- ✍️ **Ian Molyneaux**

Lo primero es **software que funcione**. Y cuando hablamos de una _web_ la primera garantía debe ser la existencia y la descarga rápida de contenido relevante.

Todo lo demás vendrá después. Paro si el usuario no encuentra rápido lo que busca... entonces si puede se irá, y si no puede irse estará a disgusto. Ninguna de las dos situaciones es deseable.

Pero, afortunadamente, es muy sencillo realizar unos primeros test que garanticen estos aspectos tan básicos de nuestros sistemas.

La herramienta que os propongo utilizar es [Puppeteer](https://pptr.dev/). Aunque todo se puede realizar con otras como [Cypress](https://www.cypress.io/) o [Playwright](https://github.com/microsoft/playwright). La primera la usaremos para pruebas más funcionales, y la segunda es muy reciente y habrá que darle algo de tiempo...

Lo interesante no es el software que usemos, sino **tener claro cual es el objetivo de la prueba**. Que en este caso es tremendamente simple.

- ✅ Garantizar que una ruta existe.

- ✅ Comprobar que el contenido es el esperado.

- ✅ Validar que sus métricas entran en un rango esperado.

Son casi [pruebas de humo](https://es.wikipedia.org/wiki/Pruebas_de_humo) para comprobar que algo no arde nada más enchufarlo. Pero por **su simplicidad para implantarlas y su coste tan asequible de ejecución** son la primera recomendación que puedo dar a un _web tester_.


Vamos a usar _Puppeteer_ para realizar una pruebas muy básicas. Pero vamos a **prepararlo y automatizarlo** de forma que sea muy sencillo y barato realizarlas con frecuencia.

Para seguir este tutorial no se requiere ningún conocimiento previo sobre testing. Pero se recomienda familiarizarse con la terminología leyendo el artículo [Filosofía y patrones](https://www.bitademy.com/tutorial/web-testing/filosofia-y-patrones)

## Puppeteer

Lo primero es tener las herramientas adecuadas. Instalamos Puppeteer con el comando `yarn add puppeteer`. Y empezamos a programar.
Os propongo desarrollar un script Node que tome como dependencia a [Puppeteer](https://pptr.dev/),  lo lance y lo cierre.

```javascript
const { getBrowser, closeBrowser, takeScreenshot } = require(`./lib/puppets`);
async function test() {
  const { browser, pagePuppet } = await arrangeBefore();

  await cleanAfter(browser);
}
async function arrangeBefore() {
  const browser = await getBrowser();
  const pagePuppet = await browser.newPage();
  return { browser, pagePuppet };
}
async function cleanAfter(browser) {
  await closeBrowser(browser);
}
```

Veamos en detalle:

### El browser

La sección de preparación de cualquier test debe dejarlo listo para la ejecución de pruebas. Habitualmente **se preparan objetos** de negocio, ficheros, servicios o como en este caso se configura _Puppeteer_ para visitar páginas en modo oculto y a la resolución que determinemos.

```javascript
exports.getBrowser = async function getBrowser() {
  if (!browser) {
    browser = await puppeteer.launch({
      headless: false,
      defaultViewport: { width: 1920, height: 1080 },
      devtools: false
    });
  }
  return browser;
};
```

Y ahora aun par de pruebas.

### La página

A partir de este momento ya empezamos con **lo que debería ocurrir**. Y lo más sencillo es determinar que una página existe y devuelve un código http válido. Acostúmbrate a la sintaxis asíncrona con `async-await` porque todo esto se ejecutará siempre en segundo plano.

```javascript
module.exports = async function (pagePuppet) {
  const inputPageUrl = `https://www.bitademy.com/`;
  await given(`A the url ${inputPageUrl}`, async () => {
    await when(`we visit it`, async () => {
      const response = await pagePuppet.goto(inputPageUrl, { waitUntil: `load` });
      let actual = response.ok();
      let expected = true;
      then(`respond with an ok status code`, actual, expected);
    });
  });
};
```

Fíjate en la auditoria tan explícita que se hace. En un test siempre querrás saber lo que está pasando. Recuerda que es una herramienta para el desarrollador, es decir, para ti. Así que haz que te resulte cómoda, agradable y util.

Para homogenizar los mensajes te propongo que uses la terminología que tomo prestada del BDD. Se basa en usar los tres sucesos de toda prueba. _Given, when, then_. Es decir **dada** una situación de partida, **cuando** el usuario realiza una acción, **entonces** el sistema debería responder adecuadamente.

### El contenido

Este caso de comprobar **existencia** es habitual, aunque mucho más habitual será comprobar **contenido**. Por ejemplo si la página existe pero queremos comprobar que es la adecuada. Para ello se usan métodos auxiliares para obtener acceso a la respuesta.

```javascript
module.exports = async function (pagePuppet) {
  const inputPageUrl = `https://www.bitademy.com/`;
  await given(`A the page at ${inputPageUrl}`, async () => {
    await when(`we get its title`, async () => {
      await pagePuppet.goto(inputPageUrl, { waitUntil: `load` });
      const actual = await pagePuppet.title();
      const expected = `bitAdemy`;
      then(`it is ${expected}`, actual, expected);
    });
    await when(`we download all the content`, async () => {
      await pagePuppet.goto(inputPageUrl, { waitUntil: `networkidle2` });
      const content = await pagePuppet.content();
      const kiloByte = 1024;
      const maximumKiloBytes = 30;
      const maximunExpected = kiloByte * maximumKiloBytes;
      const actual = content.length < maximunExpected;
      const expected = true;
      then(`it is smaller than ${maximunExpected} bytes`, actual, expected);
    });
  });
};
```

En este caso comprobando título y tamaño de la descarga. Ojo a las esperas. Porque en algunas situaciones nos basta esperar a la respuesta básica del server y en otros necesitamos esperar a todo el contenido.
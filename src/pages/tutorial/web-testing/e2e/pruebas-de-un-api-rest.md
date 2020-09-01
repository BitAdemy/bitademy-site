---
title: 🔭 Pruebas de un API Rest
subtitle: >-
  Pruebas de comunicaciones JSON
excerpt: >-
  Pruebas de un API Rest. Pruebas de comunicaciones JSON.
post_url: tutorial/web-testing/e2e/pruebas-de-un-api-rest
img_path: images/undraw_science.png
thumb_img_path: images/undraw_science.png
date: '2020-09-01'
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

> _"Nunca hay pruebas suficientes que demuestren que un software está bien, pero un único test puede mostrar que está mal"_
>
> -- ✍️ **Amir Ghahrai**

Hemos visto que _Puppeteer_ es un automatizador de Chrome. Los navegadores solemos usarlo para ver páginas web pero también podemos, y como programadores debemos, usarlos para inspeccionar las comunicaciones de datos _json_. Con esto vas a poder probar tu API.

### Supertest

Para facilitar dichas inspecciones usaremos una librería con un nombre pretencioso: `supertest`. En esencia nos permite hacer peticiones _http_.

Veamos la llamada get más sencilla posible. el _hello world_ de las API.
```
async function getHello() {
  const inputHostUrl = `https://api-base.herokuapp.com`;
  await given(`the API url ${inputHostUrl}`, async () => {
    const inputEndPoint = `/api/pub/hello`;
    await when(`we call the ${inputEndPoint} endPoint`, async () => {
      const response = await request(inputHostUrl).get(inputEndPoint);
      const actual = response.body.message;
      const expected = `Hola Mundo`;
      then(`respond with the Hola Mundo message`, actual, expected);
    });
  });
}
```

### CRUD

Algo más elaborado sería probar la comunicación completa. Dejo la muestra de cómo enviar una _payload_ con el método _post_

```
async function postProject() {
  const inputHostUrl = `https://api-base.herokuapp.com`;
  await given(`the API url ${inputHostUrl}`, async () => {
    const inputEndPoint = `/api/pub/projects`;
    await when(`we post to the ${inputEndPoint} endPoint`, async () => {
      const inputProject = { name: 'start testing', dueDate: '2020-12-31' };
      const response = await request(inputHostUrl).post(inputEndPoint).send(inputProject);
      const actual = response.body.name;
      const expected = 'start testing';
      then(`respond with the same object`, actual, expected);
      const expectedStatus = 201;
      then(`respond with status code 201`, response.status, expectedStatus);
    });
  });
}
```

Como ves, se pueden comprobar respuestas, códigos, cabeceras... Es decir, se trata de automatizar las llamadas al API y comprobar que las respuestas entran dentro de lo esperado. Todo ello sin frameworks especiales de pruebas, sólo JavaScript con alguna librería de ayuda.
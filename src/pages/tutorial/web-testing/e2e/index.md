---
title: 🌐 E2E Pruebas externas de principio a fin
subtitle: >-
  Puppeteer para comprobación de existencia, navegación, tamaño, velocidad y otras métricas.
excerpt: >-
  E2E Pruebas externas de principio a fin. Puppeteer para comprobación de existencia, navegación, tamaño, velocidad y otras métricas.
post_url: tutorial/web-testing/e2e
img_path: images/undraw_science.png
thumb_img_path: images/undraw_science.png
date: '2020-05-04'
preview: Preview video gratis
preview_url: https://aula.bitademy.com/courses/testing-de-aplicaciones-web-facil-y-productivo-para-todos/lectures/18124760
up: Tutorial WebTesting
up_url: tutorial/web-testing
previous: Filosofía y patrones
previous_url: tutorial/web-testing/filosofia-y-patrones
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

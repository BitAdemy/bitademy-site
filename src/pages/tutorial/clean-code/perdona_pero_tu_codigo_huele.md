---
title: 🤢 Perdona pero... tu código huele
subtitle: >-
  Lo primero es admitir que todo código es mejorable.
excerpt: >-
  Perdona pero... tu código huele. Lo primero es admitir que todo código es mejorable.
post_url: tutorial/clean-code/perdona_pero_tu_codigo_huele
img_path: images/undraw_clean_up.png
thumb_img_path: images/undraw_clean_up.png
date: '2020-04-02'
preview: Preview video gratis
preview_url: https://aula.bitademy.com/courses/codigo-limpio/lectures/13532771
up: Tutorial Clean Code
up_url: tutorial/clean-code
next: Software que funciona
next_url: tutorial/clean-code/software_que_funciona
previous: Contenido
previous_url: tutorial/clean-code/contenido
sections:
  - section_id: call-to-action
    type: section_cta
    title: Mejora tus desarrollos
    subtitle: Clean Code aplicado para desarrollos limpios y rentables.
    actions:
      - label: Curso online
        url: /cursos/clean-code-aplicado-para-desarrollos-limpios-y-rentables/
template: tutorial
---

!["Primero hazlo, después hazlo bien y luego hazlo mejor." ✍🏼 Addy Osmani](/images/citas/0.1-clean-code.png)

<!-- > _"Primero hazlo, después hazlo bien y luego hazlo mejor."_
>
> -- ✍️ **Addy Osmani** -->

He escogido esta frase para empezar porque me siento completamente representado. Casi nunca he hecho nada bien a la primera.

Pero se empieza por hacer algo. Ya vendrá el tiempo de corregirlo. Y cuándo esté bien será el momento de mejorarlo.

Este es un ciclo sin fin. **Hacer, corregir mejorar**. En este curso hablamos de la última parte, de la mejora de lo correcto.

Hacer las cosas bien es lo mínimo, es lo que se espera de cualquier profesional. Si se hacen mal te pedirán que las corrijas o te pedirán que te apartes.

Si continúas en este negocio es porque lo haces bien. Pero puedes hacerlo mejor.

### Tu código es mejorable; y el mío también. 😳

Así pues debemos tener claro que todo código es mejorable. No es cuestión de humildad o arrogancia. Es una cuestión práctica.

Si miras hacia atrás y ves el código que escribiste hace unos meses, seguro que se te ocurren mejoras. Aunque lo hubieras hecho muy bien, apuesto a que en estos meses has aprendido mejores maneras de hacerlo. Y si no ha sido así. Ahora va a serlo.

### A ese código mejorable le decimos que... huele mal. 🤢

Para no hablar en términos de bien o mal, la industria ha adoptado los sinónimos sucio y limpio. Y continuando con la metáfora decimos que el código sucio huele mal.

Nuestro trabajo será limpiar ese código para eliminar los malos olores. Parque hacerle la vida más agradable al siguiente lector. Que con frecuencia serás tú.

![Perdone pero... le huele el código](/images/your-code-smells.jpg)

> Perdone, le huele el código.

## 🥀 Con el tiempo empeora

### El software de hoy exige mantenimiento futuro.

El software es la parte moldeable de un sistema. En contraposición con la rigidez del hardware, **creamos software con la intención de que pueda cambiar** con el tiempo. Y este es un concepto crucial.

Escribimos en software aquello que sabemos que va a cambiar y que por tanto no merece la pena esculpir en hardware. Y si sabemos que va a cambiar, es mejor escribirlo de forma que sea sencillo hacerlo, ¿no crees?

### Con el paso del tiempo, digamos que el olor va a peor.

Es como si se pudriese. **Los malos olores del código son dificultades** para su entendimiento y modificación. Y el entendimiento de cualquier código se desvanece en cuanto te levantas de la silla.

Cuando programas, te sumerges de tal forma en el problema que normalmente la solución generada es compleja y sólo entendible en ese momento de concentración. Puede que en ese momento sea evidente, pero tiene que serlo también en el futuro. La intención tiene que quedar clara.

En peor situación estás si el código putrefacto no es obra tuya. No será tu basura pero en cualquier caso, habrá que limpiarlo. ¿O prefieres vivir con el síndrome de Diogenes de otro? Permíteme este video para decirte lo mismo con algo de humor.

[ 📺 😂 ¿Lo he puesto yo? ¿Estaba aquí? ... ](https://twitter.com/quinHD/status/1087817606923542528?s=20)

## 💈 Principios de mejora

El hacer bien el código se apoya en la corrección formal que te ofrecen compiladores, editores u otras herramientas. El hacerlo correctamente se demuestra pasando tests automáticos y con la validación por parte de los usuarios. Pero, **¿Cómo se evalúan las mejoras?.** Son cuestión de diseño. Es algo interno. Es algo que sólo vemos tú y yo.

🛁 Toca limpiar el código pero no de cualquier manera, para no malgastar el tiempo. A lo largo del tutorial verás técnicas, métricas y consejos que seguirán estos **Principios de Limpieza** que consideraremos una inversión rentable de nuestro tiempo:

1️⃣. Mostrar la **intención** y ocultar los detalles.

2️⃣. **Evitar** la globalización y el acoplamiento.

3️⃣. Separar **responsabilidades**.

4️⃣. Don't Repeat Yourself **(DRY)**

_... and last but no least ..._

5️⃣. Keep It Simple, (_not_) Stupid **(KISS)**

Los primeros cuatro principios producen mejoras en el código, a costa de un esfuerzo. Puedes valorar si merece o no la pena. Pero, lo que no tendría sentido es que el por haberlo aplicado acabemos con código más difícil de leer.

Si lo que queremos es que el código se entienda, entonces nunca jamás debemos complicarlo. **Escoge la opción más sencilla** siempre vez que puedas. Ya el universo se encargará de aportar complejidad.

!["Cualquier código tuyo que no hayas mirado últimamente, es como si lo hubiese escrito otro." ✍🏼 Ley de Eagleson](/images/citas/0.1e-clean-code.png)

<!-- > "Cualquier código tuyo que no hayas mirado últimamente, es como si lo hubiese escrito otro."
>
> -- ✍️ **Ley de Eagleson** -->

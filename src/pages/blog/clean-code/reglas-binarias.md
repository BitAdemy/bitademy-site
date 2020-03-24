---
title: Reglas binarias
subtitle: >-
  Programar bien es un arte, pero hay ciertas reglas. Algunas se pueden cuantificar. Te propongo mis reglas binarias.
excerpt: >-
  Disclaimer:En honor a nuestros fundamentos los número escogidos se adaptan a las potencias de 2 y se presentan en notación decimal y binaria. Son elecciones arbitrarias y que sólo deben hacerte reflexionar sobre la métrica en si.
date: '2019-03-19'
thumb_img_path: images/rule.jfif
category: Clean Code
category_url: blog/clean-code
template: post
---

> **Disclaimer:** Para hacer honor al nombre de la academia, los número escogidos se adaptan a las potencias de 2 y se presentan en notación decimal y binaria. Son elecciones arbitrarias y que sólo deben hacerte reflexionar sobre la métrica en sí.

## 000 - b000000000
- WTFs (What the fuck)
- Magic numbers / strings
- Comentarios redundantes sobre la expresividad del código

## 001 - b000000001
- Responsabilidad por clase
- Línea en blanco entre funciones
- Duplicidad admitida antes que una mala abstracción

## 002 - b000000010
- Caracteres mínimo como nombre de variable
- Niveles de anidamiento dentro de una función
- Puntos en la jerarquía de una instrucción (excluido `this.`)

## 004 - b000000100
- Parámetros por función
- Profundidad en un árbol de carpetas

## 008 - b000001000
- Complejidad ciclomática
- Variables locales por función

## 016 - b000010000
- Métodos públicos por clase
- Propiedades públicas por clase

## 032 - b000100000
- Instrucciones por función
- Elementos por componente HTML

## 064 - b001000000
- Porcentaje mínimo de cobertura de líneas

## 128 - b010000000
- Caracteres por línea

## 256 - b100000000
- Líneas por fichero (clase) de código

> _**Summary:** Las métricas en si no garantizan la calidad del código; y sus valores de referencias suelen ser subjetivos. Pero, y este pero es importante, las métricas ayudan a detectar malos hábitos y a difundir y homogeneizar buenas prácticas._

_Publicado originalmente en [el perfil de Medium](https://medium.com/@albertobasalo71/reglas-binarias-a625493c5548) del autor: [Alberto Basalo](https://twitter.com/albertobasalo)_
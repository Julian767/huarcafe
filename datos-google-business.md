# Datos para Google Business Profile — Huar Café

Ficha de trabajo para cargar el perfil del negocio sin tocar el diseño del sitio.
Reemplazar todo lo que está entre corchetes cuando la clienta confirme el dato.

---

## 1. Datos comerciales (NAP)

| Campo | Dato |
|---|---|
| Nombre comercial | Huar Café |
| Nombre alternativo | HUAR — Café de especialidad |
| Dirección | Av. Pres. Roca 1798 Sur |
| Edificio / referencia | La Casona de Yolanda, Local N.º 5 |
| Localidad | Barreal |
| Departamento | Calingasta |
| Provincia | San Juan |
| Código postal | J5405 |
| País | Argentina |
| Teléfono / WhatsApp | +54 9 264 501-9966 |
| Sitio web | https://huar.cafe/ |
| Instagram | [Usuario real de Instagram] |
| Mapa / cómo llegar | https://maps.app.goo.gl/dD7L8mMFo3WHFBP7A |
| Ficha de Google | https://share.google/ovuv0O8QkVIcOoIcg |

> Importante: el nombre, la dirección y el teléfono deben coincidir **exactamente**
> entre Google, el sitio web, Instagram y cualquier otro directorio.

---

## 2. Horarios de atención

| Días | Horario |
|---|---|
| Miércoles a viernes | 17:00 a 21:00 hs |
| Sábados, domingos y feriados | 09:00 a 13:00 hs y 16:30 a 22:00 hs |
| Lunes y martes | Cerrado |

- Cargar los dos bloques de sábados, domingos y feriados por separado en Google.
- Los feriados se actualizan en **Horarios especiales**, no en los horarios fijos.
- Si un feriado cambia de horario, modificarlo también en esta tabla y en el
  bloque `openingHoursSpecification` del `index.html`.

---

## 3. Categorías sugeridas

- **Categoría principal:** Cafetería.
- **Categorías secundarias:** Casa de té · Panadería · Restaurante de brunch.

Elegir solo las que realmente representan el negocio. La categoría principal es
la que más peso tiene en las búsquedas locales.

---

## 4. Descripción del negocio (máx. 750 caracteres)

> Huar Café es un café de especialidad en Barreal, Calingasta. Servimos filtrados
> y algo más: V60, Origami, Chemex, prensa francesa, Aeropress y Aeropress latte,
> con granos de origen seleccionados. También ofrecemos infusiones, bebidas frescas,
> acompañamientos y platos de masa madre, en un ambiente cálido pensado para bajar
> el ritmo. Un momento fuera de tiempo.

Ajustar libremente el texto, manteniendo las palabras clave locales
“café de especialidad”, “Barreal” y “Calingasta”.

---

## 5. Atributos y servicios para revisar con la clienta

Marcar solo lo que esté confirmado:

- [ ] Consumo en el local
- [ ] Para llevar
- [ ] Wi-Fi
- [ ] Apto para trabajar / reuniones
- [ ] Espacio al aire libre
- [ ] Pet friendly
- [ ] Opciones vegetarianas
- [ ] Opciones sin gluten
- [ ] Leche vegetal
- [ ] Estacionamiento
- [ ] Accesible para sillas de ruedas
- [ ] Apto para familias
- [ ] Gift Cards

En **Servicios**, agregar “Gift Cards” con una descripción breve:
“Experiencias de café para una o dos personas, opción salada, mixta o dulce.
Consulta y coordinación por WhatsApp.”

---

## 6. Pasos para configurar la ficha

1. Ingresar a [business.google.com](https://business.google.com/) con la cuenta
   de Google del negocio.
2. Crear o reclamar la ficha con el nombre **Huar Café**.
3. Cargar la dirección exacta y ubicar el pin sobre el local (La Casona de
   Yolanda, Local N.º 5).
4. Verificar el negocio con el método que propone Google (video, teléfono o
   correo).
5. Completar categorías, descripción, teléfono, sitio web y horarios.
6. Subir fotos: fachada, interior, barra de café, métodos de filtrado, platos,
   tazas y equipo. Mínimo 10 fotos, renovarlas cada 3 meses.
7. Publicar una novedad de bienvenida y luego una publicación mensual
   (nuevo origen, método de la semana, horarios de feriados).
8. Responder reseñas en menos de 48 horas y cargar preguntas frecuentes.
9. Revisar cada mes que los horarios y el teléfono sigan correctos.

---

## 7. Datos ya estructurados en el sitio

El `index.html` incluye datos estructurados Schema.org (`CafeOrCoffeeShop`) en el
`<head>` con:

- Nombre, descripción, teléfono, sitio web.
- Dirección completa con código postal.
- Horarios de miércoles a domingo.
- Enlace al mapa y a la ficha de Google (`sameAs`).

Cuando se confirme una red social real, actualizar solo el bloque
`<script type="application/ld+json">` del `<head>`. No hace falta modificar
ninguna sección visual.

## 8. Dónde editar cada dato en el sitio

Todos los datos se cambian dentro de `index.html` con **Ctrl + F**, sin tocar
clases ni etiquetas:

| Dato | Buscar en el archivo | Dónde aparece |
|---|---|---|
| Dirección | `Av. Pres. Roca 1798 Sur` | Menú móvil, sección “Visitanos”, pie de página y datos estructurados |
| Teléfono / WhatsApp | `5492645019966` | Vínculos de WhatsApp, ficha de contacto y selector de Gift Cards |
| Horarios | `Miércoles a viernes` | Menú móvil, sección “Visitanos” y pie de página |
| Ficha de Google | `share.google/ovuv0O8QkVIcOoIcg` | Contacto de “Visitanos”, pie de página y datos estructurados |
| Instagram | `instagram.com` | Pie de página |

El número de WhatsApp de las Gift Cards se toma de `data-whatsapp` en el bloque
`#gift-selector`. Si se cambia el número, actualizar también ese atributo.

## 9. Checklist final antes de publicar

- [x] Calle y numeración confirmadas.
- [x] Código postal confirmado.
- [ ] Teléfono / WhatsApp real verificado.
- [ ] Instagram real cargado en el sitio y en Google.
- [ ] Horarios de feriados revisados.
- [ ] Fotos subidas y reseñas respondidas.
- [ ] Enlace “Cómo llegar” probado desde el celular.

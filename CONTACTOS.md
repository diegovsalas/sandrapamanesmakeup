# Responsables del proyecto

Sitio: **https://sandrapamanesmakeup.com**
Última actualización: 21 de septiembre de 2026

> ⚠️ **Este repositorio es público.** Todo lo que se escriba aquí queda visible
> en internet e indexable por buscadores. No agregues contraseñas, tokens,
> ni teléfonos o direcciones personales de terceros que no sean ya públicos.

---

## Cliente

**Sandra Pámanes — Makeup & Hair Artist**
Maquillaje y peinado de novias · Monterrey, N.L.

| | |
|---|---|
| Titular del negocio | Sandra Pámanes Flores |
| WhatsApp / teléfono | [81 8092 2951](https://wa.me/528180922951) *(publicado en el sitio)* |
| Correo | info@sandrapamanesmakeup.com ⬜ *buzón aún no dado de alta* |
| Instagram | [@sandrapamanesmakeup](https://www.instagram.com/sandrapamanesmakeup) |
| Facebook | [Página](https://www.facebook.com/share/1Jwa5NbrQH/) |

### Quién decide del lado del cliente

| Tema | Responsable |
|---|---|
| Precios y paquetes | Sandra Pámanes |
| Textos y condiciones de servicio | Sandra Pámanes |
| Fotografías y uso de imagen | Sandra Pámanes |
| Uso de logotipos de marcas en Colaboraciones | Sandra Pámanes ⬜ *pendiente de confirmar* |
| Atención a novias y agenda | ⬜ *por definir: ¿solo Sandra o hay asistente?* |

---

## Agencia

**Grupo Avantex**

| Rol | Persona | Contacto |
|---|---|---|
| Marketing / responsable del sitio | Diego Salas | marketing@grupoavantex.com |
| Diseño | ⬜ *por completar* | |
| Contenido y redes | ⬜ *por completar* | |

---

## Accesos y servicios

Las credenciales **no van aquí**. Esta tabla solo dice dónde vive cada cosa
y quién la tiene.

| Servicio | Proveedor | Titular de la cuenta | Notas |
|---|---|---|---|
| Dominio | GoDaddy | ⬜ *por confirmar* | `sandrapamanesmakeup.com`, registrado 17 sep 2026 |
| DNS | GoDaddy | ⬜ *por confirmar* | 4 registros A a GitHub Pages + CNAME `www` |
| Hosting | GitHub Pages | `diegovsalas` | Repo `diegovsalas/sandrapamanesmakeup`, rama `main` |
| Certificado HTTPS | Let's Encrypt (vía GitHub) | — | Renovación automática |
| Correo del dominio | ⬜ *sin contratar* | — | El buzón `info@` todavía no existe |
| Instagram | Meta | Sandra Pámanes | |
| Facebook | Meta | Sandra Pámanes | |
| Analítica | ⬜ *sin instalar* | — | |

---

## A quién escribirle según el asunto

| Si se trata de… | Escribirle a |
|---|---|
| Una novia que quiere reservar | Sandra, por WhatsApp |
| Cambiar precios, textos o condiciones | Sandra autoriza · Diego publica |
| Cambios en el sitio, dominio o correo | Diego |
| Agregar o quitar fotos del carrusel | Sandra envía · Diego publica |
| Agregar o quitar una marca en Colaboraciones | Sandra autoriza · Diego publica |
| Una marca que pregunta por el uso de su logotipo | Sandra ⬜ *definir quién responde* |

---

## Pendientes abiertos

| # | Pendiente | Responsable | Notas |
|---|---|---|---|
| 1 | Dar de alta el buzón `info@sandrapamanesmakeup.com` | ⬜ | Hoy los correos a esa dirección rebotan, y ya está publicada en el sitio |
| 2 | Confirmar autorización de las 8 marcas de Colaboraciones | Sandra | El sitio afirma públicamente la relación |
| 3 | Decidir si los datos bancarios siguen públicos en el sitio | Sandra | CLABE y cuenta visibles en la sección Reserva |
| 4 | Instalar analítica | Diego | Hoy no hay forma de medir visitas ni clics a WhatsApp |
| 5 | Reunir testimonios reales de novias | Sandra | La sección no se construyó por falta de contenido real |
| 6 | Datos estructurados de negocio local (SEO) | Diego | Para búsquedas tipo "maquillista novias Monterrey" |

---

## Cómo actualizar el sitio

```bash
cd ~/Desktop/sandrapamanesmakeup
git add -A
git commit -m "Descripción del cambio"
git push
```

Los cambios quedan en línea en uno o dos minutos.
Si se toca `style.css` o `script.js`, subir el número de versión en los
enlaces del `<head>` de `index.html` (`?v=…`) para que los navegadores
no sirvan la versión guardada en caché.

# 02. __Fundamentos de Angular__
## Pagina principal
<img src="assets/01-pipes.png" width="600">

---

# __Práctica: Layouts__
## Descripción General del Proyecto

Este proyecto fue desarrollado utilizando Angular y TailwindCSS con el objetivo de practicar la creación de layouts modernos y responsivos aplicando diferentes técnicas de maquetación como `Flexbox` y `CSS Grid`.

A lo largo de la práctica se implementaron múltiples distribuciones visuales utilizando componentes reutilizables, tarjetas con estilos personalizados, gradientes, sombras y estructuras adaptables a distintos tamaños de pantalla. Además, se aplicaron conceptos de diseño responsive para mejorar la organización y presentación del contenido.

---

### Distribución Adicional 1: Timeline Vertical
* **Descripción:** Implementa una línea temporal vertical utilizando `flexbox` y una barra lateral decorativa. Cada tarjeta representa una etapa del proyecto y se conecta visualmente mediante indicadores circulares.
* **Comentario en código:** Incluido en la cabecera del `<article>` correspondiente.
* **Captura de pantalla:**

  ![Timeline Vertical](assets/02-layout-01.png)

---

### Distribución Adicional 2: Bento Grid
* **Descripción:** Utiliza un sistema `grid` con tarjetas de diferentes tamaños mediante `col-span`, creando un dashboard moderno y dinámico para mostrar métricas o estadísticas destacadas.
* **Comentario en código:** Incluido en la cabecera del `<article>` correspondiente.
* **Captura de pantalla:**

  ![Bento Grid](assets/02-layout-02.png)

---

### Distribución Adicional 3: Sidebar Responsive
* **Descripción:** Combina `flexbox` y diseño responsive para dividir la interfaz en un menú lateral y un panel principal adaptable a distintos tamaños de pantalla.
* **Comentario en código:** Incluido en la cabecera del `<article>` correspondiente.
* **Captura de pantalla:**

  ![Sidebar Responsive](assets/02-layout-03.png)

---

### Distribución Adicional 4: Masonry Cards
* **Descripción:** Presenta una distribución asimétrica tipo galería usando `grid` y tarjetas con distintas alturas, ideal para dashboards visuales o paneles analíticos.
* **Comentario en código:** Incluido en la cabecera del `<article>` correspondiente.
* **Captura de pantalla:**

  ![Masonry Cards](assets/02-layout-04.png)

---

# __Práctica: Formularios Reactivos y Validaciones en Angular (A)__

## Descripción General

En esta práctica se desarrolló un formulario de registro utilizando Angular Reactive Forms. Se implementaron validaciones síncronas y asíncronas para mejorar la validación de datos ingresados por el usuario.

Entre las validaciones aplicadas se encuentran:
- Campo requerido.
- Validación de formato de email.
- Longitud mínima para contraseña.
- Confirmación de contraseña.
- Validación asíncrona para verificar disponibilidad de email.

Además, se utilizó TailwindCSS para diseñar una interfaz moderna y responsive.

---

## Capturas de Pantalla

### Formulario con errores de validación
* **Descripción:** Se muestran los distintos mensajes de error generados por las validaciones síncronas del formulario, incluyendo campos requeridos, formato inválido de email y contraseñas incorrectas.
* **Captura:**

  ![Errores Formulario](assets/05-errores-form-01.png)

---

### Validación asíncrona del email
* **Descripción:** Se muestra el mensaje de error generado por la validación asíncrona cuando el usuario ingresa un correo electrónico previamente registrado.
* **Captura:**

  ![Email Async Validation](assets/05-verificacion_email-02.png)

# __Práctica: Formularios Reactivos y Validaciones (B)__

## Descripción General

Construir un formulario reactivo básico (nombre, edad y correo electrónico) utilizando Angular Reactive Forms, aplicando validadores built-in como `required`, `email`, `min` y `minLength`. Además, se implementó una clase utilitaria `FormUtils` para reutilizar la lógica de validación y centralizar la generación de mensajes de error dinámicos dentro de la aplicación.

---

## Capturas de Pantalla

### Estado inicial del formulario
* **Descripción:** Vista inicial del formulario antes de ingresar información, mostrando los campos listos para ser completados por el usuario.
* **Captura:**

  ![Formulario Inicial](assets/05-estado-required-03.png)

---

### Formulario con errores visibles
* **Descripción:** Se muestran los mensajes de error generados por las validaciones después de intentar enviar el formulario con datos inválidos o incompletos al mismo tiempo se muetra la salida en consola de cuando los datos son rellenados correctamente.
* **Captura:**

  ![Formulario con errores](assets/05-errores-form-04.png)

---

# __Práctica: Formularios Reactivos y Validaciones (C)__
## Descripción General

Construir un formulario reactivo avanzado utilizando Angular Reactive Forms, integrando `FormArray` para manejar campos dinámicos, además de controles especiales como radio buttons, switches y checkboxes. También se reutilizó la clase utilitaria `FormUtils` para centralizar la validación y los mensajes de error de manera consistente dentro del formulario.

---

## Capturas de Pantalla

### Estado inicial del formulario
* **Descripción:** Vista inicial del formulario antes de ingresar datos, mostrando todos los controles dinámicos y especiales disponibles.
* **Captura:**

  ![Formulario Inicial](assets/05-form-vacio-05.png)

---

### Formulario con errores de validación
* **Descripción:** Se muestran los mensajes de error generados al intentar enviar el formulario con datos inválidos o incompletos.
* **Captura:**

  ![Formulario con errores](assets/05-errores-validacion-06.png)

---

### Formulario válido y completo
* **Descripción:** Formulario correctamente completado con todos los campos válidos y listos para ser enviados.
* **Captura:**

  ![Formulario válido](assets/05-form-valido-07.png)

---

### Objeto myForm.value en consola
* **Descripción:** Resultado mostrado en consola con el objeto generado por `myForm.value` después del submit del formulario.
* **Captura:**

  ![Console Form Value](assets/05-form-console-08.png)
# prueba2

Ver live View
<a href="https://prueba-a742b.web.app/login"> Ver proyecto aquí</a>


# Desafío Evaluado - Firebase (II)

Este repositorio contiene la solución al desafío evaluado de **Desafío Latam**, en el que se implementa una aplicación web con autenticación utilizando **Firebase Authentication** y **Vue Router**. La aplicación incluye tres vistas principales: `Sign Up`, `Login` y `Home`, con características que cumplen los requerimientos especificados.

## Descripción del Proyecto

La aplicación es un demo funcional que permite:

1. **Registro de usuarios (Sign Up)**:
   - Los usuarios pueden registrarse mediante un formulario disponible en una vista pública.
   - Los usuarios registrados son automáticamente autenticados y redirigidos a la vista `Home`.

2. **Inicio de sesión (Login)**:
   - Permite que los usuarios registrados inicien sesión a través de un formulario disponible en una vista pública.

3. **Vista privada (Home)**:
   - Accesible únicamente para usuarios autenticados.
   - Implementa guardianes de rutas mediante **Vue Router** para proteger esta vista.

## Funcionalidades Implementadas

- **Firebase Authentication**:
  - Sistema de autenticación con registro e inicio de sesión.
- **Vue Router**:
  - Uso de guardianes para restringir acceso a rutas privadas.
- **Componentes personalizados**:
  - Formularios dedicados para registro e inicio de sesión.
- **Despliegue con Firebase Hosting**:
  - Build optimizado para producción y hospedado en Firebase.

## Tecnologías Utilizadas

- [Vue.js](https://vuejs.org/)
- [Firebase Authentication](https://firebase.google.com/docs/auth)
- [Vue Router](https://router.vuejs.org/)
- [Firebase Hosting](https://firebase.google.com/docs/hosting)

## Instalación y Ejecución

1. Clona este repositorio:
   ```bash
   git clone https://github.com/alexisenp/bootcamp-prueba-firebase.git

2. Instala las dependencias:
```bash
npm install
```
3. Inicia la aplicación en modo desarrollo:
```bash
npm run serve
```

## Despliegue
Puedes acceder a la versión desplegada en <a href="https://prueba-a742b.web.app/login"> Firebase Hosting aquí.</a>

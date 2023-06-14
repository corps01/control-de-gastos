# **Aplicación de Gestión de Gastos**

Un aplicación de control de gastos desarrollada con React, Context API, Bootstrap y JSON-server como backend.

## **Descripción del Proyecto**

El proyecto consiste en una aplicación de control de gastos que permite realizar un seguimiento de los ingresos y gastos mensuales. Los usuarios pueden agregar, editar y eliminar transacciones, así como visualizar una grafica relacionada con sus movimientos financieros del mes.

## **Live Demo**
Puedes encontrar un demo en vivo de la aplicación **[aqui](https://main--control-gastos-corps01.netlify.app/)** :

## **Cómo Ejecutar en un Entorno Local**

Estas instrucciones te ayudarán a obtener una copia del proyecto y ejecutarlo en tu máquina local para desarrollo y pruebas.

1. Descarga el proyecto desde la rama principal (main) del repositorio.
2. El repositorio contiene dos proyectos: uno para el frontend (expense-tracker) y otro para el backend (json-server).
3. Ingresa al proyecto de React "expense-tracker" y agrega la URL local del JSON-server al archivo **`.env`**. Debe verse de la siguiente manera:

```
REACT_APP_API_ENDPOINT="http://localhost:4000"
```

1. Abre dos terminales y ejecuta **`npm start`** tanto en el proyecto del JSON-server como en el proyecto del expense-tracker.
2. ¡Listo! Ahora puedes comenzar a utilizar la aplicación. Inicialmente, se mostrará el mes actual, pero puedes agregar transacciones para otros meses, incluso los que aún no han ocurrido.

## **Construido Con**

- **[React](https://reactjs.org/)** - Biblioteca de JavaScript para construir interfaces de usuario.
- **[Bootstrap](https://getbootstrap.com/)** - Framework CSS para diseño responsive.
- **[Axios](https://github.com/axios/axios)** - Cliente HTTP basado en promesas para realizar solicitudes a la API.
- **[Context API](https://react.dev/learn/scaling-up-with-reducer-and-context)** - Manejador de estado global de React.
- **[JSON-server](https://github.com/typicode/json-server)** - Un servidor fake REST API para crear una API simple sin necesidad de mucha configuración.

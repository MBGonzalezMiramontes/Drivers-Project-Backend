# Backend de Proyecto DRIVERS

## Introducción

Este es el backend del proyecto individual llamado **DRIVERS**, una aplicación web desarrollada como parte del bootcamp. El backend es esencial para proporcionar servicios y datos a la aplicación frontend relacionada.

## Tecnologías Utilizadas

- Node.js
- Express
- Sequelize
- PostgreSQL

## Instrucciones

Asegúrate de haber configurado tu servidor y base de datos antes de iniciar el backend. Consulta el archivo README principal para obtener más información sobre la configuración del servidor.

Para ejecutar el backend, sigue estos pasos:

1. Clona este repositorio en tu computadora.

2. Abre una terminal y navega hasta la carpeta `server`.

3. Ejecuta el siguiente comando para instalar las dependencias:

npm install
Una vez que se completen las instalaciones, inicia el servidor con el siguiente comando:


npm start
Esto iniciará el servidor en tu computadora y estará disponible en http://localhost:5000.

Estructura de Carpetas
El proyecto del backend está organizado de la siguiente manera:

api: Contiene archivos relacionados con la API de Drivers.

db.json: Archivo JSON que sirve como base de datos local para almacenar información de conductores.
routes.js: Definición de las rutas de la API para interactuar con los conductores.
config: Contiene archivos de configuración, como la conexión a la base de datos.

controllers: Controladores que manejan la lógica de las rutas de la API.

models: Definición de los modelos de base de datos, en este caso, los modelos para conductores y equipos.

middleware: Middleware para el manejo de solicitudes y autenticación si es necesario.

scripts: Contiene scripts útiles, como la configuración de la base de datos.

Rutas de la API
El backend proporciona las siguientes rutas de la API:

GET /drivers: Obtiene un arreglo de objetos que representan conductores con su información.

GET /drivers/:idDriver: Obtiene el detalle de un conductor específico. Incluye datos de los equipos a los que está asociado.

GET /drivers/name?="...": Obtiene los primeros 15 conductores que coinciden con la palabra de búsqueda.

POST /drivers: Crea un nuevo conductor en la base de datos.

GET /teams: Obtiene un arreglo con todos los equipos existentes de la API. Los equipos son obtenidos de la API de Fórmula Uno.

Base de Datos
La base de datos se encuentra en PostgreSQL y contiene dos tablas:

Drivers: Almacena información sobre los conductores.
Teams: Almacena información sobre los equipos de Fórmula Uno.
Contribución
Si deseas contribuir a este proyecto, asegúrate de bifurcar el repositorio y enviar solicitudes de extracción con tus mejoras. También puedes informar sobre problemas o errores mediante problemas (issues).

Agradecimientos
Este proyecto fue creado como parte del bootcamp y ha sido posible gracias a la colaboración de los instructores y compañeros de equipo. ¡Gracias a todos por su apoyo!

¡Disfruta del proyecto y feliz codificación!

Asegúrate de que la estructura de carpetas y la información estén ajustadas según las necesidades y la organización de tu proyecto.

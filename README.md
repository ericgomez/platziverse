# Curso Avanzado de Node.js
#### Proyecto del curso

![Proyect](https://static.platzi.com/media/user_upload/ProyectNode-fd2b1421-0e22-49df-a2fe-d89afdc52cfe.jpg)

## PlatziVERSE

> Aplicacion Platziverse (Plataforma de IoT)

**Componentes:**
- **platziversedb (Modulo)**: Comunicación con la Base de Datos. Aquí almacenaremos los componentes y las métricas que van a estar almacenando la información de la aplicación. Cada vez que ingrese información en tiempo real se almacenara mediante este modulo. También enviara información (en demanda) cada vez que se consulte la API.
- **Agent (Agente de monitoreo)**: Definimos las métricas que queremos monitorear y de manera real-time. A través de MQTT entregaremos la información por dos canales de comunicación web (para mostrarlas) DB para guardarlas.
- **Servidor (API)**: cargaremos las primeras 20 métricas para dibujar en pantalla una gráfica y después actualizarla de manera real-time. La conexión con el servidor web se hará mediante proxy para autenticación y tokens de JSON (JWT).

![Structure](https://i.imgur.com/SeEckP4.jpg)

## API del proyecto
> [platziverseAPI](https://github.com/ericgomez/platziverseAPI)



### Contenido:
- Inicio del curso
  - ¿Qué vamos a construir en el curso avanzado de Node.js?


- Introducción a Node.js
  - ¿Qué es Node.js?


#### Características de la plataforma Node.js


- ¿Qué tipo de aplicaciones podemos desarrollar con Node.js?


#### Preparando el entorno de Desarrollo
- Cómo instalar Node.js en macOS


- Cómo instalar PostgreSQL y Redis en macOS


- Cómo instalar Visual Studio Code en macOS


- Cómo instalar Ansible en macOS


#### Arquitectura del Proyecto (Platziverse)
- Arquitectura y Componentes del proyecto


- Introducción a protocolos y patrones de aplicaciones en tiempo real
  - Cómo funciona el modelo Pub/Sub en MQTT y Web Sockets


- Creando Módulo de Base de Datos (platziverse-db)
  - Estructura básica de un módulo de Node.js


- Definición de entidades de base de datos


- Implementación de modelos con sequelize


- Implementación de un módulo básico de base de datos


- Implementación de script de inicialización de base de datos


- Creando una advertencia sobre el borrado de base de datos


- Introducción a pruebas unitarias con Ava.js


- Introducción a code coverage con nyc


- Cómo hacer Mocks y Stubs con Sinon


- Creación de fixtures y definición básica del servicio de Agent


- Implementación de findbyId y pruebas en el servicio Agent


- Implementación de createOrUpdate


- Revisión del servicio Agent


- Implementación del servicio Metric


- Realizando un ejemplo con el módulo de base de datos


- modificar el script de inicialización de la base de datos


#### Construyendo un servidor en tiempo real para Internet de las Cosas con Mosca/MQT
- Definición de un Broker de Mensajería


- Definición de los tipos de mensajes


- Implementación del servidor MQTT


- Cómo recibir mensajes


- Cómo integrar el servidor MQTT con la base de datos


- Cómo almacenar la información del agente y reportar el agente conectado


- Cómo almacenar la información de las métricas


- Probando el servidor MQTT (Ejemplo con mqtt client)


- Construyendo el agente de monitoreo (platziverse-agent)
  - Cómo implementar un custom EventEmitter usando ES6 classes


- Definiendo un timer de ejecución continua (setInterval)


- Implementación del cliente MQTT


- Implementación de métricas personalizadas


- Probar agent (ejemplo)


#### Construyendo una API REST con Express (platziverse-api)
- Implementación de un servidor básico con express


- Definición de rutas del API


- Implementación de manejo de errores con express


- Pruebas básicas de Integración con Ava y supertest


- Integración con el módulo de base de datos


- Implementación de ruta del API


- Pruebas de Integración con Ava, Supertest y Sinon


#### Asegurando nuestra API REST con JWT
- Definición de JWT


Asegurando nuestra API con express-jwt


- Modificando las pruebas de integracion


- Implementando permisos con express-jwt-permissions


#### Creando un Dashboard Web en tiempo real con WebSockets (platziverse-web)
- Implementación de un servidor web estático con express


- Integrando socket.io con express


- Integrando agente de monitoreo con socket.io


- Implementación de rutas proxy con la API


- Presentación de nuestro cliente frontend en Vue.js


- Integración del cliente frontend con API (Metric)


- Integración del cliente frontend con socket.io (Metric)


- Integración del cliente frontend con API (Agent)


- Integración del cliente frontend con socket.io (Agent)


#### Creando un Dashboard para la terminal en tiempo real con Blessed (platziverse-cl)
- Implementación de un CLI Básico con Node


- Introducción a Blessed / Blessed Contrib


- Implementación del layout básico con Blessed Contrib


- Integración con el agente de monitoreo 1



## License
[MIT](https://choosealicense.com/licenses/mit/)

- Integración con el agente de monitoreo 2


- Integración con el agente de monitoreo 3


#### Depurando Aplicaciones Node.js
- Utilizando longjohn para mejores stacktraces


- Depurando en Desarrollo con node --inspect


- Depurando en Desarrollo con Visual Studio Code


#### Preparando nuestra aplicación para producción
- Preparando Proyecto para Producción 1


- Preparando Proyecto para Producción 2


- Creación de scripts para despliegue con Ansible


- Probando el database rol con Vagrant


- Creando scripts del rol de platziverse db y mqtt (script de automatización .yml)


- Terminando los scripts faltantes


- Creación de servidores en DigitalOcean


#### Desplegando nuestra aplicación a producción
- Ejecutando los Scripts de Despliegue


- Utilizando Aplicación en Producción y cierre del curso


#### Bonus: Utilizando platziverse-agent en BeagleBone Black y Raspberry PI
- Implementación platziverse-agent con Johnny-Five

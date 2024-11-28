 Proyecto de Autenticación de Usuario

Este proyecto es una implementación básica de autenticación de usuario utilizando Node.js, MongoDB y bcrypt para el cifrado de contraseñas. Permite registrar y autenticar usuarios mediante un sistema de inicio de sesión con autenticación basada en tokens.

## Descripción

El proyecto consta de dos principales funcionalidades:

- **Registro de Usuario:** Permite crear una nueva cuenta de usuario guardando los datos (nombre completo, correo electrónico y contraseña) en una base de datos MongoDB.
- **Inicio de Sesión de Usuario:** Permite a los usuarios autenticarse mediante su correo electrónico y contraseña. Se utiliza bcrypt para comparar la contraseña proporcionada con la almacenada en la base de datos y generar un token de acceso.

## Requisitos

Antes de ejecutar el proyecto, asegúrate de tener los siguientes requisitos:

- Node.js (versión 14 o superior)
- MongoDB (puede ser local o un servicio como MongoDB Atlas)
- NPM o Yarn (para gestionar dependencias)

## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/tu_usuario/nombre-del-repositorio.git
   cd nombre-del-repositorio
Instala las dependencias necesarias:

bash
Copiar código
npm install
O si prefieres Yarn:

bash
Copiar código
yarn install
Configura las variables de entorno:

Asegúrate de tener un archivo .env en la raíz del proyecto con las siguientes configuraciones:

bash
Copiar código
MONGODB_URI=mongodb://localhost:27017/mi_base_de_datos
JWT_SECRET=tu_clave_secreta_para_tokens
Inicia el servidor:

bash
Copiar código
npm start
O con Yarn:

bash
Copiar código
yarn start
Rutas disponibles
1. Registro de Usuario (POST /register)
Permite registrar un nuevo usuario.

Body (JSON):

json
Copiar código
{
  "fullName": "Nombre Completo",
  "email": "correo@ejemplo.com",
  "password": "contraseña_segura"
}
Respuesta:

201: Usuario registrado exitosamente.
500: Error interno del servidor.
2. Inicio de Sesión (POST /login)
Permite a un usuario autenticarse con su correo electrónico y contraseña.

Body (JSON):

json
Copiar código
{
  "email": "correo@ejemplo.com",
  "password": "contraseña_segura"
}
Respuesta:

200: Inicio de sesión exitoso, con el token de acceso.
401: Correo electrónico o contraseña incorrectos.
500: Error interno del servidor.
Tecnologías utilizadas
Node.js: Entorno de ejecución para JavaScript en el servidor.
Express.js: Framework de Node.js para crear la API REST.
MongoDB: Base de datos NoSQL para almacenar los usuarios.
bcrypt: Biblioteca para cifrar contraseñas de forma segura.
JWT (JSON Web Tokens): Para generar tokens de acceso (aún por implementar en el código).

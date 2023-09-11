## Documentación del Proyecto de Aplicación de Películas
Introducción
Este documento proporciona una visión general del proyecto de la Aplicación de Películas, que permite a los usuarios explorar películas populares, tendencias y más vistas. La aplicación utiliza tecnologías como React.js, TypeScript, Firebase para autenticación, y diversas bibliotecas de front-end.

## Visión General
# Objetivo del Proyecto
El objetivo de esta aplicación es proporcionar a los usuarios una experiencia de navegación fácil y atractiva para descubrir y obtener información sobre películas populares, tendencias y más vistas. También ofrece autenticación de usuarios utilizando Firebase.

## Tecnologías Principales
- React.js
- TypeScript
- Firebase (para autenticación)
- Tailwind CSS
- DaisyUI (extensión de Tailwind CSS)
- HandleUI (para formularios)
- React Router DOM (enrutamiento)
- Formik (manejo de formularios)
- Yup (validación de formularios)

## Configuración del Proyecto
# Instalación de Dependencias
Para ejecutar la aplicación, asegúrate de tener Node.js y npm (o yarn) instalados en tu máquina. Luego, sigue estos pasos:

Clona el repositorio desde GitHub.

Navega al directorio del proyecto en tu terminal.

Ejecuta el siguiente comando para instalar las dependencias:

npm install
O con Yarn
yarn install


## Configuración de Firebase
Para habilitar la autenticación con Firebase, sigue estos pasos:

Crea un proyecto en Firebase.
Configura Firebase en tu proyecto React y sigue las instrucciones proporcionadas por Firebase.
Actualiza la configuración de Firebase en tu código (por ejemplo, firebase/firebase.config.ts).

## Uso de la Aplicación
# Iniciar la Aplicación
Para iniciar la aplicación en un entorno de desarrollo local, ejecuta el siguiente comando:

npm start
O con Yarn
yarn start
La aplicación estará disponible en http://localhost:3000 en tu navegador web.

## Funcionalidades Principales
- Autenticación de Usuarios: Los usuarios pueden registrarse e iniciar sesión en la aplicación utilizando Firebase.
- Exploración de Películas: Los usuarios pueden explorar películas populares, tendencias y más vistas.
- Visualización de Detalles: Al hacer clic en una película, los usuarios pueden ver más detalles, incluyendo imágenes, sinopsis y calificaciones.
- Búsqueda de Películas: La aplicación permite a los usuarios buscar películas por título.
- Gestión de Favoritos: Los usuarios autenticados pueden agregar películas a su lista de favoritos.


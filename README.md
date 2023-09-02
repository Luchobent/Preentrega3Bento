# Gestor de Productos

## Descripción
Este proyecto consiste en un gestor de productos que permite agregar, listar, actualizar y eliminar productos. Utiliza una clase `ProductManager` para gestionar los productos y persiste los datos en un archivo JSON.

## Instalación
Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

1. Clona este repositorio en tu máquina local utilizando Git:
   ```bash
   git clone https://github.com/Luchobent/Preentrega3Bento.git
a) Asegúrate de tener Node.js instalado en tu sistema. Puedes descargarlo desde nodejs.org.

b) Abre una terminal en la carpeta raíz del proyecto.

c) Ejecuta el siguiente comando para instalar las dependencias necesarias:

bash
Copy code
npm install
d)Una vez que se completen las instalaciones, puedes iniciar el servidor con el siguiente comando:
bash
Copy code
node app.js
El servidor estará en funcionamiento y podrás acceder a él en http://localhost:3000 en tu navegador web.

Uso
Una vez que el servidor esté en funcionamiento, puedes utilizar los siguientes endpoints para gestionar los productos:

.GET /products: Obtiene la lista de productos.
.GET /products/:pid: Obtiene un producto específico por su ID.
.GET /products?limit=n: Obtiene los primeros n productos (opcional).
.POST /products: Agrega un nuevo producto (envía datos en formato JSON en el cuerpo de la solicitud).
.PUT /products/:pid: Actualiza un producto existente por su ID (envía datos en formato JSON en el cuerpo de la solicitud).
.DELETE /products/:pid: Elimina un producto por su ID.

Funcionalidades
Gestión de productos: Agregar, listar, actualizar y eliminar productos.
Consultas personalizadas: Obtener productos por ID y limitar el número de resultados.

Contribución
Si deseas contribuir a este proyecto, sigue estos pasos:

1) Haz un fork del repositorio.
2) Clona tu fork en tu máquina local.
3) Crea una rama para tus cambios: git checkout -b mi-rama.
4) Realiza tus cambios y asegúrate de escribir pruebas si es necesario.
5) Haz commit de tus cambios: git commit -m "Descripción de tus cambios".
6) Empuja tus cambios a tu fork: git push origin mi-rama.
7) Crea una solicitud de extracción (pull request) en GitHub.

Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más detalles.

Contacto
Si tienes alguna pregunta o sugerencia, no dudes en ponerte en contacto conmigo en [luchobent@email.com] o a través de mi perfil de GitHub: Luchobent.

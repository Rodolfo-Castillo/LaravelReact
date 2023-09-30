# LaravelReact

## Tabla de Contenido

1. [Requisitos](#requisitos)
2. [Intalación](#instalacion)
3. [Autores](#autores)

### Requisitos

Primeramente, sebe considerar tener instalado lo siguiente:

-   [XAMPP](https://www.apachefriends.org/es/index.html)
-   [Composer](https://getcomposer.org/)
-   [Laravel](https://laravel.com/)
-   [Docker](https://www.docker.com/)
-   [Node.Js](https://nodejs.org/es)
-   [Yarn](https://yarnpkg.com/)

## Instalación

Estos son los pasos para iniciar el proyecto:

-   Clonar el proyecto

```
$ git clone https://github.com/Rodolfo-Castillo/LaravelReact.git
```

-   Iniciar Docker, una vez iniciado, con la terminal en el directorio donde se encuentra alojado el proyecto, levantar la imagen de Docker, el archivo docker-compse-yml debe estar fuera del directorio de htdocs de XAMPP, ya sea en documentos, escritorio, ya que la carpeta que se creará con el data de postgres, no es compartida desde el directorio de XAMPP.

```
$ docker compose up
```

-   Para corroborar que la imagen termino de montarse, iniciamos en el navegador el PGADMIN, con la ruta [localhost:5050](http://localhost:5050); los datos para ingresar se encuentran en el archvio .env.example.

-   Para verificar y ver que las migraciones se realizaron con exito, se debe crear una nueva conexion, en el boton Add New Server (el usuario, contraseña y db se ecnuentran en el archivo .env.example).

-   Enseguida se deben realizar las migraciones; con la terminal se accede a la carpeta laravel, y se utiliza el siguiente comando:

```
$ php artisan migrate
```

-   Al terminar, ya podemos iniciar el servidor, con el comando:

```
$ php artisan serve
```

-   El siguiente paso es instalar todas las dependencias del front de React, con la terminal se accede a la carpeta react y se utiliza el siguiente comando:

```
$ yarn
```

-   Al terminar veremos que se creo la carpeta node_modules; ahora podremos iniciar el servidor para el front con el comando:

```
$ yarn run dev
```

-   Acceder al localhost para visualizar el front [localhost:5173](http://localhost:5173/).

## Autores

-   [@Rodolfo-Castillo](https://github.com/Rodolfo-Castillo)

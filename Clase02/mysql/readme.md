# MySQL

### Crear un contenedor con MySQL

```
docker run -d --name server-mysql mysql:8
```

### Crear un contenedor de MySQL usando variables de entorno

```
docker run -d --name server-mysql -e MYSQL_ROOT_PASSWORD=12345 -e MYSQL_DATABASE=db -e MYSQL_USER=sergio -e MYSQL_PASSWORD=12345 mysql:8
```

### Crear un contenedor de MySQL usando variables de entorno y con un mapeo del puerto 3306

```
docker run -d --name server-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=12345 -e MYSQL_DATABASE=db -e MYSQL_USER=sergio -e MYSQL_PASSWORD=12345 mysql:8
```

### Crear un contenedor de PHPMyAdmin

```
docker run -d --name client-mysql -e PMA_ARBITRARY=1 -p 8000:80 phpmyadmin
```

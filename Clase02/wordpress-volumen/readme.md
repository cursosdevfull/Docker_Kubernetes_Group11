# Wordpress

### Crear una red

```
docker network create net-wp
```

### Crear volumen nombrado

```
docker volume create vol-wp-mysql
docker volume create vol-wp-server
```

### Crear un contenedor de MySQL

```
docker run -d --name wp-mysql-server -e MYSQL_ROOT_PASSWORD=12345 -e MYSQL_DATABASE=db -e MYSQL_USER=sergio -e MYSQL_PASSWORD=12345 --network net-wp -v vol-wp-mysql:/var/lib/mysql mysql:8
```

### Crear un contenedor de PHPMyAdmin

```
docker run -d --name wp-mysql-client -e PMA_ARBITRARY=1 -p 8000:80 --network net-wp phpmyadmin
```

### Crear un contenedor de Wordpress

```
docker run --name wp-server \
-e WORDPRESS_DB_HOST=wp-mysql-server \
-e WORDPRESS_DB_USER=sergio \
-e WORDPRESS_DB_PASSWORD=12345 \
-e WORDPRESS_DB_NAME=db -p 9100:80 \
-v vol-wp-server:/var/www/html \
--network net-wp -d wordpress
```

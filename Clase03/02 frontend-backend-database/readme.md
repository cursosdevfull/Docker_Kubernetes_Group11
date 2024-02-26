# Desplegando una app (frontend + backend + mysql)

### Network

```
docker network create net-app -d bridge
```

### MySQL

```
docker run -d --name server-mysql -e MYSQL_ROOT_PASSWORD=12345 -e MYSQL_DATABASE=db -e MYSQL_USER=sergio -e MYSQL_PASSWORD=12345 -p 3307:3306 --network net-app mysql:8
```

### Frontend

```
docker run -d --name frontend --workdir /app -v ${PWD}/frontend:/app -v ${PWD}/configuration/nginx.conf:/etc/nginx/conf.d/default.conf:ro -p 8080:80 -m 12288000 --cpus 2 nginx:alpine
```

### Backend

```
docker build -f backend/Dockerfile -t backend-app ./backend
```

```
docker run -d --name backend -p 5000:4000 -e PORT=4000 -e DB_HOST=server-mysql -e DB_PORT=3306 -e DB_USER=sergio -e DB_PASS=12345 -e DB_NAME=db --network net-app backend-app
```

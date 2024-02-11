# Redis

### Crear el contenedor

```
docker run -d --name redis-server -p 6379:6379 redis:alpine
```

### Crear un cliente de redis

```
docker run -d --name redis-client -e REDIS_HOST=172.17.0.6 -p 8081:8081 rediscommander/redis-commander:latest
```

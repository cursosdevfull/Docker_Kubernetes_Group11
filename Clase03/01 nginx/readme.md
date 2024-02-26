# Desplegando una web estática usando NGINX

### Contenedor de NGINX

```
docker run -d --name server-web `
--workdir /app `
-v ${PWD}/web:/app `
-v ${PWD}/configuration/nginx.conf:/etc/nginx/conf.d/default.conf:ro `
-p 8080:80 `
-m 12288000 `
--cpus 2 `
nginx:alpine
```

```
docker run -d --name server-web `
--workdir /app `
-v ${PWD}/web:/app `
-v ${PWD}/configuration/nginx.conf:/etc/nginx/conf.d/default.conf:ro `
-p 8080:80 `
-m 12288000 `
--cpuset-cpus 0,2 `
nginx:alpine
```

```
docker run -d --name server-web `
--workdir /app `
-v ${PWD}/web:/app `
-v ${PWD}/configuration/nginx.conf:/etc/nginx/conf.d/default.conf:ro `
-p 8080:80 `
-m 12288000 `
--memory-swap 12288000 `
--cpuset-cpus 0,2 `
nginx:alpine
```

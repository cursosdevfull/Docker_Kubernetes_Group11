# Volumen

### HOST

### Volumen de tipo host

```
docker run -d --name serverweb \
-p 9400:80 \
-v D:\\Cursos\\Docker_Kubernetes_Group11\\Clase02\\web:/usr/share/nginx/html \
nginx:alpine
```

### En Git Bash

```
docker run -d --name serverweb \
-p 9400:80 \
-v $(pwd -W)/web:/usr/share/nginx/html \
nginx:alpine
```

### En Bash (en linux)

```
docker run -d --name serverweb -p 9400:80 -v $(pwd)/web:/usr/share/nginx/html nginx:alpine
```

### En Powershell

```
docker run -d --name serverweb -p 9400:80 -v ${PWD}/web:/usr/share/nginx/html nginx:alpine
```

### NOMBRADO

### Crear un volumen nombrado

```
docker volume create vol-web
```

### Crear un contenedor con un volumen

```
docker run -d --name serverweb -p 9400:80 -v vol-web:/usr/share/nginx/html nginx:alpine
```

### Inspeccionar un volumen

```
docker volume inspect vol-web
```

# ANÓNIMO

### Crear contenedor con volumen anónimo

```
docker run -d --name serverweb -p 9400:80 -v /usr/share/nginx/html nginx:alpine
```

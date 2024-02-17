# Container

### Crear contenedor con variables de entorno

```
docker run -d --name <nombre o id del contenedor> -e <nombre variable> = <valor> <nombre o id de la imagen>
```

### Crear un server con nginx y una variable de entorno

```
docker run -d --name serverweb -e username=sergio nginx:alpine
```

# Containers

### Crear un contenedor

```
docker create --name <nombre del contenedor> <nombre de la imagen | id de la imagen>:<versión o tag de la imagen>
```

### Listar contenedores ejecutándose

```
docker ps
```

### Listar contenedores ejecutándose o no

```
docker ps -a
```

### Para iniciar un contenedor

```
docker start <nombre del contenedor | id del contenedor>
```

### Para detener un contenedor

```
docker stop <nombre del contenedor | id del contenedor>
```

### Crear y ejecutar un contenedor con nombre

```
docker run --name <nombre o id del contenedor> <nombre o id de la imagen>:<versión o tag de la imagen>
```

### Crear y ejecutar un contenedor con nombre pero no vinculado

```
docker run -d --name <nombre o id del contenedor> <nombre o id de la imagen>:<versión o tag de la imagen>
```

### Inspeccionar un contenedor

```
docker inspect <nombre o id del contenedor>
```

### Eliminar contenedores

```
docker rm <nombre o id del contenedor>
docker rm -f <nombre o id del contenedor>
```

### Mapear puertos

```
docker run -d --name <nombre contenedor> -p <puerto host>:<puerto contenedor> <nombre imagen>:<versión o tag de la imagen>
```

### Mapear más de un puerto

```
docker run -d --name <nombre contenedor> -p <puerto host1>:<puerto contenedor1> -p <puerto host2>:<puerto contenedor2> <nombre imagen>:<versión o tag de la imagen>
```

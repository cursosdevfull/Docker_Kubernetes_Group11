# Networks

### Crear una red de tipo bridge

```
docker network create net-course -d bridge
```

### Listar redes

```
docker network ls
```

### Crear contenedores vinculados a una red

```
docker run -d --name server01 --network net-course nginx:alpine
docker run -d --name server02 --network net-course nginx:alpine
docker run -d --name server03 --network net-course nginx:alpine
```

### Inspeccionar una red

```
docker network inspect net-course
```

### Conectar contenedor a una red

```
docker network connect net-private server04
```

### Desconectar contenedor a una red

```
docker network disconnect net-private server03
```

### Crear un contenedor en la red host

```
docker run -d --name server05 --network host nginx:alpine
```

# Jenkins

### Crear el contenedor

```
docker run -d --name devops --publish published=8080,target=8080 jenkins/jenkins:alpine3.19-jdk21
```

### Acceder al contenedor

```
docker exec -i -t devops sh
docker exec -it devops sh
docker exec -ti devops sh
```

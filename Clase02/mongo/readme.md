# Mongo

### Crear un contenedor de MongoDB

```
docker run -d --name server-mongo -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=12345 -e MONGO_INITDB_DATABASE=db mongo:3.6.23
docker run -d --name server-mongo --env-file=environment.txt mongo:3.6.23
```

### Crear un contenedor cliente de MongoDB (mongo-express)

```
docker run -d --name client-mongo -e ME_CONFIG_MONGODB_ADMINUSERNAME=admin -e ME_CONFIG_MONGODB_ADMINPASSWORD=12345 -e ME_CONFIG_MONGODB_SERVER=172.17.0.7 -e ME_CONFIG_BASICAUTH_USERNAME=admin -e ME_CONFIG_BASICAUTH_PASSWORD -p 9100:8081 mongo-express
```

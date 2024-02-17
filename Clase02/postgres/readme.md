# Postgres

### Crear un contenedor de postgres

```
docker run -d --name server-postgres -p 5432:5432 -e POSTGRES_PASSWORD=12345 postgres:13-alpine3.18
```

### Crear un client de postgres

```
docker run -d --name client-postgres -p 9200:80 -e PGADMIN_DEFAULT_PASSWORD=12345 -e PGADMIN_DEFAULT_EMAIL=sergiohidalgocaceres@gmail.com dpage/pgadmin4
```

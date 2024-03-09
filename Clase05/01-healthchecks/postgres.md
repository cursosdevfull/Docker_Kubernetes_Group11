# Postgres

```
docker run -d --name server-postgres -e POSTGRES_PASSWORD=12345 --health-cmd="pg_isready -U postgres" --health-interval=3s --health-start-period=10s --health-retries=3 --health-timeout=10s postgres:11.21-alpine3.17
```

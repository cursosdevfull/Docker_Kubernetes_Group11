# Depuración

### Eliminar todos los contenedores detenidos, redes no usadas, imágenes huérfanas, caché huérfanas

```
docker system prune
```

### Eliminar todos los contenedores detenidos, redes no usadas, imágenes sin vincular a ningún contenedor, caché

```
docker system prune -a
```

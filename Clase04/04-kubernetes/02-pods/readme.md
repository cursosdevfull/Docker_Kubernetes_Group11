# Pods

### Ejecutar un manifiesto

```
kubectl apply -f 01-pod.yaml
```

### Para listar pods

```
kubectl get pods
kubectl get po
```

### Para describir un pod

```
kubectl describe po <nombre del pod>
```

### Para obtener el log de un pod

```
kubectl logs <nombre del pod>
kubectl logs <nombre del pod> -c <nombre del contenedor>
```

### Para eliminar un pod

```
kubectl delete po <nombre del pod>
```

### Para eliminar un pod desde el manifiesto

```
kubectl delete -f <nombre y ruta del manifiesto>
```

### Para listar los pods con sus labels

```
kubectl get po --show-labels
kubectl get po --show-labels -l app=frontend
```

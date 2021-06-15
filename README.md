# Api Github

Obtener los datos del usuario introducido por parametro de la api de github

## Instrucciones de uso

Seguir las siguientes instrucciones

### Instalación

```
npm install proyecto-1c-api-github
```

### Uso

```
const api = require('proyecto-1c-api-github');
api.obtenerDatosDeUsuario('garX64')
    .then(
        respuesta => console.log(respuesta)
    )
    .catch(error => console.log(error));
```

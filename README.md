# TO.DO LIST 
Contenido:

- [Enunciado](#enunciado)
- [Versiones](#versiones)
- [Correr Proyecto](#correr-proyecto)
- [Swagger Endpoints](#swagger-endpoints)
- [Setear entorno](#setear-entorno)
- [Tools](#tools)

## Enunciado
Desarrolla una API REST para gestionar tareas (to do list). 

- Crear una nueva tarea 
- Actualizar el estado de una tarea 
- Eliminar una tarea.
- Obtener la lista de todas las tareas. Implementando algún filtro.
- Implementa autenticación JWT para asegurarte de que solo los usuarios registrados puedan
realizar acciones en la lista de tareas. Se puede implementar un login sencillo para obtener el
token.
- Implementa paginación y ordenamiento en la lista de tareas.
- Utiliza MongoDB como base de datos para almacenar las tareas.
- Documenta la API con Swagger.

## Versiones

| Express | Mongoose | JWT |
|---|---|---|
| 4.18.2 | 8.0 | 9.0.2 |

## Correr Proyecto



- Clonar proyecto
- Setear variables de entorno
- Ejecutar "npm install"
- finalmente "npm start"
- Paralemamente crear BD en https://cloud.mongodb.com/ y tomar la URL de conexion para setearlas en las variables de entorno. 


## Swagger Endpoints

[Swagger](http://localhost:8000/doc-api/)

- **GET /task**

    Retorna todas las tareas del usuario. Paginado y ordenado segun parametros. Devuelve la pagina pedida. 

**Parámetros**

|      parametro   | Nombre | Requerido |  Tipo   | Descripción |                                                                        
|----------------:|:------------:|:--------:|:-------:|:---------------------------------------|
|    query | page | requerido | integer  | indica el nro de pagina que devuelve  |
|    query | order | requerido | string  | ASC o DESC para retornar resultados ordenados por title. | 





 RESPUESTA:
```
{
    "error": false,
    "data": {
        "tasks": [
            {
                "_id": "654b48e44984ff5abe199d2e",
                "title": "tarea 34",
                "description": "Tarea de ejempl nro 34",
                "iduser": "654b47f04984ff5abe199d22",
                "isCompleted": false,
                "__v": 0
            },
            {
                "_id": "654b48ea4984ff5abe199d30",
                "title": "tarea 35",
                "description": "Tarea de ejempl nro 35",
                "iduser": "654b47f04984ff5abe199d22",
                "isCompleted": false,
                "__v": 0
            },
            {
                "_id": "654b48ef4984ff5abe199d32",
                "title": "tarea 36",
                "description": "Tarea de ejempl nro 36",
                "iduser": "654b47f04984ff5abe199d22",
                "isCompleted": false,
                "__v": 0
            }
        ],
        "current": "2",
        "pages": 4
    }
}
```

- **POST /task/**

    Crea una nueva tarea

**Parámetros**

|      parametro   | Nombre | Requerido |  Tipo   | Descripción                                                                                                                          
|-------------------:|:-----------:|:--------:|:-------:|:--------------------------------|
|    body | title | requerido | string  | titulo de la tarea  					
|    body | description | requerido | string  | descripcion de la tarea    
|    body | isCompleted | requerido | boolean  | True: tarea completa. False: Tarea pendiente




   RESPUESTA:
```
{
    "error": false,
    "data": {
        "title": "Tarea 73",
        "description": "Tarea de ejempl nro 73",
        "iduser": "654b47f04984ff5abe199d22",
        "isCompleted": false,
        "_id": "654cddce19a65c71035c623d",
        "__v": 0
    }
}
```

- **PUT /task/:id**

    actualiza una tarea

**Parámetros**

|      parametro   | Nombre | Requerido |  Tipo   | Descripción| 
|--|-----------|-------|------|----------------------------------------|
| params | id | requerido | string  | id del usuario.  |   
|    body | title | requerido | string  | titulo de la tarea  	|				
|    body | description | requerido | string  | descripcion de la tarea |   
|    body | isCompleted | requerido | boolean  | True: tarea completa. False: Tarea pendiente |

   RESPUESTA:
```
{
    "error": false,
    "data": {
        "message": "task was updated",
        "taskUpdate": {
            "acknowledged": true,
            "modifiedCount": 1,
            "upsertedId": null,
            "upsertedCount": 0,
            "matchedCount": 1
        }
    }
}
```

- **DELETE /task/:id**

    elimina una tarea

**Parámetros**

|      parametro   | Nombre | Requerido |  Tipo   | Descripción    
|--:|:-----------:|:--------:|:-------:|:----------------------------------------|
|    params | id | requerido | string  | id del usuario.                                                            

   RESPUESTA:
```
{
    "error": false,
    "data": {
        "message": "the task has been deleted",
        "idtaskDeleted": "654786bf8b73128b032463b7",
        "deleteTask": {
            "acknowledged": true,
            "deletedCount": 1
        }
    }
}
```

- **POST /user/register**

    Crea una nuevo usuario

**Parámetros**

|      parametro   | Nombre | Requerido |  Tipo   | Descripción   |
|-------:|:-----------:|:--------:|:-------:|:--------------------------------|
|    body | user | requerido | string  | usuario |
|    body | password | requerido | string  | contrasña|


   RESPUESTA:
```
{
    "error": false,
    "data": {
        "message": "user created successfully",
        "user": "nico9"
    }
}
```

- **POST /user/login**

    Inicia sesion

**Parámetros**

|      parametro   | Nombre | Requerido |  Tipo   | Descripción   |
|-----------|-----------|-------|-------|-------------------------------------|
|    body | user | requerido | string  | usuario |
|    body | password | requerido | string  | contrasña|


   RESPUESTA:
```
{
    "error": false,
    "data": {
        "message": "successful login",
        "id": "654e223435ed02d2cf3622b4",
        "user": "nicomugas"
    }
}
```


## Setear Entorno

- Setear Variables de entorno:

  ```
	- MONGO_URI=
	- SECRET_TOKEN= 
	- PORT= 
  ```

## Tools


- bcrypt
- dotenv
- jsdoc
- jsonwebtoken
- express
- mongoose
- swagger

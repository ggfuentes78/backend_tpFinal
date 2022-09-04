# Project: TPFinal_Backend
# Introduccion

TP Final del curso de Programacion Backend

## Install

```sh
npm install
```

## Usage

```sh
npm start
```

## Run tests

```sh
npm run test
```

## Author

👤 **Gustavo Fuentes**

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/auth/signup
### Method: POST
>```
>localhost:8080/api/auth/signup
>```
### Response: 200
```json
{
    "message": "Usuario dado de alta",
    "user": "emailok@email.com"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/auth/login
### Method: POST
>```
>localhost:8080/api/auth/login?email=a@a.com&password=1
>```
### Query Params

|Param|value|
|---|---|
|email|a@a.com|
|password|1|


### Response: 200
```json
<html>
    <head>
        <title>PRODUCTOS</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" 
rel="stylesheet" 
integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" 
crossorigin="anonymous"/>
    </head>
    <body class="bg-dark text-white">
        <div id="navbar">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/api/productos"> - 3ra Entrega TP FINAL -</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" 
data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/api/productos">Productos</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <div id="barraUsuario">
            <div class="container bg-secondary mt-3">
                <form action="/api/auth/logout" method="post">
                    <button class="btn btn-danger float-end mt-2">Desloguear</button>
                </form>
                <form action="/api/carrito/undefined/detalle" method="get">
                    <button class="btn btn-success float-end mt-2">Ver Carrito</button>
                </form>
                <form action="/api/auth/62c6ca532fadda810eb6bdf8" method="get">
                    <button class="btn btn-primary float-end mt-2">Perfil</button>
                </form>
                <h1>Bienvenido 111@111!</h1>
            </div>
        </div>
        <h1 class="ms-2 mt-5">Productos
            <table class="table table-dark table-striped ms-5 px-2 mt-5 align-middle" style="width:40%;">
                <tbody>
                    <tr>
                        <th class="fs-4" id="title">TITULO</th>
                        <th class="fs-4" id="precio">PRECIO </th>
                        <th class="fs-4" id="thumbnail">TAPA</th>
                    </tr>
                    <form action="/api/carrito/undefined/productos" method="post">
                        <tr>
                            <td class="fs-5">Elden Ring</td>
                            <td class="fs-5">$2999</td>
                            <td>
                                <img class="img-thumbnail" src="https://store-images.s-microsoft.com/image/
apps.45643.14537704372270848.6ecb6038-5426-409a-8660-158d1eb64fb0.
65bbc29b-4f5d-4381-a62a-9b6178d2f342?w=310" alt="Elden Ring"/>
                            </td>
                            <td>
                                <input name="idProd" id="idProd" value="627ef5e2b90d853320732385" 
style="width:1%;visibility:hidden"/>
                            </td>
                            <td>
                                <button class="btn btn-primary" type="submit">Agregar al carrito </button>
                            </td>
                        </tr>
                    </form>
                    <form action="/api/carrito/undefined/productos" method="post">
                        <tr>
                            <td class="fs-5">PacMan Championship</td>
                            <td class="fs-5">$200</td>
                            <td>
                                <img class="img-thumbnail" src="https://store-images.s-microsoft.com/image/
apps.27325.13903780539574593.941766d2-e738-4026-9276-dc9d06c9e9ac.
0461ec06-49f4-454d-a8aa-e028b70c2362?w=310" alt="PacMan Championship"/>
                            </td>
                            <td>
                                <input name="idProd" id="idProd" value="627ef5e2b90d853320732387" 
style="width:1%;visibility:hidden"/>
                            </td>
                            <td>
                                <button class="btn btn-primary" type="submit">Agregar al carrito </button>
                            </td>
                        </tr>
                    </form>
                    <form action="/api/carrito/undefined/productos" method="post">
                        <tr>
                            <td class="fs-5">FIFA 22</td>
                            <td class="fs-5">$2000</td>
                            <td>
                                <img class="img-thumbnail" src="https://store-images.s-microsoft.com/image/
apps.27325.13903780539574593.941766d2-e738-4026-9276-dc9d06c9e9ac.
0461ec06-49f4-454d-a8aa-e028b70c2362?w=310" alt="FIFA 22"/>
                            </td>
                            <td>
                                <input name="idProd" id="idProd" value="627ef5e2b90d853320732386" 
style="width:1%;visibility:hidden"/>
                            </td>
                            <td>
                                <button class="btn btn-primary" type="submit">Agregar al carrito </button>
                            </td>
                        </tr>
                    </form>
                    <form action="/api/carrito/undefined/productos" method="post">
                        <tr>
                            <td class="fs-5">Cup Head</td>
                            <td class="fs-5">$400</td>
                            <td>
                                <img class="img-thumbnail" src="https://store-images.s-microsoft.com/image/
apps.22008.13670972585585116.b194a7d4-ad8d-4e23-ab53-349c6d12eba0.
92dfce54-5825-4bc5-a546-cb36bcd292fe?w=310" alt="Cup Head"/>
                            </td>
                            <td>
                                <input name="idProd" id="idProd" value="627ef5e2b90d85332073238c" 
style="width:1%;visibility:hidden"/>
                            </td>
                            <td>
                                <button class="btn btn-primary" type="submit">Agregar al carrito </button>
                            </td>
                        </tr>
                    </form>
                    <form action="/api/carrito/undefined/productos" method="post">
                        <tr>
                            <td class="fs-5">Star Wars Jedi: Fallen Order</td>
                            <td class="fs-5">$1300</td>
                            <td>
                                <img class="img-thumbnail" src="https://store-images.s-microsoft.com/image/
apps.52300.65392999590663672.028b6875-f925-4d40-b3a1-e44db3b4fa32.
7bcb3d0f-46fc-43ea-84d1-031bd0817da2?w=310" alt="Star Wars Jedi: Fallen 
Order"/>
                            </td>
                            <td>
                                <input name="idProd" id="idProd" value="627ef5e2b90d853320732388" 
style="width:1%;visibility:hidden"/>
                            </td>
                            <td>
                                <button class="btn btn-primary" type="submit">Agregar al carrito </button>
                            </td>
                        </tr>
                    </form>
                    <form action="/api/carrito/undefined/productos" method="post">
                        <tr>
                            <td class="fs-5">GTA V</td>
                            <td class="fs-5">$200</td>
                            <td>
                                <img class="img-thumbnail" src="https://store-images.s-microsoft.com/image/
apps.7814.68565266983380288.0f5ef871-88c0-45f7-b108-6aacbc041fcf.
b7e42789-b2bf-4b60-bf0a-f891f2f04226?w=310" alt="GTA V"/>
                            </td>
                            <td>
                                <input name="idProd" id="idProd" value="627ef5e2b90d85332073238b" 
style="width:1%;visibility:hidden"/>
                            </td>
                            <td>
                                <button class="btn btn-primary" type="submit">Agregar al carrito </button>
                            </td>
                        </tr>
                    </form>
                    <form action="/api/carrito/undefined/productos" method="post">
                        <tr>
                            <td class="fs-5">Sonic Mania</td>
                            <td class="fs-5">$1200</td>
                            <td>
                                <img class="img-thumbnail" src="https://store-images.s-microsoft.com/image/
apps.30729.63115756613719781.d2d76a5d-bdd8-43f1-b57a-94ed7313dd94.
82ae86f2-bf96-48ec-bd82-f79e488f1df8?w=310" alt="Sonic Mania"/>
                            </td>
                            <td>
                                <input name="idProd" id="idProd" value="627ef5e2b90d853320732389" 
style="width:1%;visibility:hidden"/>
                            </td>
                            <td>
                                <button class="btn btn-primary" type="submit">Agregar al carrito </button>
                            </td>
                        </tr>
                    </form>
                    <form action="/api/carrito/undefined/productos" method="post">
                        <tr>
                            <td class="fs-5">Reside Evil Village</td>
                            <td class="fs-5">$3500</td>
                            <td>
                                <img class="img-thumbnail" src="https://store-images.s-microsoft.com/image/
apps.21384.13809253632566266.a1f3ac36-ddef-4b21-8956-5d5668ac9650.
fdf71def-317c-4d65-8737-9ce6273b23fb?w=310" alt="Reside Evil Village"/>
                            </td>
                            <td>
                                <input name="idProd" id="idProd" value="627ef5e2b90d85332073238a" 
style="width:1%;visibility:hidden"/>
                            </td>
                            <td>
                                <button class="btn btn-primary" type="submit">Agregar al carrito </button>
                            </td>
                        </tr>
                    </form>
                </tbody>
            </table>
        </h1>
    </body>
</html>
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/auth/logout
### Method: POST
>```
>localhost:8080/api/auth/logout
>```
### Response: 200
```json
{
    "message": "Logout exitoso",
    "user": "emailok@email.com"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/auth/login Admin
### Method: POST
>```
>localhost:8080/api/auth/login?email=admin@a.com&password=111
>```
### Query Params

|Param|value|
|---|---|
|email|admin@a.com|
|password|111|


### Response: 200
```json
{
    "message": "Login OK",
    "user": "admin@a.com"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/auth/:id
### Method: GET
>```
>localhost:8080/api/auth/6314b36319df9359694158e2
>```
### Query Params

|Param|value|
|---|---|
|:id|null|


### Response: 200
```json
{
    "usuario": {
        "_id": "6314b36319df9359694158e2",
        "email": "emaiok@email.com",
        "password": "$2b$10$B6KQRt.kID2cAVRbWeYuhOVLr.mGjeJmd8PYkdbgG4sq8QM9KDZZO",
        "nombre": "Gustavo",
        "apellido": "Fuentes",
        "direccion": "Av. Rivadavia 4319",
        "edad": 44,
        "codPais": 54,
        "telefono": 1154256448,
        "admin": false,
        "createdAt": "2022-09-04T14:17:07.389Z",
        "updatedAt": "2022-09-04T14:17:07.736Z",
        "carrito": "6314b36319df9359694158e4"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/productos
### Method: GET
>```
>localhost:8080/api/productos
>```
### Response: 200
```json
{
    "productos": [
        {
            "_id": "630f701273bd86d8c40db5d7",
            "id": "724005f0-1309-4335-9c6c-cc53a187d71c",
            "nombre": "Red Dead Redemption 20",
            "descripcion": "RPG de accion",
            "categoria": "accion",
            "fotos": [],
            "codigo": "724005f0-1309-4335-9c6c-cc53a187d71c",
            "precio": 2500,
            "stock": 87,
            "createdAt": "2022-08-31T14:28:34.789Z",
            "updatedAt": "2022-09-03T06:38:36.097Z"
        },
        {
            "_id": "630f71c973bd86d8c40db5f6",
            "id": "4cc8552f-a098-43cc-a2b2-1d2240002c0d",
            "nombre": "Red Dead Redemption",
            "descripcion": "RPG de accion",
            "categoria": "accion",
            "fotos": [],
            "codigo": "4cc8552f-a098-43cc-a2b2-1d2240002c0d",
            "precio": 2500,
            "stock": 54,
            "createdAt": "2022-08-31T14:35:53.424Z",
            "updatedAt": "2022-08-31T23:08:46.975Z"
        },
        {
            "_id": "630f71d273bd86d8c40db5fc",
            "id": "07271433-2ac0-4888-b54b-07786a7679c8",
            "nombre": "Red Dead 4",
            "descripcion": "RPG de accion",
            "categoria": "accion",
            "fotos": [],
            "codigo": "07271433-2ac0-4888-b54b-07786a7679c8",
            "precio": 2500,
            "stock": 70,
            "createdAt": "2022-08-31T14:36:02.579Z",
            "updatedAt": "2022-09-03T05:56:34.046Z"
        },
        {
            "_id": "6310c839d316b73c8e2f4ce7",
            "id": "9595f8ef-e013-4820-806c-d11dc9ad6c26",
            "nombre": "Red Dead 42",
            "descripcion": "RPG de accion",
            "categoria": "RPG",
            "fotos": [],
            "codigo": "9595f8ef-e013-4820-806c-d11dc9ad6c26",
            "precio": 2500,
            "stock": 30,
            "createdAt": "2022-09-01T14:56:57.807Z",
            "updatedAt": "2022-09-01T14:56:57.807Z"
        },
        {
            "_id": "6310c850d316b73c8e2f4cef",
            "id": "fa734f2b-fa36-488e-9b95-96f9d7ce4c87",
            "nombre": "Red Dead zombies",
            "descripcion": "RPG de accion",
            "categoria": "Terror",
            "fotos": [],
            "codigo": "fa734f2b-fa36-488e-9b95-96f9d7ce4c87",
            "precio": 2500,
            "stock": 30,
            "createdAt": "2022-09-01T14:57:20.166Z",
            "updatedAt": "2022-09-01T14:57:20.166Z"
        },
        {
            "_id": "6310c871d316b73c8e2f4cf4",
            "id": "986ad032-477e-4a52-a6b1-a59b7dec3f8d",
            "nombre": "Red Dead walker",
            "descripcion": "RPG de accion",
            "categoria": "walking simulator",
            "fotos": [],
            "codigo": "986ad032-477e-4a52-a6b1-a59b7dec3f8d",
            "precio": 2500,
            "stock": 30,
            "createdAt": "2022-09-01T14:57:53.421Z",
            "updatedAt": "2022-09-01T14:57:53.421Z"
        },
        {
            "_id": "6312a7852c374fb6cff90743",
            "codigo": "8c336137-e351-4783-9fda-81a19adc6923",
            "nombre": "Resident Evil",
            "descripcion": "Terror",
            "categoria": "walking simulator",
            "fotos": [],
            "precio": 2500,
            "stock": 30,
            "createdAt": "2022-09-03T01:01:57.513Z",
            "updatedAt": "2022-09-03T01:01:57.513Z"
        },
        {
            "_id": "6313f20c52964efc7d0c2c07",
            "codigo": "13b15173-304a-495f-964a-15494c8d8ce5",
            "nombre": "Resident Evil Village Deluxe",
            "descripcion": "8va entrega del clasico juego de terror",
            "categoria": "Terror",
            "fotos": [
                null
            ],
            "precio": 5000,
            "stock": 12,
            "createdAt": "2022-09-04T00:32:12.561Z",
            "updatedAt": "2022-09-04T00:32:12.561Z"
        },
        {
            "_id": "6313f2be60d92d5b91055c8a",
            "codigo": "b2b66a12-817d-4419-b181-d329dfd1b19d",
            "nombre": "Resident Evil Village",
            "descripcion": "8va entrega del clasico juego de terror",
            "categoria": "Terror",
            "fotos": [
                null
            ],
            "precio": 5000,
            "stock": 12,
            "createdAt": "2022-09-04T00:35:10.311Z",
            "updatedAt": "2022-09-04T00:35:10.311Z"
        },
        {
            "_id": "6313f3e1bd69aa006baf003e",
            "codigo": "23a78184-ae45-4700-9c56-82fe38ba2ad1",
            "nombre": "Resident Evil Village1",
            "descripcion": "8va entrega del clasico juego de terror",
            "categoria": "Terror",
            "fotos": [
                "https://xbox-games-api.vercel.app/api/image/apps.8883.13809253632566266.
a1f3ac36-ddef-4b21-8956-5d5668ac9650.f7899bc8-a78e-4268-b853-83c6ff14172d?w=1160&q=70"
            ],
            "precio": 5000,
            "stock": 12,
            "createdAt": "2022-09-04T00:40:02.004Z",
            "updatedAt": "2022-09-04T00:40:02.004Z"
        },
        {
            "_id": "6313f404bd69aa006baf0042",
            "codigo": "28c08fb5-cd19-4cbf-8b7c-edee66074dab",
            "nombre": "Resident Evil Village 3",
            "descripcion": "8va entrega del clasico juego de terror",
            "categoria": "Terror",
            "fotos": [
                "https://xbox-games-api.vercel.app/api/image/apps.8883.13809253632566266.
a1f3ac36-ddef-4b21-8956-5d5668ac9650.f7899bc8-a78e-4268-b853-83c6ff14172d?w=1160&q=70, 
https://xbox-games-api.vercel.app/api/image/apps.8883.13809253632566266.
a1f3ac36-ddef-4b21-8956-5d5668ac9650.f7899bc8-a78e-4268-b853-83c6ff14172d?w=1160&q=70, 
https://xbox-games-api.vercel.app/api/image/apps.8883.13809253632566266.
a1f3ac36-ddef-4b21-8956-5d5668ac9650.f7899bc8-a78e-4268-b853-83c6ff14172d?w=1160&q=70"
            ],
            "precio": 5000,
            "stock": 12,
            "createdAt": "2022-09-04T00:40:36.691Z",
            "updatedAt": "2022-09-04T00:40:36.691Z"
        },
        {
            "_id": "6313f469bd69aa006baf0046",
            "codigo": "9525981c-d7d9-469b-bd1d-1411e8144ba4",
            "nombre": "Resident Evil Village 4",
            "descripcion": "8va entrega del clasico juego de terror",
            "categoria": "Terror",
            "fotos": [
                "\"https://xbox-games-api.vercel.app/api/image/apps.8883.13809253632566266.
a1f3ac36-ddef-4b21-8956-5d5668ac9650.f7899bc8-a78e-4268-b853-83c6ff14172d?w=1160&q=70\", 
\"https://xbox-games-api.vercel.app/api/image/apps.8883.13809253632566266.
a1f3ac36-ddef-4b21-8956-5d5668ac9650.f7899bc8-a78e-4268-b853-83c6ff14172d?w=1160&q=70\", 
\"https://xbox-games-api.vercel.app/api/image/apps.8883.13809253632566266.
a1f3ac36-ddef-4b21-8956-5d5668ac9650.f7899bc8-a78e-4268-b853-83c6ff14172d?w=1160&q=70\""
            ],
            "precio": 5000,
            "stock": 12,
            "createdAt": "2022-09-04T00:42:17.583Z",
            "updatedAt": "2022-09-04T00:42:17.583Z"
        },
        {
            "_id": "6313f5aabd69aa006baf004f",
            "codigo": "c93a9fef-7a25-46d9-b5c7-f4137b695987",
            "nombre": "Resident Evil Village 5",
            "descripcion": "8va entrega del clasico juego de terror",
            "categoria": "Terror",
            "fotos": [
                null
            ],
            "precio": 5000,
            "stock": 12,
            "createdAt": "2022-09-04T00:47:38.688Z",
            "updatedAt": "2022-09-04T00:47:38.688Z"
        },
        {
            "_id": "6313f5f65a3a3b082a8c5871",
            "codigo": "63cd9424-34d3-44a3-a0af-36109b2a709c",
            "nombre": "Resident Evil Village 6",
            "descripcion": "8va entrega del clasico juego de terror",
            "categoria": "Terror",
            "fotos": [
                "https://xbox-games-api.vercel.app/api/image/apps.8883.13809253632566266.
a1f3ac36-ddef-4b21-8956-5d5668ac9650.f7899bc8-a78e-4268-b853-83c6ff14172d?w=1160&q=70"
            ],
            "precio": 5000,
            "stock": 12,
            "createdAt": "2022-09-04T00:48:54.163Z",
            "updatedAt": "2022-09-04T00:48:54.163Z"
        }
    ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/productos/:id
### Method: GET
>```
>localhost:8080/api/productos/6313f3e1bd69aa006baf003e
>```
### Query Params

|Param|value|
|---|---|
|:id|null|


### Response: 200
```json
{
    "_id": "6313f3e1bd69aa006baf003e",
    "codigo": "23a78184-ae45-4700-9c56-82fe38ba2ad1",
    "nombre": "Resident Evil Village1",
    "descripcion": "8va entrega del clasico juego de terror",
    "categoria": "Terror",
    "fotos": [
        "https://xbox-games-api.vercel.app/api/image/apps.8883.13809253632566266.
a1f3ac36-ddef-4b21-8956-5d5668ac9650.f7899bc8-a78e-4268-b853-83c6ff14172d?w=1160&q=70"
    ],
    "precio": 5000,
    "stock": 12,
    "createdAt": "2022-09-04T00:40:02.004Z",
    "updatedAt": "2022-09-04T00:40:02.004Z"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/productos/categoria/:categoria
### Method: GET
>```
>localhost:8080/api/productos/categoria/accion
>```
### Query Params

|Param|value|
|---|---|
|||


### Response: 200
```json
[
    {
        "_id": "630f701273bd86d8c40db5d7",
        "id": "724005f0-1309-4335-9c6c-cc53a187d71c",
        "nombre": "Red Dead Redemption 20",
        "descripcion": "RPG de accion",
        "categoria": "accion",
        "fotos": [],
        "codigo": "724005f0-1309-4335-9c6c-cc53a187d71c",
        "precio": 2500,
        "stock": 87,
        "createdAt": "2022-08-31T14:28:34.789Z",
        "updatedAt": "2022-09-03T06:38:36.097Z"
    },
    {
        "_id": "630f71c973bd86d8c40db5f6",
        "id": "4cc8552f-a098-43cc-a2b2-1d2240002c0d",
        "nombre": "Red Dead Redemption",
        "descripcion": "RPG de accion",
        "categoria": "accion",
        "fotos": [],
        "codigo": "4cc8552f-a098-43cc-a2b2-1d2240002c0d",
        "precio": 2500,
        "stock": 54,
        "createdAt": "2022-08-31T14:35:53.424Z",
        "updatedAt": "2022-08-31T23:08:46.975Z"
    },
    {
        "_id": "630f71d273bd86d8c40db5fc",
        "id": "07271433-2ac0-4888-b54b-07786a7679c8",
        "nombre": "Red Dead 4",
        "descripcion": "RPG de accion",
        "categoria": "accion",
        "fotos": [],
        "codigo": "07271433-2ac0-4888-b54b-07786a7679c8",
        "precio": 2500,
        "stock": 70,
        "createdAt": "2022-08-31T14:36:02.579Z",
        "updatedAt": "2022-09-03T05:56:34.046Z"
    }
]
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/productos
### Method: POST
>```
>localhost:8080/api/productos
>```
### Response: 201
```json
{
    "message": "Se dio de alta el producto",
    "producto": {
        "codigo": "b7562fd2-ed39-4a4d-9b53-f4024ee4a247",
        "nombre": "Resident Evil 7",
        "descripcion": "7va entrega del clasico juego de terror",
        "categoria": "Terror",
        "fotos": [
            "https://xbox-games-api.vercel.app/api/image/apps.39543.71433286839923669.
1250138a-286b-4b3f-8367-3d201ae45ae9.98be5256-8976-4be8-9803-aa0dbf94abeb?w=1160&q=70"
        ],
        "precio": "2000",
        "stock": "10"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/productos/:id
### Method: DELETE
>```
>localhost:8080/api/productos/627ef5e2b90d853320732387
>```
### Response: 200
```json
{
    "message": "Producto Eliminado",
    "productos": [
        {
            "_id": "630f701273bd86d8c40db5d7",
            "id": "724005f0-1309-4335-9c6c-cc53a187d71c",
            "nombre": "Red Dead Redemption 20",
            "descripcion": "RPG de accion",
            "categoria": "accion",
            "fotos": [],
            "codigo": "724005f0-1309-4335-9c6c-cc53a187d71c",
            "precio": 2500,
            "stock": 87,
            "createdAt": "2022-08-31T14:28:34.789Z",
            "updatedAt": "2022-09-03T06:38:36.097Z"
        },
        {
            "_id": "630f71c973bd86d8c40db5f6",
            "id": "4cc8552f-a098-43cc-a2b2-1d2240002c0d",
            "nombre": "Red Dead Redemption",
            "descripcion": "RPG de accion",
            "categoria": "accion",
            "fotos": [],
            "codigo": "4cc8552f-a098-43cc-a2b2-1d2240002c0d",
            "precio": 2500,
            "stock": 54,
            "createdAt": "2022-08-31T14:35:53.424Z",
            "updatedAt": "2022-08-31T23:08:46.975Z"
        },
        {
            "_id": "630f71d273bd86d8c40db5fc",
            "id": "07271433-2ac0-4888-b54b-07786a7679c8",
            "nombre": "Red Dead 4",
            "descripcion": "RPG de accion",
            "categoria": "accion",
            "fotos": [],
            "codigo": "07271433-2ac0-4888-b54b-07786a7679c8",
            "precio": 2500,
            "stock": 70,
            "createdAt": "2022-08-31T14:36:02.579Z",
            "updatedAt": "2022-09-03T05:56:34.046Z"
        },
        {
            "_id": "6310c839d316b73c8e2f4ce7",
            "id": "9595f8ef-e013-4820-806c-d11dc9ad6c26",
            "nombre": "Red Dead 42",
            "descripcion": "RPG de accion",
            "categoria": "RPG",
            "fotos": [],
            "codigo": "9595f8ef-e013-4820-806c-d11dc9ad6c26",
            "precio": 2500,
            "stock": 30,
            "createdAt": "2022-09-01T14:56:57.807Z",
            "updatedAt": "2022-09-01T14:56:57.807Z"
        },
        {
            "_id": "6310c850d316b73c8e2f4cef",
            "id": "fa734f2b-fa36-488e-9b95-96f9d7ce4c87",
            "nombre": "Red Dead zombies",
            "descripcion": "RPG de accion",
            "categoria": "Terror",
            "fotos": [],
            "codigo": "fa734f2b-fa36-488e-9b95-96f9d7ce4c87",
            "precio": 2500,
            "stock": 30,
            "createdAt": "2022-09-01T14:57:20.166Z",
            "updatedAt": "2022-09-01T14:57:20.166Z"
        },
        {
            "_id": "6310c871d316b73c8e2f4cf4",
            "id": "986ad032-477e-4a52-a6b1-a59b7dec3f8d",
            "nombre": "Red Dead walker",
            "descripcion": "RPG de accion",
            "categoria": "walking simulator",
            "fotos": [],
            "codigo": "986ad032-477e-4a52-a6b1-a59b7dec3f8d",
            "precio": 2500,
            "stock": 30,
            "createdAt": "2022-09-01T14:57:53.421Z",
            "updatedAt": "2022-09-01T14:57:53.421Z"
        },
        {
            "_id": "6312a7852c374fb6cff90743",
            "codigo": "8c336137-e351-4783-9fda-81a19adc6923",
            "nombre": "Resident Evil",
            "descripcion": "Terror",
            "categoria": "walking simulator",
            "fotos": [],
            "precio": 2500,
            "stock": 30,
            "createdAt": "2022-09-03T01:01:57.513Z",
            "updatedAt": "2022-09-03T01:01:57.513Z"
        },
        {
            "_id": "6313f20c52964efc7d0c2c07",
            "codigo": "13b15173-304a-495f-964a-15494c8d8ce5",
            "nombre": "Resident Evil Village Deluxe",
            "descripcion": "8va entrega del clasico juego de terror",
            "categoria": "Terror",
            "fotos": [
                null
            ],
            "precio": 5000,
            "stock": 12,
            "createdAt": "2022-09-04T00:32:12.561Z",
            "updatedAt": "2022-09-04T00:32:12.561Z"
        },
        {
            "_id": "6313f2be60d92d5b91055c8a",
            "codigo": "b2b66a12-817d-4419-b181-d329dfd1b19d",
            "nombre": "Resident Evil Village",
            "descripcion": "8va entrega del clasico juego de terror",
            "categoria": "Terror",
            "fotos": [
                null
            ],
            "precio": 5000,
            "stock": 12,
            "createdAt": "2022-09-04T00:35:10.311Z",
            "updatedAt": "2022-09-04T00:35:10.311Z"
        },
        {
            "_id": "6313f3e1bd69aa006baf003e",
            "codigo": "23a78184-ae45-4700-9c56-82fe38ba2ad1",
            "nombre": "Resident Evil Village1",
            "descripcion": "8va entrega del clasico juego de terror",
            "categoria": "Terror",
            "fotos": [
                "https://xbox-games-api.vercel.app/api/image/apps.8883.13809253632566266.
a1f3ac36-ddef-4b21-8956-5d5668ac9650.f7899bc8-a78e-4268-b853-83c6ff14172d?w=1160&q=70"
            ],
            "precio": 5000,
            "stock": 12,
            "createdAt": "2022-09-04T00:40:02.004Z",
            "updatedAt": "2022-09-04T00:40:02.004Z"
        },
        {
            "_id": "6313f469bd69aa006baf0046",
            "codigo": "9525981c-d7d9-469b-bd1d-1411e8144ba4",
            "nombre": "Resident Evil Village 4",
            "descripcion": "8va entrega del clasico juego de terror",
            "categoria": "Terror",
            "fotos": [
                "\"https://xbox-games-api.vercel.app/api/image/apps.8883.13809253632566266.
a1f3ac36-ddef-4b21-8956-5d5668ac9650.f7899bc8-a78e-4268-b853-83c6ff14172d?w=1160&q=70\", 
\"https://xbox-games-api.vercel.app/api/image/apps.8883.13809253632566266.
a1f3ac36-ddef-4b21-8956-5d5668ac9650.f7899bc8-a78e-4268-b853-83c6ff14172d?w=1160&q=70\", 
\"https://xbox-games-api.vercel.app/api/image/apps.8883.13809253632566266.
a1f3ac36-ddef-4b21-8956-5d5668ac9650.f7899bc8-a78e-4268-b853-83c6ff14172d?w=1160&q=70\""
            ],
            "precio": 5000,
            "stock": 12,
            "createdAt": "2022-09-04T00:42:17.583Z",
            "updatedAt": "2022-09-04T00:42:17.583Z"
        },
        {
            "_id": "6313f5aabd69aa006baf004f",
            "codigo": "c93a9fef-7a25-46d9-b5c7-f4137b695987",
            "nombre": "Resident Evil Village 5",
            "descripcion": "8va entrega del clasico juego de terror",
            "categoria": "Terror",
            "fotos": [
                null
            ],
            "precio": 5000,
            "stock": 12,
            "createdAt": "2022-09-04T00:47:38.688Z",
            "updatedAt": "2022-09-04T00:47:38.688Z"
        },
        {
            "_id": "6313f5f65a3a3b082a8c5871",
            "codigo": "63cd9424-34d3-44a3-a0af-36109b2a709c",
            "nombre": "Resident Evil Village 6",
            "descripcion": "8va entrega del clasico juego de terror",
            "categoria": "Terror",
            "fotos": [
                "https://xbox-games-api.vercel.app/api/image/apps.8883.13809253632566266.
a1f3ac36-ddef-4b21-8956-5d5668ac9650.f7899bc8-a78e-4268-b853-83c6ff14172d?w=1160&q=70"
            ],
            "precio": 5000,
            "stock": 12,
            "createdAt": "2022-09-04T00:48:54.163Z",
            "updatedAt": "2022-09-04T00:48:54.163Z"
        },
        {
            "_id": "6314c29f5e5aee10617df2de",
            "codigo": "b7562fd2-ed39-4a4d-9b53-f4024ee4a247",
            "nombre": "Resident Evil 7",
            "descripcion": "7va entrega del clasico juego de terror",
            "categoria": "Terror",
            "fotos": [
                "https://xbox-games-api.vercel.app/api/image/apps.39543.71433286839923669.
1250138a-286b-4b3f-8367-3d201ae45ae9.98be5256-8976-4be8-9803-aa0dbf94abeb?w=1160&q=70"
            ],
            "precio": 2000,
            "stock": 10,
            "createdAt": "2022-09-04T15:22:07.018Z",
            "updatedAt": "2022-09-04T15:22:07.018Z"
        }
    ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/productos/:id
### Method: PUT
>```
>localhost:8080/api/productos/6313f469bd69aa006baf0046
>```
### Query Params

|Param|value|
|---|---|
||null|


### Response: 200
```json
{
    "message": "Producto actualizado",
    "producto": {
        "_id": "6313f469bd69aa006baf0046",
        "codigo": "9525981c-d7d9-469b-bd1d-1411e8144ba4",
        "nombre": "Resident Evil Village Gold",
        "descripcion": "8va entrega del clasico juego de terror",
        "categoria": "Terror",
        "fotos": [
            "https://xbox-games-api.vercel.app/api/image/apps.8883.13809253632566266.
a1f3ac36-ddef-4b21-8956-5d5668ac9650.f7899bc8-a78e-4268-b853-83c6ff14172d?w=1160&q=70"
        ],
        "precio": 2300,
        "stock": 12,
        "createdAt": "2022-09-04T00:42:17.583Z",
        "updatedAt": "2022-09-04T15:36:30.111Z"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/carrito/
### Method: GET
>```
>localhost:8080/api/carrito/
>```
### Response: 200
```json
{
    "_id": "6314b2f619df9359694158da",
    "usuario": "6314b2f619df9359694158d8",
    "productos": [
        {
            "_id": "6313f469bd69aa006baf0046",
            "nombre": "Resident Evil Village Gold",
            "cantidad": 2,
            "precio": 2300
        }
    ],
    "createdAt": "2022-09-04T14:15:18.232Z",
    "updatedAt": "2022-09-04T15:42:28.455Z"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/carrito/:id
### Method: GET
>```
>localhost:8080/api/carrito/6314b2f619df9359694158da
>```
### Response: 200
```json
{
    "_id": "6314b2f619df9359694158da",
    "usuario": "6314b2f619df9359694158d8",
    "productos": [
        {
            "_id": "6313f469bd69aa006baf0046",
            "nombre": "Resident Evil Village Gold",
            "cantidad": 2,
            "precio": 2300
        }
    ],
    "createdAt": "2022-09-04T14:15:18.232Z",
    "updatedAt": "2022-09-04T18:49:53.458Z"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/carrito/:id/productos
### Method: GET
>```
>localhost:8080/api/carrito/62cbb124225f730f957ff52e/productos
>```
### Response: 200
```json
{
    "productos": [
        {
            "_id": "6313f469bd69aa006baf0046",
            "nombre": "Resident Evil Village Gold",
            "cantidad": 2,
            "precio": 2300
        }
    ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/carrito/:id/productos
### Method: POST
>```
>localhost:8080/api/carrito/62cc6797fd396dbcc84840fa/productos
>```
### Query Params

|Param|value|
|---|---|
|||


### Response: 200
```json
{
    "message": "Se agrego producto al carrito",
    "carrito": {
        "_id": "6314b2f619df9359694158da",
        "usuario": "6314b2f619df9359694158d8",
        "productos": [
            {
                "_id": "6313f469bd69aa006baf0046",
                "nombre": "Resident Evil Village Gold",
                "cantidad": 2,
                "precio": 2300
            },
            {
                "_id": "630f71d273bd86d8c40db5fc",
                "nombre": "Red Dead 4",
                "cantidad": 5,
                "precio": 2500
            }
        ],
        "createdAt": "2022-09-04T14:15:18.232Z",
        "updatedAt": "2022-09-04T18:52:27.646Z"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/carrito/productos
### Method: POST
>```
>localhost:8080/api/carrito/productos
>```
### Query Params

|Param|value|
|---|---|
|||


### Response: 200
```json
{
    "message": "Se agrego producto al carrito",
    "carrito": {
        "_id": "6314b2f619df9359694158da",
        "usuario": "6314b2f619df9359694158d8",
        "productos": [
            {
                "_id": "6313f469bd69aa006baf0046",
                "nombre": "Resident Evil Village Gold",
                "cantidad": 2,
                "precio": 2300
            }
        ],
        "createdAt": "2022-09-04T14:15:18.232Z",
        "updatedAt": "2022-09-04T15:42:28.455Z"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/carrito/productos
### Method: PUT
>```
>localhost:8080/api/carrito/productos
>```
### Query Params

|Param|value|
|---|---|
|||


### Response: 200
```json
{
    "message": "Se actualizo el carrito",
    "carrito": {
        "_id": "6314b2f619df9359694158da",
        "usuario": "6314b2f619df9359694158d8",
        "productos": [
            {
                "_id": "6313f469bd69aa006baf0046",
                "nombre": "Resident Evil Village Gold",
                "cantidad": 1,
                "precio": 2300
            }
        ],
        "createdAt": "2022-09-04T14:15:18.232Z",
        "updatedAt": "2022-09-04T16:25:02.767Z"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/carrito/:id/productos/:id_prod
### Method: DELETE
>```
>localhost:8080/api/carrito/62cc6797fd396dbcc84840fa/productos/62cc710c1ccc970ad11dd836
>```
### Response: 200
```json
{
    "message": "Producto eliminado del carrito",
    "carrito": {
        "_id": "6314b2f619df9359694158da",
        "usuario": "6314b2f619df9359694158d8",
        "productos": [
            {
                "_id": "630f71d273bd86d8c40db5fc",
                "nombre": "Red Dead 4",
                "cantidad": 5,
                "precio": 2500
            }
        ],
        "createdAt": "2022-09-04T14:15:18.232Z",
        "updatedAt": "2022-09-04T19:04:40.805Z"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/carrito/productos/:id_prod
### Method: DELETE
>```
>localhost:8080/api/carrito/62cc6797fd396dbcc84840fa/productos/62cc710c1ccc970ad11dd836
>```
### Response: 200
```json
{
    "message": "Producto eliminado del carrito",
    "carrito": {
        "_id": "6314b2f619df9359694158da",
        "usuario": "6314b2f619df9359694158d8",
        "productos": [
            {
                "_id": "6312a7852c374fb6cff90743",
                "nombre": "Resident Evil",
                "cantidad": 2,
                "precio": 2500
            }
        ],
        "createdAt": "2022-09-04T14:15:18.232Z",
        "updatedAt": "2022-09-04T18:23:56.175Z"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/pedido/
### Method: GET
>```
>localhost:8080/api/pedido/myorders
>```
### Response: 200
```json
[
    {
        "estado": "Creado",
        "_id": "630f72e973bd86d8c40db62b",
        "usuario": "630f6a3fc3f12bf3614f9819",
        "productos": [
            {
                "_id": "630f701273bd86d8c40db5d7",
                "cantidad": 3
            },
            {
                "_id": "630f71c973bd86d8c40db5f6",
                "cantidad": 2
            }
        ],
        "createdAt": "2022-08-31T14:40:41.520Z",
        "updatedAt": "2022-08-31T14:40:41.520Z"
    },
    {
        "estado": "Creado",
        "_id": "630f8a82f4e745bf9bce2d28",
        "usuario": "630f6a3fc3f12bf3614f9819",
        "productos": [
            {
                "_id": "630f71c973bd86d8c40db5f6",
                "cantidad": 2,
                "precio": 2500
            }
        ],
        "createdAt": "2022-08-31T16:21:22.633Z",
        "updatedAt": "2022-08-31T16:21:22.633Z"
    },
    {
        "estado": "Creado",
        "_id": "630f8b69e2023db64df1706c",
        "usuario": "630f6a3fc3f12bf3614f9819",
        "productos": [
            {
                "_id": "630f71c973bd86d8c40db5f6",
                "cantidad": 2,
                "precio": 2500
            }
        ],
        "createdAt": "2022-08-31T16:25:13.783Z",
        "updatedAt": "2022-08-31T16:25:13.783Z"
    },
    {
        "estado": "Creado",
        "_id": "630f8bb01e3e70d54ad72fa2",
        "usuario": "630f6a51c3f12bf3614f9820",
        "productos": [
            {
                "_id": "630f71c973bd86d8c40db5f6",
                "cantidad": 2,
                "precio": 2500
            }
        ],
        "createdAt": "2022-08-31T16:26:24.762Z",
        "updatedAt": "2022-08-31T16:26:24.762Z"
    },
    {
        "estado": "Creado",
        "_id": "630f8c3b2c62b2d7265dfda0",
        "usuario": "630f6a3fc3f12bf3614f9819",
        "productos": [
            {
                "_id": "630f71c973bd86d8c40db5f6",
                "cantidad": 2,
                "precio": 2500
            }
        ],
        "createdAt": "2022-08-31T16:28:43.694Z",
        "updatedAt": "2022-08-31T16:28:43.694Z"
    },
    {
        "estado": "Creado",
        "_id": "630f938c1cec18d7d5e7b401",
        "usuario": "630f6a3fc3f12bf3614f9819",
        "productos": [
            {
                "_id": "630f71c973bd86d8c40db5f6",
                "cantidad": 4,
                "precio": 2500
            }
        ],
        "createdAt": "2022-08-31T16:59:56.299Z",
        "updatedAt": "2022-08-31T16:59:56.299Z"
    },
    {
        "estado": "Creado",
        "_id": "630f94331ce053bcb21ffe63",
        "usuario": "630f6a3fc3f12bf3614f9819",
        "productos": [
            {
                "_id": "630f71c973bd86d8c40db5f6",
                "cantidad": 2,
                "precio": 2500
            }
        ],
        "createdAt": "2022-08-31T17:02:43.067Z",
        "updatedAt": "2022-08-31T17:02:43.067Z"
    },
    {
        "estado": "Creado",
        "_id": "630f94759e7d41084557f63f",
        "usuario": "630f6a3fc3f12bf3614f9819",
        "productos": [
            {
                "_id": "630f71c973bd86d8c40db5f6",
                "cantidad": 2,
                "precio": 2500
            }
        ],
        "createdAt": "2022-08-31T17:03:49.183Z",
        "updatedAt": "2022-08-31T17:03:49.183Z"
    },
    {
        "estado": "Creado",
        "_id": "630f94ba5a5f0e5cebc58b91",
        "usuario": "630f6a3fc3f12bf3614f9819",
        "productos": [
            {
                "_id": "630f71c973bd86d8c40db5f6",
                "cantidad": 2,
                "precio": 2500
            }
        ],
        "createdAt": "2022-08-31T17:04:58.641Z",
        "updatedAt": "2022-08-31T17:04:58.641Z"
    },
    {
        "estado": "Creado",
        "_id": "630f9517dd53cd9aa5caeb13",
        "usuario": "630f6a3fc3f12bf3614f9819",
        "productos": [
            {
                "_id": "630f71c973bd86d8c40db5f6",
                "cantidad": 2,
                "precio": 2500
            }
        ],
        "createdAt": "2022-08-31T17:06:31.116Z",
        "updatedAt": "2022-08-31T17:06:31.116Z"
    },
    {
        "estado": "Creado",
        "_id": "630f9c45156f3ac128c5d657",
        "usuario": "630f6a3fc3f12bf3614f9819",
        "productos": [
            {
                "_id": "630f71c973bd86d8c40db5f6",
                "cantidad": 2,
                "precio": 2500
            }
        ],
        "createdAt": "2022-08-31T17:37:09.519Z",
        "updatedAt": "2022-08-31T17:37:09.519Z"
    },
    {
        "estado": "Creado",
        "_id": "630fa5ed184ee4c38b94137d",
        "usuario": "630f6a3fc3f12bf3614f9819",
        "productos": [
            {
                "_id": "630f71c973bd86d8c40db5f6",
                "cantidad": 2,
                "precio": 2500
            }
        ],
        "createdAt": "2022-08-31T18:18:21.376Z",
        "updatedAt": "2022-08-31T18:18:21.376Z"
    },
    {
        "estado": "Creado",
        "_id": "630fa6c6efe04991536e7200",
        "usuario": "630f6a3fc3f12bf3614f9819",
        "productos": [
            {
                "_id": "630f71c973bd86d8c40db5f6",
                "cantidad": 2,
                "precio": 2500
            }
        ],
        "createdAt": "2022-08-31T18:21:58.309Z",
        "updatedAt": "2022-08-31T18:21:58.309Z"
    },
    {
        "estado": "Creado",
        "_id": "630fa71414bf916139f65458",
        "usuario": "630f6a3fc3f12bf3614f9819",
        "productos": [
            {
                "_id": "630f71c973bd86d8c40db5f6",
                "cantidad": 2,
                "precio": 2500
            }
        ],
        "createdAt": "2022-08-31T18:23:16.116Z",
        "updatedAt": "2022-08-31T18:23:16.116Z"
    },
    {
        "estado": "Creado",
        "_id": "630fa79c1721a35bc7982398",
        "usuario": "630f6a51c3f12bf3614f9820",
        "productos": [
            {
                "_id": "630f71c973bd86d8c40db5f6",
                "cantidad": 2,
                "precio": 2500
            }
        ],
        "createdAt": "2022-08-31T18:25:32.382Z",
        "updatedAt": "2022-08-31T18:25:32.382Z"
    },
    {
        "estado": "Creado",
        "_id": "630fa7d5456567ec1cf5d107",
        "usuario": "630f6a3fc3f12bf3614f9819",
        "productos": [
            {
                "_id": "630f71c973bd86d8c40db5f6",
                "cantidad": 2,
                "precio": 2500
            }
        ],
        "createdAt": "2022-08-31T18:26:29.433Z",
        "updatedAt": "2022-08-31T18:26:29.433Z"
    },
    {
        "estado": "Creado",
        "_id": "630fa810b759ceb89635ec81",
        "usuario": "630f6a51c3f12bf3614f9820",
        "productos": [
            {
                "_id": "630f71c973bd86d8c40db5f6",
                "cantidad": 2,
                "precio": 2500
            }
        ],
        "createdAt": "2022-08-31T18:27:28.477Z",
        "updatedAt": "2022-08-31T18:27:28.477Z"
    },
    {
        "estado": "Creado",
        "_id": "630fa858a7dba6d4206a41a8",
        "usuario": "630f6a3fc3f12bf3614f9819",
        "productos": [
            {
                "_id": "630f71c973bd86d8c40db5f6",
                "cantidad": 2,
                "precio": 2500
            }
        ],
        "createdAt": "2022-08-31T18:28:40.437Z",
        "updatedAt": "2022-08-31T18:28:40.437Z"
    },
    {
        "estado": "Creado",
        "_id": "630fa8ccd371532354e95ab0",
        "usuario": "630f6a3fc3f12bf3614f9819",
        "productos": [
            {
                "_id": "630f71c973bd86d8c40db5f6",
                "cantidad": 2,
                "precio": 2500
            }
        ],
        "createdAt": "2022-08-31T18:30:36.829Z",
        "updatedAt": "2022-08-31T18:30:36.829Z"
    },
    {
        "estado": "Creado",
        "_id": "630fa92e3911d50793f489f1",
        "usuario": "630f6a3fc3f12bf3614f9819",
        "productos": [
            {
                "_id": "630f71c973bd86d8c40db5f6",
                "cantidad": 2,
                "precio": 2500
            }
        ],
        "createdAt": "2022-08-31T18:32:14.248Z",
        "updatedAt": "2022-08-31T18:32:14.248Z"
    },
    {
        "estado": "Creado",
        "_id": "630faa55660d8e0083bd4cd2",
        "usuario": "630f6a3fc3f12bf3614f9819",
        "productos": [
            {
                "_id": "630f71c973bd86d8c40db5f6",
                "cantidad": 2,
                "precio": 2500
            }
        ],
        "createdAt": "2022-08-31T18:37:09.385Z",
        "updatedAt": "2022-08-31T18:37:09.385Z"
    },
    {
        "estado": "Creado",
        "_id": "630faaa04d056e0337d7570d",
        "usuario": "630f6a3fc3f12bf3614f9819",
        "productos": [
            {
                "_id": "630f71c973bd86d8c40db5f6",
                "cantidad": 2,
                "precio": 2500
            }
        ],
        "createdAt": "2022-08-31T18:38:24.989Z",
        "updatedAt": "2022-08-31T18:38:24.989Z"
    },
    {
        "estado": "Creado",
        "_id": "630faaf4a747e0db36144be0",
        "usuario": "630f6a3fc3f12bf3614f9819",
        "productos": [
            {
                "_id": "630f71c973bd86d8c40db5f6",
                "cantidad": 2,
                "precio": 2500
            }
        ],
        "createdAt": "2022-08-31T18:39:48.352Z",
        "updatedAt": "2022-08-31T18:39:48.352Z"
    },
    {
        "estado": "Creado",
        "_id": "630fabceae1584c737f1d172",
        "usuario": "630f6a3fc3f12bf3614f9819",
        "productos": [
            {
                "_id": "630f71c973bd86d8c40db5f6",
                "cantidad": 2,
                "precio": 2500
            }
        ],
        "createdAt": "2022-08-31T18:43:26.319Z",
        "updatedAt": "2022-08-31T18:43:26.319Z"
    },
    {
        "estado": "Creado",
        "_id": "630fac25a2d1438b0d50039e",
        "usuario": "630f6a3fc3f12bf3614f9819",
        "productos": [
            {
                "_id": "630f71c973bd86d8c40db5f6",
                "cantidad": 2,
                "precio": 2500
            }
        ],
        "createdAt": "2022-08-31T18:44:53.833Z",
        "updatedAt": "2022-08-31T18:44:53.833Z"
    },
    {
        "estado": "Creado",
        "_id": "630fac82168589cd2acf5cc2",
        "usuario": "630f6a3fc3f12bf3614f9819",
        "productos": [
            {
                "_id": "630f71c973bd86d8c40db5f6",
                "cantidad": 4,
                "precio": 2500
            }
        ],
        "createdAt": "2022-08-31T18:46:26.378Z",
        "updatedAt": "2022-08-31T18:46:26.378Z"
    },
    {
        "estado": "Creado",
        "_id": "630fae12ca7fef2c4e6f57f2",
        "usuario": "630f6a3fc3f12bf3614f9819",
        "productos": [
            {
                "_id": "630f71c973bd86d8c40db5f6",
                "cantidad": 2,
                "precio": 2500
            }
        ],
        "createdAt": "2022-08-31T18:53:06.526Z",
        "updatedAt": "2022-08-31T18:53:06.526Z"
    },
    {
        "estado": "Creado",
        "_id": "630fae7824f8bbe206133454",
        "usuario": "630f6a3fc3f12bf3614f9819",
        "productos": [
            {
                "_id": "630f71c973bd86d8c40db5f6",
                "cantidad": 2,
                "precio": 2500
            }
        ],
        "createdAt": "2022-08-31T18:54:48.219Z",
        "updatedAt": "2022-08-31T18:54:48.219Z"
    },
    {
        "estado": "Creado",
        "_id": "630faee5f57a98d92a0b83b2",
        "usuario": "630f6a3fc3f12bf3614f9819",
        "productos": [
            {
                "_id": "630f71c973bd86d8c40db5f6",
                "cantidad": 2,
                "precio": 2500
            }
        ],
        "createdAt": "2022-08-31T18:56:37.240Z",
        "updatedAt": "2022-08-31T18:56:37.240Z"
    },
    {
        "estado": "Creado",
        "_id": "630faf91c2ed360e1b1bceaf",
        "usuario": "630f6a3fc3f12bf3614f9819",
        "productos": [
            {
                "_id": "630f71c973bd86d8c40db5f6",
                "cantidad": 2,
                "precio": 2500
            }
        ],
        "createdAt": "2022-08-31T18:59:29.293Z",
        "updatedAt": "2022-08-31T18:59:29.293Z"
    },
    {
        "estado": "Creado",
        "_id": "630fafddbea760148fe1bb27",
        "usuario": "630f6a3fc3f12bf3614f9819",
        "productos": [
            {
                "_id": "630f71c973bd86d8c40db5f6",
                "cantidad": 2,
                "precio": 2500
            }
        ],
        "createdAt": "2022-08-31T19:00:45.887Z",
        "updatedAt": "2022-08-31T19:00:45.887Z"
    },
    {
        "estado": "Creado",
        "_id": "630fb0ca9eadc1c05ae3730e",
        "usuario": "630f6a3fc3f12bf3614f9819",
        "productos": [
            {
                "_id": "630f71c973bd86d8c40db5f6",
                "cantidad": 2,
                "precio": 2500
            }
        ],
        "createdAt": "2022-08-31T19:04:42.994Z",
        "updatedAt": "2022-08-31T19:04:42.994Z"
    },
    {
        "estado": "Creado",
        "_id": "630fb35b1120da49153bbff5",
        "usuario": "630f6a3fc3f12bf3614f9819",
        "productos": [
            {
                "_id": "630f71c973bd86d8c40db5f6",
                "cantidad": 2,
                "precio": 2500
            }
        ],
        "createdAt": "2022-08-31T19:15:39.076Z",
        "updatedAt": "2022-08-31T19:15:39.076Z"
    },
    {
        "estado": "Creado",
        "_id": "630fb3849615c6cf0760f837",
        "usuario": "630f6a3fc3f12bf3614f9819",
        "productos": [
            {
                "_id": "630f71c973bd86d8c40db5f6",
                "cantidad": 2,
                "precio": 2500
            }
        ],
        "createdAt": "2022-08-31T19:16:20.992Z",
        "updatedAt": "2022-08-31T19:16:20.992Z"
    },
    {
        "estado": "Creado",
        "_id": "630fe9e32a179ea521d42baf",
        "usuario": "630f6a3fc3f12bf3614f9819",
        "productos": [
            {
                "_id": "630f71c973bd86d8c40db5f6",
                "cantidad": 2,
                "precio": 2500
            }
        ],
        "createdAt": "2022-08-31T23:08:19.598Z",
        "updatedAt": "2022-08-31T23:08:19.598Z"
    },
    {
        "estado": "Creado",
        "_id": "630fea3b2a179ea521d42bc6",
        "usuario": "630f6a3fc3f12bf3614f9819",
        "productos": [
            {
                "_id": "630f71c973bd86d8c40db5f6",
                "cantidad": 2,
                "precio": 2500
            },
            {
                "_id": "630f701273bd86d8c40db5d7",
                "cantidad": 3,
                "precio": 2500
            },
            {
                "_id": "630f71d273bd86d8c40db5fc",
                "cantidad": 4,
                "precio": 2500
            }
        ],
        "createdAt": "2022-08-31T23:09:47.138Z",
        "updatedAt": "2022-08-31T23:09:47.138Z"
    },
    {
        "estado": "Creado",
        "_id": "630fea602a179ea521d42bd3",
        "usuario": "630f6a3fc3f12bf3614f9819",
        "productos": [
            {
                "_id": "630f71d273bd86d8c40db5fc",
                "cantidad": 4,
                "precio": 2500
            }
        ],
        "createdAt": "2022-08-31T23:10:24.934Z",
        "updatedAt": "2022-08-31T23:10:24.934Z"
    },
    {
        "estado": "Creado",
        "_id": "630feaa5974c40f78e9714ea",
        "usuario": "630f6a3fc3f12bf3614f9819",
        "productos": [
            {
                "_id": "630f71d273bd86d8c40db5fc",
                "cantidad": 4,
                "precio": 2500
            }
        ],
        "createdAt": "2022-08-31T23:11:33.389Z",
        "updatedAt": "2022-08-31T23:11:33.389Z"
    },
    {
        "estado": "Creado",
        "_id": "630fec80974c40f78e9714f5",
        "usuario": "630f6a3fc3f12bf3614f9819",
        "productos": [
            {
                "_id": "630f71d273bd86d8c40db5fc",
                "cantidad": 4,
                "precio": 2500
            }
        ],
        "createdAt": "2022-08-31T23:19:28.092Z",
        "updatedAt": "2022-08-31T23:19:28.092Z"
    },
    {
        "estado": "Creado",
        "_id": "630fecfb974c40f78e9714fb",
        "usuario": "630f6a3fc3f12bf3614f9819",
        "productos": [],
        "createdAt": "2022-08-31T23:21:31.846Z",
        "updatedAt": "2022-08-31T23:21:31.846Z"
    },
    {
        "estado": "Creado",
        "_id": "630fef0d2626d1e8e6aa33bf",
        "usuario": "630f6a3fc3f12bf3614f9819",
        "productos": [
            {
                "_id": "630f71d273bd86d8c40db5fc",
                "cantidad": 4,
                "precio": 2500
            }
        ],
        "createdAt": "2022-08-31T23:30:21.198Z",
        "updatedAt": "2022-08-31T23:30:21.198Z"
    },
    {
        "_id": "630ff066ea7bfa5f268552d3",
        "usuario": "630f6a3fc3f12bf3614f9819",
        "productos": [
            {
                "_id": "630f71d273bd86d8c40db5fc",
                "cantidad": 4,
                "precio": 2500
            }
        ],
        "direccionEntrega": "Av. Rivadavia 1234",
        "estado": "Creado",
        "createdAt": "2022-08-31T23:36:06.348Z",
        "updatedAt": "2022-08-31T23:36:06.348Z"
    },
    {
        "_id": "630ff0aeea7bfa5f268552de",
        "usuario": "630f6a3fc3f12bf3614f9819",
        "productos": [
            {
                "_id": "630f71d273bd86d8c40db5fc",
                "cantidad": 4,
                "precio": 2500
            }
        ],
        "direccionEntrega": "rewr",
        "estado": "Creado",
        "createdAt": "2022-08-31T23:37:18.616Z",
        "updatedAt": "2022-08-31T23:37:18.616Z"
    },
    {
        "_id": "6310069f4ea6a9271e47fe1b",
        "usuario": "630f6a51c3f12bf3614f9820",
        "productos": [
            {
                "_id": "630f71d273bd86d8c40db5fc",
                "cantidad": 35,
                "precio": 2500
            }
        ],
        "direccionEntrega": "rewr",
        "estado": "Creado",
        "createdAt": "2022-09-01T01:10:55.782Z",
        "updatedAt": "2022-09-01T01:10:55.782Z"
    },
    {
        "_id": "63100c0b284cb3a9d6b2c1e3",
        "usuario": "630f6a3fc3f12bf3614f9819",
        "productos": [
            {
                "_id": "630f71d273bd86d8c40db5fc",
                "cantidad": 70,
                "precio": 2500
            }
        ],
        "direccionEntrega": "rewr",
        "estado": "Creado",
        "createdAt": "2022-09-01T01:34:03.323Z",
        "updatedAt": "2022-09-01T01:34:03.323Z"
    },
    {
        "_id": "63100cce284cb3a9d6b2c1fa",
        "usuario": "630f6a3fc3f12bf3614f9819",
        "productos": [
            {
                "_id": "630f71d273bd86d8c40db5fc",
                "nombre": "Red Dead 4",
                "cantidad": 5,
                "precio": 2500
            }
        ],
        "direccionEntrega": "rewr",
        "estado": "Creado",
        "createdAt": "2022-09-01T01:37:18.680Z",
        "updatedAt": "2022-09-01T01:37:18.680Z"
    },
    {
        "_id": "63100d958340e977a004f3a5",
        "usuario": "630f6a3fc3f12bf3614f9819",
        "productos": [
            {
                "_id": "630f71d273bd86d8c40db5fc",
                "nombre": "Red Dead 4",
                "cantidad": 15,
                "precio": 2500
            },
            {
                "_id": "630f701273bd86d8c40db5d7",
                "nombre": "Red Dead Redemption 20",
                "cantidad": 10,
                "precio": 2500
            }
        ],
        "direccionEntrega": "rewr",
        "estado": "Creado",
        "createdAt": "2022-09-01T01:40:37.905Z",
        "updatedAt": "2022-09-01T01:40:37.905Z"
    },
    {
        "_id": "63136ef1b0f96dfa51147bba",
        "usuario": "630f6a3fc3f12bf3614f9819",
        "productos": [
            {
                "_id": "630f701273bd86d8c40db5d7",
                "nombre": "Red Dead Redemption 20",
                "cantidad": 22,
                "precio": 2500
            },
            {
                "_id": "630f71d273bd86d8c40db5fc",
                "nombre": "Red Dead 4",
                "cantidad": 5,
                "precio": 2500
            }
        ],
        "direccionEntrega": "rewr",
        "estado": "Creado",
        "createdAt": "2022-09-03T15:12:49.758Z",
        "updatedAt": "2022-09-03T15:12:49.758Z"
    },
    {
        "_id": "6314edefaa31d63d87250ce6",
        "usuario": "6314b2f619df9359694158d8",
        "productos": [
            {
                "_id": "6312a7852c374fb6cff90743",
                "nombre": "Resident Evil",
                "cantidad": 2,
                "precio": 2500
            }
        ],
        "direccionEntrega": "Av. Rivadavia 4319",
        "estado": "Creado",
        "createdAt": "2022-09-04T18:26:55.858Z",
        "updatedAt": "2022-09-04T18:26:55.858Z"
    },
    {
        "_id": "6314ee80aa31d63d87250cf3",
        "usuario": "6314b2f619df9359694158d8",
        "productos": [
            {
                "_id": "6313f469bd69aa006baf0046",
                "nombre": "Resident Evil Village Gold",
                "cantidad": 2,
                "precio": 2300
            }
        ],
        "direccionEntrega": "Av. Rivadavia 4319",
        "estado": "Creado",
        "createdAt": "2022-09-04T18:29:20.529Z",
        "updatedAt": "2022-09-04T18:29:20.529Z"
    }
]
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/pedido/ :id/productos
### Method: GET
>```
>localhost:8080/api/pedido/6314edefaa31d63d87250ce6/productos
>```
### Response: 200
```json
{
    "productos": [
        {
            "_id": "630f71c973bd86d8c40db5f6",
            "cantidad": 2,
            "precio": 2500
        }
    ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/pedido/myorders
### Method: GET
>```
>localhost:8080/api/pedido/myorders
>```
### Response: 200
```json
[
    {
        "_id": "6314edefaa31d63d87250ce6",
        "usuario": "6314b2f619df9359694158d8",
        "productos": [
            {
                "_id": "6312a7852c374fb6cff90743",
                "nombre": "Resident Evil",
                "cantidad": 2,
                "precio": 2500
            }
        ],
        "direccionEntrega": "Av. Rivadavia 4319",
        "estado": "Creado",
        "createdAt": "2022-09-04T18:26:55.858Z",
        "updatedAt": "2022-09-04T18:26:55.858Z"
    },
    {
        "_id": "6314ee80aa31d63d87250cf3",
        "usuario": "6314b2f619df9359694158d8",
        "productos": [
            {
                "_id": "6313f469bd69aa006baf0046",
                "nombre": "Resident Evil Village Gold",
                "cantidad": 2,
                "precio": 2300
            }
        ],
        "direccionEntrega": "Av. Rivadavia 4319",
        "estado": "Creado",
        "createdAt": "2022-09-04T18:29:20.529Z",
        "updatedAt": "2022-09-04T18:29:20.529Z"
    }
]
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/pedido/last
### Method: GET
>```
>localhost:8080/api/pedido/last
>```
### Response: 200
```json
[
    {
        "_id": "6314edefaa31d63d87250ce6",
        "usuario": "6314b2f619df9359694158d8",
        "productos": [
            {
                "_id": "6312a7852c374fb6cff90743",
                "nombre": "Resident Evil",
                "cantidad": 2,
                "precio": 2500
            }
        ],
        "direccionEntrega": "Av. Rivadavia 4319",
        "estado": "Creado",
        "createdAt": "2022-09-04T18:26:55.858Z",
        "updatedAt": "2022-09-04T18:26:55.858Z"
    }
]
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/pedido/
### Method: POST
>```
>localhost:8080/api/pedido/
>```
### Response: 200
```json
{
    "message": "Pedido creado",
    "pedido": {
        "usuario": "6314b2f619df9359694158d8",
        "productos": [
            {
                "_id": "6312a7852c374fb6cff90743",
                "nombre": "Resident Evil",
                "cantidad": 2,
                "precio": 2500
            }
        ],
        "direccionEntrega": "Av. Rivadavia 4319",
        "estado": "Creado"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/images/upload
### Method: POST
>```
>localhost:8080/api/images/upload
>```
### Body formdata

|Param|value|Type|
|---|---|---|
||/C:/auto1b.jpg|file|


### Response: 200
```json
1662325982113-any-name-auto1b.jpg
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/images/:id
### Method: GET
>```
>localhost:8080/api/images/6310279aec8f3f2c47347d69
>```
### Body formdata

|Param|value|Type|
|---|---|---|
||/C:/auto1b.jpg|file|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/images/file/:filename
### Method: GET
>```
>localhost:8080/api/images/file/1662003098781-any-name-auto1b.jpg
>```
### Body formdata

|Param|value|Type|
|---|---|---|
||/C:/auto1b.jpg|file|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)

# Project: TPFinal_Backend
# Introduccion

3ra Entrega del TP FInal del curso de Programacion Backend

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

## End-point: localhost:8080/api/auth/login
Renderiza formulario de login
### Method: GET
>```
>localhost:8080/api/auth/login
>```
### Body (**raw**)

```json

```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: localhost:8080/api/auth/signup
Renderiza formulario de registro de usuario
### Method: GET
>```
>localhost:8080/api/auth/signup
>```
### Body (**raw**)

```json

```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/auth/login
### Method: POST
>```
>localhost:8080/api/auth/login?email=111@111&password=111
>```
### Query Params

|Param|value|
|---|---|
|email|111@111|
|password|111|


### Response: 200
```json
<html>
    <head>
        <title>PRODUCTOS</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
    </head>
    <body class="bg-dark text-white">
        <div id="navbar">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/api/productos"> - 3ra Entrega TP FINAL -</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
                                <img class="img-thumbnail" src="https://store-images.s-microsoft.com/image/apps.45643.14537704372270848.6ecb6038-5426-409a-8660-158d1eb64fb0.65bbc29b-4f5d-4381-a62a-9b6178d2f342?w=310" alt="Elden Ring"/>
                            </td>
                            <td>
                                <input name="idProd" id="idProd" value="627ef5e2b90d853320732385" style="width:1%;visibility:hidden"/>
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
                                <img class="img-thumbnail" src="https://store-images.s-microsoft.com/image/apps.27325.13903780539574593.941766d2-e738-4026-9276-dc9d06c9e9ac.0461ec06-49f4-454d-a8aa-e028b70c2362?w=310" alt="PacMan Championship"/>
                            </td>
                            <td>
                                <input name="idProd" id="idProd" value="627ef5e2b90d853320732387" style="width:1%;visibility:hidden"/>
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
                                <img class="img-thumbnail" src="https://store-images.s-microsoft.com/image/apps.27325.13903780539574593.941766d2-e738-4026-9276-dc9d06c9e9ac.0461ec06-49f4-454d-a8aa-e028b70c2362?w=310" alt="FIFA 22"/>
                            </td>
                            <td>
                                <input name="idProd" id="idProd" value="627ef5e2b90d853320732386" style="width:1%;visibility:hidden"/>
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
                                <img class="img-thumbnail" src="https://store-images.s-microsoft.com/image/apps.22008.13670972585585116.b194a7d4-ad8d-4e23-ab53-349c6d12eba0.92dfce54-5825-4bc5-a546-cb36bcd292fe?w=310" alt="Cup Head"/>
                            </td>
                            <td>
                                <input name="idProd" id="idProd" value="627ef5e2b90d85332073238c" style="width:1%;visibility:hidden"/>
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
                                <img class="img-thumbnail" src="https://store-images.s-microsoft.com/image/apps.52300.65392999590663672.028b6875-f925-4d40-b3a1-e44db3b4fa32.7bcb3d0f-46fc-43ea-84d1-031bd0817da2?w=310" alt="Star Wars Jedi: Fallen Order"/>
                            </td>
                            <td>
                                <input name="idProd" id="idProd" value="627ef5e2b90d853320732388" style="width:1%;visibility:hidden"/>
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
                                <img class="img-thumbnail" src="https://store-images.s-microsoft.com/image/apps.7814.68565266983380288.0f5ef871-88c0-45f7-b108-6aacbc041fcf.b7e42789-b2bf-4b60-bf0a-f891f2f04226?w=310" alt="GTA V"/>
                            </td>
                            <td>
                                <input name="idProd" id="idProd" value="627ef5e2b90d85332073238b" style="width:1%;visibility:hidden"/>
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
                                <img class="img-thumbnail" src="https://store-images.s-microsoft.com/image/apps.30729.63115756613719781.d2d76a5d-bdd8-43f1-b57a-94ed7313dd94.82ae86f2-bf96-48ec-bd82-f79e488f1df8?w=310" alt="Sonic Mania"/>
                            </td>
                            <td>
                                <input name="idProd" id="idProd" value="627ef5e2b90d853320732389" style="width:1%;visibility:hidden"/>
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
                                <img class="img-thumbnail" src="https://store-images.s-microsoft.com/image/apps.21384.13809253632566266.a1f3ac36-ddef-4b21-8956-5d5668ac9650.fdf71def-317c-4d65-8737-9ce6273b23fb?w=310" alt="Reside Evil Village"/>
                            </td>
                            <td>
                                <input name="idProd" id="idProd" value="627ef5e2b90d85332073238a" style="width:1%;visibility:hidden"/>
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

## End-point: /api/auth/signup
### Method: POST
>```
>localhost:8080/api/auth/signup
>```
### Response: 200
```json
<html>
    <head>
        <title>FORMULARIO DE INGRESO</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
    </head>
    <body class="bg-dark text-white">
        <div class="container mt-3">
            <div>
                <h1>Login de Usuario</h1>
                <br/>
                <form action="/api/auth/login" method="post" autocomplete="off">
                    <div class="form-group">
                        <label for="email">Ingrese su email</label>
                        <input class="form-control" id="email" type="email" name="email" required="required"/>
                        <label for="password">Ingrese su clave</label>
                        <input class="form-control" id="password" type="text" name="password" required="required"/>
                        <br/>
                    </div>
                    <button class="btn btn-primary">Ingresar </button>
                </form>
                <form class="ms-4 mt-5" method="link" action="/api/auth/signup" style="width:50%;">
                    <div></div>
                    <button class="btn btn-primary" type="submit">Registrarse</button>
                </form>
            </div>
        </div>
    </body>
</html>
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/auth/:id
### Method: GET
>```
>localhost:8080/api/auth/62cc6797fd396dbcc84840f8
>```
### Query Params

|Param|value|
|---|---|
|:id|null|


### Response: 200
```json
<html>
    <head>
        <title>Perfil</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
    </head>
    <body class="bg-dark text-white">
        <div id="navbar">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/api/productos"> - 3ra Entrega TP FINAL -</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
        <h2 class="ms-2 mt-5">Datos del Usuario
            <h5>Email:  aa@aa</h5>
            <h5>Nombre:  Gustavo </h5>
            <h5>Apellido:  Fuentes</h5>
            <h5>Direccion:  Av. Rivadavia 111</h5>
            <h5>Edad:  44</h5>
            <h5>Telefono: +54  1154256448 </h5>
            <img class="img-thumbnail" src="/333.jpg" alt="aa@aa"/>
        </h2>
    </body>
</html>
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/productos
### Method: GET
>```
>localhost:8080/api/productos
>```
### Response: 200
```json
<html>
    <head>
        <title>PRODUCTOS</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
    </head>
    <body class="bg-dark text-white">
        <div id="navbar">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/api/productos"> - 3ra Entrega TP FINAL -</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
                                <img class="img-thumbnail" src="https://store-images.s-microsoft.com/image/apps.45643.14537704372270848.6ecb6038-5426-409a-8660-158d1eb64fb0.65bbc29b-4f5d-4381-a62a-9b6178d2f342?w=310" alt="Elden Ring"/>
                            </td>
                            <td>
                                <input name="idProd" id="idProd" value="627ef5e2b90d853320732385" style="width:1%;visibility:hidden"/>
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
                                <img class="img-thumbnail" src="https://store-images.s-microsoft.com/image/apps.27325.13903780539574593.941766d2-e738-4026-9276-dc9d06c9e9ac.0461ec06-49f4-454d-a8aa-e028b70c2362?w=310" alt="PacMan Championship"/>
                            </td>
                            <td>
                                <input name="idProd" id="idProd" value="627ef5e2b90d853320732387" style="width:1%;visibility:hidden"/>
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
                                <img class="img-thumbnail" src="https://store-images.s-microsoft.com/image/apps.27325.13903780539574593.941766d2-e738-4026-9276-dc9d06c9e9ac.0461ec06-49f4-454d-a8aa-e028b70c2362?w=310" alt="FIFA 22"/>
                            </td>
                            <td>
                                <input name="idProd" id="idProd" value="627ef5e2b90d853320732386" style="width:1%;visibility:hidden"/>
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
                                <img class="img-thumbnail" src="https://store-images.s-microsoft.com/image/apps.22008.13670972585585116.b194a7d4-ad8d-4e23-ab53-349c6d12eba0.92dfce54-5825-4bc5-a546-cb36bcd292fe?w=310" alt="Cup Head"/>
                            </td>
                            <td>
                                <input name="idProd" id="idProd" value="627ef5e2b90d85332073238c" style="width:1%;visibility:hidden"/>
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
                                <img class="img-thumbnail" src="https://store-images.s-microsoft.com/image/apps.52300.65392999590663672.028b6875-f925-4d40-b3a1-e44db3b4fa32.7bcb3d0f-46fc-43ea-84d1-031bd0817da2?w=310" alt="Star Wars Jedi: Fallen Order"/>
                            </td>
                            <td>
                                <input name="idProd" id="idProd" value="627ef5e2b90d853320732388" style="width:1%;visibility:hidden"/>
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
                                <img class="img-thumbnail" src="https://store-images.s-microsoft.com/image/apps.7814.68565266983380288.0f5ef871-88c0-45f7-b108-6aacbc041fcf.b7e42789-b2bf-4b60-bf0a-f891f2f04226?w=310" alt="GTA V"/>
                            </td>
                            <td>
                                <input name="idProd" id="idProd" value="627ef5e2b90d85332073238b" style="width:1%;visibility:hidden"/>
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
                                <img class="img-thumbnail" src="https://store-images.s-microsoft.com/image/apps.30729.63115756613719781.d2d76a5d-bdd8-43f1-b57a-94ed7313dd94.82ae86f2-bf96-48ec-bd82-f79e488f1df8?w=310" alt="Sonic Mania"/>
                            </td>
                            <td>
                                <input name="idProd" id="idProd" value="627ef5e2b90d853320732389" style="width:1%;visibility:hidden"/>
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
                                <img class="img-thumbnail" src="https://store-images.s-microsoft.com/image/apps.21384.13809253632566266.a1f3ac36-ddef-4b21-8956-5d5668ac9650.fdf71def-317c-4d65-8737-9ce6273b23fb?w=310" alt="Reside Evil Village"/>
                            </td>
                            <td>
                                <input name="idProd" id="idProd" value="627ef5e2b90d85332073238a" style="width:1%;visibility:hidden"/>
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

## End-point: /api/productos/:id
### Method: GET
>```
>localhost:8080/api/productos/627ef5e2b90d85332073238c
>```
### Query Params

|Param|value|
|---|---|
|:id|null|


### Response: 200
```json
{
    "_id": "627ef5e2b90d85332073238c",
    "id": "e70a7b44-13c4-40d9-a636-a7eefc6ae352",
    "timestamp": "1650813712386",
    "nombre": "Cup Head",
    "descripcion": "lalalaee huhusss",
    "codigo": "e70a7b44-13c4-40d9-a636-a7eefc6ae352",
    "foto": "https://store-images.s-microsoft.com/image/apps.22008.13670972585585116.b194a7d4-ad8d-4e23-ab53-349c6d12eba0.92dfce54-5825-4bc5-a546-cb36bcd292fe?w=310",
    "precio": 400,
    "stock": 12
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/productos
### Method: POST
>```
>localhost:8080/api/productos
>```
### Response: 200
```json
{
    "msg": "Se dio de alta el producto",
    "producto": {
        "id": "65d67c02-9f17-4f35-880e-66f986a3a116",
        "timestamp": 1657565452077,
        "nombre": "Red Dead Redemption 2",
        "descripcion": "RPG de accion",
        "codigo": "65d67c02-9f17-4f35-880e-66f986a3a116",
        "foto": "https://xbox-games-api.vercel.app/api/image/apps.13625.68182501197884443.ac728a87-7bc1-4a0d-8bc6-0712072da93c.f644649a-f93e-439f-9b08-44ec582d848d?w=1160&q=70",
        "precio": "2500",
        "stock": "3"
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
    "msg": "Producto Eliminado",
    "productos": [
        {
            "_id": "627ef5e2b90d853320732385",
            "id": "071df419-6963-4503-851f-558d766f5c60",
            "timestamp": "1650418915596",
            "nombre": "Elden Ring",
            "descripcion": "descripcion de Elden Ring",
            "foto": "https://store-images.s-microsoft.com/image/apps.45643.14537704372270848.6ecb6038-5426-409a-8660-158d1eb64fb0.65bbc29b-4f5d-4381-a62a-9b6178d2f342?w=310",
            "codigo": "071df419-6963-4503-851f-558d766f5c60",
            "precio": 2999,
            "stock": 10
        },
        {
            "_id": "627ef5e2b90d853320732386",
            "id": "4abca11e-19c3-486b-9554-602878f369f9",
            "timestamp": "1650418995886",
            "nombre": "FIFA 22",
            "descripcion": "lalala",
            "codigo": "4abca11e-19c3-486b-9554-602878f369f9",
            "foto": "https://store-images.s-microsoft.com/image/apps.27325.13903780539574593.941766d2-e738-4026-9276-dc9d06c9e9ac.0461ec06-49f4-454d-a8aa-e028b70c2362?w=310",
            "precio": 2000,
            "stock": 5
        },
        {
            "_id": "627ef5e2b90d85332073238c",
            "id": "e70a7b44-13c4-40d9-a636-a7eefc6ae352",
            "timestamp": "1650813712386",
            "nombre": "Cup Head",
            "descripcion": "lalalaee huhusss",
            "codigo": "e70a7b44-13c4-40d9-a636-a7eefc6ae352",
            "foto": "https://store-images.s-microsoft.com/image/apps.22008.13670972585585116.b194a7d4-ad8d-4e23-ab53-349c6d12eba0.92dfce54-5825-4bc5-a546-cb36bcd292fe?w=310",
            "precio": 400,
            "stock": 12
        },
        {
            "_id": "627ef5e2b90d853320732388",
            "id": "bc5c790c-1627-41a3-9caa-d035f62fcfb1",
            "timestamp": "1650419264893",
            "nombre": "Star Wars Jedi: Fallen Order",
            "descripcion": "lalala",
            "codigo": "bc5c790c-1627-41a3-9caa-d035f62fcfb1",
            "foto": "https://store-images.s-microsoft.com/image/apps.52300.65392999590663672.028b6875-f925-4d40-b3a1-e44db3b4fa32.7bcb3d0f-46fc-43ea-84d1-031bd0817da2?w=310",
            "precio": 1300,
            "stock": 7
        },
        {
            "_id": "627ef5e2b90d85332073238b",
            "id": "ab26471c-d3d5-40ee-b76e-3bc297474bb4",
            "timestamp": "1650419416351",
            "nombre": "GTA V",
            "descripcion": "lalala",
            "codigo": "ab26471c-d3d5-40ee-b76e-3bc297474bb4",
            "foto": "https://store-images.s-microsoft.com/image/apps.7814.68565266983380288.0f5ef871-88c0-45f7-b108-6aacbc041fcf.b7e42789-b2bf-4b60-bf0a-f891f2f04226?w=310",
            "precio": 200,
            "stock": 9
        },
        {
            "_id": "627ef5e2b90d853320732389",
            "id": "8358b325-ec2c-4042-80b5-ccecd31ab7dd",
            "timestamp": "1650419309643",
            "nombre": "Sonic Mania",
            "descripcion": "lalala",
            "codigo": "8358b325-ec2c-4042-80b5-ccecd31ab7dd",
            "foto": "https://store-images.s-microsoft.com/image/apps.30729.63115756613719781.d2d76a5d-bdd8-43f1-b57a-94ed7313dd94.82ae86f2-bf96-48ec-bd82-f79e488f1df8?w=310",
            "precio": 1200,
            "stock": 4
        },
        {
            "_id": "627ef5e2b90d85332073238a",
            "id": "34c83610-2d6d-4fa4-b899-13931e051466",
            "timestamp": "1650419332126",
            "nombre": "Reside Evil Village",
            "descripcion": "lalala",
            "codigo": "34c83610-2d6d-4fa4-b899-13931e051466",
            "foto": "https://store-images.s-microsoft.com/image/apps.21384.13809253632566266.a1f3ac36-ddef-4b21-8956-5d5668ac9650.fdf71def-317c-4d65-8737-9ce6273b23fb?w=310",
            "precio": 3500,
            "stock": 3
        },
        {
            "_id": "62cc710c1ccc970ad11dd836",
            "id": "65d67c02-9f17-4f35-880e-66f986a3a116",
            "timestamp": "1657565452077",
            "nombre": "Red Dead Redemption 2",
            "descripcion": "RPG de accion",
            "foto": "https://xbox-games-api.vercel.app/api/image/apps.13625.68182501197884443.ac728a87-7bc1-4a0d-8bc6-0712072da93c.f644649a-f93e-439f-9b08-44ec582d848d?w=1160&q=70",
            "codigo": "65d67c02-9f17-4f35-880e-66f986a3a116",
            "precio": 2500,
            "stock": 3,
            "createdAt": "2022-07-11T18:50:52.095Z",
            "updatedAt": "2022-07-11T18:50:52.095Z"
        }
    ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/productos/:id
### Method: PUT
>```
>localhost:8080/api/productos/62cc710c1ccc970ad11dd836
>```
### Query Params

|Param|value|
|---|---|
||null|


### Response: 200
```json
{
    "_id": "62cc710c1ccc970ad11dd836",
    "id": "65d67c02-9f17-4f35-880e-66f986a3a116",
    "timestamp": "1657565452077",
    "nombre": "Red Dead Redemption 2",
    "descripcion": "Accion en el lejano oeste!",
    "foto": "https://xbox-games-api.vercel.app/api/image/apps.13625.68182501197884443.ac728a87-7bc1-4a0d-8bc6-0712072da93c.f644649a-f93e-439f-9b08-44ec582d848d?w=1160&q=70",
    "codigo": "65d67c02-9f17-4f35-880e-66f986a3a116",
    "precio": 2000,
    "stock": 5,
    "createdAt": "2022-07-11T18:50:52.095Z",
    "updatedAt": "2022-07-11T18:50:52.095Z"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/carrito/:id/detalle
### Method: GET
>```
>localhost:8080/api/carrito/62cbb124225f730f957ff52e/detalle
>```
### Response: 200
```json
<html>
    <head>
        <title>CARRITO</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
    </head>
    <body class="bg-dark text-white">
        <div id="navbar">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/api/productos"> - 3ra Entrega TP FINAL -</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
        <h1 class="ms-2 mt-5">Carrito
            <table class="table table-dark table-striped ms-5 px-2 mt-5 align-middle" style="width:40%;">
                <tbody>
                    <tr>
                        <th class="fs-4" id="title">TITULO</th>
                        <th class="fs-4" id="precio">PRECIO </th>
                        <th class="fs-4" id="thumbnail">TAPA</th>
                    </tr>
                    <tr>
                        <td class="fs-5">Elden Ring</td>
                        <td class="fs-5">$2999</td>
                        <td>
                            <img class="img-thumbnail" src="https://store-images.s-microsoft.com/image/apps.45643.14537704372270848.6ecb6038-5426-409a-8660-158d1eb64fb0.65bbc29b-4f5d-4381-a62a-9b6178d2f342?w=310" alt="Elden Ring"/>
                        </td>
                        <td>
                            <input name="idProd" id="idProd" value="627ef5e2b90d853320732385" style="width:1%;visibility:hidden"/>
                        </td>
                    </tr>
                    <tr>
                        <td class="fs-5">Cup Head</td>
                        <td class="fs-5">$400</td>
                        <td>
                            <img class="img-thumbnail" src="https://store-images.s-microsoft.com/image/apps.22008.13670972585585116.b194a7d4-ad8d-4e23-ab53-349c6d12eba0.92dfce54-5825-4bc5-a546-cb36bcd292fe?w=310" alt="Cup Head"/>
                        </td>
                        <td>
                            <input name="idProd" id="idProd" value="627ef5e2b90d85332073238c" style="width:1%;visibility:hidden"/>
                        </td>
                    </tr>
                    <tr>
                        <td class="fs-5">Reside Evil Village</td>
                        <td class="fs-5">$3500</td>
                        <td>
                            <img class="img-thumbnail" src="https://store-images.s-microsoft.com/image/apps.21384.13809253632566266.a1f3ac36-ddef-4b21-8956-5d5668ac9650.fdf71def-317c-4d65-8737-9ce6273b23fb?w=310" alt="Reside Evil Village"/>
                        </td>
                        <td>
                            <input name="idProd" id="idProd" value="627ef5e2b90d85332073238a" style="width:1%;visibility:hidden"/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </h1>
        <form action="/api/pedido/62cbb124225f730f957ff52e" method="post">
            <button class="btn btn-primary" type="submit">Realizar Pedido </button>
        </form>
    </body>
</html>
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/carrito/:id
### Method: GET
>```
>localhost:8080/api/carrito/62cbb124225f730f957ff52e
>```
### Response: 200
```json
{
    "_id": "62cbb124225f730f957ff52e",
    "usuario": {
        "_id": "62cbb123225f730f957ff52c",
        "email": "88@88",
        "nombre": "88",
        "telefono": "+8888"
    },
    "timestamp": "1657516324005",
    "productos": [
        {
            "id": "071df419-6963-4503-851f-558d766f5c60",
            "timestamp": "1650418915596",
            "nombre": "Elden Ring",
            "descripcion": "descripcion de Elden Ring",
            "foto": "https://store-images.s-microsoft.com/image/apps.45643.14537704372270848.6ecb6038-5426-409a-8660-158d1eb64fb0.65bbc29b-4f5d-4381-a62a-9b6178d2f342?w=310",
            "codigo": "071df419-6963-4503-851f-558d766f5c60",
            "precio": 2999,
            "stock": 10,
            "_id": "627ef5e2b90d853320732385"
        },
        {
            "_id": "627ef5e2b90d85332073238c",
            "id": "e70a7b44-13c4-40d9-a636-a7eefc6ae352",
            "timestamp": "1650813712386",
            "nombre": "Cup Head",
            "descripcion": "lalalaee huhusss",
            "codigo": "e70a7b44-13c4-40d9-a636-a7eefc6ae352",
            "foto": "https://store-images.s-microsoft.com/image/apps.22008.13670972585585116.b194a7d4-ad8d-4e23-ab53-349c6d12eba0.92dfce54-5825-4bc5-a546-cb36bcd292fe?w=310",
            "precio": 400,
            "stock": 12
        },
        {
            "_id": "627ef5e2b90d85332073238a",
            "id": "34c83610-2d6d-4fa4-b899-13931e051466",
            "timestamp": "1650419332126",
            "nombre": "Reside Evil Village",
            "descripcion": "lalala",
            "codigo": "34c83610-2d6d-4fa4-b899-13931e051466",
            "foto": "https://store-images.s-microsoft.com/image/apps.21384.13809253632566266.a1f3ac36-ddef-4b21-8956-5d5668ac9650.fdf71def-317c-4d65-8737-9ce6273b23fb?w=310",
            "precio": 3500,
            "stock": 3
        }
    ],
    "createdAt": "2022-07-11T05:12:04.007Z",
    "updatedAt": "2022-07-11T05:23:28.522Z"
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
            "id": "071df419-6963-4503-851f-558d766f5c60",
            "timestamp": "1650418915596",
            "nombre": "Elden Ring",
            "descripcion": "descripcion de Elden Ring",
            "foto": "https://store-images.s-microsoft.com/image/apps.45643.14537704372270848.6ecb6038-5426-409a-8660-158d1eb64fb0.65bbc29b-4f5d-4381-a62a-9b6178d2f342?w=310",
            "codigo": "071df419-6963-4503-851f-558d766f5c60",
            "precio": 2999,
            "stock": 10,
            "_id": "627ef5e2b90d853320732385"
        },
        {
            "_id": "627ef5e2b90d85332073238c",
            "id": "e70a7b44-13c4-40d9-a636-a7eefc6ae352",
            "timestamp": "1650813712386",
            "nombre": "Cup Head",
            "descripcion": "lalalaee huhusss",
            "codigo": "e70a7b44-13c4-40d9-a636-a7eefc6ae352",
            "foto": "https://store-images.s-microsoft.com/image/apps.22008.13670972585585116.b194a7d4-ad8d-4e23-ab53-349c6d12eba0.92dfce54-5825-4bc5-a546-cb36bcd292fe?w=310",
            "precio": 400,
            "stock": 12
        },
        {
            "_id": "627ef5e2b90d85332073238a",
            "id": "34c83610-2d6d-4fa4-b899-13931e051466",
            "timestamp": "1650419332126",
            "nombre": "Reside Evil Village",
            "descripcion": "lalala",
            "codigo": "34c83610-2d6d-4fa4-b899-13931e051466",
            "foto": "https://store-images.s-microsoft.com/image/apps.21384.13809253632566266.a1f3ac36-ddef-4b21-8956-5d5668ac9650.fdf71def-317c-4d65-8737-9ce6273b23fb?w=310",
            "precio": 3500,
            "stock": 3
        }
    ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/carrito
### Method: POST
>```
>localhost:8080/api/carrito/
>```
### Body (**raw**)

```json
{usuario:
    _id: '62c7be09e072a8cf5707af4b',
    email: '333@333',
    nombre:'333',
    telefono: '+541154256448'
}}
```

### Response: 200
```json
{
    "msg": "Carrito creado",
    "carrito": {
        "timestamp": 1657576513276,
        "productos": []
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/carrito/:id
### Method: DELETE
>```
>localhost:8080/api/carrito/627ef612b90d853320732390
>```
### Response: 200
```json
{
    "msg": "Se elimino el carrito"
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
<html>
    <head>
        <title>PRODUCTOS</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
    </head>
    <body class="bg-dark text-white">
        <div id="navbar">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/api/productos"> - 3ra Entrega TP FINAL -</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
                                <img class="img-thumbnail" src="https://store-images.s-microsoft.com/image/apps.45643.14537704372270848.6ecb6038-5426-409a-8660-158d1eb64fb0.65bbc29b-4f5d-4381-a62a-9b6178d2f342?w=310" alt="Elden Ring"/>
                            </td>
                            <td>
                                <input name="idProd" id="idProd" value="627ef5e2b90d853320732385" style="width:1%;visibility:hidden"/>
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
                                <img class="img-thumbnail" src="https://store-images.s-microsoft.com/image/apps.27325.13903780539574593.941766d2-e738-4026-9276-dc9d06c9e9ac.0461ec06-49f4-454d-a8aa-e028b70c2362?w=310" alt="FIFA 22"/>
                            </td>
                            <td>
                                <input name="idProd" id="idProd" value="627ef5e2b90d853320732386" style="width:1%;visibility:hidden"/>
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
                                <img class="img-thumbnail" src="https://store-images.s-microsoft.com/image/apps.22008.13670972585585116.b194a7d4-ad8d-4e23-ab53-349c6d12eba0.92dfce54-5825-4bc5-a546-cb36bcd292fe?w=310" alt="Cup Head"/>
                            </td>
                            <td>
                                <input name="idProd" id="idProd" value="627ef5e2b90d85332073238c" style="width:1%;visibility:hidden"/>
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
                                <img class="img-thumbnail" src="https://store-images.s-microsoft.com/image/apps.52300.65392999590663672.028b6875-f925-4d40-b3a1-e44db3b4fa32.7bcb3d0f-46fc-43ea-84d1-031bd0817da2?w=310" alt="Star Wars Jedi: Fallen Order"/>
                            </td>
                            <td>
                                <input name="idProd" id="idProd" value="627ef5e2b90d853320732388" style="width:1%;visibility:hidden"/>
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
                                <img class="img-thumbnail" src="https://store-images.s-microsoft.com/image/apps.7814.68565266983380288.0f5ef871-88c0-45f7-b108-6aacbc041fcf.b7e42789-b2bf-4b60-bf0a-f891f2f04226?w=310" alt="GTA V"/>
                            </td>
                            <td>
                                <input name="idProd" id="idProd" value="627ef5e2b90d85332073238b" style="width:1%;visibility:hidden"/>
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
                                <img class="img-thumbnail" src="https://store-images.s-microsoft.com/image/apps.30729.63115756613719781.d2d76a5d-bdd8-43f1-b57a-94ed7313dd94.82ae86f2-bf96-48ec-bd82-f79e488f1df8?w=310" alt="Sonic Mania"/>
                            </td>
                            <td>
                                <input name="idProd" id="idProd" value="627ef5e2b90d853320732389" style="width:1%;visibility:hidden"/>
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
                                <img class="img-thumbnail" src="https://store-images.s-microsoft.com/image/apps.21384.13809253632566266.a1f3ac36-ddef-4b21-8956-5d5668ac9650.fdf71def-317c-4d65-8737-9ce6273b23fb?w=310" alt="Reside Evil Village"/>
                            </td>
                            <td>
                                <input name="idProd" id="idProd" value="627ef5e2b90d85332073238a" style="width:1%;visibility:hidden"/>
                            </td>
                            <td>
                                <button class="btn btn-primary" type="submit">Agregar al carrito </button>
                            </td>
                        </tr>
                    </form>
                    <form action="/api/carrito/undefined/productos" method="post">
                        <tr>
                            <td class="fs-5">Red Dead Redemption 2</td>
                            <td class="fs-5">$2000</td>
                            <td>
                                <img class="img-thumbnail" src="https://xbox-games-api.vercel.app/api/image/apps.13625.68182501197884443.ac728a87-7bc1-4a0d-8bc6-0712072da93c.f644649a-f93e-439f-9b08-44ec582d848d?w=1160&amp;q=70" alt="Red Dead Redemption 2"/>
                            </td>
                            <td>
                                <input name="idProd" id="idProd" value="62cc710c1ccc970ad11dd836" style="width:1%;visibility:hidden"/>
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

## End-point: /api/carrito/:id/productos/:id_prod
### Method: DELETE
>```
>localhost:8080/api/carrito/62cc6797fd396dbcc84840fa/productos/62cc710c1ccc970ad11dd836
>```
### Response: 200
```json
{
    "_id": "62cc6797fd396dbcc84840fa",
    "usuario": {
        "_id": "62cc6797fd396dbcc84840f8",
        "email": "aa@aa",
        "nombre": "Gustavo",
        "telefono": "+541154256448"
    },
    "timestamp": "1657563031403",
    "productos": [],
    "createdAt": "2022-07-11T18:10:31.405Z",
    "updatedAt": "2022-07-11T22:02:22.494Z"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /api/pedido/:idCarrito
### Method: POST
>```
>localhost:8080/api/pedido/62cbb124225f730f957ff52e
>```
### Response: 200
```json
<html>
    <head>
        <title>Error en Login</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
    </head>
    <body class="bg-dark text-white">
        <br/>
        <br/>
        <div class="alert bg-success text-center" style="min-height: 20vh min-width: 30vh">
            <br/>
            <h1>Pedido Enviado</h1>
            <br/>
            <br/>
            <h2>Gracias por tu compra!</h2>
            <br/>
        </div>
        <script>setTimeout(() => {location.href = '/api/productos'}, 2000)</script>
    </body>
</html>
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)

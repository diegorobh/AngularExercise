var app = angular.module("app",["ngRoute"]);
//arreglo vacío para poner librerías

app.config(function($routeProvider){
  $routeProvider
  //when es una función de AngularJS
  .when("/", {
    templateUrl:"cajero.html",
    controller:"controlador"
  })
  .when("/productos",{
    templateUrl:"productos.html",
    controller:"controlador"
  })
})

app.controller("controlador", function($scope){
  //$scope permite tener un vínculo entre la info que esté en la vista
  //con la que tiene en este archivo javascript
  //desde acá puedo cambiar los modelos que tengo en la vista
  //y la vista se va a actualizar
  //hay que definir este controlador también en la vista, para que se conecten
  $scope.saludo = "hola amigo desde el controlador :)";
  var lista = this;
  var n = 2;
  var nCarrito = 2;
  lista.productos = [
    {id:1, nombre:"Agua", precio:20.0},
    {id:2, nombre:"Café", precio:10.0}
  ];

  lista.carrito = [];

  lista.addProducto = function(){
    console.log("adding product");
    var nombre = lista.nombre;
    var precio = lista.precio;

    if(nombre != "" && precio != "" && !isNaN(precio)){
      n++;
      lista.productos.push({
        id:n, nombre:nombre, precio:precio
      });
    }
    /*app.controller('myCtrl', function($scope, $http) {
      $http.get("welcome.htm")
      .then(function(response) {
      $scope.myWelcome = response.data;
      });
    });*/
  }

  lista.addAlCarrito = function(){
    var id = lista.productoSeleccionado;
    var cantidad = lista.cantidad;
    console.log("lista.cantidad");
    console.log(cantidad);
    var producto = lista.productos.find(function(obj){
      return obj.id == id;
    })
    if(producto != undefined && cantidad != 0){
      lista.carrito.push({
        id: n,
        nombre:producto.nombre,
        precio:producto.precio,
        cantidad:cantidad,
        total: producto.precio * cantidad
      });
      nCarrito++
    }
    console.log(lista.carrito)
  }

  lista.getTotalCarrito = function(){
    var total = 0;
    lista.carrito.forEach(x => {
      total += x.total;
    });
  }

});

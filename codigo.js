//Juljhancer Javier cañarte Lozano 
//Edgar Samuel Tandazo Briones
/* Estamos aprendiendo sobre los comentarios en javascript y para posteriromente poder hacer funciones y mas cosas 
y tambien aprendimos a poner mensaje en la pantalla cuando se abra la paguna o cuando se le de click 
a boton*/
var mensaje = "Bienvenido a nuestro sitio"; var nombreProducto ='Producto ABC';
var letraSeleccionada ='c';
    function multiplicar (p1,p2){
        return p1*p2;
    }
    document.getElementById("demo").innerHTML = multiplicar(4,3);
    document.addEventListener("DOMContentLoaded", function() {
        const boton = document.getElementById("Boton");
        boton.addEventListener("click", function() {
            alert("Gracias por hacerlo");
        }); 
    });
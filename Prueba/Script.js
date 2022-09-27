//var edad = prompt("Introduce tu edad");
//if (edad > 18) { document.write("Puedes matar"); }
//else  { document.write("Pide permiso a tu padres"); }

<script>
do {
    //PEDIMOS LA CADENA POR TECLADO
    //var  Cadena = prompt("Introduce una cadena");
    //SI LA VARIABLE RESULTADO ESTÁ VACÍA
    //if (resultado == "") {
        //CONCATENAMOS SIN UTILIZAR GUIÓN
        resultado = resultado + "cadena"
    }
    //SINÓ
    else {
        //CONCATENAMOS CON GUIÓN
       // resultado = resultado + "-" + cadena;
    }
    //MIENTRAS SE PULSE ACEPTAR EN EL MENSAJE EMERGENTE CONFIRM
 while (confirm("Desea seguir?"));
document.write(resultado);
</script>





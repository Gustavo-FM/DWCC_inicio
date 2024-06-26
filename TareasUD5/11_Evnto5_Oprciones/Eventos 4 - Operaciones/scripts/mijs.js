/*
   Añadir las funcion calcularOperacion
   Realiza la operacion entre los valores introducidos en las cajas y muestra el resultado con tres decimales
   Si no se introduce algún dato debe mostrar un mensaje de advertencia
*/

/*
   Añadir la funcion borrar
   Borra el contenido de la caja de texto al obtener el foco
*/

/*
   Añadir la funcion reiniciar
   Borra el contenido de todas las cajas de texto, el resultado y pone el foco en la primera caja
*/

document.getElementsByName("numero1")[0].addEventListener("focus",borrar)
document.getElementsByName("numero2")[0].addEventListener("focus",borrar)

document.querySelector('#sumar-btn').addEventListener('click', calcularOperacion);
document.querySelector('#restar-btn').addEventListener('click', calcularOperacion);
document.querySelector('#multiplicar-btn').addEventListener('click', calcularOperacion);
document.querySelector('#dividir-btn').addEventListener('click', calcularOperacion);
document.querySelector('#reiniciar-btn').addEventListener('click', calcularOperacion);

"use strict";

/* Inove Coding School
 * Tarea! Ejercicios básicos de condicionales.
 */

// Ejemplos variables de texto
let texto1 = '5';
let texto2 = '7';

//  Verifique cual cual de los dos textos es mayor alfabéticamente
//  Imprima en pantalla según corresponda

if (texto1 > texto2){
    alert("El"+ texto1 + "es mayor alfabeticamente que"+ texto2)
}else{
    alert("El "+ texto2 + "es mayor alfaticamente que"+ texto1)   
}

//  Transforma esas variables tipo texto y almacénalas
//  en nuevas variables númericas (Number) con parseInt()
//  Repita el proceso, ¿Cuál de las nuevas variables es mayor?
//  Imprima en pantalla según corresponda

let texto3 = parseInt(texto1)
let texto4 = parseInt(texto2)

if (texto3 > texto4){
    alert("El"+ texto3 + "es mayor que"+ texto4)
}else{
    alert("El"+ texto4 + "es mayor que"+ texto3)    
}

//  Para pensar!
//  ¿Por qué cree que texto_2 es mayor a texto_1?
//  Siendo números tiene sentido, pero son caracteres, texto,
//  aún así el operador arroja el mismo resultado que con las
//  variables numéricas, cierto? ¿Por qué creen que es así?
//  Esta pregunta estará repetida en el Campus para que puedan
//  responder.
// Por la ubicación en el alfabeto de su letra inicial.
//  NOTA: La respuesta no se encuentra en el apunte, sino en Google ;)

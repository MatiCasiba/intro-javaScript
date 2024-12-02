import './style.css'

/*
1. Debes crear las variables nombre, apellido, edad, pais y conocimientos, esta última deberá ser un array.
- Mostrar todos los valores de las variables por la consola. Los elementos del array mostrarlos en forma manual.
- Después cambia el valor de edad y añade un nuevo element al array.
- Muestra esos nuevos valores por la consola.
*/

let nombre = 'Matias Gabriel'
let apellido = 'Casiba'
let edad = '22'
edad = Number(edad)
let pais = 'Argentino'
console.log(` Nombre: ${nombre} ${apellido}\n Edad: ${edad}\n Nacionalidad: ${pais}`)
let arrayConocimiento = ['javaScript', ' Java',' Python', ' HTML', ' CSS']
console.log(`Conocimientos: ${arrayConocimiento}`)
let nuevoConocimiento = ' C # '
arrayConocimiento.push(nuevoConocimiento)
console.log(`Conocimiento actualizado: ${arrayConocimiento} `)

/* 2. Debes crear las variables marca, velocidad, stock y modelos (array)
- Todas esas variables deberán ser mostradas por pantalla (con una frase) [Usar template strings]
- Debes mostrar cada uno de los elementos del array (sin hacerlo manualmente) */

console.log('---------------------------------------------------------------')
console.log('---------------------------------------------------------------')

let marca = 'Audi'
let velocidad = '324'
velocidad = Number(velocidad)
let stock = true
console.log(` Marca de auto: ${marca}\n Velocidad: ${velocidad} km/h\n ¿Se encuentra disponible?: ${stock}`)
console.log('Esto son los modelos que se encuentran disponibles:')
let arrayModelos = ['A1 Sportback', 'A3 Sedán', 'A5 Coupé', 'Q2', 'Q5 Sportback', 'RS e-tron GT']
console.log('Los modelos disponibles son:')
// muestro en consola los modelos, de manera ordenada
arrayModelos.forEach(function(models, indice){
    console.log(`${indice+1}) ${models}`)
})

/* 3. Un coche va a toda velocidad por la carretera. Va a una velocidad de 135km/h y el limite es de 60km/h
- Comprueba que si la velocidad es mayor al limite.
- Si es mayor debes mostrar un mensaje por la consola indicando que baje la velocidad.
- Si es menor el mensaje deberá ser que todo va bien. */
console.log('---------------------------------------------------------------')
console.log('---------------------------------------------------------------')

let velocidadEnLaQueIbas = 135
let velociadLimite = 60
if (velocidadEnLaQueIbas > velociadLimite){
    console.log(` ¡Has exedido el límite de velocidad!\n la velocidad límite es de ${velociadLimite} km/h\n tu velocidad es de ${velocidadEnLaQueIbas} km/h, baje la velocidad`);
}else{
    console.log(`Tu velocidad es de ${velocidadEnLaQueIbas} km/h, es ideal.`);
}

/* 4. Dado un sueldo, crear una condicional comparando su sueldo.
- Si el sueldo es $100.000 es excelente
- Si el sueldo es menor o igual a $80.000 es muy bueno.
- Si el sueldo es menor o igual a $60.000 es bueno.
- Y si el sueldo es menor o igual a $40.000 es bajo. */

/* 5. Pidele al usuario su año de Nacimiento (ej: 1990) en una ventana emergente (prompt) y calcula cuántos años tiene actualmente. */

/* 6. Crear una función en JavaScript que reciba como parámetro un número entero. Calcule y muestre en la consola la tabla de multiplicar de ese número desde 1 hasta 10.*/

/* 7. Crea una función que devuelva si un número (pasado por el usuario es par o impar)
Muestra el resultado por consola y un alert.
 */

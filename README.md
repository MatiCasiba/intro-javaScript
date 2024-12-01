* Nombre: Matias Casiba

# Desafio 08 – JavaScript Intro - JS

## Ejercicio 1
Se a pedido que se cree variables de nombre, apellido, edad, pais, y conocimientos, que la ultima sea un array, te mostraré como lo hice:
```sh
let nombre = 'Matias Gabriel'
let apellido = 'Casiba'
let edad = '22' # tipo string
edad = Number(edad) # lo convierto en número y dejará de ser un tipo string
let pais = 'Argentino'
console.log(` Nombre: ${nombre} ${apellido}\n Edad: ${edad}\n Nacionalidad: ${pais}`) 
let arrayConocimiento = ['javaScript', ' Java',' Python', ' HTML', ' CSS']
console.log(`Conocimientos: ${arrayConocimiento}`) # muestro la lista de conocimientos
let nuevoConocimiento = 'C #' # declaro un nuevo conocimiento
arrayConocimiento.push(nuevoConocimiento) # a la lista le agrego este nuevo conocimiento
console.log(`Conocimiento actualizado: ${arrayConocimiento} `) # muestro la lista de conocimiento junto con el que se agregó
```
* Nota: \n me permitirá que lo siguiente escrito, se coloque en la linea de abajo.


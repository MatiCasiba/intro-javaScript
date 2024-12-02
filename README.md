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

## Ejercicio 2
Se pidió que hagamos variables de marca, velocidad y stock (sobre autos), al momento de realizarlo lo hice de la siguiente forma:
```sh
let marca = 'Audi'
let velocidad = '324'
velocidad = Number(velocidad) # convierto el valor tipo string a un tipo numero
let stock = true # hay stock (verdadero)
console.log(` Marca de auto: ${marca}\n Velocidad: ${velocidad} km/h\n ¿Se encuentra disponible?: ${stock}`) # muestro en consola el mensaje
```
Para mostrar los modelos de la marca audi, lo hice de este modo:
```sh
console.log('Esto son los modelos que se encuentran disponibles:')
let modelos = ['A1 Sportback', 'A3 Sedán', 'A5 Coupé', 'Q2', 'Q5 Sportback', 'RS e-tron GT']
console.log('Los modelos disponibles son:')
# muestro en consola los modelos, de manera ordenada
modelos.forEach(function(models, indice){
    console.log(`${indice+1}) ${models}`)
})
```
Con forEach voy a lograr mostrár las posiciones de los elementos y los elementos (con models y indice)dentro del array:
* console.log(`${indice+1}) ${models}`): indice+1 lo que hará es mostrar en consola que la posición arranca desde 1, sin el +1, arrancaría de 0.
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

## Ejercicio 3
Se pidió que se cree un programa para el exceso de velocidad, una persona va por la carretera a una velocidad de 135 km/h y el límite es de 60 km/h, si se excede, hay que mostrar un mensaje que baje la velocidad, en el caso contrario, le debemos indicar que va a una velocidad ideal. Lo hice de la siguiente manera:
```sh
let velocidadEnLaQueIbas = 135
let velociadLimite = 60 # cree una variable con el propósito de si hay que aumentar o bajar la velocidad limite
if (velocidadEnLaQueIbas > velociadLimite){ # si la velocidad en la que andas es mayor a la indicada, se te advertirá de que bajes la velocidad
    console.log(` ¡Has exedido el límite de velocidad!\n la velocidad límite es de ${velociadLimite} km/h\n tu velocidad es de ${velocidadEnLaQueIbas} km/h, baje la velocidad`);
}else{ # si la velocidad es menor a la limite, no se te dirá que irás bien
    console.log(`Tu velocidad es de ${velocidadEnLaQueIbas} km/h, es ideal.`);
}
```

## Ejercicio 4
Se pidio crear un programa para medir el sueldo, si es de 100k  es excelente, si es menor o igual a 80k es muy bueno, si es menor o igual a 60k es bueno, sino, si es menor o igual a 40k es bajo. Para hacerlo, primero comencé con el sueldo bajo, usando condicionales if y else:
```sh
let sueldo = Number(prompt('Ingrese su sueldo:'))
if (sueldo <= 40000){
    console.log(`Tu sueldo de $${sueldo}, es bajo`);
}else if (sueldo <= 60000){
    console.log(`Tu sueldo de $${sueldo}, es bueno`);
}else if (sueldo <= 80000){
    console.log(`Tu sueldo de $${sueldo}, es muy bueno`);
}else{
    console.log(`Tu sueldo de $${sueldo}, es excelente`);
}
```
* Nota: <= es menor o igual, osea que si sueldo es menor o igual a tal monto, devuelve un mensaje. 
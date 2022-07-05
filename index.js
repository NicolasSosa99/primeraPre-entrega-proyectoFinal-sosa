class botinesAdidas {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

class botinesNike {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

const adidasPredator = new botinesAdidas("Adidas predator", 15000)
const adidasGoletto = new botinesAdidas("Adidas Goletto", 18000)
const nikeMercurial = new botinesNike("Nike Mercurial", 16000)
const nikeTiempo = new botinesNike("Nike Mercurial", 12500)

console.log (adidasPredator)
console.log (adidasGoletto)
console.log (nikeMercurial)
console.log (nikeTiempo)

function mostrarmenu() {
    let opcion = prompt("Hola, elija una de estas opciones (escriba ESC para salir) \n1. Adidas \n2. Nike")
    return opcion
}

mostrarmenu()
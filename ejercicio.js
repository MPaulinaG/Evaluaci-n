let numero;
while (true) {
    numero = Math.floor(Math.random() * 100) + 1;
    let respuesta = prompt("Adivina si el número es Par o Impar.");

    if (numero % 2 === 0 && respuesta.toLowerCase() === "par") {
        document.write("¡Felicitaciones! " + numero + " es Par.");
        break;
    } else if (numero % 2 !== 0 && respuesta.toLowerCase() === "impar") {
        document.write("¡Felicitaciones! " + numero + " es Impar.");
        break;
    } else {
        document.write("Te has equivocado: " + numero);
        break;
    }
}


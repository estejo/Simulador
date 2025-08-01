let repeticiones = 0;

while (repeticiones < 5) {
    alert("Simulador de notas para el estudiante:" + (repeticiones + 1) + " de 5");

    let cantidadNotas = parseInt(prompt("¿Cuántas notas desea ingresar?"));

    if (isNaN(cantidadNotas) || cantidadNotas <= 0) {
        alert("Debe ingresar un número válido de notas.");
    } else {
        let notas = [];

        for (let i = 0; i < cantidadNotas; i++) {
            let nota = parseFloat(prompt("Ingrese la nota " + (i + 1)));
            while (isNaN(nota) || nota < 0 || nota > 10) {
                nota = parseFloat(prompt("Nota inválida. Ingrese una nota entre 0 y 10:"));
            }
            notas.push(nota);
        }

        let promedio = calcularPromedio(notas);
        let notaMinima = obtenerNotaMinima(notas);
        let notaMaxima = obtenerNotaMaxima(notas);
        mostrarResultado(promedio, notaMinima, notaMaxima);
    }

    repeticiones++; // 
}

function obtenerNotaMinima(arrayNotas) {
    let min = arrayNotas[0];
    for (let i = 1; i < arrayNotas.length; i++) {
        if (arrayNotas[i] < min) {
            min = arrayNotas[i];
        }
    }
    return min;
}

function obtenerNotaMaxima(arrayNotas) {
    let max = arrayNotas[0];
    for (let i = 1; i < arrayNotas.length; i++) {
        if (arrayNotas[i] > max) {
            max = arrayNotas[i];
        }
    }
    return max;
}

function calcularPromedio(arrayNotas) {
    let suma = 0;
    for (let i = 0; i < arrayNotas.length; i++) {
        suma += arrayNotas[i];
    }
    return (suma / arrayNotas.length).toFixed(2);
}

function mostrarResultado(promedio, notaMinima, notaMaxima) {
    let mensaje = "Promedio final: " + promedio + "\n";
    mensaje += "Nota más baja: " + notaMinima + "\n";
    mensaje += "Nota más alta: " + notaMaxima + "\n";
    if (promedio >= 7) {
        mensaje += "¡Felicitaciones! El estudiante está aprobado.";
    } else {
        mensaje += "El estudiante está desaprobado. Debe reforzar los contenidos.";
    }
    alert(mensaje);
    console.log(mensaje);
}
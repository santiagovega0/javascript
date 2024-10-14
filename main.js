let a = 5
let b = 10
let c = a+b
console.log("la suma de a y b es: ",c)
var nombre = prompt("¿Cual es tu nombre?")
console.log("Hola, " + nombre)
let mayor = a
if (b>mayor) {
  mayor = b
}
if (c>mayor) {
  mayor = c
}
console.log("El mayor de los tres números es: " + mayor);
var numeroIngresado = prompt("ingresa un número y te dire si es par o impar")
if (numeroIngresado % 2 === 0) {
  console.log("El número " + numeroIngresado + " es par")
} else {
  console.log("El número " + numeroIngresado + " es impar")
}
let variable = 10;
while (variable >= 0) {
    console.log(variable);
    variable--
}
let numero;
do {
    numero = prompt("Ingresa un número mayor a 100:")
    numero = parseInt(numero)
} while (numero <= 100)
console.log("Ingresaste un número mayor a 100: " + numero)
function esPar(numero) {
  if (numero % 2 === 0) {
    return true
  } else {
    return false
  }
}
console.log("El número 7 es par",esPar(7))
console.log("El número 8 es par",esPar(8))
function convertirCelsiusAFahrenheit(celsius) {
  var fahrenheit = celsius * 1.8 + 32
  return fahrenheit
}
console.log("30 celsius son equivalentes a ", convertirCelsiusAFahrenheit(30), " farenheit")
var persona = {
  nombre: "Santiago",
  edad: 20,
  ciudad: "Mendoza"
}
persona.cambiarCiudad = function(nuevaCiudad) {
  this.ciudad = nuevaCiudad;
}
persona.cambiarCiudad("San Juan")
console.log(persona)
var libro = {
  titulo: "El Quijote",
  autor: "Cervantes",
  año: 1615
};
libro.esAntiguo = function() {
  var añoActual = new Date().getFullYear();
  if (añoActual - this.año > 10) {
    console.log("El libro es antiguo");
  } else {
    console.log("El libro es reciente");
  }
};
libro.esAntiguo();
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var numerosMultiplicados = [];
for (var i = 0; i < numeros.length; i++) {
  numerosMultiplicados[i] = numeros[i] * 2;
}
console.log("numeros originales:", numeros);
console.log("Numeros multiplicados por 2:", numerosMultiplicados);
var pares = [];
for (var i = 0; i < 20; i++) {
  if (i % 2 === 0) {
    pares.push(i);
    if (pares.length === 10) {
      break;
    }
  }
}
console.log("primeros 10 numeros pares:", pares);
document.getElementById("cambiarColorBtn").addEventListener("click", cambiarColor);
function cambiarColor() {
  var parrafos = document.getElementsByTagName("p");
  for (var i = 0; i < parrafos.length; i++) {
    parrafos[i].style.color = "blue";
  }
}
document.getElementById("mostrarAlertaBtn").addEventListener("click", mostrarAlerta);
function mostrarAlerta() {
  var valor = document.getElementById("texto").value;
  alert("has ingresado: " + valor);
}
var lista = document.getElementById("lista");
var elementos = lista.getElementsByTagName("li");
for (var i = 0; i < elementos.length; i++) {
  elementos[i].addEventListener("click", function() {
    console.log(this.textContent);
  });
}
var texto = document.getElementById("texto2");
var deshabilitarBtn = document.getElementById("deshabilitarBtn");
var habilitarBtn = document.getElementById("habilitarBtn");
deshabilitarBtn.addEventListener("click", function() {
  texto.disabled = true;
});
habilitarBtn.addEventListener("click", function() {
  texto.disabled = false;
});
document.addEventListener('DOMContentLoaded', () => {
  const emailForm = document.getElementById('emailForm');
  const emailInput = document.getElementById('email');
  const emailDisplay = document.getElementById('emailDisplay');
  const deleteButton = document.getElementById('deleteButton');
  function displayEmail(email) {
      emailDisplay.textContent = `Correo guardado: ${email}`;
      deleteButton.style.display = 'block';
  }
  const savedEmail = localStorage.getItem('email');
  if (savedEmail) {
      displayEmail(savedEmail);
  }
  emailForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const email = emailInput.value;
      localStorage.setItem('email', email);
      displayEmail(email);
      emailInput.value = '';
  });
  deleteButton.addEventListener('click', () => {
      localStorage.removeItem('email');
      emailDisplay.textContent = '';
      deleteButton.style.display = 'none';
  });
});
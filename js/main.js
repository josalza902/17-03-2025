// y = prompt("digite un valor")

// y = 5; x = 10;
// let edad = 18;
// if (y < x && x%2 ==0){
//     console.log("se cumple ");
//     y = 8;
//     x+=y;
//     console.log(x);
// }

// let edad = 18;

// if(edad>=18){
//     console.log("eres mayor")
// }
// x = prompt("digite el primer numero");
// y = prompt("digite el segundo numero");

// if(x > y){
//     alert("el primero es mayor")
// }
// else{
//     if(x === y){
//         alert("son iguales")
//     }
// }
// else{
//     if(x === y){
//         alert("y es mayor que x")
//     }
// }

// const numero = 8;
// const esPar = (numero%2 ===0)?true:false;
// alert(esPar?"el numero es par" : "el numero es impar")

// let saldo = 100;

// const monto = parseInt(prompt("digite el monto a retirar"));
// (monto == saldo) ? 
// alert("numero es igual"):
// alert("numero no es igual "); 




// if(monto <= saldo){
//     saldo -= monto
//     alert(`retiro exitoso ! nuevo saldo: ${saldo}`)
// }else{
//     alert("no hay suficiente ")
// }

// let dia="";

// switch(dia){
//     case "lunes":
//         alert("comienza la semana");
//         break;
//     case"viernes":
//         alert("se acerca el fin de semana");
//         break;
//     default:
//         alert("dia intermedio")
// }


// const arreglo = [1,70,"naranja",false];

// for(let i = 0; i<arreglo.length;i++){
//     alert(arreglo[i])
// }


// for(const item of arreglo){
//     alert(item)
// }
// for(const index in arreglo){
//     alert(` en la posicion ${index},el valor es: ${arreglo[index]}`);
// }
// const obj={
//     nombre: "Juan",apellido: "mendez", edad:200,vago:true
// }


// for(const clave in obj){
//     alert(`clave: ${clave},valor:${obj[clave]}`);
// }
// let i = 0;
// while(i<10){
//     alert(i+=2);
// }

// let x = 0;
// do {
//     x = parseInt(prompt("digite un numero"));
// }while (x == 10);

// teniendo el siguiente arreglo : 
// const arr = [5,8,50,24,6];
// calcular el promedio de los valores en el arreglo.
// utilizar for , for in y for of

// dar un numero a cada dia de la semana (ej lunes = 1 martes = 2) cree un programa que  pida un numero al usuario y le diga al usuario que dia es ese numero

// hacerlo con switch, if.

// hacer un programa que guarde en un arreglo los datos digitados por el usuario . el programa debe preguntar si desea agregar otro elemento al final listar todos los datos ingresados por el usuario


// Programa 1: Días de la semana con switch
function obtenerDiaSwitch(numero) {
    switch (numero) {
        case 1: return "Lunes";
        case 2: return "Martes";
        case 3: return "Miércoles";
        case 4: return "Jueves";
        case 5: return "Viernes";
        case 6: return "Sábado";
        case 7: return "Domingo";
        default: return "Número inválido. Debe estar entre 1 y 7.";
    }
}

// Programa 1: Días de la semana con if
// function obtenerDiaIf(numero) {
//     if (numero === 1) return "Lunes";
//     else if (numero === 2) return "Martes";
//     else if (numero === 3) return "Miércoles";
//     else if (numero === 4) return "Jueves";
//     else if (numero === 5) return "Viernes";
//     else if (numero === 6) return "Sábado";
//     else if (numero === 7) return "Domingo";
//     else return "Número inválido. Debe estar entre 1 y 7.";
// }

// Programa 2: Almacenar datos en un arreglo
// function almacenarDatos() {
//     let datos = [];
//     let continuar = true;

//     while (continuar) {
//         let dato = prompt("Ingrese un dato:");
//         datos.push(dato);
        
//         let respuesta = prompt("¿Desea agregar otro elemento? (si/no)").toLowerCase();
//         if (respuesta !== "si") {
//             continuar = false;
//         }
//     }

//     console.log("Datos ingresados:", datos);
// }

// // Prueba de los programas
// let numero = parseInt(prompt("Ingrese un número del 1 al 7 para saber el día de la semana:"));
// console.log("Usando switch:", obtenerDiaSwitch(numero));
// console.log("Usando if:", obtenerDiaIf(numero));

// // Ejecutar función para almacenar datos
// almacenarDatos();

// //tercer programa
// // Arreglo dado
// const arr = [5, 8, 50, 24, 6];

// // Usando un bucle for
// function promedioFor(arr) {
//     let suma = 0;
//     for (let i = 0; i < arr.length; i++) {
//         suma += arr[i];
//     }
//     return suma / arr.length;
// }

// // Usando for...in
// function promedioForIn(arr) {
//     let suma = 0;
//     for (let index in arr) {
//         suma += arr[index];
//     }
//     return suma / arr.length;
// }

// // Usando for...of
// function promedioForOf(arr) {
//     let suma = 0;
//     for (let num of arr) {
//         suma += num;
//     }
//     return suma / arr.length;
// }

// // Mostrar los resultados
// console.log("Promedio usando for:", promedioFor(arr));
// console.log("Promedio usando for...in:", promedioForIn(arr));
// console.log("Promedio usando for...of:", promedioForOf(arr));

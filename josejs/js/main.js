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

let x = 0;
do {
    x = parseInt(prompt("digite un numero"));
}while (x == 10);
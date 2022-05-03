let continua = true
let saldo = 1000
let paquete1
let extra;
let transferir;
let numeroTelefono;
let opcion;
let servicios;
let pagos;




const transferencia = () => {
    transferir = parseFloat(prompt("Cuanto dinero desea transferir? -> "));
    if (isNaN(transferir)) {
        alert("Por favor ingrese un monto válido");
    }else if (otraLinea)  {
        alert("Favor ingrese numero de telefono a transferir");
    }
}
function otraLinea () {
    parseFloat(prompt("Por favor ingrese un numero de telefono"));
    if (transferir > saldo)  {
        alert("No tiene esa cantidad de dinero");
        alert("Por favor ingrese un monto válido");
    } else if (saldo -= transferir) {
        alert("Transferencia realizada, Su saldo es de: " + saldo);
    } 
}
const pago = () => {
    pagos = parseInt(prompt("Ingresá el monto a pagar"));
    if (isNaN(pagos)) {
        alert("Ingresá una opción válida");
    } else if (pagos > saldo) {
        alert("No cuenta con ese monto, su saldo es de");
        alert(`Su saldo es de: ${saldo}`);
    } else {
        (saldo -= pagos)
        alert(`Pago realizado correctamente. Gracias por utilizar Talys Celucorp! \n Comprobante n° 1001 \n Su saldo es de ` + (saldo));
    }

}
const paquete = () => {
    paquete1 = parseInt(prompt("Ingresá el monto a pagar"));
    if (isNaN(paquete1)) {
        alert("Ingresá una opción válida");
    } else if (paquete1 > saldo) {
        alert(`No cuenta con ese monto, Su saldo es de: ${saldo}`);
    } else {
        (saldo -= paquete1)
        alert(`Compra realizada con exito! Gracias por utilizar Talys Celucorp! \n Comprobante n° 1001 \n Su saldo es de ` + (saldo));
    }

}

while (continua) {
    alert(".:BIENVENIDO A TALYS CELUCORP:. \n 1. Recargar saldo \n 2. Transferir saldo  \n 3. Consultar saldo \n 4. Comprar paquetes \n 5. Salir ");
    opcion = parseFloat(prompt("Digite una opción: "));

    if (opcion === 1) {
        extra = parseFloat(prompt("Cuanto dinero desea ingresar a su linea ->"));
        if (isNaN(extra)) {
            alert("Por favor ingrese un número válido");
        } else {
            saldo += extra;
            alert("Gracias por utilizar Talys Celucorp! Su saldo es de:" + saldo);
        }
    } else if (opcion === 2) {
        transferencia();
        otraLinea();
    } else if (opcion === 3) {
        alert("Su saldo es de: " + saldo);
    } else if (opcion === 4) {
        numeroTelefono = parseInt(prompt("Por favor ingrese su numero de telefono"));
        if (isNaN(numeroTelefono)) {
            alert("telefono inválido");
        } else {
            bolsa = parseInt(prompt("¿Que paquete desea comprar \n 1. 100 Gb Datos+ 1000 minutos+ 1000 sms por 500 pesos  \n 2. 1000 Minutos por 300 pesos \n 3. 1000 SMS por 300 pesos \n 4. 100 Gb de Datos por 300 pesos \n 5. Volver"))
            if (isNaN(servicios) || servicios > 5) {
                alert("Ingresá una opción válida");
            } else if (bolsa1 === 1) {
                paquete();
            } else if (bolsa2 === 2) {
                paquete()
            } else if (bolsa3 === 3) {
                paquete()
            } //else if (bolsa === 4) {
            //     paquete()
            // }    
        }
    } else if (opcion === 5) {
        alert("Gracias por preferir Talys Celucorp");
        continua = false;
    } else {
        alert("Error opcion inválida");
    }
}



// const otraLinea = () => {
//     numeroTelefono = parseFloat(prompt("Favor indicar numero de telefono al que se va a transferir ->"));
//     if (isNaN(numeroTelefono)) {
//         alert("Favor indicar un numero valido")
//     } else if (saldo -= (transferir)) {
//         alert("Su saldo es de: " + saldo);
//     }
// }

//Declaracion de variables "Bolsa"
let nombreBolsa = "";
let gigasBolsa = "";
let minutosBolsa = "";
let smsBolsa = "";
let precioBolsa = "";

// Creacion de clase "bolsa"
class bolsa {
    constructor(nombre, gigas, minutos, sms, precio) {
        this.nombre = nombre;
        this.gigas = gigas;
        this.minutos = minutos;
        this.sms = sms;
        this.precio = precio;
    }
}

// Bolsas a elegir
const bolsa1 = new bolsa("Pequeña", "20 Gigas", "100 minutos", "200 sms", "150 pesos");
const bolsa2 = new bolsa("Mediana", "50 gigas", "500 minutos", "500 sms", "300 pesos");
const bolsa3 = new bolsa("Full", "100 gigas", "1000 minutos", "1000 sms", "500 pesos");


const comprarBolsa = () => {
    // Array de las bolsas
    let arrayBolsas = [bolsa1, bolsa2, bolsa3];
    arrayBolsas.push(bolsa);
    return arrayBolsas
}

comprarBolsa()
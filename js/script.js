//Variables
let carrito = [];
let botonRegistro = document.getElementById("button-register");
let carro = document.getElementById("carrito");
let divBmw = document.getElementById("divBmw");
let inputBuscador = inputTexto.value;
let botonVaciar = document.getElementById("vaciar-carrito")
let divTotal = document.getElementById('total-carrito')
let btns = document.getElementById("agregar-carrito ")


//Objetos
class bmw {
    constructor(id, serie, nombre, descripcion, precio, divisa, img) {
        this.id = id;
        this.serie = serie;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.divisa = divisa;
        this.img = img;
    }
}

const motor1 = new bmw(
    1,
    "MOTOR S85",
    "Bmw M5 E60 V10 2005",
    "El BMW S85 es un motor de gasolina V10 de 5.0 litros de altas revoluciones diseñado para utilizar la potencia en una amplia gama de bandas de revoluciones. Su alta relación de compresión de 12.0, superando a los modelos M3 anteriores, puede alcanzar al menos 100 hp / litro mientras alcanza la línea roja a 8250 RPM",
    3000.0,
    "USD",
    "./assets/images/motor-s85-bmw-v10jpg.jpg"
);
const motor2 = new bmw(
    2,
    "MOTOR S50",
    "Bmw M3 E36 1991",
    "La potencia máxima del motor - 143 kW / 195 hp - se obtiene por 5900 rpm, y el par máximo (torque) de 244 Nm - por 4700 rpm. En 7.30 s el BMW 325i puede acelerar de 0 a 60 mph. El automóvil tiene la capacidad de hacer un cuadro de milla en 15.80 s. El vehículo tiene un coeficiente de resistencia/arrastre de 0.3.",
    2000,
    "USD",
    "./assets/images/motor-S50B32-E36.jpg"
);
const motor3 = new bmw(
    3,
    "MOTOR S65",
    "Motor M3 E92 2007",
    "El BMW S65 es un motor de gasolina V8 de aspiración natural que se fabricó entre 2007 y 2013. Su uso principal fue en el BMW M3 (donde reemplazó al motor BMW S54 de seis cilindros en línea). No hay un reemplazo directo para el S65, ya que la siguiente generación de M3 cambió a un motor turboalimentado de seis cilindros en línea (el BMW S55 ).",
    2500,
    "USD",
    "./assets/images/Motor-S65-E92.jpg"
);
const transmision1 = new bmw(
    4,
    "TRANSMISION M54 Zf",
    "Transmision Bmw M5 E60",
    "Transmision manual de 6 velocidades para Bmw M5 E60 2005.",
    1200,
    "USD",
    "./assets/images/Transmision-M54-Zf.jpg"
);
const transmision2 = new bmw(
    5,
    "TRANSMISION 46k",
    "Transmision de E36",
    "Transmision de 6 velocidades para Bmw M5 E36 1991.",
    1000,
    "USD",
    "./assets/images/Transmision-46k.jpg"
);
const transmision3 = new bmw(
    6,
    "TRANSMISION N54",
    "Transmision para E92",
    "Transmision de 6 velocidades para Bmw M3 E92 2007.",
    1200,
    "USD",
    "./assets/images/Transmision-N54.jpg"
);
const turbo1 = new bmw(
    7,
    "TURBO E46",
    "Turbo E46 para E46 E39",
    "Turbo garret para modelos 318d 320d 520d E46 E39 2.0D, Diesel.",
    500,
    "USD",
    "./assets/images/turbo-e46.jpg"
);
const turbo2 = new bmw(
    8,
    "TURBO B58",
    "Turbo B58 para modelo Bmw 340i",
    "Turbo B58 para modelo Bmw 340i de 2015 a 2022",
    700,
    "USD",
    "./assets/images/turbo-b58.jpg"
);
const turbo3 = new bmw(
    9,
    "TURBO F80",
    "Turbo de Bmw M4",
    "Turbo para Bmw M2, M3 y M4 F80 F82 F87 2015 a 2022 ",
    800,
    "USD",
    "./assets/images/turbo-f80.jpg"
);

//Array con todos los repuestos
let bmws = [
    motor1,
    motor2,
    motor3,
    transmision1,
    transmision2,
    transmision3,
    turbo1,
    turbo2,
    turbo3,
];


//FUNCIÓN PARA MOSTRAR Y CERRAR EL MODAL DE REGISTRO
const mostrarModal = () => {
    let modal_container = document.getElementById("modal_container");
    botonRegistro.addEventListener("click", () => {
        modal_container.classList.add("show");
    });
    const cerrar = document.getElementById("close");
    cerrar.addEventListener("click", () => {
        modal_container.classList.remove("show");
    });
};

//FUNCION PARA REGISTRAR, GUARDAR Y MOSTRAR EL USUARIO
const registro = () => {
    let formulario = document.getElementById("idForm");
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        let username = document.getElementById("user").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        let usuario = {
            username: username,
            password: password,
            email: email,
        };
        let usuarioJSON = JSON.stringify(usuario);
        localStorage.setItem("Usuario", usuarioJSON);

        let usuarioParseado = JSON.parse(localStorage.getItem("Usuario"));
        botonRegistro.remove();
        let divRegistro = document.getElementById("register");
        divRegistro.innerHTML += `<p class = "login" > Hola ${usuarioParseado.username} !</p>`;

        console.log(usuarioParseado);

        formulario.reset();
    });
};

//FUNCIÓN BUSCADOR
const buscador = () => {
    let inputTexto = document.getElementById("inputTexto");
    inputTexto.addEventListener("change", () => {
        let buscador = inputTexto.value;
        let bmwFiltrados = bmws.filter((bmw) =>
            bmw.serie.includes(buscador.toUpperCase())
        );
        let divBmw = document.getElementById("divBmw");
        divBmw.innerHTML = "";
        bmwFiltrados.forEach((bmw) => {
            const divBmwCard = document.createElement("div");
            divBmwCard.classList.add("card");
            divBmwCard.style.width = "18rem";

            const divBmwContent = `
        <div class="card-body">
        <h5 class="card-title">${bmw.nombre}</h5>
        <img src= "${bmw.img}">
        <p class="card-text">${bmw.serie}</p>
        <p class="card-text">${bmw.descripcion}</p>
        <p class="card-text">${bmw.precio} ${bmw.divisa}</p>
        <button id="boton${bmw.id}" class="btn btn-primary agregar-carrito"> Agregar al carrito</button>
        </div>
        `;

            divBmwCard.innerHTML = divBmwContent;
            divBmwCard
                .querySelector(".agregar-carrito")
                .addEventListener("click", () => agregarCarrito(bmw));
            divBmw.append(divBmwCard);
        });
    });
};

//FUNCION AGREGAR AL CARRITO
const agregarCarrito = (bmw) => {

    if (carrito.includes(bmw)) {
        // alert("Ya esta en tu carrito!");
        Toastify({
            text: "Ya esta en tu carrito",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #c5c5c5, #020024)",
            },
            onClick: function () {} // Callback after click
        }).showToast();
    } else {
        const divBmwCard = document.createElement("div");
        divBmwCard.setAttribute("id", "bmw-card");
        divBmwCard.classList.add("card");
        divBmwCard.style.width = "18rem";

        const divBmwCardContent = `
            <div class="card-body">
                <h5 class="card-title">${bmw.nombre}</h5>
                <p class="card-text">${bmw.precio} ${bmw.divisa}</p>
                <button id="eliminar-${bmw.id}" class="btn-eliminar">Eliminar</button>
            </div>`;

        divBmwCard.innerHTML = divBmwCardContent;
        divBmwCard
            .querySelector(".btn-eliminar")
            .addEventListener("click", (e) => eliminarBmwDelCarrito(bmw, e));

        carro.append(divBmwCard);
        carrito.push(bmw);

        if (carrito.length > 0) {
            let totalCarrito = carrito.reduce(
                (acc, ite) => acc + ite.precio,
                0
            );
            divTotal.textContent = `Total: ${totalCarrito}`;
        }
    }
    Toastify({
        text: "Se agrego tu producto al carrito",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #c5c5c5, #020024)",
        },
        onClick: function () {} // Callback after click
    }).showToast()
    localStorage.setItem("BmwsAgregados", JSON.stringify(carrito));
};


//FUNCION ELIMINAR DEL CARRITO
const eliminarBmwDelCarrito = (bmw, e) => {
    let bmwCard = e.target.closest("#bmw-card");
    for (let c = 0; c < carrito.length; c++) {
        if (carrito[c] === bmw) {
            carrito.splice(c, 1);
            bmwCard.remove();
            let totalCarrito = carrito.reduce(
                (acc, ite) => acc + ite.precio,
                0
            );
            divTotal.textContent = `Total: ${totalCarrito}`;
        }
    }
    console.log(carrito);
    console.log(carrito.length);
};

//FUNCION VACIAR CARRITO
const vaciarCarrito = () => {
    botonVaciar.addEventListener('click', () => {
        carro.innerHTML = ""
        carrito.splice(0, carrito.length);
        divTotal.textContent = `Total: 0`;
        console.log(carrito.length)
    })
}

//FUNCION FETCH

const data = document.querySelector("#caja")

fetch("./js/stock.json")
.then((Response) => Response.json())
.then((data) => {
    data.forEach(element =>{
        caja.innerHTML += 
        `<button class= "btn.fetch btn-secondary">Agregar al carrito"</button>
        <img style = "width: 100 px";" src="${element.img} ">
        <p>${element.nombre}</p>
        `
    });

});


mostrarModal();
registro();
buscador();
vaciarCarrito();
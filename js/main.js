const data = document.querySelector("#caja")

fetch("./js/stock.json")
.then((Response) => Response.json())
.then((data) => {
    data.forEach(element =>{
        caja.innerHTML += 
        `<button class= "btn">Agregar al carrito</button>
        <img style = "width: 100 px";" src="${element.img} ">
        <p>${element.nombre}</p>
        `
    });
    let btns = document.querySelectorAll(".btn");
    btns.forEach ((e) =>
        e.addEventListener("click", () => console.log("click"))
    );
});
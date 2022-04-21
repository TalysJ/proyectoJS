const saludar = () => {
    let nombre;
    
    do  {
        nombre = prompt ("Bienvenido a Silvestre Petshop, ingrese su nombre para comenzar");
    } while(nombre === "" || !isNaN(nombre))

    console.log (`Hola ${nombre}`);
};

const menuPrincipal = () => {
    let auxMenu = parseInt (
        prompt( 
            `Es un gusto verte por aca, como te podemos ayudar? \n1)Solicitar Catalogo \n2)Ver mis pedidos \n3)Mesa de ayuda`
        )
    );


    while (auxMenu >4 || auxMenu < 1){
    auxMenu = parseInt (
        prompt( 
            `Es un gusto verte por aca, selecciona un numero para continuar\n1)Solicitar Catalogo\n2)Ver mis pedidos\n3)Mesa de ayuda`
        )
    );
    }
    let auxMenu2;

    switch (auxMenu) {
    case 1:
        auxMenu2 = "Solicitar Catalogo";
        break;
    case 2:
        auxMenu2 = "Ver mis pedidos";
        break;
    case 2:
        auxMenu2 = "Mesa de ayuda";
        break;
    }

    while (auxMenu2 = 1){
        auxMenu2 = parseInt (
            prompt( 
                `Favor escribir correo electronico`
            )
        );
        }
        


};

saludar ();
menuPrincipal();
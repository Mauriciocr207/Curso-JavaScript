const app = {};

app.platillos = [
    {
        platillo:"Pizza",
        precio:20
    },
    {
        platillo:"HotDog",
        precio:20
    },
    {
        platillo:"Sandwich",
        precio:20
    },
]

app.funciones = {
    showMenu: platillos => {
        platillos.forEach((platillo,i) => {
            console.log(`${i} : ${platillo.platillo} $${platillo.precio}`);
        });
    },
    ordenar: id => {
        console.log(`Tu platillo ${app.platillos[id].platillo} se está preparando`);
    }
}

const {platillos} = app;

app.funciones.showMenu(platillos);

app.funciones.ordenar(0);
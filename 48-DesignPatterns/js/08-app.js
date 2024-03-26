function Vendedor(nombre) {
    this.nombre = nombre;
    this.sala = null;
}

Vendedor.prototype = {
    oferta(articulo, precio) {
        console.log(`Tenemos ${articulo}, por un precio de ${precio}`)
    },
    vender(comprador) {
        console.log(`Vendido a ${comprador.nombre}`)
    }
}

function Comprador(nombre) {
    this.nombre = nombre;
    this.sala = null;
}
Comprador.prototype = {
    oferta(cantidad, comprador) {
        // console.log(comprador);
        console.log(`Oferta - ${comprador.nombre} : ${cantidad}`);
    }
}

function Subasta() {
    let compradores = {};
    return {
        registrar(usuario) {
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
        }
    }
}


const juan = new Comprador('Juan');
const pablo = new Comprador('Pablo');
const vendedor = new Vendedor('Vendedor de Autos');
const subasta = new Subasta();
window.onload = app;



/**
 * application
 */
function app() {
    subasta.registrar(juan);
    subasta.registrar(pablo);
    subasta.registrar(vendedor);

    vendedor.oferta('Mustang', 300);
    juan.oferta(350, juan);
    pablo.oferta(450, pablo);
    juan.oferta(500, juan);
    pablo.oferta(550, pablo);
    vendedor.vender(pablo);

}

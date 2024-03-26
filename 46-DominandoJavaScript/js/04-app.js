const user = {
    name: "Gus",
    age: 20,
    info() {
        console.log(`Nombre: ${this.name}, edad: ${this.age}`);
    },
    mascota: {
        name: "Hook",
        age: 80,
        info() {
            console.log(`Nombre: ${this.name}, edad: ${this.age}`);
        }
    }
}

user.info();
user.mascota.info();
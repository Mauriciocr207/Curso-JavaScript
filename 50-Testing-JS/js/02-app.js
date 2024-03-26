// Probar dos valores

function sum(a,b) {
    return a+b;
}
let res = sum(1,2);


function expected(expected) {
    return {
        toBe(result) {
            if(result !== expected) {
                console.error(`${res} no es el valor esperado`);
            } else {
                console.log('Correcto!');
            }
        },
        toEqual(result) {
            if(result !== expected) {
                console.error(`${res} no es igual valor esperado`);
            } else {
                console.log('Correcto!');
            }
        }
    }
}

expected(4).toBe(res);
expected(4).toEqual(res);
// Probar dos valores

function sum(a,b) {
    return a+b;
}
let res = sum(1,2);

async function sumaAsync(a,b) {
    return Promise.resolve(sum(a,b));
}

async function test(mensaje, callback) {
    try {
        await callback();
        console.log(`El test: ${mensaje} se ejecutó correctamente`);
    } catch (error) {
        console.error('Error: ', error);
    }
}

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

test('Suma asincrona', async () => {
    const res = await sumaAsync(10,20);
    const esperado = 20;
    expected(esperado).toBe(res);
})
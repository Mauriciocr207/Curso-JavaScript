const cliente = {
    nombre: "Pedro",
    balance:500,
};

describe('test to client', () => {
    test('is premium', () => {
        expect(cliente.balance).toBeGreaterThan(400);
    })
    test('is Pedro', () => {
        expect(cliente.nombre).toBe("Pedro");
    })
    test('is not Other', () => {
        expect(cliente.nombre).not.toBe("Mau");
    })
})
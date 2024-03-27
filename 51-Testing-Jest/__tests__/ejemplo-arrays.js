const carrito = ['prod1', 'prod2', 'prod3'];

describe('test en carrito de compras', () => {
    test('at least 3 elements', () => {
        expect(carrito).toHaveLength(3);
    })
    test('not enpty', () => {
        expect(carrito).not.toHaveLength(0);
    })
})
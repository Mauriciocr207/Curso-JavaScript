const pass = "123444";

describe('valid pass', () => {
    test('has 6 caracteres', () => expect(pass).toHaveLength(6));
    test('not empty pass', () => expect(pass).not.toHaveLength(0));
})
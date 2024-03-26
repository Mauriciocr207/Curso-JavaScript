const user = {
    name: 'Juan 2',
    balance: 500,
    type: "premium",
}

describe('client', () => {
    test('is juan', () => expect(user).toMatchSnapshot())
})
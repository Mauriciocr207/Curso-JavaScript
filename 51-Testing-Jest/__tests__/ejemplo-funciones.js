function sum(a,b) {
    return a+b;
}

function restar(a,b) {
    return a-b;
}

describe('function testing', () => {
    test('sum', () => expect(sum(20,30)).toBe(50));
    test('sum', () => expect(sum(10,10)).not.toBe(10));
    test('restar', () => expect(restar(30,20)).toBe(10));
    test('restar', () => expect(restar(10,5)).not.toBe(2));
}) 
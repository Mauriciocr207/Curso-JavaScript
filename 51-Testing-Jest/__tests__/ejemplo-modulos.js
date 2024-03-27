import { sum, restar } from "../js/funcionesToTest";

describe('sum and resta', () => {
    test('sumar 10 y 20', () => expect(sum(10,20)).toBe(30));
    test('restar 10 y 20', () => expect(restar(10,20)).toBe(-10));
})
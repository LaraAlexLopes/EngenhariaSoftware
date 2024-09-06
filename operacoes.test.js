const { soma } = require('./operacoes');
const { subtracao } = require('./operacoes');

test('1+2=3', () => {
    expect(soma(1,2)).toBe(3);
});

test('1-2=-1', () => {
    expect(subtracao(1,2)).toBe(-1);
});


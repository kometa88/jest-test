const { sum, multiply } = require('../src/math');

describe('Math functions', () => {
  test('sum adds two numbers correctly', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(-1, 1)).toBe(0);
    expect(sum(0, 0)).toBe(0);
  });

  test('multiply multiplies two numbers correctly', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-2, 3)).toBe(-6);
    expect(multiply(0, 5)).toBe(0);
  });

  test('sum function snapshot', () => {
    expect(sum(5, 5)).toMatchSnapshot();
  });
});
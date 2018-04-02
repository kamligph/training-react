import { add } from './../mathFunctions';

describe('Addition', () => {
  it('Knows that 2 and 2 make 4', () => {
    expect(add(2, 2)).toBe(4);
  });
});

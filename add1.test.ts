import add from './add';

beforeEach(() => {
  console.log("### beforeEach add1.test.ts -> before describe");
})

describe('test', () => {

  beforeEach(() => {
    console.log("### beforeEach add1.test.ts -> inside describe");
  })

  it('1+2 === 3', () => {
    expect(add(1, 2)).toBe(3);
  })
})

beforeEach(() => {
  console.log("### beforeEach add1.test.ts -> after describe");
})

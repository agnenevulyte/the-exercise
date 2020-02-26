import app from '../src/app';

describe('app', function() {
  it('does nothing', function() {
    expect(true).toBe(true);
  });
});

describe('multiples', () => {
  it('should output the multiples', () => {
    expect(clickableGrid(72,)).toBe(144)
  })
})

// does the table exist
// does it have 144 mini tables

// 1. verify output multiplier is valid - what means calculate a multiple of something
// 2. for example - verify the highest multiple 72, and it's multiple 144
// store 72, the 144 is an answer - store in an array
// 3. for example - verify the highest multiple (72-yellow), and it's multiple (144 green)
// 4. if the one is yellow, then all the others are green






  // it('check if table exist', function() {
  //   // const wrapper = mount(<table className="grid" />);
  //   // expect(wrapper.find('grid').exists()).toBeTruthy()
  //   const expected = [144];
  //   it('matches even if received contains additional elements', () => {
  //     expect([144]).toEqual(expect.arrayContaining(expected));
  //   });
  // });


// does the table exist
// does it have 144 mini tables

// 1. verify output multiplier is valid - what means calculate a multiple of something
// 2. for example - verify the highest multiple 72, and it's multiple 144
// store 72, the 144 is an answer - store in an array
// 3. for example - verify the highest multiple (72-yellow), and it's multiple (144 green)
// 4. if the one is yellow, then all the others are green

// describe("Filter function", () => {
//   test("it should filter by a search term (link)", () => {
//     const input = [
//       { id: 1, url: "https://www.url1.dev" },
//       { id: 2, url: "https://www.url2.dev" },
//       { id: 3, url: "https://www.link3.dev" }
//     ];

//     const output = [{ id: 3, url: "https://www.link3.dev" }];

//     expect(filterByTerm(input, "link")).toEqual(output);

//   });
// });
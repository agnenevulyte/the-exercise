import app from '../src/app';
import clickableGrid from '../src/clickableGrid'
import multiplesOf from '../src/multiplesOf'

describe('app', function() {
  it('does nothing', function() {
    expect(true).toBe(true);
  });
});

describe('Draw the grid', () => {
  const callback = () => {
    console.log('callback')
  }

  it('the grid is an object', () => {
    expect(typeof clickableGrid(20, callback())).toBe('object');
  })

  it('If the input is 20, then draw the grid out of 20', () => {
    expect(clickableGrid(20, callback()).rows.length).toEqual(20);
  })

  it('If the input is 144, then draw the grid out of 144', () => {
    expect(clickableGrid(144, callback()).rows.length).toEqual(144);
  })
})

describe('multiples of numbers', () => {
  it('multiples of 10 in the table of 20 rows', () => {
    let myArr = [10,11,12,13,14,15,16,17,18,19,20];
    let clickedNum = 10;
    expect(multiplesOf(myArr,clickedNum)).toEqual([10,20])
  })

  it('multiples of 2 in the table of 20 rows', () => {
    let myArr = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    let clickedNum = 2;
    expect(multiplesOf(myArr,clickedNum)).toEqual([2,4,6,8,10,12,14,16,18,20])
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
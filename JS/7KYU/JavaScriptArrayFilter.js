function getEvenNumbers(numbersArray) {
	return numbersArray.filter(element => element % 2 === 0 || element === 0);
}

console.log(getEvenNumbers([ -9, 5, 16, Infinity, 14 ]));


// TODO: Add your tests here
// Starting from Node 10.x, [Mocha](https://mochajs.org) is used instead of our custom test framework.
// [Codewars' assertion methods](https://github.com/Codewars/codewars.com/wiki/Codewars-JavaScript-Test-Framework)
// are still available for now.
//
// For new tests, using [Chai](https://chaijs.com/) is recommended.
// You can use it by requiring:
//     const assert = require("chai").assert;
// If the failure output for deep equ start,end = [ 1, 4 ] [ 12, 1 ] 
//  [ [ -7, -17, Infinity, 9, Infinity start,end = [ 1, 4 ] [ 12, 1 ] 
//  [ [ -7, -17, Infinity, 9, Infinity ],
//   [ 18, -18, 16, 6, 2 ],
//   [ -4, -11, Infinity, -13, 0 ],
//   [ Infinity, Infinity, Infinity, 7, -3 ],
//   [ -6, 6, Infinity, 2, 15 ],
//   [ 14, -19, 0, 18, -10 ],
//   [ -9, 0, 8, Infinity, -7 ],
//   [ -5, 15, 1, 0, 15 ],
//   [ 5, -7, 16, Infinity, Infinity ],
//   [ -17, -6, Infinity, 19, 18 ],
//   [ -9, 5, 16, Infinity, 14 ], start,end = [ 1, 4 ] [ 12, 1 ] 
//  [ [ -7, -17, Infinity, 9, Infinity ],
//   [ 18, -18, 16, 6, 2 ],
//   [ -4, -11, Infinity, -13, 0 ],
//   [ Infinity, Infinity, Infinity, 7 start,end = [ 1, 4 ] [ 12, 1 ] 
//  [ [ -7, -17, Infinity, 9, Infinity ],
//   [ 18, -18, 16, 6, 2 ],
//   [ -4, -11, Infinity, -13, 0 ],
//   [ Infinity, Infinity, Infinity, 7, -3 ],
//   [ -6, 6, Infinity, 2, 15 ],
//   [ 14, -19, 0, 18, -10 ],
//   [ -9, 0, 8, Infinity, -7 ],
//   [ -5, 15, 1, 0, 15 ],
//   [ 5, -7, 16, Infinity, Infinity ],
//   [ -17, -6, Infinity, 19, 18 ],
//   [ -9, 5, 16, Infinity, 14 ],
//   [ 6, 17, 20, -4, 3 ],
//   [ 3, 1, 3, 9, Infinity ] , -3 ],
//   [ -6, 6, Infinity, 2, 15 ],
//   [ 14, -19, 0, 18, -10 ],
//   [ -9, 0, 8, Infinity, -7 ],
//   [ -5, 15, 1, 0, 15 ],
//   [ 5, -7, 16, Infinity, Infinity ] start,end = [ 1, 4 ] [ 12, 1 ] 
//  [ [ -7, -17, Infinity, 9, Infinity ],
//   [ 18, -18, 16, 6, 2 ],
//   [ -4, -11, Infinity, -13, 0 ],
//   [ Infinity, Infinity, Infinity, 7, -3 ],
//   [ -6, 6, Infinity, 2, 15 ],
//   [ 14, -19, 0, 18, -10 ],
//   [ -9, 0, 8, Infinity, -7 ],
//   [ -5, 15, 1, 0, 15 ],
//   [ 5, -7, 16, Infinity, Infinity ],
//   [ -17, -6, Infinity, 19, 18 ],
//   [ -9, 5, 16, Infinity, 14 ],
//   [ 6, 17, 20, -4, 3 ],
//   [ 3, 1, 3, 9, Infinity ] ,
//   [ -17, -6, Infinity, 19, 18 ],
//   [ -9, 5, 16, Infinity, 14 ],
//   [ 6, 17, 20, -4, 3 ],
//   [ 3, 1, 3, 9, Infinity ] 
//   [ 6, 17, 20, -4, 3 ],
//   [ 3, 1, 3, 9, Infinity ]  ],
//   [ 18, -18, 16, 6, 2 ], start,end = [ 1, 4 ] [ 12, 1 ] 
//  [ [ -7, -17, Infinity, 9, Infinity ],
//   [ 18, -18, 16, 6, 2 ],
//   [ -4, -11, Infinity, -13, 0 ],
//   [ Infinity, Infinity, Infinity, 7, -3 ],
//   [ -6, 6, Infinity, 2, 15 ], start,end = [ 1, 4 ] [ 12, 1 ] 
//  [ [ -7, -17, Infinity, 9, Infinity ],
//   [ 18, -18, 16, 6, 2 ],
//   [ -4, -11, Infinity, -13, 0 ],
//   [ Infinity, Infinity, Infinity, 7, -3 ],
//   [ -6, 6, Infinity, 2, 15 ], start,end = [ 1, 4 ] [ 12, 1 ] 
//  [ [ -7, -17, Infinity, 9, Infinity ],
//   [ 18, -18, 16, 6, 2 ],
//   [ -4, -11, Infinity, -13, 0 ],
//   [ Infinity, Infinity, Infinity, 7, -3 ],
//   [ -6, 6, Infinity, 2, 15 ],
//   [ 14, -19, 0, 18, -10 ],
//   [ -9, 0, 8, Infinity, -7 ],
//   [ -5, 15, 1, 0, 15 ],
//   [ 5, -7, 16, Infinity, Infinity ],
//   [ -17, -6, Infinity, 19, 18 ],
//   [ -9, 5, 16, Infinity, 14 ],
//   [ 6, 17, 20, -4, 3 ],
//   [ 3, 1, 3, 9, Infinity ] 
//   [ 14, -19, 0, 18, -10 ],
//   [ -9, 0, 8, Infinity, -7 ],
//   [ -5, 15, 1, 0, 15 ],
//   [ 5, -7, 16, Infinity, Infinity ],
//   [ -17, -6, Infinity, 19, 18 ],
//   [ -9, 5, 16, Infinity, 14 ],
//   [ 6, 17, 20, -4, 3 ],
//   [ 3, 1, 3, 9, Infinity ] 
//   [ 14, -19, 0, 18, -10 ],
//   [ -9, 0, 8, Infinity, -7 ],
//   [ -5, 15, 1, 0, 15 ],
//   [ 5, -7, 16, Infinity, Infinity ],
//   [ -17, -6, Infinity, 19, 18 ],
//   [ -9, 5, 16, Infinity, 14 ],
//   [ 6, 17, 20, -4, 3 ],
//   [ 3, 1, 3, 9, Infinity ] 
//   [ -4, -11, Infinity, -13, 0 ],
//   [ Infinity, Infinity, Infinity, 7, -3 ],
//   [ -6, 6, Infinity, 2, 15 ],
//   [ 14, -19, 0, 18, -10 ],
//   [ -9, 0, 8, Infinity, -7 ],
//   [ -5, 15, 1, 0, 15 ],
//   [ 5, -7, 16, Infinity, Infinity ],
//   [ -17, -6, Infinity, 19, 18 ],
//   [ -9, 5, 16, Infinity, 14 ],
//   [ 6, 17, 20, -4, 3 ],
//   [ 3, 1, 3, 9, Infinity ] ality is truncated, `chai.config.truncateThreshold` can be adjusted.

// describe("Solution", function() {
//   it("should test for something", function() {
//     // Test.assertEquals(1 + 1, 2);
//     // assert.strictEqual(1 + 1, 2);
//   });
// });
var assert = require('assert');
var assertEquals = assert.equal;
var assertThrows = assert['throws'];

require('../range.js');

assertEquals(globalThis.range.length, 2); // Range expects up to 2 parameters.
assertEquals(globalThis.propertyIsEnumerable('range'), false);

assertThrows(function() {
    globalThis.range();
}, SyntaxError);
assertThrows(function() {
    globalThis.range('error');
}, TypeError);
assertThrows(function() {
    globalThis.range(1.2);
}, TypeError);
assertThrows(function() {
    globalThis.range(1, 'error');
}, TypeError);
assertThrows(function() {
    globalThis.range(0);
}, RangeError);
assertThrows(function() {
    globalThis.range(2, (x, y) => x * y);
}, SyntaxError);
assertThrows(function() {
    globalThis.range(2, x => x * 2, 'error');
}, SyntaxError);

{
    const result = range(5);
    assertEquals(result.length, 5);
    assertEquals(result[0], 0);
    assertEquals(result[4], 4);
}

{
    const result = range(5, x => x + 1);
    assertEquals(result.length, 5);
    assertEquals(result[0], 1);
    assertEquals(result[4], 5);
}

{
    const result = range(5, x => x - 2);
    assertEquals(result.length, 5);
    assertEquals(result[0], -2);
    assertEquals(result[4], 2);
}

{
    const result = range(5, x => x * 2);
    assertEquals(result.length, 5);
    assertEquals(result[0], 0);
    assertEquals(result[4], 8);
}

{
    const result = range(5, x => 4 - x);
    assertEquals(result.length, 5);
    assertEquals(result[0], 4);
    assertEquals(result[4], 0);
}

{
    const result = range(5, x => x * -1);
    assertEquals(result.length, 5);
    assertEquals(result[0], 0);
    assertEquals(result[4], -4);
}

{
    const result = range(5, x => ({ val: x }));
    assertEquals(result.length, 5);
    assertEquals(typeof result[0], 'object');
    assertEquals(result[0].val, 0);
    assertEquals(result[4].val, 4);
    console.table(result);
}

console.log(`
Test Complete
`);
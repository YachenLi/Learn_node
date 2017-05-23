const assert = require('assert');

console.log(assert.deepEqual({a:1},{a:'1'}));

console.log(assert.deepStrictEqual({a:1},{a:'1'}));
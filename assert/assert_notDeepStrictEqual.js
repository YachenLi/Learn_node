const assert = require('assert');

// assert.notDeepEqual({a:1},{a:'1'});

assert.notDeepStrictEqual({a:1},{a:'1'});
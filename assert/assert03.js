const assert = require('assert');

// assert.doesNotThrow(()=>{
// 	throw new TypeError('错误');
// },SyntaxError);


// assert.doesNotThrow(()=>{
// 	throw new TypeError('错误');
// },TypeError);

assert.doesNotThrow(()=>{
	throw new TypeError('错误');
},TypeError,'抛出错误');
const assert = require('assert');

assert.notEqual(1,2);

try{assert.notEqual(1,1,'这是第一个报错')}
catch(err){
	console.log(arguments);
}
try{
assert.notEqual(1,'1','哎呦，这是第二个不等的报错');	
}catch(err){
	console.log(err);
}

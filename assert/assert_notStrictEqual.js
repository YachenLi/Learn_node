const assert = require('assert');

try{
	assert.notStrictEqual(1,2);

	// assert.notStrictEqual(1,1,'This is 1 v 1');

	assert.notStrictEqual(1,'1',`This is 1 v '1'`);
}catch(err){
	console.log(err);
}
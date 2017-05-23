const assert = require('assert');

try{
	assert.ok(true);

	assert.ok(1);

	// assert.ok(false);

	// assert.ok(0);

	assert.ok(false,'不是真值');
}catch(err){
	console.log(err);
}
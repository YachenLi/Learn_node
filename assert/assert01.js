const assert = require('assert');

const obj1 = {
	a:{
		b:1
	}
};

const obj2 = {
	a:{
		b:2
	}
};

const obj3 = {
	a:{
		b:1
	}
};

const obj4 = Object.create(obj1);

// console.log(assert.deepEqual(obj1,obj1));

// try{
// 	assert.deepEqual(obj1,obj2)
// }catch(error){
// 	console.log(error);
// };

// console.log(assert.deepEqual(obj1,obj3));

// console.log(obj4);

try{
console.log(assert.deepEqual(obj1,obj4));
}catch(err){
	console.log(err);
	console.log(`>>>>>>>>>>>>>>>>>>>>>>>>`);
	console.log(arguments);
};

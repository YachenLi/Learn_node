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
}

const obj4 = Object.create(obj1);


try{
	// assert.notDeepEqual(obj1,obj1);
	assert.notDeepEqual(obj1,obj2);

	assert.notDeepEqual(obj1,obj3,`This is 错误信息`);
	//抛出异常  相等
	assert.notDeepEqual(obj1,obj4);
	//没有异常 表示不等
}catch(err){
	console.log(err);
}
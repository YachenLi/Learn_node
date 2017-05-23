const assert = require('assert');

assert.throws(
  () => {
    throw new Error('错误信息');
  },
  Error
);

assert.throws(
  () => {
  	console.log('is work')
    throw new Error('错误信息');
  },
  function(err) {
    if ( (err instanceof Error) && /错误/.test(err) ) {
      return /0/;
    }
  },
  '不是期望的错误'
);

// assert.throws(myFunction, /错误/, '没有抛出期望的信息');

// function myFunction(){
// 	throw new Error('不知道什么鬼 有几率不会触发');
// }

assert.throws(aa,/ssss/,'抛出异常');

function aa(){
	console.log('000')
	throw new Error('oooo');
}


//貌似第二个参数必须要是正则 否则第一个回调里面的方法的异常抛出都不会执行
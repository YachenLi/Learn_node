const assert = require('assert');

assert.equal(1,1);

assert.equal(1,'1');
//通过

//assert.equal(1,2,'听说1不等于2');
const a = {a:{b:1}};
const b = a;
assert.equal(a,b);


assert.equal({a:{b:1}},{a:{b:1}});
//对象的 == 判断不同于字面量的判断 即使内容一样 但是引用的是不同的对象就是不等于
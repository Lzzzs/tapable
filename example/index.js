const { SyncHook } = require("../lib")

const hooks = new SyncHook(['arg1', 'arg2']);

hooks.tap('flag1', () => {
	console.log(1);
})

hooks.tap('flag2', () => {
	console.log(2);
})

hooks.call('arg1', 'arg2')

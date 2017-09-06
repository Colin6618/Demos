var simpleGit = require('simple-git')('/Users/meizu/Code/mex-service');
var bb = simpleGit.branch('-a', function(err, bs) {
	console.log(bs)
});

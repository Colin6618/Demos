var hostedGitInfo = require("hosted-git-info")
var info = hostedGitInfo.fromUrl("git@github.com:substack/dnode.git")
console.log(info)
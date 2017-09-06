var glob = require("glob")

// options 是可选的 **也会匹配孙子目录 *只匹配当前目录下
glob("**/*.js", function (er, files) {
  // files 是匹配到的文件的数组.
  // 如果 `nonull` 选项被设置为true, 而且没有找到任何文件,那么files就是glob规则本身,而不是空数组
  // er是当寻找的过程中遇的错误
  console.log(files)
})

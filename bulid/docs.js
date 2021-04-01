
const fs = require('fs');

fs.readFile('./PRE-README.md', 'utf8', function (err, data1) {
  fs.readFile('./README.md', 'utf8', function (err, data2) {
    let str = data1 + data2;
    fs.writeFile('./README.md', str, 'utf8',function () {
      console.log('文档追加前缀完成')
    });
  })
})
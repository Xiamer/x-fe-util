import  demo from './lib/demo'; // demo


import * as browser from './lib/browser'; // 浏览器相关
import * as dom from './lib/dom'; // dom相关
import * as design from './lib/design'; // 设计模式相关
import * as pure from './lib/pure'; // 纯函数
import * as idCard from './lib/id-card' // 身份证


const arr1 = [1,2,3];
const arr2 = [4,5,6];
console.log([...arr1, ...arr2]);


async function initDemo () {
  let data = await demo();
  console.log(data);
}

initDemo();

browser.docCookies.setItem('aaa', 'xxx')



export {
  browser,
  design,
  dom,
  pure,
  idCard
}


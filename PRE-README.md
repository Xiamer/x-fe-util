# fe-util

前端常用的工具类库函数

# 安装与使用

```bash
npm install --x-fe-util --save
```

```js
import { getParameterByName } from 'x-fe-util'

const queryStr = '?foo=lorem&bar=&baz'
// returns  lorem
getParameterByName('foo', queryStr); // "lorem"
```

# 文档

# QQ WechaT EmotioN ParseR

[![NPM version](https://img.shields.io/npm/v/qq-wechat-emotion-parser.svg?style=flat)](https://www.npmjs.org/package/qq-wechat-emotion-parser)
[![Build Status](https://travis-ci.org/buddys/qq-wechat-emotion-parser.svg?branch=master)](https://travis-ci.org/buddys/qq-wechat-emotion-parser)
[![Coverage Status](https://coveralls.io/repos/github/buddys/qq-wechat-emotion-parser/badge.svg?branch=master)](https://coveralls.io/github/buddys/qq-wechat-emotion-parser?branch=master)
[![Dependency manager](https://david-dm.org/buddys/qq-wechat-emotion-parser.png)](https://david-dm.org/buddys/qq-wechat-emotion-parser)

嗯，这是一个很简单的小工具，作用是将网页中添加的QQ表情和或者微信表情字符串转化为表情图片。

* 快速！这是目前最快速的表情字符串转换JS库，使用[前缀树（Trie）][trie]实现，对于限长的表情库，算法复杂度达到O(n)。
* 方便！无任何依赖，只需引入`min.js`即可使用。同时支持Node.js环境。

## Demo

#### example 1

输入： 

```
/::)
```

输出：

```html
<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/0.gif" alt="/::)">
```

效果：

![](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/0.gif)
 
#### example 2

输入： 

`I xx Gunzi, /::), No no no, I just xx xx/::B.`

输出：

```html
I xx Gunzi, <img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/0.gif" alt="/::)">, No no no, I just xx xx<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/2.gif" alt="/::B">.
```

效果：

I xx Gunzi, ![](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/0.gif), No no no, I just xx xx![](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/2.gif).


## Usage

本工具对外暴露一个`qqWechatEmotionParser()`方法，此方法的输入是需要处理的字符串，输出是将字符表情转化为img标签的字符串。

### 浏览器环境

1. 下载并引入<https://github.com/buddys/qq-wechat-emotion-parser/blob/master/dist/qq-wechat-emotion-parser.min.js>。    

    ```html
    <script src="/path/to/qq-wechat-emotion-parser.min.js"></script>
    ```

2. 调用`window.qqWechatEmotionParser`：

    ```javascript
    var text = 'I xx Gunzi /::), No no no, I just xx xx/:<L>.';
    var html = qqWechatEmotionParser(text);
    
    document.write(text);
    document.write('<br/>')
    document.write(html);
    ```
    
### Node环境

1. 安装：

    ```bash
    npm install qq-wechat-emotion-parser
    ```
    
2. 使用：

    ```javascript
    var qqWechatEmotionParser = require('qq-wechat-emotion-parser');

    var text = 'I xx Gunzi /::), No no no, I just xx xx/:<L>.';
    var html = qqWechatEmotionParser(text);

    console.log(html);
    ```

## Contribution

### 贡献代码

欢迎通过Github提交issue或者贡献代码，
贡献代码前需要仔细阅读原代码尽量保持代码风格一致。

### 新增标签

表情在src/emotion.json文件下保存，通过编辑该json文件定义表情的字符表示以及图片源。需要注意以下两点：

* 表情的字符表示应该尽量避免产生歧义
* 图片托管应使用稳定，国内访问速度快的服务器

## License

[GPL V3.0](http://www.gnu.org/licenses/gpl-3.0.html)

[harttle][harttle], [meriky][lsy] @ Buddys Copyright (c) 2016

[lsy]: http://blog.lisongyi.com/
[harttle]: http://harttle.land
[trie]: https://zh.wikipedia.org/zh-cn/Trie


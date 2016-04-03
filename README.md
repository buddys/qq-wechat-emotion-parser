# QQ WechaT EmotioN ParseR

## Intro
嗯，这是一个很简单的小工具，作用是将网页中添加的QQ表情和或者微信表情字符串自动转化为表情图片，看下面两个例子：

#### example 1
Input: 
`/::)`

Output:

```html
<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/0.gif" alt="/::)">
```
Display: ![](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/0.gif)
    
#### example 2
Input: 
`I xx Gunzi, /::), No no no, I just xx xx/::B.`

Output:

```html
I xx Gunzi, <img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/0.gif" alt="/::)">, No no no, I just xx xx<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/2.gif" alt="/::B">.
```

Display:
I xx Gunzi, ![](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/0.gif), No no no, I just xx xx![](https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/2.gif).

特性如下：

* 快速！
* 高效！
* 持久！

## Usage
本工具对外暴露一个`qqWechatEmotionParser()`方法，此方法的输入是需要处理的字符串，输出是将字符表情转化为img标签的字符串。Parser采用前缀树实现，快！
### 浏览器环境
看下面的示例：

```javascript
var text = 'I xx Gunzi /::), No no no, I just xx xx/:<L>.';
var html = qqWechatEmotionParser(text);

document.write(text);
document.write('<br/>')
document.write(html);
```
### Node环境
示例如下：

```javascript

var qqWechatEmotionParser = require('qqWechatEmotionParser.min.js');

var text = 'I xx Gunzi /::), No no no, I just xx xx/:<L>.';
var html = qqWechatEmotionParser(text);

console.log(text);
console.log(html);

```

## contribution
### code
任何人都可以通过Github提交issue或者贡献代码，贡献代码前需要仔细阅读原代码尽量保持代码风格一致。
### emotion
表情在src/emotion.json文件下保存，通过编辑该json文件定义表情的字符表示以及图片源。需要注意以下两点：

* 表情的字符表示应该尽量避免产生歧义
* 图片托管应使用稳定，国内访问速度快的服务器

## License
[GPL V3.0](http://www.gnu.org/licenses/gpl-3.0.html)

Copyright (c) 2016 Buddys 



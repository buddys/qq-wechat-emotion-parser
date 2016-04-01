var qqWechatEmotionParser = require('../src/qq-wechat-emotion-parser.js');

var text = 'I love wiki /::), and I fuck wiki/:<L>.';
var html = qqWechatEmotionParser(text);

console.log(text);
console.log(html);


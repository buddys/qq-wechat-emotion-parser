var emotion_map, trie, emotion_list, Trie;

if(typeof module !== 'undefined'){
    emotion_map = require('./emotions.json');
    Trie = require('./trie');
    build();
    module.exports = qqWechatEmotionParser;
} 
else if(window !== 'undefined'){
    emotion_map = window._qqWechatEmotionParser.emotion_map;
    Trie = window._qqWechatEmotionParser.Trie;
    build();
    window.qqWechatEmotionParser = qqWechatEmotionParser;
}

function build(){
    emotion_list = keys(emotion_map);
    trie = new Trie();
    trie.build(emotion_list);
}

function qqWechatEmotionParser(str) {
    var indices = trie.search(str);
    var labelEmotion = `<a title="{{title}}" style="display: inline-block;background: url(https://res.wx.qq.com/a/wx_fed/webwx/res/static/img/6AfH8-r.png) no-repeat;width: 28px;
    height: 28px; background-position:{{position}};"></a>`
    indices.reverse().map(function(idx) {
        var pos = idx[0],
            emotion = emotion_list[idx[1]],
            img = /^:.*:$|^\[.*\]$/.test(emotion) ? labelEmotion.replace('{{title}}', emotion).replace('{{position}}', emotion_map[emotion]) : '<img src="' + emotion_map[emotion] + '" alt="' + emotion + '">';
        str = splice(str, pos, emotion.length, img);
    });
    return str;
}

function splice(str, index, count, add) {
    return str.slice(0, index) + add + str.slice(index + count);
}

function keys(map){
    var list = [];
    for (var k in map) {
        if (map.hasOwnProperty(k)) list.push(k);
    }
    return list;
}

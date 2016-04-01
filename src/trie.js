function Trie(){
}

Trie.prototype.build = function(strs){

};

Trie.prototype.search = function(str){
    return [[0,0]];
};

if(module){
    module.exports = Trie;
}
else if(window){
    window._qqWechatEmotionParser.Trie = Trie;
}


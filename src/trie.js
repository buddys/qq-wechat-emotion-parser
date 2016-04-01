function Trie(){
    this.words = 0;
    this.children = [];
}

Trie.prototype = {
    insert: function(str, pos){
        if(str.length == 0) { 
            return;
        }
        var T = this;
        var k;
        var child;

        if(pos === undefined) {
            pos = 0;
        }
        if(pos === str.length) {
            T.words ++;
            return;
        }
        k = str[pos];
        if(T.children[k] === undefined){ 
            T.children[k] = new Trie();
        }
        child = T.children[k];
        child.insert(str, pos + 1);
    },

    build: function(arr){
        var len = arr.length;
        for(var i = 0; i < len; i++){
            this.insert(arr[i], 0);
        }
    },

    searchOne: function(str, pos){
        if(pos === undefined){
            pos = 0;
        }
        var T = this;
        var child;
        var k;
        var result = [-1, -1];
        k = str[pos];
        child = T.children[k];
        if(str.length === 0) return result;
        if(child !== undefined){
            return child.searchOne(str,  pos + 1);
        }else{
            return result;
        }
        if(!T.children){
            result[0] = pos;
            result[1] = T.words;
            return searchResult;
        }
    },

    search: function(str){
        var len = str.length;
        var result = [];
        var tmp;
        for(var i = 0; i < len - 1; i++){
            tmp = this.searchOne(str, i);
            if(tmp !== [-1, -1]){
                result.push(tmp);
            }
        }
        return result;
    }
}

if(module){
    module.exports = Trie;
}
else if(window){
    window._qqWechatEmotionParser.Trie = Trie;
}


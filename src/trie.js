function Trie(){
    this.words = 0;
    this.empty = 1;
    this.index = 0;
    this.children = {};
}

Trie.prototype = {
    insert: function(str, pos, idx){
        if(str.length === 0) { 
            return;
        }
        var T = this;
        var k;
        var child;

        if(pos === undefined) {
            pos = 0;
        }
        if(pos === str.length) {
            T.index = idx;
            return;
        }
        k = str[pos];
        if(T.children[k] === undefined){ 
            T.children[k] = new Trie();
            T.empty = 0;
            T.children[k].words = this.words + 1;
        }
        child = T.children[k];
        child.insert(str, pos + 1, idx);
    },

    build: function(arr){
        var len = arr.length;
        for(var i = 0; i < len; i++){
            this.insert(arr[i], 0, i);
        }
    },

    searchOne: function(str, pos){
        if(pos === undefined){
            pos = 0;
        }
        var result = {};
        if(str.length === 0) return result;
        var T = this;
        var child;
        var k;
        result.arr = [];
        k = str[pos];
        child = T.children[k];
        if(child !== undefined && pos < str.length){
            return child.searchOne(str,  pos + 1);
        }
        if(child === undefined && T.empty === 0) return result;
        if(T.empty == 1){
            result.arr[0] = pos - T.words;
            result.arr[1] = T.index;
            result.words = T.words;
            return result;
        }
        return result;
    },

    search: function(str){
        if(this.empty == 1) return [];
        var len = str.length;
        var searchResult = [];
        var tmp;
        for(var i = 0; i < len - 1; i++){
            tmp = this.searchOne(str, i);
            if(typeof tmp.arr !== 'undefined' && tmp.arr.length > 0){
                searchResult.push(tmp.arr);
                i = i + tmp.words - 1;
            }
        }
        return searchResult;
    }
};

if(typeof module !== 'undefined'){
    module.exports = Trie;
}
else if(typeof window !== 'undefined'){
    window._qqWechatEmotionParser.Trie = Trie;
}


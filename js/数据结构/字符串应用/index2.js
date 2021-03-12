// 支持一下两种操作的数据结构 
// void addWord(word)
// bool search(word) . a - z

// addWord()
// 添加过的 去 search 可以找到 返回 true, 找不到，返回 false；还支持正则表达式的查找

const WordDictionary = function() {
  this.words = {}  // map角色 // { 3: ['bad', 'dad]}
}

WordDictionary.prototype.addWord = function(word) {
  if (!this.words[word.length]) {  //word相同长度已经存在，只添加
    this.words[word.length].push(word)
  } else {
    this.words[word.length] = [word]
  }
}

WordDictionary.prototype.search = function(word) {
  if (!this.words[word.length]) {
    return false
  }
  const len = word.length
  if (!word.includes('.')) {
    return this.words[len].includes(word)
  }

  const reg = new RegExp(word) 
  this.words[len].some((item) => {
    return reg.test(item)
  })
}

let test = new WordDictionary()
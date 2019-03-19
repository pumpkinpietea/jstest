'use strict'

const countWords = inputText => {
  // 区切り文字を指定する カンマ(,) ピリオド(.) スペース( )
  const splitString = /[,.\s]/
  const inputArray = inputText.split(splitString)
  const words = new Map()
  for (const i of inputArray) {
    if (words.has(i)) {
      words.set(i, words.get(i) + 1) // 単語があればカウントアップ
    } else {
      words.set(i, 1) // 単語がなければ追加
    }
  }
  words.delete('') // 空文字を削除
  return words
}

const mapToObj = inputMap => {
  const obj = {}
  for (const [key, value] of inputMap) {
    obj[key] = value
  }
  return obj
}

const example = window.prompt('英語の文書をを入力してください。')
console.log(JSON.stringify(mapToObj(countWords(example).entries())))

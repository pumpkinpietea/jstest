'use strict'

const countWords = inputText => {
  // 区切り文字を指定する カンマ(,) ピリオド(.) スペース( )
  const splitString = /[,.\s]/
  const inputArray = inputText.split(splitString)
  inputArray.sort()
  const outputObject = new Map()
  let counter = 1
  let previousWord = ''
  for (const currentWord of inputArray) {
    if (previousWord === currentWord) {
      counter += 1 // １つ前の単語と一致したら、カウントアップ
    } else if (previousWord !== currentWord) {
      outputObject.set(previousWord, counter) // 1つ前の単語と一致しなかったら、1つ前の単語とカウンターを書き出し
      counter = 1 // counter reset
    }
    previousWord = currentWord // 1つ前の単語を置き換える
  }
  outputObject.set(previousWord, counter) // 最後の単語を書き出し
  outputObject.delete('') // 空文字を削除
  return outputObject
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

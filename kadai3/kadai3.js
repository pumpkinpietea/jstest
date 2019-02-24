'use strict'

const janken = () => {
  const computer = Math.floor(Math.random() * 3)
  const sentence = '「じゃんけん・・・」\n 0.グー 1.チョキ 2.パー'
  const userInput = parseInt(window.prompt(sentence))
  console.log(sentence)
  console.log(`${userInput}\n「ぽい！」\n＊コンピュータ： ${jankenText(computer)}\n＊あなた： ${jankenText(userInput)}`)
  if (computer === userInput) {
    console.log('「アイコでしょ！」')
    janken()
  } else if (
    // userInputが勝つ組み合わせ
    (computer === 0 && userInput === 2) ||
    (computer === 1 && userInput === 0) ||
    (computer === 2 && userInput === 1)
  ) {
    console.log('「あなたの勝ち！」')
  } else if (
    // computerが勝つ組み合わせ
    (computer === 0 && userInput === 1) ||
    (computer === 1 && userInput === 2) ||
    (computer === 2 && userInput === 0)
  ) {
    console.log('「コンピュータの勝ち！」')
  } else {
    console.log('error')
  }
}

const jankenText = n => {
  let outputText = ''
  switch (n) {
    case 0:
      outputText = 'グー'
      break
    case 1:
      outputText = 'チョキ'
      break
    case 2:
      outputText = 'パー'
      break
    default:
      outputText = 'error'
      break
  }
  return outputText
}

janken()

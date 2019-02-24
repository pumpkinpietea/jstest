'use strict'

const hiAndLow = () => {
  const targetNumber = Math.floor(Math.random() * 101)
  const question = '0-100で数字を当てて'
  // let inputNumber = parseInt(window.prompt(`${targetNumber}\n${question}`)) // test用
  let inputNumber = parseInt(window.prompt(question))
  console.log(question)
  let counter = 1
  let status = ''
  while (targetNumber !== inputNumber) {
    if (targetNumber > inputNumber) {
      status = 'もっと上'
    } else {
      status = 'もっと下'
    }
    console.log(inputNumber)
    console.log(status)
    counter += 1
    inputNumber = parseInt(window.prompt(`${inputNumber}より\n${status}の数字`))
  }
  console.log(inputNumber)
  console.log(`正解！・・・ ${counter}回目で当てました`)
}

hiAndLow()

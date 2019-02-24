'use strict'

const getGoalNumber = () => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const goalNumber = []
  // 目標の4桁数字の1桁目に、0以外の数字をセットする
  const firstNumber = 1 + Math.floor(Math.random() * 9)
  goalNumber.push(numbers[firstNumber])
  // 1桁目に使った数字を削除する
  numbers.splice(firstNumber, 1)
  // 2桁目から4桁目をセットする
  for (let i = 0; i < 3; i++) {
    const n = Math.floor(Math.random() * numbers.length)
    goalNumber.push(numbers[n])
    numbers.splice(n, 1)
  }
  return goalNumber
}

const hitAndBlow = () => {
  const computerNumber = getGoalNumber()
  const question = '4桁の数字は？'
  let inputNumber = window.prompt(question).split('')
  console.log(question)
  let counter = 1
  while (true) {
    console.log(inputNumber.join(''))
    let hitCount = 0
    let blowCount = 0
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (parseInt(inputNumber[i]) === computerNumber[j] && i === j) {
          hitCount += 1
        } else if (parseInt(inputNumber[i]) === computerNumber[j]) {
          blowCount += 1
        }
      }
    }
    if (hitCount === 4) {
      break
    }
    const missMeessage = `外れ： ${hitCount}Hits, ${blowCount}Blow\n4桁の数字は？`
    console.log(missMeessage)
    counter += 1
    // inputNumber = window.prompt(`${computerNumber}\n${missMeessage}`).split('') // test用
    inputNumber = window.prompt(missMeessage).split('')
  }
  console.log(`${counter}回で正解！`)
}

hitAndBlow()

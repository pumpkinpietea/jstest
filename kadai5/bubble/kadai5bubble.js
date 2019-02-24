'use strict'

const arrayCal = arr => {
  const inclease = bubbleSort(arr, arr.length)
  const declease = []
  let sumNumber = 0
  for (const i of arr) {
    declease.unshift(i)
    sumNumber += i
  }
  const outputText = `合計: ${sumNumber}
平均: ${Math.round((sumNumber / arr.length) * 10) / 10}
最大値: ${inclease[arr.length - 1]}
最小値: ${inclease[0]}
小さい順: ${inclease}
大きい順: ${declease}`
  return outputText
}

const bubbleSort = (numbers, arrLength) => {
  for (let i = 0; i < arrLength - 1; i++) {
    for (let j = arrLength - 1; j > i; j--) {
      if (numbers[j - 1] > numbers[j]) {
        const temp = numbers[j - 1]
        numbers[j - 1] = numbers[j]
        numbers[j] = temp
      }
    }
  }
  return numbers
}

const example = [20, 31, 42, 13, 5, 38]
// const example = [20, 2, 34, 4, 5, 6234, 6, 5, 3, 5, 6]
console.log(arrayCal(example))

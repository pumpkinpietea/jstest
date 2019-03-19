'use strict'

const arrayCal = arr => {
  const inclease = quickSort(arr, 0, arr.length - 1)
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

const quickSort = (numbers, left, right) => {
  const leftHold = left
  const rightHold = right
  let pivot = numbers[left]
  while (left < right) {
    while (numbers[right] >= pivot && left < right) {
      right--
    }
    if (left !== right) {
      numbers[left] = numbers[right]
      left++
    }
    while (numbers[left] <= pivot && left < right) {
      left++
    }
    if (left !== right) {
      numbers[right] = numbers[left]
      right--
    }
  }
  numbers[left] = pivot
  pivot = left
  left = leftHold
  right = rightHold
  if (left < pivot) {
    quickSort(numbers, left, pivot - 1)
  }
  if (right > pivot) {
    quickSort(numbers, pivot + 1, right)
  }
  return numbers
}

const example = [20, 31, 42, 13, 5, 38]
// const example = [20, 3, 4, 5, 6, 7, 8, 9, 123, 345]
console.log(arrayCal(example))

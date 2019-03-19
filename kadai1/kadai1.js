'use strict'

const fizzbuzz = num => {
  const outputArray = []
  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      outputArray.push('FizzBuzz')
    } else if (i % 3 === 0) {
      outputArray.push('Fizz')
    } else if (i % 5 === 0) {
      outputArray.push('Buzz')
    } else {
      outputArray.push(i)
    }
  }
  return outputArray
}

const example = parseInt(window.prompt('数字を入力してください。'))
console.log(fizzbuzz(example).toString())

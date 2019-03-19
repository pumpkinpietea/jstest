'use strict'

const toUry = inputText => {
  const outputJson = JSON.stringify(hash, changeFoo)
  return outputJson
}

const changeFoo = (key, value) => {
  if (key === 'text') {
    return value.replace(/foo/g, 'uryyyy!!')
  }
  return value
}

const hash = {
  main: {
    first: { text: 'foobar' },
    second: { text: 'fizzbuzz', child: { text: 'foobar' } },
  },
  sub: {
    first: { text: 'fizzbuzz', child: { text: 'foobar' } },
    second: {
      third: { text: 'barfoo', child: { text: 'foobar' } },
      forth: { child: { text: 'jit_foo_foo' } },
    },
  },
  text: 'foofava',
}

console.log(toUry(hash))

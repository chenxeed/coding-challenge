/**
 * Multiply two integer and return as string, to allow calculating big number
 * @param {int} a first number
 * @param {int} b second number
 */
function multiply(a,b) {
  const arrA = `${a}`.split('').reverse()
  const arrB = `${b}`.split('').reverse()
  const ans = []

  /*
    The basic idea here is, to multiply each value one by one, with this example concept:
    123 * 123 = 15129
    loop each digit and multiply them
    3*3 + 20*3 + 100*3 + 3*20 + 20*20 + 100*20 + 3*100 + 20*100 + 100*100

    With this basic idea, we can divide each result of calculation as an array, and then
    combine it to become a string in the end.
  */
  arrA.forEach((x, ix) => {
    arrB.forEach((y, iy) => {
      const idx = ix + iy
      const multiply = `${x * y}`
      distributeAnswer(ans, idx)
      if (multiply.length > 1) {
        ans[idx] = (ans[idx ] || 0) + parseInt(multiply[1])
        ans[idx+1] = (ans[idx+1] || 0) + parseInt(multiply[0])
      } else {
        ans[idx] = (ans[idx] || 0) + parseInt(multiply[0])
      }
      distributeAnswer(ans, idx)
    })
  })
  return ans.reverse().join('')
}

console.assert(parseInt(multiply(5,5)) === 5*5, 'wrong simple multiply result!')
console.assert(parseInt(multiply(123,123)) === 123*123, 'wrong advance multiply result!')
console.assert(parseInt(multiply(12345678912345555555,123456789123455555555)) === 12345678912345555555 * 123456789123455555555, 'wrong big number multiply result!')

/**
 * A recursive function to check the selected index of the array must be below 9.
 * If the selected value is 10 or above, the digit must be distributed to the next index
 * Ex, if the index is 1:
 * - [5, 15] => [5, 5, 1]
 * - [5, 64] => [5, 4, 6]
 * 
 * @param {*} ans the array of the answer
 * @param {*} idx the index of the array
 */
function distributeAnswer(ans, idx) {
  if (ans[idx] > 9) {
    const stringAns = `${ans[idx]}`
    ans[idx] = parseInt(stringAns[1])
    ans[idx+1] = (ans[idx+1] || 0) + parseInt(stringAns[0])
    return distributeAnswer(ans, idx+1)
  } else return ans
}

console.assert(distributeAnswer([5, 15], 1).join() === '5,5,1', 'wrong value!')
console.assert(distributeAnswer([5, 64], 1).join() === '5,4,6', 'wrong value!')
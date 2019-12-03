/**
You are given a positive integer N which represents the number of steps in a staircase. You can either climb 1 or 2 steps at a time. Write a function that returns the number of unique ways to climb the stairs.

def staircase(n):
# fill this in

print staircase(4)
# 5
print staircase(5)
# 8

Can you find a solution in O(n) time?
*/

function staircase(steps) {
  // generate an array of 1 step based on the steps given
  var step = '1'
  var stairSteps = step.repeat(steps)
  // save the unique array ways here
  var uniqueSteps = [stairSteps]
  // run recursive to find the possible merge of each step into 2 steps
  const recursiveScan = function (uniqueStep, start) {
    for (var i = start; i < steps; i++) {
      if (i < (uniqueStep.length - 1)) {
        const newSteps = uniqueStep.substr(0, i) + '2' + uniqueStep.substr(i + 2)
        uniqueSteps.push(newSteps)
        recursiveScan(newSteps, i+1)
      }
    }
  }
  recursiveScan(stairSteps, 0)
  return uniqueSteps.length
}

console.assert(staircase(4) === 5)
console.assert(staircase(5) === 8)
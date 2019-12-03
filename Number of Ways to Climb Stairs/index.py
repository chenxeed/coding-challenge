## You are given a positive integer N which represents the number of steps in a staircase. You can either climb 1 or 2 steps at a time. Write a function that returns the number of unique ways to climb the stairs.

def recursiveScan (steps, start, uniqueWays):
  stepsLength = len(steps)
  for i in range(start, stepsLength):
    if i < stepsLength - 1:
      newSteps = steps[0:i] + '2' + steps[i+2:]
      uniqueWays.append(newSteps)
      recursiveScan(newSteps, i+1, uniqueWays)
  return uniqueWays

def staircase(n):
# fill this in
  stairSteps = '1'*n
  uniqueWays = [stairSteps]
  uniqueWays = recursiveScan(stairSteps, 0, uniqueWays)
  return len(uniqueWays)


print staircase(4)
# 5
print staircase(5)
# 8

## Can you find a solution in O(n) time?
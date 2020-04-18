/**
 * Filter the path given to be as short as possible
 * @param {string} filePath 
 */
function shortestPath(filePath) {
  // return null if path is invalid
  if (typeof filePath !== 'string') { return null }

  const filteredPath = []

  // split the paths to validate each path
  filePath.split('/').forEach((path) => {
    if (path === '.') {
      // can simply ignore '.' path
      return
    } else if (path === '..' && filteredPath[filteredPath.length - 1] !== '..') {
      // on given path '..', validate to either eliminate the last path is a valid folder, or already empty
      filteredPath.length ? filteredPath.pop() : filteredPath.push(path)
    } else {
      filteredPath.push(path)
    }
  })

  const shorterPath = filteredPath.join('/')

  return shorterPath
}

console.assert(shortestPath('/Users/Joma/Documents/../Desktop/./../') === '/Users/Joma/', 'invalid path output')
console.assert(shortestPath('../home/chenxeed/./../.././../bin/') === '../../bin/', 'invalid path output')
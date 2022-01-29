module.exports = function check(str, bracketsConfig) {
  let bracketsArray = str.split('');

  for (let pair of bracketsConfig) {
    if (bracketsArray[0] === pair[1] || bracketsArray.slice(-1) === pair[0]) {
      return false;
    }

    const openCount = bracketsArray.filter(elem => elem === pair[0]).length;
    const closerCount = bracketsArray.filter(elem => elem === pair[1]).length;

    if (openCount != closerCount) {
      return false;
    }
  }

  return true;
}
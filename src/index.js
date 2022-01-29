function checkPair(str, bracketsConfig) {
  // функция проверки наличия пар скобок

  const pairs = bracketsConfig.map(pair => pair.join(''));
  let hasPair = false;

  for (let pair of pairs) {
    if (str.includes(pair)) {
      hasPair = true;
    }
  }
  return hasPair;
}


module.exports = function check(str, bracketsConfig) {

  while (checkPair(str, bracketsConfig)) {
    for (let pair of bracketsConfig) {


      // если скобки представлены одинаковым символом
      if (pair[0] === pair[1]) {

        // если количество открывающих и закрывающих скобок неодинаково
        if (str.split('').filter(elem => elem === pair[0]).length % 2 !== 0) {
          return false;
        }

        // если строка начинается с закрывающей или заканчивается 
        // открывающей скобкой 
      } else if (str[0] === pair[1] || str[str.length - 1] === pair[0]) {
        return false;
      }
  
      const currentPair = pair.join('');
  
      // удаляем из строки пары открывающей и закрывающей скобки
      while (str.includes(currentPair)) {
        str = str.split(currentPair).join('');
      }
    }
  }

  return (str.length === 0) ? true : false;
}

const wordSearch = (letters, word) => {
  if (letters.length === 0) return false;

  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  
  const numRows = letters.length;
  const numCols = letters[0].length;
    
  for (let col = 0; col < numCols; col++) {
    let verticalJoin = '';
    for (let row = 0; row < numRows; row++) {
      verticalJoin += letters[row][col];
    }
    if (verticalJoin.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;
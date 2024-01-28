const splitArrayIntoChunks = require('./splitArrayIntoChuncks');

function getItems(rows, columns) {
  const items = [];
  
  for (i = 1; i <= rows * columns; i++) {
    items.push(i);
  }
  
  return items;
}

function reverseEvenArrayChunks(table) {
  const reversed = table.map((column, index) => {
    if(index%2 !== 0) {
      // prevent original array mutation
      return column.slice().reverse();
    }
    return column;
  })
  return reversed.flat();
}

function formatChunksToTable(chunks, rows, column) {
  const result = []
  for (j = 0; j < rows; j++) {
    const itemRow = []
    for (i = 0; i < column; i++) {
      const index = i * rows + j;
      itemRow.push(chunks[index])
    }
    result.push(itemRow)
  }
  return result;
}

function generateTable(rows, columns) {
  const items = getItems(rows, columns);
  const chunks = splitArrayIntoChunks(items, rows); 
  const chunksReversed = reverseEvenArrayChunks(chunks)
  return formatChunksToTable(chunksReversed, rows, columns)
}

module.exports = generateTable;
function processTransactions(transactions) {
  if (transactions === undefined) {
    throw new Error("Undefined collection of transactions");
  }

  // transfer input into an object {'product1':number, 'product2':number}
  let txCount = {};
  transactions.forEach((transaction) => {
    txCount[transaction]
      ? (txCount[transaction] += 1)
      : (txCount[transaction] = 1);
  });

  txCount = sortByAmountThenName(txCount);

  // Place them back in array for returning
  return Object.keys(txCount).map((key) => `${key} ${txCount[key]}`);
}

function sortByAmountThenName(txCount) {
  const sortedTxCount = {};
  Object.keys(txCount)
    .sort()
    .sort((a, b) => {
      return txCount[b] - txCount[a];
    })
    .forEach((key) => {
      sortedTxCount[key] = txCount[key];
    });

  return sortedTxCount;
}

module.exports = processTransactions;

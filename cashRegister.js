function checkCashRegister(price, cash, cid) {
  const currencyUnits = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100],
  ];

  let change = cash - price;
  let totalCid = 0;
  for (let i = 0; i < cid.length; i++) {
    totalCid += cid[i][1];
  }
  totalCid = parseFloat(totalCid.toFixed(2)); // Avoiding floating point precision issues

  if (change > totalCid) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (change === totalCid) {
    return { status: "CLOSED", change: cid };
  } else {
    let changeArr = [];
    for (let i = currencyUnits.length - 1; i >= 0; i--) {
      const currencyName = currencyUnits[i][0];
      const currencyValue = currencyUnits[i][1];
      const availableInCid = cid[i][1];
      const maxUse = Math.floor(availableInCid / currencyValue);

      if (change >= currencyValue) {
        const neededAmount =
          Math.min(maxUse, Math.floor(change / currencyValue)) * currencyValue;
        if (neededAmount > 0) {
          changeArr.push([currencyName, neededAmount]);
          change = parseFloat((change - neededAmount).toFixed(2));
        }
      }
    }

    if (change === 0) {
      return { status: "OPEN", change: changeArr };
    } else {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
  }
}

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);

import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';


// Money Format function
function moneyformatter(num){
    let p = num.toFixed(2).split(".");
  return (
    " ₹ " +
    p[0]
      .split("")
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
      }, "") +
    "." +
    p[1]
  );
}

const Balance = () => {
 const {transactions} = useContext(GlobalContext);
 const amounts = transactions.map((transaction) => transaction.amount);

 const total = amounts.reduce((acc, item) => (acc += item), 0);

    return (
        <div>
            <h1>Balance</h1>
            <h3>{moneyformatter(total)}</h3>
        </div>
    )
}

export default Balance

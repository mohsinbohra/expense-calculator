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


const Transaction = ({transaction}) => {
const {deleteTransaction} = useContext(GlobalContext)
    const sign = transaction.amount < 0 ? "-" : "+";
    return (
        <div>
            <li className={transaction.amount < 0 ? "minus" : "plus"}>
                {transaction.text} <span>
                    {sign} {moneyformatter(transaction.amount)}
                </span>
                <button 
                className="delete-btn"
                onClick={()=>deleteTransaction(transaction.id)}>x</button>
            </li>

        </div>
    )
}

export default Transaction

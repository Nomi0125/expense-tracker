import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction'

export const TransactionHistory = () => {
    const {transactions} = useContext(GlobalContext)
    console.log("transaction",transactions)
    
    return (
        <div>
            <h3>
                Transaction History
            </h3>
            <ul className="list">
               {transactions.map(transaction => <Transaction key={transaction.id} transaction={transaction} />)}
               
            </ul>
        </div>
    )
}
import React from "react";
import s from './TransactionItem.module.css'

const TransactionItem = ( {id, amount, currency, type} ) => (
    <tr key={id}>
        <td className={s.type}>{type}</td>
        <td className={s.amount}>{amount}</td>
        <td className={s.currency}>{currency}</td>
    </tr>
)

export default TransactionItem


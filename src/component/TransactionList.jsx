 import React, {useContext} from 'react'
 import { GlobalContext } from '../context/GlobalState';
 import Transaction from './Transaction';
 
 const TransactionList = () => {


  const {transaction} = useContext(GlobalContext);
  // console.log(context);
   return (
     <div>
        <ul className="list">

          {transaction.map((trans) => {
            return (
             <Transaction key={trans.id}  transaction={trans}/>
            )
          })}
       
      </ul>

     </div>
   )
 }
 
 export default TransactionList
import React from 'react'
import { useDispatch } from 'react-redux'
import {bindActionCreators} from 'redux'
import { actionCreators } from './state/index'
import { useSelector } from 'react-redux'


/* FIRST WAY OF IMPLEMENTATION */
// const Shop = () => {
//     const dispatch = useDispatch()
//   return (
//     <div>
//         <h2>Deposit/Withdraw Money</h2>
//         <button className="btn btn-primary" onClick={()=> dispatch(actionCreators.withdrawMoney(100))}> - </button>
//         Update Balance
//         <button className="btn btn-primary" onClick={()=> dispatch(actionCreators.depositMoney(100))}> + </button>
//     </div>
//   )
// }

/* SECOND WAY OF IMPLEMENTATION */
// const Shop = () => {
//     const dispatch = useDispatch()
//     const balance = useSelector(state => state.amount)
//     const actions = bindActionCreators(actionCreators, dispatch)
   
//   return (
//     <div>
//         <h2>Deposit/Withdraw Money</h2>
//         <button className="btn btn-primary" onClick={()=> actions.withdrawMoney(100)}> - </button>
//         Update Balance {balance}
//         <button className="btn btn-primary" onClick={()=> actions.depositMoney(100)}> + </button>
//     </div>
//   )
// }

/* THIRD WAY OF IMPLEMENTATION */
const Shop = () => {
    const dispatch = useDispatch()
    const {withdrawMoney,depositMoney} = bindActionCreators(actionCreators, dispatch)
  return (
    <div>
        <h2>Deposit/Withdraw Money</h2>
        <button className="btn btn-primary" onClick={()=> withdrawMoney(100)}> - </button>
        Update Balance
        <button className="btn btn-primary" onClick={()=> depositMoney(100)}> + </button>
    </div>
  )
}

export default Shop
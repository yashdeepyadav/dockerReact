import {useSelector} from 'react-redux'

function Cart(){

  const count = useSelector(state => state.count)
  return(
    <>
    <h2>Tou have {count} BoTs in your cart.</h2>
    </>
  )
}

export default Cart
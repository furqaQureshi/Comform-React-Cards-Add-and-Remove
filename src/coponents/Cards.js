import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../redux/index'
import { useSelector } from 'react-redux';

const Cards = () => {
  const cart = useSelector((state) => state.bank.card);
  const dispatch = useDispatch();
  const { withdrawMoney } = bindActionCreators(actionCreators, dispatch);
  const [data, setData] = useState([...cart])
  useEffect(() => {
    let arr = [...cart]
    function compare( a, b ) {
      if ( a.id < b.id ){
        return -1;
      }
      if ( a.id > b.id ){
        return 1;
      }
      return 0;
    }
    arr.sort( compare );
    setData(arr)
    // console.log(arr)
  }, [cart])

  function Datasave(obj) {
    // console.log(obj)
       fetch("https://6216617e7428a1d2a36601ba.mockapi.io/orders", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
         body: JSON.stringify(obj)
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
       console.log(data)
    });
    }
return (
  <div className="container">
    {cart.length > 0 ? <>
      <div className="container">
        <div className="row text-center py-5 mt-4">
          <div className="col py-4 mt-4">
            Price
          </div>
          <div className="col  py-4 mt-4">
            Name
          </div>
          <div className="col  py-4 mt-4">
            INC/DEC
          </div>
          <div className="col  py-4 mt-4">
            Total Price
          </div>
          <div className="col  py-4 mt-4">
            Remove
          </div>
          <div className="col py-4 mt-4">
            Order
          </div>
        </div>
      </div>
      <div className="container">
        {data.map((product, key) => (
          <div className="row text-center py-5" key={key}>
            <div className="col" key={product.id}>
              <img src={product.image} height='150px' width='90%' />
            </div>
            <div className="col">
              <h6>{product.price}</h6>
            </div>
            <div className="col">
              <button className='btn btn-warning m-3' onClick={() => dispatch({ type: "INC", payload: product })}>+</button>
             {(product.qty ? product.qty : 1)}
              <button className='btn btn-danger m-3' onClick={() => dispatch({ type: "DEC", payload: product })} >-</button>
            </div>
            <div className="col">
                <h3>{product.qty && (product.price * product.qty)}</h3>
            </div>
            <div className="col">
              <button className='btn btn-info' onClick={() => withdrawMoney(product.id)}>Remove</button>
            </div>
            <div className="col">
              <a to='/order' className='btn btn-success' onClick={() => Datasave({products: [{id: product.id, qty: product.qty}], totalAmount: product.price})}>Order</a>
            </div>
          </div>
        ))}
      </div>
    </> : <h1 className='mt-5 py-4 text-center'>Your cart is empty</h1>}
  </div>
)
}
export default Cards;
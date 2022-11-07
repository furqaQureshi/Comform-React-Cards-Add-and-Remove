import React, { useEffect, useState } from 'react'

const Check = () => {
  const [products, setProducts] = useState([]);
  const getUser = async () => {
    const response = await fetch('https://6216617e7428a1d2a36601ba.mockapi.io/orders');
    setProducts(await response.json());
  }
  useEffect(() => {
    getUser()
  }, [])
  return (
    <>
       <div className="container">
    <div className="row text-center py-5 mt-4">
    <div className="col">
    Created Id
    </div>
    <div className="col">
     Product Id
    </div>
    <div className="col">
      Quantity
    </div>
    <div className="col" >
      TotalAmount
    </div>
  </div>
</div>
<div className="container">
    {products.map(product => (
    <div className="row text-center py-5" >
        <div className="col" key={product.id}>
        {product.createdAt}
        </div>
        <div className="col">
        {product.id}
        </div>
        <div className="col">
        {product.qty}
        </div>
        <div className="col">
        {product.totalAmount}
        </div>
          </div>
 ))}  
          </div>
    </>
  )
}

export default Check
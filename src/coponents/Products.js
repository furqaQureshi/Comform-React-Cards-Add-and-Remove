import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../redux/index';

  const Products = () => {
  const item = useSelector((state) => state.bank.card);
  const dispatch = useDispatch();
  const { depositMoney } = bindActionCreators(actionCreators, dispatch);
  const [users, setUsers] = useState([]);
  const getUser = async () => {
  const response = await fetch('https://6216617e7428a1d2a36601ba.mockapi.io/products');
    setUsers(await response.json());
  }
  useEffect(() => {
    getUser()
  }, [])

  return(
      <div className="container">
        <div className="row py-4 mt-4">
          {users.map((item, index) =>{
          const { image, name, description } = item;
  return (
    <div className="card" style={{ width: "18rem" }} key={index}>
      <img src={image} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn hover" style={{backgroundColor: '#00b2ca'}} onClick={() =>
          depositMoney(item)}>Add</a>
</div>
</div>
   
  )
          })}
        </div>
      </div>
  )
}

export default Products;

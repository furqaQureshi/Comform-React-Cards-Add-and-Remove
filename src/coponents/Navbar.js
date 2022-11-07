import React from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'


const Navbar = () => {
  const state = useSelector((state) => state.bank.card);
    return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Real Time</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-4 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" to='/' href="#">Home</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#" to='slider'>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#" to='card'>Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#" to='order'>Orders</Link>
        </li>
        <li className="nav-item">
          {/* <Link className="nav-link" href="#" to='form'>Contact</Link> */}
        </li>
      </ul>
    </div>
    <Link to='/products' className='btn' style={{backgroundColor: '#90E0EF',}}>Card ({(state.length)})</Link>
  </div>
</nav>
    </div>
  );
}

export default Navbar;

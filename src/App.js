import React from 'react';
import './index.css'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Cards from './coponents/Cards';
import Navbar from './coponents/Navbar';
import Products from './coponents/Products';
import Slider from './coponents/Slider';
import Form from './coponents/Form';
import Check from './coponents/Check';
function App() {
  return (
    <>
      <Router>
      <Navbar/>
        <Switch>
          <Route  exact path='/slider' component={Slider}/>
          <Route exact path='/card' component={Products} />
          <Route exact path='/order' component={Check} />
          <Route exact path='/products' component={Cards}/>
          <Route exact path='/form' component={Form}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;

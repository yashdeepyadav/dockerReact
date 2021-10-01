import { Route, Switch, Redirect } from 'react-router-dom';

import './style.css';
import Home from './components/home';
import Cart from './components/cart';
import Header from './components/Header';
import Product from './components/products';
import Botabout from './components/botabout';
import Container from './components/container';

function App() {
  return (
    <>
      <Header />

      <Container>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/home' />
          </Route>

          <Route path='/home' exact>
            <Home />
          </Route>
          <Route path='/bots' exact>
            <Product />
          </Route>
          <Route path='/cart' >
            <Cart />
          </Route>
          <Route path='/bots-details/:id' >
            <Botabout />
          </Route>
        </Switch>
      </Container>



    </>

  );
}

export default App;

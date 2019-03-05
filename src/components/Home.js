import React from 'react';
import Cart from '@/components/total/cart/index.js';
import Me from '@/components/me/index.js';
import Pintuan from '@/components/total/pintuan/index.js';
import Shouye from '@/components/total/shouye/index.js';
import Footer from '@/components/total/index.js';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';
class Home extends React.Component {
  render () {
    return (
      <HashRouter>
        <div>
        <Switch>
          <Route path="/pintuan" component={Pintuan}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/me" component={Me}></Route>
          <Route path="/" component={Shouye} exact></Route>
          <Redirect to="/"></Redirect>
        </Switch>
        <Footer /> 
        </div>
      </HashRouter>
    )
  }
}
export default Home;
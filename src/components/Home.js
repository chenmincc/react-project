import React from 'react';
import Cart from '@/components/total/cart/index.js';
import Me from '@/components/me/index.js';
import Pintuan from '@/components/total/pintuan/index.js';
import Shouye from '@/components/total/shouye/index.js';
import Footer from '@/components/total/index.js';
import { Route, Redirect, Switch} from 'react-router-dom';
class Home extends React.Component {
  render () {
    return (
        <div>
        <Switch>
          <Route path="/pintuan" component={Pintuan}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/me" component={Me}></Route>
          <Route path="/home" component={Shouye} ></Route>
<<<<<<< HEAD
          <Redirect from="/" to="/home/center/today"></Redirect>
          <Route path="/" component={Shouye}></Route>
=======
          <Redirect from='/' to="/home/center/today"></Redirect>
          {/* <Route path="/" component={Shouye} ></Route> */}
>>>>>>> min

        </Switch>
        <Footer />
        </div>
    )
  }
}
export default Home;

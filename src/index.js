import React from 'react';
import ReactDOM from 'react-dom';
import '@/style/reset.less';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from '@/components/Home.js';
<<<<<<< HEAD
import Footer from '@/components/total/index.js';
=======
>>>>>>> min
import Particular from '@/components/details/Particular.js';
import Register from '@/components/register/index.js';
import Login from '@/components/login/index.js';

class App extends React.Component {
  render () {
    return (
      <HashRouter>
<<<<<<< HEAD
        <>
         <Switch>
=======
        <Switch>
>>>>>>> min
          <Route path="/detail/:itemId" component={Particular}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/login" component={Login}></Route>          
          <Route path="/" component={Home}></Route>
        </Switch>
        <Footer />
        </>
      </HashRouter>
    )
  }
}
ReactDOM.render(<App />,document.getElementById('root'));

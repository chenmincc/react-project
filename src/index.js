import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, NavLink, Switch } from 'react-router-dom';

import Login from '@/components/login/index.js';
import Register from '@/components/register/index.js'


class App extends React.Component {
  fn1 () {
    console.log('akv' )
    }

  render() {
      return (
      <BrowserRouter>
      <div>
        {/* <Register></Register>
        <div>
          <NavLink to="Register">Register</NavLink>
        </div>
        <div>
          <NavLink to="Login">Login</NavLink>
          <button onClick={this.fn1}>按钮</button>
        </div> */}
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
      </div>
      </BrowserRouter>
      )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));



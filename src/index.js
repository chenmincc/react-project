import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, NavLink, Switch } from 'react-router-dom';

import Login from '@/components/login/index.js';
import Register from '@/components/register/index.js'


class App extends React.Component {
  render() {

      return (
      <BrowserRouter>
      <switch>
        {/* <div>
          <NavLink to="Register">Register</NavLink>
        </div>
        <div>
          <NavLink to="Login">Login</NavLink>
        </div> */}
        <Route path="/login/" component={Login}></Route>
        <Route path="/register/" component={Register}></Route>
      </switch>
      </BrowserRouter>
      )

  }
}

// const Login = () => {
//   return (
//     <div>
//       登录页
//     </div>
//   )
// }

// const Register = () => {
//   return (
//     <din>注册页</din>
//   )
// }

ReactDOM.render(<App />, document.getElementById('root'));



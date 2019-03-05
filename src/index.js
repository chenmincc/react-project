import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css'/;
// import App from './App'
// import Login from '@/components/login/index.js';
import Register from '@/components/register/index.js'


class App extends React.Component {
  render () {
    return (
      <div>
        <Register></Register>
        {/* <Login></Login> */}
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'));



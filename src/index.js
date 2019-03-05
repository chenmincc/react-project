import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css'/;
// import App from './App'
import Login from '@/components/login/index.js';


class App extends React.Component {
  render () {
    return (
      <div>
        <Login></Login>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'));



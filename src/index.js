import React from 'react';
import ReactDOM from 'react-dom';
import '@/style/reset.less';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from '@/components/Home.js';  
import Particular from '@/components/details/Particular.js';
import Register from '@/components/register/index.js';

class App extends React.Component {
  render () {
    return (
      <HashRouter>
        <Switch>
          <Route path="/detail" component={Particular}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </HashRouter>
    )
  }
}
ReactDOM.render(<App />,document.getElementById('root'));
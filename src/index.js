import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Shouye from '@/components/total/shouye/index.js'


class App extends Component {
  render () {
    return (
      <div>
        <Shouye></Shouye>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)





import React from 'react';
import ReactDOM from 'react-dom';
import Tuan from '@/components/total/pintuan/index';

class App extends React.Component {
  render() {
    return (
      <div>
        <Tuan></Tuan>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));



import React from 'react';
import ReactDOM from 'react-dom';
import Body from 'components/Body.jsx';

class App extends React.component {
  constructor(props) {
    super(props);
  }


  render() {
    return ( 
      <div id='app'>
        <div className="title">Who's that Pokemon?</div>
        <Body />
        <div>copyright disclaimer here</div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
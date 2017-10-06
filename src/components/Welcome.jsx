import React from 'react';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='welcome'>
        Welcome to a game of Who's That Pokemon! See how many Pokemon you can correctly guess
        based on their silhouettes. Click below to get started.
      </div>
    )
  }

}
export default Welcome;
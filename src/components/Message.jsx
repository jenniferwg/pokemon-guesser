import React from 'react';

class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='message'>
        { this.props.gameWon ? (
            <div>
              <div>Wow, you were the very best!</div>
              <div>Ready for another round, Pokemon Master?</div>
              <img src={'/assets/won/won-' + Math.ceil(Math.random() * 4) + '.png'} />
            </div>
          ) : (
            <div>
              Welcome back to the Indigo League! See how many of the first 151 Pokemon 
              you can correctly guess in a row just by looking at their silhouettes.
              DEV NOTE: if you're testing, the current pokemon can be seen in console.
            </div>
          )
        } 
      </div>
    )
  }

}
export default Message;
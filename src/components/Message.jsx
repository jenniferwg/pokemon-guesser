import React from 'react';

class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='message'>
        { this.props.gameWon ? (
            <span>
              Wow, you're a real Pokemon master! Ready for another round?
            </span>
          ) : (
            <span>
              Welcome to a game of Who's That Pokemon! See how many Pokemon you can correctly guess
              based on their silhouettes.

              DEV NOTE: if you're testing, the current pokemon can be seen in console.
            </span>
          )
        } 
      </div>
    )
  }

}
export default Message;
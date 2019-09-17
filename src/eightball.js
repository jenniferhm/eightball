import React from 'react';

class Eightball extends React.Component {
    static defaultProps = {messages: [
      { msg: "It is certain.", color: "green" },
      { msg: "It is decidedly so.", color: "green" },
      { msg: "Without a doubt.", color: "green" },
      { msg: "Yes - definitely.", color: "green" },
      { msg: "You may rely on it.", color: "green" },
      { msg: "As I see it, yes.", color: "green" },
      { msg: "Most likely.", color: "green" },
      { msg: "Outlook good.", color: "green" },
      { msg: "Yes.", color: "green" },
      { msg: "Signs point to yes.", color: "goldenrod" },
      { msg: "Reply hazy, try again.", color: "goldenrod" },
      { msg: "Ask again later.", color: "goldenrod" },
      { msg: "Better not tell you now.", color: "goldenrod" },
      { msg: "Cannot predict now.", color: "goldenrod" },
      { msg: "Concentrate and ask again.", color: "goldenrod" },
      { msg: "Don't count on it.", color: "red" },
      { msg: "My reply is no.", color: "red" },
      { msg: "My sources say no.", color: "red" },
      { msg: "Outlook not so good.", color: "red" },
      { msg: "Very doubtful.", color: "red" },
    ]}
  
  constructor(props) {
    super(props);
    this.state = {msg: "Think of a Question", color: "black"};
    this.handleClick = this.handleClick.bind(this);
  }

  getRandom() {
    return this.props.messages[Math.floor(Math.random() * this.props.messages.length)];
  }

  handleClick(evt) {
    let random = this.getRandom();
    this.setState({msg: random.msg, color: random.color});
  }

  render() {
    return (
      <button style={{backgroundColor: this.state.color}} onClick={this.handleClick}>
        {this.state.msg}
      </button>
    )
  }
}


export default Eightball;
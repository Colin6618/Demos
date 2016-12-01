import React from 'react';

export default class TodoItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.todo;
  }

  handleClick(e) {
    var _st = JSON.parse(JSON.stringify(this.state));
    
    _st.isEnded = e.target.checked;
    this.setState(_st);
  }

  render() {
    return (
      <li>
        <input type='checkbox' onClick={this.handleClick.bind(this)} />
        <span style={{
          textDecoration: this.state.isEnded ? 'line-through':'inherit'
        }}>{this.state.text}</span></li>
    )
  }

}

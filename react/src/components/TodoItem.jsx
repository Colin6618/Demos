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
      <li onClick={this.props.onClick}  style={{
        textDecoration: this.props.completed ? 'line-through':'inherit'
      }}>
        {this.props.text}
      </li>
    )
  }

}

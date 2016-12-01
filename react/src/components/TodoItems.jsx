import React from 'react';
import TodoItem from './TodoItem';

class TodoItems extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props;
  }

  render() {
    var itemStyle = {
      textDecoration: 'line-through'
    }
    return (
      <div className="TodoItems">
        <ol>
          {this.state.data.map((item, index) => {
            return (
              <TodoItem todo={item} key={index} />
            )
            }
          )}
        </ol>
      </div>
    )
  }

}

export default TodoItems;

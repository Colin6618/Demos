import React from 'react';
import TodoItem from './TodoItem';

class TodoItems extends React.Component {

  constructor(props) {
    super(props);
  }

  render(e) {

    return (
      <div className="TodoItems">
        <ol>
          {this.props.todos.map((item, index) => {
            return (<TodoItem {...item} onClick={() => this.props.onTodoClick(index)} key={index} />)
          })}
        </ol>
      </div>
    )
  }

}

export default TodoItems;

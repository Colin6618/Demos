require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import TodoItems from './TodoItems';
import {addTodo, toggleTodo} from '../actions/actions.js'
import { connect } from 'react-redux'


let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {

  constructor(props) {
    super(props);
    // this.state = {itemData: []};
    // this.state.itemData.push({text: 'todo example 1', isEnded: false, isArchived: false});
    // this.state.itemData.push({text: 'todo example 2', isEnded: false, isArchived: false});
  }

  render() {
    const { dispatch } = this.props;

    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator"/>
        <div className="notice">Please edit the input to add todos</div>
        <input className="input" type="text" ref='inputAdd' placeholder="Add things" onKeyPress={(e)=>{
            if(e.key === 'Enter') {
              dispatch(addTodo(e.target.value));
              e.target.value = '';
            }
          }} />
        <TodoItems className="itemsWrapper"  todos={this.props.todos} onTodoClick={(index)=>{dispatch(toggleTodo(index))}} />
      </div>
    );
  }
}

// AppComponent.defaultProps = {
//   todos: []
// };
// connect api: http://cn.redux.js.org/docs/react-redux/api.html
// 不使用connect，AppComponent的props里就没有dispatch进来
export default connect(function(state){
  return {
    todos: state
  }
})(AppComponent);

// export default AppComponent;

require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import TodoItems from './TodoItems';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {itemData: []};
    this.state.itemData.push({text: 'todo example 1', isEnded: false, isArchived: false});
    this.state.itemData.push({text: 'todo example 2', isEnded: false, isArchived: false});
  }

  render() {

    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator"/>
        <div className="notice">Please edit the input to add todos</div>
        <input className="input" type="text" placeholder="Add things" onKeyPress={(e)=>{
            if(e.key === 'Enter') {
              this.state.itemData.push({text: e.target.value, isEnded: false, isArchived: false})
              this.setState({itemData: this.state.itemData});
              e.target.value = '';
            }
          }} />
        <TodoItems className="itemsWrapper"  data={this.state.itemData} />
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;

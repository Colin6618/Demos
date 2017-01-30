import todos from '../reducer/reducer.js'
import {
  createStore
} from 'redux'

import {
  addTodo
} from '../actions/actions'

export default function() {
  var _state = [{
    text: 'todo example 1',
    isEnded: false,
    isArchived: false
  }, {
    text: 'todo example 2',
    isEnded: false,
    isArchived: false
  }];

  var store = createStore(todos, _state);


  // 打印初始状态
  console.log(store.getState())

  // 每次 state 更新时，打印日志
  // 注意 subscribe() 返回一个函数用来注销监听器
  let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
  )

  // 发起一系列 action
  store.dispatch(addTodo('Learn about actions'))
  store.dispatch(addTodo('new todo1'))
    // store.dispatch(addTodo('Learn about store'))
    // store.dispatch(toggleTodo(0))
    // store.dispatch(toggleTodo(1))
    // store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

  // 停止监听 state 更新
  unsubscribe();

}

import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

class TodoList extends Component {
  render(){
    const todoList = this.props.todoList.map(todo => <TodoItem key={todo.id} todo={todo} />)
    return(
      <ul className='todo-list'>
        {todoList}
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  todoList: state.todoReducer.list
})

// const mapDispatchToProps = dispatch => ({
  
// })

export default connect(mapStateToProps)(TodoList)
import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoTextInput from './TodoTextInput';
import { addTodo } from '../state/todo.actions';

class TodoHeader extends Component {
  render(){
    return(
      <div className='header'>
        <h1>todos</h1>
        <TodoTextInput newTodo placeholder='What needs to be done?' onSave={text => text.length !==0 ? this.props.addTodo(text) : alert('Please dont let input empty')} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text))
})

export default connect(null, mapDispatchToProps)(TodoHeader)
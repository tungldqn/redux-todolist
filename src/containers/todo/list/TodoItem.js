import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import TodoTextInput from '../header/TodoTextInput';
import { completeTodo, deleteTodo } from '../state/todo.actions';

class TodoItem extends Component {
  constructor(){
    super();
    this.state = {
      editing: false
    }
  }
  handleSave = (id, text) => {
    if(text.length === 0){
      this.props.deleteTodo(id)
    } else {
      this.props.editTodo(id, text)
    }
  }
  handleDoubleClick = () => {
    this.setState({
      editing: true
    })
  }
  render(){
    let { todo, completeTodo, deleteTodo } = this.props;
    let element;
    if(this.state.editing){
      element = (
        <TodoTextInput text={todo.name} editing={this.state.editing} onSave={this.handleSave} />
      )
    } else {
      element = (
        <div className='view'>
          <input type='checkbox' className='toggle' checked={todo.completed} onChange={() => completeTodo(todo.id)} />
          <label onDoubleClick={this.handleDoubleClick}>{todo.name}</label>
          <button className='destroy' onClick={() => deleteTodo(todo.id)} />
        </div>
      )
    }
    return(
      <li className={classnames({
        completed: todo.completed,
        edititng: this.state.editing
      })}>
        {element}
      </li>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  completeTodo: id => dispatch(completeTodo(id)),
  deleteTodo: id => dispatch(deleteTodo(id))
})

export default connect(null, mapDispatchToProps)(TodoItem)
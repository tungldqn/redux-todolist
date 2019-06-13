import React, { Component } from 'react';
import classnames from 'classnames';

class TodoTextInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: this.props.text || ''
    }
  }
  handleKeyPress = event => {
    let text = event.target.value.trim();
    if(event.which === 13){
      this.props.onSave(text)
      if(this.props.newTodo){
        this.setState({
          text: ''
        })
      }
    }
  }
  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }
  handleBlur = event => {
    if(!this.props.newTodo){
      this.props.onSave(event.target.value)
    }
  }
  render(){
    return(
      <input className={
        classnames({
          edit: this.props.editing,
          'new-todo': this.props.newTodo
        })} 
        type='text'
        placeholder={this.props.placeholder}
        autoFocus={true}
        value={this.state.text}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyPress}
      />
    )
  }
}

export default TodoTextInput
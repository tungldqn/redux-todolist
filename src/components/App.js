import React, { Component } from 'react';
import TodoHeader from '../containers/todo/header';
import TodoMain from '../containers/todo/main';

class App extends Component {
  render(){
    return(
      <div>
        <TodoHeader />
        <TodoMain />
      </div>
    )
  }
}

export default App

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeAllTodos } from '../state/todo.actions';
import TodoList from '../list';
import Footer from '../footer';

class TodoMain extends Component {
  render(){
    let { todosCount, completedCount } = this.props;
    return(
      <section className='main'>
        {
          !!todosCount &&
          <span>
            <input
              className="toggle-all"
              type="checkbox"
              checked={completedCount === todosCount}
              readOnly
            />
            <label onClick={this.props.completeAllTodos} />
          </span>
        }
        <TodoList />
        {
          !!todosCount &&
          <Footer
            completedCount={completedCount}
            activeCount={todosCount - completedCount}
          />
        }
      </section>
    )
  }
}

const mapStateToProps = state => ({
  todosCount: state.todoReducer.list.length,
  completedCount: state.todoReducer.list.reduce((count, todo) =>
    todo.completed ? count + 1 : count,
    0
  )
})

const mapDispatchToProps = dispatch => ({
  completeAllTodos: () => dispatch(completeAllTodos())
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoMain)
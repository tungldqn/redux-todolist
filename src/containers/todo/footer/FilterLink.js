import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { setFilter } from '../state/todo.actions';

class FilterLink extends Component {
  render(){
    return(
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a
        className={classnames({ selected: this.props.active })}
        style={{ cursor: 'pointer' }}
        onClick={() => this.props.setFilter(this.props.filterName)}
      >
        {this.props.children}
      </a>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  active: state.todoReducer.filter === ownProps.filterName
})

const mapDispatchToProps = dispatch => ({
  setFilter: filterName => dispatch(setFilter(filterName))
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink)
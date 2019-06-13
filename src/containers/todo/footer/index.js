import React, { Component } from 'react';
import { connect } from 'react-redux';
import FilterLink from './FilterLink';

class index extends Component {
  render(){
    const filterName = ['All', 'Active', 'Completed'];
    let { activeCount, completedCount } = this.props;
    let itemWord = activeCount === 1 ? 'item' : 'items';
    return(
      <footer className='footer'>
        <span className="todo-count">
          <strong>{activeCount || 'No'}</strong> {itemWord} left
        </span>
        <ul className='filters'>
          {filterName.map(item => (
            <li key={item}>
              <FilterLink filterName={item}>{item}</FilterLink>
            </li>
          ))}
        </ul>
      </footer>
    )
  }
}

export default index
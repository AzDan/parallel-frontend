import React from 'react';
import './styles/filters.scss';

function Filters() {
  return (
    <div className='filters'>
      
      <select>
        <option>op1</option>
        <option>op2</option>
        <option>op3</option>
      </select>

      <select>
        <option>time1</option>
        <option>time2</option>
        <option>time3</option>
      </select>

      <a href="#">Clear Filters</a>

    </div>
  )
}

export default Filters
import React, { useState } from 'react';

export const TodosFilter = ({ onFilter }) => {
  const [filter, setFilter] = useState('all');

  return (
    <ul className="filters">
      <li>
        <a
          href="#/"
          className={filter === 'all' ? 'selected' : ''}
          onClick={() => {
            onFilter('all');
            setFilter('all');
          }}
        >
          All
        </a>
      </li>

      <li>
        <a
          href="#/active"
          className={filter === 'active' ? 'selected' : ''}
          onClick={() => {
            onFilter('active');
            setFilter('active');
          }}
        >
          Active
        </a>
      </li>

      <li>
        <a
          href="#/completed"
          className={filter === 'completed' ? 'selected' : ''}
          onClick={() => {
            onFilter('completed');
            setFilter('completed');
          }}
        >
          Completed
        </a>
      </li>
    </ul>
  );
};

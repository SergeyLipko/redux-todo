import React from 'react';
import FilterLink from '../../containers/FilterLink';
import './style.sass';

const Header = () => (
  <div className="header-wrapper">
    <FilterLink filter="SHOW_ALL">All</FilterLink>
    <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
    <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
  </div>
);

export default Header;
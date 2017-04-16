import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './style.sass';

const Link = ({ active, children, onClick }) => {
  return (
    <div className="link-wrapper">
      <a href="#"
         className={classNames(
           'navigationLink',
           {'linkIsActive': active}
         )}
         onClick={e => {
           e.preventDefault();
           onClick()
         }}
      >
        {children}
      </a>
    </div>
  );
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link;
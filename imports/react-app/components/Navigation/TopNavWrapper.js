import React, { PropTypes } from 'react';

const TopNavWrapper = ({ children }) => {
  return(
    <ul className="nav-wrapper">
      {children}
    </ul>
  );
};


TopNavWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};


export default TopNavWrapper;

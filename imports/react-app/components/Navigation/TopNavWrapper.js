import React, { PropTypes } from 'react';

const TopNavWrapper = ({ children }) => {
  return(
    <div className="nav-wrapper">
      {children}
    </div>
  );
};


TopNavWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};


export default TopNavWrapper;

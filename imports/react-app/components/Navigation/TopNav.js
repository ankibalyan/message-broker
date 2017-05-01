import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

const TopNav = ({ children }) => {
  return(
    <div>
      <li><Link to="/">Home</Link></li>
    </div>
  );
};

export default TopNav;

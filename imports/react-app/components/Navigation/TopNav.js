import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

const TopNav = ({ children }) => {
  return(
    <div className="nav-brand">
      <Link to="/">Message Broker</Link>
    </div>
  );
};

export default TopNav;

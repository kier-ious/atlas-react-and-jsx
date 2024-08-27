import React from 'react';
import PropTypes from 'prop-types';


function Section({ title, children }) {
  return (
    <div className="section">
      <h1>{title}</h1>
      {children}
    </div>
  )
}

// Enforcer of propTypes
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;

import React from 'react';
import PropTypes from 'prop-types';
import openIcon from '../assets/open.svg'


function OpenLink({ link }) {
  return (
    <a href={link}>
      <img src={openIcon} alt="Open Link" />
    </a>
  )
}

OpenLink.propTypes = {
  link: PropTypes.string.isRequired,
};

export default OpenLink;

import React from 'react';
import PropTypes from 'prop-types';
import copyIcon from '../assets/copy.svg'


function CopyLink({ link }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(link);
    alert('Link copiied to clipboard!');
  };

  return (
    <img
      src={copyIcon}
      alt="Copy Link"
      className="copy"
      onClick={copyToClipboard}
      style={{ cursor: 'pointer' }}
    />
  );
}

CopyLink.propTypes = {
  link: PropTypes.string.isRequired,
};

export default CopyLink;
